/**
 * EpiConecta API Client
 * Camada de abstração entre o frontend e o backend REST.
 * Todas as chamadas passam por aqui — nunca acesse fetch() diretamente.
 */
const EpiAPI = (() => {
  const getApiBase = () => {
    const loc = window.location;
    
    // Check if we are running locally (localhost, 127.0.0.1, local IP or empty hostname)
    const isLocalIP = /^192\.168\./.test(loc.hostname) ||
                      /^10\./.test(loc.hostname) ||
                      /^172\.(1[6-9]|2[0-9]|3[0-1])\./.test(loc.hostname) ||
                      loc.hostname.endsWith('.local');
                      
    const isLocal = loc.hostname === 'localhost' || loc.hostname === '127.0.0.1' || !loc.hostname || isLocalIP;

    // If we are hosted on Render or Vercel, the backend serves the frontend from the same origin
    if (loc.hostname.endsWith('.onrender.com') || loc.hostname.endsWith('.vercel.app')) {
      return `${loc.origin}/api/v1`;
    }

    // If it's local dev, and we are using a development port (like 5500 for Live Server)
    if (isLocal && loc.port && loc.port !== '3001') {
      return `${loc.protocol}//${loc.hostname}:3001/api/v1`;
    }
    
    // Fallback for local files opened directly
    if (!loc.hostname) {
      return 'http://localhost:3001/api/v1';
    }

    // For other production platforms (e.g. Vercel, Netlify) connecting to external API
    if (window.EPI_CONFIG && window.EPI_CONFIG.API_URL) {
      return window.EPI_CONFIG.API_URL;
    }

    return `${loc.origin}/api/v1`;
  };

  const BASE = getApiBase();

  // ── Token Management ─────────────────────────────────
  function getAccessToken()    { return sessionStorage.getItem('epi_access_token'); }
  function getRefreshToken()   { return localStorage.getItem('epi_refresh_token'); }
  function setTokens(access, refresh) {
    sessionStorage.setItem('epi_access_token', access);
    if (refresh) localStorage.setItem('epi_refresh_token', refresh);
  }
  function clearTokens() {
    sessionStorage.removeItem('epi_access_token');
    localStorage.removeItem('epi_refresh_token');
  }

  // ── Core Fetch ────────────────────────────────────────
  async function _request(path, options = {}, retry = true) {
    const headers = {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    };

    const token = getAccessToken();
    if (token) headers['Authorization'] = `Bearer ${token}`;

    let res = await fetch(`${BASE}${path}`, { ...options, headers });

    // Auto-refresh se token expirado
    if (res.status === 401 && retry) {
      const refresh = getRefreshToken();
      if (refresh) {
        try {
          const refRes = await fetch(`${BASE}/auth/refresh`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ refreshToken: refresh }),
          });
          if (refRes.ok) {
            const { accessToken } = await refRes.json();
            setTokens(accessToken, null);
            return _request(path, options, false); // retry once
          }
        } catch {}
      }
      clearTokens();
      window.dispatchEvent(new CustomEvent('epi:session-expired'));
      throw new Error('Sessão expirada. Faça login novamente.');
    }

    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      throw new Error(body.error || `Erro HTTP ${res.status}`);
    }

    return res.status === 204 ? null : res.json();
  }

  // ── Auth ──────────────────────────────────────────────
  async function login(cpf, password) {
    const data = await _request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ cpf, password }),
    }, false);
    setTokens(data.accessToken, data.refreshToken);
    return data.user;
  }

  async function logout() {
    try { await _request('/auth/logout', { method: 'POST' }); } catch {}
    clearTokens();
  }

  async function getMe() {
    return _request('/auth/me');
  }

  function isLoggedIn() {
    return !!getAccessToken();
  }

  // ── Patients ──────────────────────────────────────────
  async function searchPatients(query) {
    const q = query ? query.trim() : '';
    return _request(`/patients?q=${encodeURIComponent(q)}`);
  }

  async function getPatient(id) {
    return _request(`/patients/${id}`);
  }

  // ── Notifications ─────────────────────────────────────
  async function createNotification(data) {
    return _request('/notifications', { method: 'POST', body: JSON.stringify(data) });
  }

  async function updateNotification(id, data) {
    return _request(`/notifications/${id}`, { method: 'PUT', body: JSON.stringify(data) });
  }

  async function getMyNotifications() {
    return _request('/notifications/mine');
  }

  async function getStats() {
    return _request('/notifications/stats');
  }

  // ── Health Check ──────────────────────────────────────
  async function checkServerHealth() {
    try {
      const r = await fetch(`${BASE.replace('/v1', '')}/health`);
      return r.ok;
    } catch {
      return false;
    }
  }

  return {
    login, logout, getMe, isLoggedIn,
    searchPatients, getPatient,
    createNotification, updateNotification, getMyNotifications, getStats,
    checkServerHealth,
  };
})();

window.EpiAPI = EpiAPI;
