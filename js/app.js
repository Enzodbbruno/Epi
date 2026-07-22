// Módulos do aplicativo EpiConecta

// Dados de exemplo para o aplicativo
const sampleData = {
  user: {
    id: 'user-001',
    name: 'Visitante',
    role: 'Convidado',
    healthCenter: 'Sem lotação',
    avatar: 'JS',
    notificationsEnabled: true,
    emailNotifications: true,
    darkMode: false
  },

  notifications: [
    {
      id: 'notif-001',
      type: 'alert',
      title: 'Alerta: Aumento de casos de Dengue',
      message: 'Foram registrados 15 novos casos de dengue na região de Marabá. Fique atento aos sintomas e medidas preventivas.',
      date: '2025-12-18T10:30:00',
      read: false,
      priority: 'high',
      category: 'dengue',
      action: {
        type: 'openLink',
        url: 'https://www.saude.gov.br/saude-de-a-z/dengue'
      }
    },
    {
      id: 'notif-002',
      type: 'news',
      title: 'Atualização do Protocolo de Tratamento',
      message: 'O protocolo de tratamento para COVID-19 foi atualizado. Por favor, revise as novas diretrizes.',
      date: '2025-12-17T14:15:00',
      read: false,
      priority: 'medium',
      category: 'covid',
      action: {
        type: 'openDocument',
        documentId: 'doc-001'
      }
    },
    {
      id: 'notif-003',
      type: 'update',
      title: 'Nova versão do aplicativo disponível',
      message: 'Atualize para a versão 2.0.0 para ter acesso a novos recursos e melhorias de desempenho.',
      date: '2025-12-16T09:45:00',
      read: true,
      priority: 'low',
      action: {
        type: 'updateApp',
        version: '2.0.0'
      }
    }
  ],

  chatRooms: [
    {
      id: 'room-001',
      name: 'Dengue - Região Marabá',
      type: 'group',
      members: 12,
      lastMessage: 'Precisamos agendar uma reunião para discutir as novas estratégias de combate ao mosquito.',
      lastMessageTime: '2025-12-18T10:45:00',
      unreadCount: 2,
      isMuted: false,
      avatar: 'DS',
      color: '#e53935'
    },
    {
      id: 'room-002',
      name: 'Estratégias de Campo',
      type: 'group',
      members: 8,
      lastMessage: 'O relatório de visitas domiciliares já está disponível para consulta.',
      lastMessageTime: '2025-12-18T09:30:00',
      unreadCount: 0,
      isMuted: true,
      avatar: 'EC',
      color: '#43a047'
    },
    {
      id: 'room-003',
      name: 'Condutas Clínicas',
      type: 'group',
      members: 5,
      lastMessage: 'Alguém tem experiência com o novo protocolo de tratamento?',
      lastMessageTime: '2025-12-17T16:20:00',
      unreadCount: 5,
      isMuted: false,
      avatar: 'CC',
      color: '#1e88e5'
    },
    {
      id: 'room-004',
      name: 'Campanhas Ativas',
      type: 'channel',
      members: 42,
      lastMessage: 'Campanha de vacinação contra a gripe será antecipada este ano.',
      lastMessageTime: '2025-12-17T14:10:00',
      unreadCount: 0,
      isMuted: false,
      avatar: 'CA',
      color: '#fb8c00'
    }
  ],

  messages: {
    'room-001': [
      {
        id: 'msg-001',
        senderId: 'user-002',
        senderName: 'Maria Oliveira',
        content: 'Bom dia pessoal, vi que tivemos um aumento nos casos de dengue na região.',
        timestamp: '2025-12-18T10:15:00',
        read: true
      },
      {
        id: 'msg-002',
        senderId: 'user-001',
        senderName: 'João Silva',
        content: 'Sim, precisamos intensificar as ações de prevenção.',
        timestamp: '2025-12-18T10:20:00',
        read: true
      },
      {
        id: 'msg-003',
        senderId: 'user-003',
        senderName: 'Carlos Santos',
        content: 'Precisamos agendar uma reunião para discutir as novas estratégias de combate ao mosquito.',
        timestamp: '2025-12-18T10:45:00',
        read: false
      }
    ],
    'room-002': [
      {
        id: 'msg-201',
        senderId: 'user-004',
        senderName: 'Ana Pereira',
        content: 'Equipe, o relatório consolidado das visitas já está na pasta da rede.',
        timestamp: '2025-12-18T09:00:00',
        read: true
      },
      {
        id: 'msg-202',
        senderId: 'user-001',
        senderName: 'João Silva',
        content: 'Excelente, vou analisar para o boletim semanal.',
        timestamp: '2025-12-18T09:15:00',
        read: true
      }
    ],
    'room-003': [
      {
        id: 'msg-301',
        senderId: 'user-005',
        senderName: 'Dr. Roberto',
        content: 'Alguém tem experiência com o novo protocolo de tratamento para Chikungunya?',
        timestamp: '2025-12-17T16:20:00',
        read: false
      }
    ],
    'room-004': [
      {
        id: 'msg-401',
        senderId: 'user-006',
        senderName: 'Coordenação',
        content: 'Lembrete: Campanha de vacinação contra a gripe será antecipada.',
        timestamp: '2025-12-17T14:10:00',
        read: true
      }
    ]
  },

  documents: [
    {
      id: 'doc-001',
      title: 'Protocolo de Tratamento - COVID-19',
      type: 'protocol',
      category: 'covid',
      size: '2.4 MB',
      format: 'PDF',
      uploadDate: '2025-12-15',
      downloadCount: 42,
      tags: ['covid', 'tratamento', 'protocolo'],
      url: '/documents/protocolo-covid-19.pdf',
      thumbnail: '/thumbnails/pdf-icon.png'
    },
    {
      id: 'doc-002',
      title: 'Guia de Prevenção - Dengue',
      type: 'manual',
      category: 'dengue',
      size: '1.8 MB',
      format: 'PDF',
      uploadDate: '2025-12-10',
      downloadCount: 87,
      tags: ['dengue', 'prevenção', 'guia'],
      url: '/documents/guia-prevencao-dengue.pdf',
      thumbnail: '/thumbnails/pdf-icon.png'
    },
    {
      id: 'doc-003',
      title: 'Nota Técnica - Vacinação Infantil',
      type: 'technical-note',
      category: 'vaccination',
      size: '3.1 MB',
      format: 'PDF',
      uploadDate: '2025-12-05',
      downloadCount: 56,
      tags: ['vacinação', 'infantil', 'calendário'],
      url: '/documents/nota-tecnica-vacinacao.pdf',
      thumbnail: '/thumbnails/pdf-icon.png'
    },
    {
      id: 'doc-004',
      title: 'Relatório Anual de Atividades 2025',
      type: 'report',
      category: 'general',
      size: '5.2 MB',
      format: 'PDF',
      uploadDate: '2025-11-30',
      downloadCount: 23,
      tags: ['relatório', 'anual', 'atividades'],
      url: '/documents/relatorio-anual-2025.pdf',
      thumbnail: '/thumbnails/pdf-icon.png'
    }
  ],

  alerts: [
    {
      id: 'alert-001',
      type: 'warning',
      title: 'Alto Índice de Infestação - Aedes aegypti',
      description: 'Bairro Centro registrou índice de 4,2% de infestação do mosquito Aedes aegypti.',
      date: '2025-12-18T08:30:00',
      priority: 'high',
      category: 'dengue',
      action: {
        type: 'viewDetails',
        target: 'alert-details-001'
      }
    },
    {
      id: 'alert-002',
      type: 'info',
      title: 'Atualização do Calendário de Vacinação',
      description: 'Novas datas para a campanha de vacinação contra a gripe foram divulgadas.',
      date: '2025-12-17T14:20:00',
      priority: 'medium',
      category: 'vaccination',
      action: {
        type: 'openDocument',
        documentId: 'doc-002'
      }
    }
  ]
};

// Módulo de Autenticação
const AuthModule = {
  currentUser: null,
  pendingCallback: null,

  async init() {
    this.setupListeners();
    
    // Auto-restore session from backend if token exists
    if (typeof EpiAPI !== 'undefined' && EpiAPI.isLoggedIn()) {
      try {
        const user = await EpiAPI.getMe();
        if (user) {
          this.currentUser = {
            id: user.id,
            name: user.name,
            role: user.role === 'admin' ? 'Administrador' : (user.role === 'medico' ? 'Médico' : 'Profissional de Saúde'),
            healthCenter: user.healthCenter || user.health_center
          };
          sampleData.user.name = this.currentUser.name;
          this.updateLoginUI(true);
        }
      } catch (err) {
        console.warn('[EpiConecta] Falha ao restaurar sessão:', err.message);
        EpiAPI.clearTokens();
        this.updateLoginUI(false);
      }
    }

    // Ouvinte para expiração de sessão do API client
    window.addEventListener('epi:session-expired', () => {
      this.currentUser = null;
      sampleData.user.name = 'Visitante';
      this.updateLoginUI(false);
      App.showScreen('dashboard');
    });
  },

  setupListeners() {
    const btnLogin = document.getElementById('btn-do-login');
    const btnCancel = document.getElementById('btn-cancel-login');
    const headerBtn = document.getElementById('header-login-btn');
    const btnTogglePassword = document.getElementById('btn-toggle-password');
    
    if (btnTogglePassword) {
      btnTogglePassword.addEventListener('click', () => {
        const passInput = document.getElementById('login-password');
        const icon = document.getElementById('icon-toggle-password');
        if (passInput) {
          const isPassword = passInput.type === 'password';
          passInput.type = isPassword ? 'text' : 'password';
          if (icon) {
            icon.className = isPassword ? 'far fa-eye-slash' : 'far fa-eye';
          }
        }
      });
    }

    if (btnLogin) {
       btnLogin.addEventListener('click', () => this.handleLogin());
    }
    if (btnCancel) {
       btnCancel.addEventListener('click', () => {
          const modal = document.getElementById('login-modal');
          if (modal) modal.classList.remove('show');
          App.showScreen('dashboard');
       });
    }
    if (headerBtn) {
        headerBtn.addEventListener('click', async () => {
            if (this.currentUser) {
                // Logout logic via API
                if (typeof EpiAPI !== 'undefined') {
                    try {
                        await EpiAPI.logout();
                    } catch (err) {
                        console.warn('Erro ao efetuar logout no backend:', err.message);
                    }
                }
                this.currentUser = null;
                sampleData.user.name = 'Visitante';
                this.updateLoginUI(false);
                if(App && App.showToast) App.showToast('Sessão encerrada.', 'info');
                App.showScreen('dashboard');
            } else {
                const modal = document.getElementById('login-modal');
                if (modal) {
                    modal.style.display = 'flex';
                    modal.classList.add('show');
                }
            }
        });
    }

    const homeBtn = document.getElementById('home-action-login');
    if (homeBtn) {
        homeBtn.addEventListener('click', () => {
            const modal = document.getElementById('login-modal');
            if (modal) {
                modal.style.display = 'flex';
                modal.classList.add('show');
            }
        });
    }
  },

  requireAuth(callback) {
      if (this.currentUser) {
          callback();
      } else {
          const modal = document.getElementById('login-modal');
          if (modal) {
             modal.style.display = 'flex';
             modal.style.zIndex = '999999';
             modal.classList.add('show');
          }
          this.pendingCallback = callback;
      }
  },

  async handleLogin() {
    const cpfInput = document.getElementById('login-name');
    const passInput = document.getElementById('login-password');
    const btnLogin = document.getElementById('btn-do-login');
    if (!cpfInput || !passInput) return;

    const cpf = cpfInput.value.trim();
    const password = passInput.value.trim();

    if (!cpf || !password) {
        if(App && App.showToast) App.showToast('Preencha o CPF e a senha.', 'error');
        return;
    }

    // Validação de formato de CPF
    const cleanCpf = cpf.replace(/\D/g, '');
    if (cleanCpf.length !== 11) {
        if(App && App.showToast) App.showToast('Por favor, insira um CPF válido contendo 11 dígitos.', 'error');
        return;
    }

    // Visual feedback (loading)
    if (btnLogin) {
        btnLogin.disabled = true;
        btnLogin.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Entrando...';
    }
    
    try {
        if (typeof EpiAPI === 'undefined') {
            throw new Error('Módulo de API não inicializado.');
        }

        const user = await EpiAPI.login(cpf, password);
        
        this.currentUser = {
             id: user.id,
             name: user.name,
             role: user.role === 'admin' ? 'Administrador' : (user.role === 'medico' ? 'Médico' : 'Profissional de Saúde'),
             healthCenter: user.healthCenter || user.health_center
         };
        
        sampleData.user.name = this.currentUser.name;
        
        const modal = document.getElementById('login-modal');
        if (modal) modal.classList.remove('show');
        
        this.updateLoginUI(true);

        // Limpa campos
        cpfInput.value = '';
        passInput.value = '';

        if(App && App.showToast) App.showToast(`Bem-vindo(a), ${this.currentUser.name}!`, 'success');
        
        if (this.pendingCallback) {
            this.pendingCallback();
            this.pendingCallback = null;
        }
    } catch (err) {
        let msg = err.message || 'Falha ao autenticar.';
        
        // Tratamento detalhado de erros de conexão e de dados
        if (msg === 'Failed to fetch' || msg.includes('NetworkError') || msg.includes('TypeError')) {
            msg = 'O servidor do backend está offline! Certifique-se de iniciar o servidor executando "npm run dev" ou "npm start" na pasta "server" (porta 3001).';
        } else if (msg.includes('Credenciais inválidas') || msg.includes('inválidas') || msg.includes('401')) {
            msg = 'CPF ou senha incorretos! Por favor, verifique os seus dados de acesso.';
        }
        
        if(App && App.showToast) App.showToast(msg, 'error');
    } finally {
        if (btnLogin) {
            btnLogin.disabled = false;
            btnLogin.innerHTML = 'Entrar no Sistema';
        }
    }
  },

  updateLoginUI(isLoggedIn) {
    const headerName = document.querySelector('.user-info h3');
    const userNameEl = document.getElementById('user-name');
    const headerBtn = document.getElementById('header-login-btn');
    const homeBtn = document.getElementById('home-action-login');

    if (isLoggedIn && this.currentUser) {
        if (headerName) headerName.textContent = this.currentUser.name;
        if (userNameEl) userNameEl.textContent = this.currentUser.name;
        if (headerBtn) headerBtn.textContent = 'Sair';
        if (homeBtn) homeBtn.style.display = 'none';
    } else {
        if (headerName) headerName.textContent = 'Visitante';
        if (userNameEl) userNameEl.textContent = 'Visitante';
        if (headerBtn) headerBtn.textContent = 'Login';
        if (homeBtn) homeBtn.style.display = 'inline-flex';
    }

    // Refresh state-dependent modules upon login status change
    if (typeof PatientModule !== 'undefined' && typeof PatientModule.renderRecents === 'function') {
        PatientModule.renderRecents();
    }
    if (typeof window.triggerDashboardReload === 'function') {
        window.triggerDashboardReload();
    }
  }

};

// Módulo de Notificações
const NotificationsModule = {
  notifications: [],

  init() {
    this.notifications = [...sampleData.notifications];
    this.renderNotifications();
    this.setupEventListeners();
  },

  getUnreadCount() {
    return this.notifications.filter(notif => !notif.read).length;
  },

  markAsRead(notificationId) {
    const notification = this.notifications.find(n => n.id === notificationId);
    if (notification) {
      notification.read = true;
      this.updateNotificationBadge();
      this.renderNotifications();
    }
  },

  markAllAsRead() {
    this.notifications.forEach(notif => notif.read = true);
    this.updateNotificationBadge();
    this.renderNotifications();
  },

  filterByType(type) {
    if (type === 'all') return this.notifications;
    return this.notifications.filter(notif => notif.type === type);
  },

  updateNotificationBadge() {
    const badge = document.getElementById('notification-badge');
    if (!badge) return;

    const count = this.getUnreadCount();
    if (count > 0) {
      badge.textContent = count > 9 ? '9+' : count;
      badge.style.display = 'flex';
    } else {
      badge.style.display = 'none';
    }
  },

  renderNotifications(filter = 'all') {
    const container = document.getElementById('notifications-list');
    if (!container) return;

    const filtered = filter === 'all' ? this.notifications : this.filterByType(filter);

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <i class="fas fa-bell-slash"></i>
          <p>Nenhuma notificação encontrada</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(notif => `
      <div class="notification-item priority-${notif.priority || 'low'} ${notif.read ? '' : 'unread'}" data-id="${notif.id}">
        <div class="notification-icon">
          <i class="fas fa-${this.getNotificationIcon(notif.type)}"></i>
        </div>
        <div class="notification-content">
          <div class="notif-header" style="display:flex; justify-content:space-between;">
             <h4 class="notif-title">${notif.title}</h4>
             <span class="notif-badge">${this.formatDate(notif.date)}</span>
          </div>
          <p class="notif-message">${notif.message}</p>
          <div class="notif-meta">
             <span class="notif-badge" style="background:#e0e0e0;">${notif.category || 'Geral'}</span>
             ${notif.action ? `<span style="color:var(--primary-color); font-weight:500;">Toque para ver</span>` : ''}
          </div>
        </div>
        <div class="notification-actions">
          <button class="icon-button mark-as-read" data-id="${notif.id}" title="${notif.read ? 'Marcar como não lida' : 'Marcar como lida'}">
            <i class="${notif.read ? 'fas fa-check-circle' : 'far fa-circle'}" style="color: ${notif.read ? 'var(--secondary-color)' : 'var(--text-secondary)'}"></i>
          </button>
        </div>
      </div>
    `).join('');

    // Adiciona os event listeners
    document.querySelectorAll('.mark-as-read').forEach(button => {
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        const notificationId = button.dataset.id;
        this.markAsRead(notificationId);
      });
    });

    document.querySelectorAll('.notification-item').forEach(item => {
      item.addEventListener('click', () => {
        const notificationId = item.dataset.id;
        this.handleNotificationClick(notificationId);
      });
    });
  },

  getNotificationIcon(type) {
    const icons = {
      alert: 'exclamation-triangle',
      news: 'newspaper',
      update: 'sync-alt',
      default: 'bell'
    };

    return icons[type] || icons.default;
  },

  formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));

    if (diffInHours < 1) {
      const diffInMinutes = Math.floor((now - date) / (1000 * 60));
      return `Há ${diffInMinutes} min`;
    } else if (diffInHours < 24) {
      return `Há ${diffInHours} h`;
    } else if (diffInHours < 48) {
      return 'Ontem';
    } else {
      return date.toLocaleDateString('pt-BR');
    }
  },

  handleNotificationClick(notificationId) {
    const notification = this.notifications.find(n => n.id === notificationId);
    if (!notification) return;

    // Marca como lida ao clicar
    if (!notification.read) {
      this.markAsRead(notificationId);
    }

    // Executa a ação associada à notificação
    if (notification.action) {
      switch (notification.action.type) {
        case 'openLink':
          window.open(notification.action.url, '_blank');
          break;
        case 'openDocument':
          // Abre o documento correspondente
          const documentId = notification.action.documentId;
          this.openDocument(documentId);
          break;
        case 'updateApp':
          // Lógica para atualizar o aplicativo
          this.showUpdateModal(notification.action.version);
          break;
      }
    }
  },

  openDocument(documentId) {
    // Lógica para abrir o documento
    const document = sampleData.documents.find(doc => doc.id === documentId);
    if (document) {
      // Em um aplicativo real, isso abriria o visualizador de PDF
      this.showToast(`Abrindo documento: ${document.title}`, 'info');
      // window.open(document.url, '_blank');
    }
  },

  showUpdateModal(version) {
    // Lógica para mostrar o modal de atualização
    const modal = document.getElementById('confirmation-modal');
    const modalTitle = document.getElementById('confirmation-modal-title');
    const modalBody = document.getElementById('confirmation-modal-body');
    const confirmBtn = document.getElementById('confirm-action-btn');

    if (!modal || !modalTitle || !modalBody || !confirmBtn) return;

    modalTitle.textContent = 'Atualização Disponível';
    modalBody.innerHTML = `
      <p>Uma nova versão do aplicativo (${version}) está disponível. Deseja atualizar agora?</p>
      <p class="small">Recomendamos que você esteja conectado a uma rede Wi-Fi para realizar a atualização.</p>
    `;

    confirmBtn.textContent = 'Atualizar Agora';
    confirmBtn.onclick = () => {
      this.showToast('Iniciando atualização...', 'info');
      // Simula o processo de atualização
      setTimeout(() => {
        this.showToast('Aplicativo atualizado com sucesso!', 'success');
        this.closeModal('confirmation-modal');
      }, 2000);
    };

    this.openModal('confirmation-modal');
  },

  showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;

    document.body.appendChild(toast);

    // Mostra o toast
    setTimeout(() => {
      toast.classList.add('show');
    }, 100);

    // Remove o toast após 3 segundos
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        document.body.removeChild(toast);
      }, 300);
    }, 3000);
  },

  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('show');
      document.body.style.overflow = 'hidden';
    }
  },

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('show');
      document.body.style.overflow = '';
    }
  },

  setupEventListeners() {
    // Filtro de notificações
    const filterButtons = document.querySelectorAll('.filter-tag');
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        this.renderNotifications(filter);
      });
    });

    // Botão de alternar filtros
    const filterToggle = document.getElementById('filter-notifications');
    const filterPanel = document.getElementById('notification-filters');
    if (filterToggle && filterPanel) {
      filterToggle.addEventListener('click', () => {
        filterPanel.style.display = filterPanel.style.display === 'none' ? 'block' : 'none';
      });
    }

    // Fechar modais
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal') || e.target.classList.contains('close-button')) {
        const modal = e.target.closest('.modal');
        if (modal) {
          this.closeModal(modal.id);
        }
      }
    });

    // Botões de confirmação
    const closeNotificationBtn = document.getElementById('close-notification-btn');
    if (closeNotificationBtn) {
      closeNotificationBtn.addEventListener('click', () => {
        this.closeModal('notification-modal');
      });
    }

    const cancelConfirmationBtn = document.getElementById('cancel-confirmation-btn');
    if (cancelConfirmationBtn) {
      cancelConfirmationBtn.addEventListener('click', () => {
        this.closeModal('confirmation-modal');
      });
    }

    // Atualiza o badge de notificações ao carregar a página
    this.updateNotificationBadge();
  }
};

// Módulo de Chat
const ChatModule = {
  currentRoom: null,
  messages: {},

  init() {
    this.messages = { ...sampleData.messages };
    this.renderChatRooms();
    this.setupEventListeners();
  },

  renderChatRooms() {
    const container = document.getElementById('chat-rooms');
    if (!container) return;

    if (sampleData.chatRooms.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <i class="fas fa-comment-slash"></i>
          <p>Nenhuma conversa encontrada</p>
          <button class="btn btn-primary" id="start-new-chat">Iniciar nova conversa</button>
        </div>
      `;
      return;
    }

    container.innerHTML = sampleData.chatRooms.map(room => `
      <div class="chat-room" data-id="${room.id}">
        <div class="chat-avatar" style="background-color: ${room.color}">
          ${room.avatar}
        </div>
        <div class="chat-info">
          <h4 class="chat-name">${room.name}</h4>
          <p class="last-message">${room.lastMessage}</p>
        </div>
        <div class="chat-meta">
          <span class="message-time">${this.formatTime(room.lastMessageTime)}</span>
          ${room.unreadCount > 0 ? `<span class="unread-count">${room.unreadCount}</span>` : ''}
        </div>
      </div>
    `).join('');

    // Adiciona os event listeners para as salas de chat
    document.querySelectorAll('.chat-room').forEach(roomEl => {
      roomEl.addEventListener('click', () => {
        const roomId = roomEl.dataset.id;
        this.openChatRoom(roomId);
      });
    });
  },

  openChatRoom(roomId) {
    const room = sampleData.chatRooms.find(r => r.id === roomId);
    if (!room) return;

    this.currentRoom = room;

    // Esconde a lista de salas e mostra a conversa (APENAS MOBILE)
    const isMobile = window.innerWidth < 1024;

    // Elements references
    const roomsContainer = document.getElementById('chat-rooms');
    const messagesContainer = document.getElementById('chat-messages');
    const chatHeader = document.querySelector('.chat-header h3');

    // On mobile, we toggle visibility. On desktop, both are visible via CSS.
    if (isMobile) {
      if (roomsContainer) roomsContainer.style.display = 'none';
      if (messagesContainer) messagesContainer.style.display = 'block';
    } else {
      // Desktop: Ensure both are visible (resets any previous inline styles)
      if (roomsContainer) roomsContainer.style.display = 'block';
      if (messagesContainer) messagesContainer.style.display = 'flex';
    }

    if (chatHeader) chatHeader.textContent = room.name;

    // Renderiza as mensagens
    this.renderMessages(roomId);

    // Rola para a última mensagem
    this.scrollToBottom();
  },

  renderMessages(roomId) {
    const container = document.getElementById('messages-container');
    if (!container) return;

    const messages = this.messages[roomId] || [];

    if (messages.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <i class="fas fa-comment-alt"></i>
          <p>Nenhuma mensagem nesta conversa</p>
          <p class="small">Envie uma mensagem para começar a conversa</p>
        </div>
      `;
      return;
    }

    container.innerHTML = messages.map(msg => `
      <div class="message ${msg.senderId === 'user-001' ? 'sent' : 'received'}" data-id="${msg.id}">
        <div class="message-sender">
          <div class="sender-avatar">
            ${msg.senderName.split(' ').map(n => n[0]).join('').toUpperCase()}
          </div>
          <span class="sender-name">${msg.senderName}</span>
          <span class="message-time">${this.formatTime(msg.timestamp)}</span>
        </div>
        <div class="message-content">
          <p>${msg.content}</p>
        </div>
      </div>
    `).join('');
  },

  sendMessage(content) {
    if (!this.currentRoom || !content.trim()) return;

    const newMessage = {
      id: `msg-${Date.now()}`,
      senderId: 'user-001',
      senderName: sampleData.user.name,
      content: content.trim(),
      timestamp: new Date().toISOString(),
      read: false
    };

    // Add message to local history
    if (!this.messages[this.currentRoom.id]) {
      this.messages[this.currentRoom.id] = [];
    }

    this.messages[this.currentRoom.id].push(newMessage);

    // Update rooms list preview
    const room = sampleData.chatRooms.find(r => r.id === this.currentRoom.id);
    if (room) {
      room.lastMessage = content.length > 30 ? content.substring(0, 30) + '...' : content;
      room.lastMessageTime = newMessage.timestamp;
    }

    // Render and Scroll
    this.renderMessages(this.currentRoom.id);
    this.scrollToBottom();

    // SMART BOT LOGIC
    this.generateSmartResponse(content);
  },

  generateSmartResponse(userMessage) {
    const msg = userMessage.toLowerCase();
    let responseText = '';

    // Keyword Matching Logic
    if (msg.includes('dengue')) {
      responseText = 'Sobre a **Dengue**: O boletim atual indica alta na região de Marabá. Recomenda-se intensificar visitas domiciliares e verificação de focos de água parada. Protocolo: verifique febre alta, dor retroorbital e manchas vermelhas.';
    } else if (msg.includes('vacina') || msg.includes('campanha') || msg.includes('gripe')) {
      responseText = 'A **Campanha de Vacinação** (Influenza) foi antecipada para o dia 20/12. O público-alvo inicial são idosos e profissionais de saúde. Verifique o estoque na sua UBS.';
    } else if (msg.includes('zika') || msg.includes('microcefalia')) {
      responseText = 'Casos de **Zika** estão estáveis. Lembre-se de orientar gestantes sobre o uso de repelentes e roupas longas. Notificação compulsória imediata para suspeitas.';
    } else if (msg.includes('chikungunya') || msg.includes('dores')) {
      responseText = 'Para **Chikungunya**, a atenção principal é para dores articulares intensas. O manejo clínico envolve hidratação e analgésicos (evitar AINES em suspeita de dengue).';
    } else if (msg.includes('boletim') || msg.includes('relatório') || msg.includes('dados')) {
      responseText = 'O último **Boletim Epidemiológico** está disponível na Biblioteca Digital. Acesse a aba "Biblioteca" e busque por "Relatório Anual 2025".';
    } else if (msg.includes('olá') || msg.includes('bom dia') || msg.includes('boa tarde')) {
      responseText = 'Olá! Sou o assistente virtual do EpiConecta. Posso ajudar com informações sobre Dengue, Zika, Vacinação e Protocolos. O que você precisa?';
    } else {
      responseText = 'Recebi sua mensagem. Para informações específicas, tente citar palavras-chave como "Dengue", "Vacinação", "Protocolo" ou "Relatório".';
    }

    // Simulate typing delay
    setTimeout(() => {
      const botMessage = {
        id: `msg-${Date.now()}`,
        senderId: 'bot-001',
        senderName: 'Assistente EpiConecta',
        content: responseText,
        timestamp: new Date().toISOString(),
        read: false
      };

      this.messages[this.currentRoom.id].push(botMessage);
      this.renderMessages(this.currentRoom.id);
      this.scrollToBottom();
    }, 1500);
  },

  formatTime(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  },

  scrollToBottom() {
    const container = document.getElementById('messages-container');
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  },

  setupEventListeners() {
    // Envio de mensagem
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-message');

    const sendMessageHandler = () => {
      if (messageInput && messageInput.value.trim()) {
        this.sendMessage(messageInput.value);
        messageInput.value = '';
        messageInput.focus();
      }
    };

    if (sendButton) {
      sendButton.addEventListener('click', sendMessageHandler);
    }

    if (messageInput) {
      messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          sendMessageHandler();
        }
      });
    }

    // Voltar para a lista de salas
    const backToRooms = document.querySelector('.back-to-rooms');
    if (backToRooms) {
      backToRooms.addEventListener('click', () => {
        const roomsContainer = document.getElementById('chat-rooms');
        const messagesContainer = document.getElementById('chat-messages');

        if (roomsContainer) roomsContainer.style.display = 'block';
        if (messagesContainer) messagesContainer.style.display = 'none';

        // Atualiza a lista de salas para refletir as últimas mensagens
        this.renderChatRooms();
      });
    }

    // Novo chat
    const newChatButton = document.getElementById('new-chat');
    if (newChatButton) {
      newChatButton.addEventListener('click', () => {
        alert('Funcionalidade de novo chat será implementada em breve!');
      });
    }

    // Anexar arquivo
    const attachmentButton = document.querySelector('.attachment-button');
    if (attachmentButton) {
      attachmentButton.addEventListener('click', () => {
        alert('Funcionalidade de anexo será implementada em breve!');
      });
    }
  }
};

// Módulo da Biblioteca
const LibraryModule = {
  documents: [],

  init() {
    this.documents = [...sampleData.documents];
    this.renderDocuments();
    this.setupEventListeners();
  },

  renderDocuments(filter = { type: 'all', disease: 'all', search: '' }) {
    const container = document.getElementById('documents-list');
    if (!container) return;

    let filteredDocs = [...this.documents];

    // Aplica os filtros
    if (filter.type !== 'all') {
      filteredDocs = filteredDocs.filter(doc => doc.type === filter.type);
    }

    if (filter.disease !== 'all') {
      filteredDocs = filteredDocs.filter(doc =>
        doc.tags.some(tag => tag.toLowerCase() === filter.disease.toLowerCase())
      );
    }

    if (filter.search) {
      const searchTerm = filter.search.toLowerCase();
      filteredDocs = filteredDocs.filter(doc =>
        doc.title.toLowerCase().includes(searchTerm) ||
        doc.tags.some(tag => tag.toLowerCase().includes(searchTerm))
      );
    }

    if (filteredDocs.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <i class="fas fa-folder-open"></i>
          <p>Nenhum documento encontrado</p>
          <p class="small">Tente ajustar os filtros de busca</p>
        </div>
      `;
      return;
    }

    // Use gallery layout
    container.className = 'documents-gallery';

    container.innerHTML = filteredDocs.map(doc => {
      // Create a nice CSS paper preview based on format
      let badgeClass = 'badge-link';
      let formatDisplay = 'LINK';
      if(doc.format.toLowerCase().includes('pdf')) { badgeClass = 'badge-pdf'; formatDisplay = 'PDF'; }
      if(doc.format.toLowerCase().includes('doc')) { badgeClass = 'badge-doc'; formatDisplay = 'DOC'; }

      return `
      <div class="gallery-card" data-id="${doc.id}">
        <!-- Paper Preview Thumbnail -->
        <div class="doc-paper-preview">
          <div class="doc-badge ${badgeClass}">${formatDisplay}</div>
          <div class="preview-content">
            <div class="preview-line title w-80"></div>
            <div class="preview-line w-100"></div>
            <div class="preview-line w-60"></div>
            <div style="margin-top: 15px;"></div>
            <div class="preview-line title w-40"></div>
            <div class="preview-line w-90"></div>
            <div class="preview-line w-70"></div>
            <div class="preview-line w-80"></div>
            <div style="margin-top: auto; display:flex; justify-content: flex-end;">
              <i class="${this.getDocumentIcon(doc.format)}" style="color: #cbd5e0; font-size: 2rem; opacity: 0.5;"></i>
            </div>
          </div>
        </div>
        
        <!-- Document Info -->
        <div class="gallery-info">
          <h4 class="gallery-title" title="${doc.title}">${doc.title}</h4>
          <div class="gallery-meta">${doc.size}</div>
          
          <div class="gallery-footer">
            <div class="gallery-tags">
              ${doc.tags.slice(0, 2).map(tag => `<span class="gallery-tag">${tag}</span>`).join('')}
              ${doc.tags.length > 2 ? `<span class="gallery-tag">+${doc.tags.length - 2}</span>` : ''}
            </div>
            <button class="gallery-download-btn" data-id="${doc.id}" title="Baixar">
                 <i class="fas fa-download"></i>
            </button>
          </div>
        </div>
      </div>
    `}).join('');

    // Adiciona os event listeners para os botões de download
    document.querySelectorAll('.doc-download-btn').forEach(button => {
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        const docId = button.dataset.id;
        this.downloadDocument(docId);
      });
    });

    // Adiciona os event listeners para os itens do documento
    document.querySelectorAll('.document-card').forEach(item => {
      item.addEventListener('click', () => {
        const docId = item.dataset.id;
        this.previewDocument(docId);
      });
    });
  },

  getDocumentIcon(format) {
    const icons = {
      'pdf': 'far fa-file-pdf',
      'doc': 'far fa-file-word',
      'docx': 'far fa-file-word',
      'xls': 'far fa-file-excel',
      'xlsx': 'far fa-file-excel',
      'ppt': 'far fa-file-powerpoint',
      'pptx': 'far fa-file-powerpoint',
      'jpg': 'far fa-file-image',
      'jpeg': 'far fa-file-image',
      'png': 'far fa-file-image',
      'default': 'far fa-file'
    };

    return icons[format.toLowerCase()] || icons.default;
  },

  formatDocumentType(type) {
    const types = {
      'protocol': 'Protocolo',
      'manual': 'Manual',
      'technical-note': 'Nota Técnica',
      'report': 'Relatório',
      'default': 'Documento'
    };

    return types[type] || types.default;
  },

  downloadDocument(docId) {
    const doc = this.documents.find(d => d.id === docId);
    if (!doc) return;

    // Simula o download
    console.log(`Iniciando download: ${doc.title}`);

    // Atualiza a contagem de downloads
    doc.downloadCount++;

    // Mostra feedback visual
    const button = document.querySelector(`.download-button[data-id="${docId}"]`);
    if (button) {
      const icon = button.querySelector('i');
      if (icon) {
        icon.className = 'fas fa-check';
        setTimeout(() => {
          icon.className = 'fas fa-download';
        }, 2000);
      }
    }

    // Em um aplicativo real, isso iniciaria o download do arquivo
    // window.open(doc.url, '_blank');
  },

  previewDocument(docId) {
    const doc = this.documents.find(d => d.id === docId);
    if (!doc) return;

    // Em um aplicativo real, isso abriria um visualizador de PDF
    const modal = document.getElementById('notification-modal');
    const modalTitle = document.getElementById('notification-modal-title');
    const modalBody = document.getElementById('notification-modal-body');

    if (!modal || !modalTitle || !modalBody) return;

    modalTitle.textContent = doc.title;
    modalBody.innerHTML = `
      <div class="document-preview">
        <div class="document-icon large">
          <i class="${this.getDocumentIcon(doc.format)}"></i>
        </div>
        <div class="document-details">
          <p><strong>Tipo:</strong> ${this.formatDocumentType(doc.type)}</p>
          <p><strong>Tamanho:</strong> ${doc.size}</p>
          <p><strong>Data de upload:</strong> ${new Date(doc.uploadDate).toLocaleDateString('pt-BR')}</p>
          <p><strong>Downloads:</strong> ${doc.downloadCount}</p>
          <div class="document-tags">
            ${doc.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
        </div>
      </div>
      <div class="document-actions">
        <button class="btn btn-primary" id="open-document">
          <i class="fas fa-external-link-alt"></i> Abrir Documento
        </button>
        <button class="btn btn-secondary" id="download-document">
          <i class="fas fa-download"></i> Baixar
        </button>
      </div>
    `;

    // Configura os botões de ação
    const openBtn = document.getElementById('open-document');
    const downloadBtn = document.getElementById('download-document');

    if (openBtn) {
      openBtn.addEventListener('click', () => {
        // Em um aplicativo real, isso abriria o visualizador de PDF
        console.log(`Abrindo documento: ${doc.title}`);
        // window.open(doc.url, '_blank');
        this.closeModal('notification-modal');
      });
    }

    if (downloadBtn) {
      downloadBtn.addEventListener('click', () => {
        this.downloadDocument(docId);
        this.closeModal('notification-modal');
      });
    }

    this.openModal('notification-modal');
  },

  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('show');
      document.body.style.overflow = 'hidden';
    }
  },

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('show');
      document.body.style.overflow = '';
    }
  },

  setupEventListeners() {
    // Barra de pesquisa
    const searchButton = document.getElementById('search-library');
    const searchContainer = document.getElementById('library-search-container');
    const searchInput = document.getElementById('library-search');
    const clearSearch = document.getElementById('clear-search');
    const typeFilter = document.getElementById('document-type-filter');
    const diseaseFilter = document.getElementById('disease-filter');

    // Alterna a visibilidade da barra de pesquisa
    if (searchButton && searchContainer) {
      searchButton.addEventListener('click', () => {
        const isVisible = searchContainer.style.display === 'block';
        searchContainer.style.display = isVisible ? 'none' : 'block';

        if (!isVisible && searchInput) {
          searchInput.focus();
        }
      });
    }

    // Limpa a pesquisa
    if (clearSearch && searchInput) {
      clearSearch.addEventListener('click', () => {
        searchInput.value = '';
        this.applyFilters();
      });
    }

    // Aplica os filtros ao digitar
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        this.applyFilters();
      });
    }

    // Aplica os filtros ao mudar os seletores
    if (typeFilter) {
      typeFilter.addEventListener('change', () => {
        this.applyFilters();
      });
    }

    if (diseaseFilter) {
      diseaseFilter.addEventListener('change', () => {
        this.applyFilters();
      });
    }

    // Fecha a barra de pesquisa ao clicar fora
    document.addEventListener('click', (e) => {
      if (searchContainer && searchButton && !searchContainer.contains(e.target) && e.target !== searchButton) {
        searchContainer.style.display = 'none';
      }
    });
  },

  applyFilters() {
    const searchInput = document.getElementById('library-search');
    const typeFilter = document.getElementById('document-type-filter');
    const diseaseFilter = document.getElementById('disease-filter');

    const filters = {
      type: typeFilter ? typeFilter.value : 'all',
      disease: diseaseFilter ? diseaseFilter.value : 'all',
      search: searchInput ? searchInput.value.trim() : ''
    };

    this.renderDocuments(filters);
  }
};

// Módulo de Configurações
const SettingsModule = {
  init() {
    this.loadUserData();
    this.setupEventListeners();
  },

  loadUserData() {
    const userName = document.getElementById('user-name');
    if (userName) {
      userName.textContent = sampleData.user.name;
    }

    // Configura os toggles
    this.setupToggle('notifications-toggle', sampleData.user.notificationsEnabled);
    this.setupToggle('email-toggle', sampleData.user.emailNotifications);
    this.setupToggle('dark-mode-toggle', sampleData.user.darkMode);
  },

  setupToggle(toggleId, isChecked) {
    const toggle = document.getElementById(toggleId);
    if (toggle) {
      toggle.checked = isChecked;

      toggle.addEventListener('change', (e) => {
        const isEnabled = e.target.checked;

        // Atualiza os dados do usuário
        switch (toggleId) {
          case 'notifications-toggle':
            sampleData.user.notificationsEnabled = isEnabled;
            this.showToast(`Notificações ${isEnabled ? 'ativadas' : 'desativadas'}`, 'success');
            break;
          case 'email-toggle':
            sampleData.user.emailNotifications = isEnabled;
            this.showToast(`Notificações por e-mail ${isEnabled ? 'ativadas' : 'desativadas'}`, 'success');
            break;
          case 'dark-mode-toggle':
            sampleData.user.darkMode = isEnabled;
            this.toggleDarkMode(isEnabled);
            this.showToast(`Modo escuro ${isEnabled ? 'ativado' : 'desativado'}`, 'success');
            break;
        }
      });
    }
  },

  toggleDarkMode(enable) {
    document.body.classList.toggle('dark-mode', enable);

    // Salva a preferência no localStorage
    localStorage.setItem('darkMode', enable ? 'enabled' : 'disabled');
  },

  showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;

    document.body.appendChild(toast);

    // Mostra o toast
    setTimeout(() => {
      toast.classList.add('show');
    }, 100);

    // Remove o toast após 3 segundos
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        document.body.removeChild(toast);
      }, 300);
    }, 3000);
  },

  setupEventListeners() {
    // Botão de logout
    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
      logoutButton.addEventListener('click', () => {
        if (confirm('Tem certeza que deseja sair da sua conta?')) {
          // Em um aplicativo real, isso faria logout do usuário
          console.log('Usuário deslogado');
          this.showToast('Você saiu da sua conta com sucesso', 'success');

          // Redireciona para a tela de login após um curto atraso
          setTimeout(() => {
            // window.location.href = 'login.html';
          }, 1000);
        }
      });
    }

    // Links de termos e política de privacidade
    const termsLinks = document.querySelectorAll('[href*="termos"]');
    termsLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Termos de Uso serão exibidos aqui.');
      });
    });

    const privacyLinks = document.querySelectorAll('[href*="privacidade"]');
    privacyLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Política de Privacidade será exibida aqui.');
      });
    });

    // Configura o tema escuro com base na preferência salva
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme === 'enabled') {
      document.body.classList.add('dark-mode');
      const darkModeToggle = document.getElementById('dark-mode-toggle');
      if (darkModeToggle) darkModeToggle.checked = true;
    }
  }
};

// Módulo de Triagem de Sintomas
const SymptomsModule = {
  selectedSymptoms: new Set(),

  // Base de Dados de Sintomas (Categorizada) - Expandida
  symptomsData: {
    'Dores': [
      { id: 'dor_abdominal', label: 'Dor Abdominal' },
      { id: 'dor_atras_olhos', label: 'Dor atrás dos Olhos' },
      { id: 'dor_cabeca', label: 'Dor de Cabeça' },
      { id: 'dor_garganta', label: 'Dor de Garganta' },
      { id: 'dor_muscular', label: 'Dor Muscular (Mialgia)' },
      { id: 'dor_articulacoes', label: 'Dor nas Articulações' },
      { id: 'dor_peito', label: 'Dor no Peito' },
      { id: 'dor_corpo', label: 'Dor no Corpo' }
    ],
    'Gastrointestinal': [
      { id: 'esplenomegalia', label: 'Aumento do Baço' },
      { id: 'hepatomegalia', label: 'Aumento do Fígado' },
      { id: 'diarreia', label: 'Diarreia' },
      { id: 'dor_abdominal', label: 'Dor Abdominal' },
      { id: 'nauseas', label: 'Náuseas / Enjoo' },
      { id: 'sangue_fezes', label: 'Sangue nas Fezes' },
      { id: 'vomitos', label: 'Vômitos' }
    ],
    'Gerais': [
      { id: 'calafrios', label: 'Calafrios' },
      { id: 'fadiga', label: 'Cansaço/Fadiga Extrema' },
      { id: 'febre', label: 'Febre Alta (>38°C)' },
      { id: 'febre_baixa', label: 'Febre Baixa' },
      { id: 'mal_estar', label: 'Mal-estar Geral' },
      { id: 'perda_apetite', label: 'Perda de Apetite' },
      { id: 'perda_peso', label: 'Perda de Peso' },
      { id: 'sudorese_noturna', label: 'Sudorese Noturna' }
    ],
    'Neurológicos': [
      { id: 'agitacao', label: 'Agitação' },
      { id: 'confusao_mental', label: 'Confusão Mental' },
      { id: 'convulsoes', label: 'Convulsões' },
      { id: 'fotofobia', label: 'Fotofobia (Sensibilidade à Luz)' },
      { id: 'hidrofobia', label: 'Hidrofobia (Medo de Água)' },
      { id: 'perda_olfato', label: 'Perda de Olfato/Paladar' },
      { id: 'sonolencia', label: 'Sonolência Excessiva' }
    ],
    'Outros': [
      { id: 'anemia', label: 'Anemia' },
      { id: 'linfadenopatia', label: 'Aumento de Gânglios' },
      { id: 'ictericia', label: 'Icterícia (Pele Amarelada)' },
      { id: 'mordida_animal', label: 'Mordida de Animal' },
      { id: 'picada_inseto', label: 'Picada de Inseto Visível' },
      { id: 'cegueira', label: 'Problemas de Visão/Cegueira' }
    ],
    'Pele e Lesões': [
      { id: 'coceira', label: 'Coceira' },
      { id: 'edema', label: 'Edema (Inchaço)' },
      { id: 'erupcoes', label: 'Erupções Cutâneas' },
      { id: 'lesoes_cutaneas', label: 'Lesões Cutâneas' },
      { id: 'manchas', label: 'Manchas Vermelhas na Pele' },
      { id: 'nodulos', label: 'Nódulos' },
      { id: 'olhos_vermelhos', label: 'Olhos Vermelhos (Conjuntivite)' },
      { id: 'perda_sensibilidade', label: 'Perda de Sensibilidade' },
      { id: 'sangramento', label: 'Sangramento (Gengiva/Nariz)' },
      { id: 'ulceras', label: 'Úlceras' }
    ],
    'Respiratório': [
      { id: 'coriza', label: 'Coriza / Nariz Escorrendo' },
      { id: 'dificuldade_respirar', label: 'Dificuldade para Respirar' },
      { id: 'espirros', label: 'Espirros Frequentes' },
      { id: 'falta_ar', label: 'Falta de Ar / Dificuldade para Respirar' },
      { id: 'congestao', label: 'Nariz Entupido' },
      { id: 'tosse_produtiva', label: 'Tosse com Catarro' },
      { id: 'tosse_seca', label: 'Tosse Seca' }
    ]
  },

  // Base de Dados de Doenças Tropicais Negligenciadas (OMS) - Filtrada para Marabá
  diseases: [
    // Transmitidas por vetores
    {
      id: 'dengue',
      name: 'Dengue',
      description: 'Doença viral transmitida pelo mosquito Aedes aegypti.',
      symptoms: ['febre', 'dor_atras_olhos', 'dor_muscular', 'dor_articulacoes', 'manchas', 'nauseas', 'mal_estar', 'dor_cabeca', 'sangramento'],
      mandatory: ['febre'],
      weight: 1.2
    },
    {
      id: 'chikungunya',
      name: 'Chikungunya',
      description: 'Doença viral caracterizada por fortes dores nas articulações.',
      symptoms: ['febre', 'dor_articulacoes', 'dor_muscular', 'dor_cabeca', 'manchas', 'nauseas', 'olhos_vermelhos', 'fadiga'],
      mandatory: ['dor_articulacoes', 'febre'],
      weight: 1.2
    },
    {
      id: 'zika',
      name: 'Zika',
      description: 'Doença viral que pode causar febre baixa e erupções cutâneas.',
      symptoms: ['febre_baixa', 'manchas', 'coceira', 'dor_muscular', 'olhos_vermelhos', 'dor_articulacoes', 'dor_cabeca', 'mal_estar'],
      mandatory: ['manchas'],
      weight: 1.0
    },
    {
      id: 'leishmaniose-tegumentar',
      name: 'Leishmaniose Tegumentar',
      description: 'Infecção causada por parasitas do gênero Leishmania, transmitida por flebotomíneos.',
      symptoms: ['lesoes_cutaneas', 'ulceras', 'nodulos', 'febre', 'mal_estar', 'perda_apetite'],
      mandatory: ['lesoes_cutaneas'],
      weight: 1.3
    },
    {
      id: 'leishmaniose-visceral',
      name: 'Leishmaniose Visceral',
      description: 'Forma grave da leishmaniose que afeta órgãos internos.',
      symptoms: ['febre', 'hepatomegalia', 'esplenomegalia', 'perda_peso', 'anemia', 'fadiga', 'sudorese_noturna'],
      mandatory: ['febre', 'hepatomegalia'],
      weight: 1.4
    },
    {
      id: 'chagas',
      name: 'Doença de Chagas',
      description: 'Doença causada pelo protozoário Trypanosoma cruzi, transmitida por triatomíneos.',
      symptoms: ['febre', 'mal_estar', 'dor_cabeca', 'dor_muscular', 'hepatomegalia', 'esplenomegalia', 'linfadenopatia', 'edema'],
      mandatory: ['febre'],
      weight: 1.3
    },
    // Helmintíases
    {
      id: 'esquistossomose',
      name: 'Esquistossomose',
      description: 'Infecção causada por vermes do gênero Schistosoma.',
      symptoms: ['febre', 'dor_abdominal', 'diarreia', 'dor_muscular', 'coceira', 'hepatomegalia', 'esplenomegalia'],
      mandatory: ['dor_abdominal', 'febre'],
      weight: 1.2
    },
    {
      id: 'ascaridiase',
      name: 'Ascaridíase',
      description: 'Infecção por verme Ascaris lumbricoides.',
      symptoms: ['dor_abdominal', 'nauseas', 'vomitos', 'diarreia', 'perda_apetite', 'fadiga', 'perda_peso'],
      mandatory: ['dor_abdominal'],
      weight: 1.0
    },
    {
      id: 'ancilostomiase',
      name: 'Ancilostomíase',
      description: 'Infecção por ancilostomídeos (amarelão).',
      symptoms: ['anemia', 'fadiga', 'dor_abdominal', 'diarreia', 'perda_peso', 'coceira'],
      mandatory: ['anemia'],
      weight: 1.1
    },
    {
      id: 'tricuriase',
      name: 'Tricuríase',
      description: 'Infecção por Trichuris trichiura.',
      symptoms: ['dor_abdominal', 'diarreia', 'sangue_fezes', 'anemia', 'perda_peso'],
      mandatory: ['dor_abdominal'],
      weight: 1.0
    },
    {
      id: 'estrongiloidiase',
      name: 'Estrongiloidíase',
      description: 'Infecção por Strongyloides stercoralis.',
      symptoms: ['dor_abdominal', 'diarreia', 'coceira', 'erupcoes', 'nauseas', 'vomitos'],
      mandatory: ['dor_abdominal', 'coceira'],
      weight: 1.1
    },
    {
      id: 'teniase',
      name: 'Teníase',
      description: 'Infecção por tênia (solitária).',
      symptoms: ['dor_abdominal', 'nauseas', 'perda_peso', 'diarreia', 'fadiga'],
      mandatory: ['dor_abdominal'],
      weight: 1.0
    },
    {
      id: 'cisticercose',
      name: 'Cisticercose',
      description: 'Infecção por larvas de tênia.',
      symptoms: ['convulsoes', 'dor_cabeca', 'confusao_mental', 'nodulos', 'dor_muscular'],
      mandatory: ['convulsoes'],
      weight: 1.3
    },
    // Infecções bacterianas
    {
      id: 'hanseniase',
      name: 'Hanseníase',
      description: 'Infecção bacteriana crônica causada por Mycobacterium leprae.',
      symptoms: ['lesoes_cutaneas', 'perda_sensibilidade', 'nodulos', 'manchas', 'dor_muscular'],
      mandatory: ['lesoes_cutaneas', 'perda_sensibilidade'],
      weight: 1.4
    },
    {
      id: 'tracoma',
      name: 'Tracoma',
      description: 'Infecção ocular bacteriana que pode causar cegueira.',
      symptoms: ['olhos_vermelhos', 'coceira', 'fotofobia', 'cegueira', 'lesoes_cutaneas'],
      mandatory: ['olhos_vermelhos'],
      weight: 1.2
    },
    {
      id: 'leptospirose',
      name: 'Leptospirose',
      description: 'Infecção bacteriana transmitida por animais.',
      symptoms: ['febre', 'dor_muscular', 'dor_cabeca', 'ictericia', 'nauseas', 'vomitos', 'diarreia', 'erupcoes'],
      mandatory: ['febre', 'dor_muscular'],
      weight: 1.2
    },
    // Outras
    {
      id: 'raiva',
      name: 'Raiva',
      description: 'Doença viral fatal transmitida por mordidas de animais.',
      symptoms: ['febre', 'agitacao', 'hidrofobia', 'fotofobia', 'convulsoes', 'confusao_mental', 'dor_muscular'],
      mandatory: ['hidrofobia', 'agitacao'],
      weight: 1.5
    },
    {
      id: 'micetoma',
      name: 'Micetoma',
      description: 'Infecção crônica da pele e tecidos subcutâneos.',
      symptoms: ['nodulos', 'ulceras', 'edema', 'dor_muscular', 'lesoes_cutaneas'],
      mandatory: ['nodulos'],
      weight: 1.2
    },
    {
      id: 'escabiose',
      name: 'Escabiose',
      description: 'Infecção por ácaros (sarna).',
      symptoms: ['coceira', 'erupcoes', 'lesoes_cutaneas', 'manchas'],
      mandatory: ['coceira'],
      weight: 1.1
    },
    {
      id: 'acidente-ofidico',
      name: 'Acidente Ofídico',
      description: 'Envenenamento por picada de serpente.',
      symptoms: ['dor_muscular', 'edema', 'nauseas', 'vomitos', 'dor_abdominal', 'sangramento', 'febre'],
      mandatory: ['edema', 'dor_muscular'],
      weight: 1.4
    }
  ],

  init() {
    this.renderSymptoms();
    this.setupEventListeners();
  },

  renderSymptoms() {
    const grid = document.getElementById('symptoms-grid');
    if (!grid) return;

    grid.innerHTML = '';

    Object.entries(this.symptomsData).forEach(([category, symptoms]) => {
      const categoryDiv = document.createElement('div');
      categoryDiv.className = 'symptom-category';

      const icon = this.getCategoryIcon(category);

      categoryDiv.innerHTML = `
        <h4 class="category-title"><i class="fas fa-${icon}"></i> ${category}</h4>
        <div class="chips-container" id="cat-${category}"></div>
      `;

      grid.appendChild(categoryDiv);

      const chipsContainer = categoryDiv.querySelector('.chips-container');
      symptoms.forEach(sym => {
        const chip = document.createElement('div');
        chip.className = 'symptom-chip';
        chip.dataset.id = sym.id;
        chip.textContent = sym.label;

        chip.addEventListener('click', () => this.toggleSymptom(chip, sym.id));

        chipsContainer.appendChild(chip);
      });
    });
  },

  getCategoryIcon(category) {
    const map = {
      'Gerais': 'thermometer-half',
      'Dores': 'head-side-virus',
      'Respiratório': 'lungs',
      'Gastrointestinal': 'stomach',
      'Pele e Lesões': 'allergies',
      'Neurológicos': 'brain',
      'Outros': 'exclamation-circle'
    };
    return map[category] || 'notes-medical';
  },

  toggleSymptom(chipElement, symptomId) {
    if (this.selectedSymptoms.has(symptomId)) {
      this.selectedSymptoms.delete(symptomId);
      chipElement.classList.remove('selected');
    } else {
      this.selectedSymptoms.add(symptomId);
      chipElement.classList.add('selected');
    }
  },

  setupEventListeners() {
    const analyzeBtn = document.getElementById('analyze-symptoms-btn');
    const clearBtn = document.getElementById('clear-symptoms-btn');

    if (analyzeBtn) {
      analyzeBtn.addEventListener('click', () => this.analyzeSymptoms());
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        this.selectedSymptoms.clear();
        document.querySelectorAll('.symptom-chip').forEach(c => c.classList.remove('selected'));
        document.getElementById('diagnosis-results').classList.add('hidden');
      });
    }
  },

  analyzeSymptoms() {
    if (this.selectedSymptoms.size === 0) {
      alert('Por favor, selecione pelo menos um sintoma.');
      return;
    }

    if (typeof AuthModule !== 'undefined' && AuthModule.currentUser) {
        const key = `epi_triagens_${AuthModule.currentUser.name}`;
        localStorage.setItem(key, parseInt(localStorage.getItem(key) || '0') + 1);
    }

    const results = [];
    const selectedList = Array.from(this.selectedSymptoms);

    this.diseases.forEach(disease => {
      let matches = 0;
      let mandatoryMatches = 0;
      const matchedSymptoms = [];

      selectedList.forEach(userSym => {
        if (disease.symptoms.includes(userSym)) {
          matches++;
          matchedSymptoms.push(userSym);
        }
      });

      if (disease.mandatory) {
        disease.mandatory.forEach(m => {
          if (this.selectedSymptoms.has(m)) mandatoryMatches++;
        });
      }

      // Cálculo de pontuação básico (Peso + Coincidências)
      // Normaliza pela quantidade total de sintomas da doença para evitar favorecer doenças com listas enormes
      const coverage = matches / disease.symptoms.length;

      // Bonus para sintomas obrigatórios/chave
      const keyBonus = disease.mandatory ? (mandatoryMatches / disease.mandatory.length) * 0.5 : 0;

      let score = (coverage + keyBonus) * 100;

      if (score > 100) score = 100;

      // Só mostra se tiver uma relevância mínima
      if (score > 20) {
        results.push({
          ...disease,
          score: parseFloat(score.toFixed(1)),
          matchedSymptoms: matchedSymptoms
        });
      }
    });
    results.sort((a, b) => b.score - a.score);
    this.displayResults(results);
  },

  displayResults(results) {
    const resultsContainer = document.getElementById('diagnosis-results');
    const resultsList = document.getElementById('results-list');

    if (!resultsContainer || !resultsList) return;

    resultsList.innerHTML = '';

    if (results.length === 0) {
      resultsList.innerHTML = `
        <div class="disease-result-card">
          <h3>Nenhuma correspondência encontrada</h3>
          <p>Com base nos sintomas selecionados, não foi possível identificar uma doença específica. Recomendamos consultar um profissional de saúde.</p>
        </div>
      `;
    } else {
      results.forEach(result => {
        const probabilityClass = result.score >= 70 ? 'high' : result.score >= 40 ? 'medium' : 'low';
        const probabilityLabel = result.score >= 70 ? 'Alta' : result.score >= 40 ? 'Média' : 'Baixa';

        const card = document.createElement('div');
        card.className = `disease-result-card ${probabilityClass}-probability`;
        card.innerHTML = `
          <h3>
            ${result.name}
            <span class="probability-badge ${probabilityClass}">
              <i class="fas fa-chart-line"></i>
              ${probabilityLabel} (${Math.round(result.score)}%)
            </span>
          </h3>
          <p>${result.description || 'Doença que requer atenção médica.'}</p>
          <div class="recommendations">
            <h4><i class="fas fa-lightbulb"></i> Recomendações</h4>
            <ul>
              ${result.score >= 70 ?
            '<li><strong>Procure atendimento médico imediatamente</strong></li>' :
            result.score >= 40 ?
              '<li>Agende uma consulta médica em breve</li>' :
              '<li>Monitore os sintomas e consulte um médico se piorarem</li>'
          }
              <li>Mantenha-se hidratado e descanse adequadamente</li>
              <li>Evite contato próximo com outras pessoas</li>
              ${result.score >= 70 ? '<li>Considere ir a uma unidade de pronto atendimento</li>' : ''}
            </ul>
          </div>
        `;
        resultsList.appendChild(card);
      });
    }

    resultsContainer.classList.remove('hidden');
    resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  },

  clearSymptoms() {
    this.selectedSymptoms = new Set();
    const symptomCards = document.querySelectorAll('.symptom-card');
    symptomCards.forEach(card => card.classList.remove('selected'));

    const resultsContainer = document.getElementById('diagnosis-results');
    if (resultsContainer) {
      resultsContainer.classList.add('hidden');
    }
  }
};

// Módulo de Notícias (Carousel)
const NewsModule = {
  news: [
    {
      id: 1,
      title: 'Vacinação contra Dengue Ampliada',
      summary: 'Confira os novos grupos prioritários e locais de vacinação.',
      image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      badge: 'Campanha'
    },
    {
      id: 2,
      title: 'Boletim Epidemiológico: Semana 50',
      summary: 'Queda de 15% nos casos de Arboviroses na região.',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      badge: 'Relatório'
    },
    {
      id: 3,
      title: 'Curso de Capacitação em Vigilância',
      summary: 'Inscrições abertas para profissionais da rede municipal.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      badge: 'Educação'
    }
  ],
  currentIndex: 0,
  interval: null,

  init() {
    this.renderNews();
    this.startAutoPlay();
  },

  renderNews() {
    const container = document.getElementById('news-carousel');
    const indicators = document.getElementById('carousel-indicators');
    if (!container || !indicators) return;

    container.innerHTML = this.news.map((item, index) => `
      <div class="news-card ${index === 0 ? 'active' : ''}" data-index="${index}" style="background-image: url('${item.image}')">
        <div class="news-content">
          <span class="news-badge">${item.badge}</span>
          <h3 class="news-title">${item.title}</h3>
          <p class="news-snippet">${item.summary}</p>
        </div>
      </div>
    `).join('');

    indicators.innerHTML = this.news.map((_, index) => `
      <div class="indicator ${index === 0 ? 'active' : ''}" data-index="${index}"></div>
    `).join('');

    // Click events for indicators
    indicators.querySelectorAll('.indicator').forEach(ind => {
      ind.addEventListener('click', (e) => {
        this.goToSlide(parseInt(e.target.dataset.index));
        this.resetAutoPlay();
      });
    });
  },

  goToSlide(index) {
    this.currentIndex = index;
    const cards = document.querySelectorAll('.news-card');
    const indicators = document.querySelectorAll('.indicator');

    cards.forEach(c => c.classList.remove('active'));
    indicators.forEach(i => i.classList.remove('active'));

    if (cards[index]) cards[index].classList.add('active');
    if (indicators[index]) indicators[index].classList.add('active');
  },

  nextSlide() {
    let next = this.currentIndex + 1;
    if (next >= this.news.length) next = 0;
    this.goToSlide(next);
  },

  startAutoPlay() {
    this.interval = setInterval(() => this.nextSlide(), 5000); // 5 seconds
  },

  resetAutoPlay() {
    clearInterval(this.interval);
    this.startAutoPlay();
  }
};

// Módulo de Estatísticas (Analytics)
const AnalyticsModule = {
  metrics: {
    active: 1240,
    admitted: 45,
    recovered: 8900
  },

  init() {
    this.renderDashboard();
    this.setupRefresh();
  },

  renderDashboard() {
    // Populate simple metrics
    const activeEl = document.getElementById('metric-active');
    const admittedEl = document.getElementById('metric-admitted');
    const recoveredEl = document.getElementById('metric-recovered');

    // Realistic numbers for Marabá (~280k population)
    // Active cases across all monitored diseases
    if (activeEl) this.animateValue(activeEl, 0, 342, 1500);
    // Admitted in hospitals (HMM, Regional)
    if (admittedEl) this.animateValue(admittedEl, 0, 28, 1000);
    // Total recovered this year
    if (recoveredEl) this.animateValue(recoveredEl, 0, 4150, 2000);

    // Animate CSS Charts (Simple trick: set height after load)
    const bars = document.querySelectorAll('.simple-bar-chart .bar');
    // Using setTimeout to trigger CSS transition
    setTimeout(() => {
    }, 500);

    this.renderHospitalCharts();
  },

  renderHospitalCharts() {
    const hmmCanvas = document.getElementById('hmm-chart');
    const hrspCanvas = document.getElementById('hrsp-chart');
    
    if (hmmCanvas && !this.hmmChart) {
        this.hmmChart = new Chart(hmmCanvas.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['UCE', 'UTI', 'Clínica Médica', 'Pronto-Socorro'],
                datasets: [{
                    label: 'Internados (HMM)',
                    data: [15, 8, 25, 32],
                    backgroundColor: 'rgba(13, 138, 188, 0.7)',
                    borderColor: 'rgba(13, 138, 188, 1)',
                    borderWidth: 1,
                    borderRadius: 4
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    x: { beginAtZero: true }
                }
            }
        });
    }

    if (hrspCanvas && !this.hrspChart) {
        this.hrspChart = new Chart(hrspCanvas.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['UTI', 'Clínica Médica'],
                datasets: [{
                    label: 'Internados (HRSP)',
                    data: [10, 18],
                    backgroundColor: 'rgba(76, 175, 80, 0.7)',
                    borderColor: 'rgba(76, 175, 80, 1)',
                    borderWidth: 1,
                    borderRadius: 4
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    x: { beginAtZero: true }
                }
            }
        });
    }
  },

  animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start).toLocaleString('pt-BR');
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  },

  setupRefresh() {
    const btn = document.getElementById('refresh-analytics');
    if (btn) {
      btn.addEventListener('click', () => {
        btn.querySelector('i').classList.add('fa-spin');
        setTimeout(() => {
          this.renderDashboard(); // Re-run animation
          btn.querySelector('i').classList.remove('fa-spin');
        }, 1000);
      });
    }
  }
};

// Módulo do Mapa Epidemiológico (Leaflet + Geolocation)
// Módulo do Mapa Epidemiológico (True Heatmap + Disease Filter)
// Módulo do Mapa Epidemiológico (Cluster Map + Disease Icons)
// Módulo de Pacientes (Prontuário Eletrônico)
const PatientModule = {
  currentPatient: null,
  // Banco de Dados Simulado
  mockDB: [
    {
      id: 1,
      name: 'Maria da Silva Santos',
      age: 42,
      sex: 'Feminino',
      cpf: '123.456.789-00',
      cns: '123 4567 8901 2345',
      blood: 'O+',
      photo: 'https://ui-avatars.com/api/?name=Maria+Silva&background=e91e63&color=fff',
      birthDate: '15/05/1982',
      motherName: 'Raimunda Ferreira da Silva',
      nationality: 'Brasileira',
      race: 'Parda',
      education: 'Ensino Médio Completo',
      zone: 'Urbana',
      address: 'Rua das Palmeiras, 234',
      neighborhood: 'Cidade Nova',
      municipality: 'Marabá',
      uf: 'PA',
      phone: '(94) 99123-4567',
      badges: [{ text: 'Hipertensão', type: 'warning' }],
      allergies: ['Penicilina', 'Dipirona'],
      conditions: ['Hipertensão', 'Diabetes Tipo 2'],
      vitals: { bp: '118/76', weight: '68', temp: '36.4', o2: '98', heartRate: '75' },
      history: [
        { date: '20/12/2025', title: 'Consulta Geral', desc: 'Controle de pressão arterial. Medicação ajustada.' },
        { date: '15/11/2025', title: 'Exames de Rotina', desc: 'Glicemia e hemograma completo.' }
      ],
      vaccines: [
        { name: 'Influenza', date: '15/04/2025' },
        { name: 'COVID-19 (Reforço)', date: '10/01/2025' }
      ]
    },
    {
      id: 2,
      name: 'João Pedro Oliveira',
      age: 35,
      sex: 'Masculino',
      cpf: '987.654.321-00',
      cns: '987 6543 2109 8765',
      blood: 'A+',
      photo: 'https://ui-avatars.com/api/?name=Joao+Pedro&background=2196f3&color=fff',
      birthDate: '22/08/1989',
      motherName: 'Francisca Oliveira dos Santos',
      nationality: 'Brasileira',
      race: 'Branca',
      education: 'Ensino Superior Completo',
      zone: 'Urbana',
      address: 'Av. Marechal Rondon, 891',
      neighborhood: 'Nova Marabá',
      municipality: 'Marabá',
      uf: 'PA',
      phone: '(94) 98765-4321',
      badges: [{ text: 'Asma', type: 'info' }],
      allergies: [],
      conditions: ['Asma'],
      vitals: { bp: '120/80', weight: '75', temp: '36.5', o2: '97', heartRate: '72' },
      history: [
        { date: '18/12/2025', title: 'Pneumologista', desc: 'Ajuste de medicação para controle da asma.' },
        { date: '10/09/2025', title: 'Espirometria', desc: 'Função pulmonar dentro da normalidade.' }
      ],
      vaccines: [
        { name: 'Influenza', date: '20/03/2025' },
        { name: 'Pneumocócica', date: '15/01/2024' }
      ]
    },
    {
      id: 3,
      name: 'Ana Carolina Ferreira',
      age: 28,
      sex: 'Feminino',
      cpf: '456.789.123-45',
      cns: '456 7891 2345 6789',
      blood: 'B+',
      photo: 'https://ui-avatars.com/api/?name=Ana+Carolina&background=9c27b0&color=fff',
      birthDate: '10/12/1996',
      motherName: 'Luciana Ferreira Alves',
      nationality: 'Brasileira',
      race: 'Parda',
      education: 'Ensino Superior Incompleto',
      zone: 'Urbana',
      address: 'Rua Onze de Maio, 55',
      neighborhood: 'Novo Horizonte',
      municipality: 'Marabá',
      uf: 'PA',
      phone: '(94) 99321-7654',
      badges: [],
      allergies: ['Lactose'],
      conditions: [],
      vitals: { bp: '115/75', weight: '62', temp: '36.3', o2: '99', heartRate: '68' },
      history: [
        { date: '15/12/2025', title: 'Check-up Anual', desc: 'Exames de rotina todos normais.' },
        { date: '20/06/2025', title: 'Ginecologista', desc: 'Consulta preventiva.' }
      ],
      vaccines: [
        { name: 'HPV', date: '10/08/2025' },
        { name: 'Hepatite B', date: '15/03/2024' }
      ]
    },
    {
      id: 4,
      name: 'Carlos Eduardo Souza',
      age: 58,
      sex: 'Masculino',
      cpf: '321.654.987-12',
      cns: '321 6549 8712 3456',
      blood: 'AB+',
      photo: 'https://ui-avatars.com/api/?name=Carlos+Eduardo&background=ff9800&color=fff',
      birthDate: '03/03/1966',
      motherName: 'Dalva Souza dos Reis',
      nationality: 'Brasileira',
      race: 'Branca',
      education: 'Ensino Médio Completo',
      zone: 'Urbana',
      address: 'Rua Quintino Bocaiuva, 312',
      neighborhood: 'São Félix',
      municipality: 'Marabá',
      uf: 'PA',
      phone: '(94) 99456-1230',
      badges: [{ text: 'Hipertensão', type: 'warning' }, { text: 'Colesterol Alto', type: 'warning' }],
      allergies: ['Iodo'],
      conditions: ['Hipertensão', 'Colesterol Alto'],
      vitals: { bp: '135/85', weight: '82', temp: '36.6', o2: '96', heartRate: '78' },
      history: [
        { date: '22/12/2025', title: 'Cardiologista', desc: 'Controle de hipertensão. ECG normal.' },
        { date: '10/10/2025', title: 'Exames Laboratoriais', desc: 'Colesterol ainda elevado.' }
      ],
      vaccines: [
        { name: 'Influenza', date: '25/04/2025' },
        { name: 'Pneumocócica', date: '10/02/2024' }
      ]
    },
    {
      id: 5,
      name: 'Juliana Alves Costa',
      age: 31,
      sex: 'Feminino',
      cpf: '159.753.486-20',
      cns: '159 7534 8620 1597',
      blood: 'O-',
      photo: 'https://ui-avatars.com/api/?name=Juliana+Alves&background=4caf50&color=fff',
      birthDate: '18/07/1993',
      motherName: 'Sandra Costa Pereira',
      nationality: 'Brasileira',
      race: 'Negra',
      education: 'Ensino Médio Completo',
      zone: 'Urbana',
      address: 'Rua Sete de Setembro, 78',
      neighborhood: 'Liberdade',
      municipality: 'Marabá',
      uf: 'PA',
      phone: '(94) 98234-5678',
      badges: [{ text: 'Enxaqueca', type: 'info' }],
      allergies: ['Ácido Acetilsalicílico (AAS)'],
      conditions: ['Enxaqueca Crônica'],
      vitals: { bp: '110/70', weight: '58', temp: '36.2', o2: '98', heartRate: '70' },
      history: [
        { date: '19/12/2025', title: 'Neurologista', desc: 'Ajuste de medicação preventiva.' },
        { date: '05/11/2025', title: 'Consulta de Rotina', desc: 'Frequência de crises reduzida.' }
      ],
      vaccines: [
        { name: 'Influenza', date: '18/04/2025' },
        { name: 'COVID-19', date: '20/01/2025' }
      ]
    },
    {
      id: 6,
      name: 'Roberto Lima Mendes',
      age: 67,
      sex: 'Masculino',
      cpf: '753.951.852-33',
      cns: '753 9518 5233 7539',
      blood: 'A-',
      photo: 'https://ui-avatars.com/api/?name=Roberto+Lima&background=795548&color=fff',
      birthDate: '25/01/1957',
      motherName: 'Maria do Carmo Lima',
      nationality: 'Brasileira',
      race: 'Parda',
      education: 'Ensino Fundamental Incompleto',
      zone: 'Urbana',
      address: 'Travessa Três, 190',
      neighborhood: 'Morada Nova',
      municipality: 'Marabá',
      uf: 'PA',
      phone: '(94) 99678-0011',
      badges: [{ text: 'Diabetes', type: 'alert' }, { text: 'Insuf. Renal', type: 'warning' }],
      allergies: ['Sulfa'],
      conditions: ['Diabetes Tipo 2', 'Insuficiência Renal Leve'],
      vitals: { bp: '140/90', weight: '78', temp: '36.7', o2: '95', heartRate: '80' },
      history: [
        { date: '21/12/2025', title: 'Nefrologista', desc: 'Função renal estável. Manter acompanhamento.' },
        { date: '15/12/2025', title: 'Endocrinologista', desc: 'Glicemia controlada com medicação.' }
      ],
      vaccines: [
        { name: 'Influenza', date: '30/03/2025' },
        { name: 'Pneumocócica 23', date: '15/01/2024' },
        { name: 'Herpes Zóster', date: '10/11/2023' }
      ]
    },
    {
      id: 7,
      name: 'Fernanda Rocha Silva',
      age: 25,
      sex: 'Feminino',
      cpf: '258.147.369-11',
      cns: '258 1473 6911 2581',
      blood: 'O+',
      photo: 'https://ui-avatars.com/api/?name=Fernanda+Rocha&background=e91e63&color=fff',
      birthDate: '12/03/1999',
      motherName: 'Patrícia Rocha Pinto',
      nationality: 'Brasileira',
      race: 'Parda',
      education: 'Ensino Médio Completo',
      zone: 'Urbana',
      address: 'Rua Floresta, 440',
      neighborhood: 'Bela Vista',
      municipality: 'Marabá',
      uf: 'PA',
      phone: '(94) 99012-3344',
      badges: [{ text: 'Gestante', type: 'info' }],
      allergies: [],
      conditions: ['Gestação de Risco Habitual'],
      vitals: { bp: '110/70', weight: '65', temp: '36.5', o2: '99', heartRate: '78' },
      history: [
        { date: '25/12/2025', title: 'Pré-natal', desc: 'Consulta de rotina. Batimentos fetais normais.' }
      ],
      vaccines: [
        { name: 'dTpa', date: '01/12/2025' },
        { name: 'Hepatite B', date: '15/06/2024' }
      ]
    },
    {
      id: 8,
      name: 'Ricardo Gomes Pereira',
      age: 45,
      sex: 'Masculino',
      cpf: '369.258.147-22',
      cns: '369 2581 4722 3692',
      blood: 'B-',
      photo: 'https://ui-avatars.com/api/?name=Ricardo+Gomes&background=607d8b&color=fff',
      birthDate: '05/09/1980',
      motherName: 'Terezinha Gomes da Silva',
      nationality: 'Brasileira',
      race: 'Branca',
      education: 'Ensino Médio Incompleto',
      zone: 'Periurbana',
      address: 'Rua Cachoeira, 62',
      neighborhood: 'Amapá',
      municipality: 'Marabá',
      uf: 'PA',
      phone: '(94) 98899-0022',
      badges: [{ text: 'Tabagista', type: 'warning' }],
      allergies: ['Frutos do Mar'],
      conditions: ['Bronquite Crônica'],
      vitals: { bp: '130/85', weight: '80', temp: '36.6', o2: '94', heartRate: '82' },
      history: [
        { date: '20/12/2025', title: 'Pneumologista', desc: 'Avaliação de função pulmonar. Orientado a cessar tabagismo.' }
      ],
      vaccines: [
        { name: 'Influenza', date: '10/04/2025' }
      ]
    },
    {
      id: 9,
      name: 'Camila Santos Oliveira',
      age: 8,
      sex: 'Feminino',
      cpf: '741.852.963-33',
      cns: '741 8529 6333 7418',
      blood: 'A+',
      photo: 'https://ui-avatars.com/api/?name=Camila+Santos&background=9c27b0&color=fff',
      birthDate: '15/07/2017',
      motherName: 'Adriana Santos Costa',
      nationality: 'Brasileira',
      race: 'Parda',
      education: 'Não se aplica',
      zone: 'Urbana',
      address: 'Rua Girassol, 150',
      neighborhood: 'Sol Nascente',
      municipality: 'Marabá',
      uf: 'PA',
      phone: '(94) 98765-9988',
      badges: [],
      allergies: ['Picada de Inseto'],
      conditions: [],
      vitals: { bp: '100/60', weight: '28', temp: '36.8', o2: '99', heartRate: '90' },
      history: [
        { date: '15/12/2025', title: 'Pediatra', desc: 'Crescimento e desenvolvimento adequados.' }
      ],
      vaccines: [
        { name: 'ACWY', date: '10/11/2025' },
        { name: 'HPV', date: '15/07/2025' }
      ]
    },
    {
      id: 10,
      name: 'Luiz Fernando Souza',
      age: 55,
      sex: 'Masculino',
      cpf: '852.963.741-44',
      cns: '852 9637 4144 8529',
      blood: 'AB-',
      photo: 'https://ui-avatars.com/api/?name=Luiz+Fernando&background=3f51b5&color=fff',
      birthDate: '28/02/1970',
      motherName: 'Conceição Araújo Souza',
      nationality: 'Brasileira',
      race: 'Parda',
      education: 'Ensino Superior Completo',
      zone: 'Urbana',
      address: 'Av. Brasil, 1.200',
      neighborhood: 'Centro',
      municipality: 'Marabá',
      uf: 'PA',
      phone: '(94) 99111-2233',
      badges: [{ text: 'Cardiopatia', type: 'alert' }],
      allergies: [],
      conditions: ['Insuficiência Cardíaca'],
      vitals: { bp: '125/80', weight: '85', temp: '36.4', o2: '96', heartRate: '75' },
      history: [
        { date: '22/12/2025', title: 'Cardiologista', desc: 'Ajuste de bloqueadores beta. Estável.' }
      ],
      vaccines: [
        { name: 'Influenza', date: '25/03/2025' },
        { name: 'Pneumocócica', date: '12/02/2024' }
      ]
    },
    {
      id: 11,
      name: 'Beatriz Costa Lima',
      age: 19,
      sex: 'Feminino',
      cpf: '963.741.852-55',
      cns: '963 7418 5255 9637',
      blood: 'O+',
      photo: 'https://ui-avatars.com/api/?name=Beatriz+Costa&background=f06292&color=fff',
      birthDate: '10/10/2006',
      motherName: 'Vanessa Lima Costa',
      nationality: 'Brasileira',
      race: 'Amarela',
      education: 'Ensino Médio Incompleto',
      zone: 'Urbana',
      address: 'Rua das Acácias, 88',
      neighborhood: 'Jardim Paraíso',
      municipality: 'Marabá',
      uf: 'PA',
      phone: '(94) 99444-5566',
      badges: [],
      allergies: [],
      conditions: [],
      vitals: { bp: '115/75', weight: '55', temp: '36.6', o2: '99', heartRate: '70' },
      history: [
        { date: '18/12/2025', title: 'Clínico Geral', desc: 'Solicitação de exames admissionais.' }
      ],
      vaccines: [
        { name: 'Meningocócica', date: '15/08/2024' }
      ]
    }
  ],

  init() {
    this.setupEventListeners();
    this.renderRecents();
  },

  setupEventListeners() {
    const searchBtn = document.getElementById('patient-search-btn');
    const searchInput = document.getElementById('patient-search-input');
    const backBtn = document.getElementById('back-to-search-btn');

    // Search Action
    searchBtn.addEventListener('click', () => {
      this.handleSearch(searchInput.value);
    });

    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.handleSearch(searchInput.value);
    });

    // Back Action
    backBtn.addEventListener('click', () => {
      const profileView = document.getElementById('patient-profile-view');
      const searchBar = document.querySelector('.patient-search-bar');
      const recents = document.getElementById('patient-recents');
      const results = document.getElementById('patient-results');

      if (profileView) profileView.style.display = 'none';
      if (searchBar) searchBar.style.display = 'block';
      if (recents) recents.style.display = 'block';
      if (results) results.style.display = 'none';

      // logic check: if we had searches, maybe show results again? for now, clean reset
      document.getElementById('patient-results').style.display = 'none';
    });

    // Tab Navigation
    const tabs = document.querySelectorAll('.p-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Remove active from all tabs
        document.querySelectorAll('.p-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.p-tab-content').forEach(c => c.style.display = 'none');

        // Activate clicked tab
        tab.classList.add('active');
        const targetContent = document.getElementById(tab.dataset.tab);
        if (targetContent) {
          targetContent.style.display = 'block';
        }
      });
    });

    // Patient Action Buttons
    const actionButtons = document.querySelectorAll('.patient-actions .btn');
    actionButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const buttonText = button.textContent.trim();

        if (buttonText === 'Nova Consulta') {
          // Close patient profile and return to list
          const profileView = document.getElementById('patient-profile-view');
          const searchBar = document.querySelector('.patient-search-bar');
          const recents = document.getElementById('patient-recents');
          const results = document.getElementById('patient-results');

          if (profileView) profileView.style.display = 'none';
          if (searchBar) searchBar.style.display = 'block';
          if (recents) recents.style.display = 'block';
          if (results) results.style.display = 'none';
        } else if (buttonText === 'Editar Prontuário') {
          alert('Funcionalidade de Editar Prontuário será implementada em breve.\n\nEsta ação permitirá editar as informações do prontuário do paciente.');
        } else if (buttonText === 'Notificar') {
          if (this.currentPatient) {
            if (confirm(`Deseja iniciar a notificação para o paciente ${this.currentPatient.name}?`)) {

              // Hide Profile
              const profileView = document.getElementById('patient-profile-view');
              if (profileView) profileView.style.display = 'none';

              // Navigate to Case Notification
              App.showScreen('case-notification');

              // Wait for screen transition
              setTimeout(() => {
                // Pre-fill forms for all diseases
                if (CaseNotificationModule && CaseNotificationModule.diseases) {
                  const diseaseIds = Object.keys(CaseNotificationModule.diseases);
                  const p = this.currentPatient;
                  diseaseIds.forEach(id => {
                      if (typeof window._fillPatientForm === 'function') {
                          window._fillPatientForm(p, id);
                      }
                      // Preenche unidade de saúde padrão
                      const unitEl = document.getElementById(`health-unit-${id}`);
                      if (unitEl) {
                           let defaultUnit = 'ubs_hiroshi_matsuda';
                           if (typeof AuthModule !== 'undefined' && AuthModule.currentUser && AuthModule.currentUser.healthCenter) {
                               const centerLower = AuthModule.currentUser.healthCenter.toLowerCase();
                               if (centerLower.includes('hiroshi') || centerLower.includes('hirochi')) defaultUnit = 'ubs_hiroshi_matsuda';
                               else if (centerLower.includes('jaime')) defaultUnit = 'ubs_jaime_pinto';
                               else if (centerLower.includes('laranjeiras')) defaultUnit = 'ubs_laranjeiras';
                               else if (centerLower.includes('liberdade')) defaultUnit = 'ubs_liberdade';
                               else if (centerLower.includes('pedro') || centerLower.includes('cavalcante')) defaultUnit = 'ubs_pedro_cavalcante';
                               else if (centerLower.includes('jose pereira') || centerLower.includes('josé pereira')) defaultUnit = 'ubs_jose_pereira';
                               else if (centerLower.includes('crismu')) defaultUnit = 'crismu';
                               else if (centerLower.includes('edivan')) defaultUnit = 'ubs_edivan_xavier';
                               else if (centerLower.includes('zezinha')) defaultUnit = 'ubs_zezinha';
                               else if (centerLower.includes('mariana')) defaultUnit = 'ubs_mariana_moraes';
                               else if (centerLower.includes('demosthenes') || centerLower.includes('demóstenes')) defaultUnit = 'ubs_demosthenes_azevedo';
                               else if (centerLower.includes('joão batista') || centerLower.includes('joao batista')) defaultUnit = 'ubs_joao_batista';
                               else if (centerLower.includes('amadeu') || centerLower.includes('vivacqua') || centerLower.includes('vivácqua')) defaultUnit = 'ubs_amadeu_vivacqua';
                               else if (centerLower.includes('bico doce') || centerLower.includes('maria bico')) defaultUnit = 'ubs_maria_bico_doce';
                               else if (centerLower.includes('carlos') || centerLower.includes('barreto')) defaultUnit = 'ubs_carlos_barreto';
                               else if (centerLower.includes('maria bahia')) defaultUnit = 'posto_maria_bahia';
                               else if (centerLower.includes('elisa') || centerLower.includes('chavito')) defaultUnit = 'ubs_elisa_chavito';
                               else if (centerLower.includes('antonio arruda') || centerLower.includes('antônio arruda') || centerLower.includes('itainópolis') || centerLower.includes('itainopolis')) defaultUnit = 'posto_antonio_arruda';
                               else if (centerLower.includes('jhonatas') || centerLower.includes('sororó') || centerLower.includes('sororo')) defaultUnit = 'ubs_jhonatas_moraes';
                               else if (centerLower.includes('cristalândia') || centerLower.includes('cristalandia')) defaultUnit = 'posto_cristalandia';
                               else if (centerLower.includes('carimã') || centerLower.includes('carima')) defaultUnit = 'posto_carima';
                               else if (centerLower.includes('jose manoel') || centerLower.includes('josé manoel') || centerLower.includes('anunciação')) defaultUnit = 'posto_jose_manoel';
                               else if (centerLower.includes('municipal') || centerLower.includes('hmm')) defaultUnit = 'hmm';
                               else if (centerLower.includes('regional')) defaultUnit = 'regional';
                               else if (centerLower.includes('materno') || centerLower.includes('infantil') || centerLower.includes('hmi')) defaultUnit = 'hmi';
                               else if (centerLower.includes('secretaria') || centerLower.includes('saúde') || centerLower.includes('saude')) defaultUnit = 'ubs_hiroshi_matsuda';
                               else defaultUnit = 'outra';
                           }
                           unitEl.value = defaultUnit;
                      }
                  });
                }
              }, 300);
            }
          }
        }
      });
    });
  },

  async handleSearch(term) {
    if (!term || !term.trim()) return;
    const q = term.trim().toLowerCase();

    // Tenta busca no servidor primeiro
    try {
      if (typeof EpiAPI !== 'undefined' && EpiAPI.isLoggedIn()) {
        const results = await EpiAPI.searchPatients(q);
        this.renderResults(results);
        return;
      }
    } catch (err) {
      console.warn('[PatientModule] Falha na busca da API, usando fallback local:', err.message);
    }

    // Fallback: busca no mockDB local (funciona sem servidor)
    const localResults = this.mockDB.filter(p => {
      const name = p.name ? p.name.toLowerCase() : '';
      const cpf  = p.cpf  ? p.cpf.replace(/[\.\-]/g, '') : '';
      const cns  = p.cns  ? p.cns.replace(/\s/g, '') : '';
      const qClean = q.replace(/[\.\-\s]/g, '');
      return name.includes(q) || cpf.includes(qClean) || cns.includes(qClean);
    });

    // Normaliza para o mesmo formato esperado pelo renderResults
    const normalized = localResults.map(p => ({
      id:        p.id,
      name:      p.name,
      cns:       p.cns  || '-',
      birthDate: p.birthDate || null,
      sex:       p.sex  === 'Feminino' ? 'F' : (p.sex === 'Masculino' ? 'M' : 'I'),
      _local:    true, // flag para identificar registro local
    }));

    this.renderResults(normalized);

    if (!EpiAPI.isLoggedIn()) {
      if (normalized.length > 0) {
        if (window.App) App.showToast('Resultado local (faça login para busca completa no servidor).', 'info');
      }
    }
  },

  renderResults(results) {
    const container = document.getElementById('results-list');
    const section = document.getElementById('patient-results');
    const recentsIndex = document.getElementById('patient-recents');

    container.innerHTML = '';
    recentsIndex.style.display = 'none';
    section.style.display = 'block';

    if (results.length === 0) {
      container.innerHTML = `
                <div style="text-align:center; color:#888; padding:30px;">
                    <i class="fas fa-search" style="font-size: 2rem; margin-bottom: 10px; opacity: 0.5;"></i><br>
                    Nenhum paciente encontrado.<br>
                    <small>Tente buscar por outro termo ou nome</small>
                </div>`;
      return;
    }

    results.forEach(p => {
      let ageText = '';
      if (p.birthDate) {
        // Suporta DD/MM/YYYY (mockDB) e YYYY-MM-DD (API)
        let birth;
        if (typeof p.birthDate === 'string' && p.birthDate.includes('/')) {
          const parts = p.birthDate.split('/');
          birth = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
        } else {
          birth = new Date(p.birthDate);
        }
        if (!isNaN(birth)) {
          const diff = Date.now() - birth.getTime();
          const ageDate = new Date(diff);
          ageText = Math.abs(ageDate.getUTCFullYear() - 1970) + ' anos';
        }
      }
      const sexText = p.sex === 'M' ? 'Masculino' : (p.sex === 'F' ? 'Feminino' : 'Outro');
      const photo = `https://ui-avatars.com/api/?name=${encodeURIComponent(p.name)}&background=00427A&color=fff&bold=true`;

      const card = document.createElement('div');
      card.className = 'patient-card-item';
      card.innerHTML = `
                <div class="p-item-photo">
                    <img src="${photo}" alt="${p.name}">
                </div>
                <div class="p-item-info">
                    <h4>${p.name}</h4>
                    <p>CNS: ${p.cns || '-'}</p>
                    <p>${ageText || '-'} &bull; ${sexText}</p>
                </div>
            `;
      card.onclick = async () => {
        // Se o resultado veio do mockDB local, abre perfil direto sem chamar API
        if (p._local) {
          const localFull = this.mockDB.find(m => String(m.id) === String(p.id));
          if (localFull) {
            this.openProfile({
              id: localFull.id,
              name: localFull.name,
              cpf: localFull.cpf || '-',
              cns: localFull.cns || '-',
              birthDate: localFull.birthDate || null,
              motherName: localFull.motherName || '-',
              sex: localFull.sex === 'Feminino' ? 'F' : (localFull.sex === 'Masculino' ? 'M' : 'I'),
              race: localFull.race || '-',
              bloodType: localFull.blood || '-',
              education: localFull.education || '-',
              zone: localFull.zone || '-',
              address: localFull.address || '-',
              neighborhood: localFull.neighborhood || '-',
              municipality: localFull.municipality || '-',
              uf: localFull.uf || '-',
              phone: localFull.phone || '-',
              conditions: localFull.conditions || [],
              allergies: localFull.allergies || [],
              vaccines: localFull.vaccines || [],
              _vitals: localFull.vitals || null,
              _history: localFull.history || [],
              _badges: localFull.badges || [],
              _photo: localFull.photo || null,
            });
          }
          return;
        }
        // Resultado do servidor — busca prontuário completo
        try {
          if (typeof EpiAPI === 'undefined') return;
          const fullPatient = await EpiAPI.getPatient(p.id);
          this.openProfile(fullPatient);
        } catch (err) {
          if (window.App) App.showToast('Erro ao carregar prontuário completo do servidor.', 'error');
        }
      };
      container.appendChild(card);
    });
  },

  async renderRecents() {
    const container = document.getElementById('recent-patients-list');
    if (!container) return;

    if (typeof EpiAPI === 'undefined' || !EpiAPI.isLoggedIn()) {
      container.innerHTML = `
        <div style="text-align:center; color:#888; padding:20px;">
          <i class="fas fa-lock" style="font-size: 1.5rem; margin-bottom: 8px; opacity: 0.5;"></i><br>
          Acesso restrito. Faça login para ver pacientes recentes.
        </div>`;
      return;
    }

    try {
      const recent = await EpiAPI.searchPatients("");
      container.innerHTML = '';

      if (recent.length === 0) {
        container.innerHTML = `<div style="text-align:center; color:#888; padding:20px;">Nenhum paciente cadastrado.</div>`;
        return;
      }

      recent.slice(0, 5).forEach(p => {
        const photo = `https://ui-avatars.com/api/?name=${encodeURIComponent(p.name)}&background=00427A&color=fff&bold=true`;
        const card = document.createElement('div');
        card.className = 'patient-card-item';
        card.innerHTML = `
                  <div class="p-item-photo">
                      <img src="${photo}" alt="${p.name}">
                  </div>
                  <div class="p-item-info">
                      <h4>${p.name}</h4>
                      <p>${p.cns}</p>
                  </div>
              `;
        card.onclick = async () => {
          try {
            const fullPatient = await EpiAPI.getPatient(p.id);
            PatientModule.openProfile(fullPatient);
          } catch (err) {
            if (window.App) App.showToast('Erro ao carregar prontuário do servidor.', 'error');
          }
        };
        container.appendChild(card);
      });
    } catch (err) {
      container.innerHTML = `<div style="text-align:center; color:#888; padding:20px;">Erro ao carregar lista de pacientes.</div>`;
    }
  },

  openProfile(patient) {
    let age = '-';
    if (patient.birthDate) {
      let birth;
      // Suporta DD/MM/YYYY (mockDB) e YYYY-MM-DD (API)
      if (typeof patient.birthDate === 'string' && patient.birthDate.includes('/')) {
        const parts = patient.birthDate.split('/');
        birth = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
      } else {
        birth = new Date(patient.birthDate);
      }
      if (!isNaN(birth)) {
        const diff = Date.now() - birth.getTime();
        const ageDate = new Date(diff);
        age = Math.abs(ageDate.getUTCFullYear() - 1970);
      }
    }
    
    // Suporte a _badges, _vitals, _history, _photo (vêm do fallback local do mockDB)
    const rawBadges   = patient._badges   || (patient.conditions ? (typeof patient.conditions === 'string' ? JSON.parse(patient.conditions) : patient.conditions).map(c => ({ text: c, type: 'warning' })) : []);
    const rawVitals   = patient._vitals   || patient.vitals  || { bp: '120/80', weight: '70', temp: '36.5', o2: '98', heartRate: '72' };
    const rawHistory  = patient._history  || patient.history || [{ date: new Date().toLocaleDateString('pt-BR'), title: 'Consulta Geral', desc: 'Abertura de Prontuário no sistema EpiConecta.' }];
    const rawPhoto    = patient._photo    || `https://ui-avatars.com/api/?name=${encodeURIComponent(patient.name)}&background=00427A&color=fff&bold=true`;

    let birthDateFormatted = 'N/I';
    if (patient.birthDate) {
      if (typeof patient.birthDate === 'string' && patient.birthDate.includes('/')) {
        birthDateFormatted = patient.birthDate; // já formatado
      } else {
        const d = new Date(patient.birthDate);
        if (!isNaN(d)) birthDateFormatted = d.toLocaleDateString('pt-BR');
      }
    }

    const mappedPatient = {
      id: patient.id,
      name: patient.name,
      age: age,
      sex: patient.sex === 'M' ? 'Masculino' : (patient.sex === 'F' ? 'Feminino' : 'Outro'),
      cns: patient.cns || 'Não cadastrado',
      cpf: patient.cpf || 'Não cadastrado',
      blood: patient.bloodType || patient.blood || 'N/I',
      birthDate: birthDateFormatted,
      motherName: patient.motherName || 'Não informada',
      nationality: 'Brasileira',
      race: patient.race || 'Não informada',
      education: patient.education || 'Não informada',
      zone: patient.zone || 'Urbana',
      address: patient.address || '',
      neighborhood: patient.neighborhood || '',
      municipality: patient.municipality || 'Marabá',
      uf: patient.uf || 'PA',
      phone: patient.phone || 'Não informado',
      badges: rawBadges,
      allergies: typeof patient.allergies === 'string' ? JSON.parse(patient.allergies) : (patient.allergies || []),
      conditions: typeof patient.conditions === 'string' ? JSON.parse(patient.conditions) : (patient.conditions || []),
      vitals: rawVitals,
      history: rawHistory,
      vaccines: typeof patient.vaccines === 'string' ? JSON.parse(patient.vaccines) : (patient.vaccines || []),
      photo: rawPhoto,
    };

    this.currentPatient = mappedPatient;
    
    // Toggle Views
    const searchBar = document.querySelector('.patient-search-bar');
    const recents = document.getElementById('patient-recents');
    const results = document.getElementById('patient-results');
    const profileView = document.getElementById('patient-profile-view');

    if (searchBar) searchBar.style.display = 'none';
    if (recents) recents.style.display = 'none';
    if (results) results.style.display = 'none';
    if (profileView) profileView.style.display = 'flex';

    // Populate Header
    document.getElementById('p-photo').src = mappedPatient.photo;
    document.getElementById('p-name').innerText = mappedPatient.name;
    document.getElementById('p-age').innerText = `${mappedPatient.age} anos`;
    document.getElementById('p-sex').innerText = mappedPatient.sex;
    document.getElementById('p-blood').innerText = mappedPatient.blood;
    document.getElementById('p-cns').innerText = mappedPatient.cns;

    // Populate Badges
    const badgesContainer = document.getElementById('p-badges');
    badgesContainer.innerHTML = '';
    mappedPatient.badges.forEach(b => {
      const span = document.createElement('span');
      span.className = `p-badge ${b.type}`;
      span.innerText = b.text;
      badgesContainer.appendChild(span);
    });

    // Summary Tab
    const allergiesList = document.getElementById('p-allergies-list');
    allergiesList.innerHTML = '';
    if (mappedPatient.allergies.length > 0) {
      mappedPatient.allergies.forEach(a => {
        const li = document.createElement('li');
        li.innerText = a;
        allergiesList.appendChild(li);
      });
      document.getElementById('p-allergies-box').style.display = 'block';
    } else {
      document.getElementById('p-allergies-box').style.display = 'none';
    }

    // Vitals
    document.getElementById('v-bp').innerText = mappedPatient.vitals.bp;
    document.getElementById('v-weight').innerText = mappedPatient.vitals.weight;

    // History Tab
    const timeline = document.getElementById('p-timeline');
    timeline.innerHTML = '';
    mappedPatient.history.forEach(h => {
      const item = document.createElement('div');
      item.className = 'timeline-item';
      item.innerHTML = `
                <div class="timeline-date">${h.date}</div>
                <div class="timeline-content">
                    <h4>${h.title}</h4>
                    <p>${h.desc}</p>
                </div>
             `;
      timeline.appendChild(item);
    });

    // Notifications Tab
    const nList = document.getElementById('p-notifications-list');
    if (nList) {
        nList.innerHTML = '';
        const notifications = mappedPatient.history.filter(h => h.isNotification || h.title.includes('Notificação'));
        
        if (notifications.length === 0) {
            nList.innerHTML = '<p style="color: #666; text-align: center; margin-top: 20px;">Nenhuma notificação registrada.</p>';
        } else {
            notifications.forEach((n, index) => {
                const item = document.createElement('div');
                item.className = 'patient-card-item';
                item.style.marginBottom = '12px';
                item.style.padding = '14px 16px';
                item.style.border = '1px solid #e0e0e0';
                item.style.borderRadius = '8px';
                item.style.display = 'flex';
                item.style.flexDirection = 'column';
                item.style.gap = '8px';
                item.style.backgroundColor = 'white';
                
                const notifData = n.notificationData || {};
                const isEdited = n.isEdited || notifData.isEdited;
                const updatedByName = n.updatedByName || notifData.updatedByName;
                const updatedAt = n.updatedAt || notifData.updatedAt;

                item.innerHTML = `
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; width: 100%;">
                        <div class="p-item-info">
                            <h4 style="color: var(--primary-color); margin: 0 0 5px 0; display: flex; align-items: center; gap: 8px;">
                                ${n.title}
                                ${isEdited ? `<span style="background: #fff3cd; color: #856404; border: 1px solid #ffeeba; font-size: 0.72rem; padding: 2px 7px; border-radius: 4px; font-weight: bold; font-family: sans-serif;"><i class="fas fa-edit"></i> Alterada</span>` : ''}
                            </h4>
                            <p style="margin: 0; font-size: 0.88rem; color: #555;"><i class="far fa-calendar-alt"></i> Data Notificação: ${n.date}</p>
                        </div>
                        <button class="btn btn-outline btn-sm btn-view-notif" style="padding: 6px 12px; font-size: 0.85rem; cursor: pointer; flex-shrink: 0;">Ver mais</button>
                    </div>
                    ${isEdited ? `
                        <div class="alert-notif-edited" style="padding: 8px 12px; background-color: #fff8e1; border-left: 4px solid #ffb300; border-radius: 4px; font-size: 0.83rem; color: #8f6b00; display: flex; align-items: center; gap: 8px; margin-top: 4px;">
                            <i class="fas fa-exclamation-triangle" style="color: #ffa000; font-size: 1rem;"></i>
                            <span><strong>Alerta de Alteração:</strong> Modificada por <strong>${updatedByName || 'Profissional'}</strong> em <strong>${updatedAt || n.date}</strong></span>
                        </div>
                    ` : ''}
                `;
                item.querySelector('.btn-view-notif').addEventListener('click', () => {
                    if (typeof window.showPatientNotificationDetail === 'function') {
                        window.showPatientNotificationDetail(n, mappedPatient);
                    }
                });
                nList.appendChild(item);
            });
        }
    }

    // Vaccines Tab
    const vList = document.getElementById('p-vaccines-list');
    vList.innerHTML = '';
    patient.vaccines.forEach(v => {
      const item = document.createElement('div');
      item.className = 'patient-card-item'; // reuse style
      item.style.marginBottom = '10px';
      item.innerHTML = `
                <div class="p-item-info">
                    <h4>${v.name}</h4>
                    <p>Aplicado em: ${v.date}</p>
                </div>
            `;
      vList.appendChild(item);
    });
  }
};

// Módulo do Mapa Epidemiológico (Proportional Bubble Map - Real Neighborhoods)
const MapModule = {
  map: null,
  userLocation: null,
  currentDisease: 'dengue',
  layerGroup: null,

  // Configurações de Cores (Severity Gradient)
  colors: {
    low: '#FFD54F',    // Amarelo (Baixo)
    medium: '#FF9800', // Laranja (Médio)
    high: '#F44336',   // Vermelho (Alto)
    critical: '#B71C1C' // Vermelho Escuro (Crítico)
  },

  // Cidades Predefinidas - Focada em Marabá
  cities: {
    'maraba': { coords: [-5.3699, -49.1169], label: 'Marabá' }
  },

  // Dados Reais de Bairros de Marabá (Centróides dos Núcleos Urbanos)
  // Ajustado com "Strict Geofencing" para evitar rios
  neighborhoodsData: {
    'maraba': [
      // Velha Marabá (Pioneira) - Mais ao sul da ponta para evitar o rio
      { name: 'Marabá Pioneira (Centro)', lat: -5.3530, lng: -49.1350, radius: 0.005 },

      // Cidade Nova - Bem definido ao sul da Nova Marabá (outro lado da ponte)
      { name: 'Cidade Nova', lat: -5.3750, lng: -49.0750, radius: 0.007 },
      { name: 'Novo Horizonte', lat: -5.3780, lng: -49.0820, radius: 0.004 },

      // Nova Marabá - O grande centro planejado (Folhas)
      // Dividido em zonas para cobrir melhor sem pegar o rio Itacaiúnas
      { name: 'Nova Marabá (Folhas Norte)', lat: -5.3500, lng: -49.0950, radius: 0.006 },
      { name: 'Nova Marabá (Folhas Sul)', lat: -5.3600, lng: -49.0900, radius: 0.006 },

      // São Félix - Margem norte do Tocantins
      { name: 'São Félix Pioneiro', lat: -5.3280, lng: -49.1550, radius: 0.005 },
      { name: 'São Félix II', lat: -5.3320, lng: -49.1480, radius: 0.005 },

      // Morada Nova - Longe, nordeste
      { name: 'Morada Nova', lat: -5.2950, lng: -49.0400, radius: 0.006 },

      // Industrial
      { name: 'Distrito Industrial', lat: -5.3900, lng: -49.0600, radius: 0.005 }
    ]
  },

  // Postos de Saúde e Hospitais de Marabá (Localizações reais aproximadas por núcleo)
  healthCenters: [
    // Velha Marabá (Pioneira) - Próximo à orla/centro histórico
    // Velha Marabá (Pioneira) - Centro Histórico real
    { name: 'UBS Demétrio Ribeiro', lat: -5.3540, lng: -49.1340, type: 'ubs', info: 'Pioneira. Atendimento Geral.' },
    { name: 'Centro de Zoonoses', lat: -5.3510, lng: -49.1310, type: 'ubs', info: 'Controle Vetorial.' },

    // Nova Marabá
    { name: 'Hospital Municipal (HMM)', lat: -5.3545, lng: -49.0945, type: 'hospital', info: 'Folha 17. Emergência 24h.' },
    { name: 'Hosp. Regional do Sudeste', lat: -5.3610, lng: -49.0890, type: 'hospital', info: 'Alta Complexidade.' },
    { name: 'Hosp. Materno Infantil', lat: -5.3525, lng: -49.0925, type: 'hospital', info: 'Folha 11.' },
    { name: 'UBS Hiroshi Matsuda', lat: -5.3500, lng: -49.1020, type: 'ubs', info: 'Folha 11.' },
    { name: 'UBS Enfermeira Zezinha', lat: -5.3515, lng: -49.0970, type: 'ubs', info: 'Folha 23.' },

    // Cidade Nova
    { name: 'UBS Laranjeiras', lat: -5.3760, lng: -49.0790, type: 'ubs', info: 'Cidade Nova.' },
    { name: 'UBS Pedro Cavalcante', lat: -5.3790, lng: -49.0820, type: 'ubs', info: 'Novo Horizonte.' },

    // São Félix
    { name: 'UBS Amadeu Vivacqua', lat: -5.3290, lng: -49.1530, type: 'ubs', info: 'São Félix II.' },

    // Morada Nova
    { name: 'UBS Morada Nova', lat: -5.2960, lng: -49.0410, type: 'ubs', info: 'Morada Nova.' },
    // (Fim da lista atualizada)




    // Cidade Nova



    // São Félix


    // Morada Nova

  ],

  init() {
    this.setupEventListeners();
    // Load initial data
    setTimeout(() => {
      this.generateCasesList('maraba');
    }, 500);
  },

  setupEventListeners() {
    const selectDisease = document.getElementById('case-filter-disease');
    const applyBtn = document.getElementById('apply-filter-btn');

    if (selectDisease) {
      selectDisease.addEventListener('change', (e) => {
        this.currentDisease = e.target.value;
      });
    }

    if (applyBtn) {
      applyBtn.onclick = () => {
        // Add loading effect
        applyBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Aplicando...';
        setTimeout(() => {
          this.generateCasesList('maraba');
          applyBtn.innerHTML = '<i class="fas fa-filter"></i> Aplicar';
        }, 600); // Small delay for UX
      };
    }
  },

  // Simplified List Generation - No Map
  generateCasesList(cityKey) {
    const tbody = document.getElementById('full-cases-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';

    let neighborhoods;
    if (this.neighborhoodsData[cityKey]) {
      neighborhoods = this.neighborhoodsData[cityKey];
    } else {
      neighborhoods = [{ name: 'Centro' }];
    }

    // Mock Names
    const names = ['Maria Silva', 'João Souza', 'Ana Oliveira', 'Pedro Santos', 'Lucas Pereira', 'Carla Lima', 'Fernanda Costa', 'Marcos Alves', 'Juliana Rocha', 'Gabriel Dias', 'Patricia Gomes', 'Rafael Martins', 'Beatriz Araujo', 'Thiago Lopes', 'Vanessa Cardoso', 'Rodrigo Lima', 'Camila Ferreira', 'Felipe Santos', 'Mariana Costa', 'Bruno Oliveira'];

    // Generate 20 Cases
    const numCases = 20;

    for (let i = 0; i < numCases; i++) {
      const hood = neighborhoods[Math.floor(Math.random() * neighborhoods.length)];
      const patientName = names[i % names.length];
      const status = Math.random() > 0.4 ? 'Confirmado' : 'Em Análise';

      // Random Date (Last 30 days)
      const date = new Date();
      date.setDate(date.getDate() - Math.floor(Math.random() * 30));
      const dateStr = date.toLocaleDateString('pt-BR');

      let disease = this.currentDisease;
      if (disease === 'all' || !disease) {
        const diseases = ['Dengue', 'Zika', 'Chikungunya', 'Leishmaniose', 'Hanseníase'];
        disease = diseases[Math.floor(Math.random() * diseases.length)];
      } else {
        disease = disease.charAt(0).toUpperCase() + disease.slice(1);
      }

      const tr = document.createElement('tr');
      tr.style.borderBottom = '1px solid #eee';

      tr.innerHTML = `
            <td style="padding: 15px; font-weight: 500; color: #333;">${patientName}</td>
            <td style="padding: 15px; color: #666;">${hood.name}</td>
            <td style="padding: 15px; color: var(--primary-color); font-weight: 500;">${disease}</td>
            <td style="padding: 15px; color: #666;">${dateStr}</td>
            <td style="padding: 15px;">
                <span style="padding: 6px 12px; border-radius: 20px; font-size: 0.85rem; font-weight: 500; background: ${status === 'Confirmado' ? '#ffebee' : '#fff3e0'}; color: ${status === 'Confirmado' ? '#c62828' : '#ef6c00'};">
                    ${status}
                </span>
            </td>
        `;

      tbody.appendChild(tr);
    }
  },

  addLegend() {
    if (document.querySelector('.map-legend')) return;

    const legend = L.control({ position: 'bottomleft' });

    legend.onAdd = (map) => {
      const div = L.DomUtil.create('div', 'map-legend');
      this.updateLegendContent(div);
      return div;
    };

    legend.addTo(this.map);
  },

  fixSize() {
    if (this.map) {
      setTimeout(() => {
        this.map.invalidateSize();
      }, 200);
    }
  },

  addHealthCenters() {
    // Custom Icons
    const hospitalIcon = L.divIcon({
      className: 'custom-map-icon',
      html: '<div style="background-color: #D32F2F; width: 24px; height: 24px; border-radius: 50%; border: 2px solid white; display: flex; align-items: center; justify-content: center; color: white; box-shadow: 0 2px 5px rgba(0,0,0,0.3);"><i class="fas fa-hospital-symbol"></i></div>',
      iconSize: [24, 24],
      iconAnchor: [12, 12]
    });

    const ubsIcon = L.divIcon({
      className: 'custom-map-icon',
      html: '<div style="background-color: #1976D2; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white; display: flex; align-items: center; justify-content: center; color: white; font-size: 10px; box-shadow: 0 2px 5px rgba(0,0,0,0.3);"><i class="fas fa-clinic-medical"></i></div>',
      iconSize: [20, 20],
      iconAnchor: [10, 10]
    });

    if (this.healthCenters) {
      this.healthCenters.forEach(center => {
        const icon = center.type === 'hospital' ? hospitalIcon : ubsIcon;
        const marker = L.marker([center.lat, center.lng], { icon: icon });

        marker.bindPopup(`
                  <div style="text-align: center; min-width: 150px;">
                      <strong style="color: #333; display: block; margin-bottom: 5px;">${center.name}</strong>
                      <span style="font-size: 0.85em; color: #666;">${center.info}</span>
                  </div>
              `);

        this.layerGroup.addLayer(marker);
      });
    }
  },

  updateLegendContent(div) {
    div.innerHTML = `
            <strong>Densidade de Casos</strong><br>
            <div style="display: flex; align-items: center; gap: 8px; margin-top: 8px;">
                <div style="width: 10px; height: 10px; border-radius: 50%; background: ${this.colors.low}; opacity: 0.6;"></div>
                <span style="font-size: 0.8rem;">Baixo</span>
            </div>
             <div style="display: flex; align-items: center; gap: 8px;">
                <div style="width: 16px; height: 16px; border-radius: 50%; background: ${this.colors.medium}; opacity: 0.6;"></div>
                <span style="font-size: 0.8rem;">Médio</span>
            </div>
             <div style="display: flex; align-items: center; gap: 8px;">
                <div style="width: 24px; height: 24px; border-radius: 50%; background: ${this.colors.high}; opacity: 0.6;"></div>
                <span style="font-size: 0.8rem;">Alto</span>
            </div>
            <div style="margin-top: 8px; font-size: 0.7rem; color: #666; font-style: italic;">
                * Tamanho proporcional<br>ao nº de casos
            </div>
        `;
  }
};

// Expose to Window for Debugging/Inline access
window.MapModule = MapModule;

// Módulo de Notificação de Casos
const CaseNotificationModule = {
  currentDisease: 'dengue',

  // Lista completa de doenças tropicais negligenciadas (OMS)
  diseases: {
    'acidente-ofidico': { name: 'Acidente Ofídico', icon: 'fa-paw', category: 'outra' },
    'ancilostomiase': { name: 'Ancilostomíase', icon: 'fa-bug', category: 'helmintíase' },
    'ascaridiase': { name: 'Ascaridíase', icon: 'fa-bug', category: 'helmintíase' },
    'chikungunya': { name: 'Chikungunya', icon: 'fa-mosquito', category: 'vetor' },
    'cisticercose': { name: 'Cisticercose', icon: 'fa-bug', category: 'helmintíase' },
    'dengue': { name: 'Dengue', icon: 'fa-mosquito', category: 'vetor' },
    'chagas': { name: 'Doença de Chagas', icon: 'fa-home', category: 'vetor' },
    'malaria': { name: 'Malária', icon: 'fa-mosquito', category: 'vetor' },
    'escabiose': { name: 'Escabiose', icon: 'fa-bug', category: 'outra' },
    'esquistossomose': { name: 'Esquistossomose', icon: 'fa-eye', category: 'helmintíase' },
    'estrongiloidiase': { name: 'Estrongiloidíase', icon: 'fa-bug', category: 'helmintíase' },
    'hanseniase': { name: 'Hanseníase', icon: 'fa-user-injured', category: 'bacteriana' },
    'leishmaniose-tegumentar': { name: 'Leishmaniose Tegumentar', icon: 'fa-bug', category: 'vetor' },
    'leishmaniose-visceral': { name: 'Leishmaniose Visceral', icon: 'fa-bug', category: 'vetor' },
    'leptospirose': { name: 'Leptospirose', icon: 'fa-virus', category: 'bacteriana' },
    'micetoma': { name: 'Micetoma', icon: 'fa-hand-paper', category: 'outra' },
    'raiva': { name: 'Raiva', icon: 'fa-paw', category: 'outra' },
    'teniase': { name: 'Teníase', icon: 'fa-bug', category: 'helmintíase' },
    'tracoma': { name: 'Tracoma', icon: 'fa-eye', category: 'bacteriana' },
    'tricuriase': { name: 'Tricuríase', icon: 'fa-bug', category: 'helmintíase' },
    'zika': { name: 'Zika', icon: 'fa-mosquito', category: 'vetor' }
  },

  init() {
    this.renderDiseaseSelector();
    this.setupDiseaseSearch();
    this.setupDiseaseTabs();
    this.setupDropdown();
    this.setupForms();
    this.generateAllForms();
  },

  setupDiseaseSearch() {
    const input = document.getElementById('disease-search-input');
    if (input) {
      input.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        // Filter tabs
        const tabs = document.querySelectorAll('.disease-tab');
        let firstVisibleTab = null;
        tabs.forEach(tab => {
          const text = tab.textContent.toLowerCase();
          if (text.includes(query)) {
            tab.style.display = 'flex';
            if (!firstVisibleTab) firstVisibleTab = tab.dataset.disease;
          } else {
            tab.style.display = 'none';
          }
        });

        // Filter dropdown options
        const optgroups = document.querySelectorAll('#disease-dropdown optgroup');
        let firstSelectOpt = null;
        if (optgroups.length > 0) {
          optgroups.forEach(group => {
            let hasVisible = false;
            Array.from(group.children).forEach(opt => {
              const text = opt.textContent.toLowerCase();
              if (text.includes(query)) {
                opt.style.display = '';
                hasVisible = true;
                if (!firstSelectOpt) firstSelectOpt = opt.value;
              } else {
                opt.style.display = 'none';
              }
            });
            group.style.display = hasVisible ? '' : 'none';
          });
        }
        
        // Auto-switch to the first matching disease if there is a specific search
        if (query.length > 2) {
            if (firstVisibleTab) this.switchDisease(firstVisibleTab);
            else if (firstSelectOpt) this.switchDisease(firstSelectOpt);
        }
      });
    }
  },

  renderDiseaseSelector() {
    // Render tabs for desktop
    const tabsContainer = document.getElementById('disease-tabs');
    if (!tabsContainer) return;

    tabsContainer.innerHTML = '';

    Object.entries(this.diseases).forEach(([id, disease]) => {
      const tab = document.createElement('button');
      tab.className = `disease-tab ${id === 'dengue' ? 'active' : ''}`;
      tab.dataset.disease = id;
      tab.innerHTML = `<i class="fas ${disease.icon}"></i><span>${disease.name}</span>`;
      tabsContainer.appendChild(tab);
    });

    // Render dropdown for mobile
    const dropdownContainer = document.getElementById('disease-dropdown-container');
    if (dropdownContainer) {
      const select = document.createElement('select');
      select.id = 'disease-dropdown';
      select.className = 'disease-dropdown';

      // Group by category
      const categories = {
        'vetor': '🦟 Transmitidas por vetores',
        'helmintíase': '🪱 Helmintíases e parasitoses',
        'bacteriana': '🦠 Infecções bacterianas',
        'outra': '🧫 Outras'
      };

      Object.entries(categories).forEach(([catKey, catName]) => {
        const optgroup = document.createElement('optgroup');
        optgroup.label = catName;

        Object.entries(this.diseases)
          .filter(([_, disease]) => disease.category === catKey)
          .forEach(([id, disease]) => {
            const option = document.createElement('option');
            option.value = id;
            option.textContent = disease.name;
            if (id === 'dengue') option.selected = true;
            optgroup.appendChild(option);
          });

        select.appendChild(optgroup);
      });

      dropdownContainer.innerHTML = '';
      dropdownContainer.appendChild(select);
    }
  },

  setupDiseaseTabs() {
    const tabs = document.querySelectorAll('.disease-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const disease = tab.dataset.disease;
        this.switchDisease(disease);
      });
    });
  },

  setupDropdown() {
    const dropdown = document.getElementById('disease-dropdown');
    if (dropdown) {
      dropdown.addEventListener('change', (e) => {
        this.switchDisease(e.target.value);
      });
    }
  },

  switchDisease(disease) {
    if (!this.diseases[disease]) return;

    this.currentDisease = disease;

    // Update tabs (desktop)
    document.querySelectorAll('.disease-tab').forEach(tab => {
      if (tab.dataset.disease === disease) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    // Update dropdown (mobile)
    const dropdown = document.getElementById('disease-dropdown');
    if (dropdown) {
      dropdown.value = disease;
    }

    // Update forms
    document.querySelectorAll('.disease-form').forEach(form => {
      if (form.id === `form-${disease}`) {
        form.style.display = 'block';
        form.classList.add('active');
      } else {
        form.style.display = 'none';
        form.classList.remove('active');
      }
    });

    // Scroll to form
    const activeForm = document.getElementById(`form-${disease}`);
    if (activeForm) {
      activeForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  },

  generateAllForms() {
    const formCard = document.querySelector('.notification-form-card');
    if (!formCard) { console.error('[EpiConecta] .notification-form-card not found!'); return; }

    // Clear existing forms (keep structure)
    const existingForms = formCard.querySelectorAll('.disease-form');
    existingForms.forEach(form => {
      if (!form.id.startsWith('form-')) return;
      const diseaseId = form.id.replace('form-', '');
      if (!this.diseases[diseaseId]) {
        form.remove();
      }
    });

    // Generate forms for all diseases
    Object.entries(this.diseases).forEach(([id, disease]) => {
      if (document.getElementById(`form-${id}`)) return; // Already exists

      const formDiv = document.createElement('div');
      formDiv.className = `disease-form ${id === 'dengue' ? 'active' : ''}`;
      formDiv.id = `form-${id}`;
      if (id !== 'dengue') formDiv.style.display = 'none';

      let block7Html = '';
      if (id === 'dengue' || id === 'chikungunya') {
        block7Html = `
          <!-- BLOCO 7: DADOS CLÍNICOS E LABORATORIAIS (SINAN DENGUE E FEBRE DE CHIKUNGUNYA) -->
          <div class="sinan-section">
             <div class="sinan-section-title"><i class="fas fa-stethoscope"></i> Dados Clínicos e Investigação (Campos 31-34)</div>
             <div class="sinan-grid-4">
                  <div class="form-group">
                      <label>31 - Data da Investigação</label>
                      <input type="date" id="dengue-data-investigacao-${id}">
                  </div>
                  <div class="form-group span-3">
                      <label>32 - Ocupação</label>
                      <input type="text" id="dengue-ocupacao-${id}" placeholder="Ocupação do paciente">
                  </div>
             </div>

             <!-- Campo 33: Sinais Clínicos -->
             <div style="margin-top: 15px;">
                 <label style="font-weight: bold; color: var(--primary); font-size: 0.85rem; text-transform: uppercase;">
                     33 - Sinais Clínicos (1-Sim | 2-Não)
                 </label>
                 <div class="sinan-grid-4" style="margin-top: 8px; background: rgba(0,0,0,0.02); padding: 12px; border-radius: 8px; border: 1px solid var(--border-color);">
                     <div class="form-group"><label>Febre</label><select id="dengue-sint-febre-${id}"><option value="1">1 - Sim</option><option value="2">2 - Não</option></select></div>
                     <div class="form-group"><label>Mialgia</label><select id="dengue-sint-mialgia-${id}"><option value="1">1 - Sim</option><option value="2">2 - Não</option></select></div>
                     <div class="form-group"><label>Cefaleia</label><select id="dengue-sint-cefaleia-${id}"><option value="1">1 - Sim</option><option value="2">2 - Não</option></select></div>
                     <div class="form-group"><label>Exantema</label><select id="dengue-sint-exantema-${id}"><option value="1">1 - Sim</option><option value="2">2 - Não</option></select></div>
                     <div class="form-group"><label>Vômito</label><select id="dengue-sint-vomito-${id}"><option value="1">1 - Sim</option><option value="2">2 - Não</option></select></div>
                     <div class="form-group"><label>Náuseas</label><select id="dengue-sint-nauseas-${id}"><option value="1">1 - Sim</option><option value="2">2 - Não</option></select></div>
                     <div class="form-group"><label>Dor nas Costas</label><select id="dengue-sint-costas-${id}"><option value="1">1 - Sim</option><option value="2">2 - Não</option></select></div>
                     <div class="form-group"><label>Conjuntivite</label><select id="dengue-sint-conjuntivite-${id}"><option value="1">1 - Sim</option><option value="2">2 - Não</option></select></div>
                     <div class="form-group"><label>Artrite</label><select id="dengue-sint-artrite-${id}"><option value="1">1 - Sim</option><option value="2">2 - Não</option></select></div>
                     <div class="form-group"><label>Artralgia Intensa</label><select id="dengue-sint-artralgia-${id}"><option value="1">1 - Sim</option><option value="2">2 - Não</option></select></div>
                     <div class="form-group"><label>Petéquias</label><select id="dengue-sint-petequias-${id}"><option value="1">1 - Sim</option><option value="2">2 - Não</option></select></div>
                     <div class="form-group"><label>Leucopenia</label><select id="dengue-sint-leucopenia-${id}"><option value="1">1 - Sim</option><option value="2">2 - Não</option></select></div>
                     <div class="form-group"><label>Prova do Laço Positiva</label><select id="dengue-sint-laco-${id}"><option value="1">1 - Sim</option><option value="2">2 - Não</option></select></div>
                     <div class="form-group"><label>Dor Retroorbital</label><select id="dengue-sint-retroorbital-${id}"><option value="1">1 - Sim</option><option value="2">2 - Não</option></select></div>
                 </div>
             </div>

             <!-- Campo 34: Doenças pré-existentes -->
             <div style="margin-top: 15px;">
                 <label style="font-weight: bold; color: var(--primary); font-size: 0.85rem; text-transform: uppercase;">
                     34 - Doenças Pré-existentes (1-Sim | 2-Não | 9-Ignorado)
                 </label>
                 <div class="sinan-grid-4" style="margin-top: 8px; background: rgba(0,0,0,0.02); padding: 12px; border-radius: 8px; border: 1px solid var(--border-color);">
                     <div class="form-group"><label>Diabetes</label><select id="dengue-comorb-diabetes-${id}"><option value="1">1 - Sim</option><option value="2">2 - Não</option><option value="9" selected>9 - Ignorado</option></select></div>
                     <div class="form-group"><label>Hepatopatias</label><select id="dengue-comorb-hepatopatias-${id}"><option value="1">1 - Sim</option><option value="2">2 - Não</option><option value="9" selected>9 - Ignorado</option></select></div>
                     <div class="form-group"><label>Hipertensão Arterial</label><select id="dengue-comorb-hipertensao-${id}"><option value="1">1 - Sim</option><option value="2">2 - Não</option><option value="9" selected>9 - Ignorado</option></select></div>
                     <div class="form-group"><label>Doenças Auto-imunes</label><select id="dengue-comorb-autoimunes-${id}"><option value="1">1 - Sim</option><option value="2">2 - Não</option><option value="9" selected>9 - Ignorado</option></select></div>
                     <div class="form-group"><label>Doenças Hematológicas</label><select id="dengue-comorb-hematologicas-${id}"><option value="1">1 - Sim</option><option value="2">2 - Não</option><option value="9" selected>9 - Ignorado</option></select></div>
                     <div class="form-group"><label>Doença Renal Crônica</label><select id="dengue-comorb-renal-${id}"><option value="1">1 - Sim</option><option value="2">2 - Não</option><option value="9" selected>9 - Ignorado</option></select></div>
                     <div class="form-group"><label>Doença Ácido-Péptica</label><select id="dengue-comorb-peptica-${id}"><option value="1">1 - Sim</option><option value="2">2 - Não</option><option value="9" selected>9 - Ignorado</option></select></div>
                 </div>
             </div>
          </div>

          <!-- DADOS LABORATORIAIS -->
          <div class="sinan-section">
             <div class="sinan-section-title"><i class="fas fa-vial"></i> Dados Laboratoriais (Campos 35-49)</div>
             
             <!-- Chikungunya Lab -->
             <div style="font-weight: bold; color: var(--primary); font-size: 0.85rem; text-transform: uppercase; margin-bottom: 8px;">
                 Sorologia (IgM) Chikungunya & Exame PRNT
             </div>
             <div class="sinan-grid-4">
                  <div class="form-group">
                      <label>35 - Data Coleta 1ª Amostra (S1)</label>
                      <input type="date" id="chik-s1-date-${id}">
                  </div>
                  <div class="form-group">
                      <label>36 - Data Coleta 2ª Amostra (S2)</label>
                      <input type="date" id="chik-s2-date-${id}">
                  </div>
                  <div class="form-group">
                      <label>37 - Data Coleta Exame PRNT</label>
                      <input type="date" id="chik-prnt-date-${id}">
                  </div>
                  <div class="form-group span-4">
                      <label>38 - Resultados Sorologia Chikungunya / PRNT</label>
                      <div class="sinan-grid-3" style="gap: 10px;">
                          <div>
                              <span style="font-size: 0.75rem; color: var(--text-gray);">Resultado S1:</span>
                              <select id="chik-s1-res-${id}">
                                  <option value="1">1 - Reagente</option>
                                  <option value="2">2 - Não Reagente</option>
                                  <option value="3">3 - Inconclusivo</option>
                                  <option value="4" selected>4 - Não Realizado</option>
                              </select>
                          </div>
                          <div>
                              <span style="font-size: 0.75rem; color: var(--text-gray);">Resultado S2:</span>
                              <select id="chik-s2-res-${id}">
                                  <option value="1">1 - Reagente</option>
                                  <option value="2">2 - Não Reagente</option>
                                  <option value="3">3 - Inconclusivo</option>
                                  <option value="4" selected>4 - Não Realizado</option>
                              </select>
                          </div>
                          <div>
                              <span style="font-size: 0.75rem; color: var(--text-gray);">Resultado PRNT:</span>
                              <select id="chik-prnt-res-${id}">
                                  <option value="1">1 - Reagente</option>
                                  <option value="2">2 - Não Reagente</option>
                                  <option value="3">3 - Inconclusivo</option>
                                  <option value="4" selected>4 - Não Realizado</option>
                              </select>
                          </div>
                      </div>
                  </div>
             </div>

             <!-- Dengue Lab -->
             <div style="font-weight: bold; color: var(--primary); font-size: 0.85rem; text-transform: uppercase; margin-top: 15px; margin-bottom: 8px;">
                 Sorologia (IgM) Dengue & Exames Virológicos
             </div>
             <div class="sinan-grid-4">
                  <div class="form-group">
                      <label>39 - Data Coleta (IgM Dengue)</label>
                      <input type="date" id="dengue-igm-date-${id}">
                  </div>
                  <div class="form-group">
                      <label>40 - Resultado IgM Dengue</label>
                      <select id="dengue-igm-res-${id}">
                          <option value="1">1 - Positivo</option>
                          <option value="2">2 - Negativo</option>
                          <option value="3">3 - Inconclusivo</option>
                          <option value="4" selected>4 - Não Realizado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>41 - Data Coleta Exame NS1</label>
                      <input type="date" id="dengue-ns1-date-${id}">
                  </div>
                  <div class="form-group">
                      <label>42 - Resultado Exame NS1</label>
                      <select id="dengue-ns1-res-${id}">
                          <option value="1">1 - Positivo</option>
                          <option value="2">2 - Negativo</option>
                          <option value="3">3 - Inconclusivo</option>
                          <option value="4" selected>4 - Não Realizado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>43 - Data Coleta Isolamento Viral</label>
                      <input type="date" id="dengue-isolamento-date-${id}">
                  </div>
                  <div class="form-group">
                      <label>44 - Resultado Isolamento Viral</label>
                      <select id="dengue-isolamento-res-${id}">
                          <option value="1">1 - Positivo</option>
                          <option value="2">2 - Negativo</option>
                          <option value="3">3 - Inconclusivo</option>
                          <option value="4" selected>4 - Não Realizado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>45 - Data Coleta RT-PCR</label>
                      <input type="date" id="dengue-pcr-date-${id}">
                  </div>
                  <div class="form-group">
                      <label>46 - Resultado RT-PCR</label>
                      <select id="dengue-pcr-res-${id}">
                          <option value="1">1 - Positivo</option>
                          <option value="2">2 - Negativo</option>
                          <option value="3">3 - Inconclusivo</option>
                          <option value="4" selected>4 - Não Realizado</option>
                      </select>
                  </div>
                  <div class="form-group span-2">
                      <label>47 - Sorotipo Identificado</label>
                      <select id="dengue-sorotipo-${id}">
                          <option value="" selected>Selecione o sorotipo...</option>
                          <option value="1">1 - DENV 1</option>
                          <option value="2">2 - DENV 2</option>
                          <option value="3">3 - DENV 3</option>
                          <option value="4">4 - DENV 4</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>48 - Data Coleta Histopatologia</label>
                      <input type="date" id="dengue-histo-date-${id}">
                  </div>
                  <div class="form-group">
                      <label>48 - Resultado Histopatologia</label>
                      <select id="dengue-histo-res-${id}">
                          <option value="1">1 - Compatível</option>
                          <option value="2">2 - Incompatível</option>
                          <option value="3">3 - Inconclusivo</option>
                          <option value="4" selected>4 - Não Realizado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>49 - Data Coleta Imunohistoquímica</label>
                      <input type="date" id="dengue-imuno-date-${id}">
                  </div>
                  <div class="form-group">
                      <label>49 - Resultado Imunohistoquímica</label>
                      <select id="dengue-imuno-res-${id}">
                          <option value="1">1 - Positivo</option>
                          <option value="2">2 - Negativo</option>
                          <option value="3">3 - Inconclusivo</option>
                          <option value="4" selected>4 - Não Realizado</option>
                      </select>
                  </div>
             </div>
          </div>

          <!-- HOSPITALIZAÇÃO E LOCAL PROVÁVEL -->
          <div class="sinan-section">
             <div class="sinan-section-title"><i class="fas fa-hospital"></i> Hospitalização e Local Provável de Infecção (Campos 50-61)</div>
             <div class="sinan-grid-4">
                  <div class="form-group">
                      <label>50 - Ocorreu Hospitalização?</label>
                      <select id="dengue-hospitalizacao-${id}">
                          <option value="1">1 - Sim</option>
                          <option value="2" selected>2 - Não</option>
                          <option value="9">9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>51 - Data da Internação</label>
                      <input type="date" id="dengue-data-internacao-${id}">
                  </div>
                  <div class="form-group">
                      <label>52 - UF Hospital</label>
                      <input type="text" id="dengue-hospital-uf-${id}" maxlength="2" placeholder="PA">
                  </div>
                  <div class="form-group span-2">
                      <label>53 - Município do Hospital</label>
                      <input type="text" id="dengue-hospital-mun-${id}" placeholder="Município">
                  </div>
                  <div class="form-group span-2">
                      <label>54 - Nome do Hospital</label>
                      <input type="text" id="dengue-hospital-nome-${id}" placeholder="Nome do Hospital">
                  </div>
                  <div class="form-group">
                      <label>55 - Telefone Hospital</label>
                      <input type="text" id="dengue-hospital-fone-${id}" placeholder="(00) 00000-0000">
                  </div>
                  <div class="form-group span-2">
                      <label>56 - Caso autóctone do município de residência?</label>
                      <select id="dengue-autoctone-${id}">
                          <option value="1" selected>1 - Sim</option>
                          <option value="2">2 - Não</option>
                          <option value="3">3 - Indeterminado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>57 - UF Infecção</label>
                      <input type="text" id="dengue-uf-infeccao-${id}" maxlength="2" placeholder="PA">
                  </div>
                  <div class="form-group">
                      <label>58 - País Infecção</label>
                      <input type="text" id="dengue-pais-infeccao-${id}" value="Brasil">
                  </div>
                  <div class="form-group span-2">
                      <label>59 - Município de Infecção</label>
                      <input type="text" id="dengue-mun-infeccao-${id}" placeholder="Município">
                  </div>
                  <div class="form-group">
                      <label>60 - Distrito</label>
                      <input type="text" id="dengue-dist-infeccao-${id}" placeholder="Distrito">
                  </div>
                  <div class="form-group span-2">
                      <label>61 - Bairro</label>
                      <input type="text" id="dengue-bairro-infeccao-${id}" placeholder="Bairro">
                  </div>
             </div>
          </div>

          <!-- CONCLUSÃO DO CASO -->
          <div class="sinan-section">
             <div class="sinan-section-title"><i class="fas fa-check-circle"></i> Conclusão do Caso (Campos 62-67)</div>
             <div class="sinan-grid-4">
                  <div class="form-group span-2">
                      <label>62 - Classificação Final</label>
                      <select id="dengue-classificacao-${id}">
                          <option value="5">5 - Descartado</option>
                          <option value="10" ${id === 'dengue' ? 'selected' : ''}>10 - Dengue</option>
                          <option value="11">11 - Dengue com Sinais de Alarme</option>
                          <option value="12">12 - Dengue Grave</option>
                          <option value="13" ${id === 'chikungunya' ? 'selected' : ''}>13 - Chikungunya</option>
                      </select>
                  </div>
                  <div class="form-group span-2">
                      <label>63 - Critério de Confirmação/Descarte</label>
                      <select id="dengue-criterio-${id}">
                          <option value="1" selected>1 - Laboratório</option>
                          <option value="2">2 - Clínico-Epidemiológico</option>
                          <option value="3">3 - Em investigação</option>
                      </select>
                  </div>
                  <div class="form-group span-2">
                      <label>64 - Apresentação Clínica (Chikungunya)</label>
                      <select id="dengue-apresentacao-chik-${id}">
                          <option value="1" selected>1 - Aguda</option>
                          <option value="2">2 - Crônica</option>
                      </select>
                  </div>
                  <div class="form-group span-2">
                      <label>65 - Evolução do Caso</label>
                      <select id="dengue-evolucao-${id}">
                          <option value="1" selected>1 - Cura</option>
                          <option value="2">2 - Óbito pelo agravo</option>
                          <option value="3">3 - Óbito por outras causas</option>
                          <option value="4">4 - Óbito em investigação</option>
                          <option value="9">9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>66 - Data do Óbito</label>
                      <input type="date" id="dengue-data-obito-${id}">
                  </div>
                  <div class="form-group">
                      <label>67 - Data do Encerramento</label>
                      <input type="date" id="dengue-data-encerramento-${id}" value="${new Date().toISOString().substring(0,10)}">
                  </div>
             </div>
          </div>

          <!-- SINAIS DE ALARME E DENGUE GRAVE -->
          <div class="sinan-section" style="border-left: 4px solid #ef4444;">
             <div class="sinan-section-title" style="color: #dc2626;"><i class="fas fa-exclamation-triangle"></i> Dengue com Sinais de Alarme e Dengue Grave (Campos 68-71)</div>
             
             <!-- Campo 68: Dengue com Sinais de Alarme -->
             <div style="margin-top: 10px;">
                 <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
                     <label style="font-weight: bold; color: #dc2626; font-size: 0.85rem; text-transform: uppercase;">
                         68 - Dengue com Sinais de Alarme (1-Sim | 2-Não | 9-Ignorado)
                     </label>
                     <div style="display: flex; align-items: center; gap: 8px;">
                         <span style="font-size: 0.8rem; font-weight: bold; color: var(--text-dark);">69 - Data Início Sinais de Alarme:</span>
                         <input type="date" id="dengue-sinais-alarme-date-${id}" style="padding: 4px 8px; border-radius: 6px; border: 1px solid var(--border-color);">
                     </div>
                 </div>
                 <div class="sinan-grid-3" style="margin-top: 8px; background: rgba(239, 68, 68, 0.05); padding: 12px; border-radius: 8px; border: 1px solid rgba(239, 68, 68, 0.2);">
                     <div class="form-group"><label>Vômitos Persistentes</label><select id="dengue-alarme-vomitos-${id}"><option value="1">1 - Sim</option><option value="2" selected>2 - Não</option><option value="9">9 - Ignorado</option></select></div>
                     <div class="form-group"><label>Dor Abdominal Intensa e Contínua</label><select id="dengue-alarme-dor-abdo-${id}"><option value="1">1 - Sim</option><option value="2" selected>2 - Não</option><option value="9">9 - Ignorado</option></select></div>
                     <div class="form-group"><label>Letargia ou Irritabilidade</label><select id="dengue-alarme-letargia-${id}"><option value="1">1 - Sim</option><option value="2" selected>2 - Não</option><option value="9">9 - Ignorado</option></select></div>
                     <div class="form-group"><label>Sangramento de Mucosa/Outras Hemorragias</label><select id="dengue-alarme-sangramento-${id}"><option value="1">1 - Sim</option><option value="2" selected>2 - Não</option><option value="9">9 - Ignorado</option></select></div>
                     <div class="form-group"><label>Aumento Progressivo do Hematócrito</label><select id="dengue-alarme-hematocrito-${id}"><option value="1">1 - Sim</option><option value="2" selected>2 - Não</option><option value="9">9 - Ignorado</option></select></div>
                     <div class="form-group"><label>Hepatomegalia >= 2cm</label><select id="dengue-alarme-hepatomegalia-${id}"><option value="1">1 - Sim</option><option value="2" selected>2 - Não</option><option value="9">9 - Ignorado</option></select></div>
                     <div class="form-group"><label>Acúmulo de Líquidos</label><select id="dengue-alarme-acumulo-liq-${id}"><option value="1">1 - Sim</option><option value="2" selected>2 - Não</option><option value="9">9 - Ignorado</option></select></div>
                     <div class="form-group"><label>Hipotensão Postural e/ou Lipotímia</label><select id="dengue-alarme-hipotensao-${id}"><option value="1">1 - Sim</option><option value="2" selected>2 - Não</option><option value="9">9 - Ignorado</option></select></div>
                     <div class="form-group"><label>Queda Abrupta de Plaquetas</label><select id="dengue-alarme-plaquetas-${id}"><option value="1">1 - Sim</option><option value="2" selected>2 - Não</option><option value="9">9 - Ignorado</option></select></div>
                 </div>
             </div>

             <!-- Campo 70: Dengue Grave -->
             <div style="margin-top: 20px;">
                 <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
                     <label style="font-weight: bold; color: #b91c1c; font-size: 0.85rem; text-transform: uppercase;">
                         70 - Dengue Grave (1-Sim | 2-Não | 9-Ignorado)
                     </label>
                     <div style="display: flex; align-items: center; gap: 8px;">
                         <span style="font-size: 0.8rem; font-weight: bold; color: var(--text-dark);">71 - Data Início Sinais de Gravidade:</span>
                         <input type="date" id="dengue-sinais-grave-date-${id}" style="padding: 4px 8px; border-radius: 6px; border: 1px solid var(--border-color);">
                     </div>
                 </div>

                 <!-- Extravasamento Grave de Plasma -->
                 <div style="margin-top: 8px; font-weight: bold; font-size: 0.78rem; color: #b91c1c;">a) Extravasamento Grave de Plasma:</div>
                 <div class="sinan-grid-3" style="margin-top: 4px; background: rgba(185, 28, 28, 0.05); padding: 10px; border-radius: 8px;">
                     <div class="form-group"><label>Pulso Débil ou Indetectável</label><select id="dengue-grave-pulso-${id}"><option value="1">1 - Sim</option><option value="2" selected>2 - Não</option><option value="9">9 - Ignorado</option></select></div>
                     <div class="form-group"><label>PA Convergente <= 20 mmHg</label><select id="dengue-grave-pa-${id}"><option value="1">1 - Sim</option><option value="2" selected>2 - Não</option><option value="9">9 - Ignorado</option></select></div>
                     <div class="form-group"><label>Tempo Enchimento Capilar >= 3s</label><select id="dengue-grave-capilar-${id}"><option value="1">1 - Sim</option><option value="2" selected>2 - Não</option><option value="9">9 - Ignorado</option></select></div>
                     <div class="form-group"><label>Acúmulo Líquidos c/ Insuf. Respiratória</label><select id="dengue-grave-acumulo-resp-${id}"><option value="1">1 - Sim</option><option value="2" selected>2 - Não</option><option value="9">9 - Ignorado</option></select></div>
                     <div class="form-group"><label>Taquicardia</label><select id="dengue-grave-taquicardia-${id}"><option value="1">1 - Sim</option><option value="2" selected>2 - Não</option><option value="9">9 - Ignorado</option></select></div>
                     <div class="form-group"><label>Extremidades Frias</label><select id="dengue-grave-extremidades-${id}"><option value="1">1 - Sim</option><option value="2" selected>2 - Não</option><option value="9">9 - Ignorado</option></select></div>
                     <div class="form-group"><label>Hipotensão Arterial em Fase Tardia</label><select id="dengue-grave-hipotensao-tardia-${id}"><option value="1">1 - Sim</option><option value="2" selected>2 - Não</option><option value="9">9 - Ignorado</option></select></div>
                 </div>

                 <!-- Sangramento Grave -->
                 <div style="margin-top: 10px; font-weight: bold; font-size: 0.78rem; color: #b91c1c;">b) Sangramento Grave:</div>
                 <div class="sinan-grid-4" style="margin-top: 4px; background: rgba(185, 28, 28, 0.05); padding: 10px; border-radius: 8px;">
                     <div class="form-group"><label>Hematêmese</label><select id="dengue-grave-hematemese-${id}"><option value="1">1 - Sim</option><option value="2" selected>2 - Não</option><option value="9">9 - Ignorado</option></select></div>
                     <div class="form-group"><label>Melena</label><select id="dengue-grave-melena-${id}"><option value="1">1 - Sim</option><option value="2" selected>2 - Não</option><option value="9">9 - Ignorado</option></select></div>
                     <div class="form-group"><label>Metrorragia Volumosa</label><select id="dengue-grave-metrorragia-${id}"><option value="1">1 - Sim</option><option value="2" selected>2 - Não</option><option value="9">9 - Ignorado</option></select></div>
                     <div class="form-group"><label>Sangramento do SNC</label><select id="dengue-grave-snc-${id}"><option value="1">1 - Sim</option><option value="2" selected>2 - Não</option><option value="9">9 - Ignorado</option></select></div>
                 </div>

                 <!-- Comprometimento Grave de Órgãos -->
                 <div style="margin-top: 10px; font-weight: bold; font-size: 0.78rem; color: #b91c1c;">c) Comprometimento Grave de Órgãos:</div>
                 <div class="sinan-grid-4" style="margin-top: 4px; background: rgba(185, 28, 28, 0.05); padding: 10px; border-radius: 8px;">
                     <div class="form-group"><label>AST/ALT > 1.000</label><select id="dengue-grave-ast-alt-${id}"><option value="1">1 - Sim</option><option value="2" selected>2 - Não</option><option value="9">9 - Ignorado</option></select></div>
                     <div class="form-group"><label>Miocardite</label><select id="dengue-grave-miocardite-${id}"><option value="1">1 - Sim</option><option value="2" selected>2 - Não</option><option value="9">9 - Ignorado</option></select></div>
                     <div class="form-group"><label>Alteração da Consciência</label><select id="dengue-grave-consciencia-${id}"><option value="1">1 - Sim</option><option value="2" selected>2 - Não</option><option value="9">9 - Ignorado</option></select></div>
                     <div class="form-group span-4"><label>Outros Órgãos (Especificar)</label><input type="text" id="dengue-grave-outros-orgaos-${id}" placeholder="Especificar comprometimento..."></div>
                 </div>
             </div>
          </div>

          <!-- INFORMAÇÕES COMPLEMENTARES E INVESTIGADOR -->
          <div class="sinan-section">
             <div class="sinan-section-title"><i class="fas fa-user-edit"></i> Informações Complementares e Investigador</div>
             <div class="sinan-grid-4">
                  <div class="form-group span-4">
                      <label>Observações Adicionais</label>
                      <textarea id="dengue-obs-${id}" rows="3" placeholder="Informações complementares e observações da investigação..."></textarea>
                  </div>
                  <div class="form-group span-2">
                      <label>Município/Unidade de Saúde</label>
                      <input type="text" id="dengue-inv-unidade-${id}" placeholder="Nome da Unidade de Saúde">
                  </div>
                  <div class="form-group">
                      <label>Nome do Investigador</label>
                      <input type="text" id="dengue-inv-nome-${id}" placeholder="Nome do investigador">
                  </div>
                  <div class="form-group">
                      <label>Função / Cargo</label>
                      <input type="text" id="dengue-inv-funcao-${id}" placeholder="Ex: Enfermeiro / Médico">
                  </div>
             </div>
          </div>
        `;
      } else if (id === 'tracoma') {
        block7Html = `
          <!-- BLOCO 7: DADOS COMPLEMENTARES TRACOMA -->
          <div class="sinan-section">
             <div class="sinan-section-title"><i class="fas fa-clipboard-list"></i> Boletim de Inquérito de Tracoma (Campos 7-9)</div>
             <div class="sinan-grid-4">
                  <div class="form-group span-2">
                      <label>7 - Inquérito</label>
                      <select id="tracoma-inquerito-${id}">
                          <option value="1" selected>1 - Escolar</option>
                          <option value="2">2 - Domiciliar</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>8 - Nº de Pessoas Examinadas</label>
                      <input type="number" id="tracoma-examinadas-${id}" min="0" placeholder="0">
                  </div>
                  <div class="form-group">
                      <label>9 - Nº de Casos Positivos</label>
                      <input type="number" id="tracoma-positivos-${id}" min="0" placeholder="0">
                  </div>
             </div>
          </div>
          <div class="sinan-section">
             <div class="sinan-section-title"><i class="fas fa-list"></i> Casos Positivos Registrados no Inquérito</div>
             <p style="font-size: 0.8rem; color: var(--text-gray); margin-top: 4px; margin-bottom: 12px; line-height: 1.4;">Preencha a tabela abaixo com as iniciais, localidade e achados clínicos de cada caso positivo detectado no inquérito.</p>
             <div style="overflow-x: auto; margin-top: 10px;">
                 <table class="tabela-sinan-casos" id="tracoma-cases-table-${id}" style="width: 100%; border-collapse: collapse; min-width: 900px;">
                     <thead>
                         <tr style="background: var(--primary-soft); text-align: left; font-size: 0.8rem; text-transform: uppercase;">
                             <th style="padding: 8px; border: 1px solid var(--border-color); color: var(--primary); font-weight: bold;">Iniciais/Nome</th>
                             <th style="padding: 8px; border: 1px solid var(--border-color); width: 45px; color: var(--primary); font-weight: bold;">UF</th>
                             <th style="padding: 8px; border: 1px solid var(--border-color); color: var(--primary); font-weight: bold;">Município</th>
                             <th style="padding: 8px; border: 1px solid var(--border-color); color: var(--primary); font-weight: bold;">Distrito</th>
                             <th style="padding: 8px; border: 1px solid var(--border-color); color: var(--primary); font-weight: bold;">Bairro</th>
                             <th style="padding: 8px; border: 1px solid var(--border-color); width: 100px; color: var(--primary); font-weight: bold;">Zona</th>
                             <th style="padding: 8px; border: 1px solid var(--border-color); width: 100px; color: var(--primary); font-weight: bold;">Sexo</th>
                             <th style="padding: 8px; border: 1px solid var(--border-color); width: 60px; color: var(--primary); font-weight: bold;">Idade</th>
                             <th style="padding: 8px; border: 1px solid var(--border-color); width: 110px; color: var(--primary); font-weight: bold;">Forma Clínica</th>
                             <th style="padding: 8px; border: 1px solid var(--border-color); width: 95px; color: var(--primary); font-weight: bold;">Cirurgia</th>
                             <th style="padding: 8px; border: 1px solid var(--border-color); width: 45px; color: var(--primary); font-weight: bold;">Ação</th>
                         </tr>
                     </thead>
                     <tbody>
                     </tbody>
                 </table>
             </div>
             <button type="button" class="btn btn-outline" id="btn-add-tracoma-case-${id}" style="margin-top: 10px; display: inline-flex; align-items: center; gap: 6px; height: 38px; padding: 0 16px;">
                 <i class="fas fa-plus"></i> Adicionar Caso ao Boletim
             </button>
          </div>
        `;
      } else if (id === 'hanseniase') {
        block7Html = `
          <!-- BLOCO 7: DADOS COMPLEMENTARES HANSENIASE -->
          <div class="sinan-section">
             <div class="sinan-section-title"><i class="fas fa-diagnoses"></i> Dados Complementares do Caso - Hanseníase (Campos 31-43)</div>
             <div class="sinan-grid-4">
                  <div class="form-group span-2">
                      <label>31 - Nº do Prontuário</label>
                      <input type="text" id="hanseniase-prontuario-${id}" placeholder="Nº Prontuário">
                  </div>
                  <div class="form-group span-2">
                      <label>32 - Ocupação</label>
                      <input type="text" id="hanseniase-ocupacao-${id}" placeholder="Ex: Agricultor">
                  </div>
                  <div class="form-group">
                      <label>33 - Nº de Lesões Cutâneas</label>
                      <input type="number" id="hanseniase-lesoes-${id}" min="0" placeholder="Ex: 3">
                  </div>
                  <div class="form-group span-2">
                      <label>34 - Forma Clínica</label>
                      <select id="hanseniase-forma-${id}">
                          <option value="1">1 - I (Indeterminada)</option>
                          <option value="2">2 - T (Tuberculóide)</option>
                          <option value="3">3 - D (Dimorfa)</option>
                          <option value="4">4 - V (Virchowiana)</option>
                          <option value="5" selected>5 - Não classificado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>35 - Classificação Operacional</label>
                      <select id="hanseniase-class-oper-${id}">
                          <option value="1" selected>1 - PB (Paucibacilar)</option>
                          <option value="2">2 - MB (Multibacilar)</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>36 - Nº de Nervos Afetados</label>
                      <input type="number" id="hanseniase-nervos-${id}" min="0" placeholder="0">
                  </div>
                  <div class="form-group span-3">
                      <label>37 - Avaliação do Grau de Incapacidade Física no Diagnóstico</label>
                      <select id="hanseniase-incapacidade-${id}">
                          <option value="0" selected>0 - Grau Zero</option>
                          <option value="1">1 - Grau I</option>
                          <option value="2">2 - Grau II</option>
                          <option value="3">3 - Não Avaliado</option>
                      </select>
                  </div>
                  <div class="form-group span-2">
                      <label>38 - Modo de Entrada</label>
                      <select id="hanseniase-modo-entrada-${id}">
                          <option value="1" selected>1 - Caso Novo</option>
                          <option value="2">2 - Transferência do mesmo município (outra unidade)</option>
                          <option value="3">3 - Transferência de Outro Município (mesma UF)</option>
                          <option value="4">4 - Transferência de Outro Estado</option>
                          <option value="5">5 - Transferência de Outro País</option>
                          <option value="6">6 - Recidiva</option>
                          <option value="7">7 - Outros Reingressos</option>
                          <option value="9">9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group span-2">
                      <label>39 - Modo de Detecção do Caso Novo</label>
                      <select id="hanseniase-modo-deteccao-${id}">
                          <option value="1" selected>1 - Encaminhamento</option>
                          <option value="2">2 - Demanda Espontânea</option>
                          <option value="3">3 - Exame de Coletividade</option>
                          <option value="4">4 - Exame de Contatos</option>
                          <option value="5">5 - Outros Modos</option>
                          <option value="9">9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group span-2">
                      <label>40 - Baciloscopia</label>
                      <select id="hanseniase-baciloscopia-${id}">
                          <option value="1">1 - Positiva</option>
                          <option value="2">2 - Negativa</option>
                          <option value="3" selected>3 - Não realizada</option>
                          <option value="9">9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>41 - Data do Início do Tratamento</label>
                      <input type="date" id="hanseniase-inicio-tratamento-${id}">
                  </div>
                  <div class="form-group span-2">
                      <label>42 - Esquema Terapêutico Inicial</label>
                      <select id="hanseniase-esquema-${id}">
                          <option value="1" selected>1 - PQT/PB/6 doses</option>
                          <option value="2">2 - PQT/MB/12 doses</option>
                          <option value="3">3 - Outros Esquemas Substitutos</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>43 - Número de Contatos Registrados</label>
                      <input type="number" id="hanseniase-contatos-${id}" min="0" placeholder="0">
                  </div>
             </div>
          </div>
        `;
      } else if (id === 'esquistossomose') {
        block7Html = `
          <!-- BLOCO 7: DADOS COMPLEMENTARES ESQUISTOSSOMOSE -->
          <div class="sinan-section">
             <div class="sinan-section-title"><i class="fas fa-clipboard-list"></i> Dados Complementares do Caso - Esquistossomose (Campos 31-43)</div>
             <div class="sinan-grid-4">
                  <div class="form-group">
                      <label>31 - Data da Investigação</label>
                      <input type="date" id="esquisto-data-investigacao-${id}">
                  </div>
                  <div class="form-group span-2">
                      <label>32 - Ocupação</label>
                      <input type="text" id="esquisto-ocupacao-${id}" placeholder="Ex: Agricultor">
                  </div>
                  <div class="form-group">
                      <label>33 - Data da Coproscopia</label>
                      <input type="date" id="esquisto-data-copro-${id}">
                  </div>
                  <div class="form-group span-2">
                      <label>34 - Análise Quantitativa</label>
                      <select id="esquisto-analise-quant-${id}">
                          <option value="0" selected>0 - 0 (zero)</option>
                          <option value="1">1 - 1 (um) ou mais ovos</option>
                      </select>
                  </div>
                  <div class="form-group span-2">
                      <label>35 - Análise Qualitativa</label>
                      <select id="esquisto-analise-qual-${id}">
                          <option value="1">1 - Positivo</option>
                          <option value="2">2 - Negativo</option>
                          <option value="3" selected>3 - Não realizado</option>
                      </select>
                  </div>
                  <div class="form-group span-2">
                      <label>36 - Outros Exames (Qualitativo)</label>
                      <select id="esquisto-outros-qual-${id}">
                          <option value="1">1 - Positivo</option>
                          <option value="2">2 - Negativo</option>
                          <option value="3" selected>3 - Não realizado</option>
                      </select>
                  </div>
                  <div class="form-group span-2">
                      <label>37 - Outros Exames (Especificar)</label>
                      <input type="text" id="esquisto-outros-especificar-${id}" placeholder="Ex: Biópsia retal">
                  </div>
                  <div class="form-group span-2">
                      <label>38 - Fez Tratamento?</label>
                      <select id="esquisto-fez-tratamento-${id}">
                          <option value="1">1 - Sim - Praziquantel</option>
                          <option value="2">2 - Sim - Oxaminiquine</option>
                          <option value="3">3 - Não</option>
                          <option value="9" selected>9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>39 - Data do Tratamento</label>
                      <input type="date" id="esquisto-data-tratamento-${id}">
                  </div>
                  <div class="form-group span-3">
                      <label>40 - Caso não tenha feito tratamento, qual o motivo?</label>
                      <select id="esquisto-motivo-nao-tratamento-${id}">
                          <option value="1">1 - Contra Indicação</option>
                          <option value="2">2 - Recusa</option>
                          <option value="3">3 - Ausente</option>
                          <option value="9" selected>9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>41 - Cura: 1ª amostra</label>
                      <select id="esquisto-cura-1amostra-${id}">
                          <option value="0">0 - 0 (zero)</option>
                          <option value="1">1 - 1 ou mais ovos</option>
                          <option value="2" selected>2 - Não realizado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>41 - Cura: 2ª amostra</label>
                      <select id="esquisto-cura-2amostra-${id}">
                          <option value="0">0 - 0 (zero)</option>
                          <option value="1">1 - 1 ou mais ovos</option>
                          <option value="2" selected>2 - Não realizado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>41 - Cura: 3ª amostra</label>
                      <select id="esquisto-cura-3amostra-${id}">
                          <option value="0">0 - 0 (zero)</option>
                          <option value="1">1 - 1 ou mais ovos</option>
                          <option value="2" selected>2 - Não realizado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>42 - Data Result. 3ª amostra</label>
                      <input type="date" id="esquisto-cura-data-3amostra-${id}">
                  </div>
                  <div class="form-group span-2">
                      <label>43 - Especificar Forma Clínica</label>
                      <select id="esquisto-forma-clinica-${id}">
                          <option value="1" selected>1 - Intestinal</option>
                          <option value="2">2 - Hepato Intestinal</option>
                          <option value="3">3 - Hepato Esplênica</option>
                          <option value="4">4 - Aguda</option>
                          <option value="5">5 - Outra (especificar)</option>
                      </select>
                  </div>
             </div>
          </div>

          <div class="sinan-section">
             <div class="sinan-section-title"><i class="fas fa-map-marker-alt"></i> Conclusão e Local de Infecção (Campos 44-55)</div>
             <div class="sinan-grid-4">
                  <div class="form-group span-2">
                      <label>44 - Autóctone do município de residência?</label>
                      <select id="esquisto-autoctone-${id}">
                          <option value="1" selected>1 - Sim</option>
                          <option value="2">2 - Não</option>
                          <option value="3">3 - Indeterminado</option>
                      </select>
                  </div>
                  <div class="form-group" style="max-width:80px;">
                      <label>45 - UF Infecção</label>
                      <input type="text" id="esquisto-infeccao-uf-${id}" value="PA" maxlength="2">
                  </div>
                  <div class="form-group span-2">
                      <label>46 - País de Infecção</label>
                      <input type="text" id="esquisto-infeccao-pais-${id}" value="BRASIL">
                  </div>
                  <div class="form-group span-3">
                      <label>47 - Município de Infecção</label>
                      <input type="text" id="esquisto-infeccao-mun-${id}" value="MARABA">
                  </div>
                  <div class="form-group">
                      <label>48 - Distrito</label>
                      <input type="text" id="esquisto-infeccao-dist-${id}">
                  </div>
                  <div class="form-group span-2">
                      <label>49 - Bairro</label>
                      <input type="text" id="esquisto-infeccao-bairro-${id}">
                  </div>
                  <div class="form-group span-2">
                      <label>50 - Nome da Propriedade (Área Rural)</label>
                      <input type="text" id="esquisto-infeccao-propriedade-${id}">
                  </div>
                  <div class="form-group span-2">
                      <label>51 - Nome da Coleção Hídrica</label>
                      <input type="text" id="esquisto-infeccao-hidrica-${id}" placeholder="Ex: Rio Tocantins">
                  </div>
                  <div class="form-group span-2">
                      <label>52 - Doença Relacionada ao Trabalho</label>
                      <select id="esquisto-trabalho-${id}">
                          <option value="1">1 - Sim</option>
                          <option value="2" selected>2 - Não</option>
                          <option value="9">9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group span-2">
                      <label>53 - Evolução do Caso</label>
                      <select id="esquisto-evolucao-${id}">
                          <option value="1" selected>1 - Cura</option>
                          <option value="2">2 - Não Cura</option>
                          <option value="3">3 - Óbito por esquistossomose</option>
                          <option value="4">4 - Óbito por outras causas</option>
                          <option value="9">9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>54 - Data do Óbito</label>
                      <input type="date" id="esquisto-data-obito-${id}">
                  </div>
                  <div class="form-group">
                      <label>55 - Data do Encerramento</label>
                      <input type="date" id="esquisto-data-encerramento-${id}" value="${new Date().toISOString().substring(0,10)}">
                  </div>
             </div>
          </div>
        `;
      } else if (id === 'malaria') {
        block7Html = `
          <!-- BLOCO 7: DADOS COMPLEMENTARES MALARIA -->
          <div class="sinan-section">
             <div class="sinan-section-title"><i class="fas fa-microscope"></i> Dados Complementares do Caso - Malária (Campos 31-41)</div>
             <div class="sinan-grid-4">
                  <div class="form-group">
                      <label>31 - Data da Investigação</label>
                      <input type="date" id="malaria-data-investigacao-${id}">
                  </div>
                  <div class="form-group span-2">
                      <label>32 - Ocupação</label>
                      <input type="text" id="malaria-ocupacao-${id}" placeholder="Ex: Agricultor">
                  </div>
                  <div class="form-group span-2">
                      <label>33 - Principal Atividade nos Últimos 15 Dias</label>
                      <select id="malaria-atividade-${id}">
                          <option value="1">1 - Agricultura</option>
                          <option value="2">2 - Pecuária</option>
                          <option value="3">3 - Doméstica</option>
                          <option value="4">4 - Turismo</option>
                          <option value="5">5 - Garimpagem</option>
                          <option value="6">6 - Exploração vegetal</option>
                          <option value="7">7 - Caça/pesca</option>
                          <option value="8">8 - const.estrad.barragens</option>
                          <option value="9">9 - Mineração</option>
                          <option value="10">10 - Viajante</option>
                          <option value="11">11 - Outros</option>
                          <option value="12">12 - Motorista</option>
                          <option value="99" selected>99 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>34 - Tipo de Lâmina</label>
                      <select id="malaria-tipo-lamina-${id}">
                          <option value="1" selected>1 - BP (Busca Passiva)</option>
                          <option value="2">2 - BA (Busca Ativa)</option>
                          <option value="3">3 - LVC (Lâmina de Verificação de Cura)</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>35 - Presença de Sintomas</label>
                      <select id="malaria-sintomas-${id}">
                          <option value="1" selected>1 - Com sintomas</option>
                          <option value="2">2 - Sem sintomas</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>36 - Data do Exame</label>
                      <input type="date" id="malaria-data-exame-${id}">
                  </div>
                  <div class="form-group span-2">
                      <label>37 - Resultado do Exame</label>
                      <select id="malaria-resultado-exame-${id}">
                          <option value="1" selected>1 - Negativo</option>
                          <option value="2">2 - F (P. falciparum)</option>
                          <option value="3">3 - F+FG (P. falciparum + Formas Gametocitárias)</option>
                          <option value="4">4 - V (P. vivax)</option>
                          <option value="5">5 - F+V (P. falciparum + P. vivax)</option>
                          <option value="6">6 - V+FG (P. vivax + Formas Gametocitárias de P. falciparum)</option>
                          <option value="7">7 - FG (Gametócito falciparum isolado)</option>
                          <option value="8">8 - M (P. malariae)</option>
                          <option value="9">9 - F+M (P. falciparum + P. malariae)</option>
                          <option value="10">10 - O (Outras espécies)</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>38 - Parasitos por mm³</label>
                      <input type="number" id="malaria-parasitos-${id}" min="0" placeholder="Ex: 500">
                  </div>
                  <div class="form-group span-2">
                      <label>39 - Parasitemia em "cruzes"</label>
                      <select id="malaria-parasitemia-cruzes-${id}">
                          <option value="1" selected>1 - &lt; +/2 (menor que meia cruz)</option>
                          <option value="2">2 - +/2 (meia cruz)</option>
                          <option value="3">3 - + (uma cruz)</option>
                          <option value="4">4 - ++ (duas cruzes)</option>
                          <option value="5">5 - +++ (três cruzes)</option>
                          <option value="6">6 - ++++ (quatro cruzes)</option>
                      </select>
                  </div>
                  <div class="form-group span-3">
                      <label>40 - Esquema de Tratamento Utilizado</label>
                      <select id="malaria-esquema-tratamento-${id}">
                          <option value="1" selected>1 - Infecções por Pv com Cloroquina em 3 dias e Primaquina em 7 dias</option>
                          <option value="2">2 - Infecções por Pf com Quinina em 3 dias + Doxiciclina em 5 dias + primaquina no 6º dia</option>
                          <option value="3">3 - Infecções mistas por Pv + Pf com Mefloquina em dose única e primaquina em 7 dias</option>
                          <option value="4">4 - Infecções por Pm com cloroquina em 3 dias</option>
                          <option value="5">5 - Infecções por Pv em crianças apresentando vômitos, com artesunato retal 4d e Primaquina 7d</option>
                          <option value="6">6 - Infecções por Pf com Mefloquina em dose única e primaquina no segundo dia</option>
                          <option value="7">7 - Infecções por Pf com Quinina em 7 dias</option>
                          <option value="8">8 - Infecções por Pf de crianças com artesunato retal 4d, Mefloquina no 3ºd e Primaquina no 5ºd</option>
                          <option value="9">9 - Infecções mistas por Pv + Pf com Quinina 3d, doxiciclina 5d e Primaquina 7d</option>
                          <option value="10">10 - Prevenção de recaída da malária por Pv com Cloroquina semanal por 3 meses</option>
                          <option value="11">11 - Malária grave e complicada</option>
                          <option value="12">12 - Infecções por Pf com Artemeter+Lumefantrina em 3 dias</option>
                          <option value="99">99 - Outro esquema utilizado (por médico)</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>41 - Data Início do Tratamento</label>
                      <input type="date" id="malaria-data-inicio-trat-${id}">
                  </div>
             </div>
          </div>
          <div class="sinan-section">
             <div class="sinan-section-title"><i class="fas fa-map-marker-alt"></i> Conclusão e Local Provável da Infecção (Campos 42-50)</div>
             <div class="sinan-grid-4">
                  <div class="form-group">
                      <label>42 - Classificação Final</label>
                      <select id="malaria-classificacao-final-${id}">
                          <option value="1" selected>1 - Confirmado</option>
                          <option value="2">2 - Descartado</option>
                      </select>
                  </div>
                  <div class="form-group span-2">
                      <label>43 - Caso é autóctone do município de residência?</label>
                      <select id="malaria-autoctone-${id}">
                          <option value="1" selected>1 - Sim</option>
                          <option value="2">2 - Não</option>
                          <option value="3">3 - Indeterminado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>44 - UF provável de infecção</label>
                      <input type="text" id="malaria-uf-infeccao-${id}" maxlength="2" placeholder="Ex: PA">
                  </div>
                  <div class="form-group span-2">
                      <label>45 - País provável de infecção</label>
                      <input type="text" id="malaria-pais-infeccao-${id}" value="Brasil">
                  </div>
                  <div class="form-group span-2">
                      <label>46 - Município provável de infecção</label>
                      <input type="text" id="malaria-municipio-infeccao-${id}" placeholder="Nome do Município">
                  </div>
                  <div class="form-group">
                      <label>46 - Código (IBGE)</label>
                      <input type="text" id="malaria-ibge-infeccao-${id}" placeholder="Código IBGE">
                  </div>
                  <div class="form-group">
                      <label>47 - Distrito</label>
                      <input type="text" id="malaria-distrito-infeccao-${id}" placeholder="Distrito">
                  </div>
                  <div class="form-group span-2">
                      <label>48 - Bairro</label>
                      <input type="text" id="malaria-bairro-infeccao-${id}" placeholder="Bairro">
                  </div>
                  <div class="form-group span-2">
                      <label>49 - Localidade provável da infecção</label>
                      <input type="text" id="malaria-localidade-infeccao-${id}" placeholder="Localidade">
                  </div>
                  <div class="form-group">
                      <label>50 - Data de Encerramento</label>
                      <input type="date" id="malaria-data-encerramento-${id}" value="${new Date().toISOString().substring(0,10)}">
                  </div>
                  <div class="form-group span-4">
                      <label>Observações Adicionais</label>
                      <textarea id="malaria-obs-${id}" rows="3" placeholder="Observações adicionais..."></textarea>
                  </div>
                  <div class="form-group span-2">
                      <label>Matrícula e Nome do Examinador</label>
                      <input type="text" id="malaria-examinador-${id}" placeholder="Nome e matrícula">
                  </div>
             </div>
          </div>
        `;
      } else if (id === 'raiva') {
        block7Html = `
          <!-- BLOCO 7: DADOS COMPLEMENTARES RAIVA HUMANA -->
          <div class="sinan-section">
             <div class="sinan-section-title"><i class="fas fa-clipboard-list"></i> Antecedentes Epidemiológicos e Exposição (Campos 31-42)</div>
             <div class="sinan-grid-4">
                  <div class="form-group">
                      <label>31 - Data da Investigação</label>
                      <input type="date" id="raiva-data-investigacao-${id}">
                  </div>
                  <div class="form-group span-2">
                      <label>32 - Ocupação</label>
                      <input type="text" id="raiva-ocupacao-${id}" placeholder="Ex: Agricultor">
                  </div>
                  <div class="form-group">
                      <label>33 - Tipo de Exposição ao Vírus Rábico</label>
                      <select id="raiva-tipo-exposicao-${id}">
                          <option value="1" selected>1 - Mordedura</option>
                          <option value="2">2 - Arranhão</option>
                          <option value="3">3 - Lambedura</option>
                          <option value="4">4 - Contato Indireto</option>
                          <option value="9">9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group span-2">
                      <label>34 - Localização da Picada/Ferimento</label>
                      <select id="raiva-localizacao-${id}">
                          <option value="1" selected>1 - Mucosa</option>
                          <option value="2">2 - Cabeça/Pescoço</option>
                          <option value="3">3 - Mãos</option>
                          <option value="4">4 - Pés</option>
                          <option value="5">5 - Tronco</option>
                          <option value="6">6 - Membros Superiores</option>
                          <option value="7">7 - Membros Inferiores</option>
                          <option value="9">9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>35 - Ferimento</label>
                      <select id="raiva-ferimento-${id}">
                          <option value="1" selected>1 - Único</option>
                          <option value="2">2 - Múltiplo</option>
                          <option value="3">3 - Sem Ferimento</option>
                          <option value="9">9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>36 - Tipo de Ferimento</label>
                      <select id="raiva-tipo-ferimento-${id}">
                          <option value="1" selected>1 - Superficial</option>
                          <option value="2">2 - Profundo</option>
                          <option value="3">3 - Dilacerante</option>
                          <option value="9">9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>37 - Data da Exposição</label>
                      <input type="date" id="raiva-data-exposicao-${id}">
                  </div>
                  <div class="form-group span-2">
                      <label>38 - Antecedentes de Tratamento Anti-Rábico?</label>
                      <select id="raiva-antecedentes-trat-${id}">
                          <option value="1">1 - Pré-exposição</option>
                          <option value="2">2 - Pós-exposição</option>
                          <option value="3" selected>3 - Não</option>
                          <option value="9">9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>39 - Número de Doses Aplicadas</label>
                      <input type="number" id="raiva-doses-aplicadas-${id}" min="0" placeholder="0">
                  </div>
                  <div class="form-group">
                      <label>40 - Data da Última Dose</label>
                      <input type="date" id="raiva-data-ultima-dose-${id}">
                  </div>
                  <div class="form-group span-2">
                      <label>41 - Espécie do Animal Agressor</label>
                      <select id="raiva-especie-animal-${id}">
                          <option value="1" selected>1 - Canina</option>
                          <option value="2">2 - Felina</option>
                          <option value="3">3 - Quiróptera (Morcego)</option>
                          <option value="4">4 - Primata (Macaco)</option>
                          <option value="5">5 - Raposa</option>
                          <option value="6">6 - Herbívora</option>
                          <option value="7">7 - Outra</option>
                          <option value="9">9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>42 - Animal Vacinado?</label>
                      <select id="raiva-animal-vacinado-${id}">
                          <option value="1">1 - Sim</option>
                          <option value="2">2 - Não</option>
                          <option value="9" selected>9 - Ignorado</option>
                      </select>
                  </div>
             </div>
          </div>
          <div class="sinan-section">
             <div class="sinan-section-title"><i class="fas fa-hospital"></i> Atendimento e Tratamento (Campos 43-57)</div>
             <div class="sinan-grid-4">
                  <div class="form-group">
                      <label>43 - Ocorreu Hospitalização?</label>
                      <select id="raiva-hospitalizacao-${id}">
                          <option value="1">1 - Sim</option>
                          <option value="2" selected>2 - Não</option>
                          <option value="9">9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>44 - Data da Internação</label>
                      <input type="date" id="raiva-data-internacao-${id}">
                  </div>
                  <div class="form-group">
                      <label>45 - UF do Hospital</label>
                      <input type="text" id="raiva-hospital-uf-${id}" maxlength="2" placeholder="PA">
                  </div>
                  <div class="form-group">
                      <label>46 - Município do Hospital</label>
                      <input type="text" id="raiva-hospital-mun-${id}" placeholder="Município">
                  </div>
                  <div class="form-group span-2">
                      <label>47 - Nome do Hospital</label>
                      <input type="text" id="raiva-hospital-nome-${id}" placeholder="Nome do Hospital">
                  </div>
                  <div class="form-group span-2">
                      <label>48 - Principais Sinais/Sintomas</label>
                      <input type="text" id="raiva-sintomas-${id}" placeholder="Aerofobia, Hidrofobia, Disfagia, Paralisia, Febre, etc.">
                  </div>
                  <div class="form-group">
                      <label>49 - Vacina Anti-Rábica Atualmente?</label>
                      <select id="raiva-vacina-atual-${id}">
                          <option value="1">1 - Sim</option>
                          <option value="2" selected>2 - Não</option>
                          <option value="9">9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>50 - Data do Início do Tratamento</label>
                      <input type="date" id="raiva-inicio-tratamento-${id}">
                  </div>
                  <div class="form-group">
                      <label>51 - Nº Doses Aplicadas Atualmente</label>
                      <input type="number" id="raiva-vacina-doses-${id}" min="0" placeholder="0">
                  </div>
                  <div class="form-group">
                      <label>52 - Data da 1ª Dose</label>
                      <input type="date" id="raiva-data-1dose-${id}">
                  </div>
                  <div class="form-group">
                      <label>53 - Data da Última Dose</label>
                      <input type="date" id="raiva-data-ultdose-${id}">
                  </div>
                  <div class="form-group">
                      <label>54 - Foi aplicado soro?</label>
                      <select id="raiva-soro-aplicado-${id}">
                          <option value="1">1 - Sim</option>
                          <option value="2" selected>2 - Não</option>
                          <option value="9">9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>55 - Data da Aplicação do Soro</label>
                      <input type="date" id="raiva-data-soro-${id}">
                  </div>
                  <div class="form-group">
                      <label>56 - Qtd de Soro Aplicado (ml)</label>
                      <input type="number" id="raiva-qtd-soro-${id}" min="0" placeholder="ml">
                  </div>
                  <div class="form-group span-2">
                      <label>57 - Infiltração de Soro no Ferimento</label>
                      <select id="raiva-infiltracao-soro-${id}">
                          <option value="1">1 - Sim, Total</option>
                          <option value="2">2 - Sim, Parcial</option>
                          <option value="3" selected>3 - Não</option>
                          <option value="9">9 - Ignorado</option>
                      </select>
                  </div>
             </div>
          </div>
          <div class="sinan-section">
             <div class="sinan-section-title"><i class="fas fa-map-marker-alt"></i> Conclusão e Investigação (Campos 58-71)</div>
             <div class="sinan-grid-4">
                  <div class="form-group span-2">
                      <label>58 - Diagnóstico Laboratorial</label>
                      <select id="raiva-diag-laboratorial-${id}">
                          <option value="1">1 - Positivo</option>
                          <option value="2">2 - Negativo</option>
                          <option value="3">3 - Inconclusivo</option>
                          <option value="4" selected>4 - Não realizado</option>
                      </select>
                  </div>
                  <div class="form-group span-2">
                      <label>59 - Variante do Vírus</label>
                      <input type="text" id="raiva-variante-${id}" placeholder="Ex: Variante 3">
                  </div>
                  <div class="form-group">
                      <label>60 - Classificação Final</label>
                      <select id="raiva-classificacao-${id}">
                          <option value="1" selected>1 - Confirmado</option>
                          <option value="2">2 - Descartado</option>
                      </select>
                  </div>
                  <div class="form-group span-3">
                      <label>61 - Critério de Confirmação/Descarte</label>
                      <select id="raiva-criterio-${id}">
                          <option value="1" selected>1 - Laboratório</option>
                          <option value="2">2 - Óbito com Clínica Compatível + Vínculo</option>
                          <option value="3">3 - Evolução Clínica Incompatível</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>62 - Autóctone?</label>
                      <select id="raiva-autoctone-${id}">
                          <option value="1" selected>1 - Sim</option>
                          <option value="2">2 - Não</option>
                          <option value="3">3 - Indeterminado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>63 - UF Infecção</label>
                      <input type="text" id="raiva-uf-infeccao-${id}" maxlength="2" placeholder="PA">
                  </div>
                  <div class="form-group span-2">
                      <label>64 - País provável de infecção</label>
                      <input type="text" id="raiva-pais-infeccao-${id}" value="Brasil">
                  </div>
                  <div class="form-group span-2">
                      <label>65 - Município de Infecção</label>
                      <input type="text" id="raiva-municipio-infeccao-${id}" placeholder="Município">
                  </div>
                  <div class="form-group">
                      <label>65 - Código (IBGE)</label>
                      <input type="text" id="raiva-ibge-infeccao-${id}" placeholder="Código IBGE">
                  </div>
                  <div class="form-group">
                      <label>66 - Distrito</label>
                      <input type="text" id="raiva-distrito-infeccao-${id}" placeholder="Distrito">
                  </div>
                  <div class="form-group span-2">
                      <label>67 - Bairro</label>
                      <input type="text" id="raiva-bairro-infeccao-${id}" placeholder="Bairro">
                  </div>
                  <div class="form-group">
                      <label>68 - Zona</label>
                      <select id="raiva-zona-infeccao-${id}">
                          <option value="1" selected>1 - Urbana</option>
                          <option value="2">2 - Rural</option>
                          <option value="3">3 - Periurbana</option>
                          <option value="9">9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>69 - Relacionada ao Trabalho?</label>
                      <select id="raiva-trabalho-${id}">
                          <option value="1">1 - Sim</option>
                          <option value="2" selected>2 - Não</option>
                          <option value="9">9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>70 - Data do Óbito</label>
                      <input type="date" id="raiva-data-obito-${id}">
                  </div>
                  <div class="form-group">
                      <label>71 - Data do Encerramento</label>
                      <input type="date" id="raiva-data-encerramento-${id}" value="${new Date().toISOString().substring(0,10)}">
                  </div>
                  <div class="form-group span-4">
                      <label>Informações Complementares e Observações</label>
                      <textarea id="raiva-obs-${id}" rows="3" placeholder="Informações complementares..."></textarea>
                  </div>
             </div>
          </div>
        `;
      } else if (id === 'leishmaniose-visceral') {
        block7Html = `
          <!-- BLOCO 7: DADOS COMPLEMENTARES LEISHMANIOSE VISCERAL -->
          <div class="sinan-section">
             <div class="sinan-section-title"><i class="fas fa-clipboard-list"></i> Dados Clínicos e Laboratoriais (Campos 31-37)</div>
             <div class="sinan-grid-4">
                  <div class="form-group">
                      <label>31 - Data da Investigação</label>
                      <input type="date" id="leish-visc-data-investigacao-${id}">
                  </div>
                  <div class="form-group span-2">
                      <label>32 - Ocupação</label>
                      <input type="text" id="leish-visc-ocupacao-${id}" placeholder="Ex: Agricultor">
                  </div>
                  <div class="form-group span-3">
                      <label>33 - Manifestações Clínicas</label>
                      <input type="text" id="leish-visc-sintomas-${id}" placeholder="Febre, Emagrecimento, Aumento do Baço, Palidez, etc.">
                  </div>
                  <div class="form-group">
                      <label>34 - Co-infecção HIV</label>
                      <select id="leish-visc-hiv-${id}">
                          <option value="1">1 - Sim</option>
                          <option value="2" selected>2 - Não</option>
                          <option value="9">9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>35 - Diagnóstico Parasitológico</label>
                      <select id="leish-visc-diag-parasito-${id}">
                          <option value="1">1 - Positivo</option>
                          <option value="2">2 - Negativo</option>
                          <option value="3" selected>3 - Não Realizado</option>
                      </select>
                  </div>
                  <div class="form-group span-2">
                      <label>36 - Diagnóstico Imunológico (Elisa/IFI)</label>
                      <select id="leish-visc-diag-imuno-${id}">
                          <option value="1">1 - Reagente</option>
                          <option value="2">2 - Não Reagente</option>
                          <option value="3">3 - Inconclusivo</option>
                          <option value="4" selected>4 - Não Realizado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>37 - Tipo de Entrada</label>
                      <select id="leish-visc-tipo-entrada-${id}">
                          <option value="1" selected>1 - Caso Novo</option>
                          <option value="2">2 - Recidiva</option>
                          <option value="3">3 - Transferência</option>
                          <option value="9">9 - Ignorado</option>
                      </select>
                  </div>
             </div>
          </div>
          <div class="sinan-section">
             <div class="sinan-section-title"><i class="fas fa-pills"></i> Tratamento e Conclusão (Campos 38-55)</div>
             <div class="sinan-grid-4">
                  <div class="form-group">
                      <label>38 - Data do Início do Tratamento</label>
                      <input type="date" id="leish-visc-inicio-tratamento-${id}">
                  </div>
                  <div class="form-group span-2">
                      <label>39 - Droga Inicial Administrada</label>
                      <select id="leish-visc-droga-${id}">
                          <option value="1" selected>1 - Antimonial Pentavalente</option>
                          <option value="2">2 - Anfotericina B</option>
                          <option value="3">3 - Pentamidina</option>
                          <option value="4">4 - Anfotericina B Lipossomal</option>
                          <option value="5">5 - Outras</option>
                          <option value="6">6 - Não Utilizada</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>40 - Peso (kg)</label>
                      <input type="number" id="leish-visc-peso-${id}" min="0" placeholder="kg">
                  </div>
                  <div class="form-group">
                      <label>41 - Dose Prescrita (mg/kg/dia)</label>
                      <input type="text" id="leish-visc-dose-${id}" placeholder="Sb+5">
                  </div>
                  <div class="form-group">
                      <label>42 - Total de Ampolas Prescritas</label>
                      <input type="number" id="leish-visc-ampolas-${id}" min="0" placeholder="0">
                  </div>
                  <div class="form-group span-2">
                      <label>43 - Outra Droga Utilizada (Falência)</label>
                      <select id="leish-visc-outra-droga-${id}">
                          <option value="1">1 - Anfotericina B</option>
                          <option value="2">2 - Anfotericina B Lipossomal</option>
                          <option value="3">3 - Outras</option>
                          <option value="4" selected>4 - Não se aplica</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>44 - Classificação Final</label>
                      <select id="leish-visc-classificacao-${id}">
                          <option value="1" selected>1 - Confirmado</option>
                          <option value="2">2 - Descartado</option>
                      </select>
                  </div>
                  <div class="form-group span-2">
                      <label>45 - Critério de Confirmação</label>
                      <select id="leish-visc-criterio-${id}">
                          <option value="1" selected>1 - Laboratorial</option>
                          <option value="2">2 - Clínico-Epidemiológico</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>46 - Autóctone?</label>
                      <select id="leish-visc-autoctone-${id}">
                          <option value="1" selected>1 - Sim</option>
                          <option value="2">2 - Não</option>
                          <option value="3">3 - Indeterminado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>47 - UF Infecção</label>
                      <input type="text" id="leish-visc-uf-infeccao-${id}" maxlength="2" placeholder="PA">
                  </div>
                  <div class="form-group span-2">
                      <label>48 - País provável de infecção</label>
                      <input type="text" id="leish-visc-pais-infeccao-${id}" value="Brasil">
                  </div>
                  <div class="form-group span-2">
                      <label>49 - Município de Infecção</label>
                      <input type="text" id="leish-visc-municipio-infeccao-${id}" placeholder="Município">
                  </div>
                  <div class="form-group">
                      <label>50 - Distrito</label>
                      <input type="text" id="leish-visc-distrito-infeccao-${id}" placeholder="Distrito">
                  </div>
                  <div class="form-group">
                      <label>51 - Bairro</label>
                      <input type="text" id="leish-visc-bairro-infeccao-${id}" placeholder="Bairro">
                  </div>
                  <div class="form-group">
                      <label>52 - Relacionada ao Trabalho?</label>
                      <select id="leish-visc-trabalho-${id}">
                          <option value="1">1 - Sim</option>
                          <option value="2" selected>2 - Não</option>
                          <option value="9">9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group span-2">
                      <label>53 - Evolução do Caso</label>
                      <select id="leish-visc-evolucao-${id}">
                          <option value="1" selected>1 - Cura</option>
                          <option value="2">2 - Abandono</option>
                          <option value="3">3 - Óbito por LV</option>
                          <option value="4">4 - Óbito por outras causas</option>
                          <option value="5">5 - Transferência</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>54 - Data do Óbito</label>
                      <input type="date" id="leish-visc-data-obito-${id}">
                  </div>
                  <div class="form-group">
                      <label>55 - Data do Encerramento</label>
                      <input type="date" id="leish-visc-data-encerramento-${id}" value="${new Date().toISOString().substring(0,10)}">
                  </div>
                  <div class="form-group span-4">
                      <label>Deslocamento nos últimos 6 meses (Datas e Cidades)</label>
                      <input type="text" id="leish-visc-deslocamentos-${id}" placeholder="Ex: Jan/2026 - Marabá/PA, Fev/2026 - Altamira/PA">
                  </div>
                  <div class="form-group span-4">
                      <label>Informações Complementares e Observações</label>
                      <textarea id="leish-visc-obs-${id}" rows="3" placeholder="Informações adicionais..."></textarea>
                  </div>
             </div>
          </div>
        `;
      } else if (id === 'chagas') {
        block7Html = `
          <!-- BLOCO 7: DADOS COMPLEMENTARES DOENÇA DE CHAGAS AGUDA -->
          <div class="sinan-section">
             <div class="sinan-section-title"><i class="fas fa-clipboard-list"></i> Dados Complementares e Epidemiologia (Campos 31-40)</div>
             <div class="sinan-grid-4">
                  <div class="form-group">
                      <label>31 - Data da Investigação</label>
                      <input type="date" id="chagas-data-investigacao-${id}">
                  </div>
                  <div class="form-group span-2">
                      <label>32 - Ocupação</label>
                      <input type="text" id="chagas-ocupacao-${id}" placeholder="Ex: Agricultor">
                  </div>
                  <div class="form-group">
                      <label>34 - Vestígios de Triatomíneos?</label>
                      <select id="chagas-vestigios-${id}">
                          <option value="1">1 - Sim</option>
                          <option value="2">2 - Não</option>
                          <option value="3">3 - Não Realizado</option>
                          <option value="9" selected>9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>35 - Data do Encontro</label>
                      <input type="date" id="chagas-data-vestigios-${id}">
                  </div>
                  <div class="form-group span-2">
                      <label>36 - Uso de Sangue/Hemoderivados (120 dias)?</label>
                      <select id="chagas-sangue-${id}">
                          <option value="1">1 - Sim</option>
                          <option value="2">2 - Não</option>
                          <option value="9" selected>9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group span-2">
                      <label>37 - Controle Sorológico na Hemoterapia?</label>
                      <select id="chagas-controle-soro-${id}">
                          <option value="1">1 - Sim</option>
                          <option value="2">2 - Não</option>
                          <option value="3">3 - Não se aplica</option>
                          <option value="9" selected>9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group span-2">
                      <label>38 - Manipulação/Contato com T. cruzi?</label>
                      <select id="chagas-contato-${id}">
                          <option value="1">1 - Sim</option>
                          <option value="2">2 - Não</option>
                          <option value="3">3 - Não se aplica</option>
                          <option value="9" selected>9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group span-2">
                      <label>39 - Idade <= 9m: Mãe com Infecção?</label>
                      <select id="chagas-mae-infeccao-${id}">
                          <option value="1">1 - Sim</option>
                          <option value="2">2 - Não</option>
                          <option value="3">3 - Não se aplica</option>
                          <option value="9" selected>9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group span-2">
                      <label>40 - Possibilidade de Transmissão Oral?</label>
                      <select id="chagas-transmissao-oral-${id}">
                          <option value="1">1 - Sim</option>
                          <option value="2">2 - Não</option>
                          <option value="9" selected>9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group span-4">
                      <label>33 - Deslocamento nos últimos 120 dias (Cidades e UFs)</label>
                      <input type="text" id="chagas-deslocamentos-${id}" placeholder="Ex: Marabá/PA, Altamira/PA">
                  </div>
                  <div class="form-group span-4">
                      <label>Observações e Informações Complementares</label>
                      <textarea id="chagas-obs-${id}" rows="3" placeholder="Informações complementares..."></textarea>
                  </div>
             </div>
          </div>
        `;
      } else if (id === 'leptospirose') {
        block7Html = `
          <!-- BLOCO 7: DADOS COMPLEMENTARES LEPTOSPIROSE -->
          <div class="sinan-section">
             <div class="sinan-section-title"><i class="fas fa-clipboard-list"></i> Antecedentes e Sintomas (Campos 31-42)</div>
             <div class="sinan-grid-4">
                  <div class="form-group">
                      <label>31 - Data da Investigação</label>
                      <input type="date" id="lepto-data-investigacao-${id}">
                  </div>
                  <div class="form-group span-2">
                      <label>32 - Ocupação</label>
                      <input type="text" id="lepto-ocupacao-${id}" placeholder="Ex: Agricultor">
                  </div>
                  <div class="form-group span-3">
                      <label>33 - Situação de Risco (Últimos 30 dias)</label>
                      <input type="text" id="lepto-situacao-risco-${id}" placeholder="Água de enchente, esgoto, roedores, etc.">
                  </div>
                  <div class="form-group">
                      <label>34 - Casos Anteriores no Local</label>
                      <select id="lepto-casos-anteriores-${id}">
                          <option value="1">1 - Casos Humanos</option>
                          <option value="2">2 - Casos Animais</option>
                          <option value="3">3 - Sim, ambos</option>
                          <option value="4" selected>4 - Não</option>
                          <option value="9">9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>35 - Data do Atendimento</label>
                      <input type="date" id="lepto-data-atendimento-${id}">
                  </div>
                  <div class="form-group span-3">
                      <label>36 - Principais Sinais e Sintomas</label>
                      <input type="text" id="lepto-sinais-sintomas-${id}" placeholder="Febre, Mialgia, Dor na panturrilha, Icterícia, etc.">
                  </div>
                  <div class="form-group">
                      <label>37 - Ocorreu Hospitalização?</label>
                      <select id="lepto-hospitalizacao-${id}">
                          <option value="1">1 - Sim</option>
                          <option value="2" selected>2 - Não</option>
                          <option value="9">9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>38 - Data da Internação</label>
                      <input type="date" id="lepto-data-internacao-${id}">
                  </div>
                  <div class="form-group">
                      <label>39 - Data de Alta</label>
                      <input type="date" id="lepto-data-alta-${id}">
                  </div>
                  <div class="form-group span-2">
                      <label>42 - Nome do Hospital</label>
                      <input type="text" id="lepto-hospital-nome-${id}" placeholder="Hospital">
                  </div>
             </div>
          </div>
          <div class="sinan-section">
             <div class="sinan-section-title"><i class="fas fa-vial"></i> Resultados de Exames e Conclusão (Campos 43-74)</div>
             <div class="sinan-grid-4">
                  <div class="form-group span-2">
                      <label>43-46 - Sorologia Elisa IgM</label>
                      <select id="lepto-elisa-resultado-${id}">
                          <option value="1">1 - Reagente</option>
                          <option value="2">2 - Não Reagente</option>
                          <option value="3">3 - Inconclusivo</option>
                          <option value="4" selected>4 - Não Realizado</option>
                      </select>
                  </div>
                  <div class="form-group span-2">
                      <label>47-54 - Teste de Microaglutinação (MAT)</label>
                      <select id="lepto-mat-resultado-${id}">
                          <option value="1">1 - Reagente</option>
                          <option value="2">2 - Não Reagente</option>
                          <option value="3">3 - Inconclusivo</option>
                          <option value="4" selected>4 - Não Realizado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>61 - Classificação Final</label>
                      <select id="lepto-classificacao-${id}">
                          <option value="1" selected>1 - Confirmado</option>
                          <option value="2">2 - Descartado</option>
                      </select>
                  </div>
                  <div class="form-group span-2">
                      <label>62 - Critério de Confirmação</label>
                      <select id="lepto-criterio-${id}">
                          <option value="1" selected>1 - Clínico-Laboratorial</option>
                          <option value="2">2 - Clínico-Epidemiológico</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>63 - Autóctone?</label>
                      <select id="lepto-autoctone-${id}">
                          <option value="1" selected>1 - Sim</option>
                          <option value="2">2 - Não</option>
                          <option value="3">3 - Indeterminado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>64 - UF Infecção</label>
                      <input type="text" id="lepto-uf-infeccao-${id}" maxlength="2" placeholder="PA">
                  </div>
                  <div class="form-group span-2">
                      <label>65 - País de Infecção</label>
                      <input type="text" id="lepto-pais-infeccao-${id}" value="Brasil">
                  </div>
                  <div class="form-group span-2">
                      <label>66 - Município de Infecção</label>
                      <input type="text" id="lepto-municipio-infeccao-${id}" placeholder="Município">
                  </div>
                  <div class="form-group">
                      <label>67 - Distrito</label>
                      <input type="text" id="lepto-distrito-infeccao-${id}" placeholder="Distrito">
                  </div>
                  <div class="form-group">
                      <label>68 - Bairro</label>
                      <input type="text" id="lepto-bairro-infeccao-${id}" placeholder="Bairro">
                  </div>
                  <div class="form-group">
                      <label>69 - Zona</label>
                      <select id="lepto-zona-infeccao-${id}">
                          <option value="1" selected>1 - Urbana</option>
                          <option value="2">2 - Rural</option>
                          <option value="3">3 - Periurbana</option>
                          <option value="9">9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>70 - Ambiente da Infecção</label>
                      <select id="lepto-ambiente-infeccao-${id}">
                          <option value="1" selected>1 - Domiciliar</option>
                          <option value="2">2 - Trabalho</option>
                          <option value="3">3 - Lazer</option>
                          <option value="4">4 - Outro</option>
                          <option value="9">9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>71 - Relacionada ao Trabalho?</label>
                      <select id="lepto-trabalho-${id}">
                          <option value="1">1 - Sim</option>
                          <option value="2" selected>2 - Não</option>
                          <option value="9">9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group span-2">
                      <label>72 - Evolução do Caso</label>
                      <select id="lepto-evolucao-${id}">
                          <option value="1" selected>1 - Cura</option>
                          <option value="2">2 - Óbito por leptospirose</option>
                          <option value="3">3 - Óbito por outras causas</option>
                          <option value="9">9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>73 - Data do Óbito</label>
                      <input type="date" id="lepto-data-obito-${id}">
                  </div>
                  <div class="form-group">
                      <label>74 - Data do Encerramento</label>
                      <input type="date" id="lepto-data-encerramento-${id}" value="${new Date().toISOString().substring(0,10)}">
                  </div>
                  <div class="form-group span-4">
                      <label>Endereços/Riscos nos 30 dias que antecederam os sintomas</label>
                      <input type="text" id="lepto-obs-riscos-${id}" placeholder="Endereços de exposição...">
                  </div>
                  <div class="form-group span-4">
                      <label>Observações</label>
                      <textarea id="lepto-obs-${id}" rows="3" placeholder="Informações adicionais..."></textarea>
                  </div>
             </div>
          </div>
        `;
      } else if (id === 'acidente-ofidico') {
        block7Html = `
          <!-- BLOCO 7: DADOS COMPLEMENTARES ACIDENTES POR ANIMAIS PEÇONHENTOS -->
          <div class="sinan-section">
             <div class="sinan-section-title"><i class="fas fa-clipboard-list"></i> Dados do Acidente (Campos 31-44)</div>
             <div class="sinan-grid-4">
                  <div class="form-group">
                      <label>31 - Data da Investigação</label>
                      <input type="date" id="ofidico-data-investigacao-${id}">
                  </div>
                  <div class="form-group span-2">
                      <label>32 - Ocupação</label>
                      <input type="text" id="ofidico-ocupacao-${id}" placeholder="Ex: Agricultor">
                  </div>
                  <div class="form-group">
                      <label>33 - Data do Acidente</label>
                      <input type="date" id="ofidico-data-acidente-${id}">
                  </div>
                  <div class="form-group">
                      <label>34 - UF Ocorrência</label>
                      <input type="text" id="ofidico-uf-ocorrencia-${id}" maxlength="2" placeholder="PA">
                  </div>
                  <div class="form-group span-2">
                      <label>35 - Município de Ocorrência</label>
                      <input type="text" id="ofidico-mun-ocorrencia-${id}" placeholder="Município">
                  </div>
                  <div class="form-group span-2">
                      <label>36 - Localidade de Ocorrência</label>
                      <input type="text" id="ofidico-localidade-ocorrencia-${id}" placeholder="Localidade">
                  </div>
                  <div class="form-group">
                      <label>37 - Zona de Ocorrência</label>
                      <select id="ofidico-zona-ocorrencia-${id}">
                          <option value="1" selected>1 - Urbana</option>
                          <option value="2">2 - Rural</option>
                          <option value="3">3 - Periurbana</option>
                          <option value="9">9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group span-2">
                      <label>38 - Tempo Picada/Atendimento</label>
                      <select id="ofidico-tempo-atendimento-${id}">
                          <option value="1" selected>1 - 0-1h</option>
                          <option value="2">2 - 1-3h</option>
                          <option value="3">3 - 3-6h</option>
                          <option value="4">4 - 6-12h</option>
                          <option value="5">5 - 12-24h</option>
                          <option value="6">6 - 24h+</option>
                          <option value="9">9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group span-2">
                      <label>39 - Local da Picada</label>
                      <select id="ofidico-local-picada-${id}">
                          <option value="01">01 - Cabeça</option>
                          <option value="02">02 - Braço</option>
                          <option value="03">03 - Antebraço</option>
                          <option value="04">04 - Mão</option>
                          <option value="05">05 - Dedo da Mão</option>
                          <option value="06">06 - Tronco</option>
                          <option value="07">07 - Coxa</option>
                          <option value="08">08 - Perna</option>
                          <option value="09" selected>09 - Pé</option>
                          <option value="10">10 - Dedo do Pé</option>
                          <option value="99">99 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>40 - Manifestações Locais?</label>
                      <select id="ofidico-locais-${id}">
                          <option value="1" selected>1 - Sim</option>
                          <option value="2">2 - Não</option>
                          <option value="9">9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group span-2">
                      <label>41 - Sintomas Locais</label>
                      <input type="text" id="ofidico-sintomas-locais-${id}" placeholder="Dor, Edema, Equimose, Necrose...">
                  </div>
                  <div class="form-group">
                      <label>42 - Manifestações Sistêmicas?</label>
                      <select id="ofidico-sistemicas-${id}">
                          <option value="1">1 - Sim</option>
                          <option value="2" selected>2 - Não</option>
                          <option value="9">9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group span-2">
                      <label>43 - Sintomas Sistêmicos</label>
                      <input type="text" id="ofidico-sintomas-sistemicos-${id}" placeholder="Neuroparalíticas, hemorrágicas, renais...">
                  </div>
                  <div class="form-group">
                      <label>44 - Tempo de Coagulação</label>
                      <select id="ofidico-tempo-coag-${id}">
                          <option value="1" selected>1 - Normal</option>
                          <option value="2">2 - Alterado</option>
                          <option value="3">3 - Não Realizado</option>
                      </select>
                  </div>
                  <div class="form-group span-2">
                      <label>45 - Tipo de Acidente</label>
                      <select id="ofidico-tipo-acidente-${id}">
                          <option value="1" selected>1 - Serpente</option>
                          <option value="2">2 - Aranha</option>
                          <option value="3">3 - Escorpião</option>
                          <option value="4">4 - Lagarta</option>
                          <option value="5">5 - Abelha</option>
                          <option value="6">6 - Outros</option>
                          <option value="9">9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group span-2">
                      <label>46/47/48 - Agente Causador (Espécie)</label>
                      <input type="text" id="ofidico-agente-especie-${id}" placeholder="Botrópico, Loxoscelismo, Lonomia, etc.">
                  </div>
             </div>
          </div>
          <div class="sinan-section">
             <div class="sinan-section-title"><i class="fas fa-pills"></i> Classificação e Soroterapia (Campos 49-59)</div>
             <div class="sinan-grid-4">
                  <div class="form-group">
                      <label>49 - Classificação do Caso</label>
                      <select id="ofidico-classificacao-caso-${id}">
                          <option value="1" selected>1 - Leve</option>
                          <option value="2">2 - Moderado</option>
                          <option value="3">3 - Grave</option>
                          <option value="9">9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>50 - Soroterapia?</label>
                      <select id="ofidico-soroterapia-${id}">
                          <option value="1">1 - Sim</option>
                          <option value="2" selected>2 - Não</option>
                          <option value="9">9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group span-2">
                      <label>51 - Qtd de Ampolas de Soro</label>
                      <input type="text" id="ofidico-soro-ampolas-${id}" placeholder="Ex: 4 ampolas SAB, 2 SAC">
                  </div>
                  <div class="form-group">
                      <label>52 - Complicações Locais?</label>
                      <select id="ofidico-compl-locais-${id}">
                          <option value="1">1 - Sim</option>
                          <option value="2" selected>2 - Não</option>
                          <option value="9">9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group span-2">
                      <label>53 - Especificar Complicações Locais</label>
                      <input type="text" id="ofidico-compl-locais-especificar-${id}" placeholder="Infecção, Necrose, Amputação...">
                  </div>
                  <div class="form-group">
                      <label>54 - Complicações Sistêmicas?</label>
                      <select id="ofidico-compl-sistemicas-${id}">
                          <option value="1">1 - Sim</option>
                          <option value="2" selected>2 - Não</option>
                          <option value="9">9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group span-2">
                      <label>55 - Especificar Complicações Sistêmicas</label>
                      <input type="text" id="ofidico-compl-sistemicas-especificar-${id}" placeholder="Insuf. Renal, Choque...">
                  </div>
                  <div class="form-group">
                      <label>56 - Relacionado ao Trabalho?</label>
                      <select id="ofidico-trabalho-${id}">
                          <option value="1">1 - Sim</option>
                          <option value="2" selected>2 - Não</option>
                          <option value="9">9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>57 - Evolução</label>
                      <select id="ofidico-evolucao-${id}">
                          <option value="1" selected>1 - Cura</option>
                          <option value="2">2 - Óbito por acidente</option>
                          <option value="3">3 - Óbito por outras causas</option>
                          <option value="9">9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>58 - Data do Óbito</label>
                      <input type="date" id="ofidico-data-obito-${id}">
                  </div>
                  <div class="form-group">
                      <label>59 - Data do Encerramento</label>
                      <input type="date" id="ofidico-data-encerramento-${id}" value="${new Date().toISOString().substring(0,10)}">
                  </div>
                  <div class="form-group span-4">
                      <label>Informações Complementares e Observações</label>
                      <textarea id="ofidico-obs-${id}" rows="3" placeholder="Informações adicionais..."></textarea>
                  </div>
             </div>
          </div>
        `;
      } else if (id === 'leishmaniose-tegumentar') {
        block7Html = `
          <!-- BLOCO 7: DADOS COMPLEMENTARES LEISHMANIOSE TEGUMENTAR -->
          <div class="sinan-section">
             <div class="sinan-section-title"><i class="fas fa-clipboard-list"></i> Dados Clínicos e Diagnósticos (Campos 31-40)</div>
             <div class="sinan-grid-4">
                  <div class="form-group">
                      <label>31 - Data da Investigação</label>
                      <input type="date" id="leish-tegu-data-investigacao-${id}">
                  </div>
                  <div class="form-group span-2">
                      <label>32 - Ocupação</label>
                      <input type="text" id="leish-tegu-ocupacao-${id}" placeholder="Ex: Agricultor">
                  </div>
                  <div class="form-group">
                      <label>33 - Presença de Lesão</label>
                      <select id="leish-tegu-presenca-lesao-${id}">
                          <option value="1">1 - Cutânea</option>
                          <option value="2">2 - Mucosa</option>
                          <option value="3" selected>3 - Ambas</option>
                          <option value="9">9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group span-2">
                      <label>34 - Se Mucosa, Cicatrizes Cutâneas?</label>
                      <select id="leish-tegu-cicatrizes-${id}">
                          <option value="1">1 - Sim</option>
                          <option value="2" selected>2 - Não</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>35 - Co-infecção HIV</label>
                      <select id="leish-tegu-hiv-${id}">
                          <option value="1">1 - Sim</option>
                          <option value="2" selected>2 - Não</option>
                          <option value="9">9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>36 - Parasitológico Direto</label>
                      <select id="leish-tegu-diag-parasito-${id}">
                          <option value="1">1 - Positivo</option>
                          <option value="2">2 - Negativo</option>
                          <option value="3" selected>3 - Não Realizado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>37 - Intradermoreação (IRM)</label>
                      <select id="leish-tegu-diag-irm-${id}">
                          <option value="1">1 - Positivo</option>
                          <option value="2">2 - Negativo</option>
                          <option value="3" selected>3 - Não Realizado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>38 - Histopatologia</label>
                      <select id="leish-tegu-histopato-${id}">
                          <option value="1">1 - Encontro de Parasitas</option>
                          <option value="2">2 - Compatível</option>
                          <option value="3">3 - Não Compatível</option>
                          <option value="4" selected>4 - Não Realizado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>39 - Tipo de Entrada</label>
                      <select id="leish-tegu-tipo-entrada-${id}">
                          <option value="1" selected>1 - Caso Novo</option>
                          <option value="2">2 - Recidiva</option>
                          <option value="3">3 - Transferência</option>
                          <option value="9">9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>40 - Forma Clínica</label>
                      <select id="leish-tegu-forma-clinica-${id}">
                          <option value="1" selected>1 - Cutânea</option>
                          <option value="2">2 - Mucosa</option>
                          <option value="9">9 - Ignorado</option>
                      </select>
                  </div>
             </div>
          </div>
          <div class="sinan-section">
             <div class="sinan-section-title"><i class="fas fa-pills"></i> Tratamento e Conclusão (Campos 41-58)</div>
             <div class="sinan-grid-4">
                  <div class="form-group">
                      <label>41 - Data do Início do Tratamento</label>
                      <input type="date" id="leish-tegu-inicio-tratamento-${id}">
                  </div>
                  <div class="form-group span-2">
                      <label>42 - Droga Inicial Administrada</label>
                      <select id="leish-tegu-droga-${id}">
                          <option value="1" selected>1 - Antimonial Pentavalente</option>
                          <option value="2">2 - Anfotericina B</option>
                          <option value="3">3 - Pentamidina</option>
                          <option value="4">4 - Outras</option>
                          <option value="5">5 - Não Utilizada</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>43 - Peso (kg)</label>
                      <input type="number" id="leish-tegu-peso-${id}" min="0" placeholder="kg">
                  </div>
                  <div class="form-group span-2">
                      <label>44 - Dose Prescrita Sb+5 (mg/kg/dia)</label>
                      <select id="leish-tegu-dose-${id}">
                          <option value="1" selected>1 - Menor que 10</option>
                          <option value="2">2 - Maior ou igual a 10 e menor que 15</option>
                          <option value="3">3 - Igual a 15</option>
                          <option value="4">4 - Maior ou igual a 20</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>45 - Total de Ampolas Prescritas</label>
                      <input type="number" id="leish-tegu-ampolas-${id}" min="0" placeholder="0">
                  </div>
                  <div class="form-group span-2">
                      <label>46 - Outra Droga Utilizada (Falência)</label>
                      <select id="leish-tegu-outra-droga-${id}">
                          <option value="1">1 - Anfotericina B</option>
                          <option value="2">2 - Pentamidina</option>
                          <option value="3">3 - Outras</option>
                          <option value="4" selected>4 - Não se aplica</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>47 - Critério de Confirmação</label>
                      <select id="leish-tegu-criterio-${id}">
                          <option value="1" selected>1 - Laboratorial</option>
                          <option value="2">2 - Clínico-Epidemiológico</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>48 - Classificação Epidemiológica</label>
                      <select id="leish-tegu-class-epidêmio-${id}">
                          <option value="1" selected>1 - Autóctone</option>
                          <option value="2">2 - Importado</option>
                          <option value="3">3 - Indeterminado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>49 - Autóctone?</label>
                      <select id="leish-tegu-autoctone-${id}">
                          <option value="1" selected>1 - Sim</option>
                          <option value="2">2 - Não</option>
                          <option value="3">3 - Indeterminado</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>50 - UF Infecção</label>
                      <input type="text" id="leish-tegu-uf-infeccao-${id}" maxlength="2" placeholder="PA">
                  </div>
                  <div class="form-group span-2">
                      <label>51 - País provável de infecção</label>
                      <input type="text" id="leish-tegu-pais-infeccao-${id}" value="Brasil">
                  </div>
                  <div class="form-group span-2">
                      <label>52 - Município de Infecção</label>
                      <input type="text" id="leish-tegu-municipio-infeccao-${id}" placeholder="Município">
                  </div>
                  <div class="form-group">
                      <label>53 - Distrito</label>
                      <input type="text" id="leish-tegu-distrito-infeccao-${id}" placeholder="Distrito">
                  </div>
                  <div class="form-group">
                      <label>54 - Bairro</label>
                      <input type="text" id="leish-tegu-bairro-infeccao-${id}" placeholder="Bairro">
                  </div>
                  <div class="form-group">
                      <label>55 - Relacionada ao Trabalho?</label>
                      <select id="leish-tegu-trabalho-${id}">
                          <option value="1">1 - Sim</option>
                          <option value="2" selected>2 - Não</option>
                          <option value="9">9 - Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group span-2">
                      <label>56 - Evolução do Caso</label>
                      <select id="leish-tegu-evolucao-${id}">
                          <option value="1" selected>1 - Cura</option>
                          <option value="2">2 - Abandono</option>
                          <option value="3">3 - Óbito por LTA</option>
                          <option value="4">4 - Óbito por outras causas</option>
                          <option value="5">5 - Transferência</option>
                          <option value="6">6 - Mudança de Diagnóstico</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>57 - Data do Óbito</label>
                      <input type="date" id="leish-tegu-data-obito-${id}">
                  </div>
                  <div class="form-group">
                      <label>58 - Data do Encerramento</label>
                      <input type="date" id="leish-tegu-data-encerramento-${id}" value="${new Date().toISOString().substring(0,10)}">
                  </div>
                  <div class="form-group span-4">
                      <label>Deslocamento nos últimos 6 meses (Datas e Cidades)</label>
                      <input type="text" id="leish-tegu-deslocamentos-${id}" placeholder="Ex: Jan/2026 - Marabá/PA">
                  </div>
                  <div class="form-group span-4">
                      <label>Informações Complementares e Observações</label>
                      <textarea id="leish-tegu-obs-${id}" rows="3" placeholder="Informações adicionais..."></textarea>
                  </div>
             </div>
          </div>
        `;
      } else {
        block7Html = `
          <!-- BLOCO 7: DADOS COMPLEMENTARES (Pagina 2 da ficha) -->
          <div class="sinan-section">
             <div class="sinan-section-title"><i class="fas fa-clipboard-list"></i> Dados Complementares (Pag. 2 da Ficha SINAN)</div>
             <div class="sinan-grid-4">
                  <div class="form-group span-2">
                      <label>04 - Óbito?</label>
                      <select id="comp-obito-${id}">
                          <option value="1">1-Sim</option>
                          <option value="2" selected>2-Nao</option>
                          <option value="9">9-Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group span-2">
                      <label>05 - Contato com Caso Semelhante?</label>
                      <select id="comp-contato-${id}">
                          <option value="1">1-Sim</option>
                          <option value="2" selected>2-Nao</option>
                          <option value="9">9-Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group span-2">
                      <label>06 - Presença de Exantema?</label>
                      <select id="comp-exantema-${id}">
                          <option value="1">1-Sim</option>
                          <option value="2" selected>2-Nao</option>
                          <option value="9">9-Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group span-2">
                      <label>07 - Data do Início do Exantema</label>
                      <input type="date" id="comp-exantema-date-${id}">
                  </div>
                  <div class="form-group span-2">
                      <label>08 - Presença de Petéquias ou Sufusões Hemorrágicas?</label>
                      <select id="comp-petequias-${id}">
                          <option value="1">1-Sim</option>
                          <option value="2" selected>2-Nao</option>
                          <option value="9">9-Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group span-2">
                      <label>09 - Foi Realizado Líquor?</label>
                      <select id="comp-liquor-${id}">
                          <option value="1">1-Sim</option>
                          <option value="2" selected>2-Nao</option>
                          <option value="9">9-Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group span-4">
                      <label>11 - O paciente tomou vacina contra agravo notificado neste impresso?</label>
                      <select id="comp-vacina-${id}">
                          <option value="1">1-Sim</option>
                          <option value="2" selected>2-Nao</option>
                          <option value="9">9-Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group span-2">
                      <label>12 - Data da ultima dose tomada</label>
                      <input type="date" id="comp-vacina-date-${id}">
                  </div>
                  <div class="form-group span-2">
                      <label>13 - Ocorreu Hospitalização?</label>
                      <select id="comp-hospitalizacao-${id}">
                          <option value="1">1-Sim</option>
                          <option value="2" selected>2-Nao</option>
                          <option value="9">9-Ignorado</option>
                      </select>
                  </div>
                  <div class="form-group span-2">
                      <label>14 - Data da Hospitalização</label>
                      <input type="date" id="comp-hosp-date-${id}">
                  </div>
                  <div class="form-group" style="max-width:80px;">
                      <label>15 - UF Hospital</label>
                      <input type="text" id="comp-hospital-uf-${id}" placeholder="PA" maxlength="2">
                  </div>
                  <div class="form-group span-2">
                      <label>16 - Município do Hospital</label>
                      <input type="text" id="comp-hospital-mun-${id}" placeholder="Maraba">
                  </div>
                  <div class="form-group span-4">
                      <label>17 - Nome do Hospital</label>
                      <input type="text" id="comp-hospital-nome-${id}" placeholder="Nome do hospital">
                  </div>
             </div>
          </div>
        `;
      }

      formDiv.innerHTML = `
        <div class="form-header">
          <i class="fas ${disease.icon}"></i>
          <h2>${disease.name}</h2>
        </div>
        <form id="notification-form-${id}" class="notification-form sinan-form">
          <!-- BUSCA DE PACIENTE -->
          <div class="form-group" style="margin-bottom: 25px; background: var(--primary-soft); padding: 18px; border-radius: 16px; border: 1px solid var(--border-color); position: relative; box-shadow: var(--shadow-card);">
            <label style="color: var(--primary); font-weight: 700; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.05em; display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
              <i class="fas fa-search"></i>
              Buscar Paciente Existente (CPF, CNS ou Nome):
            </label>
            <div style="display: flex; gap: 8px; position: relative;">
               <div style="flex: 1; position: relative;">
                 <input type="text" id="patient-search-id-${id}" placeholder="CPF, CNS ou Nome completo..." autocomplete="off"
                   style="width: 100%; padding: 12px 16px; border: 1.5px solid var(--border-color); border-radius: 10px; box-sizing: border-box; font-size: 0.95rem; background: white; outline: none; transition: border-color 0.2s;"
                   onfocus="this.style.borderColor='var(--primary)'" onblur="this.style.borderColor='var(--border-color)'">
                 <div id="patient-dropdown-${id}" class="patient-autocomplete-dropdown" style="display:none;"></div>
               </div>
               <button type="button" id="patient-search-btn-${id}" class="btn" style="height: 48px; width: 48px; min-width: 48px; padding: 0; background: var(--primary); color: white; border: none; border-radius: 10px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s; box-shadow: var(--shadow-cta);"
                 onmouseenter="this.style.background='var(--primary-hover)'; this.style.transform='translateY(-1px)'" onmouseleave="this.style.background='var(--primary)'; this.style.transform='translateY(0)'">
                 <i class="fas fa-search" style="font-size: 1.1rem;"></i>
               </button>
            </div>
            <p style="font-size: 0.8rem; color: var(--text-gray); margin-top: 6px; margin-bottom: 0; line-height: 1.4;">
                ${id === 'tracoma' ? 'Para Tracoma (Inquérito), selecione um Paciente de Referência ou digite o nome do Paciente Foco. Os demais casos serão adicionados na tabela abaixo.' : 'Se o paciente nao for encontrado, preencha os dados abaixo — ele sera cadastrado automaticamente ao gravar.'}
            </p>
          </div>

          <!-- BLOCO 1: DADOS GERAIS -->
          <div class="sinan-section">
             <div class="sinan-section-title"><i class="fas fa-file-alt"></i> Dados Gerais (Campos 1-7)</div>
             <div class="sinan-grid-4">
                 <div class="form-group">
                     <label>1 - Tipo de Notificação</label>
                     <select id="tipo-notificacao-${id}">
                         <option value="1" ${id === 'tracoma' ? 'disabled' : ''}>1-Negativa</option>
                         <option value="2" ${id === 'tracoma' ? 'disabled' : 'selected'}>2-Individual</option>
                         <option value="3" ${id === 'tracoma' ? 'disabled' : ''}>3-Surto</option>
                         <option value="4" ${id === 'tracoma' ? 'selected' : ''}>4-Inquerito Tracoma</option>
                     </select>
                 </div>
                 <div class="form-group span-2">
                     <label>2 - Agravo/Doença</label>
                     <input type="text" id="agravo-nome-${id}" value="${disease.name}" readonly style="background:#f0f0f0; font-weight:bold;">
                 </div>
                 <div class="form-group">
                     <label>3 - Data da Notificação</label>
                     <input type="date" id="data-notificacao-${id}" value="${new Date().toISOString().substring(0,10)}">
                 </div>
                 <div class="form-group">
                     <label>4 - UF</label>
                     <input type="text" id="uf-notificacao-${id}" value="PA" maxlength="2">
                 </div>
                 <div class="form-group span-3">
                     <label>5 - Município de Notificação</label>
                     <input type="text" id="mun-notificacao-${id}" value="MARABA">
                 </div>
                 <div class="form-group span-3">
                     <label>6 - Unidade de Saúde (ou Outra Fonte Notificadora)</label>
                     <select id="health-unit-${id}" required>
                          <option value="">- Selecione -</option>
                          <option value="ubs_jaime_pinto">UBS Jaime Pinto (CNES: 2614901)</option>
                          <option value="ubs_laranjeiras">UBS Laranjeiras (CNES: 2614774)</option>
                          <option value="ubs_liberdade">UBS Liberdade (Dr. Emerson Caselli) (CNES: 2614790)</option>
                          <option value="ubs_pedro_cavalcante">UBS Pedro Cavalcante (CNES: 2614931)</option>
                          <option value="ubs_jose_pereira">UBS José Pereira de Araújo (CNES: 0826359)</option>
                          <option value="crismu">CRISMU - Centro de Referência Integrado da Saúde da Mulher (CNES: 9006095)</option>
                          <option value="ubs_edivan_xavier">UBS Edivan Xavier dos Santos (CNES: 0270199)</option>
                          <option value="ubs_zezinha">UBS Enfermeira Zezinha (CNES: 2301907)</option>
                          <option value="ubs_hiroshi_matsuda">UBS Hiroshi Matsuda (CNES: 2301389)</option>
                          <option value="ubs_mariana_moraes">UBS Mariana Moraes (CNES: 2614804)</option>
                          <option value="ubs_demosthenes_azevedo">UBS Demósthenes Azevedo (CNES: 2614839)</option>
                          <option value="ubs_joao_batista">UBS João Batista Bezerra (CNES: 2614766)</option>
                          <option value="ubs_amadeu_vivacqua">UBS Amadeu Vivácqua (CNES: 2301958)</option>
                          <option value="ubs_maria_bico_doce">UBS Parteira Maria Bico Doce (CNES: 2614758)</option>
                          <option value="ubs_carlos_barreto">UBS Carlos Barreto (CNES: 2614855)</option>
                          <option value="posto_maria_bahia">Posto de Saúde Maria Bahia da Conceição (CNES: 2614723)</option>
                          <option value="ubs_elisa_chavito">UBS Elisa Monteiro Chavito (CNES: 2614715)</option>
                          <option value="posto_antonio_arruda">Posto de Saúde Antônio Arruda (CNES: 2614669)</option>
                          <option value="ubs_jhonatas_moraes">UBS Pastor Jhonatas Moraes Cavalcante (CNES: 9066403)</option>
                          <option value="posto_cristalandia">Posto de Saúde Cristalândia (CNES: 2614979)</option>
                          <option value="posto_carima">Posto de Saúde Carimã (CNES: 7711883)</option>
                          <option value="posto_jose_manoel">Posto de Saúde José Manoel da Anunciação (CNES: 2614707)</option>
                          <option value="hmm">Hospital Municipal de Marabá - HMM (CNES: 2301850)</option>
                          <option value="regional">Hospital Regional do Sudeste do Pará (CNES: 5249449)</option>
                          <option value="hmi">Hospital Materno Infantil - HMI (CNES: 2301893)</option>
                          <option value="outra">Outra / Rede Particular</option>
                     </select>
                 </div>
                 <div class="form-group">
                     <label>${id === 'tracoma' ? 'Data do Inquérito *' : '7 - Data dos Primeiros Sintomas *'}</label>
                     <input type="date" id="symptoms-date-${id}" required>
                 </div>
             </div>
          </div>

          <!-- BLOCO 2: NOTIFICACAO INDIVIDUAL -->
          <div class="sinan-section">
             <div class="sinan-section-title"><i class="fas fa-user"></i> Notificacao Individual / Referência (Campos 8-16)</div>
             <div class="sinan-grid-4">
                 <div class="form-group span-3">
                     <label>8 - Nome do Paciente *</label>
                     <input type="text" id="patient-name-${id}" placeholder="Nome completo" required>
                 </div>
                 <div class="form-group">
                     <label>9 - Data de Nascimento</label>
                     <input type="date" id="patient-birth-${id}">
                 </div>
                 <div class="form-group">
                     <label>10 - (ou) Idade</label>
                     <input type="number" id="patient-age-${id}" min="0" placeholder="Ex: 35">
                 </div>
                 <div class="form-group">
                     <label>11 - Sexo</label>
                     <select id="patient-sex-${id}">
                         <option value="M">M - Masculino</option>
                         <option value="F">F - Feminino</option>
                         <option value="I">I - Ignorado</option>
                     </select>
                 </div>
                 <div class="form-group span-2">
                     <label>12 - Gestante</label>
                     <select id="patient-pregnant-${id}">
                         <option value="1">1-1 Trimestre</option>
                         <option value="2">2-2 Trimestre</option>
                         <option value="3">3-3 Trimestre</option>
                         <option value="4">4-Idade Gest. Ignorada</option>
                         <option value="5" selected>5-Nao</option>
                         <option value="6">6-Nao se aplica</option>
                         <option value="9">9-Ignorado</option>
                     </select>
                 </div>
                 <div class="form-group">
                     <label>13 - Raça/Cor</label>
                     <select id="patient-race-${id}">
                         <option value="Branca">1-Branca</option>
                         <option value="Preta">2-Preta</option>
                         <option value="Amarela">3-Amarela</option>
                         <option value="Parda">4-Parda</option>
                         <option value="Indigena">5-Indigena</option>
                         <option value="Nao informada" selected>9-Ignorado</option>
                     </select>
                 </div>
                 <div class="form-group span-4">
                     <label>14 - Escolaridade</label>
                     <select id="patient-schooling-${id}">
                          <option value="Analfabeto">0-Analfabeto</option>
                          <option value="Ensino Fundamental 1a a 4a serie Incompleta">1-1ª a 4ª série incompleta do EF (antigo primário ou 1º grau)</option>
                          <option value="Ensino Fundamental 4a serie Completa">2-4ª série completa do EF (antigo primário ou 1º grau)</option>
                          <option value="Ensino Fundamental 5a a 8a serie Incompleta">3-5ª à 8ª série incompleta do EF (antigo ginásio ou 1º grau)</option>
                          <option value="Ensino Fundamental Completo">4-Ensino fundamental completo (antigo ginásio ou 1º grau)</option>
                          <option value="Ensino Medio Incompleto">5-Ensino médio incompleto (antigo colegial ou 2º grau)</option>
                          <option value="Ensino Medio Completo">6-Ensino médio completo (antigo colegial ou 2º grau)</option>
                          <option value="Ensino Superior Incompleto">7-Educação superior incompleta</option>
                          <option value="Ensino Superior Completo">8-Educação superior completa</option>
                          <option value="Nao informada" selected>9-Ignorado</option>
                          <option value="Nao se aplica">10-Não se aplica</option>
                      </select>
                 </div>
                 <div class="form-group span-2">
                     <label>15 - Número do Cartão SUS</label>
                     <input type="text" id="patient-sus-${id}" placeholder="000 0000 0000 0000" maxlength="18">
                 </div>
                 <div class="form-group span-2">
                     <label>16 - Nome da Mãe</label>
                     <input type="text" id="patient-mother-${id}" placeholder="Nome completo da mae">
                 </div>
                 <div class="form-group span-2">
                     <label>CPF (para cadastro de novo paciente)</label>
                     <input type="text" id="patient-cpf-${id}" placeholder="000.000.000-00" maxlength="14">
                 </div>
                 <div class="form-group span-2">
                     <label>Ocupacao</label>
                     <input type="text" id="occupation-${id}" placeholder="Ex: Agricultor, Estudante...">
                 </div>
             </div>
          </div>

          <!-- BLOCO 3: NOTIFICACAO DE SURTO -->
          <div class="sinan-section" style="${id === 'tracoma' ? 'display:none;' : ''}">
             <div class="sinan-section-title"><i class="fas fa-users"></i> Notificacao de Surto (Campos 17-19)</div>
             <div class="sinan-grid-4">
                 <div class="form-group span-2">
                     <label>17 - Data dos 1ºs Sintomas do 1º Caso Suspeito</label>
                     <input type="date" id="surto-casos-data-${id}">
                 </div>
                 <div class="form-group">
                     <label>18 - Nº de Casos Suspeitos/Expostos</label>
                     <input type="number" id="surto-casos-num-${id}" min="0" placeholder="0">
                 </div>
                 <div class="form-group span-4">
                     <label>19 - Local Inicial de Ocorrência do Surto</label>
                     <select id="surto-local-${id}">
                         <option value="">- Selecione -</option>
                         <option value="1">1-Residencia</option>
                         <option value="2">2-Hospital</option>
                         <option value="3">3-Creche/Escola</option>
                         <option value="4">4-Asilo</option>
                         <option value="5">5-Trabalho</option>
                         <option value="6">6-Restaurante/Padaria</option>
                         <option value="7">7-Eventos</option>
                         <option value="8">8-Casos Dispersos no Bairro</option>
                         <option value="9">9-Casos Dispersos pelo Municipio</option>
                         <option value="10">10-Casos Dispersos em mais de um Municipio</option>
                         <option value="11">11-Outros</option>
                     </select>
                 </div>
             </div>
          </div>

          <!-- BLOCO 4: DADOS DE RESIDENCIA -->
          <div class="sinan-section">
             <div class="sinan-section-title"><i class="fas fa-home"></i> Dados de Residencia (Campos 20-33)</div>
             <div class="sinan-grid-4">
                 <div class="form-group" style="max-width:80px;">
                     <label>20 - UF</label>
                     <input type="text" id="patient-uf-res-${id}" value="PA" maxlength="2">
                 </div>
                 <div class="form-group span-2">
                     <label>21 - Município de Residência</label>
                     <input type="text" id="patient-mun-res-${id}" value="MARABA">
                 </div>
                 <div class="form-group">
                     <label>22 - Distrito</label>
                     <input type="text" id="patient-distrito-${id}" placeholder="Distrito">
                 </div>
                 <div class="form-group span-2">
                     <label>23 - Bairro *</label>
                     <input type="text" id="patient-location-${id}" required placeholder="Nome do bairro">
                 </div>
                 <div class="form-group span-2">
                     <label>24 - Logradouro (Rua, Avenida...)</label>
                     <input type="text" id="patient-street-${id}" placeholder="Ex: Rua das Flores">
                 </div>
                 <div class="form-group">
                     <label>25 - Número</label>
                     <input type="text" id="patient-number-${id}" placeholder="No ou S/N">
                 </div>
                 <div class="form-group span-2">
                     <label>26 - Complemento (Apto., Casa...)</label>
                     <input type="text" id="patient-comp-${id}" placeholder="Apto, Bloco...">
                 </div>
                 <div class="form-group">
                     <label>27 - Geo Campo 1</label>
                     <input type="text" id="patient-geo1-${id}">
                 </div>
                 <div class="form-group">
                     <label>28 - Geo Campo 2</label>
                     <input type="text" id="patient-geo2-${id}">
                 </div>
                 <div class="form-group span-2">
                     <label>29 - Ponto de Referência</label>
                     <input type="text" id="patient-ref-${id}" placeholder="Proximo a praca...">
                 </div>
                 <div class="form-group">
                     <label>30 - CEP</label>
                     <div style="display: flex; gap: 8px;">
                       <input type="text" id="patient-cep-${id}" placeholder="00000-000" maxlength="9" style="flex: 1;"
                         onblur="if(typeof fetchCepForLocation === 'function') fetchCepForLocation('${id}')">
                       <button type="button" class="btn" onclick="if(typeof fetchCepForLocation === 'function') fetchCepForLocation('${id}')" title="Buscar CEP"
                         style="height: 48px; width: 48px; min-width: 48px; padding: 0; background: var(--primary-soft); color: var(--primary); border: 1.5px solid var(--border-color); border-radius: 10px; cursor: pointer; display: flex; align-items: center; justify-content: center;">
                         <i class="fas fa-search"></i>
                       </button>
                     </div>
                 </div>
                 <div class="form-group span-2">
                     <label>31 - (DDD) Telefone</label>
                     <input type="text" id="patient-phone-${id}" placeholder="(94) 99999-9999">
                 </div>
                 <div class="form-group">
                     <label>32 - Zona</label>
                     <select id="patient-zone-${id}">
                         <option value="Urbana">1-Urbana</option>
                         <option value="Rural">2-Rural</option>
                         <option value="Periurbana">3-Periurbana</option>
                         <option value="Ignorado">9-Ignorado</option>
                     </select>
                 </div>
                 <div class="form-group">
                     <label>33 - País (se residir fora do Brasil)</label>
                     <input type="text" id="patient-country-${id}" placeholder="Ex: Argentina">
                 </div>
             </div>
          </div>

          ${block7Html}

          <!-- HIPOTESE DIAGNOSTICA / OBSERVACOES -->
          <div class="sinan-section">
             <div class="sinan-section-title"><i class="fas fa-diagnoses"></i> Hipotese Diagnostica / Observacoes</div>
             <div class="sinan-grid-4">
                 <div class="form-group span-4">
                     <label>Hipotese Diagnostica (CID-10)</label>
                     <input type="text" id="hipotese-${id}" value="${disease.name}" readonly style="background:#f0f0f0; font-weight:bold;">
                 </div>
                 <div class="form-group span-4">
                     <label>Observacoes / Notas Adicionais</label>
                     <textarea id="patient-obs-${id}" rows="3" placeholder="Informacoes adicionais, contexto epidemiologico..." style="width:100%; padding:10px; border:1.5px solid var(--border-color); border-radius:8px; font-size:0.9rem; resize:vertical; box-sizing:border-box;"></textarea>
                 </div>
             </div>
          </div>

          <input type="hidden" id="main-symptoms-${id}" value=""> <!-- For compatibility -->

          <button type="submit" class="btn-notify sinan-submit" style="margin-top: 25px;">
            <i class="fas fa-paper-plane"></i>
            Gravar Notificacao Completa
          </button>
        </form>
      `;

            formCard.appendChild(formDiv);
    });

    // Setup forms after generation
    this.setupForms();
  },

  setupForms() {
    Object.keys(this.diseases).forEach(disease => {
      const form = document.getElementById(`notification-form-${disease}`);
      if (form) {
        const newForm = form.cloneNode(true);
        form.parentNode.replaceChild(newForm, form);
        newForm.addEventListener('submit', (e) => {
          e.preventDefault();
          this.handleFormSubmit(disease, newForm);
        });

        // Custom listeners for disease-specific forms
        if (disease === 'tracoma') {
          const addBtn = newForm.querySelector(`#btn-add-tracoma-case-${disease}`);
          if (addBtn) {
            addBtn.addEventListener('click', () => {
              window.addTracomaCaseRow(`tracoma-cases-table-${disease}`);
            });
          }
          // Initialize table with one empty row
          window.addTracomaCaseRow(`tracoma-cases-table-${disease}`);
        }
      }
    });

    // Event delegation no container pai — não depende de cloneNode
    this._setupAutocompleteListeners();
  },

  _setupAutocompleteListeners() {
    const container = document.querySelector('.notification-form-card');
    if (!container) return;

    // Abort previous listeners cleanly before re-adding
    if (container._autocompleteAbort) {
      container._autocompleteAbort.abort();
    }
    const ctrl = new AbortController();
    container._autocompleteAbort = ctrl;
    const sig = ctrl.signal;

    let debounceTimer;

    container.addEventListener('input', (e) => {
      const input = e.target;
      if (!input.id || !input.id.startsWith('patient-search-id-')) return;
      const diseaseId = input.id.replace('patient-search-id-', '');
      const dropdown  = document.getElementById(`patient-dropdown-${diseaseId}`);
      if (!dropdown) return;
      clearTimeout(debounceTimer);
      const term = input.value.trim();
      if (term.length < 2) { dropdown.style.display = 'none'; return; }
      debounceTimer = setTimeout(() => this._renderDropdown(term, diseaseId, input, dropdown), 200);
    }, { signal: sig });

    container.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter') return;
      const input = e.target;
      if (!input.id || !input.id.startsWith('patient-search-id-')) return;
      e.preventDefault();
      window.autocompletePatient(input.id.replace('patient-search-id-', ''));
    }, { signal: sig });

    container.addEventListener('click', (e) => {
      const btn = e.target.closest('button[id^="patient-search-btn-"]');
      if (!btn) return;
      window.autocompletePatient(btn.id.replace('patient-search-btn-', ''));
    }, { signal: sig });

    container.addEventListener('mousedown', async (e) => {
      const item = e.target.closest('.autocomplete-item');
      if (!item) return;
      e.preventDefault();
      const dropdown = item.closest('[id^="patient-dropdown-"]');
      if (!dropdown) return;
      const diseaseId = dropdown.id.replace('patient-dropdown-', '');
      const searchInput = document.getElementById(`patient-search-id-${diseaseId}`);
      if (!searchInput) return;

      try {
        let p;
        if (item.dataset.local === 'true') {
          const localFull = PatientModule.mockDB.find(m => String(m.id) === String(item.dataset.id));
          if (localFull) {
            p = {
              id: localFull.id,
              name: localFull.name,
              cpf: localFull.cpf || '-',
              cns: localFull.cns || '-',
              birthDate: localFull.birthDate || null,
              motherName: localFull.motherName || '-',
              sex: localFull.sex === 'Feminino' ? 'F' : (localFull.sex === 'Masculino' ? 'M' : 'I'),
              race: localFull.race || '-',
              education: localFull.education || '-',
              zone: localFull.zone || '-',
              address: localFull.address || '-',
              neighborhood: localFull.neighborhood || '-',
              municipality: localFull.municipality || 'MARABÁ',
              uf: localFull.uf || 'PA',
              phone: localFull.phone || '-',
            };
          }
        } else {
          if (typeof EpiAPI === 'undefined') return;
          p = await EpiAPI.getPatient(item.dataset.id);
        }

        if (p) {
          searchInput.value = p.name;
          searchInput.style.background = '#e8f5e9';
          searchInput.style.borderColor = '#4caf50';
          dropdown.style.display = 'none';
          
          // Pre-fill patient's age in years for the fill function
          let calculatedAge = '-';
          if (p.birthDate) {
            let birth;
            if (typeof p.birthDate === 'string' && p.birthDate.includes('/')) {
              const parts = p.birthDate.split('/');
              birth = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
            } else {
              birth = new Date(p.birthDate);
            }
            if (!isNaN(birth)) {
              const diff = Date.now() - birth.getTime();
              const ageDate = new Date(diff);
              calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
            }
          }
          p.age = calculatedAge;

          window._fillPatientForm(p, diseaseId);
        }
      } catch (err) {
        if (window.App) App.showToast('Erro ao carregar dados do paciente.', 'error');
      }
    }, { signal: sig });

    document.addEventListener('click', (e) => {
      document.querySelectorAll('[id^="patient-dropdown-"]').forEach(dd => {
        if (!dd.contains(e.target) && !e.target.closest('[id^="patient-search-id-"]')) {
          dd.style.display = 'none';
        }
      });
    }, { signal: sig });
  },

  async _renderDropdown(term, diseaseId, input, dropdown) {
    try {
      let results = [];
      let isLocal = false;

      if (typeof EpiAPI !== 'undefined' && EpiAPI.isLoggedIn()) {
        try {
          results = await EpiAPI.searchPatients(term);
        } catch (err) {
          console.warn('[CaseNotificationModule] Falha na busca da API, usando fallback local:', err.message);
        }
      }

      if (results.length === 0) {
        // Fallback local
        const q = term.toLowerCase();
        const localResults = PatientModule.mockDB.filter(p => {
          const name = p.name ? p.name.toLowerCase() : '';
          const cpf  = p.cpf  ? p.cpf.replace(/[\.\-]/g, '') : '';
          const cns  = p.cns  ? p.cns.replace(/\s/g, '') : '';
          const qClean = q.replace(/[\.\-\s]/g, '');
          return name.includes(q) || cpf.includes(qClean) || cns.includes(qClean);
        });
        results = localResults.map(p => ({
          id: p.id,
          name: p.name,
          cns: p.cns || '-',
          birthDate: p.birthDate || null,
          sex: p.sex === 'Feminino' ? 'F' : (p.sex === 'Masculino' ? 'M' : 'I'),
          _local: true
        }));
        isLocal = true;
      }

      let html = '';
      if (results.length === 0) {
        html += `
          <div style="padding:10px 16px;color:#888;font-size:0.88rem;border-bottom:1px solid #f0f0f0;">
            <i class="fas fa-info-circle"></i> Nenhum paciente encontrado para "<strong>${term.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</strong>"
          </div>`;
      } else {
        html += results.map(p => {
          let ageText = '';
          if (p.birthDate) {
            let birth;
            if (typeof p.birthDate === 'string' && p.birthDate.includes('/')) {
              const parts = p.birthDate.split('/');
              birth = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
            } else {
              birth = new Date(p.birthDate);
            }
            if (!isNaN(birth)) {
              const diff = Date.now() - birth.getTime();
              const ageDate = new Date(diff);
              ageText = Math.abs(ageDate.getUTCFullYear() - 1970) + ' anos';
            }
          }
          const sexText = p.sex === 'M' ? 'M' : (p.sex === 'F' ? 'F' : 'I');
          const photo = `https://ui-avatars.com/api/?name=${encodeURIComponent(p.name)}&background=e0f2f1&color=00796b&bold=true`;

          return `
            <div class="autocomplete-item" data-id="${p.id}" data-local="${p._local ? 'true' : 'false'}">
              <img src="${photo}" alt="">
              <div>
                <div class="name">${p.name}</div>
                <div class="details">CNS: ${p.cns} ${ageText ? '&bull; ' + ageText : ''} &bull; ${sexText} ${p._local ? '<span style="color:#00796b; font-weight:bold;">(Local)</span>' : ''}</div>
              </div>
            </div>`;
        }).join('');
      }

      // Add "register new patient" button in both cases
      html += `
        <div class="autocomplete-new-patient">
          <i class="fas fa-user-plus"></i>
          <div>
            <div class="title">+ Cadastrar como novo paciente com este nome</div>
            <div class="subtitle">Preencha os dados abaixo e clique em Gravar</div>
          </div>
        </div>`;

      dropdown.innerHTML = html;
      dropdown.style.display = 'block';

      // Attach listener for the new patient option
      const newPatientBtn = dropdown.querySelector('.autocomplete-new-patient');
      if (newPatientBtn) {
        const thisTerm = term;
        newPatientBtn.addEventListener('mousedown', (ev) => {
          ev.preventDefault();
          const form = document.getElementById(`notification-form-${diseaseId}`);
          const nameInput = document.getElementById(`patient-name-${diseaseId}`);
          if (form) {
            form.dataset.newPatient = 'true';
            delete form.dataset.selectedPatientId;
          }
          if (nameInput) nameInput.value = thisTerm;
          input.value = thisTerm;
          input.style.background = '#fff8e1';
          input.style.borderColor = '#ff8f00';
          dropdown.style.display = 'none';
          if (typeof App !== 'undefined' && App.showToast) {
            App.showToast('Preencha os dados do paciente abaixo e clique em Gravar para cadastrar.', 'info');
          }
        });
        newPatientBtn.addEventListener('mouseenter', () => newPatientBtn.style.background = '#c8e6c9');
        newPatientBtn.addEventListener('mouseleave', () => newPatientBtn.style.background = '#e8f5e9');
      }

      dropdown.querySelectorAll('.autocomplete-item').forEach(item => {
        item.addEventListener('mouseenter', () => item.style.background = '#f0f7ff');
        item.addEventListener('mouseleave', () => item.style.background = '');
      });

    } catch (err) {
      console.error('[EpiConecta] Erro ao renderizar dropdown:', err.message);
    }
  },

  async handleFormSubmit(disease, form) {
    let patientId = form.dataset.selectedPatientId;
    const isEditing = !!form.dataset.editNotificationId;
    const isNewPatient = form.dataset.newPatient === 'true';

    const patientNameEl = document.getElementById(`patient-name-${disease}`);
    const patientAgeEl = document.getElementById(`patient-age-${disease}`);
    const locationEl = document.getElementById(`patient-location-${disease}`);
    const healthUnitEl = document.getElementById(`health-unit-${disease}`);
    const symptomsDateEl = document.getElementById(`symptoms-date-${disease}`);

    const getVal = (id) => { const el = document.getElementById(id); return el ? el.value : ''; };
    const getSelectedText = (selectId) => { const el = document.getElementById(selectId); return el ? (el.options[el.selectedIndex] ? el.options[el.selectedIndex].text : '') : ''; };

    // Validate: patient must be identified
    if (!patientId && !isEditing && !isNewPatient) {
      const patientName = patientNameEl ? patientNameEl.value.trim() : '';
      if (!patientName) {
        App.showToast('Por favor, busque um paciente ou preencha o nome para cadastrar um novo.', 'error');
        return;
      }
    }

    // Pegar sintomas marcados nos checkboxes
    const checkedSymptoms = Array.from(form.querySelectorAll('.sinan-checkbox-grid input[type="checkbox"]:checked'))
                                 .map(cb => cb.parentNode.textContent.trim());

    const observationsEl = document.getElementById(`patient-obs-${disease}`);

    const cases = [];
    if (disease === 'tracoma') {
      const rows = form.querySelectorAll(`#tracoma-cases-table-${disease} tbody tr`);
      rows.forEach(row => {
        const fcChecked = Array.from(row.querySelectorAll('.t-fc:checked')).map(cb => cb.value);
        cases.push({
          inicial: row.querySelector('.t-inicial')?.value || '',
          uf: row.querySelector('.t-uf')?.value || 'PA',
          mun: row.querySelector('.t-mun')?.value || 'MARABA',
          dist: row.querySelector('.t-dist')?.value || '',
          bairro: row.querySelector('.t-bairro')?.value || '',
          zona: row.querySelector('.t-zona')?.value || '9',
          sexo: row.querySelector('.t-sexo')?.value || '9',
          idade: row.querySelector('.t-idade')?.value || '',
          fc: fcChecked,
          cirurg: row.querySelector('.t-cirurg')?.value || '9',
        });
      });
    }

    let clinicalSignsObj = {
      diabetes:          '9',
      hepatopatias:      '9',
      hipertensao:       '9',
      hematologicas:     '9',
      renal:             '9',
      autoimunes:        '9',
      occupation:        getVal(`occupation-${disease}`) || '',
      pregnant:          getVal(`patient-pregnant-${disease}`) || '9',
      obito:             getVal(`comp-obito-${disease}`) || '9',
      contato:           getVal(`comp-contato-${disease}`) || '9',
      exantema:          getVal(`comp-exantema-${disease}`) || '9',
      petequias:         getVal(`comp-petequias-${disease}`) || '9',
      liquor:            getVal(`comp-liquor-${disease}`) || '9',
      vacina:            getVal(`comp-vacina-${disease}`) || '9',
      hospitalizacao:    getVal(`comp-hospitalizacao-${disease}`) || '9',
      hospitalName:      getVal(`comp-hospital-nome-${disease}`) || '',
      hospitalUf:        getVal(`comp-hospital-uf-${disease}`) || '',
      hospitalMun:       getVal(`comp-hospital-mun-${disease}`) || '',
      exantemaDate:      getVal(`comp-exantema-date-${disease}`) || '',
      vacinaDate:        getVal(`comp-vacina-date-${disease}`) || '',
      hospitalizacaoDate:getVal(`comp-hosp-date-${disease}`) || '',
    };

    if (disease === 'dengue' || disease === 'chikungunya') {
      clinicalSignsObj = {
        dataInvestigacao:      getVal(`dengue-data-investigacao-${disease}`),
        occupation:            getVal(`dengue-ocupacao-${disease}`),
        sinaisClinicos: {
          febre:               getVal(`dengue-sint-febre-${disease}`),
          mialgia:             getVal(`dengue-sint-mialgia-${disease}`),
          cefaleia:            getVal(`dengue-sint-cefaleia-${disease}`),
          exantema:            getVal(`dengue-sint-exantema-${disease}`),
          vomito:              getVal(`dengue-sint-vomito-${disease}`),
          nauseas:             getVal(`dengue-sint-nauseas-${disease}`),
          costas:              getVal(`dengue-sint-costas-${disease}`),
          conjuntivite:        getVal(`dengue-sint-conjuntivite-${disease}`),
          artrite:             getVal(`dengue-sint-artrite-${disease}`),
          artralgia:           getVal(`dengue-sint-artralgia-${disease}`),
          petequias:           getVal(`dengue-sint-petequias-${disease}`),
          leucopenia:          getVal(`dengue-sint-leucopenia-${disease}`),
          laco:                getVal(`dengue-sint-laco-${disease}`),
          retroorbital:        getVal(`dengue-sint-retroorbital-${disease}`),
        },
        comorbidades: {
          diabetes:            getVal(`dengue-comorb-diabetes-${disease}`),
          hepatopatias:        getVal(`dengue-comorb-hepatopatias-${disease}`),
          hipertensao:         getVal(`dengue-comorb-hipertensao-${disease}`),
          autoimunes:          getVal(`dengue-comorb-autoimunes-${disease}`),
          hematologicas:       getVal(`dengue-comorb-hematologicas-${disease}`),
          renal:               getVal(`dengue-comorb-renal-${disease}`),
          peptica:             getVal(`dengue-comorb-peptica-${disease}`),
        },
        lab: {
          chikS1Date:          getVal(`chik-s1-date-${disease}`),
          chikS1Res:           getVal(`chik-s1-res-${disease}`),
          chikS2Date:          getVal(`chik-s2-date-${disease}`),
          chikS2Res:           getVal(`chik-s2-res-${disease}`),
          chikPrntDate:        getVal(`chik-prnt-date-${disease}`),
          chikPrntRes:         getVal(`chik-prnt-res-${disease}`),
          dengueIgmDate:       getVal(`dengue-igm-date-${disease}`),
          dengueIgmRes:        getVal(`dengue-igm-res-${disease}`),
          ns1Date:             getVal(`dengue-ns1-date-${disease}`),
          ns1Res:              getVal(`dengue-ns1-res-${disease}`),
          isolamentoDate:      getVal(`dengue-isolamento-date-${disease}`),
          isolamentoRes:       getVal(`dengue-isolamento-res-${disease}`),
          pcrDate:             getVal(`dengue-pcr-date-${disease}`),
          pcrRes:              getVal(`dengue-pcr-res-${disease}`),
          sorotipo:            getVal(`dengue-sorotipo-${disease}`),
          histoDate:           getVal(`dengue-histo-date-${disease}`),
          histoRes:            getVal(`dengue-histo-res-${disease}`),
          imunoDate:           getVal(`dengue-imuno-date-${disease}`),
          imunoRes:            getVal(`dengue-imuno-res-${disease}`),
        },
        hospitalizacao: {
          ocorreu:             getVal(`dengue-hospitalizacao-${disease}`),
          dataInternacao:      getVal(`dengue-data-internacao-${disease}`),
          uf:                  getVal(`dengue-hospital-uf-${disease}`),
          mun:                 getVal(`dengue-hospital-mun-${disease}`),
          nome:                getVal(`dengue-hospital-nome-${disease}`),
          fone:                getVal(`dengue-hospital-fone-${disease}`),
        },
        localInfeccao: {
          autoctone:           getVal(`dengue-autoctone-${disease}`),
          uf:                  getVal(`dengue-uf-infeccao-${disease}`),
          pais:                getVal(`dengue-pais-infeccao-${disease}`),
          mun:                 getVal(`dengue-mun-infeccao-${disease}`),
          dist:                getVal(`dengue-dist-infeccao-${disease}`),
          bairro:              getVal(`dengue-bairro-infeccao-${disease}`),
        },
        conclusao: {
          classificacao:       getVal(`dengue-classificacao-${disease}`),
          criterio:            getVal(`dengue-criterio-${disease}`),
          apresentacaoChik:    getVal(`dengue-apresentacao-chik-${disease}`),
          evolucao:            getVal(`dengue-evolucao-${disease}`),
          dataObito:           getVal(`dengue-data-obito-${disease}`),
          dataEncerramento:    getVal(`dengue-data-encerramento-${disease}`),
        },
        sinaisAlarme: {
          dataInicio:          getVal(`dengue-sinais-alarme-date-${disease}`),
          vomitos:             getVal(`dengue-alarme-vomitos-${disease}`),
          dorAbdominal:        getVal(`dengue-alarme-dor-abdo-${disease}`),
          letargia:            getVal(`dengue-alarme-letargia-${disease}`),
          sangramento:         getVal(`dengue-alarme-sangramento-${disease}`),
          hematocrito:         getVal(`dengue-alarme-hematocrito-${disease}`),
          hepatomegalia:       getVal(`dengue-alarme-hepatomegalia-${disease}`),
          acumuloLiq:          getVal(`dengue-alarme-acumulo-liq-${disease}`),
          hipotensao:          getVal(`dengue-alarme-hipotensao-${disease}`),
          plaquetas:           getVal(`dengue-alarme-plaquetas-${disease}`),
        },
        dengueGrave: {
          dataInicio:          getVal(`dengue-sinais-grave-date-${disease}`),
          pulso:               getVal(`dengue-grave-pulso-${disease}`),
          pa:                  getVal(`dengue-grave-pa-${disease}`),
          capilar:             getVal(`dengue-grave-capilar-${disease}`),
          acumuloResp:         getVal(`dengue-grave-acumulo-resp-${disease}`),
          taquicardia:         getVal(`dengue-grave-taquicardia-${disease}`),
          extremidades:        getVal(`dengue-grave-extremidades-${disease}`),
          hipotensaoTardia:    getVal(`dengue-grave-hipotensao-tardia-${disease}`),
          hematemese:          getVal(`dengue-grave-hematemese-${disease}`),
          melena:              getVal(`dengue-grave-melena-${disease}`),
          metrorragia:         getVal(`dengue-grave-metrorragia-${disease}`),
          snc:                 getVal(`dengue-grave-snc-${disease}`),
          astAlt:              getVal(`dengue-grave-ast-alt-${disease}`),
          miocardite:          getVal(`dengue-grave-miocardite-${disease}`),
          consciencia:         getVal(`dengue-grave-consciencia-${disease}`),
          outrosOrgaos:        getVal(`dengue-grave-outros-orgaos-${disease}`),
        },
        investigador: {
          unidade:             getVal(`dengue-inv-unidade-${disease}`),
          nome:                getVal(`dengue-inv-nome-${disease}`),
          funcao:              getVal(`dengue-inv-funcao-${disease}`),
        },
        obs:                   getVal(`dengue-obs-${disease}`),
      };
    } else if (disease === 'tracoma') {
      clinicalSignsObj = {
        inquerito:          getVal(`tracoma-inquerito-${disease}`) || '1',
        pessoasExaminadas:  getVal(`tracoma-examinadas-${disease}`) || '0',
        casosPositivos:     getVal(`tracoma-positivos-${disease}`) || '0',
        cases:              cases,
      };
    } else if (disease === 'hanseniase') {
      clinicalSignsObj = {
        prontuario:         getVal(`hanseniase-prontuario-${disease}`),
        occupation:         getVal(`hanseniase-ocupacao-${disease}`),
        lesoesCutaneas:     getVal(`hanseniase-lesoes-${disease}`),
        formaClinica:       getVal(`hanseniase-forma-${disease}`),
        classOperacional:   getVal(`hanseniase-class-oper-${disease}`),
        nervosAfetados:     getVal(`hanseniase-nervos-${disease}`),
        incapacidadeFisica: getVal(`hanseniase-incapacidade-${disease}`),
        modoEntrada:        getVal(`hanseniase-modo-entrada-${disease}`),
        modoDeteccao:       getVal(`hanseniase-modo-deteccao-${disease}`),
        baciloscopia:       getVal(`hanseniase-baciloscopia-${disease}`),
        dataInicioTratamento: getVal(`hanseniase-inicio-tratamento-${disease}`),
        esquemaTerapeutico: getVal(`hanseniase-esquema-${disease}`),
        contatosRegistrados:getVal(`hanseniase-contatos-${disease}`),
      };
    } else if (disease === 'esquistossomose') {
      clinicalSignsObj = {
        dataInvestigacao:   getVal(`esquisto-data-investigacao-${disease}`),
        occupation:         getVal(`esquisto-ocupacao-${disease}`),
        dataCoproscopia:    getVal(`esquisto-data-copro-${disease}`),
        analiseQuant:       getVal(`esquisto-analise-quant-${disease}`),
        analiseQual:        getVal(`esquisto-analise-qual-${disease}`),
        outrosQual:         getVal(`esquisto-outros-qual-${disease}`),
        outrosEspecificar:  getVal(`esquisto-outros-especificar-${disease}`),
        fezTratamento:      getVal(`esquisto-fez-tratamento-${disease}`),
        dataTratamento:     getVal(`esquisto-data-tratamento-${disease}`),
        motivoNaoTratamento: getVal(`esquisto-motivo-nao-tratamento-${disease}`),
        cura1Amostra:       getVal(`esquisto-cura-1amostra-${disease}`),
        cura2Amostra:       getVal(`esquisto-cura-2amostra-${disease}`),
        cura3Amostra:       getVal(`esquisto-cura-3amostra-${disease}`),
        curaData3Amostra:   getVal(`esquisto-cura-data-3amostra-${disease}`),
        formaClinica:       getVal(`esquisto-forma-clinica-${disease}`),
        autoctone:          getVal(`esquisto-autoctone-${disease}`),
        infeccaoUf:         getVal(`esquisto-infeccao-uf-${disease}`),
        infeccaoPais:       getVal(`esquisto-infeccao-pais-${disease}`),
        infeccaoMun:        getVal(`esquisto-infeccao-mun-${disease}`),
        infeccaoDist:       getVal(`esquisto-infeccao-dist-${disease}`),
        infeccaoBairro:     getVal(`esquisto-infeccao-bairro-${disease}`),
        infeccaoPropriedade:getVal(`esquisto-infeccao-propriedade-${disease}`),
        infeccaoHidrica:    getVal(`esquisto-infeccao-hidrica-${disease}`),
        trabalho:           getVal(`esquisto-trabalho-${disease}`),
        evolucao:           getVal(`esquisto-evolucao-${disease}`),
        dataObito:          getVal(`esquisto-data-obito-${disease}`),
        dataEncerramento:   getVal(`esquisto-data-encerramento-${disease}`),
      };
    } else if (disease === 'malaria') {
      clinicalSignsObj = {
        dataInvestigacao:   getVal(`malaria-data-investigacao-${disease}`),
        occupation:         getVal(`malaria-ocupacao-${disease}`),
        atividade:          getVal(`malaria-atividade-${disease}`),
        tipoLamina:         getVal(`malaria-tipo-lamina-${disease}`),
        sintomas:           getVal(`malaria-sintomas-${disease}`),
        dataExame:          getVal(`malaria-data-exame-${disease}`),
        resultadoExame:     getVal(`malaria-resultado-exame-${disease}`),
        parasitos:          getVal(`malaria-parasitos-${disease}`),
        parasitemiaCruzes:  getVal(`malaria-parasitemia-cruzes-${disease}`),
        esquemaTratamento:  getVal(`malaria-esquema-tratamento-${disease}`),
        dataInicioTrat:     getVal(`malaria-data-inicio-trat-${disease}`),
        classificacaoFinal: getVal(`malaria-classificacao-final-${disease}`),
        autoctone:          getVal(`malaria-autoctone-${disease}`),
        ufInfeccao:         getVal(`malaria-uf-infeccao-${disease}`),
        paisInfeccao:       getVal(`malaria-pais-infeccao-${disease}`),
        municipioInfeccao:  getVal(`malaria-municipio-infeccao-${disease}`),
        ibgeInfeccao:       getVal(`malaria-ibge-infeccao-${disease}`),
        distritoInfeccao:   getVal(`malaria-distrito-infeccao-${disease}`),
        bairroInfeccao:     getVal(`malaria-bairro-infeccao-${disease}`),
        localidadeInfeccao: getVal(`malaria-localidade-infeccao-${disease}`),
        dataEncerramento:   getVal(`malaria-data-encerramento-${disease}`),
        obs:                getVal(`malaria-obs-${disease}`),
        examinador:         getVal(`malaria-examinador-${disease}`),
      };
    } else if (disease === 'raiva') {
      clinicalSignsObj = {
        dataInvestigacao:   getVal(`raiva-data-investigacao-${disease}`),
        occupation:         getVal(`raiva-ocupacao-${disease}`),
        tipoExposicao:      getVal(`raiva-tipo-exposicao-${disease}`),
        localizacaoPicada:  getVal(`raiva-localizacao-${disease}`),
        ferimento:          getVal(`raiva-ferimento-${disease}`),
        tipoFerimento:      getVal(`raiva-tipo-ferimento-${disease}`),
        dataExposicao:      getVal(`raiva-data-exposicao-${disease}`),
        antecedentesTrat:   getVal(`raiva-antecedentes-trat-${disease}`),
        dosesAplicadas:     getVal(`raiva-doses-aplicadas-${disease}`),
        dataUltimaDose:     getVal(`raiva-data-ultima-dose-${disease}`),
        especieAnimal:      getVal(`raiva-especie-animal-${disease}`),
        animalVacinado:     getVal(`raiva-animal-vacinado-${disease}`),
        hospitalizacao:     getVal(`raiva-hospitalizacao-${disease}`),
        dataInternacao:     getVal(`raiva-data-internacao-${disease}`),
        hospitalUf:         getVal(`raiva-hospital-uf-${disease}`),
        hospitalMun:        getVal(`raiva-hospital-mun-${disease}`),
        hospitalNome:       getVal(`raiva-hospital-nome-${disease}`),
        sintomas:           getVal(`raiva-sintomas-${disease}`),
        vacinaAtual:        getVal(`raiva-vacina-atual-${disease}`),
        inicioTratamento:   getVal(`raiva-inicio-tratamento-${disease}`),
        vacinaDoses:        getVal(`raiva-vacina-doses-${disease}`),
        data1Dose:          getVal(`raiva-data-1dose-${disease}`),
        dataUltDose:        getVal(`raiva-data-ultdose-${disease}`),
        soroAplicado:       getVal(`raiva-soro-aplicado-${disease}`),
        dataSoro:           getVal(`raiva-data-soro-${disease}`),
        qtdSoro:            getVal(`raiva-qtd-soro-${disease}`),
        infiltracaoSoro:    getVal(`raiva-infiltracao-soro-${disease}`),
        diagLaboratorial:   getVal(`raiva-diag-laboratorial-${disease}`),
        variante:           getVal(`raiva-variante-${disease}`),
        classificacao:      getVal(`raiva-classificacao-${disease}`),
        criterio:           getVal(`raiva-criterio-${disease}`),
        autoctone:          getVal(`raiva-autoctone-${disease}`),
        ufInfeccao:         getVal(`raiva-uf-infeccao-${disease}`),
        paisInfeccao:       getVal(`raiva-pais-infeccao-${disease}`),
        municipioInfeccao:  getVal(`raiva-municipio-infeccao-${disease}`),
        ibgeInfeccao:       getVal(`raiva-ibge-infeccao-${disease}`),
        distritoInfeccao:   getVal(`raiva-distrito-infeccao-${disease}`),
        bairroInfeccao:     getVal(`raiva-bairro-infeccao-${disease}`),
        zonaInfeccao:       getVal(`raiva-zona-infeccao-${disease}`),
        trabalho:           getVal(`raiva-trabalho-${disease}`),
        dataObito:          getVal(`raiva-data-obito-${disease}`),
        dataEncerramento:   getVal(`raiva-data-encerramento-${disease}`),
        obs:                getVal(`raiva-obs-${disease}`),
      };
    } else if (disease === 'leishmaniose-visceral') {
      clinicalSignsObj = {
        dataInvestigacao:   getVal(`leish-visc-data-investigacao-${disease}`),
        occupation:         getVal(`leish-visc-ocupacao-${disease}`),
        sintomas:           getVal(`leish-visc-sintomas-${disease}`),
        hiv:                getVal(`leish-visc-hiv-${disease}`),
        diagParasito:       getVal(`leish-visc-diag-parasito-${disease}`),
        diagImuno:          getVal(`leish-visc-diag-imuno-${disease}`),
        tipoEntrada:        getVal(`leish-visc-tipo-entrada-${disease}`),
        inicioTratamento:   getVal(`leish-visc-inicio-tratamento-${disease}`),
        droga:              getVal(`leish-visc-droga-${disease}`),
        peso:               getVal(`leish-visc-peso-${disease}`),
        dose:               getVal(`leish-visc-dose-${disease}`),
        ampolas:            getVal(`leish-visc-ampolas-${disease}`),
        outraDroga:         getVal(`leish-visc-outra-droga-${disease}`),
        classificacao:      getVal(`leish-visc-classificacao-${disease}`),
        criterio:           getVal(`leish-visc-criterio-${disease}`),
        autoctone:          getVal(`leish-visc-autoctone-${disease}`),
        ufInfeccao:         getVal(`leish-visc-uf-infeccao-${disease}`),
        paisInfeccao:       getVal(`leish-visc-pais-infeccao-${disease}`),
        municipioInfeccao:  getVal(`leish-visc-municipio-infeccao-${disease}`),
        distritoInfeccao:   getVal(`leish-visc-distrito-infeccao-${disease}`),
        bairroInfeccao:     getVal(`leish-visc-bairro-infeccao-${disease}`),
        trabalho:           getVal(`leish-visc-trabalho-${disease}`),
        evolucao:           getVal(`leish-visc-evolucao-${disease}`),
        dataObito:          getVal(`leish-visc-data-obito-${disease}`),
        dataEncerramento:   getVal(`leish-visc-data-encerramento-${disease}`),
        deslocamentos:      getVal(`leish-visc-deslocamentos-${disease}`),
        obs:                getVal(`leish-visc-obs-${disease}`),
      };
    } else if (disease === 'chagas') {
      clinicalSignsObj = {
        dataInvestigacao:   getVal(`chagas-data-investigacao-${disease}`),
        occupation:         getVal(`chagas-ocupacao-${disease}`),
        vestigios:          getVal(`chagas-vestigios-${disease}`),
        dataVestigios:      getVal(`chagas-data-vestigios-${disease}`),
        sangue:             getVal(`chagas-sangue-${disease}`),
        controleSoro:       getVal(`chagas-controle-soro-${disease}`),
        contato:            getVal(`chagas-contato-${disease}`),
        maeInfeccao:        getVal(`chagas-mae-infeccao-${disease}`),
        transmissaoOral:    getVal(`chagas-transmissao-oral-${disease}`),
        deslocamentos:      getVal(`chagas-deslocamentos-${disease}`),
        obs:                getVal(`chagas-obs-${disease}`),
      };
    } else if (disease === 'leptospirose') {
      clinicalSignsObj = {
        dataInvestigacao:   getVal(`lepto-data-investigacao-${disease}`),
        occupation:         getVal(`lepto-ocupacao-${disease}`),
        situacaoRisco:      getVal(`lepto-situacao-risco-${disease}`),
        casosAnteriores:    getVal(`lepto-casos-anteriores-${disease}`),
        dataAtendimento:    getVal(`lepto-data-atendimento-${disease}`),
        sinaisSintomas:     getVal(`lepto-sinais-sintomas-${disease}`),
        hospitalizacao:     getVal(`lepto-hospitalizacao-${disease}`),
        dataInternacao:     getVal(`lepto-data-internacao-${disease}`),
        dataAlta:           getVal(`lepto-data-alta-${disease}`),
        hospitalNome:       getVal(`lepto-hospital-nome-${disease}`),
        elisaResultado:     getVal(`lepto-elisa-resultado-${disease}`),
        matResultado:       getVal(`lepto-mat-resultado-${disease}`),
        classificacao:      getVal(`lepto-classificacao-${disease}`),
        criterio:           getVal(`lepto-criterio-${disease}`),
        autoctone:          getVal(`lepto-autoctone-${disease}`),
        ufInfeccao:         getVal(`lepto-uf-infeccao-${disease}`),
        paisInfeccao:       getVal(`lepto-pais-infeccao-${disease}`),
        municipioInfeccao:  getVal(`lepto-municipio-infeccao-${disease}`),
        distritoInfeccao:   getVal(`lepto-distrito-infeccao-${disease}`),
        bairroInfeccao:     getVal(`lepto-bairro-infeccao-${disease}`),
        zonaInfeccao:       getVal(`lepto-zona-infeccao-${disease}`),
        ambienteInfeccao:   getVal(`lepto-ambiente-infeccao-${disease}`),
        trabalho:           getVal(`lepto-trabalho-${disease}`),
        evolucao:           getVal(`lepto-evolucao-${disease}`),
        dataObito:          getVal(`lepto-data-obito-${disease}`),
        dataEncerramento:   getVal(`lepto-data-encerramento-${disease}`),
        obsRiscos:          getVal(`lepto-obs-riscos-${disease}`),
        obs:                getVal(`lepto-obs-${disease}`),
      };
    } else if (disease === 'acidente-ofidico') {
      clinicalSignsObj = {
        dataInvestigacao:   getVal(`ofidico-data-investigacao-${disease}`),
        occupation:         getVal(`ofidico-ocupacao-${disease}`),
        dataAcidente:       getVal(`ofidico-data-acidente-${disease}`),
        ufOcorrencia:       getVal(`ofidico-uf-ocorrencia-${disease}`),
        munOcorrencia:       getVal(`ofidico-mun-ocorrencia-${disease}`),
        localidadeOcorrencia: getVal(`ofidico-localidade-ocorrencia-${disease}`),
        zonaOcorrencia:     getVal(`ofidico-zona-ocorrencia-${disease}`),
        tempoAtendimento:   getVal(`ofidico-tempo-atendimento-${disease}`),
        localPicada:        getVal(`ofidico-local-picada-${disease}`),
        locais:             getVal(`ofidico-locais-${disease}`),
        sintomasLocais:     getVal(`ofidico-sintomas-locais-${disease}`),
        sistemicas:         getVal(`ofidico-sistemicas-${disease}`),
        sintomasSistemicos: getVal(`ofidico-sintomas-sistemicos-${disease}`),
        tempoCoag:          getVal(`ofidico-tempo-coag-${disease}`),
        tipoAcidente:       getVal(`ofidico-tipo-acidente-${disease}`),
        agenteEspecie:      getVal(`ofidico-agente-especie-${disease}`),
        classificacaoCaso:  getVal(`ofidico-classificacao-caso-${disease}`),
        soroterapia:        getVal(`ofidico-soroterapia-${disease}`),
        soroAmpolas:        getVal(`ofidico-soro-ampolas-${disease}`),
        complLocais:        getVal(`ofidico-compl-locais-${disease}`),
        complLocaisEspecificar: getVal(`ofidico-compl-locais-especificar-${disease}`),
        complSistemicas:    getVal(`ofidico-compl-sistemicas-${disease}`),
        complSistemicasEspecificar: getVal(`ofidico-compl-sistemicas-especificar-${disease}`),
        trabalho:           getVal(`ofidico-trabalho-${disease}`),
        evolucao:           getVal(`ofidico-evolucao-${disease}`),
        dataObito:          getVal(`ofidico-data-obito-${disease}`),
        dataEncerramento:   getVal(`ofidico-data-encerramento-${disease}`),
        obs:                getVal(`ofidico-obs-${disease}`),
      };
    } else if (disease === 'leishmaniose-tegumentar') {
      clinicalSignsObj = {
        dataInvestigacao:   getVal(`leish-tegu-data-investigacao-${disease}`),
        occupation:         getVal(`leish-tegu-ocupacao-${disease}`),
        presencaLesao:      getVal(`leish-tegu-presenca-lesao-${disease}`),
        cicatrizes:         getVal(`leish-tegu-cicatrizes-${disease}`),
        hiv:                getVal(`leish-tegu-hiv-${disease}`),
        diagParasito:       getVal(`leish-tegu-diag-parasito-${disease}`),
        diagIrm:            getVal(`leish-tegu-diag-irm-${disease}`),
        histopato:          getVal(`leish-tegu-histopato-${disease}`),
        tipoEntrada:        getVal(`leish-tegu-tipo-entrada-${disease}`),
        formaClinica:       getVal(`leish-tegu-forma-clinica-${disease}`),
        inicioTratamento:   getVal(`leish-tegu-inicio-tratamento-${disease}`),
        droga:              getVal(`leish-tegu-droga-${disease}`),
        peso:               getVal(`leish-tegu-peso-${disease}`),
        dose:               getVal(`leish-tegu-dose-${disease}`),
        ampolas:            getVal(`leish-tegu-ampolas-${disease}`),
        outraDroga:         getVal(`leish-tegu-outra-droga-${disease}`),
        criterio:           getVal(`leish-tegu-criterio-${disease}`),
        classEpidemio:      getVal(`leish-tegu-class-epidêmio-${disease}`),
        autoctone:          getVal(`leish-tegu-autoctone-${disease}`),
        ufInfeccao:         getVal(`leish-tegu-uf-infeccao-${disease}`),
        paisInfeccao:       getVal(`leish-tegu-pais-infeccao-${disease}`),
        municipioInfeccao:  getVal(`leish-tegu-municipio-infeccao-${disease}`),
        distritoInfeccao:   getVal(`leish-tegu-distrito-infeccao-${disease}`),
        bairroInfeccao:     getVal(`leish-tegu-bairro-infeccao-${disease}`),
        trabalho:           getVal(`leish-tegu-trabalho-${disease}`),
        evolucao:           getVal(`leish-tegu-evolucao-${disease}`),
        dataObito:          getVal(`leish-tegu-data-obito-${disease}`),
        dataEncerramento:   getVal(`leish-tegu-data-encerramento-${disease}`),
        deslocamentos:      getVal(`leish-tegu-deslocamentos-${disease}`),
        obs:                getVal(`leish-tegu-obs-${disease}`),
      };
    }

    const payload = {
      patientId: patientId || null,
      disease: disease,
      healthUnit: healthUnitEl ? healthUnitEl.value : 'Não informada',
      symptomsDate: symptomsDateEl ? symptomsDateEl.value : '',
      symptoms: checkedSymptoms,
      clinicalSigns: clinicalSignsObj,
      labResults: {
        igmChikungunya:    '4',
        igmDengue:         '4',
        ns1:               '4',
        rtPcr:             '4',
        investigationDate: '',
        investigationDate2:'',
        exameType:         'NS1 / Sorologia IgM / RT-PCR',
        bacterioscopia:    '',
      },
      surtoData: {
        tipoNotificacao: disease === 'tracoma' ? '4' : (getVal(`tipo-notificacao-${disease}`) || '2'),
        dataNotificacao:getVal(`data-notificacao-${disease}`) || new Date().toISOString().substring(0,10),
        ufNotificacao:  getVal(`uf-notificacao-${disease}`) || 'PA',
        munNotificacao: getVal(`mun-notificacao-${disease}`) || 'MARABÁ',
        casosData:      getVal(`surto-casos-data-${disease}`) || '',
        casosSuspeitos: getVal(`surto-casos-num-${disease}`) || '',
        localSurto:     getVal(`surto-local-${disease}`) || '',
      },
      patientInfo: {
        name:        patientNameEl ? patientNameEl.value.trim() : '',
        cpf:         getVal(`patient-cpf-${disease}`) || '',
        cns:         getVal(`patient-sus-${disease}`) || '',
        birthDate:   getVal(`patient-birth-${disease}`) || '',
        motherName:  getVal(`patient-mother-${disease}`) || '',
        sex:         getVal(`patient-sex-${disease}`) || 'I',
        race:        getSelectedText(`patient-race-${disease}`),
        education:   getSelectedText(`patient-schooling-${disease}`),
        uf:          getVal(`patient-uf-res-${disease}`) || 'PA',
        municipality:getVal(`patient-mun-res-${disease}`) || 'MARABÁ',
        district:    getVal(`patient-distrito-${disease}`) || '',
        neighborhood:locationEl ? locationEl.value : '',
        address:     getVal(`patient-street-${disease}`) || '',
        number:      getVal(`patient-number-${disease}`) || '',
        complement:  getVal(`patient-comp-${disease}`) || '',
        ref:         getVal(`patient-ref-${disease}`) || '',
        cep:         getVal(`patient-cep-${disease}`) || '',
        phone:       getVal(`patient-phone-${disease}`) || '',
        zone:        getSelectedText(`patient-zone-${disease}`) || '',
        country:     getVal(`patient-country-${disease}`) || '',
      },
      observations: observationsEl ? observationsEl.value : ''
    };

    if (!payload.symptomsDate || !payload.healthUnit) {
      App.showToast('Por favor, preencha todos os campos obrigatórios.', 'error');
      return;
    }

    const submitBtn = form.querySelector('.btn-notify');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    submitBtn.disabled = true;

    const editId = form.dataset.editNotificationId;

    try {
      if (typeof EpiAPI === 'undefined') {
        throw new Error('API do EpiConecta não inicializada.');
      }

      // Auto-register new patient if needed
      if (!patientId && !isEditing) {
        const newPatientData = {
          name:        payload.patientInfo.name,
          cpf:         payload.patientInfo.cpf || null,
          cns:         payload.patientInfo.cns || null,
          birthDate:   payload.patientInfo.birthDate || null,
          motherName:  payload.patientInfo.motherName || null,
          sex:         payload.patientInfo.sex || 'I',
          race:        payload.patientInfo.race || 'Ignorado',
          education:   payload.patientInfo.education || 'Ignorado',
          zone:        payload.patientInfo.zone || 'Urbana',
          address:     payload.patientInfo.address ? (payload.patientInfo.address + (payload.patientInfo.number ? ', ' + payload.patientInfo.number : '')) : null,
          neighborhood:payload.patientInfo.neighborhood || null,
          municipality:payload.patientInfo.municipality || 'MARABÁ',
          uf:          payload.patientInfo.uf || 'PA',
          phone:       payload.patientInfo.phone || null,
        };
        try {
          const created = await EpiAPI.createPatient(newPatientData);
          patientId = created.id;
          payload.patientId = patientId;
          delete form.dataset.newPatient;
          App.showToast(`Paciente ${payload.patientInfo.name} cadastrado!`, 'success');
        } catch (createErr) {
          App.showToast(`Erro ao cadastrar novo paciente: ${createErr.message}`, 'error');
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
          return;
        }
      }

      if (editId) {
        await EpiAPI.updateNotification(editId, payload);
      } else {
        await EpiAPI.createNotification(payload);
      }

      if (typeof AuthModule !== 'undefined' && AuthModule.currentUser) {
          const key = `epi_fichas_${AuthModule.currentUser.name}`;
          localStorage.setItem(key, parseInt(localStorage.getItem(key) || '0') + 1);
      }

      App.showToast(editId ? `Caso de ${this.diseases[disease].name} atualizado com sucesso!` : `Caso de ${this.diseases[disease].name} notificado com sucesso!`, 'success');

      delete form.dataset.selectedPatientId;
      delete form.dataset.newPatient;

      submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Gravar Notificação Completa';
      submitBtn.disabled = false;

      const successModal = document.getElementById('notification-success-modal');
      const printBtn = document.getElementById('btn-print-notification');
      const closeBtn = document.getElementById('btn-close-notification-success');

      if (successModal) {
          successModal.style.display = 'flex';
      }

      const printHandler = () => {
          if (typeof printNotificationData === 'function') {
              printNotificationData({
                disease: disease,
                patientId: patientId,
                patientName: payload.patientInfo.name,
                patientAge: patientAgeEl ? patientAgeEl.value : '0',
                patientCns: payload.patientInfo.cns,
                patientCpf: payload.patientInfo.cpf,
                patientBirthDate: payload.patientInfo.birthDate,
                patientMotherName: payload.patientInfo.motherName,
                patientSex: { 'M': 'Masculino', 'F': 'Feminino', 'I': 'Ignorado' }[payload.patientInfo.sex] || 'Ignorado',
                patientRace: payload.patientInfo.race,
                patientEducation: payload.patientInfo.education,
                patientAddress: payload.patientInfo.address,
                patientNumber: payload.patientInfo.number,
                patientComplement: payload.patientInfo.complement,
                patientNeighborhood: payload.patientInfo.neighborhood,
                patientMunicipality: payload.patientInfo.municipality,
                patientUf: payload.patientInfo.uf,
                patientPhone: payload.patientInfo.phone,
                patientZone: payload.patientInfo.zone,
                patientCountry: payload.patientInfo.country,
                patientDistrict: payload.patientInfo.district,
                tipoNotificacao: payload.surtoData.tipoNotificacao,
                dataNotificacao: payload.surtoData.dataNotificacao,
                ufNotificacao: payload.surtoData.ufNotificacao,
                munNotificacao: payload.surtoData.munNotificacao,
                healthUnit: payload.healthUnit,
                healthUnitText: healthUnitEl ? (healthUnitEl.options[healthUnitEl.selectedIndex] ? healthUnitEl.options[healthUnitEl.selectedIndex].text : '') : '',
                symptomsDate: payload.symptomsDate,
                surtoSintomasData: payload.surtoData.casosData,
                surtoNumCasos: payload.surtoData.casosSuspeitos,
                surtoLocal: payload.surtoData.localSurto,
                mainSymptoms: checkedSymptoms.join(', ') || 'Nenhum',
                clinicalSigns: payload.clinicalSigns,
                labResults: payload.labResults,
                observations: payload.observations,
                notificatorName: AuthModule.currentUser ? AuthModule.currentUser.name : 'Profissional de Saúde',
                notificatorUnit: healthUnitEl ? (healthUnitEl.options[healthUnitEl.selectedIndex] ? healthUnitEl.options[healthUnitEl.selectedIndex].text : 'UBS Hiroshi Matsuda') : 'UBS Hiroshi Matsuda',
              });
          }
      };

      const closeHandler = () => {
          if (successModal) successModal.style.display = 'none';
          form.reset();
          delete form.dataset.editNotificationId;
          submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Gravar Notificação Completa';
          if (printBtn) printBtn.removeEventListener('click', printHandler);
          if (closeBtn) closeBtn.removeEventListener('click', closeHandler);
          if (typeof window.triggerDashboardReload === 'function') {
              window.triggerDashboardReload();
          }
          if (typeof PatientModule !== 'undefined' && PatientModule.currentPatient && typeof EpiAPI !== 'undefined') {
              EpiAPI.getPatient(PatientModule.currentPatient.id).then(fullPatient => {
                  PatientModule.openProfile(fullPatient);
              }).catch(err => console.error('[EpiConecta] Erro ao atualizar prontuário:', err));
          }
          App.showScreen('patients');
      };

      if (printBtn) {
          printBtn.replaceWith(printBtn.cloneNode(true));
          document.getElementById('btn-print-notification').addEventListener('click', printHandler);
      }
      if (closeBtn) {
          closeBtn.replaceWith(closeBtn.cloneNode(true));
          document.getElementById('btn-close-notification-success').addEventListener('click', closeHandler);
      }

    } catch (err) {
      App.showToast(err.message || 'Erro ao registrar notificação no backend.', 'error');
      submitBtn.innerHTML = editId ? '<i class="fas fa-save"></i> Atualizar Notificação' : '<i class="fas fa-paper-plane"></i> Gravar Notificação Completa';
      submitBtn.disabled = false;
    }

  },

  getDiseaseName(disease) {
    return this.diseases[disease]?.name || disease;
  }
};

window.fetchCepForLocation = async function(id) {
    const cepInput = document.getElementById(`patient-cep-${id}`);
    const locInput = document.getElementById(`patient-location-${id}`);
    if (!cepInput || !locInput) return;
    
    let cep = cepInput.value.replace(/\D/g, '');
    if (cep.length === 8) {
        try {
            const btn = cepInput.nextElementSibling;
            if (btn) btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();
            if (btn) btn.innerHTML = '<i class="fas fa-search"></i>';
            
            if (!data.erro) {
                locInput.value = `${data.bairro}, ${data.logradouro} - ${data.localidade}/${data.uf}`;
                if (App && App.showToast) App.showToast('Endereço preenchido!', 'success');
            } else {
                if (App && App.showToast) App.showToast('CEP não encontrado.', 'warning');
            }
        } catch (e) {
            if (App && App.showToast) App.showToast('Erro ao buscar CEP.', 'error');
            const btn = cepInput.nextElementSibling;
            if (btn) btn.innerHTML = '<i class="fas fa-search"></i>';
        }
    }
};

window.autocompletePatient = function(id) {
    const searchInput = document.getElementById(`patient-search-id-${id}`);
    if (!searchInput || !searchInput.value) return;

    let term = searchInput.value.toLowerCase().replace(/[.\-\s/]/g, '');
    if (!term) return;

    const btn = searchInput.nextElementSibling;
    if (btn) btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';

    setTimeout(() => {
        if (btn) btn.innerHTML = '<i class="fas fa-search"></i>';
        if (PatientModule && PatientModule.mockDB) {
            const patient = PatientModule.mockDB.find(p => {
                const cpf = p.cpf ? p.cpf.replace(/[.\-]/g, '') : '';
                const cns = p.cns ? p.cns.replace(/\s/g, '') : '';
                const name = p.name ? p.name.toLowerCase() : '';
                return cpf.includes(term) || cns.includes(term) || name.includes(searchInput.value.toLowerCase().trim());
            });

            if (patient) {
                const nameInput = document.getElementById(`patient-name-${id}`);
                const ageInput = document.getElementById(`patient-age-${id}`);
                if (nameInput) nameInput.value = patient.name;
                if (ageInput) ageInput.value = patient.age;

                if (App && App.showToast) App.showToast('Dados do paciente carregados!', 'success');
            } else {
                if (App && App.showToast) App.showToast('Paciente não encontrado. Pode preencher manualmente.', 'info');
            }
        }
    }, 600);
};

window.syncPatientData = function(data) {
    if (!PatientModule || !PatientModule.mockDB) return;

    // Check if patient already exists
    let existingPatient = PatientModule.mockDB.find(p => p.name.toLowerCase() === data.patientName.toLowerCase());
    const notificatorName = AuthModule && AuthModule.currentUser ? AuthModule.currentUser.name : sampleData.user.name;

    if (existingPatient) {
        // Prepare new history/notification
        existingPatient.history.unshift({
            date: new Date().toLocaleDateString('pt-BR'),
            title: `Notificação - ${CaseNotificationModule.getDiseaseName(data.disease)}`,
            desc: `Paciente notificado por suspeita. Sintomas reportados: ${data.mainSymptoms}. Local: ${data.location}. Notificado por: ${notificatorName}`,
            isNotification: true,
            notificationData: data
        });

        // Add a badge if it doesn't exist
        const hasBadge = existingPatient.badges.some(b => b.text === 'Suspeita Ativa');
        if (!hasBadge) {
            existingPatient.badges.unshift({ text: 'Suspeita Ativa', type: 'alert' });
        }
    } else {
        // Create new patient
        const newPatient = {
            id: Date.now(),
            name: data.patientName,
            age: data.patientAge,
            sex: 'Não informado',
            cpf: 'Não cadastrado',
            cns: 'Não cadastrado',
            blood: '-',
            photo: `https://ui-avatars.com/api/?name=${encodeURIComponent(data.patientName)}&background=random&color=fff`,
            birthDate: '-',
            badges: [{ text: 'Suspeita Ativa', type: 'alert' }, { text: 'Novo', type: 'info' }],
            allergies: [],
            conditions: [],
            vitals: { bp: '-', weight: '-', temp: '-', o2: '-', heartRate: '-' },
            history: [
                {
                    date: new Date().toLocaleDateString('pt-BR'),
                    title: `Notificação Inicial - ${CaseNotificationModule.getDiseaseName(data.disease)}`,
                    desc: `Primeira notificação registrada no sistema. Sintomas: ${data.mainSymptoms}. Notificado por: ${notificatorName}`,
                    isNotification: true,
                    notificationData: data
                }
            ],
            vaccines: []
        };
        PatientModule.mockDB.unshift(newPatient);
    }
    
    // Update Patient Module UI if required
    PatientModule.renderRecents();
};

// Módulo de Busca de Sintomas e Reconhecimento de Voz
const SymptomSearchModule = {
  activeFormId: null,
  allSymptomsFlat: [],
  speechRecognition: null,

  init() {
    this.flattenSymptoms();
    this.setupListeners();
    this.setupSpeechRecognition();
  },

  flattenSymptoms() {
    this.allSymptomsFlat = [];
    if (SymptomsModule && SymptomsModule.symptomsData) {
      Object.entries(SymptomsModule.symptomsData).forEach(([cat, syms]) => {
        syms.forEach(s => {
          this.allSymptomsFlat.push({ id: s.id, label: s.label, category: cat });
        });
      });
    }
  },

  setupListeners() {
    // Triage View: Filter existing chips
    const triageSearchInput = document.getElementById('triage-symptom-search');
    if (triageSearchInput) {
      triageSearchInput.addEventListener('input', (e) => this.filterTriageChips(e.target.value));
    }

    // Modal Search Input
    const modalInput = document.getElementById('modal-symptom-input');
    if (modalInput) {
      modalInput.addEventListener('input', (e) => this.renderModalResults(e.target.value));
    }

    // Confirm Modal Button
    const confirmBtn = document.getElementById('confirm-symptoms-btn');
    if (confirmBtn) {
      confirmBtn.addEventListener('click', () => this.confirmSelection());
    }

    // Mic buttons
    const triageMicBtn = document.getElementById('triage-mic-btn');
    if (triageMicBtn) {
      triageMicBtn.addEventListener('click', () => this.startVoiceSearch('triage'));
    }

    const modalMicBtn = document.getElementById('modal-mic-btn');
    if (modalMicBtn) {
      modalMicBtn.addEventListener('click', () => this.startVoiceSearch('modal'));
    }

    const cancelListening = document.getElementById('cancel-listening-btn');
    if (cancelListening) {
      cancelListening.addEventListener('click', () => this.stopVoiceSearch());
    }
  },

  setupSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      this.speechRecognition = new SpeechRecognition();
      this.speechRecognition.lang = 'pt-BR';
      this.speechRecognition.continuous = false;
      this.speechRecognition.interimResults = false;

      this.speechRecognition.onresult = (event) => {
        const result = event.results[0][0].transcript;
        this.handleVoiceResult(result);
        this.stopVoiceSearch();
      };

      this.speechRecognition.onerror = (event) => {
        console.error('Speech recognition error', event.error);
        if (event.error !== 'aborted') {
          App.showToast('Erro no reconhecimento de voz: ' + event.error, 'error');
        }
        this.stopVoiceSearch();
      };

      this.speechRecognition.onend = () => {
        document.getElementById('listening-overlay').style.display = 'none';
      };
    }
  },

  filterTriageChips(query) {
    const q = query.toLowerCase().trim();
    const chips = document.querySelectorAll('#symptoms-grid .symptom-chip');
    chips.forEach(chip => {
      const text = chip.textContent.toLowerCase();
      if (text.includes(q)) {
        chip.style.display = '';
      } else {
        chip.style.display = 'none';
      }
    });

    // Hide empty categories
    document.querySelectorAll('#symptoms-grid .symptom-category').forEach(cat => {
      const allChips = cat.querySelectorAll('.symptom-chip');
      let hasVisible = false;
      allChips.forEach(c => {
         if (c.style.display !== 'none') hasVisible = true;
      });
      cat.style.display = hasVisible ? 'block' : 'none';
    });
  },

  openModal(diseaseId) {
    this.activeFormId = diseaseId;
    const modal = document.getElementById('symptom-search-modal');
    if (modal) {
      document.getElementById('modal-symptom-input').value = '';
      this.renderModalResults('');
      modal.style.display = 'flex';
    }
  },

  renderModalResults(query) {
    const q = query.toLowerCase().trim();
    const container = document.getElementById('modal-symptoms-results');
    if (!container) return;

    let filtered = this.allSymptomsFlat;
    if (q) {
      filtered = this.allSymptomsFlat.filter(s => s.label.toLowerCase().includes(q));
    }

    container.innerHTML = '';
    
    if (filtered.length === 0) {
      container.innerHTML = '<p style="text-align:center; color:#888; padding:20px;">Nenhum sintoma encontrado.</p>';
      return;
    }

    filtered.forEach(s => {
      const item = document.createElement('div');
      item.className = 'symptom-modal-item';
      item.innerHTML = `
        <input type="checkbox" id="modal-sym-${s.id}" value="${s.label}">
        <label for="modal-sym-${s.id}">
          <span style="font-weight:500;">${s.label}</span>
          <br><span style="font-size:0.8rem; color:#888;">${s.category}</span>
        </label>
      `;
      // Toggle checkbox clicking raw div
      item.onclick = (e) => {
        if (e.target.tagName !== 'INPUT') {
          const cb = item.querySelector('input');
          cb.checked = !cb.checked;
        }
      };
      container.appendChild(item);
    });
  },

  confirmSelection() {
    if (!this.activeFormId) return;

    const selectedCheckboxes = document.querySelectorAll('#modal-symptoms-results input:checked');
    const selectedLabels = Array.from(selectedCheckboxes).map(cb => cb.value);

    if (selectedLabels.length > 0) {
      const textarea = document.getElementById(`main-symptoms-${this.activeFormId}`);
      if (textarea) {
        let currentText = textarea.value.trim();
        if (currentText && !currentText.endsWith(',')) {
          currentText += ', ';
        } else if (currentText && currentText.endsWith(',')) {
          currentText += ' ';
        }
        textarea.value = currentText + selectedLabels.join(', ');
      }
    }

    document.getElementById('symptom-search-modal').style.display = 'none';
  },

  startVoiceSearch(context) {
    if (!this.speechRecognition) {
      App.showToast('Reconhecimento de voz não suportado neste navegador.', 'error');
      return;
    }
    this.voiceContext = context;
    document.getElementById('listening-overlay').style.display = 'flex';
    document.getElementById('listening-text').textContent = "Fale o sintoma desejado...";
    
    try {
      this.speechRecognition.start();
    } catch (e) {
      console.log('Serviço já iniciado', e);
    }
  },

  stopVoiceSearch() {
    if (this.speechRecognition) {
      try {
        this.speechRecognition.stop();
      } catch (e) {}
    }
    document.getElementById('listening-overlay').style.display = 'none';
  },

  handleVoiceResult(result) {
    if (this.voiceContext === 'triage') {
      const input = document.getElementById('triage-symptom-search');
      if (input) {
        input.value = result;
        this.filterTriageChips(result);
      }
    } else if (this.voiceContext === 'modal') {
      const input = document.getElementById('modal-symptom-input');
      if (input) {
        input.value = result;
        this.renderModalResults(result);
      }
    }
    App.showToast(`Ouviu: "${result}"`, 'info');
  }
};

// Módulo Principal do Aplicativo
const App = {
  currentScreen: 'dashboard',

  init() {
    this.startSafetyTimeout(); // Safety failsafe
    this.setupNavigation();
    this.setupUI();
    this.loadInitialData();
    this.setupServiceWorker();
    this.checkConnectionStatus();

    // Inicializa os módulos
    try {
      if (typeof SymptomSearchModule !== 'undefined') SymptomSearchModule.init();
      NotificationsModule.init();
      ChatModule.init();
      LibraryModule.init();
      SettingsModule.init();
      SymptomsModule.init(); // Init Symptoms
      NewsModule.init(); // Init News Carousel
      AnalyticsModule.init(); // Init Analytics
      MapModule.init(); // Init Map Listener
      PatientModule.init(); // Init Patient Module
      CaseNotificationModule.init(); // Init Case Notification

      // Mostra a tela inicial
      this.showScreen('dashboard');

      // ... (existing code)



      console.log('Aplicativo EpiConecta inicializado com sucesso!');
    } catch (error) {
      console.error('Erro na inicialização:', error);
      this.showToast('Erro ao carregar o aplicativo', 'error');
    } finally {
      // Garante que o loading seja removido
      setTimeout(() => {
        this.hideLoading();
      }, 500);
    }
  },

  setupNavigation() {
    // Desktop Sidebar Navigation
    const desktopNavItems = document.querySelectorAll('.sidebar-menu .nav-item');
    desktopNavItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const screen = item.dataset.screen;
        if (screen) {
          this.showScreen(screen);
        }
      });
    });

    // Mobile Bottom Navigation
    const bottomNavItems = document.querySelectorAll('.bottom-nav .nav-item');
    bottomNavItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const screen = item.dataset.screen;
        if (screen) {
          this.showScreen(screen);
        }
      });
    });
    // Global Search Listener
    const globalSearch = document.getElementById('global-patient-search');
    if(globalSearch) {
      globalSearch.addEventListener('keypress', (e) => {
        if(e.key === 'Enter') {
          App.showScreen('patients');
          setTimeout(() => {
            const searchInput = document.getElementById('patient-search-input');
            if(window.PatientModule && searchInput) {
               searchInput.value = globalSearch.value;
               PatientModule.handleSearch(globalSearch.value);
               globalSearch.value = ''; // Limpar busca global apos usar
            }
          }, 300);
        }
      });
    }

    // Quick Action Cards
    const quickCards = document.querySelectorAll('.quick-card');
    quickCards.forEach(card => {
      card.addEventListener('click', () => {
        const screen = card.dataset.screen;
        if (screen) {
          this.showScreen(screen);
        }
      });
    });
    // Back Buttons
    const backButtons = document.querySelectorAll('.back-button, .back-button-header');
    backButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const targetScreen = button.dataset.screen;
        if (targetScreen) {
          this.showScreen(targetScreen);
        } else {
          this.showScreen('dashboard');
        }
      });
    });

    // See More Button
    const seeMoreBtn = document.querySelector('.see-more-btn');
    if (seeMoreBtn) {
      seeMoreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const screen = seeMoreBtn.dataset.screen;
        if (screen) {
          this.showScreen(screen);
        }
      });
    }
  },

  showScreen(screenId) {
    // Intercept screens that require authentication
    const restrictedScreens = ['case-notification', 'patients'];
    if (restrictedScreens.includes(screenId) && (!AuthModule || !AuthModule.currentUser)) {
       if (AuthModule && AuthModule.requireAuth) {
           AuthModule.requireAuth(() => this.showScreen(screenId));
           return;
       }
    }

    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
      screen.classList.remove('active');
      screen.style.display = 'none';
    });

    // Show target screen
    const targetScreen = document.getElementById(`${screenId}-screen`);
    if (targetScreen) {
      targetScreen.classList.add('active');
      targetScreen.style.display = 'block';
      this.currentScreen = screenId;

      // Update active nav items
      this.updateActiveNavItem(screenId);

      // Scroll to top
      const mainContent = document.querySelector('.main-content');
      if (mainContent) {
        mainContent.scrollTop = 0;
      }

      // Execute screen-specific actions
      this.onScreenShow(screenId);
    }
  },

  showPreviousScreen() {
    // Always return to dashboard
    this.showScreen('dashboard');
  },

  updateActiveNavItem(screenId) {
    // Update desktop nav
    const desktopNavItems = document.querySelectorAll('.sidebar-menu .nav-item');
    desktopNavItems.forEach(item => {
      if (item.dataset.screen === screenId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Update bottom nav
    const bottomNavItems = document.querySelectorAll('.bottom-nav .nav-item');
    bottomNavItems.forEach(item => {
      if (item.dataset.screen === screenId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  },

  onScreenShow(screenId) {
    switch (screenId) {
      case 'notifications':
        // Atualiza a lista de notificações
        NotificationsModule.renderNotifications();
        break;
      case 'chat':
        // Atualiza a lista de salas de chat
        ChatModule.renderChatRooms();
        break;
      case 'library':
        // Atualiza a lista de documentos
        LibraryModule.renderDocuments();
        break;
      case 'symptoms':
        // Sintomas já são renderizados no init e o estado é mantido, 
        // mas poderíamos resetar se quiséssemos.
        break;
      case 'analytics':
        // Initialize map when analytics screen is shown
        if (MapModule) {
          if (!MapModule.map) {
            setTimeout(() => {
              MapModule.init();
            }, 100);
          } else {
            MapModule.fixSize();
          }
        }
        break;
      case 'case-notification':
        // Ensure case notification module is initialized
        setTimeout(() => {
          if (CaseNotificationModule) {
            CaseNotificationModule.init();
          }
        }, 100);
        break;
      case 'patients':
        // Force reset patient view to search/list mode
        if (PatientModule) {
          const profileView = document.getElementById('patient-profile-view');
          const searchBar = document.querySelector('.patient-search-bar');
          const recents = document.getElementById('patient-recents');
          const results = document.getElementById('patient-results');

          if (profileView) profileView.style.display = 'none';
          if (searchBar) searchBar.style.display = 'block';
          if (recents) recents.style.display = 'block';
          if (results) results.style.display = 'none';
          
          PatientModule.renderRecents();
        }
        break;
    }
  },

  setupUI() {
    // Atualiza a data atual
    this.updateCurrentDate();

    // Configura o botão de notificações
    const notificationsButton = document.getElementById('notifications-button');
    if (notificationsButton) {
      notificationsButton.addEventListener('click', (e) => {
        e.preventDefault();
        this.showScreen('notifications');
      });
    }

    // Configura o botão do perfil do usuário
    const userMenuButton = document.getElementById('user-menu-button');
    if (userMenuButton) {
      userMenuButton.addEventListener('click', () => {
        this.showScreen('settings');
      });
    }

    // Configura o botão "Ver todos" dos alertas
    const viewAllAlerts = document.getElementById('view-all-alerts');
    if (viewAllAlerts) {
      viewAllAlerts.addEventListener('click', (e) => {
        e.preventDefault();
        this.showScreen('notifications');
      });
    }
  },

  updateCurrentDate() {
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
      const options = {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        timeZone: 'America/Sao_Paulo'
      };

      const now = new Date();
      dateElement.textContent = now.toLocaleDateString('pt-BR', options);
    }
  },

  loadInitialData() {
    // Carrega os alertas recentes
    this.renderRecentAlerts();

    // Simula um carregamento inicial
    this.showLoading('Carregando dados...');
    setTimeout(() => {
      this.hideLoading();
    }, 1000);
  },

  renderRecentAlerts() {
    const container = document.querySelector('#recent-alerts'); // Use querySelector for flexibility
    if (!container) {
      console.warn('Recent Alerts container not found!');
      return;
    }

    const recentAlerts = sampleData.alerts.slice(0, 3); // Mostra apenas os 3 alertas mais recentes

    if (recentAlerts.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <i class="fas fa-check-circle"></i>
          <p>Nenhum alerta recente</p>
        </div>
      `;
      return;
    }

    container.innerHTML = recentAlerts.map(alert => `
      <div class="alert-card" data-id="${alert.id}">
        <div class="alert-icon">
          <i class="fas fa-${alert.type === 'warning' ? 'exclamation-triangle' : 'info-circle'}"></i>
        </div>
        <div class="alert-content">
          <h3 class="alert-title">${alert.title}</h3>
          <p class="alert-description">${alert.description}</p>
          <span class="alert-time">${this.formatAlertTime(alert.date)}</span>
        </div>
      </div>
    `).join('');

    // Adiciona os event listeners para os cartões de alerta
    document.querySelectorAll('.alert-card').forEach(card => {
      card.addEventListener('click', () => {
        const alertId = card.dataset.id;
        this.showAlertDetails(alertId);
      });
    });
  },

  formatAlertTime(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));

    if (diffInHours < 1) {
      const diffInMinutes = Math.floor((now - date) / (1000 * 60));
      return `Há ${diffInMinutes} min`;
    } else if (diffInHours < 24) {
      return `Há ${diffInHours} h`;
    } else if (diffInHours < 48) {
      return 'Ontem';
    } else {
      return date.toLocaleDateString('pt-BR');
    }
  },

  showAlertDetails(alertId) {
    const alert = sampleData.alerts.find(a => a.id === alertId);
    if (!alert) return;

    const modal = document.getElementById('notification-modal');
    const modalTitle = document.getElementById('notification-modal-title');
    const modalBody = document.getElementById('notification-modal-body');
    const actionBtn = document.getElementById('notification-action-btn');

    if (!modal || !modalTitle || !modalBody || !actionBtn) return;

    modalTitle.textContent = alert.title;
    modalBody.innerHTML = `
      <div class="alert-details">
        <p>${alert.description}</p>
        <div class="alert-meta">
          <span class="alert-category">${this.formatAlertCategory(alert.category)}</span>
          <span class="alert-date">${new Date(alert.date).toLocaleString('pt-BR')}</span>
        </div>
      </div>
    `;

    // Configura o botão de ação com base no tipo de alerta
    let actionText = 'Ver Detalhes';

    if (alert.action) {
      switch (alert.action.type) {
        case 'openLink':
          actionText = 'Abrir Link';
          break;
        case 'openDocument':
          actionText = 'Abrir Documento';
          break;
        case 'viewDetails':
          actionText = 'Ver Detalhes';
          break;
      }
    }

    actionBtn.textContent = actionText;
    actionBtn.onclick = () => {
      if (alert.action) {
        switch (alert.action.type) {
          case 'openLink':
            window.open(alert.action.url, '_blank');
            break;
          case 'openDocument':
            LibraryModule.previewDocument(alert.action.documentId);
            break;
          case 'viewDetails':
            // Navega para a tela de detalhes do alerta
            console.log(`Visualizando detalhes do alerta: ${alertId}`);
            break;
        }
      }
      this.closeModal('notification-modal');
    };

    this.openModal('notification-modal');
  },

  formatAlertCategory(category) {
    const categories = {
      'dengue': 'Dengue',
      'covid': 'COVID-19',
      'vaccination': 'Vacinação',
      'general': 'Geral'
    };

    return categories[category] || category;
  },

  init() {
    console.log('EpiConecta: Initializing...');

    // Show loading overlay
    const loadingOverlay = document.getElementById('loading-overlay');
    if (loadingOverlay) {
      loadingOverlay.style.display = 'flex';
    }

    try {
      // Initialize all modules
      this.setupNavigation();
      this.setupUI();
      this.updateCurrentDate();
      if (typeof AuthModule !== 'undefined') AuthModule.init();

      NotificationsModule.init();
      ChatModule.init();
      LibraryModule.init();
      SymptomsModule.init();
      SettingsModule.init();
      AnalyticsModule.init(); // Init Analytics chart
      PatientModule.init();
      MapModule.init();
      CaseNotificationModule.init();

      this.showScreen('dashboard'); // Pre-load active screen

      // Hide loading overlay after everything is loaded
      setTimeout(() => {
        if (loadingOverlay) {
          loadingOverlay.style.display = 'none';
        }
        console.log('EpiConecta: Initialization complete');
      }, 500);
    } catch (error) {
      console.error('EpiConecta: Initialization error:', error);
      // Hide loading overlay even if there's an error
      if (loadingOverlay) {
        loadingOverlay.style.display = 'none';
      }
      alert('Erro ao inicializar o aplicativo. Por favor, recarregue a página.');
    }
  },

  showLoading(message = 'Carregando...') {
    const loadingOverlay = document.getElementById('loading-overlay');
    const loadingMessage = document.getElementById('loading-message');

    if (loadingOverlay) {
      loadingOverlay.classList.add('active');
    }

    if (loadingMessage) {
      loadingMessage.textContent = message;
    }
  },

  hideLoading() {
    const overlay = document.getElementById('loading-overlay');
    if (overlay) {
      overlay.classList.remove('active'); // Changed from 'add('hidden')' to 'remove('active')' to match showLoading
      setTimeout(() => {
        // Use a slight delay to allow transition to finish before removal/hiding completely if needed
        overlay.style.display = 'none';
      }, 500);
    }
  },

  // Add a safety timeout to initialization
  startSafetyTimeout() {
    setTimeout(() => {
      this.hideLoading();
    }, 5000); // Force hide after 5 seconds max
  },

  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('show');
      document.body.style.overflow = 'hidden';
    }
  },

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('show');
      document.body.style.overflow = '';
    }
  },

  setupServiceWorker() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        const SW_REFRESH_KEY = 'epiconecta_sw_refresh_v20260518d';

        const registerSW = () => {
          navigator.serviceWorker.register('./sw.js?v=20260518d').then(() => {
            console.log('ServiceWorker registration successful');
          }).catch(err => {
            console.log('ServiceWorker registration failed: ', err);
          });
        };

        if (localStorage.getItem(SW_REFRESH_KEY)) {
          registerSW();
          return;
        }

        navigator.serviceWorker.getRegistrations()
          .then(registrations => Promise.all(registrations.map(r => r.unregister())))
          .then(() => {
            if ('caches' in window) {
              return caches.keys().then(keys =>
                Promise.all(keys.filter(k => k.startsWith('epiconecta-')).map(k => caches.delete(k)))
              );
            }
          })
          .finally(() => {
            localStorage.setItem(SW_REFRESH_KEY, '1');
            registerSW();
          });
      });
    }
  },

  checkConnectionStatus() {
    const updateConnectionStatus = () => {
      const isOnline = navigator.onLine;
      const statusElement = document.getElementById('connection-status');

      if (statusElement) {
        statusElement.textContent = isOnline ? 'Online' : 'Offline';
        statusElement.className = isOnline ? 'online' : 'offline';
      }

      // Mostra uma notificação quando o status da conexão mudar
      if (isOnline) {
        this.showToast('Você está online', 'success');
      } else {
        this.showToast('Você está offline. Algumas funcionalidades podem estar limitadas.', 'warning');
      }
    };

    // Verifica o status da conexão quando a página carrega
    updateConnectionStatus();

    // Monitora mudanças no status da conexão
    window.addEventListener('online', updateConnectionStatus);
    window.addEventListener('offline', updateConnectionStatus);
  },

  showToast(message, type = 'info') {
    // Remove existing toasts
    const existingToasts = document.querySelectorAll('.toast');
    existingToasts.forEach(t => {
      t.classList.remove('show');
      setTimeout(() => {
        if (t.parentNode) {
          t.parentNode.removeChild(t);
        }
      }, 300);
    });

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;

    document.body.appendChild(toast);

    // Force reflow
    toast.offsetHeight;

    // Mostra o toast
    setTimeout(() => {
      toast.classList.add('show');
    }, 100);

    // Remove o toast após 3 segundos
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 300);
    }, 3000);
  }
};

window.App = App;

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});


// =========================================
// PRINT E DETALHES DE NOTIFICAÇÃO
// =========================================

window.addTracomaCaseRow = function(tableId, data = {}) {
    const table = document.getElementById(tableId);
    if (!table) return;
    const tbody = table.querySelector('tbody');
    if (!tbody) return;

    const tr = document.createElement('tr');
    tr.style.borderBottom = '1px solid var(--border-color)';

    const fc = Array.isArray(data.fc) ? data.fc : [];

    tr.innerHTML = `
        <td style="padding: 6px; border: 1px solid var(--border-color);">
            <input type="text" class="t-inicial" value="${data.inicial || ''}" placeholder="Ex: E.S.S." style="width: 100%; border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px;">
        </td>
        <td style="padding: 6px; border: 1px solid var(--border-color);">
            <input type="text" class="t-uf" value="${data.uf || 'PA'}" style="width: 100%; border: 1px solid var(--border-color); padding: 4px; border-radius: 4px; text-align: center;">
        </td>
        <td style="padding: 6px; border: 1px solid var(--border-color);">
            <input type="text" class="t-mun" value="${data.mun || 'MARABA'}" style="width: 100%; border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px;">
        </td>
        <td style="padding: 6px; border: 1px solid var(--border-color);">
            <input type="text" class="t-dist" value="${data.dist || ''}" style="width: 100%; border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px;">
        </td>
        <td style="padding: 6px; border: 1px solid var(--border-color);">
            <input type="text" class="t-bairro" value="${data.bairro || ''}" style="width: 100%; border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px;">
        </td>
        <td style="padding: 6px; border: 1px solid var(--border-color);">
            <select class="t-zona" style="width: 100%; border: 1px solid var(--border-color); padding: 4px; border-radius: 4px;">
                <option value="1" ${data.zona === '1' ? 'selected' : ''}>1-Urbana</option>
                <option value="2" ${data.zona === '2' ? 'selected' : ''}>2-Rural</option>
                <option value="3" ${data.zona === '3' ? 'selected' : ''}>3-Periurbana</option>
                <option value="9" ${data.zona === '9' || !data.zona ? 'selected' : ''}>9-Ignorado</option>
            </select>
        </td>
        <td style="padding: 6px; border: 1px solid var(--border-color);">
            <select class="t-sexo" style="width: 100%; border: 1px solid var(--border-color); padding: 4px; border-radius: 4px;">
                <option value="M" ${data.sexo === 'M' ? 'selected' : ''}>M</option>
                <option value="F" ${data.sexo === 'F' ? 'selected' : ''}>F</option>
                <option value="I" ${data.sexo === 'I' || !data.sexo ? 'selected' : ''}>I</option>
            </select>
        </td>
        <td style="padding: 6px; border: 1px solid var(--border-color);">
            <input type="number" class="t-idade" value="${data.idade !== undefined ? data.idade : ''}" min="0" max="120" style="width: 100%; border: 1px solid var(--border-color); padding: 4px; border-radius: 4px; text-align: center;">
        </td>
        <td style="padding: 6px; border: 1px solid var(--border-color); font-size: 0.75rem;">
            <div style="display: flex; gap: 4px; flex-wrap: wrap;">
                <label style="display: inline-flex; align-items: center; gap: 2px;"><input type="checkbox" class="t-fc" value="TF" ${fc.includes('TF') ? 'checked' : ''}>TF</label>
                <label style="display: inline-flex; align-items: center; gap: 2px;"><input type="checkbox" class="t-fc" value="TI" ${fc.includes('TI') ? 'checked' : ''}>TI</label>
                <label style="display: inline-flex; align-items: center; gap: 2px;"><input type="checkbox" class="t-fc" value="TS" ${fc.includes('TS') ? 'checked' : ''}>TS</label>
                <label style="display: inline-flex; align-items: center; gap: 2px;"><input type="checkbox" class="t-fc" value="TT" ${fc.includes('TT') ? 'checked' : ''}>TT</label>
                <label style="display: inline-flex; align-items: center; gap: 2px;"><input type="checkbox" class="t-fc" value="CO" ${fc.includes('CO') ? 'checked' : ''}>CO</label>
            </div>
        </td>
        <td style="padding: 6px; border: 1px solid var(--border-color);">
            <select class="t-cirurg" style="width: 100%; border: 1px solid var(--border-color); padding: 4px; border-radius: 4px;">
                <option value="2" ${data.cirurg === '2' ? 'selected' : ''}>2-Não</option>
                <option value="1" ${data.cirurg === '1' ? 'selected' : ''}>1-Sim</option>
                <option value="9" ${data.cirurg === '9' || !data.cirurg ? 'selected' : ''}>9-Ignorado</option>
            </select>
        </td>
        <td style="padding: 6px; border: 1px solid var(--border-color); text-align: center;">
            <button type="button" class="btn-remove-row" style="background: none; border: none; color: #ef4444; cursor: pointer; padding: 4px;" onclick="this.closest('tr').remove();">
                <i class="fas fa-trash-alt"></i>
            </button>
        </td>
    `;
    tbody.appendChild(tr);
};

window.printNotificationData = function(data) {
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
        alert("Por favor, permita pop-ups para abrir o documento de impressao.");
        return;
    }

    const diseaseName = (typeof CaseNotificationModule !== 'undefined' && CaseNotificationModule.getDiseaseName)
        ? CaseNotificationModule.getDiseaseName(data.disease)
        : (data.disease || 'Nao informado');

    const cidMap = {
        'dengue': 'A90', 'chikungunya': 'A92.0', 'zika': 'A92.8',
        'leishmaniose-tegumentar': 'B55.1', 'leishmaniose-visceral': 'B55.0',
        'chagas': 'B57', 'esquistossomose': 'B65', 'hanseniase': 'A30',
        'leptospirose': 'A27', 'tracoma': 'A71', 'raiva': 'A82',
        'ascaridiase': 'B77', 'ancilostomiase': 'B76', 'tricuriase': 'B79',
        'acidente-ofidico': 'T63.0', 'malaria': 'B54'
    };
    const cid10 = cidMap[String(data.disease).toLowerCase()] || '---';

    const cs = data.clinicalSigns || {};
    const lr = data.labResults || {};

    function splitDigits(value, length, padZero = false) {
        let clean = String(value || '').replace(/\D/g, '');
        if (clean && padZero) {
            clean = clean.padStart(length, '0');
        }
        const digits = clean.split('');
        let h = '';
        for (let i = 0; i < length; i++) {
            h += '<span class="digit-box">' + (digits[i] !== undefined ? digits[i] : '&nbsp;') + '</span>';
        }
        return h;
    }

    function formatCepDigits(cep) {
        const clean = String(cep || '').replace(/\D/g, '');
        if (clean.length === 8) {
            return splitDigits(clean.substring(0, 5), 5) + '<span style="font-weight:bold;margin:0 1px;font-size:10px;">-</span>' + splitDigits(clean.substring(5), 3);
        }
        return splitDigits('', 5) + '<span style="font-weight:bold;margin:0 1px;font-size:10px;">-</span>' + splitDigits('', 3);
    }

    function formatDateDigits(dateStr) {
        if (!dateStr) return '';
        const parts = dateStr.split('-');
        if (parts.length === 3) return parts[2] + parts[1] + parts[0];
        const p2 = dateStr.split('/');
        if (p2.length === 3) return p2[0] + p2[1] + p2[2];
        return dateStr;
    }

    function singleBox(val) {
        return '<span class="single-box">' + (val !== undefined && val !== null ? val : '&nbsp;') + '</span>';
    }

    let cleanUnit = String(data.healthUnit || '').toLowerCase().trim();
    let cnesCode = '-------';
    let unitName = 'OUTRA UNIDADE';

    if (cleanUnit === 'ubs_jaime_pinto' || cleanUnit.includes('jaime pinto')) {
        cnesCode = '2614901';
        unitName = 'UBS JAIME PINTO';
    } else if (cleanUnit === 'ubs_laranjeiras' || cleanUnit.includes('laranjeiras')) {
        cnesCode = '2614774';
        unitName = 'UBS LARANJEIRAS';
    } else if (cleanUnit === 'ubs_liberdade' || cleanUnit.includes('liberdade')) {
        cnesCode = '2614790';
        unitName = 'UBS LIBERDADE (DR. EMERSON CASELLI)';
    } else if (cleanUnit === 'ubs_pedro_cavalcante' || cleanUnit.includes('pedro cavalcante')) {
        cnesCode = '2614931';
        unitName = 'UBS PEDRO CAVALCANTE';
    } else if (cleanUnit === 'ubs_jose_pereira' || cleanUnit.includes('josé pereira') || cleanUnit.includes('jose pereira')) {
        cnesCode = '0826359';
        unitName = 'UBS JOSE PEREIRA DE ARAUJO';
    } else if (cleanUnit === 'crismu' || cleanUnit.includes('crismu')) {
        cnesCode = '9006095';
        unitName = 'CRISMU';
    } else if (cleanUnit === 'ubs_edivan_xavier' || cleanUnit.includes('edivan xavier')) {
        cnesCode = '0270199';
        unitName = 'UBS EDIVAN XAVIER DOS SANTOS';
    } else if (cleanUnit === 'ubs_zezinha' || cleanUnit.includes('zezinha')) {
        cnesCode = '2301907';
        unitName = 'UBS ENFERMEIRA ZEZINHA';
    } else if (cleanUnit === 'ubs_hiroshi_matsuda' || cleanUnit === 'ubs_hiroshi' || cleanUnit.includes('hiroshi') || cleanUnit.includes('hirochi')) {
        cnesCode = '2301389';
        unitName = 'UBS HIROCHI MATSUDA';
    } else if (cleanUnit === 'ubs_mariana_moraes' || cleanUnit.includes('mariana moraes')) {
        cnesCode = '2614804';
        unitName = 'UBS MARIANA MORAES';
    } else if (cleanUnit === 'ubs_demosthenes_azevedo' || cleanUnit.includes('demósthenes') || cleanUnit.includes('demosthenes')) {
        cnesCode = '2614839';
        unitName = 'UBS DEMOSTHENES AZEVEDO';
    } else if (cleanUnit === 'ubs_joao_batista' || cleanUnit.includes('joão batista') || cleanUnit.includes('joao batista')) {
        cnesCode = '2614766';
        unitName = 'UBS JOAO BATISTA BEZERRA';
    } else if (cleanUnit === 'ubs_amadeu_vivacqua' || cleanUnit === 'ubs_amadeu' || cleanUnit.includes('amadeu') || cleanUnit.includes('vivácqua') || cleanUnit.includes('vivacqua')) {
        cnesCode = '2301958';
        unitName = 'UBS AMADEU VIVACQUA';
    } else if (cleanUnit === 'ubs_maria_bico_doce' || cleanUnit.includes('bico doce') || cleanUnit.includes('maria bico')) {
        cnesCode = '2614758';
        unitName = 'UBS PARTEIRA MARIA BICO DOCE';
    } else if (cleanUnit === 'ubs_carlos_barreto' || cleanUnit === 'ubs_morada_nova' || cleanUnit.includes('carlos barreto') || cleanUnit.includes('morada nova')) {
        cnesCode = '2614855';
        unitName = 'UBS CARLOS BARRETO';
    } else if (cleanUnit === 'posto_maria_bahia' || cleanUnit.includes('maria bahia')) {
        cnesCode = '2614723';
        unitName = 'POSTO DE SAUDE MARIA BAHIA DA CONCEICAO';
    } else if (cleanUnit === 'ubs_elisa_chavito' || cleanUnit.includes('elisa') || cleanUnit.includes('chavito')) {
        cnesCode = '2614715';
        unitName = 'UBS ELISA MONTEIRO CHAVITO';
    } else if (cleanUnit === 'posto_antonio_arruda' || cleanUnit.includes('antonio arruda') || cleanUnit.includes('antônio arruda') || cleanUnit.includes('itainópolis') || cleanUnit.includes('itainopolis')) {
        cnesCode = '2614669';
        unitName = 'POSTO DE SAUDE ANTONIO ARRUDA';
    } else if (cleanUnit === 'ubs_jhonatas_moraes' || cleanUnit.includes('jhonatas') || cleanUnit.includes('sororó') || cleanUnit.includes('sororo')) {
        cnesCode = '9066403';
        unitName = 'UBS PASTOR JHONATAS MORAES CAVALCANTE';
    } else if (cleanUnit === 'posto_cristalandia' || cleanUnit.includes('cristalândia') || cleanUnit.includes('cristalandia')) {
        cnesCode = '2614979';
        unitName = 'POSTO DE SAUDE CRISTALANDIA';
    } else if (cleanUnit === 'posto_carima' || cleanUnit.includes('carimã') || cleanUnit.includes('carima')) {
        cnesCode = '7711883';
        unitName = 'POSTO DE SAUDE CARIMA';
    } else if (cleanUnit === 'posto_jose_manoel' || cleanUnit.includes('jose manoel') || cleanUnit.includes('josé manoel') || cleanUnit.includes('anunciação') || cleanUnit.includes('anunciacao')) {
        cnesCode = '2614707';
        unitName = 'POSTO DE SAUDE JOSE MANOEL DA ANUNCIACAO';
    } else if (cleanUnit === 'hmm' || cleanUnit.includes('municipal') || cleanUnit.includes('hmm')) {
        cnesCode = '2301850';
        unitName = 'HOSPITAL MUNICIPAL DE MARABA';
    } else if (cleanUnit === 'regional' || cleanUnit.includes('regional')) {
        cnesCode = '5249449';
        unitName = 'HOSPITAL REGIONAL DO SUDESTE DO PARA';
    } else if (cleanUnit === 'hmi' || cleanUnit.includes('materno') || cleanUnit.includes('infantil') || cleanUnit.includes('hmi')) {
        cnesCode = '2301893';
        unitName = 'HOSPITAL MATERNO INFANTIL';
    } else {
        unitName = data.healthUnitText || data.healthUnit || 'OUTRA UNIDADE';
    }

    const tipoNotif = data.tipoNotificacao || '2';
    const sexCode = data.patientSex === 'Masculino' || data.patientSex === 'M' ? 'M' : (data.patientSex === 'Feminino' || data.patientSex === 'F' ? 'F' : 'I');
    const pregnantCode = (sexCode === 'M') ? '6' : (cs.pregnant || '9');

    let raceCode = '9';
    if (data.patientRace) {
        const rStr = String(data.patientRace).toLowerCase().trim();
        if (rStr.includes('branca') || rStr === 'br' || rStr === '1') raceCode = '1';
        else if (rStr.includes('preta') || rStr === 'pr' || rStr.includes('negra') || rStr === '2') raceCode = '2';
        else if (rStr.includes('amarela') || rStr === 'am' || rStr === '3') raceCode = '3';
        else if (rStr.includes('parda') || rStr === 'pa' || rStr === '4') raceCode = '4';
        else if (rStr.includes('indigena') || rStr.includes('indígena') || rStr === 'in' || rStr === '5') raceCode = '5';
    }

    let schoolCode = '9';
    if (data.patientEducation) {
        const cleanSchool = String(data.patientEducation).toLowerCase().trim();
        if (cleanSchool.includes('analfabeto') || cleanSchool.startsWith('0')) schoolCode = '0';
        else if (cleanSchool.includes('1a a 4a') || cleanSchool.includes('1ª a 4ª') || cleanSchool.startsWith('1-') || cleanSchool.startsWith('1 ')) schoolCode = '1';
        else if (cleanSchool.includes('4a serie completa') || cleanSchool.includes('4ª série completa') || cleanSchool.startsWith('2-') || cleanSchool.startsWith('2 ')) schoolCode = '2';
        else if (cleanSchool.includes('5a a 8a') || cleanSchool.includes('5ª à 8ª') || cleanSchool.startsWith('3-') || cleanSchool.startsWith('3 ')) schoolCode = '3';
        else if (cleanSchool.includes('fundamental completo') || cleanSchool.startsWith('4-') || cleanSchool.startsWith('4 ')) schoolCode = '4';
        else if (cleanSchool.includes('medio incompleto') || cleanSchool.includes('médio incompleto') || cleanSchool.startsWith('5-') || cleanSchool.startsWith('5 ')) schoolCode = '5';
        else if (cleanSchool.includes('medio completo') || cleanSchool.includes('médio completo') || cleanSchool.startsWith('6-') || cleanSchool.startsWith('6 ')) schoolCode = '6';
        else if (cleanSchool.includes('superior incompleto') || cleanSchool.startsWith('7-') || cleanSchool.startsWith('7 ')) schoolCode = '7';
        else if (cleanSchool.includes('superior completo') || cleanSchool.startsWith('8-') || cleanSchool.startsWith('8 ')) schoolCode = '8';
        else if (cleanSchool.includes('nao se aplica') || cleanSchool.includes('não se aplica') || cleanSchool.startsWith('10')) schoolCode = '10';
        else if (cleanSchool.includes('nao informada') || cleanSchool.includes('não informada') || cleanSchool.startsWith('9')) schoolCode = '9';
    }

    const surtoLocalCode = data.surtoLocal ? String(data.surtoLocal).padStart(2, '0') : '';
    const zoneCode = { 'Urbana':'1', 'Rural':'2', 'Periurbana':'3', 'Ignorado':'9', '1':'1', '2':'2', '3':'3', '9':'9' }[data.patientZone] || '9';

    let html = '';
    const diseaseLower = String(data.disease).toLowerCase();

    function generateTracomaHtml() {
        const inquerito1 = cs.inquerito === '1' ? 'X' : '&nbsp;';
        const inquerito2 = cs.inquerito === '2' ? 'X' : '&nbsp;';
        const pessoasExam = splitDigits(cs.pessoasExaminadas || '', 6);
        const casosPos = splitDigits(cs.casosPositivos || '', 6);

        return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>Boletim de Inquérito de Tracoma - ${data.patientName || 'Inquérito'}</title>
<style>
  @media screen { body { background:#f0f0f0; margin:0; padding:20px; display:flex; flex-direction:column; align-items:center; font-family:Arial,Helvetica,sans-serif; } .sinan-page { background:#fff; width:210mm; padding:8mm 10mm; box-sizing:border-box; margin-bottom:25px; box-shadow:0 4px 15px rgba(0,0,0,0.15); border:1px solid #ccc; } }
  @media print { body { margin:0; padding:0; background:#fff; font-family:Arial,Helvetica,sans-serif; -webkit-print-color-adjust:exact; print-color-adjust:exact; } .sinan-page { width:210mm; min-height:297mm; padding:8mm 10mm; box-sizing:border-box; page-break-after:always; background:#fff; } .no-print { display:none !important; } }
  .sinan-page * { box-sizing:border-box; }
  .sn-header { display:flex; justify-content:space-between; align-items:stretch; border-bottom:2px solid #000; padding-bottom:6px; margin-bottom:6px; }
  .sn-header-left { width:30%; font-size:10px; font-weight:bold; line-height:1.4; }
  .sn-header-center { flex:1; text-align:center; padding:0 10px; }
  .sn-header-center .sn-sinan { font-size:11px; font-weight:bold; letter-spacing:2px; margin:0; }
  .sn-header-center .sn-title { font-size:13px; font-weight:900; margin:2px 0; letter-spacing:0.5px; }
  .sn-header-center .sn-subtitle { font-size:11px; font-weight:bold; text-decoration:underline; margin:0; }
  .sn-header-right { width:22%; display:flex; flex-direction:column; align-items:flex-end; justify-content:center; }
  .sn-num-label { font-size:8px; font-weight:bold; margin-bottom:2px; }
  .sn-num-box { border:1.5px solid #000; background:#f0f0f0; padding:5px 10px; font-size:13px; font-weight:bold; border-radius:4px; min-width:110px; text-align:center; }
  .sn-block { display:flex; width:100%; border:1.5px solid #000; margin-bottom:5px; }
  .sn-content { flex:1; display:flex; flex-direction:column; }
  .sn-row { display:flex; width:100%; border-bottom:1px solid #000; }
  .sn-row:last-child { border-bottom:none; }
  .sn-cell { display:flex; flex-direction:column; padding:2px 5px; border-right:1px solid #000; flex:1; }
  .sn-cell:last-child { border-right:none; }
  .ct { font-size:7px; font-weight:bold; text-transform:uppercase; color:#111; display:flex; align-items:center; gap:3px; white-space:nowrap; }
  .cn { display:inline-flex; align-items:center; justify-content:center; border:1px solid #000; width:10px; height:10px; font-size:6.5px; font-weight:bold; background:#fff; flex-shrink:0; }
  .cv { font-size:9.5px; font-weight:bold; color:#000; padding-top:2px; min-height:14px; text-transform:uppercase; display:flex; align-items:center; flex-wrap:wrap; }
  .digit-box { display:inline-flex; align-items:center; justify-content:center; width:11px; height:13px; border:1px solid #000; margin-right:1px; font-size:8px; font-family:monospace; font-weight:bold; background:#fff; }
  .check-box { display:inline-flex; align-items:center; justify-content:center; width:10px; height:10px; border:1px solid #000; margin:0 2px; font-size:7.5px; font-weight:bold; background:#fff; flex-shrink:0; }
  .single-box { display:inline-flex; align-items:center; justify-content:center; width:11px; height:11px; border:1px solid #000; font-size:8px; font-weight:bold; background:#fff; flex-shrink:0; line-height:1; font-family:monospace; }
  .footer-info { display:flex; justify-content:space-between; font-size:7.5px; font-weight:bold; margin-top:3px; border-top:1px solid #888; padding-top:2px; }
  .no-print-btn { position:fixed; top:20px; right:20px; background:#0d8abc; color:#fff; border:none; padding:10px 20px; font-size:14px; font-weight:bold; border-radius:8px; cursor:pointer; box-shadow:0 4px 10px rgba(0,0,0,0.2); z-index:9999; display:flex; align-items:center; gap:8px; }
  .no-print-btn:hover { background:#0a6f98; }
</style>
</head>
<body>
<button class="no-print-btn no-print" onclick="window.print()">&#128438; Imprimir / Salvar PDF</button>

<div class="sinan-page">
  <div class="sn-header">
    <div class="sn-header-left">
      Rep&uacute;blica Federativa do Brasil<br>
      Minist&eacute;rio da Sa&uacute;de<br>
      Secretaria de Vigil&acirc;ncia em Sa&uacute;de
    </div>
    <div class="sn-header-center">
      <p class="sn-sinan">SINAN</p>
      <p class="sn-title">BOLETIM DE INQU&Eacute;RITO DE TRACOMA</p>
    </div>
    <div class="sn-header-right">
      <span class="sn-num-label">N&ordm;</span>
      <div class="sn-num-box">${data.sinan_number || '---.---'}</div>
    </div>
  </div>

  <div class="sn-block">
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="flex:1;">
          <div class="ct"><span class="cn">1</span> Nº DA NOTIFICAÇÃO</div>
          <div class="cv">${data.sinan_number || '---.---'}</div>
        </div>
        <div class="sn-cell" style="flex:1;">
          <div class="ct"><span class="cn">2</span> DATA DA NOTIFICAÇÃO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(data.dataNotificacao), 8)}</div>
        </div>
        <div class="sn-cell" style="flex:2;">
          <div class="ct"><span class="cn">3</span> AGRAVO / DOENÇA</div>
          <div class="cv" style="font-weight:900;">TRACOMA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Código (CID10): A 71.9</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.4;">
          <div class="ct"><span class="cn">4</span> UF</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(data.ufNotificacao || 'PA', 2)}</div>
        </div>
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct"><span class="cn">5</span> MUNICÍPIO</div>
          <div class="cv">${data.munNotificacao || 'MARABA'}</div>
        </div>
        <div class="sn-cell" style="flex:2.2;">
          <div class="ct"><span class="cn">6</span> UNIDADE DE SAÚDE (OU OUTRA FONTE NOTIFICADORA)</div>
          <div class="cv">${unitName}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:2; position:relative;">
          <div class="ct"><span class="cn">7</span> INQUÉRITO</div>
          <div style="font-size:8px; margin-top:2px;">
            <span class="check-box">${inquerito1}</span> 1 - Escolar &nbsp;&nbsp;&nbsp;&nbsp;
            <span class="check-box">${inquerito2}</span> 2 - Domiciliar
          </div>
        </div>
        <div class="sn-cell" style="flex:1.5;">
          <div class="ct"><span class="cn">8</span> Nº DE PESSOAS EXAMINADAS</div>
          <div class="cv" style="padding-top:3px;">${pessoasExam}</div>
        </div>
        <div class="sn-cell" style="flex:1.5;">
          <div class="ct"><span class="cn">9</span> Nº DE CASOS POSITIVOS</div>
          <div class="cv" style="padding-top:3px;">${casosPos}</div>
        </div>
      </div>
    </div>
  </div>

  <div style="width: 100%; border: 1.5px solid #000; margin-top: 5px;">
    <table style="width: 100%; border-collapse: collapse; table-layout: fixed;">
      <thead>
        <tr style="background: #e6e6e6; font-size: 7.5px; font-weight: bold; border-bottom: 1.5px solid #000; text-align: center; height: 22px;">
          <th style="width: 15%; border-right: 1px solid #000; padding: 2px;">Nº do caso/iniciais do caso</th>
          <th style="width: 5%; border-right: 1px solid #000; padding: 2px;">UF Resid.</th>
          <th style="width: 15%; border-right: 1px solid #000; padding: 2px;">Município de residência</th>
          <th style="width: 10%; border-right: 1px solid #000; padding: 2px;">Distrito</th>
          <th style="width: 13%; border-right: 1px solid #000; padding: 2px;">Bairro</th>
          <th style="width: 5%; border-right: 1px solid #000; padding: 2px;">Zona</th>
          <th style="width: 5%; border-right: 1px solid #000; padding: 2px;">Sexo</th>
          <th style="width: 12%; border-right: 1px solid #000; padding: 2px;">Idade</th>
          <th colspan="5" style="width: 15%; border-right: 1px solid #000; padding: 2px; border-bottom: 1px solid #000;">Forma Clínica</th>
          <th style="width: 5%; padding: 2px;">Encam. cirurg.</th>
        </tr>
        <tr style="background: #e6e6e6; font-size: 6.5px; font-weight: bold; border-bottom: 1.5px solid #000; text-align: center; height: 12px;">
          <th colspan="8" style="border-right: 1px solid #000; padding: 1px;"></th>
          <th style="width: 3%; border-right: 1px solid #000; padding: 1px;">TF</th>
          <th style="width: 3%; border-right: 1px solid #000; padding: 1px;">TI</th>
          <th style="width: 3%; border-right: 1px solid #000; padding: 1px;">TS</th>
          <th style="width: 3%; border-right: 1px solid #000; padding: 1px;">TT</th>
          <th style="width: 3%; border-right: 1px solid #000; padding: 1px;">CO</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        ${tracomaRowsHtml}
      </tbody>
    </table>
  </div>

  <div style="border: 1.5px solid #000; padding: 4px; font-size: 7px; margin-top: 5px; line-height: 1.2;">
    <strong>LEGENDA:</strong><br>
    <strong>Zona:</strong> 1-urbana &nbsp;&nbsp; 2-rural &nbsp;&nbsp; 3-periurbana &nbsp;&nbsp; 9-ignorado &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <strong>Sexo:</strong> M-masculino &nbsp;&nbsp; F-feminino &nbsp;&nbsp; 9-ignorado &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <strong>Encaminhamento para cirurgia:</strong> 1-Sim &nbsp;&nbsp; 2-Não &nbsp;&nbsp; 9-Ignorado<br>
    <strong>Forma Clínica:</strong> 1-Sim &nbsp;&nbsp; 2-Não &nbsp;&nbsp; 9-Ignorado &nbsp;&nbsp;&nbsp;&nbsp; (<strong>TF</strong> - Tracoma Inflamatório Folicular / <strong>TI</strong> - Tracoma Inflamatório Intenso / <strong>TS</strong> - Tracoma Cicatricial / <strong>TT</strong> - Triquíase Tracomatosa / <strong>CO</strong> - Opacificação de Córnea)
  </div>

  <div class="footer-info">
    <span>Boletim de Inqu&eacute;rito de Tracoma</span>
    <span>Sinan NET</span>
    <span>SVS 11/07/2006</span>
  </div>
</div>
</body>
</html>`;
    }

    function generatePage1Html(data) {
        return `
<div class="sinan-page">
  <div class="sn-header">
    <div class="sn-header-left">
      Rep&uacute;blica Federativa do Brasil<br>
      Minist&eacute;rio da Sa&uacute;de<br>
      Secretaria de Vigil&acirc;ncia em Sa&uacute;de
    </div>
    <div class="sn-header-center">
      <p class="sn-sinan">SINAN</p>
      <p class="sn-title">SISTEMA DE INFORMA&Ccedil;&Atilde;O DE AGRAVOS DE NOTIFICA&Ccedil;&Atilde;O</p>
      <p class="sn-subtitle">FICHA DE NOTIFICA&Ccedil;&Atilde;O / INVESTIGAÇÃO</p>
    </div>
    <div class="sn-header-right">
      <span class="sn-num-label">N&ordm;</span>
      <div class="sn-num-box">${data.sinan_number || '---.---'}</div>
    </div>
  </div>

  <!-- BLOCO 1: DADOS GERAIS -->
  <div class="sn-block">
    <div class="sn-sidebar">Dados Gerais</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1; min-height:24px;">
          <div class="ct"><span class="cn">1</span> TIPO DE NOTIFICA&Ccedil;&Atilde;O</div>
          <div style="font-size:7.5px; margin-top:2px;">
            1 - Negativa &nbsp;&nbsp;&nbsp;&nbsp; 2 - Individual &nbsp;&nbsp;&nbsp;&nbsp; 3 - Surto &nbsp;&nbsp;&nbsp;&nbsp; 4 - Inqu&eacute;rito Tracoma
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);">
            ${tipoNotif}
          </div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:2.5;">
          <div class="ct"><span class="cn">2</span> AGRAVO/DOEN&Ccedil;A</div>
          <div class="cv" style="font-size:11px; font-weight:900;">${diseaseName}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">3</span> DATA DA NOTIFICA&Ccedil;&Atilde;O</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(data.dataNotificacao), 8)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.4;">
          <div class="ct"><span class="cn">4</span> UF</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(data.ufNotificacao || 'PA', 2)}</div>
        </div>
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct"><span class="cn">5</span> MUNICIPIO DE NOTIFICACAO</div>
          <div class="cv">${data.munNotificacao || 'MARABA'}</div>
        </div>
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct">CODIGO (IBGE)</div>
          <div class="cv" style="padding-top:3px;">${splitDigits('1504208', 7)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:2.2;">
          <div class="ct"><span class="cn">6</span> UNIDADE DE SAUDE (OU OUTRA FONTE NOTIFICADORA)</div>
          <div class="cv">${unitName}</div>
        </div>
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct">CODIGO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(cnesCode, 7)}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">7</span> DATA DOS PRIMEIROS SINTOMAS</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(data.symptomsDate), 8)}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- BLOCO 2: NOTIFICACAO INDIVIDUAL -->
  <div class="sn-block">
    <div class="sn-sidebar">Notificacao Individual</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="flex:3.0;">
          <div class="ct"><span class="cn">8</span> NOME DO PACIENTE</div>
          <div class="cv" style="font-size:10px; font-weight:900;">${data.patientName || 'Nao informado'}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">9</span> DATA DE NASCIMENTO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(data.patientBirthDate), 8)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.9;">
          <div class="ct"><span class="cn">10</span> (OU) IDADE</div>
          <div style="display:flex; align-items:center; gap:3px; margin-top:2px;">
            <div>${splitDigits(data.patientAge || '', 3, true)}</div>
            <div class="single-box">${data.patientAge ? '4' : '&nbsp;'}</div>
            <div style="font-size:5px; line-height:1.0; font-weight:bold; margin-left:2px;">
              1 - Hora<br>
              2 - Dia<br>
              3 - M&ecirc;s<br>
              4 - Ano
            </div>
          </div>
        </div>
        <div class="sn-cell" style="position:relative; flex:0.7;">
          <div class="ct"><span class="cn">11</span> SEXO</div>
          <div style="font-size:5.5px; line-height:1.1; margin-top:2px;">
            M - Masculino<br>
            F - Feminino<br>
            I - Ignorado
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">
            ${sexCode}
          </div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">12</span> GESTANTE</div>
          <div style="font-size:5.2px; line-height:1.1; margin-top:2px;">
            1-1&ordm;Trimestre &nbsp;&nbsp; 2-2&ordm;Trimestre &nbsp;&nbsp; 3-3&ordm;Trimestre<br>
            4-Idade gestacional Ignorada &nbsp;&nbsp; 5-N&atilde;o &nbsp;&nbsp; 6-N&atilde;o se aplica<br>
            9-Ignorado
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">
            ${pregnantCode}
          </div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.3;">
          <div class="ct"><span class="cn">13</span> RACA/COR</div>
          <div style="font-size:5.5px; line-height:1.1; margin-top:2px;">
            1-Branca &nbsp;&nbsp; 2-Preta &nbsp;&nbsp; 3-Amarela<br>
            4-Parda &nbsp;&nbsp; 5-Ind&iacute;gena &nbsp;&nbsp; 9-Ignorado
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">
            ${raceCode}
          </div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative;">
          <div class="ct"><span class="cn">14</span> ESCOLARIDADE</div>
          <div style="font-size:5px; line-height:1.2; margin-top:2px; padding-right:25px;">
            0-Analfabeto &nbsp;&nbsp; 1-1&ordf; a 4&ordf; s&eacute;rie incompleta do EF (antigo prim&aacute;rio ou 1&ordm; grau) &nbsp;&nbsp; 2-4&ordf; s&eacute;rie completa do EF (antigo prim&aacute;rio ou 1&ordm; grau)<br>
            3-5&ordf; &agrave; 8&ordf; s&eacute;rie incompleta do EF (antigo gin&aacute;sio ou 1&ordm; grau) &nbsp;&nbsp; 4-Ensino fundamental completo (antigo gin&aacute;sio ou 1&ordm; grau) &nbsp;&nbsp; 5-Ensino m&eacute;dio incompleto (antigo colegial ou 2&ordm; grau)<br>
            6-Ensino m&eacute;dio completo (antigo colegial ou 2&ordm; grau) &nbsp;&nbsp; 7-Educa&ccedil;&atilde;o superior incompleta &nbsp;&nbsp; 8-Educa&ccedil;&atilde;o superior completa &nbsp;&nbsp; 9-Ignorado &nbsp;&nbsp; 10-N&atilde;o se aplica
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);">
            ${schoolCode}
          </div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:2.2;">
          <div class="ct"><span class="cn">15</span> NUMERO DO CARTAO SUS</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(data.patientCns || '', 15)}</div>
        </div>
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct"><span class="cn">16</span> NOME DA MAE</div>
          <div class="cv" style="font-size:9px;">${data.patientMotherName || 'Nao informada'}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- BLOCO 3: NOTIFICACAO DE SURTO -->
  <div class="sn-block">
    <div class="sn-sidebar">Notificacao de Surto</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.5;">
          <div class="ct"><span class="cn">17</span> DATA DOS 1&ordm;S SINTOMAS DO 1&ordm; CASO SUSPEITO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(data.surtoSintomasData || ''), 8)}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">18</span> N&ordm; DE CASOS SUSPEITOS/EXPOSTOS</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(data.surtoNumCasos || '', 4)}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:2.5;">
          <div class="ct"><span class="cn">19</span> LOCAL INICIAL DE OCORR&Ecirc;NCIA DO SURTO</div>
          <div style="font-size:5.5px; line-height:1.2; margin-top:2px; padding-right:32px;">
            1 - Resid&ecirc;ncia &nbsp;&nbsp; 2 - Hospital / Unidade de Sa&uacute;de &nbsp;&nbsp; 3 - Creche / Escola &nbsp;&nbsp; 4 - Asilo<br>
            5 - Outras Institui&ccedil;&otilde;es (alojamento, trabalho) &nbsp;&nbsp; 6 - Restaurante / Padaria &nbsp;&nbsp; 7 - Eventos<br>
            8 - Casos Dispersos no Bairro &nbsp;&nbsp; 9 - Casos Dispersos pelo Munic&iacute;pio &nbsp;&nbsp; 10 - V&aacute;rios Munic&iacute;pios &nbsp;&nbsp; 11 - Outros
          </div>
          <div style="position:absolute; right:8px; top:50%; transform:translateY(-50%); display:inline-flex;">
            <span class="digit-box" style="width:11px; height:13px; font-size:8px; border:1px solid #000; display:inline-flex; align-items:center; justify-content:center; background:#fff; font-family:monospace; font-weight:bold;">${surtoLocalCode[0] || '&nbsp;'}</span>
            <span class="digit-box" style="width:11px; height:13px; font-size:8px; border:1px solid #000; display:inline-flex; align-items:center; justify-content:center; background:#fff; font-family:monospace; font-weight:bold; margin-left:-1px;">${surtoLocalCode[1] || '&nbsp;'}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- BLOCO 4: DADOS DE RESIDENCIA -->
  <div class="sn-block">
    <div class="sn-sidebar">Dados de Residencia</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.35;">
          <div class="ct"><span class="cn">20</span> UF</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(data.patientUf || 'PA', 2)}</div>
        </div>
        <div class="sn-cell" style="flex:1.7;">
          <div class="ct"><span class="cn">21</span> MUNICIPIO DE RESIDENCIA</div>
          <div class="cv">${data.patientMunicipality || 'MARABA'}</div>
        </div>
        <div class="sn-cell" style="flex:0.9;">
          <div class="ct">CODIGO (IBGE)</div>
          <div class="cv" style="padding-top:3px;">${splitDigits('1504208', 7)}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">22</span> DISTRITO</div>
          <div class="cv">${data.patientDistrict || ''}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.5;">
          <div class="ct"><span class="cn">23</span> BAIRRO</div>
          <div class="cv">${data.patientNeighborhood || 'Nao informado'}</div>
        </div>
        <div class="sn-cell" style="flex:2.5;">
          <div class="ct"><span class="cn">24</span> LOGRADOURO (RUA, AVENIDA,...)</div>
          <div class="cv">${data.patientAddress || 'Nao informado'}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct"><span class="cn">25</span> NUMERO</div>
          <div class="cv">${data.patientNumber || 'S/N'}</div>
        </div>
        <div class="sn-cell" style="flex:1.6;">
          <div class="ct"><span class="cn">26</span> COMPLEMENTO (APTO., CASA,...)</div>
          <div class="cv">${data.patientComplement || ''}</div>
        </div>
        <div class="sn-cell" style="flex:1.6;">
          <div class="ct"><span class="cn">27</span> GEO CAMPO 1</div>
          <div class="cv"></div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct"><span class="cn">28</span> GEO CAMPO 2</div>
          <div class="cv"></div>
        </div>
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct"><span class="cn">29</span> PONTO DE REFERENCIA</div>
          <div class="cv">${data.patientRef || ''}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">30</span> CEP</div>
          <div class="cv" style="padding-top:3px;">${formatCepDigits(data.patientCep)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.6;">
          <div class="ct"><span class="cn">31</span> (DDD) TELEFONE</div>
          <div class="cv" style="padding-top:3px;">${splitDigits((data.patientPhone || '').replace(/\D/g,''), 11)}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">32</span> ZONA</div>
          <div style="font-size:6px; line-height:1.1; margin-top:2px;">
            1 - Urbana &nbsp;&nbsp;&nbsp;&nbsp; 2 - Rural &nbsp;&nbsp;&nbsp;&nbsp; 3 - Periurbana &nbsp;&nbsp;&nbsp;&nbsp; 9 - Ignorado
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">
            ${zoneCode}
          </div>
        </div>
        <div class="sn-cell" style="flex:0.9;">
          <div class="ct"><span class="cn">33</span> PAIS (SE RESID. FORA)</div>
          <div class="cv">${data.patientCountry || ''}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- BLOCO 5: NOTIFICANTE -->
  <div class="sn-block">
    <div class="sn-sidebar">Notificante</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell">
          <div class="ct">MUNICIPIO/UNIDADE DE SAUDE</div>
          <div class="cv">${data.munNotificacao || 'MARABA'} / ${unitName}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct">NOME</div>
          <div class="cv" style="font-weight:900; font-size:10px;">${data.notificatorName || 'Profissional de Saude'}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct">FUNCAO</div>
          <div class="cv">Profissional de Saude</div>
        </div>
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct">ASSINATURA</div>
          <div class="cv" style="border-bottom:1px dotted #555; margin-top:4px; min-height:14px;"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer-info">
    <span>Notificacao</span>
    <span>Sinan NET</span>
    <span>SVS 17/07/2006</span>
  </div>
</div>
`;
    }

    function generatePage2Hanseniase(data) {
        return `
<div class="sinan-page">
  <div class="pg2-header">
    <p class="pg2-title">DADOS COMPLEMENTARES DO CASO - HANSENÍASE</p>
    <p class="pg2-sub">(ANOTAR TODOS OS DADOS DISPONÍVEIS NO MOMENTO DA NOTIFICACAO)</p>
  </div>

  <div class="sn-block">
    <div class="sn-sidebar">Dados Complementares</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.5;">
          <div class="ct"><span class="cn">31</span> Nº DO PRONTUÁRIO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(cs.prontuario || '', 10)}</div>
        </div>
        <div class="sn-cell" style="flex:2.5;">
          <div class="ct"><span class="cn">32</span> OCUPAÇÃO</div>
          <div class="cv">${cs.occupation || '&nbsp;'}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct"><span class="cn">33</span> Nº DE LESÕES CUTÂNEAS</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(cs.lesoesCutaneas || '', 2)}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:2.8;">
          <div class="ct"><span class="cn">34</span> FORMA CLÍNICA</div>
          <div style="font-size:5.5px; line-height:1.2; margin-top:2px; padding-right:25px;">
            1 - Indeterminada &nbsp;&nbsp;&nbsp;&nbsp; 2 - Tuberculóide &nbsp;&nbsp;&nbsp;&nbsp; 3 - Dimorfa<br>
            4 - Virchowiana &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 - Não classificado
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);">
            ${cs.formaClinica || '9'}
          </div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">35</span> CLASSIFICAÇÃO OPERACIONAL</div>
          <div style="font-size:6px; line-height:1.2; margin-top:2px;">
            1 - PB (Paucibacilar) &nbsp;&nbsp;&nbsp;&nbsp; 2 - MB (Multibacilar)
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);">
            ${cs.classOperacional || '9'}
          </div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">36</span> Nº DE NERVOS AFETADOS</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(cs.nervosAfetados || '', 2)}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">37</span> AVALIAÇÃO DO GRAU DE INCAPACIDADE FÍSICA NO DIAGNÓSTICO</div>
          <div style="font-size:5.5px; line-height:1.2; margin-top:2px; padding-right:20px;">
            0-Grau Zero &nbsp;&nbsp; 1-Grau I &nbsp;&nbsp; 2-Grau II &nbsp;&nbsp; 3-Não Avaliado
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);">
            ${cs.incapacidadeFisica || '9'}
          </div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.0;">
          <div class="ct"><span class="cn">38</span> MODO DE ENTRADA</div>
          <div style="font-size:5px; line-height:1.2; margin-top:2px; padding-right:25px;">
            1 - Caso Novo &nbsp;&nbsp;&nbsp;&nbsp; 2 - Transferência do mesmo município &nbsp;&nbsp;&nbsp;&nbsp; 3 - Transferência de outro município (mesma UF)<br>
            4 - Transferência de outro estado &nbsp;&nbsp;&nbsp;&nbsp; 5 - Transferência de outro país &nbsp;&nbsp;&nbsp;&nbsp; 6 - Recidiva &nbsp;&nbsp;&nbsp;&nbsp; 7 - Outros reingressos &nbsp;&nbsp;&nbsp;&nbsp; 9 - Ignorado
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);">
            ${cs.modoEntrada || '9'}
          </div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.0;">
          <div class="ct"><span class="cn">39</span> MODO DE DETECÇÃO DO CASO NOVO</div>
          <div style="font-size:5.5px; line-height:1.2; margin-top:2px; padding-right:25px;">
            1 - Encaminhamento &nbsp;&nbsp;&nbsp;&nbsp; 2 - Demanda Espontânea &nbsp;&nbsp;&nbsp;&nbsp; 3 - Exame de Coletividade<br>
            4 - Exame de Contatos &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 - Outros Modos &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9 - Ignorado
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);">
            ${cs.modoDeteccao || '9'}
          </div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">40</span> BACILOSCOPIA</div>
          <div style="font-size:5.5px; line-height:1.2; margin-top:2px;">
            1 - Positiva &nbsp;&nbsp;&nbsp;&nbsp; 2 - Negativa &nbsp;&nbsp;&nbsp;&nbsp; 3 - Não realizada &nbsp;&nbsp;&nbsp;&nbsp; 9 - Ignorado
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);">
            ${cs.baciloscopia || '9'}
          </div>
        </div>
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct"><span class="cn">41</span> DATA DO INÍCIO DO TRATAMENTO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.dataInicioTratamento || ''), 8)}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.3;">
          <div class="ct"><span class="cn">42</span> ESQUEMA TERAPÊUTICO INICIAL</div>
          <div style="font-size:5px; line-height:1.2; margin-top:2px; padding-right:20px;">
            1 - PQT/PB/6 doses &nbsp;&nbsp;&nbsp;&nbsp; 2 - PQT/MB/12 doses<br>
            3 - Outros Esquemas Substitutos
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);">
            ${cs.esquemaTerapeutico || '9'}
          </div>
        <div class="sn-cell">
          <div class="ct"><span class="cn">43</span> NÚMERO DE CONTATOS REGISTRADOS</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(cs.contatosRegistrados || '', 3)}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- BLOCO INVESTIGADOR -->
  <div class="sn-block" style="margin-top:10px;">
    <div class="sn-sidebar">Investigador</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="flex:2.0;">
          <div class="ct">MUNICIPIO / UNIDADE DE SAÚDE</div>
          <div class="cv">${data.munNotificacao || 'MARABA'} / ${unitName}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct">CÓDIGO DA UNID. DE SAÚDE</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(cnesCode, 7)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct">NOME</div>
          <div class="cv" style="font-weight:900; font-size:10px;">${data.notificatorName || 'Profissional de Saude'}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct">FUNÇÃO</div>
          <div class="cv">Profissional de Saude</div>
        </div>
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct">ASSINATURA</div>
          <div class="cv" style="border-bottom:1px dotted #555; margin-top:4px; min-height:14px;"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer-info">
    <span>Hanseníase</span>
    <span>Sinan NET</span>
    <span>SVS 30/10/2007</span>
  </div>
</div>
`;
    }

    function generatePage1EsquistossomoseHtml(data) {
        return `
<div class="sinan-page">
  <div class="sn-header">
    <div class="sn-header-left">
      Rep&uacute;blica Federativa do Brasil<br>
      Minist&eacute;rio da Sa&uacute;de
    </div>
    <div class="sn-header-center">
      <p class="sn-sinan">SINAN</p>
      <p class="sn-title">SISTEMA DE INFORMA&Ccedil;&Atilde;O DE AGRAVOS DE NOTIFICA&Ccedil;&Atilde;O</p>
      <p class="sn-subtitle">FICHA DE INVESTIGA&Ccedil;&Atilde;O ESQUISTOSSOMOSE N&ordm;</p>
    </div>
    <div class="sn-header-right">
      <span class="sn-num-label">N&ordm;</span>
      <div class="sn-num-box">${data.sinan_number || '---.---'}</div>
    </div>
  </div>

  <!-- CASO CONFIRMADO BANNER -->
  <div style="border:1.5px solid #000; padding:3px 6px; margin-bottom:4px; font-size:7px; line-height:1.2; background:#fafafa;">
    <strong>CASO CONFIRMADO:</strong> Todo indiv&iacute;duo que apresente ovos vi&aacute;veis de <em>Schistosoma mansoni</em> nas fezes ou em tecido submetido &agrave; bi&oacute;psia.
  </div>

  <!-- BLOCO 1: DADOS GERAIS -->
  <div class="sn-block">
    <div class="sn-sidebar">Dados Gerais</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1; min-height:22px;">
          <div class="ct"><span class="cn">1</span> TIPO DE NOTIFICA&Ccedil;&Atilde;O</div>
          <div style="font-size:7.5px; margin-top:2px;">
            2 - Individual
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);">
            ${tipoNotif}
          </div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:2.5; position:relative;">
          <div class="ct"><span class="cn">2</span> AGRAVO/DOEN&Ccedil;A</div>
          <div style="font-size:10px; font-weight:900; margin-top:2px;">ESQUISTOSSOMOSE</div>
          <div style="position:absolute; right:8px; top:4px; font-size:7px; font-weight:bold;">
            C&oacute;digo (CID10)<br>
            <span style="font-size:8.5px; border:1px solid #000; padding:1px 4px; font-family:monospace; background:#fff;">B 65.9</span>
          </div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">3</span> DATA DA NOTIFICA&Ccedil;&Atilde;O</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(data.dataNotificacao), 8)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.4;">
          <div class="ct"><span class="cn">4</span> UF</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(data.ufNotificacao || 'PA', 2)}</div>
        </div>
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct"><span class="cn">5</span> MUNIC&Iacute;PIO DE NOTIFICA&Ccedil;&Atilde;O</div>
          <div class="cv">${data.munNotificacao || 'MARABA'}</div>
        </div>
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct">C&Oacute;DIGO (IBGE)</div>
          <div class="cv" style="padding-top:3px;">${splitDigits('1504208', 7)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:2.2;">
          <div class="ct"><span class="cn">6</span> UNIDADE DE SA&Uacute;DE (OU OUTRA FONTE NOTIFICADORA)</div>
          <div class="cv">${unitName}</div>
        </div>
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct">C&Oacute;DIGO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(cnesCode, 7)}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">7</span> DATA DOS PRIMEIROS SINTOMAS</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(data.symptomsDate), 8)}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- BLOCO 2: NOTIFICAÇÃO INDIVIDUAL -->
  <div class="sn-block">
    <div class="sn-sidebar">Notifica&ccedil;&atilde;o Individual</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="flex:3.0;">
          <div class="ct"><span class="cn">8</span> NOME DO PACIENTE</div>
          <div class="cv" style="font-size:10px; font-weight:900;">${data.patientName || 'Nao informado'}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">9</span> DATA DE NASCIMENTO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(data.patientBirthDate), 8)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.9;">
          <div class="ct"><span class="cn">10</span> (OU) IDADE</div>
          <div style="display:flex; align-items:center; gap:3px; margin-top:2px;">
            <div>${splitDigits(data.patientAge || '', 3, true)}</div>
            <div class="single-box">${data.patientAge ? '4' : '&nbsp;'}</div>
            <div style="font-size:5px; line-height:1.0; font-weight:bold; margin-left:2px;">
              1 - Hora<br>2 - Dia<br>3 - M&ecirc;s<br>4 - Ano
            </div>
          </div>
        </div>
        <div class="sn-cell" style="position:relative; flex:0.7;">
          <div class="ct"><span class="cn">11</span> SEXO</div>
          <div style="font-size:5.5px; line-height:1.1; margin-top:2px;">
            M - Masculino<br>F - Feminino<br>I - Ignorado
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">
            ${sexCode}
          </div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">12</span> GESTANTE</div>
          <div style="font-size:5.2px; line-height:1.1; margin-top:2px;">
            1-1&ordm;Trimestre &nbsp;&nbsp; 2-2&ordm;Trimestre &nbsp;&nbsp; 3-3&ordm;Trimestre<br>
            4-Idade gestacional Ignorada &nbsp;&nbsp; 5-N&atilde;o &nbsp;&nbsp; 6-N&atilde;o se aplica<br>
            9-Ignorado
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">
            ${pregnantCode}
          </div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.3;">
          <div class="ct"><span class="cn">13</span> RA&Ccedil;A/COR</div>
          <div style="font-size:5.5px; line-height:1.1; margin-top:2px;">
            1-Branca &nbsp;&nbsp; 2-Preta &nbsp;&nbsp; 3-Amarela<br>
            4-Parda &nbsp;&nbsp; 5-Ind&iacute;gena &nbsp;&nbsp; 9-Ignorado
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">
            ${raceCode}
          </div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative;">
          <div class="ct"><span class="cn">14</span> ESCOLARIDADE</div>
          <div style="font-size:5px; line-height:1.2; margin-top:2px; padding-right:25px;">
            0-Analfabeto &nbsp;&nbsp; 1-1&ordf; a 4&ordf; s&eacute;rie incompleta do EF &nbsp;&nbsp; 2-4&ordf; s&eacute;rie completa do EF<br>
            3-5&ordf; &agrave; 8&ordf; s&eacute;rie incompleta do EF &nbsp;&nbsp; 4-Ensino fundamental completo &nbsp;&nbsp; 5-Ensino m&eacute;dio incompleto<br>
            6-Ensino m&eacute;dio completo &nbsp;&nbsp; 7-Educa&ccedil;&atilde;o superior incompleta &nbsp;&nbsp; 8-Educa&ccedil;&atilde;o superior completa &nbsp;&nbsp; 9-Ignorado &nbsp;&nbsp; 10-N&atilde;o se aplica
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);">
            ${schoolCode}
          </div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:2.2;">
          <div class="ct"><span class="cn">15</span> N&Uacute;MERO DO CART&Atilde;O SUS</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(data.patientCns || '', 15)}</div>
        </div>
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct"><span class="cn">16</span> NOME DA M&Atilde;E</div>
          <div class="cv" style="font-size:9px;">${data.patientMotherName || 'Nao informada'}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- BLOCO 3: DADOS DE RESIDÊNCIA -->
  <div class="sn-block">
    <div class="sn-sidebar">Dados de Resid&ecirc;ncia</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.35;">
          <div class="ct"><span class="cn">17</span> UF</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(data.patientUf || 'PA', 2)}</div>
        </div>
        <div class="sn-cell" style="flex:1.7;">
          <div class="ct"><span class="cn">18</span> MUNIC&Iacute;PIO DE RESID&Ecirc;NCIA</div>
          <div class="cv">${data.patientMunicipality || 'MARABA'}</div>
        </div>
        <div class="sn-cell" style="flex:0.9;">
          <div class="ct">C&Oacute;DIGO (IBGE)</div>
          <div class="cv" style="padding-top:3px;">${splitDigits('1504208', 7)}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">19</span> DISTRITO</div>
          <div class="cv">${data.patientDistrict || ''}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.5;">
          <div class="ct"><span class="cn">20</span> BAIRRO</div>
          <div class="cv">${data.patientNeighborhood || 'Nao informado'}</div>
        </div>
        <div class="sn-cell" style="flex:2.5;">
          <div class="ct"><span class="cn">21</span> LOGRADOURO (RUA, AVENIDA,...)</div>
          <div class="cv">${data.patientAddress || 'Nao informado'}</div>
        </div>
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct">C&Oacute;DIGO</div>
          <div class="cv"></div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct"><span class="cn">22</span> N&Uacute;MERO</div>
          <div class="cv">${data.patientNumber || 'S/N'}</div>
        </div>
        <div class="sn-cell" style="flex:1.6;">
          <div class="ct"><span class="cn">23</span> COMPLEMENTO (APTO., CASA,...)</div>
          <div class="cv">${data.patientComplement || ''}</div>
        </div>
        <div class="sn-cell" style="flex:1.6;">
          <div class="ct"><span class="cn">24</span> GEO CAMPO 1</div>
          <div class="cv"></div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct"><span class="cn">25</span> GEO CAMPO 2</div>
          <div class="cv"></div>
        </div>
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct"><span class="cn">26</span> PONTO DE REFER&Ecirc;NCIA</div>
          <div class="cv">${data.patientRef || ''}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">27</span> CEP</div>
          <div class="cv" style="padding-top:3px;">${formatCepDigits(data.patientCep)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.6;">
          <div class="ct"><span class="cn">28</span> (DDD) TELEFONE</div>
          <div class="cv" style="padding-top:3px;">${splitDigits((data.patientPhone || '').replace(/\D/g,''), 11)}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">29</span> ZONA</div>
          <div style="font-size:6px; line-height:1.1; margin-top:2px;">
            1 - Urbana &nbsp;&nbsp;&nbsp;&nbsp; 2 - Rural &nbsp;&nbsp;&nbsp;&nbsp; 3 - Periurbana &nbsp;&nbsp;&nbsp;&nbsp; 9 - Ignorado
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">
            ${zoneCode}
          </div>
        </div>
        <div class="sn-cell" style="flex:0.9;">
          <div class="ct"><span class="cn">30</span> PA&Iacute;S (SE RESID. FORA)</div>
          <div class="cv">${data.patientCountry || ''}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- DADOS COMPLEMENTARES DO CASO -->
  <div style="background:#e6e6e6; font-size:8px; font-weight:bold; text-align:center; padding:2px; border:1px solid #000; border-bottom:none;">
    Dados Complementares do Caso
  </div>

  <!-- BLOCO 4: ANTECEDENTES EPIDEMIOLÓGICOS / LABORATÓRIO / TRATAMENTO -->
  <div class="sn-block">
    <div class="sn-sidebar" style="font-size:6px;">Ant. Epid. / Dados do Laborat&oacute;rio / Tratamento</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct"><span class="cn">31</span> DATA DA INVESTIGA&Ccedil;&Atilde;O</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.dataInvestigacao), 8)}</div>
        </div>
        <div class="sn-cell" style="flex:2.8;">
          <div class="ct"><span class="cn">32</span> OCUPA&Ccedil;&Atilde;O</div>
          <div class="cv">${cs.occupation || ''}</div>
        </div>
      </div>

      <div class="sn-row">
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct"><span class="cn">33</span> DATA DA COPROSCOPIA</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.dataCoproscopia), 8)}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.2;">
          <div class="ct"><span class="cn">34</span> AN&Aacute;LISE QUANTITATIVA</div>
          <div style="font-size:5px; margin-top:2px;">0 - 0 (zero) &nbsp;&nbsp; 1 - 1 (um) ou mais ovos</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.analiseQuant || '0'}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.2;">
          <div class="ct"><span class="cn">35</span> AN&Aacute;LISE QUALITATIVA</div>
          <div style="font-size:5px; margin-top:2px;">1-positivo &nbsp; 2-negativo &nbsp; 3-N/realiz</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.analiseQual || '3'}</div>
        </div>
      </div>

      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.2;">
          <div class="ct"><span class="cn">36</span> OUTROS</div>
          <div style="font-size:5px; margin-top:2px;">1-positivo &nbsp; 2-negativo &nbsp; 3-N/realiz</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.outrosQual || '3'}</div>
        </div>
        <div class="sn-cell" style="flex:2.4;">
          <div class="ct"><span class="cn">37</span> OUTROS EXAMES (ESPECIFICAR)</div>
          <div class="cv">${cs.outrosEspecificar || ''}</div>
        </div>
      </div>

      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">38</span> FEZ TRATAMENTO?</div>
          <div style="font-size:5px; line-height:1.1; margin-top:2px;">
            1-Sim-Praziquantel &nbsp; 2-Sim-Oxamniquine<br>
            3-N&atilde;o &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9-Ignorado
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.fezTratamento || '9'}</div>
        </div>
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct"><span class="cn">39</span> DATA DO TRATAMENTO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.dataTratamento), 8)}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">40</span> CASO N&Atilde;O TENHA FEITO TRAT., MOTIVO?</div>
          <div style="font-size:5px; line-height:1.1; margin-top:2px;">
            1-Contra Indica&ccedil;&atilde;o &nbsp; 2-Recusa<br>
            3-Ausente &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9-Ignorado
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.motivoNaoTratamento || '9'}</div>
        </div>
      </div>

      <div class="sn-row">
        <div class="sn-cell" style="flex:2.2;">
          <div class="ct"><span class="cn">41</span> RESULTADO AN&Aacute;LISE VERIFICA&Ccedil;&Atilde;O DE CURA</div>
          <div style="font-size:5px; margin-top:1px;">0-0 (zero) &nbsp;&nbsp; 1-1 ou mais ovos &nbsp;&nbsp; 2-N&atilde;o realizado</div>
          <div style="display:flex; justify-content:space-around; align-items:center; font-size:6px; margin-top:2px;">
            <span>1&ordf;amostra ${singleBox(cs.cura1Amostra || '2')}</span>
            <span>2&ordf;amostra ${singleBox(cs.cura2Amostra || '2')}</span>
            <span>3&ordf;amostra ${singleBox(cs.cura3Amostra || '2')}</span>
          </div>
        </div>
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct"><span class="cn">42</span> DATA RES. 3&ordf; AMOSTRA</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.curaData3Amostra), 8)}</div>
        </div>
      </div>

      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.0;">
          <div class="ct"><span class="cn">43</span> ESPECIFICAR FORMA CL&Iacute;NICA</div>
          <div style="font-size:5px; line-height:1.1; margin-top:2px;">
            1-Intestinal &nbsp;&nbsp; 2-Hepato Intestinal &nbsp;&nbsp; 3-Hepato Espl&ecirc;nica &nbsp;&nbsp; 4-Aguda &nbsp;&nbsp; 5-Outra (especificar)
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.formaClinica || '1'}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- BLOCO 5: CONCLUSÃO E LOCAL PROVÁVEL DE INFECÇÃO -->
  <div class="sn-block">
    <div class="sn-sidebar">Conclus&atilde;o</div>
    <div class="sn-content">
      <div style="background:#e6e6e6; font-size:7.5px; font-weight:bold; padding:2px 5px; border-bottom:1px solid #000;">
        Local Prov&aacute;vel de Infec&ccedil;&atilde;o
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:2.0;">
          <div class="ct"><span class="cn">44</span> O CASO &Eacute; AUT&Oacute;CTONE DO MUNIC&Iacute;PIO DE RESID&Ecirc;NCIA?</div>
          <div style="font-size:6px; margin-top:2px;">1-Sim &nbsp;&nbsp; 2-N&atilde;o &nbsp;&nbsp; 3-Indeterminado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.autoctone || '1'}</div>
        </div>
        <div class="sn-cell" style="flex:0.4;">
          <div class="ct"><span class="cn">45</span> UF</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(cs.infeccaoUf || 'PA', 2)}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">46</span> PA&Iacute;S</div>
          <div class="cv">${cs.infeccaoPais || 'Brasil'}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct"><span class="cn">47</span> MUNIC&Iacute;PIO</div>
          <div class="cv">${cs.infeccaoMun || ''}</div>
        </div>
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct">C&Oacute;DIGO (IBGE)</div>
          <div class="cv" style="padding-top:3px;">${splitDigits('', 7)}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">48</span> DISTRITO</div>
          <div class="cv">${cs.infeccaoDist || ''}</div>
        </div>
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct"><span class="cn">49</span> BAIRRO</div>
          <div class="cv">${cs.infeccaoBairro || ''}</div>
        </div>
      </div>

      <div class="sn-row">
        <div class="sn-cell" style="flex:2.0;">
          <div class="ct"><span class="cn">50</span> NOME DA PROPRIEDADE (SE &Aacute;REA RURAL)</div>
          <div class="cv">${cs.infeccaoPropriedade || ''}</div>
        </div>
        <div class="sn-cell" style="flex:2.0;">
          <div class="ct"><span class="cn">51</span> NOME DA COLE&Ccedil;&Atilde;O H&Iacute;DRICA</div>
          <div class="cv">${cs.infeccaoHidrica || ''}</div>
        </div>
      </div>

      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.2;">
          <div class="ct"><span class="cn">52</span> DOEN&Ccedil;A RELACIONADA AO TRABALHO?</div>
          <div style="font-size:6px; margin-top:2px;">1-Sim &nbsp;&nbsp; 2-N&atilde;o &nbsp;&nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.trabalho || '2'}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:2.0;">
          <div class="ct"><span class="cn">53</span> EVOLU&Ccedil;&Atilde;O DO CASO</div>
          <div style="font-size:5px; line-height:1.1; margin-top:2px;">
            1-Cura &nbsp; 2-N&atilde;o Cura &nbsp; 3-&Oacute;bito por esquistossomose<br>
            4-&Oacute;bito por outras causas &nbsp; 9-Ignorado
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.evolucao || '1'}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">54</span> DATA DO &Oacute;BITO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.dataObito), 8)}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">55</span> DATA DO ENCERRAMENTO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.dataEncerramento || data.dataNotificacao), 8)}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- BLOCO 6: INVESTIGADOR -->
  <div class="sn-block">
    <div class="sn-sidebar">Investigador</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="flex:2.0;">
          <div class="ct">MUNIC&Iacute;PIO/UNIDADE DE SA&Uacute;DE</div>
          <div class="cv">${data.munNotificacao || 'MARABA'} / ${unitName}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct">C&Oacute;D. DA UNID. DE SA&Uacute;DE</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(cnesCode, 7)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct">NOME</div>
          <div class="cv" style="font-weight:900; font-size:10px;">${data.notificatorName || 'Profissional de Saude'}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct">FUN&Ccedil;&Atilde;O</div>
          <div class="cv">Profissional de Saude</div>
        </div>
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct">ASSINATURA</div>
          <div class="cv" style="border-bottom:1px dotted #555; margin-top:4px; min-height:14px;"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer-info">
    <span>Esquistossomose</span>
    <span>Sinan on</span>
    <span>SVS 08/10/2009</span>
  </div>
</div>
        `;
    }

    function generatePage1MalariaHtml(data) {
        return `
<div class="sinan-page">
  <div class="sn-header">
    <div class="sn-header-left">
      Rep&uacute;blica Federativa do Brasil<br>
      Minist&eacute;rio da Sa&uacute;de<br>
      Secretaria de Vigil&acirc;ncia em Sa&uacute;de
    </div>
    <div class="sn-header-center">
      <p class="sn-sinan">SINAN</p>
      <p class="sn-title">SISTEMA DE INFORMA&Ccedil;&Atilde;O DE AGRAVOS DE NOTIFICA&Ccedil;&Atilde;O</p>
      <p class="sn-subtitle">FICHA DE INVESTIGAÇÃO MALÁRIA</p>
    </div>
    <div class="sn-header-right">
      <span class="sn-num-label">N&ordm;</span>
      <div class="sn-num-box">${data.sinan_number || '---.---'}</div>
    </div>
  </div>

  <!-- BLOCO 1: DADOS GERAIS -->
  <div class="sn-block">
    <div class="sn-sidebar">Dados Gerais</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1; min-height:24px;">
          <div class="ct"><span class="cn">1</span> TIPO DE NOTIFICA&Ccedil;&Atilde;O</div>
          <div style="font-size:7.5px; margin-top:2px;">
            1 - Negativa &nbsp;&nbsp;&nbsp;&nbsp; 2 - Individual &nbsp;&nbsp;&nbsp;&nbsp; 3 - Surto &nbsp;&nbsp;&nbsp;&nbsp; 4 - Inqu&eacute;rito Tracoma
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);">
            ${tipoNotif}
          </div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:2.5;">
          <div class="ct"><span class="cn">2</span> AGRAVO/DOEN&Ccedil;A</div>
          <div style="display:flex; justify-content:space-between; align-items:center; width:100%; font-size:11px; font-weight:900;">
            <span>MAL&Aacute;RIA</span>
            <span style="font-size:7px; font-weight:bold; display:inline-flex; align-items:center;">
              C&oacute;digo (CID10) &nbsp; <span style="display:inline-block; font-size:9px; font-weight:bold; letter-spacing:2px; border:1px solid #000; padding:1px 2px; background:#fff; margin-left:3px; font-family:monospace; line-height:1;">B 5 4</span>
            </span>
          </div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">3</span> DATA DA NOTIFICA&Ccedil;&Atilde;O</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(data.dataNotificacao), 8)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.4;">
          <div class="ct"><span class="cn">4</span> UF</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(data.ufNotificacao || 'PA', 2)}</div>
        </div>
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct"><span class="cn">5</span> MUNICIPIO DE NOTIFICACAO</div>
          <div class="cv">${data.munNotificacao || 'MARABA'}</div>
        </div>
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct">CODIGO (IBGE)</div>
          <div class="cv" style="padding-top:3px;">${splitDigits('1504208', 7)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:2.2;">
          <div class="ct"><span class="cn">6</span> UNIDADE DE SAUDE (OU OUTRA FONTE NOTIFICADORA)</div>
          <div class="cv">${unitName}</div>
        </div>
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct">CODIGO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(cnesCode, 7)}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">7</span> DATA DOS PRIMEIROS SINTOMAS</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(data.symptomsDate), 8)}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- BLOCO 2: NOTIFICACAO INDIVIDUAL -->
  <div class="sn-block">
    <div class="sn-sidebar">Notificacao Individual</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="flex:3.0;">
          <div class="ct"><span class="cn">8</span> NOME DO PACIENTE</div>
          <div class="cv" style="font-size:10px; font-weight:900;">${data.patientName || 'Nao informado'}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">9</span> DATA DE NASCIMENTO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(data.patientBirthDate), 8)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.9;">
          <div class="ct"><span class="cn">10</span> (OU) IDADE</div>
          <div style="display:flex; align-items:center; gap:3px; margin-top:2px;">
            <div>${splitDigits(data.patientAge || '', 3, true)}</div>
            <div class="single-box">${data.patientAge ? '4' : '&nbsp;'}</div>
            <div style="font-size:5px; line-height:1.0; font-weight:bold; margin-left:2px;">
              1 - Hora<br>
              2 - Dia<br>
              3 - M&ecirc;s<br>
              4 - Ano
            </div>
          </div>
        </div>
        <div class="sn-cell" style="position:relative; flex:0.7;">
          <div class="ct"><span class="cn">11</span> SEXO</div>
          <div style="font-size:5.5px; line-height:1.1; margin-top:2px;">
            M - Masculino<br>
            F - Feminino<br>
            I - Ignorado
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">
            ${sexCode}
          </div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">12</span> GESTANTE</div>
          <div style="font-size:5.2px; line-height:1.1; margin-top:2px;">
            1-1&ordm;Trimestre &nbsp;&nbsp; 2-2&ordm;Trimestre &nbsp;&nbsp; 3-3&ordm;Trimestre<br>
            4-Idade gestacional Ignorada &nbsp;&nbsp; 5-N&atilde;o &nbsp;&nbsp; 6-N&atilde;o se aplica<br>
            9-Ignorado
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">
            ${pregnantCode}
          </div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.3;">
          <div class="ct"><span class="cn">13</span> RACA/COR</div>
          <div style="font-size:5.5px; line-height:1.1; margin-top:2px;">
            1-Branca &nbsp;&nbsp; 2-Preta &nbsp;&nbsp; 3-Amarela<br>
            4-Parda &nbsp;&nbsp; 5-Ind&iacute;gena &nbsp;&nbsp; 9-Ignorado
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">
            ${raceCode}
          </div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative;">
          <div class="ct"><span class="cn">14</span> ESCOLARIDADE</div>
          <div style="font-size:5px; line-height:1.2; margin-top:2px; padding-right:25px;">
            0-Analfabeto &nbsp;&nbsp; 1-1&ordf; a 4&ordf; s&eacute;rie incompleta do EF (antigo prim&aacute;rio ou 1&ordm; grau) &nbsp;&nbsp; 2-4&ordf; s&eacute;rie completa do EF (antigo prim&aacute;rio ou 1&ordm; grau)<br>
            3-5&ordf; &agrave; 8&ordf; s&eacute;rie incompleta do EF (antigo gin&aacute;sio ou 1&ordm; grau) &nbsp;&nbsp; 4-Ensino fundamental completo (antigo gin&aacute;sio ou 1&ordm; grau) &nbsp;&nbsp; 5-Ensino m&eacute;dio incompleto (antigo colegial ou 2&ordm; grau)<br>
            6-Ensino m&eacute;dio completo (antigo colegial ou 2&ordm; grau) &nbsp;&nbsp; 7-Educa&ccedil;&atilde;o superior incompleta &nbsp;&nbsp; 8-Educa&ccedil;&atilde;o superior completa &nbsp;&nbsp; 9-Ignorado &nbsp;&nbsp; 10-N&atilde;o se aplica
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);">
            ${schoolCode}
          </div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:2.2;">
          <div class="ct"><span class="cn">15</span> NUMERO DO CARTAO SUS</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(data.patientCns || '', 15)}</div>
        </div>
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct"><span class="cn">16</span> NOME DA MAE</div>
          <div class="cv" style="font-size:9px;">${data.patientMotherName || 'Nao informada'}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- BLOCO 3: DADOS DE RESIDENCIA -->
  <div class="sn-block">
    <div class="sn-sidebar">Dados de Residencia</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.35;">
          <div class="ct"><span class="cn">17</span> UF</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(data.patientUf || 'PA', 2)}</div>
        </div>
        <div class="sn-cell" style="flex:1.7;">
          <div class="ct"><span class="cn">18</span> MUNICIPIO DE RESIDENCIA</div>
          <div class="cv">${data.patientMunicipality || 'MARABA'}</div>
        </div>
        <div class="sn-cell" style="flex:0.9;">
          <div class="ct">CODIGO (IBGE)</div>
          <div class="cv" style="padding-top:3px;">${splitDigits('1504208', 7)}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">19</span> DISTRITO</div>
          <div class="cv">${data.patientDistrict || ''}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.5;">
          <div class="ct"><span class="cn">20</span> BAIRRO</div>
          <div class="cv">${data.patientNeighborhood || 'Nao informado'}</div>
        </div>
        <div class="sn-cell" style="flex:2.5;">
          <div class="ct"><span class="cn">21</span> LOGRADOURO (RUA, AVENIDA,...)</div>
          <div class="cv">${data.patientAddress || 'Nao informado'}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct"><span class="cn">22</span> NUMERO</div>
          <div class="cv">${data.patientNumber || 'S/N'}</div>
        </div>
        <div class="sn-cell" style="flex:1.6;">
          <div class="ct"><span class="cn">23</span> COMPLEMENTO (APTO., CASA,...)</div>
          <div class="cv">${data.patientComplement || ''}</div>
        </div>
        <div class="sn-cell" style="flex:1.6;">
          <div class="ct"><span class="cn">24</span> GEO CAMPO 1</div>
          <div class="cv"></div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct"><span class="cn">25</span> GEO CAMPO 2</div>
          <div class="cv"></div>
        </div>
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct"><span class="cn">26</span> PONTO DE REFERENCIA</div>
          <div class="cv">${data.patientRef || ''}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">27</span> CEP</div>
          <div class="cv" style="padding-top:3px;">${formatCepDigits(data.patientCep)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.6;">
          <div class="ct"><span class="cn">28</span> (DDD) TELEFONE</div>
          <div class="cv" style="padding-top:3px;">${splitDigits((data.patientPhone || '').replace(/\\D/g,''), 11)}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">29</span> ZONA</div>
          <div style="font-size:6px; line-height:1.1; margin-top:2px;">
            1 - Urbana &nbsp;&nbsp;&nbsp;&nbsp; 2 - Rural &nbsp;&nbsp;&nbsp;&nbsp; 3 - Periurbana &nbsp;&nbsp;&nbsp;&nbsp; 9 - Ignorado
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">
            ${zoneCode}
          </div>
        </div>
        <div class="sn-cell" style="flex:0.9;">
          <div class="ct"><span class="cn">30</span> PAIS (SE RESID. FORA)</div>
          <div class="cv">${data.patientCountry || ''}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- BLOCO 4: DADOS COMPLEMENTARES DO CASO -->
  <div class="sn-block">
    <div class="sn-sidebar">Dados do Exame</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct"><span class="cn">31</span> DATA DA INVESTIGAÇÃO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.dataInvestigacao || ''), 8)}</div>
        </div>
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct"><span class="cn">32</span> OCUPAÇÃO</div>
          <div class="cv">${cs.occupation || '&nbsp;'}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:2.0;">
          <div class="ct"><span class="cn">33</span> PRINCIPAL ATIVIDADE NOS ÚLTIMOS 15 DIAS</div>
          <div style="font-size:4.8px; line-height:1.0; margin-top:2px; padding-right:20px;">
            1-Agric. &nbsp; 2-Pecu. &nbsp; 3-Dom. &nbsp; 4-Tur. &nbsp; 5-Gar. &nbsp; 6-Expl.veg. &nbsp; 7-Caça/pesca<br>
            8-Const.estrad &nbsp; 9-Miner. &nbsp; 10-Viajante &nbsp; 11-Outros &nbsp; 12-Motorista &nbsp; 99-Ign
          </div>
          <div class="double-box" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);">
            <span>${String(cs.atividade || '99').padStart(2, '0')[0]}</span>
            <span>${String(cs.atividade || '99').padStart(2, '0')[1]}</span>
          </div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">34</span> TIPO DE LÂMINA</div>
          <div style="font-size:5.5px; line-height:1.1; margin-top:2px; padding-right:20px;">
            1 - BP (Busca Passiva) &nbsp;&nbsp;&nbsp;&nbsp; 2 - BA (Busca Ativa) &nbsp;&nbsp;&nbsp;&nbsp; 3 - LVC
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);">
            ${cs.tipoLamina || '1'}
          </div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">35</span> PRESENÇA DE SINTOMAS</div>
          <div style="font-size:6px; line-height:1.1; margin-top:2px; padding-right:20px;">
            1 - Com sintomas &nbsp;&nbsp;&nbsp;&nbsp; 2 - Sem sintomas
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);">
            ${cs.sintomas || '1'}
          </div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">36</span> DATA DO EXAME</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.dataExame || ''), 8)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:2.5;">
          <div class="ct"><span class="cn">37</span> RESULTADO DO EXAME</div>
          <div style="font-size:4.8px; line-height:1.1; margin-top:2px; padding-right:20px;">
            1-Neg &nbsp; 2-F(Falcip) &nbsp; 3-F+FG &nbsp; 4-V(Vivax) &nbsp; 5-F+V &nbsp; 6-V+FG &nbsp; 7-FG(Gamet) &nbsp; 8-M(Malariae) &nbsp; 9-F+M &nbsp; 10-Outras
          </div>
          <div class="double-box" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);">
            <span>${String(cs.resultadoExame || '01').padStart(2, '0')[0]}</span>
            <span>${String(cs.resultadoExame || '01').padStart(2, '0')[1]}</span>
          </div>
        </div>
        <div class="sn-cell" style="flex:1.5;">
          <div class="ct"><span class="cn">38</span> PARASITOS POR mm³</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(cs.parasitos || '', 6, false)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">39</span> PARASITEMIA EM "CRUZES"</div>
          <div style="font-size:5px; line-height:1.1; margin-top:2px; padding-right:20px;">
            1 - &lt; +/2 &nbsp;&nbsp;&nbsp;&nbsp; 2 - +/2 &nbsp;&nbsp;&nbsp;&nbsp; 3 - + &nbsp;&nbsp;&nbsp;&nbsp; 4 - ++ &nbsp;&nbsp;&nbsp;&nbsp; 5 - +++ &nbsp;&nbsp;&nbsp;&nbsp; 6 - ++++
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);">
            ${cs.parasitemiaCruzes || '1'}
          </div>
        </div>
        <div class="sn-cell" style="position:relative; flex:2.5;">
          <div class="ct"><span class="cn">40</span> ESQUEMA DE TRATAMENTO UTILIZADO</div>
          <div style="font-size:4.8px; line-height:1.0; margin-top:2px; padding-right:25px;">
            1-Pv 3d+Pri 7d &nbsp; 2-Pf Quin 3d+Dox 5d+Pri &nbsp; 3-Pv+Pf Mef+Pri &nbsp; 4-Pm Clo 3d &nbsp; 5-Pv Criança<br>
            6-Pf Mef+Pri &nbsp; 7-Pf Quin 7d &nbsp; 8-Pf Criança &nbsp; 9-Pv+Pf Quin+Dox+Pri &nbsp; 12-Pf Artem+Lum &nbsp; 99-Out
          </div>
          <div class="double-box" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);">
            <span>${String(cs.esquemaTratamento || '01').padStart(2, '0')[0]}</span>
            <span>${String(cs.esquemaTratamento || '01').padStart(2, '0')[1]}</span>
          </div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">41</span> DATA INÍCIO DO TRATAMENTO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.dataInicioTrat || ''), 8)}</div>
        </div>
        <div class="sn-cell" style="flex:3.0; border-right:none; background:#fafafa;"></div>
      </div>
    </div>
  </div>

  <div class="footer-info">
    <span>Malária</span>
    <span>Sinan NET</span>
    <span>SVS 01/01/2010</span>
  </div>
</div>
`;
    }

    function generatePage2MalariaHtml(data) {
        const sexDigit = sexCode === 'M' ? '1' : (sexCode === 'F' ? '2' : '&nbsp;');

        return `
<div class="sinan-page">
  <div class="pg2-header">
    <p class="pg2-title">DADOS COMPLEMENTARES DO CASO - MALÁRIA</p>
    <p class="pg2-sub">(ANOTAR TODOS OS DADOS DISPONÍVEIS NO MOMENTO DA NOTIFICACAO)</p>
  </div>

  <!-- BLOCO CONCLUSAO -->
  <div class="sn-block">
    <div class="sn-sidebar">Conclusão</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.2;">
          <div class="ct"><span class="cn">42</span> CLASSIFICAÇÃO FINAL</div>
          <div style="font-size:7px; line-height:1.2; margin-top:2px;">
            1 - Confirmado &nbsp;&nbsp;&nbsp;&nbsp; 2 - Descartado
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);">
            ${cs.classificacaoFinal || '1'}
          </div>
        </div>
        <div class="sn-cell" style="position:relative; flex:2.8;">
          <div class="ct"><span class="cn">43</span> CASO É AUTÓCTONE DO MUNICÍPIO DE RESIDÊNCIA?</div>
          <div style="font-size:7px; line-height:1.2; margin-top:2px;">
            1 - Sim &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 - Não &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3 - Indeterminado
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);">
            ${cs.autoctone || '1'}
          </div>
        </div>
      </div>
      <div class="sn-row" style="background:#f0f0f0; padding:3px; font-weight:bold; font-size:7.5px; border-bottom:1px solid #000;">
        &nbsp; LOCAL PROVÁVEL DA FONTE DE INFECÇÃO (no período de 15 dias)
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.5;">
          <div class="ct"><span class="cn">44</span> UF</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(cs.ufInfeccao || 'PA', 2)}</div>
        </div>
        <div class="sn-cell" style="flex:1.5;">
          <div class="ct"><span class="cn">45</span> PAÍS PROVÁVEL DE INFECÇÃO</div>
          <div class="cv">${cs.paisInfeccao || 'Brasil'}</div>
        </div>
        <div class="sn-cell" style="flex:2.0;">
          <div class="ct"><span class="cn">46</span> MUNICÍPIO PROVÁVEL DA INFECÇÃO</div>
          <div class="cv">${cs.municipioInfeccao || 'MARABA'}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct">CÓDIGO (IBGE)</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(cs.ibgeInfeccao || '1504208', 7)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">47</span> DISTRITO</div>
          <div class="cv">${cs.distritoInfeccao || ''}</div>
        </div>
        <div class="sn-cell" style="flex:1.5;">
          <div class="ct"><span class="cn">48</span> BAIRRO</div>
          <div class="cv">${cs.bairroInfeccao || ''}</div>
        </div>
        <div class="sn-cell" style="flex:2.5;">
          <div class="ct"><span class="cn">49</span> LOCALIDADE PROVÁVEL DA INFECÇÃO</div>
          <div class="cv">${cs.localidadeInfeccao || ''}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.5;">
          <div class="ct"><span class="cn">50</span> DATA DE ENCERRAMENTO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.dataEncerramento || ''), 8)}</div>
        </div>
        <div class="sn-cell" style="flex:2.5; background:#fafafa; border-right:none;"></div>
      </div>
    </div>
  </div>

  <!-- DADOS OBSERVACOES -->
  <div class="sn-block" style="margin-top:5px; min-height:80px; flex-direction:column; padding:5px 8px;">
    <div style="font-size:7px; font-weight:bold; text-transform:uppercase; margin-bottom:5px;">Observações Adicionais:</div>
    <div style="font-size:9px; line-height:1.4; color:#000; min-height:60px; white-space:pre-wrap;">${cs.obs || ''}</div>
  </div>

  <!-- LINHA DE CORTE DA NOTIFICACAO -->
  <div style="border-top:1px dashed #000; margin:15px 0; position:relative; text-align:center;">
    <span style="position:absolute; top:-6px; left:50%; transform:translateX(-50%); background:#fff; padding:0 10px; font-size:8px; font-weight:bold; text-transform:uppercase; color:#333;">
      <i class="fas fa-scissors"></i> Recortar Aqui
    </span>
  </div>

  <!-- COMPROVANTE DE ENTREGA AO PACIENTE -->
  <div class="sn-block" style="margin-top:10px;">
    <div class="sn-sidebar" style="font-size:6.5px; writing-mode:vertical-rl; padding:1px; width:22px;">SMS-UF / Município</div>
    <div class="sn-content">
      <div class="sn-row" style="background:#f0f0f0; border-bottom:1.5px solid #000; font-weight:bold; font-size:8.5px; padding:3px 8px; display:flex; justify-content:space-between; align-items:center;">
        <span>COMPROVANTE DE RESULTADO DO EXAME PARA SER ENTREGUE AO PACIENTE</span>
        <span style="font-size:7px; border:1px solid #000; padding:1px 3px; background:#fff;">MALÁRIA</span>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:2.8;">
          <div class="ct">Nome do Paciente:</div>
          <div class="cv" style="font-size:9.5px; font-weight:900;">${data.patientName || 'Nao informado'}</div>
        </div>
        <div class="sn-cell" style="flex:0.6;">
          <div class="ct">Idade:</div>
          <div class="cv">${data.patientAge || ''}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:0.8;">
          <div class="ct">Sexo:</div>
          <div style="font-size:5px; line-height:1.0; margin-top:2px;">
            1 - Masc<br>2 - Fem
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);">
            ${sexDigit}
          </div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct">Nº da notificação</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(data.sinan_number || '', 8)}</div>
        </div>
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct">Data do exame</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.dataExame || ''), 8)}</div>
        </div>
        <div class="sn-cell" style="flex:1.6;">
          <div class="ct">Resultado do exame</div>
          <div class="cv" style="font-size:9px; font-weight:900;">
            ${cs.resultadoExame === '1' ? 'NEGATIVO' : 
              cs.resultadoExame === '2' ? 'P. FALCIPARUM' : 
              cs.resultadoExame === '3' ? 'P. FALCIPARUM + GAMETÓCITOS' : 
              cs.resultadoExame === '4' ? 'P. VIVAX' : 
              cs.resultadoExame === '5' ? 'P. FALCIPARUM + P. VIVAX' : 
              cs.resultadoExame === '6' ? 'P. VIVAX + GAMETÓCITOS FALCIP' : 
              cs.resultadoExame === '7' ? 'GAMETÓCITO FALCIPARUM ISOLADO' : 
              cs.resultadoExame === '8' ? 'P. MALARIAE' : 
              cs.resultadoExame === '9' ? 'P. FALCIPARUM + P. MALARIAE' : 
              cs.resultadoExame === '10' ? 'OUTRAS ESPÉCIES' : 'NÃO INFORMADO'}
          </div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:2.5;">
          <div class="ct">Matricula e nome do examinador:</div>
          <div class="cv">${cs.examinador || '&nbsp;'}</div>
        </div>
        <div class="sn-cell" style="flex:1.5; background:#fafafa; border-right:none;"></div>
      </div>
    </div>
  </div>

  <div class="footer-info">
    <span>Malária</span>
    <span>Comprovante de resultado do exame</span>
    <span>Sinan NET</span>
    <span>SVS</span>
    <span>01/01/2010</span>
  </div>
</div>
`;
    }

    function generatePage2Standard(data) {
        return `
<div class="sinan-page">
  <div class="pg2-header">
    <p class="pg2-title">DADOS COMPLEMENTARES</p>
    <p class="pg2-sub">(ANOTAR TODOS OS DADOS DISPONÍVEIS NO MOMENTO DA NOTIFICACAO)</p>
  </div>

  <!-- BLOCO 6: NOTIFICACAO INDIVIDUAL - DADOS COMPLEMENTARES -->
  <div class="sn-block">
    <div class="sn-sidebar">Notificacao Individual</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:2.0;">
          <div class="ct"><span class="cn">04</span> OBITO?</div>
          <div style="font-size:7px; line-height:1.1; margin-top:2px;">
            1 - Sim &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 - N&atilde;o &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9 - Ignorado
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">
            ${cs.obito || '9'}
          </div>
        </div>
        <div class="sn-cell" style="position:relative; flex:2.0;">
          <div class="ct"><span class="cn">05</span> CONTATO COM CASO SEMELHANTE?</div>
          <div style="font-size:7px; line-height:1.1; margin-top:2px;">
            1 - Sim &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 - N&atilde;o &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9 - Ignorado
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">
            ${cs.contato || '9'}
          </div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">06</span> PRESENCA DE EXANTEMA?</div>
          <div style="font-size:7px; line-height:1.1; margin-top:2px;">
            1 - Sim &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 - N&atilde;o &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9 - Ignorado
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">
            ${cs.exantema || '9'}
          </div>
        </div>
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct"><span class="cn">07</span> DATA DO INICIO DO EXANTEMA</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.exantemaDate||''), 8)}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.8;">
          <div class="ct"><span class="cn">08</span> PRESENCA DE PETEQUIAS OU SUFUSOES HEMORRAGICAS?</div>
          <div style="font-size:7px; line-height:1.1; margin-top:2px;">
            1 - Sim &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 - N&atilde;o &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9 - Ignorado
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">
            ${cs.petequias || '9'}
          </div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.0;">
          <div class="ct"><span class="cn">09</span> FOI REALIZADO LIQUOR?</div>
          <div style="font-size:7px; line-height:1.1; margin-top:2px;">
            1 - Sim &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 - N&atilde;o &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9 - Ignorado
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">
            ${cs.liquor || '9'}
          </div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:2.5;">
          <div class="ct"><span class="cn">11</span> O PACIENTE TOMOU VACINA CONTRA AGRAVO NOTIFICADO NESTE IMPRESSO?</div>
          <div style="font-size:7px; line-height:1.1; margin-top:2px;">
            1 - Sim &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 - N&atilde;o &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9 - Ignorado
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">
            ${cs.vacina || '9'}
          </div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">12</span> DATA DA ULTIMA DOSE TOMADA</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.vacinaDate||''), 8)}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.2;">
          <div class="ct"><span class="cn">13</span> OCORREU HOSPITALIZACAO?</div>
          <div style="font-size:7px; line-height:1.1; margin-top:2px;">
            1 - Sim &nbsp;&nbsp;&nbsp;&nbsp; 2 - N&atilde;o &nbsp;&nbsp;&nbsp;&nbsp; 9 - Ignorado
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">
            ${cs.hospitalizacao || '9'}
          </div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">14</span> DATA DA HOSPITALIZACAO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.hospitalizacaoDate||''), 8)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.35;">
          <div class="ct"><span class="cn">15</span> UF</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(cs.hospitalUf || '', 2)}</div>
        </div>
        <div class="sn-cell" style="flex:1.5;">
          <div class="ct"><span class="cn">16</span> MUNICIPIO DO HOSPITAL</div>
          <div class="cv">${cs.hospitalMun || ''}</div>
        </div>
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct">CODIGO (IBGE)</div>
          <div class="cv" style="padding-top:3px;">${splitDigits('', 7)}</div>
        </div>
        <div class="sn-cell" style="flex:2.0;">
          <div class="ct"><span class="cn">17</span> NOME DO HOSPITAL</div>
          <div class="cv">${cs.hospitalName || ''}</div>
        </div>
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct">CODIGO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits('', 7)}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- BLOCO 7: NOTIFICACAO SURTO - DADOS COMPLEMENTARES -->
  <div class="sn-block">
    <div class="sn-sidebar">Notificacao Surto</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell">
          <div class="ct"><span class="cn">18</span> HIPOTESES DIAGNOSTICAS NO MOMENTO DA NOTIFICACAO</div>
          <div class="cv" style="flex-direction:column; align-items:flex-start; gap:5px; padding:4px 0;">
            <div style="font-size:9.5px; font-weight:bold; width:100%;">
              1a Hipotese Diagnostica - CID 10: <span style="font-weight:900; border-bottom:1px solid #000; min-width:350px; display:inline-block;">${diseaseName} (${cid10})</span>
            </div>
            <div style="font-size:9.5px; font-weight:bold; width:100%;">
              2a Hipotese Diagnostica - CID 10: <span style="font-weight:900; border-bottom:1px solid #000; min-width:350px; display:inline-block;">&nbsp;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- BLOCO 8: LOCAL PROVAVEL DE INFECCAO -->
  <div class="sn-block">
    <div class="sn-sidebar">Local prov. infeccao</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell">
          <div class="ct"><span class="cn">19</span> LOCAL PROVAVEL DE INFECCAO (CLASSIFICACAO PROVISORIA)</div>
          <div class="fr" style="font-size:9.5px; font-weight:bold; gap:18px; padding:5px 0;">
            <div>Pais: <span style="border-bottom:1px solid #000; min-width:100px; display:inline-block;">BRASIL</span></div>
            <div>UF: <span style="border-bottom:1px solid #000; min-width:25px; display:inline-block;">${data.patientUf || 'PA'}</span></div>
            <div>Municipio: <span style="border-bottom:1px solid #000; min-width:100px; display:inline-block;">${data.patientMunicipality || 'MARABA'}</span></div>
            <div>Distrito: <span style="border-bottom:1px solid #000; min-width:50px; display:inline-block;">${data.patientDistrict || '&nbsp;'}</span></div>
            <div>Bairro: <span style="border-bottom:1px solid #000; min-width:100px; display:inline-block;">${data.patientNeighborhood || '---'}</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer-info">
    <span>Dados Complementares / Notificacao</span>
    <span>Sinan NET</span>
    <span>SVS 17/07/2006</span>
  </div>
</div>
`;
    }

    function generatePage1CustomHtml(data, title, cid, customBlockHtml) {
        const formattedCid = String(cid).split('').map(char => `<span style="display:inline-block; font-size:9px; font-weight:bold; letter-spacing:0px; border:1px solid #000; padding:1px 2px; background:#fff; margin-left:1px; font-family:monospace; line-height:1;">${char}</span>`).join('');
        return `
<div class="sinan-page">
  <div class="sn-header">
    <div class="sn-header-left">
      Rep&uacute;blica Federativa do Brasil<br>
      Minist&eacute;rio da Sa&uacute;de<br>
      Secretaria de Vigil&acirc;ncia em Sa&uacute;de
    </div>
    <div class="sn-header-center">
      <p class="sn-sinan">SINAN</p>
      <p class="sn-title">SISTEMA DE INFORMA&Ccedil;&Atilde;O DE AGRAVOS DE NOTIFICA&Ccedil;&Atilde;O</p>
      <p class="sn-subtitle">FICHA DE NOTIFICAÇÃO / INVESTIGAÇÃO</p>
    </div>
    <div class="sn-header-right">
      <span class="sn-num-label">N&ordm;</span>
      <div class="sn-num-box">${data.sinan_number || '---.---'}</div>
    </div>
  </div>

  <!-- BLOCO 1: DADOS GERAIS -->
  <div class="sn-block">
    <div class="sn-sidebar">Dados Gerais</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1; min-height:24px;">
          <div class="ct"><span class="cn">1</span> TIPO DE NOTIFICA&Ccedil;&Atilde;O</div>
          <div style="font-size:7.5px; margin-top:2px;">
            1 - Negativa &nbsp;&nbsp;&nbsp;&nbsp; 2 - Individual &nbsp;&nbsp;&nbsp;&nbsp; 3 - Surto &nbsp;&nbsp;&nbsp;&nbsp; 4 - Inqu&eacute;rito Tracoma
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);">
            ${tipoNotif}
          </div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:2.5;">
          <div class="ct"><span class="cn">2</span> AGRAVO/DOEN&Ccedil;A</div>
          <div style="display:flex; justify-content:space-between; align-items:center; width:100%; font-size:11px; font-weight:900;">
            <span>${title.toUpperCase()}</span>
            <span style="font-size:7px; font-weight:bold; display:inline-flex; align-items:center;">
              C&oacute;digo (CID10) &nbsp; ${formattedCid}
            </span>
          </div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">3</span> DATA DA NOTIFICA&Ccedil;&Atilde;O</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(data.dataNotificacao), 8)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.4;">
          <div class="ct"><span class="cn">4</span> UF</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(data.ufNotificacao || 'PA', 2)}</div>
        </div>
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct"><span class="cn">5</span> MUNICIPIO DE NOTIFICACAO</div>
          <div class="cv">${data.munNotificacao || 'MARABA'}</div>
        </div>
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct">CODIGO (IBGE)</div>
          <div class="cv" style="padding-top:3px;">${splitDigits('1504208', 7)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:2.2;">
          <div class="ct"><span class="cn">6</span> UNIDADE DE SAUDE (OU OUTRA FONTE NOTIFICADORA)</div>
          <div class="cv">${unitName}</div>
        </div>
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct">CODIGO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(cnesCode, 7)}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">7</span> DATA DOS PRIMEIROS SINTOMAS</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(data.symptomsDate), 8)}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- BLOCO 2: NOTIFICACAO INDIVIDUAL -->
  <div class="sn-block">
    <div class="sn-sidebar">Notificacao Individual</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="flex:3.0;">
          <div class="ct"><span class="cn">8</span> NOME DO PACIENTE</div>
          <div class="cv" style="font-size:10px; font-weight:900;">${data.patientName || 'Nao informado'}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">9</span> DATA DE NASCIMENTO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(data.patientBirthDate), 8)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.9;">
          <div class="ct"><span class="cn">10</span> (OU) IDADE</div>
          <div style="display:flex; align-items:center; gap:3px; margin-top:2px;">
            <div>${splitDigits(data.patientAge || '', 3, true)}</div>
            <div class="single-box">${data.patientAge ? '4' : '&nbsp;'}</div>
            <div style="font-size:5px; line-height:1.0; font-weight:bold; margin-left:2px;">
              1 - Hora<br>
              2 - Dia<br>
              3 - M&ecirc;s<br>
              4 - Ano
            </div>
          </div>
        </div>
        <div class="sn-cell" style="position:relative; flex:0.7;">
          <div class="ct"><span class="cn">11</span> SEXO</div>
          <div style="font-size:5.5px; line-height:1.1; margin-top:2px;">
            M - Masculino<br>
            F - Feminino<br>
            I - Ignorado
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">
            ${sexCode}
          </div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">12</span> GESTANTE</div>
          <div style="font-size:5.2px; line-height:1.1; margin-top:2px;">
            1-1&ordm;Trimestre &nbsp;&nbsp; 2-2&ordm;Trimestre &nbsp;&nbsp; 3-3&ordm;Trimestre<br>
            4-Idade gestacional Ignorada &nbsp;&nbsp; 5-N&atilde;o &nbsp;&nbsp; 6-N&atilde;o se aplica<br>
            9-Ignorado
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">
            ${pregnantCode}
          </div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.3;">
          <div class="ct"><span class="cn">13</span> RACA/COR</div>
          <div style="font-size:5.5px; line-height:1.1; margin-top:2px;">
            1-Branca &nbsp;&nbsp; 2-Preta &nbsp;&nbsp; 3-Amarela<br>
            4-Parda &nbsp;&nbsp; 5-Ind&iacute;gena &nbsp;&nbsp; 9-Ignorado
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">
            ${raceCode}
          </div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative;">
          <div class="ct"><span class="cn">14</span> ESCOLARIDADE</div>
          <div style="font-size:5px; line-height:1.2; margin-top:2px; padding-right:25px;">
            0-Analfabeto &nbsp;&nbsp; 1-1&ordf; a 4&ordf; s&eacute;rie incompleta do EF (antigo prim&aacute;rio ou 1&ordm; grau) &nbsp;&nbsp; 2-4&ordf; s&eacute;rie completa do EF (antigo prim&aacute;rio ou 1&ordm; grau)<br>
            3-5&ordf; &agrave; 8&ordf; s&eacute;rie incompleta do EF (antigo gin&aacute;sio ou 1&ordm; grau) &nbsp;&nbsp; 4-Ensino fundamental completo (antigo gin&aacute;sio ou 1&ordm; grau) &nbsp;&nbsp; 5-Ensino m&eacute;dio incompleto (antigo colegial ou 2&ordm; grau)<br>
            6-Ensino m&eacute;dio completo (antigo colegial ou 2&ordm; grau) &nbsp;&nbsp; 7-Educa&ccedil;&atilde;o superior incompleta &nbsp;&nbsp; 8-Educa&ccedil;&atilde;o superior completa &nbsp;&nbsp; 9-Ignorado &nbsp;&nbsp; 10-N&atilde;o se aplica
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);">
            ${schoolCode}
          </div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:2.2;">
          <div class="ct"><span class="cn">15</span> NUMERO DO CARTAO SUS</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(data.patientCns || '', 15)}</div>
        </div>
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct"><span class="cn">16</span> NOME DA MAE</div>
          <div class="cv" style="font-size:9px;">${data.patientMotherName || 'Nao informada'}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- BLOCO 3: DADOS DE RESIDENCIA -->
  <div class="sn-block">
    <div class="sn-sidebar">Dados de Residencia</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.35;">
          <div class="ct"><span class="cn">17</span> UF</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(data.patientUf || 'PA', 2)}</div>
        </div>
        <div class="sn-cell" style="flex:1.7;">
          <div class="ct"><span class="cn">18</span> MUNICIPIO DE RESIDENCIA</div>
          <div class="cv">${data.patientMunicipality || 'MARABA'}</div>
        </div>
        <div class="sn-cell" style="flex:0.9;">
          <div class="ct">CODIGO (IBGE)</div>
          <div class="cv" style="padding-top:3px;">${splitDigits('1504208', 7)}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">19</span> DISTRITO</div>
          <div class="cv">${data.patientDistrict || ''}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.5;">
          <div class="ct"><span class="cn">20</span> BAIRRO</div>
          <div class="cv">${data.patientNeighborhood || 'Nao informado'}</div>
        </div>
        <div class="sn-cell" style="flex:2.5;">
          <div class="ct"><span class="cn">21</span> LOGRADOURO (RUA, AVENIDA,...)</div>
          <div class="cv">${data.patientAddress || 'Nao informado'}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct"><span class="cn">22</span> NUMERO</div>
          <div class="cv">${data.patientNumber || 'S/N'}</div>
        </div>
        <div class="sn-cell" style="flex:1.6;">
          <div class="ct"><span class="cn">23</span> COMPLEMENTO (APTO., CASA,...)</div>
          <div class="cv">${data.patientComplement || ''}</div>
        </div>
        <div class="sn-cell" style="flex:1.6;">
          <div class="ct"><span class="cn">24</span> GEO CAMPO 1</div>
          <div class="cv"></div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct"><span class="cn">25</span> GEO CAMPO 2</div>
          <div class="cv"></div>
        </div>
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct"><span class="cn">26</span> PONTO DE REFERENCIA</div>
          <div class="cv">${data.patientRef || ''}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">27</span> CEP</div>
          <div class="cv" style="padding-top:3px;">${formatCepDigits(data.patientCep)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.6;">
          <div class="ct"><span class="cn">28</span> (DDD) TELEFONE</div>
          <div class="cv" style="padding-top:3px;">${splitDigits((data.patientPhone || '').replace(/\D/g,''), 11)}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">29</span> ZONA</div>
          <div style="font-size:6px; line-height:1.1; margin-top:2px;">
            1 - Urbana &nbsp;&nbsp;&nbsp;&nbsp; 2 - Rural &nbsp;&nbsp;&nbsp;&nbsp; 3 - Periurbana &nbsp;&nbsp;&nbsp;&nbsp; 9 - Ignorado
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">
            ${zoneCode}
          </div>
        </div>
        <div class="sn-cell" style="flex:0.9;">
          <div class="ct"><span class="cn">30</span> PAIS (SE RESID. FORA)</div>
          <div class="cv">${data.patientCountry || ''}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- BLOCO 4: DADOS COMPLEMENTARES (PARTE 1) -->
  ${customBlockHtml}

  <div class="footer-info">
    <span>Notificacao - ${title}</span>
    <span>Sinan NET</span>
    <span>SVS 17/07/2006</span>
  </div>
</div>
`;
    }

    // ----------------------------------------------------
    // 1. RAIVA HUMANA (SVS 08/06/2006) - 2 PAGINAS
    // ----------------------------------------------------
    function generatePage1RaivaHtml(data) {
        return `
<div class="sinan-page">
  <div class="sn-header">
    <div class="sn-header-left">
      Rep&uacute;blica Federativa do Brasil<br>
      Minist&eacute;rio da Sa&uacute;de
    </div>
    <div class="sn-header-center">
      <p class="sn-sinan">SINAN</p>
      <p class="sn-title">SISTEMA DE INFORMA&Ccedil;&Atilde;O DE AGRAVOS DE NOTIFICA&Ccedil;&Atilde;O</p>
      <p class="sn-subtitle">FICHA DE INVESTIGA&Ccedil;&Atilde;O RAIVA HUMANA N&ordm;</p>
    </div>
    <div class="sn-header-right">
      <span class="sn-num-label">N&ordm;</span>
      <div class="sn-num-box">${data.sinan_number || '---.---'}</div>
    </div>
  </div>

  <div style="border:1.5px solid #000; padding:3px 6px; margin-bottom:4px; font-size:7px; line-height:1.2; background:#fafafa;">
    <strong>CASO SUSPEITO:</strong> Todo paciente com quadro cl&iacute;nico sugestivo de encefalite r&aacute;bica, com antecedentes ou n&atilde;o de exposi&ccedil;&atilde;o &agrave; infec&ccedil;&atilde;o pelo v&iacute;rus r&aacute;bico.
  </div>

  <!-- BLOCO 1: DADOS GERAIS -->
  <div class="sn-block">
    <div class="sn-sidebar">Dados Gerais</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1; min-height:22px;">
          <div class="ct"><span class="cn">1</span> TIPO DE NOTIFICA&Ccedil;&Atilde;O</div>
          <div style="font-size:7.5px; margin-top:2px;">2 - Individual</div>
          <div class="single-box" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);">${tipoNotif}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:2.5; position:relative;">
          <div class="ct"><span class="cn">2</span> AGRAVO/DOEN&Ccedil;A</div>
          <div style="font-size:10px; font-weight:900; margin-top:2px;">RAIVA HUMANA</div>
          <div style="position:absolute; right:8px; top:4px; font-size:7px; font-weight:bold;">
            C&oacute;digo (CID10)<br>
            <span style="font-size:8.5px; border:1px solid #000; padding:1px 4px; font-family:monospace; background:#fff;">A 8 2.9</span>
          </div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">3</span> DATA DA NOTIFICA&Ccedil;&Atilde;O</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(data.dataNotificacao), 8)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.4;">
          <div class="ct"><span class="cn">4</span> UF</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(data.ufNotificacao || 'PA', 2)}</div>
        </div>
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct"><span class="cn">5</span> MUNIC&Iacute;PIO DE NOTIFICA&Ccedil;&Atilde;O</div>
          <div class="cv">${data.munNotificacao || 'MARABA'}</div>
        </div>
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct">C&Oacute;DIGO (IBGE)</div>
          <div class="cv" style="padding-top:3px;">${splitDigits('1504208', 7)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:2.2;">
          <div class="ct"><span class="cn">6</span> UNIDADE DE SA&Uacute;DE (OU OUTRA FONTE NOTIFICADORA)</div>
          <div class="cv">${unitName}</div>
        </div>
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct">C&Oacute;DIGO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(cnesCode, 7)}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">7</span> DATA DOS PRIMEIROS SINTOMAS</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(data.symptomsDate), 8)}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- BLOCO 2: NOTIFICAÇÃO INDIVIDUAL -->
  <div class="sn-block">
    <div class="sn-sidebar">Notifica&ccedil;&atilde;o Individual</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="flex:3.0;">
          <div class="ct"><span class="cn">8</span> NOME DO PACIENTE</div>
          <div class="cv" style="font-size:10px; font-weight:900;">${data.patientName || 'Nao informado'}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">9</span> DATA DE NASCIMENTO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(data.patientBirthDate), 8)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.9;">
          <div class="ct"><span class="cn">10</span> (OU) IDADE</div>
          <div style="display:flex; align-items:center; gap:3px; margin-top:2px;">
            <div>${splitDigits(data.patientAge || '', 3, true)}</div>
            <div class="single-box">${data.patientAge ? '4' : '&nbsp;'}</div>
            <div style="font-size:5px; line-height:1.0; font-weight:bold; margin-left:2px;">1 - Hora<br>2 - Dia<br>3 - M&ecirc;s<br>4 - Ano</div>
          </div>
        </div>
        <div class="sn-cell" style="position:relative; flex:0.7;">
          <div class="ct"><span class="cn">11</span> SEXO</div>
          <div style="font-size:5.5px; line-height:1.1; margin-top:2px;">M - Masculino<br>F - Feminino<br>I - Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${sexCode}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">12</span> GESTANTE</div>
          <div style="font-size:5.2px; line-height:1.1; margin-top:2px;">1-1&ordm;Trim. &nbsp; 2-2&ordm;Trim. &nbsp; 3-3&ordm;Trim.<br>4-Ignorada &nbsp; 5-N&atilde;o &nbsp; 6-N&atilde;o se aplica &nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${pregnantCode}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.3;">
          <div class="ct"><span class="cn">13</span> RA&Ccedil;A/COR</div>
          <div style="font-size:5.5px; line-height:1.1; margin-top:2px;">1-Branca &nbsp; 2-Preta &nbsp; 3-Amarela<br>4-Parda &nbsp; 5-Ind&iacute;gena &nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${raceCode}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative;">
          <div class="ct"><span class="cn">14</span> ESCOLARIDADE</div>
          <div style="font-size:5px; line-height:1.2; margin-top:2px; padding-right:25px;">
            0-Analfabeto &nbsp;&nbsp; 1-1&ordf; a 4&ordf; s&eacute;rie inc. EF &nbsp;&nbsp; 2-4&ordf; s&eacute;rie comp. EF &nbsp;&nbsp; 3-5&ordf; &agrave; 8&ordf; s&eacute;rie inc. EF &nbsp;&nbsp; 4-EF completo<br>
            5-EM incompleto &nbsp;&nbsp; 6-EM completo &nbsp;&nbsp; 7-Superior incompleto &nbsp;&nbsp; 8-Superior completo &nbsp;&nbsp; 9-Ignorado &nbsp;&nbsp; 10-N&atilde;o se aplica
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);">${schoolCode}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:2.2;">
          <div class="ct"><span class="cn">15</span> N&Uacute;MERO DO CART&Atilde;O SUS</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(data.patientCns || '', 15)}</div>
        </div>
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct"><span class="cn">16</span> NOME DA M&Atilde;E</div>
          <div class="cv" style="font-size:9px;">${data.patientMotherName || 'Nao informada'}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- BLOCO 3: DADOS DE RESIDÊNCIA -->
  <div class="sn-block">
    <div class="sn-sidebar">Dados de Resid&ecirc;ncia</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.35;">
          <div class="ct"><span class="cn">17</span> UF</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(data.patientUf || 'PA', 2)}</div>
        </div>
        <div class="sn-cell" style="flex:1.7;">
          <div class="ct"><span class="cn">18</span> MUNIC&Iacute;PIO DE RESID&Ecirc;NCIA</div>
          <div class="cv">${data.patientMunicipality || 'MARABA'}</div>
        </div>
        <div class="sn-cell" style="flex:0.9;">
          <div class="ct">C&Oacute;DIGO (IBGE)</div>
          <div class="cv" style="padding-top:3px;">${splitDigits('1504208', 7)}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">19</span> DISTRITO</div>
          <div class="cv">${data.patientDistrict || ''}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.5;">
          <div class="ct"><span class="cn">20</span> BAIRRO</div>
          <div class="cv">${data.patientNeighborhood || 'Nao informado'}</div>
        </div>
        <div class="sn-cell" style="flex:2.5;">
          <div class="ct"><span class="cn">21</span> LOGRADOURO (RUA, AVENIDA,...)</div>
          <div class="cv">${data.patientAddress || 'Nao informado'}</div>
        </div>
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct">C&Oacute;DIGO</div>
          <div class="cv"></div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct"><span class="cn">22</span> N&Uacute;MERO</div>
          <div class="cv">${data.patientNumber || 'S/N'}</div>
        </div>
        <div class="sn-cell" style="flex:1.6;">
          <div class="ct"><span class="cn">23</span> COMPLEMENTO (APTO., CASA,...)</div>
          <div class="cv">${data.patientComplement || ''}</div>
        </div>
        <div class="sn-cell" style="flex:1.6;">
          <div class="ct"><span class="cn">24</span> GEO CAMPO 1</div>
          <div class="cv"></div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct"><span class="cn">25</span> GEO CAMPO 2</div>
          <div class="cv"></div>
        </div>
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct"><span class="cn">26</span> PONTO DE REFER&Ecirc;NCIA</div>
          <div class="cv">${data.patientRef || ''}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">27</span> CEP</div>
          <div class="cv" style="padding-top:3px;">${formatCepDigits(data.patientCep)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.6;">
          <div class="ct"><span class="cn">28</span> (DDD) TELEFONE</div>
          <div class="cv" style="padding-top:3px;">${splitDigits((data.patientPhone || '').replace(/\D/g,''), 11)}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">29</span> ZONA</div>
          <div style="font-size:6px; line-height:1.1; margin-top:2px;">1 - Urbana &nbsp; 2 - Rural &nbsp; 3 - Periurbana &nbsp; 9 - Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${zoneCode}</div>
        </div>
        <div class="sn-cell" style="flex:0.9;">
          <div class="ct"><span class="cn">30</span> PA&Iacute;S (SE RESID. FORA)</div>
          <div class="cv">${data.patientCountry || ''}</div>
        </div>
      </div>
    </div>
  </div>

  <div style="background:#e6e6e6; font-size:8px; font-weight:bold; text-align:center; padding:2px; border:1px solid #000; border-bottom:none;">
    Dados Complementares do Caso
  </div>

  <!-- BLOCO 4: ANTECEDENTES EPIDEMIOLÓGICOS E ATENDIMENTO -->
  <div class="sn-block">
    <div class="sn-sidebar" style="font-size:6px;">Antecedentes Epidemiol&oacute;gicos</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct"><span class="cn">31</span> DATA DA INVESTIGA&Ccedil;&Atilde;O</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.dataInvestigacao), 8)}</div>
        </div>
        <div class="sn-cell" style="flex:2.8;">
          <div class="ct"><span class="cn">32</span> OCUPA&Ccedil;&Atilde;O</div>
          <div class="cv">${cs.occupation || ''}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">33</span> TIPO DE EXPOSI&Ccedil;&Atilde;O AO V&Iacute;RUS R&Aacute;BICO</div>
          <div style="font-size:5px; margin-top:2px;">1-Sim &nbsp; 2-N&atilde;o &nbsp; 9-Ignorado: Arranh&atilde;o / Lambedura / Mordedura / Contato Indireto</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.tipoExposicao || '9'}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">34</span> LOCALIZA&Ccedil;&Atilde;O</div>
          <div style="font-size:5px; margin-top:2px;">Mucosa, Cabe&ccedil;a/Pesco&ccedil;o, M&atilde;os, P&eacute;s, Tronco, Membros Sup/Inf</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.localizacaoPicada || '9'}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.0;">
          <div class="ct"><span class="cn">35</span> FERIMENTO</div>
          <div style="font-size:5px; margin-top:2px;">1-&Uacute;nico &nbsp; 2-M&uacute;ltiplo &nbsp; 3-Sem Ferimento &nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.ferimento || '9'}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.0;">
          <div class="ct"><span class="cn">36</span> TIPO DE FERIMENTO</div>
          <div style="font-size:5px; margin-top:2px;">1-Profundo &nbsp; 2-Superficial &nbsp; 3-Dilacerante</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.tipoFerimento || '9'}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">37</span> DATA DA EXPOSI&Ccedil;&Atilde;O</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.dataExposicao), 8)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">38</span> ANTECEDENTES DE TRATAMENTO ANTI-R&Aacute;BICO?</div>
          <div style="font-size:5px; margin-top:2px;">1-Sim &nbsp; 2-N&atilde;o &nbsp; 9-Ignorado (Pr&eacute;-Exposi&ccedil;&atilde;o / P&oacute;s-Exposi&ccedil;&atilde;o)</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.antecedentesTrat || '3'}</div>
        </div>
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct"><span class="cn">39</span> N&ordm; DOSES APLICADAS</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(cs.dosesAplicadas || '', 2)}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">40</span> DATA &Uacute;LTIMA DOSE</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.dataUltimaDose), 8)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">41</span> ESP&Eacute;CIE DO ANIMAL AGRESSOR</div>
          <div style="font-size:5px; margin-top:2px;">1-Canina &nbsp; 2-Felina &nbsp; 3-Quir&oacute;ptera &nbsp; 4-Primata &nbsp; 5-Raposa &nbsp; 6-Herb&iacute;vora &nbsp; 7-Outra &nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.especieAnimal || '1'}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.0;">
          <div class="ct"><span class="cn">42</span> ANIMAL VACINADO?</div>
          <div style="font-size:5px; margin-top:2px;">1-Sim &nbsp; 2-N&atilde;o &nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.animalVacinado || '9'}</div>
        </div>
      </div>
    </div>
  </div>

  <div class="sn-block">
    <div class="sn-sidebar">Atendimento</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.0;">
          <div class="ct"><span class="cn">43</span> HOSPITALIZA&Ccedil;&Atilde;O?</div>
          <div style="font-size:6px; margin-top:2px;">1-Sim &nbsp; 2-N&atilde;o &nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.hospitalizacao || '2'}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">44</span> DATA DA INTERNA&Ccedil;&Atilde;O</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.dataInternacao), 8)}</div>
        </div>
        <div class="sn-cell" style="flex:0.4;">
          <div class="ct"><span class="cn">45</span> UF</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(cs.hospitalUf || 'PA', 2)}</div>
        </div>
        <div class="sn-cell" style="flex:1.5;">
          <div class="ct"><span class="cn">46</span> MUNIC&Iacute;PIO HOSPITAL</div>
          <div class="cv">${cs.hospitalMun || ''}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:2.0;">
          <div class="ct"><span class="cn">47</span> NOME DO HOSPITAL</div>
          <div class="cv">${cs.hospitalNome || ''}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell">
          <div class="ct"><span class="cn">48</span> PRINCIPAIS SINAIS / SINTOMAS</div>
          <div class="cv" style="font-size:8.5px;">${cs.sintomas || 'Aerofobia, Hidrofobia, Disfagia, Parestesia, Paralisia, Agitacao, Febre, Agressividade'}</div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer-info">
    <span>Raiva Humana</span>
    <span>Sinan NET</span>
    <span>SVS 08/06/2006</span>
  </div>
</div>
        `;
    }

    function generatePage2RaivaHtml(data) {
        return `
<div class="sinan-page">
  <div class="pg2-header">
    <p class="pg2-title">DADOS COMPLEMENTARES DO CASO - RAIVA HUMANA</p>
  </div>

  <!-- BLOCO TRATAMENTO ATUAL -->
  <div class="sn-block">
    <div class="sn-sidebar">Tratamento Atual</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">49</span> APLICA&Ccedil;&Atilde;O DE VACINA ANTI-R&Aacute;BICA ATUALMENTE</div>
          <div style="font-size:6px; margin-top:2px;">1-Sim &nbsp;&nbsp; 2-N&atilde;o &nbsp;&nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.vacinaAtual || '2'}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">50</span> DATA DO IN&Iacute;CIO DO TRATAMENTO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.inicioTratamento), 8)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">51</span> N&ordm; DOSES APLICADAS</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(cs.vacinaDoses || '', 2)}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">52</span> DATA DA 1&ordf; DOSE DA VACINA</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.data1Dose), 8)}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">53</span> DATA DA &Uacute;LTIMA DOSE DA VACINA</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.dataUltDose), 8)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.0;">
          <div class="ct"><span class="cn">54</span> FOI APLICADO SORO?</div>
          <div style="font-size:6px; margin-top:2px;">1-Sim &nbsp; 2-N&atilde;o &nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.soroAplicado || '2'}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">55</span> SE SIM, DATA DA APLICA&Ccedil;&Atilde;O</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.dataSoro), 8)}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">56</span> QTD DE SORO APLICADO (ML)</div>
          <div class="cv">${cs.qtdSoro || ''}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:2.0;">
          <div class="ct"><span class="cn">57</span> INFILTRA&Ccedil;&Atilde;O DE SORO NO(S) LOCAL(AIS) DO(S) FERIMENTO(S)</div>
          <div style="font-size:6px; margin-top:2px;">1-Sim, Total &nbsp;&nbsp; 2-Sim, Parcial &nbsp;&nbsp; 3-N&atilde;o &nbsp;&nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.infiltracaoSoro || '3'}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- BLOCO CONCLUSÃO -->
  <div class="sn-block">
    <div class="sn-sidebar">Conclus&atilde;o</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:2.0;">
          <div class="ct"><span class="cn">58</span> DIAGN&Oacute;STICO LABORATORIAL</div>
          <div style="font-size:5.5px; line-height:1.1; margin-top:2px;">1-Positivo &nbsp; 2-Negativo &nbsp; 3-Inconclusivo &nbsp; 4-N&atilde;o realizado<br>Imunofluoresc&ecirc;ncia direta / Histol&oacute;gico / Prova biol&oacute;gica / Imunofluoresc&ecirc;ncia indireta</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.diagLaboratorial || '4'}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">59</span> VARIANTE</div>
          <div class="cv">${cs.variante || ''}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.0;">
          <div class="ct"><span class="cn">60</span> CLASSIFICA&Ccedil;&Atilde;O FINAL</div>
          <div style="font-size:6px; margin-top:2px;">1-Confirmado &nbsp;&nbsp; 2-Descartado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.classificacao || '1'}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:2.0;">
          <div class="ct"><span class="cn">61</span> CRIT&Eacute;RIO DE CONFIRMA&Ccedil;&Atilde;O / DESCARTE</div>
          <div style="font-size:5.5px; margin-top:2px;">1-Laborat&oacute;rio &nbsp; 2-&Oacute;bito com Cl&iacute;nica Compat&iacute;vel + V&iacute;nculo Epid. &nbsp; 3-Evolu&ccedil;&atilde;o Cl&iacute;nica Incompat&iacute;vel</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.criterio || '1'}</div>
        </div>
      </div>
      <div style="background:#e6e6e6; font-size:7.5px; font-weight:bold; padding:2px 5px; border-bottom:1px solid #000;">
        Local Prov&aacute;vel da Fonte de Infec&ccedil;&atilde;o (no per&iacute;odo de 45 dias)
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">62</span> AUT&Oacute;CTONE DO MUNIC&Iacute;PIO DE RESID&Ecirc;NCIA?</div>
          <div style="font-size:6px; margin-top:2px;">1-Sim &nbsp;&nbsp; 2-N&atilde;o &nbsp;&nbsp; 3-Indeterminado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.autoctone || '1'}</div>
        </div>
        <div class="sn-cell" style="flex:0.4;">
          <div class="ct"><span class="cn">63</span> UF</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(cs.ufInfeccao || 'PA', 2)}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">64</span> PA&Iacute;S</div>
          <div class="cv">${cs.paisInfeccao || 'Brasil'}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.5;">
          <div class="ct"><span class="cn">65</span> MUNIC&Iacute;PIO</div>
          <div class="cv">${cs.municipioInfeccao || ''}</div>
        </div>
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct">C&Oacute;DIGO (IBGE)</div>
          <div class="cv" style="padding-top:3px;">${splitDigits('', 7)}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">66</span> DISTRITO</div>
          <div class="cv">${cs.distritoInfeccao || ''}</div>
        </div>
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct"><span class="cn">67</span> BAIRRO</div>
          <div class="cv">${cs.bairroInfeccao || ''}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.2;">
          <div class="ct"><span class="cn">68</span> ZONA</div>
          <div style="font-size:6px; margin-top:2px;">1-Urbana &nbsp;&nbsp; 2-Rural &nbsp;&nbsp; 3-Periurbana &nbsp;&nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.zonaInfeccao || '1'}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.2;">
          <div class="ct"><span class="cn">69</span> DOEN&Ccedil;A RELACIONADA AO TRABALHO?</div>
          <div style="font-size:6px; margin-top:2px;">1-Sim &nbsp;&nbsp; 2-N&atilde;o &nbsp;&nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.trabalho || '2'}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">70</span> DATA DO &Oacute;BITO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.dataObito), 8)}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">71</span> DATA DO ENCERRAMENTO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.dataEncerramento || data.dataNotificacao), 8)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell">
          <div class="ct">INFORMA&Ccedil;&Otilde;ES COMPLEMENTARES</div>
          <div class="cv" style="font-size:9px; font-weight:normal; min-height:40px;">${cs.obs || ''}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- BLOCO INVESTIGADOR -->
  <div class="sn-block">
    <div class="sn-sidebar">Investigador</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="flex:2.0;">
          <div class="ct">MUNIC&Iacute;PIO/UNIDADE DE SA&Uacute;DE</div>
          <div class="cv">${data.munNotificacao || 'MARABA'} / ${unitName}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct">C&Oacute;D. DA UNID. DE SA&Uacute;DE</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(cnesCode, 7)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct">NOME</div>
          <div class="cv" style="font-weight:900; font-size:10px;">${data.notificatorName || 'Profissional de Saude'}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct">FUN&Ccedil;&Atilde;O</div>
          <div class="cv">Profissional de Saude</div>
        </div>
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct">ASSINATURA</div>
          <div class="cv" style="border-bottom:1px dotted #555; margin-top:4px; min-height:14px;"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer-info">
    <span>Raiva Humana</span>
    <span>Sinan NET</span>
    <span>SVS 08/06/2006</span>
  </div>
</div>
        `;
    }

    // ----------------------------------------------------
    // 2. DOENÇA DE CHAGAS AGUDA (SVS 08/10/2009) - 2 PAGINAS
    // ----------------------------------------------------
    function generatePage1ChagasHtml(data) {
        return `
<div class="sinan-page">
  <div class="sn-header">
    <div class="sn-header-left">
      Rep&uacute;blica Federativa do Brasil<br>
      Minist&eacute;rio da Sa&uacute;de
    </div>
    <div class="sn-header-center">
      <p class="sn-sinan">SINAN</p>
      <p class="sn-title">SISTEMA DE INFORMA&Ccedil;&Atilde;O DE AGRAVOS DE NOTIFICA&Ccedil;&Atilde;O</p>
      <p class="sn-subtitle">FICHA DE INVESTIGA&Ccedil;&Atilde;O DOEN&Ccedil;A DE CHAGAS AGUDA N&ordm;</p>
    </div>
    <div class="sn-header-right">
      <span class="sn-num-label">N&ordm;</span>
      <div class="sn-num-box">${data.sinan_number || '---.---'}</div>
    </div>
  </div>

  <div style="border:1.5px solid #000; padding:3px 6px; margin-bottom:4px; font-size:6.5px; line-height:1.2; background:#fafafa;">
    <strong>CASO SUSPEITO:</strong> Febre prolongada (>7 dias) e quadro cl&iacute;nico sugestivo de DCA...<br>
    <strong>CASO CONFIRMADO:</strong> a- Crit&eacute;rio laboratorial: exame parasitol&oacute;gico direto positivo ou sorologia IgM/IgG... b- Crit&eacute;rio cl&iacute;nico-epidemiol&oacute;gico.
  </div>

  <!-- BLOCO 1: DADOS GERAIS -->
  <div class="sn-block">
    <div class="sn-sidebar">Dados Gerais</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1; min-height:22px;">
          <div class="ct"><span class="cn">1</span> TIPO DE NOTIFICA&Ccedil;&Atilde;O</div>
          <div style="font-size:7.5px; margin-top:2px;">2 - Individual</div>
          <div class="single-box" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);">${tipoNotif}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:2.5; position:relative;">
          <div class="ct"><span class="cn">2</span> AGRAVO/DOEN&Ccedil;A</div>
          <div style="font-size:10px; font-weight:900; margin-top:2px;">DOEN&Ccedil;A DE CHAGAS AGUDA</div>
          <div style="position:absolute; right:8px; top:4px; font-size:7px; font-weight:bold;">
            C&oacute;digo (CID10)<br>
            <span style="font-size:8.5px; border:1px solid #000; padding:1px 4px; font-family:monospace; background:#fff;">B 57.1</span>
          </div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">3</span> DATA DA NOTIFICA&Ccedil;&Atilde;O</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(data.dataNotificacao), 8)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.4;">
          <div class="ct"><span class="cn">4</span> UF</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(data.ufNotificacao || 'PA', 2)}</div>
        </div>
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct"><span class="cn">5</span> MUNIC&Iacute;PIO DE NOTIFICA&Ccedil;&Atilde;O</div>
          <div class="cv">${data.munNotificacao || 'MARABA'}</div>
        </div>
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct">C&Oacute;DIGO (IBGE)</div>
          <div class="cv" style="padding-top:3px;">${splitDigits('1504208', 7)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:2.2;">
          <div class="ct"><span class="cn">6</span> UNIDADE DE SA&Uacute;DE (OU OUTRA FONTE NOTIFICADORA)</div>
          <div class="cv">${unitName}</div>
        </div>
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct">C&Oacute;DIGO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(cnesCode, 7)}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">7</span> DATA DOS PRIMEIROS SINTOMAS</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(data.symptomsDate), 8)}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- BLOCO 2: NOTIFICAÇÃO INDIVIDUAL -->
  <div class="sn-block">
    <div class="sn-sidebar">Notifica&ccedil;&atilde;o Individual</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="flex:3.0;">
          <div class="ct"><span class="cn">8</span> NOME DO PACIENTE</div>
          <div class="cv" style="font-size:10px; font-weight:900;">${data.patientName || 'Nao informado'}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">9</span> DATA DE NASCIMENTO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(data.patientBirthDate), 8)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.9;">
          <div class="ct"><span class="cn">10</span> (OU) IDADE</div>
          <div style="display:flex; align-items:center; gap:3px; margin-top:2px;">
            <div>${splitDigits(data.patientAge || '', 3, true)}</div>
            <div class="single-box">${data.patientAge ? '4' : '&nbsp;'}</div>
            <div style="font-size:5px; line-height:1.0; font-weight:bold; margin-left:2px;">1 - Hora<br>2 - Dia<br>3 - M&ecirc;s<br>4 - Ano</div>
          </div>
        </div>
        <div class="sn-cell" style="position:relative; flex:0.7;">
          <div class="ct"><span class="cn">11</span> SEXO</div>
          <div style="font-size:5.5px; line-height:1.1; margin-top:2px;">M - Masculino<br>F - Feminino<br>I - Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${sexCode}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">12</span> GESTANTE</div>
          <div style="font-size:5.2px; line-height:1.1; margin-top:2px;">1-1&ordm;Trim. &nbsp; 2-2&ordm;Trim. &nbsp; 3-3&ordm;Trim.<br>4-Ignorada &nbsp; 5-N&atilde;o &nbsp; 6-N&atilde;o se aplica &nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${pregnantCode}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.3;">
          <div class="ct"><span class="cn">13</span> RA&Ccedil;A/COR</div>
          <div style="font-size:5.5px; line-height:1.1; margin-top:2px;">1-Branca &nbsp; 2-Preta &nbsp; 3-Amarela<br>4-Parda &nbsp; 5-Ind&iacute;gena &nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${raceCode}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative;">
          <div class="ct"><span class="cn">14</span> ESCOLARIDADE</div>
          <div style="font-size:5px; line-height:1.2; margin-top:2px; padding-right:25px;">
            0-Analfabeto &nbsp;&nbsp; 1-1&ordf; a 4&ordf; s&eacute;rie inc. EF &nbsp;&nbsp; 2-4&ordf; s&eacute;rie comp. EF &nbsp;&nbsp; 3-5&ordf; &agrave; 8&ordf; s&eacute;rie inc. EF &nbsp;&nbsp; 4-EF completo<br>
            5-EM incompleto &nbsp;&nbsp; 6-EM completo &nbsp;&nbsp; 7-Superior incompleto &nbsp;&nbsp; 8-Superior completo &nbsp;&nbsp; 9-Ignorado &nbsp;&nbsp; 10-N&atilde;o se aplica
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);">${schoolCode}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:2.2;">
          <div class="ct"><span class="cn">15</span> N&Uacute;MERO DO CART&Atilde;O SUS</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(data.patientCns || '', 15)}</div>
        </div>
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct"><span class="cn">16</span> NOME DA M&Atilde;E</div>
          <div class="cv" style="font-size:9px;">${data.patientMotherName || 'Nao informada'}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- BLOCO 3: DADOS DE RESIDÊNCIA -->
  <div class="sn-block">
    <div class="sn-sidebar">Dados de Resid&ecirc;ncia</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.35;">
          <div class="ct"><span class="cn">17</span> UF</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(data.patientUf || 'PA', 2)}</div>
        </div>
        <div class="sn-cell" style="flex:1.7;">
          <div class="ct"><span class="cn">18</span> MUNIC&Iacute;PIO DE RESID&Ecirc;NCIA</div>
          <div class="cv">${data.patientMunicipality || 'MARABA'}</div>
        </div>
        <div class="sn-cell" style="flex:0.9;">
          <div class="ct">C&Oacute;DIGO (IBGE)</div>
          <div class="cv" style="padding-top:3px;">${splitDigits('1504208', 7)}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">19</span> DISTRITO</div>
          <div class="cv">${data.patientDistrict || ''}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.5;">
          <div class="ct"><span class="cn">20</span> BAIRRO</div>
          <div class="cv">${data.patientNeighborhood || 'Nao informado'}</div>
        </div>
        <div class="sn-cell" style="flex:2.5;">
          <div class="ct"><span class="cn">21</span> LOGRADOURO (RUA, AVENIDA,...)</div>
          <div class="cv">${data.patientAddress || 'Nao informado'}</div>
        </div>
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct">C&Oacute;DIGO</div>
          <div class="cv"></div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct"><span class="cn">22</span> N&Uacute;MERO</div>
          <div class="cv">${data.patientNumber || 'S/N'}</div>
        </div>
        <div class="sn-cell" style="flex:1.6;">
          <div class="ct"><span class="cn">23</span> COMPLEMENTO (APTO., CASA,...)</div>
          <div class="cv">${data.patientComplement || ''}</div>
        </div>
        <div class="sn-cell" style="flex:1.6;">
          <div class="ct"><span class="cn">24</span> GEO CAMPO 1</div>
          <div class="cv"></div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct"><span class="cn">25</span> GEO CAMPO 2</div>
          <div class="cv"></div>
        </div>
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct"><span class="cn">26</span> PONTO DE REFER&Ecirc;NCIA</div>
          <div class="cv">${data.patientRef || ''}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">27</span> CEP</div>
          <div class="cv" style="padding-top:3px;">${formatCepDigits(data.patientCep)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.6;">
          <div class="ct"><span class="cn">28</span> (DDD) TELEFONE</div>
          <div class="cv" style="padding-top:3px;">${splitDigits((data.patientPhone || '').replace(/\D/g,''), 11)}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">29</span> ZONA</div>
          <div style="font-size:6px; line-height:1.1; margin-top:2px;">1 - Urbana &nbsp; 2 - Rural &nbsp; 3 - Periurbana &nbsp; 9 - Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${zoneCode}</div>
        </div>
        <div class="sn-cell" style="flex:0.9;">
          <div class="ct"><span class="cn">30</span> PA&Iacute;S (SE RESID. FORA)</div>
          <div class="cv">${data.patientCountry || ''}</div>
        </div>
      </div>
    </div>
  </div>

  <div style="background:#e6e6e6; font-size:8px; font-weight:bold; text-align:center; padding:2px; border:1px solid #000; border-bottom:none;">
    Dados Complementares do Caso
  </div>

  <!-- BLOCO 4: ANTECEDENTES EPIDEMIOLÓGICOS -->
  <div class="sn-block">
    <div class="sn-sidebar" style="font-size:6px;">Antecedentes Epidemiol&oacute;gicos</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct"><span class="cn">31</span> DATA DA INVESTIGA&Ccedil;&Atilde;O</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.dataInvestigacao), 8)}</div>
        </div>
        <div class="sn-cell" style="flex:2.8;">
          <div class="ct"><span class="cn">32</span> OCUPA&Ccedil;&Atilde;O</div>
          <div class="cv">${cs.occupation || ''}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell">
          <div class="ct"><span class="cn">33</span> DESLOCAMENTO (VIAGENS PARA &Aacute;REAS INFESTADAS AT&Eacute; 120 DIAS ANTES)</div>
          <div class="cv" style="font-size:8.5px;">${cs.deslocamentos || 'Sem historico de deslocamento'}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">34</span> VEST&Iacute;GIOS DE TRIATOM&Iacute;DEOS INTRA-DOMIC&Iacute;LIO</div>
          <div style="font-size:5px; margin-top:2px;">1-Sim &nbsp; 2-N&atilde;o &nbsp; 3-N&atilde;o Realizado &nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.vestigios || '9'}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">35</span> DATA DE ENCONTRO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.dataVestigios), 8)}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">36</span> USO DE SANGUE/HEMODERIVADOS (120D)</div>
          <div style="font-size:5px; margin-top:2px;">1-Sim &nbsp; 2-N&atilde;o &nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.sangue || '9'}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">37</span> CONTROLE SOROL&Oacute;GICO NA HEMOTERAPIA</div>
          <div style="font-size:5px; margin-top:2px;">1-Sim &nbsp; 2-N&atilde;o &nbsp; 3-N&atilde;o se aplica &nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.controleSoro || '9'}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">38</span> MANIPULA&Ccedil;&Atilde;O/CONTATO COM T. CRUZI</div>
          <div style="font-size:5px; margin-top:2px;">1-Sim &nbsp; 2-N&atilde;o &nbsp; 3-N&atilde;o se aplica &nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.contato || '9'}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">39</span> &le; 9 MESES DE IDADE: M&Atilde;E COM INFEC&Ccedil;&Atilde;O CHAG&Aacute;SICA</div>
          <div style="font-size:5px; margin-top:2px;">1-Sim &nbsp; 2-N&atilde;o &nbsp; 3-N&atilde;o se aplica &nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.maeInfeccao || '9'}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">40</span> POSSIBILIDADE DE TRANSMISS&Atilde;O VIA ORAL</div>
          <div style="font-size:5px; margin-top:2px;">1-Sim &nbsp; 2-N&atilde;o &nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.transmissaoOral || '9'}</div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer-info">
    <span>Doen&ccedil;a de Chagas Aguda</span>
    <span>Sinan NET</span>
    <span>SVS 08/10/2009</span>
  </div>
</div>
        `;
    }

    function generatePage2ChagasHtml(data) {
        return `
<div class="sinan-page">
  <div class="pg2-header">
    <p class="pg2-title">DADOS COMPLEMENTARES DO CASO - DOEN&Ccedil;A DE CHAGAS AGUDA</p>
  </div>

  <!-- DADOS CLÍNICOS E LABORATÓRIO -->
  <div class="sn-block">
    <div class="sn-sidebar">Cl&iacute;nica / Lab</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell">
          <div class="ct"><span class="cn">41</span> SINAIS E SINTOMAS</div>
          <div class="cv" style="font-size:8.5px;">${cs.sintomas || 'Assintomatico, Febre Persistente, Edema, Hepatomegalia, Esplenomegalia, Roma&ntilde;a, Arrítmias'}</div>
        </div>
      </div>
      <div style="background:#e6e6e6; font-size:7.5px; font-weight:bold; padding:2px 5px; border-bottom:1px solid #000;">Exames Realizados</div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:2.0;">
          <div class="ct"><span class="cn">42-43</span> PARASITOL&Oacute;GICO DIRETO</div>
          <div style="font-size:5.5px; margin-top:2px;">1-Positivo &nbsp; 2-Negativo &nbsp; 3-N&atilde;o realizado (Fresca / Strout / Microhemat&oacute;crito)</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.diagParasito || '3'}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:2.0;">
          <div class="ct"><span class="cn">44-45</span> PARASITOL&Oacute;GICO INDIRETO</div>
          <div style="font-size:5.5px; margin-top:2px;">1-Positivo &nbsp; 2-Negativo &nbsp; 3-N&atilde;o realizado (Xenodiagn&oacute;stico / Hemocultivo)</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.parasitoIndireto || '3'}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">46-48</span> SOROLOGIA ELISA</div>
          <div style="font-size:5.5px; margin-top:2px;">1-Reagente &nbsp; 2-N&atilde;o-Reagente &nbsp; 3-Inconclusivo &nbsp; 4-N&atilde;o realizado (IgM / IgG)</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.elisaResultado || '4'}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">49-50</span> IFI / HEMOAGLUTINA&Ccedil;&Atilde;O</div>
          <div style="font-size:5.5px; margin-top:2px;">1-Reagente &nbsp; 2-N&atilde;o-Reagente &nbsp; 3-Inconclusivo &nbsp; 4-N&atilde;o realizado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.ifiResultado || '4'}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:2.0;">
          <div class="ct"><span class="cn">51-52</span> HISTOPATOL&Oacute;GICO (BI&Oacute;PSIA / NECR&Oacute;PSIA)</div>
          <div style="font-size:5.5px; margin-top:2px;">1-Positivo &nbsp; 2-Negativo &nbsp; 3-N&atilde;o realizado &nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.histopatologico || '3'}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- TRATAMENTO E MEDIDAS DE CONTROLE -->
  <div class="sn-block">
    <div class="sn-sidebar">Trat. / Controle</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">53</span> TIPO DE TRATAMENTO</div>
          <div style="font-size:6px; margin-top:2px;">1-Sim (Sintom&aacute;tico / Espec&iacute;fico) &nbsp; 2-N&atilde;o &nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.tipoTratamento || '2'}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">54</span> DROGA UTILIZADA</div>
          <div style="font-size:6px; margin-top:2px;">1-Benznidazol &nbsp;&nbsp; 2-Outro</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.droga || '1'}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">55</span> TEMPO TRATAMENTO (DIAS)</div>
          <div class="cv">${cs.tempoTratamento || ''}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell">
          <div class="ct"><span class="cn">56</span> MEDIDAS TOMADAS</div>
          <div class="cv" style="font-size:8.5px;">${cs.medidasTomadas || 'Controle de Triatomi' + 'deos, Biosseguranca, Fiscalizacao'}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- BLOCO CONCLUSÃO -->
  <div class="sn-block">
    <div class="sn-sidebar">Conclus&atilde;o</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.0;">
          <div class="ct"><span class="cn">57</span> CLASSIFICA&Ccedil;&Atilde;O FINAL</div>
          <div style="font-size:6px; margin-top:2px;">1-Confirmado &nbsp;&nbsp; 2-Descartado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.classificacao || '1'}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">58</span> CRIT&Eacute;RIO DE CONFIRMA&Ccedil;&Atilde;O</div>
          <div style="font-size:5.5px; margin-top:2px;">1-Laboratorial &nbsp; 2-Cl&iacute;nico-Epidemiol&oacute;gico &nbsp; 3-Cl&iacute;nico</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.criterio || '1'}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.2;">
          <div class="ct"><span class="cn">59</span> EVOLU&Ccedil;&Atilde;O DO CASO</div>
          <div style="font-size:5.5px; margin-top:2px;">1-Vivo &nbsp; 2-&Oacute;bito por D. Chagas Aguda &nbsp; 3-&Oacute;bito por outras &nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.evolucao || '1'}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">60</span> DATA DO &Oacute;BITO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.dataObito), 8)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">61</span> MODO PROV&Aacute;VEL DA INFEC&Ccedil;&Atilde;O</div>
          <div style="font-size:5px; margin-top:2px;">1-Transfusional &nbsp; 2-Vetorial &nbsp; 3-Vertical &nbsp; 4-Acidental &nbsp; 5-Oral &nbsp; 6-Outra &nbsp; 9-Ignorada</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.modoInfeccao || '2'}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">62</span> LOCAL PROV&Aacute;VEL DA INFEC&Ccedil;&Atilde;O (120D)</div>
          <div style="font-size:5px; margin-top:2px;">1-Hemoterapia &nbsp; 2-Domic&iacute;lio &nbsp; 3-Laborat&oacute;rio &nbsp; 4-Outro &nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.localInfeccao || '2'}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.2;">
          <div class="ct"><span class="cn">63</span> AUT&Oacute;CTONE DO MUNIC&Iacute;PIO?</div>
          <div style="font-size:6px; margin-top:2px;">1-Sim &nbsp;&nbsp; 2-N&atilde;o &nbsp;&nbsp; 3-Indeterminado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.autoctone || '1'}</div>
        </div>
        <div class="sn-cell" style="flex:0.4;">
          <div class="ct"><span class="cn">64</span> UF</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(cs.ufInfeccao || 'PA', 2)}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">65</span> PA&Iacute;S</div>
          <div class="cv">${cs.paisInfeccao || 'Brasil'}</div>
        </div>
        <div class="sn-cell" style="flex:1.5;">
          <div class="ct"><span class="cn">66</span> MUNIC&Iacute;PIO</div>
          <div class="cv">${cs.municipioInfeccao || ''}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct"><span class="cn">67</span> DISTRITO</div>
          <div class="cv">${cs.distritoInfeccao || ''}</div>
        </div>
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct"><span class="cn">68</span> BAIRRO</div>
          <div class="cv">${cs.bairroInfeccao || ''}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.2;">
          <div class="ct"><span class="cn">69</span> DOEN&Ccedil;A RELACIONADA AO TRABALHO?</div>
          <div style="font-size:6px; margin-top:2px;">1-Sim &nbsp;&nbsp; 2-N&atilde;o &nbsp;&nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.trabalho || '2'}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">70</span> DATA DO ENCERRAMENTO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.dataEncerramento || data.dataNotificacao), 8)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell">
          <div class="ct">OBSERVA&Ccedil;&Otilde;ES</div>
          <div class="cv" style="font-size:9px; font-weight:normal; min-height:35px;">${cs.obs || ''}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- BLOCO INVESTIGADOR -->
  <div class="sn-block">
    <div class="sn-sidebar">Investigador</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="flex:2.0;">
          <div class="ct">MUNIC&Iacute;PIO/UNIDADE DE SA&Uacute;DE</div>
          <div class="cv">${data.munNotificacao || 'MARABA'} / ${unitName}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct">C&Oacute;D. DA UNID. DE SA&Uacute;DE</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(cnesCode, 7)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct">NOME</div>
          <div class="cv" style="font-weight:900; font-size:10px;">${data.notificatorName || 'Profissional de Saude'}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct">FUN&Ccedil;&Atilde;O</div>
          <div class="cv">Profissional de Saude</div>
        </div>
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct">ASSINATURA</div>
          <div class="cv" style="border-bottom:1px dotted #555; margin-top:4px; min-height:14px;"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer-info">
    <span>Doen&ccedil;a de Chagas Aguda</span>
    <span>Sinan NET</span>
    <span>SVS 08/10/2009</span>
  </div>
</div>
        `;
    }

    // ----------------------------------------------------
    // 3. LEPTOSPIROSE (SVS 02/02/2007) - 2 PAGINAS
    // ----------------------------------------------------
    function generatePage1LeptospiroseHtml(data) {
        return `
<div class="sinan-page">
  <div class="sn-header">
    <div class="sn-header-left">
      Rep&uacute;blica Federativa do Brasil<br>
      Minist&eacute;rio da Sa&uacute;de
    </div>
    <div class="sn-header-center">
      <p class="sn-sinan">SINAN</p>
      <p class="sn-title">SISTEMA DE INFORMA&Ccedil;&Atilde;O DE AGRAVOS DE NOTIFICA&Ccedil;&Atilde;O</p>
      <p class="sn-subtitle">FICHA DE INVESTIGA&Ccedil;&Atilde;O LEPTOSPIROSE N&ordm;</p>
    </div>
    <div class="sn-header-right">
      <span class="sn-num-label">N&ordm;</span>
      <div class="sn-num-box">${data.sinan_number || '---.---'}</div>
    </div>
  </div>

  <div style="border:1.5px solid #000; padding:3px 6px; margin-bottom:4px; font-size:6.5px; line-height:1.2; background:#fafafa;">
    <strong>CASO SUSPEITO:</strong> Indiv&iacute;duo com febre, cefal&eacute;ia e mialgia, que apresente pelo menos um dos seguintes crit&eacute;rios: Crit&eacute;rio 1- antecedentes epidemiol&oacute;gicos sugestivos... Crit&eacute;rio 2- sufus&atilde;o conjuntival, sinais de insufici&ecirc;ncia renal, icter&iacute;cia e/ou hemorragia.
  </div>

  <!-- BLOCO 1: DADOS GERAIS -->
  <div class="sn-block">
    <div class="sn-sidebar">Dados Gerais</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1; min-height:22px;">
          <div class="ct"><span class="cn">1</span> TIPO DE NOTIFICA&Ccedil;&Atilde;O</div>
          <div style="font-size:7.5px; margin-top:2px;">2 - Individual</div>
          <div class="single-box" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);">${tipoNotif}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:2.5; position:relative;">
          <div class="ct"><span class="cn">2</span> AGRAVO/DOEN&Ccedil;A</div>
          <div style="font-size:10px; font-weight:900; margin-top:2px;">LEPTOSPIROSE</div>
          <div style="position:absolute; right:8px; top:4px; font-size:7px; font-weight:bold;">
            C&oacute;digo (CID10)<br>
            <span style="font-size:8.5px; border:1px solid #000; padding:1px 4px; font-family:monospace; background:#fff;">A 2 7.9</span>
          </div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">3</span> DATA DA NOTIFICA&Ccedil;&Atilde;O</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(data.dataNotificacao), 8)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.4;">
          <div class="ct"><span class="cn">4</span> UF</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(data.ufNotificacao || 'PA', 2)}</div>
        </div>
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct"><span class="cn">5</span> MUNIC&Iacute;PIO DE NOTIFICA&Ccedil;&Atilde;O</div>
          <div class="cv">${data.munNotificacao || 'MARABA'}</div>
        </div>
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct">C&Oacute;DIGO (IBGE)</div>
          <div class="cv" style="padding-top:3px;">${splitDigits('1504208', 7)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:2.2;">
          <div class="ct"><span class="cn">6</span> UNIDADE DE SA&Uacute;DE (OU OUTRA FONTE NOTIFICADORA)</div>
          <div class="cv">${unitName}</div>
        </div>
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct">C&Oacute;DIGO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(cnesCode, 7)}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">7</span> DATA DOS PRIMEIROS SINTOMAS</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(data.symptomsDate), 8)}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- BLOCO 2: NOTIFICAÇÃO INDIVIDUAL -->
  <div class="sn-block">
    <div class="sn-sidebar">Notifica&ccedil;&atilde;o Individual</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="flex:3.0;">
          <div class="ct"><span class="cn">8</span> NOME DO PACIENTE</div>
          <div class="cv" style="font-size:10px; font-weight:900;">${data.patientName || 'Nao informado'}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">9</span> DATA DE NASCIMENTO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(data.patientBirthDate), 8)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.9;">
          <div class="ct"><span class="cn">10</span> (OU) IDADE</div>
          <div style="display:flex; align-items:center; gap:3px; margin-top:2px;">
            <div>${splitDigits(data.patientAge || '', 3, true)}</div>
            <div class="single-box">${data.patientAge ? '4' : '&nbsp;'}</div>
            <div style="font-size:5px; line-height:1.0; font-weight:bold; margin-left:2px;">1 - Hora<br>2 - Dia<br>3 - M&ecirc;s<br>4 - Ano</div>
          </div>
        </div>
        <div class="sn-cell" style="position:relative; flex:0.7;">
          <div class="ct"><span class="cn">11</span> SEXO</div>
          <div style="font-size:5.5px; line-height:1.1; margin-top:2px;">M - Masculino<br>F - Feminino<br>I - Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${sexCode}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">12</span> GESTANTE</div>
          <div style="font-size:5.2px; line-height:1.1; margin-top:2px;">1-1&ordm;Trim. &nbsp; 2-2&ordm;Trim. &nbsp; 3-3&ordm;Trim.<br>4-Ignorada &nbsp; 5-N&atilde;o &nbsp; 6-N&atilde;o se aplica &nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${pregnantCode}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.3;">
          <div class="ct"><span class="cn">13</span> RA&Ccedil;A/COR</div>
          <div style="font-size:5.5px; line-height:1.1; margin-top:2px;">1-Branca &nbsp; 2-Preta &nbsp; 3-Amarela<br>4-Parda &nbsp; 5-Ind&iacute;gena &nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${raceCode}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative;">
          <div class="ct"><span class="cn">14</span> ESCOLARIDADE</div>
          <div style="font-size:5px; line-height:1.2; margin-top:2px; padding-right:25px;">
            0-Analfabeto &nbsp;&nbsp; 1-1&ordf; a 4&ordf; s&eacute;rie inc. EF &nbsp;&nbsp; 2-4&ordf; s&eacute;rie comp. EF &nbsp;&nbsp; 3-5&ordf; &agrave; 8&ordf; s&eacute;rie inc. EF &nbsp;&nbsp; 4-EF completo<br>
            5-EM incompleto &nbsp;&nbsp; 6-EM completo &nbsp;&nbsp; 7-Superior incompleto &nbsp;&nbsp; 8-Superior completo &nbsp;&nbsp; 9-Ignorado &nbsp;&nbsp; 10-N&atilde;o se aplica
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);">${schoolCode}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:2.2;">
          <div class="ct"><span class="cn">15</span> N&Uacute;MERO DO CART&Atilde;O SUS</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(data.patientCns || '', 15)}</div>
        </div>
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct"><span class="cn">16</span> NOME DA M&Atilde;E</div>
          <div class="cv" style="font-size:9px;">${data.patientMotherName || 'Nao informada'}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- BLOCO 3: DADOS DE RESIDÊNCIA -->
  <div class="sn-block">
    <div class="sn-sidebar">Dados de Resid&ecirc;ncia</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.35;">
          <div class="ct"><span class="cn">17</span> UF</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(data.patientUf || 'PA', 2)}</div>
        </div>
        <div class="sn-cell" style="flex:1.7;">
          <div class="ct"><span class="cn">18</span> MUNIC&Iacute;PIO DE RESID&Ecirc;NCIA</div>
          <div class="cv">${data.patientMunicipality || 'MARABA'}</div>
        </div>
        <div class="sn-cell" style="flex:0.9;">
          <div class="ct">C&Oacute;DIGO (IBGE)</div>
          <div class="cv" style="padding-top:3px;">${splitDigits('1504208', 7)}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">19</span> DISTRITO</div>
          <div class="cv">${data.patientDistrict || ''}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.5;">
          <div class="ct"><span class="cn">20</span> BAIRRO</div>
          <div class="cv">${data.patientNeighborhood || 'Nao informado'}</div>
        </div>
        <div class="sn-cell" style="flex:2.5;">
          <div class="ct"><span class="cn">21</span> LOGRADOURO (RUA, AVENIDA,...)</div>
          <div class="cv">${data.patientAddress || 'Nao informado'}</div>
        </div>
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct">C&Oacute;DIGO</div>
          <div class="cv"></div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct"><span class="cn">22</span> N&Uacute;MERO</div>
          <div class="cv">${data.patientNumber || 'S/N'}</div>
        </div>
        <div class="sn-cell" style="flex:1.6;">
          <div class="ct"><span class="cn">23</span> COMPLEMENTO (APTO., CASA,...)</div>
          <div class="cv">${data.patientComplement || ''}</div>
        </div>
        <div class="sn-cell" style="flex:1.6;">
          <div class="ct"><span class="cn">24</span> GEO CAMPO 1</div>
          <div class="cv"></div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct"><span class="cn">25</span> GEO CAMPO 2</div>
          <div class="cv"></div>
        </div>
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct"><span class="cn">26</span> PONTO DE REFER&Ecirc;NCIA</div>
          <div class="cv">${data.patientRef || ''}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">27</span> CEP</div>
          <div class="cv" style="padding-top:3px;">${formatCepDigits(data.patientCep)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.6;">
          <div class="ct"><span class="cn">28</span> (DDD) TELEFONE</div>
          <div class="cv" style="padding-top:3px;">${splitDigits((data.patientPhone || '').replace(/\D/g,''), 11)}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">29</span> ZONA</div>
          <div style="font-size:6px; line-height:1.1; margin-top:2px;">1 - Urbana &nbsp; 2 - Rural &nbsp; 3 - Periurbana &nbsp; 9 - Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${zoneCode}</div>
        </div>
        <div class="sn-cell" style="flex:0.9;">
          <div class="ct"><span class="cn">30</span> PA&Iacute;S (SE RESID. FORA)</div>
          <div class="cv">${data.patientCountry || ''}</div>
        </div>
      </div>
    </div>
  </div>

  <div style="background:#e6e6e6; font-size:8px; font-weight:bold; text-align:center; padding:2px; border:1px solid #000; border-bottom:none;">
    Dados Complementares do Caso
  </div>

  <!-- BLOCO 4: ANTECEDENTES EPIDEMIOLÓGICOS E SINAIS CLÍNICOS -->
  <div class="sn-block">
    <div class="sn-sidebar" style="font-size:6px;">Antecedentes Epidemiol&oacute;gicos</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct"><span class="cn">31</span> DATA DA INVESTIGA&Ccedil;&Atilde;O</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.dataInvestigacao), 8)}</div>
        </div>
        <div class="sn-cell" style="flex:2.8;">
          <div class="ct"><span class="cn">32</span> OCUPA&Ccedil;&Atilde;O</div>
          <div class="cv">${cs.occupation || ''}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell">
          <div class="ct"><span class="cn">33</span> SITUA&Ccedil;&Atilde;O DE RISCO OCORRIDA NOS 30 DIAS QUE ANTECEDERAM OS SINTOMAS</div>
          <div class="cv" style="font-size:8.5px;">${cs.situacaoRisco || '&Aacute;gua/lama de enchente, Fossa/esgoto, Rio/lagoa, Roedores, Lixo/entulho'}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:2.0;">
          <div class="ct"><span class="cn">34</span> CASOS ANTERIORES NO LOCAL PROV&Aacute;VEL DE INFEC&Ccedil;&Atilde;O (2 MESES)</div>
          <div style="font-size:5.5px; margin-top:2px;">1-Sim &nbsp; 2-N&atilde;o &nbsp; 9-Ignorado (Casos Humanos / Casos Animais)</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.casosAnteriores || '9'}</div>
        </div>
      </div>
    </div>
  </div>

  <div class="sn-block">
    <div class="sn-sidebar">Dados Cl&iacute;nicos / Atendimento</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">35</span> DATA ATENDIMENTO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.dataAtendimento), 8)}</div>
        </div>
        <div class="sn-cell" style="flex:3.0;">
          <div class="ct"><span class="cn">36</span> SINAIS E SINTOMAS</div>
          <div class="cv" style="font-size:8.5px;">${cs.sinaisSintomas || 'Febre, Mialgia, Dor panturrilha, Cefaleia, Icterícia, Insuficiência renal, Hemorragia'}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.0;">
          <div class="ct"><span class="cn">37</span> HOSPITALIZA&Ccedil;&Atilde;O?</div>
          <div style="font-size:6px; margin-top:2px;">1-Sim &nbsp; 2-N&atilde;o &nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.hospitalizacao || '2'}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">38</span> DATA INTERNA&Ccedil;&Atilde;O</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.dataInternacao), 8)}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">39</span> DATA DE ALTA</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.dataAlta), 8)}</div>
        </div>
        <div class="sn-cell" style="flex:0.4;">
          <div class="ct"><span class="cn">40</span> UF</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(cs.hospitalUf || 'PA', 2)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct"><span class="cn">41</span> MUNIC&Iacute;PIO HOSPITAL</div>
          <div class="cv">${cs.hospitalMun || ''}</div>
        </div>
        <div class="sn-cell" style="flex:2.2;">
          <div class="ct"><span class="cn">42</span> NOME DO HOSPITAL</div>
          <div class="cv">${cs.hospitalNome || ''}</div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer-info">
    <span>Leptospirose</span>
    <span>Sinan NET</span>
    <span>SVS 02/02/2007</span>
  </div>
</div>
        `;
    }

    function generatePage2LeptospiroseHtml(data) {
        return `
<div class="sinan-page">
  <div class="pg2-header">
    <p class="pg2-title">DADOS COMPLEMENTARES DO CASO - LEPTOSPIROSE</p>
  </div>

  <!-- BLOCO LABORATÓRIO -->
  <div class="sn-block">
    <div class="sn-sidebar">Laborat&oacute;rio</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:2.0;">
          <div class="ct"><span class="cn">43-46</span> SOROLOGIA IgM ELISA</div>
          <div style="font-size:5.5px; margin-top:2px;">1-Reagente &nbsp; 2-N&atilde;o Reagente &nbsp; 3-Inconclusivo &nbsp; 4-N&atilde;o Realizado (1&ordf; e 2&ordf; amostras)</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.elisaResultado || '4'}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:2.0;">
          <div class="ct"><span class="cn">47-54</span> MICROAGLUTINA&Ccedil;&Atilde;O (MAT)</div>
          <div style="font-size:5.5px; margin-top:2px;">1-Reagente &nbsp; 2-N&atilde;o Reagente &nbsp; 3-Inconclusivo &nbsp; 4-N&atilde;o Realizado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.matResultado || '4'}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.3;">
          <div class="ct"><span class="cn">55-56</span> ISOLAMENTO</div>
          <div style="font-size:5.5px; margin-top:2px;">1-Positivo &nbsp; 2-Negativo &nbsp; 3-Inconclusivo &nbsp; 4-N&atilde;o realizado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.isolamento || '4'}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.3;">
          <div class="ct"><span class="cn">57-58</span> IMUNOHISTOQU&Iacute;MICA</div>
          <div style="font-size:5.5px; margin-top:2px;">1-Positivo &nbsp; 2-Negativo &nbsp; 3-Inconclusivo &nbsp; 4-N&atilde;o realizado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.imunohistoquimica || '4'}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.3;">
          <div class="ct"><span class="cn">59-60</span> RT-PCR</div>
          <div style="font-size:5.5px; margin-top:2px;">1-Positivo &nbsp; 2-Negativo &nbsp; 3-Inconclusivo &nbsp; 4-N&atilde;o realizado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.pcr || '4'}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- BLOCO CONCLUSÃO -->
  <div class="sn-block">
    <div class="sn-sidebar">Conclus&atilde;o</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.0;">
          <div class="ct"><span class="cn">61</span> CLASSIFICA&Ccedil;&Atilde;O FINAL</div>
          <div style="font-size:6px; margin-top:2px;">1-Confirmado &nbsp;&nbsp; 2-Descartado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.classificacao || '1'}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">62</span> CRIT&Eacute;RIO DE CONFIRMA&Ccedil;&Atilde;O / DESCARTE</div>
          <div style="font-size:5.5px; margin-top:2px;">1-Cl&iacute;nico-Laboratorial &nbsp;&nbsp; 2-Cl&iacute;nico-Epidemiol&oacute;gico</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.criterio || '1'}</div>
        </div>
      </div>
      <div style="background:#e6e6e6; font-size:7.5px; font-weight:bold; padding:2px 5px; border-bottom:1px solid #000;">
        Local Prov&aacute;vel da Fonte de Infec&ccedil;&atilde;o (no per&iacute;odo de 30 dias)
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">63</span> AUT&Oacute;CTONE DO MUNIC&Iacute;PIO DE RESID&Ecirc;NCIA?</div>
          <div style="font-size:6px; margin-top:2px;">1-Sim &nbsp;&nbsp; 2-N&atilde;o &nbsp;&nbsp; 3-Indeterminado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.autoctone || '1'}</div>
        </div>
        <div class="sn-cell" style="flex:0.4;">
          <div class="ct"><span class="cn">64</span> UF</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(cs.ufInfeccao || 'PA', 2)}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">65</span> PA&Iacute;S</div>
          <div class="cv">${cs.paisInfeccao || 'Brasil'}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.5;">
          <div class="ct"><span class="cn">66</span> MUNIC&Iacute;PIO</div>
          <div class="cv">${cs.municipioInfeccao || ''}</div>
        </div>
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct">C&Oacute;DIGO (IBGE)</div>
          <div class="cv" style="padding-top:3px;">${splitDigits('', 7)}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">67</span> DISTRITO</div>
          <div class="cv">${cs.distritoInfeccao || ''}</div>
        </div>
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct"><span class="cn">68</span> BAIRRO</div>
          <div class="cv">${cs.bairroInfeccao || ''}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.2;">
          <div class="ct"><span class="cn">69</span> &Aacute;REA PROV&Aacute;VEL DE INFEC&Ccedil;&Atilde;O</div>
          <div style="font-size:5.5px; margin-top:2px;">1-Urbana &nbsp; 2-Rural &nbsp; 3-Peri-Urbana &nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.areaInfeccao || '1'}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">70</span> AMBIENTE DA INFEC&Ccedil;&Atilde;O</div>
          <div style="font-size:5.5px; margin-top:2px;">1-Domiciliar &nbsp; 2-Trabalho &nbsp; 3-Lazer &nbsp; 4-Outro &nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.ambienteInfeccao || '1'}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.2;">
          <div class="ct"><span class="cn">71</span> DOEN&Ccedil;A RELACIONADA AO TRABALHO?</div>
          <div style="font-size:6px; margin-top:2px;">1-Sim &nbsp;&nbsp; 2-N&atilde;o &nbsp;&nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.trabalho || '2'}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">72</span> EVOLU&Ccedil;&Atilde;O DO CASO</div>
          <div style="font-size:5.5px; margin-top:2px;">1-Cura &nbsp; 2-&Oacute;bito por leptospirose &nbsp; 3-&Oacute;bito por outras &nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.evolucao || '1'}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">73</span> DATA DO &Oacute;BITO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.dataObito), 8)}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">74</span> DATA DO ENCERRAMENTO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.dataEncerramento || data.dataNotificacao), 8)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell">
          <div class="ct">INFORMA&Ccedil;&Otilde;ES COMPLEMENTARES E OBSERVA&Ccedil;&Otilde;ES</div>
          <div class="cv" style="font-size:9px; font-weight:normal; min-height:40px;">${cs.obs || ''}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- BLOCO INVESTIGADOR -->
  <div class="sn-block">
    <div class="sn-sidebar">Investigador</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="flex:2.0;">
          <div class="ct">MUNIC&Iacute;PIO/UNIDADE DE SA&Uacute;DE</div>
          <div class="cv">${data.munNotificacao || 'MARABA'} / ${unitName}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct">C&Oacute;D. DA UNID. DE SA&Uacute;DE</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(cnesCode, 7)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct">NOME</div>
          <div class="cv" style="font-weight:900; font-size:10px;">${data.notificatorName || 'Profissional de Saude'}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct">FUN&Ccedil;&Atilde;O</div>
          <div class="cv">Profissional de Saude</div>
        </div>
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct">ASSINATURA</div>
          <div class="cv" style="border-bottom:1px dotted #555; margin-top:4px; min-height:14px;"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer-info">
    <span>Leptospirose</span>
    <span>Sinan NET</span>
    <span>SVS 02/02/2007</span>
  </div>
</div>
        `;
    }

    // ----------------------------------------------------
    // 4. LEISHMANIOSE VISCERAL (SVS 27/09/2005) - 2 PAGINAS
    // ----------------------------------------------------
    function generatePage1LeishVisceralHtml(data) {
        return `
<div class="sinan-page">
  <div class="sn-header">
    <div class="sn-header-left">
      Rep&uacute;blica Federativa do Brasil<br>
      Minist&eacute;rio da Sa&uacute;de
    </div>
    <div class="sn-header-center">
      <p class="sn-sinan">SINAN</p>
      <p class="sn-title">SISTEMA DE INFORMA&Ccedil;&Atilde;O DE AGRAVOS DE NOTIFICA&Ccedil;&Atilde;O</p>
      <p class="sn-subtitle">FICHA DE INVESTIGA&Ccedil;&Atilde;O LEISHMANIOSE VISCERAL N&ordm;</p>
    </div>
    <div class="sn-header-right">
      <span class="sn-num-label">N&ordm;</span>
      <div class="sn-num-box">${data.sinan_number || '---.---'}</div>
    </div>
  </div>

  <div style="border:1.5px solid #000; padding:3px 6px; margin-bottom:4px; font-size:6.5px; line-height:1.2; background:#fafafa;">
    <strong>CASO SUSPEITO:</strong> Todo indiv&iacute;duo proveniente de &aacute;rea com ocorr&ecirc;ncia de transmiss&atilde;o, com febre e esplenomegalia. Todo indiv&iacute;duo proveniente de &aacute;rea sem ocorr&ecirc;ncia de transmiss&atilde;o, com febre e esplenomegalia, desde que descartado os diagn&oacute;sticos diferenciais mais freq&uuml;entes na regi&atilde;o.
  </div>

  <!-- BLOCO 1: DADOS GERAIS -->
  <div class="sn-block">
    <div class="sn-sidebar">Dados Gerais</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1; min-height:22px;">
          <div class="ct"><span class="cn">1</span> TIPO DE NOTIFICA&Ccedil;&Atilde;O</div>
          <div style="font-size:7.5px; margin-top:2px;">2 - Individual</div>
          <div class="single-box" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);">${tipoNotif}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:2.5; position:relative;">
          <div class="ct"><span class="cn">2</span> AGRAVO/DOEN&Ccedil;A</div>
          <div style="font-size:10px; font-weight:900; margin-top:2px;">LEISHMANIOSE VISCERAL</div>
          <div style="position:absolute; right:8px; top:4px; font-size:7px; font-weight:bold;">
            C&oacute;digo (CID10)<br>
            <span style="font-size:8.5px; border:1px solid #000; padding:1px 4px; font-family:monospace; background:#fff;">B 5 5.0</span>
          </div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">3</span> DATA DA NOTIFICA&Ccedil;&Atilde;O</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(data.dataNotificacao), 8)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.4;">
          <div class="ct"><span class="cn">4</span> UF</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(data.ufNotificacao || 'PA', 2)}</div>
        </div>
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct"><span class="cn">5</span> MUNIC&Iacute;PIO DE NOTIFICA&Ccedil;&Atilde;O</div>
          <div class="cv">${data.munNotificacao || 'MARABA'}</div>
        </div>
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct">C&Oacute;DIGO (IBGE)</div>
          <div class="cv" style="padding-top:3px;">${splitDigits('1504208', 7)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:2.2;">
          <div class="ct"><span class="cn">6</span> UNIDADE DE SA&Uacute;DE (OU OUTRA FONTE NOTIFICADORA)</div>
          <div class="cv">${unitName}</div>
        </div>
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct">C&Oacute;DIGO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(cnesCode, 7)}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">7</span> DATA DOS PRIMEIROS SINTOMAS</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(data.symptomsDate), 8)}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- BLOCO 2: NOTIFICAÇÃO INDIVIDUAL -->
  <div class="sn-block">
    <div class="sn-sidebar">Notifica&ccedil;&atilde;o Individual</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="flex:3.0;">
          <div class="ct"><span class="cn">8</span> NOME DO PACIENTE</div>
          <div class="cv" style="font-size:10px; font-weight:900;">${data.patientName || 'Nao informado'}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">9</span> DATA DE NASCIMENTO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(data.patientBirthDate), 8)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.9;">
          <div class="ct"><span class="cn">10</span> (OU) IDADE</div>
          <div style="display:flex; align-items:center; gap:3px; margin-top:2px;">
            <div>${splitDigits(data.patientAge || '', 3, true)}</div>
            <div class="single-box">${data.patientAge ? '4' : '&nbsp;'}</div>
            <div style="font-size:5px; line-height:1.0; font-weight:bold; margin-left:2px;">1 - Hora<br>2 - Dia<br>3 - M&ecirc;s<br>4 - Ano</div>
          </div>
        </div>
        <div class="sn-cell" style="position:relative; flex:0.7;">
          <div class="ct"><span class="cn">11</span> SEXO</div>
          <div style="font-size:5.5px; line-height:1.1; margin-top:2px;">M - Masculino<br>F - Feminino<br>I - Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${sexCode}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">12</span> GESTANTE</div>
          <div style="font-size:5.2px; line-height:1.1; margin-top:2px;">1-1&ordm;Trim. &nbsp; 2-2&ordm;Trim. &nbsp; 3-3&ordm;Trim.<br>4-Ignorada &nbsp; 5-N&atilde;o &nbsp; 6-N&atilde;o se aplica &nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${pregnantCode}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.3;">
          <div class="ct"><span class="cn">13</span> RA&Ccedil;A/COR</div>
          <div style="font-size:5.5px; line-height:1.1; margin-top:2px;">1-Branca &nbsp; 2-Preta &nbsp; 3-Amarela<br>4-Parda &nbsp; 5-Ind&iacute;gena &nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${raceCode}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative;">
          <div class="ct"><span class="cn">14</span> ESCOLARIDADE</div>
          <div style="font-size:5px; line-height:1.2; margin-top:2px; padding-right:25px;">
            0-Analfabeto &nbsp;&nbsp; 1-1&ordf; a 4&ordf; s&eacute;rie inc. EF &nbsp;&nbsp; 2-4&ordf; s&eacute;rie comp. EF &nbsp;&nbsp; 3-5&ordf; &agrave; 8&ordf; s&eacute;rie inc. EF &nbsp;&nbsp; 4-EF completo<br>
            5-EM incompleto &nbsp;&nbsp; 6-EM completo &nbsp;&nbsp; 7-Superior incompleto &nbsp;&nbsp; 8-Superior completo &nbsp;&nbsp; 9-Ignorado &nbsp;&nbsp; 10-N&atilde;o se aplica
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);">${schoolCode}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:2.2;">
          <div class="ct"><span class="cn">15</span> N&Uacute;MERO DO CART&Atilde;O SUS</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(data.patientCns || '', 15)}</div>
        </div>
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct"><span class="cn">16</span> NOME DA M&Atilde;E</div>
          <div class="cv" style="font-size:9px;">${data.patientMotherName || 'Nao informada'}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- BLOCO 3: DADOS DE RESIDÊNCIA -->
  <div class="sn-block">
    <div class="sn-sidebar">Dados de Resid&ecirc;ncia</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.35;">
          <div class="ct"><span class="cn">17</span> UF</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(data.patientUf || 'PA', 2)}</div>
        </div>
        <div class="sn-cell" style="flex:1.7;">
          <div class="ct"><span class="cn">18</span> MUNIC&Iacute;PIO DE RESID&Ecirc;NCIA</div>
          <div class="cv">${data.patientMunicipality || 'MARABA'}</div>
        </div>
        <div class="sn-cell" style="flex:0.9;">
          <div class="ct">C&Oacute;DIGO (IBGE)</div>
          <div class="cv" style="padding-top:3px;">${splitDigits('1504208', 7)}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">19</span> DISTRITO</div>
          <div class="cv">${data.patientDistrict || ''}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.5;">
          <div class="ct"><span class="cn">20</span> BAIRRO</div>
          <div class="cv">${data.patientNeighborhood || 'Nao informado'}</div>
        </div>
        <div class="sn-cell" style="flex:2.5;">
          <div class="ct"><span class="cn">21</span> LOGRADOURO (RUA, AVENIDA,...)</div>
          <div class="cv">${data.patientAddress || 'Nao informado'}</div>
        </div>
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct">C&Oacute;DIGO</div>
          <div class="cv"></div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct"><span class="cn">22</span> N&Uacute;MERO</div>
          <div class="cv">${data.patientNumber || 'S/N'}</div>
        </div>
        <div class="sn-cell" style="flex:1.6;">
          <div class="ct"><span class="cn">23</span> COMPLEMENTO (APTO., CASA,...)</div>
          <div class="cv">${data.patientComplement || ''}</div>
        </div>
        <div class="sn-cell" style="flex:1.6;">
          <div class="ct"><span class="cn">24</span> GEO CAMPO 1</div>
          <div class="cv"></div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct"><span class="cn">25</span> GEO CAMPO 2</div>
          <div class="cv"></div>
        </div>
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct"><span class="cn">26</span> PONTO DE REFER&Ecirc;NCIA</div>
          <div class="cv">${data.patientRef || ''}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">27</span> CEP</div>
          <div class="cv" style="padding-top:3px;">${formatCepDigits(data.patientCep)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.6;">
          <div class="ct"><span class="cn">28</span> (DDD) TELEFONE</div>
          <div class="cv" style="padding-top:3px;">${splitDigits((data.patientPhone || '').replace(/\D/g,''), 11)}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">29</span> ZONA</div>
          <div style="font-size:6px; line-height:1.1; margin-top:2px;">1 - Urbana &nbsp; 2 - Rural &nbsp; 3 - Periurbana &nbsp; 9 - Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${zoneCode}</div>
        </div>
        <div class="sn-cell" style="flex:0.9;">
          <div class="ct"><span class="cn">30</span> PA&Iacute;S (SE RESID. FORA)</div>
          <div class="cv">${data.patientCountry || ''}</div>
        </div>
      </div>
    </div>
  </div>

  <div style="background:#e6e6e6; font-size:8px; font-weight:bold; text-align:center; padding:2px; border:1px solid #000; border-bottom:none;">
    Dados Complementares do Caso
  </div>

  <!-- BLOCO 4: ANTECEDENTES, DADOS CLÍNICOS E LABORATÓRIO -->
  <div class="sn-block">
    <div class="sn-sidebar" style="font-size:6px;">Antecedentes / Cl&iacute;nica / Lab</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct"><span class="cn">31</span> DATA DA INVESTIGA&Ccedil;&Atilde;O</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.dataInvestigacao), 8)}</div>
        </div>
        <div class="sn-cell" style="flex:2.8;">
          <div class="ct"><span class="cn">32</span> OCUPA&Ccedil;&Atilde;O</div>
          <div class="cv">${cs.occupation || ''}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:3.0;">
          <div class="ct"><span class="cn">33</span> MANIFESTA&Ccedil;&Otilde;ES CL&Iacute;NICAS (SINAIS E SINTOMAS)</div>
          <div class="cv" style="font-size:8.5px;">${cs.sintomas || 'Febre, Fraqueza, Edema, Emagrecimento, Tosse/diarreia, Palidez, Aumento do Baço/Fígado, Icterícia'}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.0;">
          <div class="ct"><span class="cn">34</span> CO-INFEC&Ccedil;&Atilde;O HIV</div>
          <div style="font-size:6px; margin-top:2px;">1-Sim &nbsp; 2-N&atilde;o &nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.hiv || '2'}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">35</span> DIAGN&Oacute;STICO PARASITOL&Oacute;GICO</div>
          <div style="font-size:5.5px; margin-top:2px;">1-Positivo &nbsp; 2-Negativo &nbsp; 3-N&atilde;o Realizado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.diagParasito || '3'}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">36</span> DIAGN&Oacute;STICO IMUNOL&Oacute;GICO (IFI / OUTRO)</div>
          <div style="font-size:5.5px; margin-top:2px;">1-Positivo &nbsp; 2-Negativo &nbsp; 3-N&atilde;o Realizado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.diagImuno || '3'}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.0;">
          <div class="ct"><span class="cn">37</span> TIPO DE ENTRADA</div>
          <div style="font-size:5.5px; margin-top:2px;">1-Caso Novo &nbsp; 2-Recidiva &nbsp; 3-Transfer&ecirc;ncia &nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.tipoEntrada || '1'}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- TRATAMENTO -->
  <div class="sn-block">
    <div class="sn-sidebar">Tratamento</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">38</span> DATA IN&Iacute;CIO TRATAMENTO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.inicioTratamento), 8)}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:2.0;">
          <div class="ct"><span class="cn">39</span> DROGA INICIAL ADMINISTRADA</div>
          <div style="font-size:5px; margin-top:2px;">1-Antimonial Pentavalente &nbsp; 2-Anfotericina b &nbsp; 3-Pentamidina &nbsp; 4-Anfotericina lipossomal &nbsp; 5-Outras &nbsp; 6-N&atilde;o Utilizada</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.droga || '1'}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct"><span class="cn">40</span> PESO (KG)</div>
          <div class="cv">${cs.peso || ''}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">41</span> DOSE PRESCRITA (MG/KG/DIA Sb+5)</div>
          <div style="font-size:5px; margin-top:2px;">1- &ge;10 e <15 &nbsp; 2- &ge;15 e <20 &nbsp; 3- &ge;20</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.dose || '1'}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">42</span> N&ordm; TOTAL AMPOLAS PRESCRITAS</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(cs.ampolas || '', 3)}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">43</span> OUTRA DROGA (FAL&Ecirc;NCIA TRAT. INICIAL)</div>
          <div style="font-size:5px; margin-top:2px;">1-Anfotericina b &nbsp; 2-Anfotericina lipossomal &nbsp; 3-Outras &nbsp; 4-N&atilde;o se Aplica</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.outraDroga || '4'}</div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer-info">
    <span>Leishmaniose Visceral</span>
    <span>Sinan NET</span>
    <span>SVS 27/09/2005</span>
  </div>
</div>
        `;
    }

    function generatePage2LeishVisceralHtml(data) {
        return `
<div class="sinan-page">
  <div class="pg2-header">
    <p class="pg2-title">DADOS COMPLEMENTARES DO CASO - LEISHMANIOSE VISCERAL</p>
  </div>

  <!-- BLOCO CONCLUSÃO -->
  <div class="sn-block">
    <div class="sn-sidebar">Conclus&atilde;o</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.0;">
          <div class="ct"><span class="cn">44</span> CLASSIFICA&Ccedil;&Atilde;O FINAL</div>
          <div style="font-size:6px; margin-top:2px;">1-Confirmado &nbsp;&nbsp; 2-Descartado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.classificacao || '1'}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">45</span> CRIT&Eacute;RIO DE CONFIRMA&Ccedil;&Atilde;O</div>
          <div style="font-size:6px; margin-top:2px;">1-Laboratorial &nbsp;&nbsp; 2-Cl&iacute;nico-Epidemiol&oacute;gico</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.criterio || '1'}</div>
        </div>
      </div>
      <div style="background:#e6e6e6; font-size:7.5px; font-weight:bold; padding:2px 5px; border-bottom:1px solid #000;">
        Local Prov&aacute;vel da Fonte de Infec&ccedil;&atilde;o
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">46</span> AUT&Oacute;CTONE DO MUNIC&Iacute;PIO DE RESID&Ecirc;NCIA?</div>
          <div style="font-size:6px; margin-top:2px;">1-Sim &nbsp;&nbsp; 2-N&atilde;o &nbsp;&nbsp; 3-Indeterminado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.autoctone || '1'}</div>
        </div>
        <div class="sn-cell" style="flex:0.4;">
          <div class="ct"><span class="cn">47</span> UF</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(cs.ufInfeccao || 'PA', 2)}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">48</span> PA&Iacute;S</div>
          <div class="cv">${cs.paisInfeccao || 'Brasil'}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.5;">
          <div class="ct"><span class="cn">49</span> MUNIC&Iacute;PIO</div>
          <div class="cv">${cs.municipioInfeccao || ''}</div>
        </div>
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct">C&Oacute;DIGO (IBGE)</div>
          <div class="cv" style="padding-top:3px;">${splitDigits('', 7)}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">50</span> DISTRITO</div>
          <div class="cv">${cs.distritoInfeccao || ''}</div>
        </div>
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct"><span class="cn">51</span> BAIRRO</div>
          <div class="cv">${cs.bairroInfeccao || ''}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.2;">
          <div class="ct"><span class="cn">52</span> DOEN&Ccedil;A RELACIONADA AO TRABALHO?</div>
          <div style="font-size:6px; margin-top:2px;">1-Sim &nbsp;&nbsp; 2-N&atilde;o &nbsp;&nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.trabalho || '2'}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">53</span> EVOLU&Ccedil;&Atilde;O DO CASO</div>
          <div style="font-size:5.5px; margin-top:2px;">1-Cura &nbsp; 2-Abandono &nbsp; 3-&Oacute;bito por LV &nbsp; 4-&Oacute;bito por outras &nbsp; 5-Transfer&ecirc;ncia</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.evolucao || '1'}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">54</span> DATA DO &Oacute;BITO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.dataObito), 8)}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">55</span> DATA DO ENCERRAMENTO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.dataEncerramento || data.dataNotificacao), 8)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell">
          <div class="ct">INFORMA&Ccedil;&Otilde;ES COMPLEMENTARES E OBSERVA&Ccedil;&Otilde;ES (DESLOCAMENTO NOS &Uacute;LTIMOS 6 MESES)</div>
          <div class="cv" style="font-size:9px; font-weight:normal; min-height:40px;">${cs.deslocamentos || ''} ${cs.obs || ''}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- BLOCO INVESTIGADOR -->
  <div class="sn-block">
    <div class="sn-sidebar">Investigador</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="flex:2.0;">
          <div class="ct">MUNIC&Iacute;PIO/UNIDADE DE SA&Uacute;DE</div>
          <div class="cv">${data.munNotificacao || 'MARABA'} / ${unitName}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct">C&Oacute;D. DA UNID. DE SA&Uacute;DE</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(cnesCode, 7)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct">NOME</div>
          <div class="cv" style="font-weight:900; font-size:10px;">${data.notificatorName || 'Profissional de Saude'}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct">FUN&Ccedil;&Atilde;O</div>
          <div class="cv">Profissional de Saude</div>
        </div>
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct">ASSINATURA</div>
          <div class="cv" style="border-bottom:1px dotted #555; margin-top:4px; min-height:14px;"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer-info">
    <span>Leishmaniose Visceral</span>
    <span>Sinan NET</span>
    <span>SVS 27/09/2005</span>
  </div>
</div>
        `;
    }

    function generatePage1HanseniaseHtml(data) {
        return `
<div class="sinan-page">
  <div class="sn-header">
    <div class="sn-header-left">
      Rep&uacute;blica Federativa do Brasil<br>
      Minist&eacute;rio da Sa&uacute;de<br>
      Secretaria de Vigil&acirc;ncia em Sa&uacute;de
    </div>
    <div class="sn-header-center">
      <p class="sn-sinan">SINAN</p>
      <p class="sn-title">SISTEMA DE INFORMA&Ccedil;&Atilde;O DE AGRAVOS DE NOTIFICA&Ccedil;&Atilde;O</p>
      <p class="sn-subtitle">FICHA DE NOTIFICA&Ccedil;&Atilde;O / INVESTIGA&Ccedil;&Atilde;O HANSEN&Iacute;ASE</p>
    </div>
    <div class="sn-header-right">
      <span class="sn-num-label">N&ordm;</span>
      <div class="sn-num-box">${data.sinan_number || '---.---'}</div>
    </div>
  </div>

  <div style="border:1.5px solid #000; padding:3px 6px; margin-bottom:4px; font-size:7px; line-height:1.2; background:#fafafa;">
    <strong>CASO CONFIRMADO DE HANSEN&Iacute;ASE:</strong> Pessoa que apresenta uma ou mais das seguintes caracter&iacute;sticas e que requer poliquimioterapia: les&atilde;o(ões) de pele com altera&ccedil;&atilde;o de sensibilidade; acometimento de nervo(s) com espessamento neural; baciloscopia positiva.
  </div>

  <!-- BLOCO 1: DADOS GERAIS -->
  <div class="sn-block">
    <div class="sn-sidebar">Dados Gerais</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1; min-height:22px;">
          <div class="ct"><span class="cn">1</span> TIPO DE NOTIFICA&Ccedil;&Atilde;O</div>
          <div style="font-size:7.5px; margin-top:2px;">2 - Individual</div>
          <div class="single-box" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);">${tipoNotif}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:2.5; position:relative;">
          <div class="ct"><span class="cn">2</span> AGRAVO/DOEN&Ccedil;A</div>
          <div style="display:flex; justify-content:space-between; align-items:center; width:100%; font-size:11px; font-weight:900;">
            <span>HANSEN&Iacute;ASE</span>
            <span style="font-size:7px; font-weight:bold; display:inline-flex; align-items:center;">
              C&oacute;digo (CID10) &nbsp; <span style="display:inline-block; font-size:9px; font-weight:bold; letter-spacing:1px; border:1px solid #000; padding:1px 2px; background:#fff; margin-left:3px; font-family:monospace; line-height:1;">A 3 0 . 9</span>
            </span>
          </div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">3</span> DATA DA NOTIFICA&Ccedil;&Atilde;O</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(data.dataNotificacao), 8)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.4;">
          <div class="ct"><span class="cn">4</span> UF</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(data.ufNotificacao || 'PA', 2)}</div>
        </div>
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct"><span class="cn">5</span> MUNICIPIO DE NOTIFICACAO</div>
          <div class="cv">${data.munNotificacao || 'MARABA'}</div>
        </div>
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct">CODIGO (IBGE)</div>
          <div class="cv" style="padding-top:3px;">${splitDigits('1504208', 7)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:2.2;">
          <div class="ct"><span class="cn">6</span> UNIDADE DE SAUDE (OU OUTRA FONTE NOTIFICADORA)</div>
          <div class="cv">${unitName}</div>
        </div>
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct">CODIGO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(cnesCode, 7)}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">7</span> DATA DO DIAGN&Oacute;STICO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.dataDiagnostico || data.symptomsDate), 8)}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- BLOCO 2: NOTIFICACAO INDIVIDUAL -->
  <div class="sn-block">
    <div class="sn-sidebar">Notificacao Individual</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="flex:3.0;">
          <div class="ct"><span class="cn">8</span> NOME DO PACIENTE</div>
          <div class="cv" style="font-size:10px; font-weight:900;">${data.patientName || 'Nao informado'}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">9</span> DATA DE NASCIMENTO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(data.patientBirthDate), 8)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.9;">
          <div class="ct"><span class="cn">10</span> (OU) IDADE</div>
          <div style="display:flex; align-items:center; gap:3px; margin-top:2px;">
            <div>${splitDigits(data.patientAge || '', 3, true)}</div>
            <div class="single-box">${data.patientAge ? '4' : '&nbsp;'}</div>
            <div style="font-size:5px; line-height:1.0; font-weight:bold; margin-left:2px;">
              1 - Hora<br>2 - Dia<br>3 - M&ecirc;s<br>4 - Ano
            </div>
          </div>
        </div>
        <div class="sn-cell" style="position:relative; flex:0.7;">
          <div class="ct"><span class="cn">11</span> SEXO</div>
          <div style="font-size:5.5px; line-height:1.1; margin-top:2px;">M - Masculino<br>F - Feminino<br>I - Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${sexCode}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">12</span> GESTANTE</div>
          <div style="font-size:5.2px; line-height:1.1; margin-top:2px;">
            1-1&ordm;Trim &nbsp;&nbsp; 2-2&ordm;Trim &nbsp;&nbsp; 3-3&ordm;Trim<br>
            4-Idade Ign. &nbsp;&nbsp; 5-N&atilde;o &nbsp;&nbsp; 6-N&atilde;o se aplica &nbsp;&nbsp; 9-Ign
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${pregnantCode}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.3;">
          <div class="ct"><span class="cn">13</span> RACA/COR</div>
          <div style="font-size:5.5px; line-height:1.1; margin-top:2px;">
            1-Branca &nbsp;&nbsp; 2-Preta &nbsp;&nbsp; 3-Amarela<br>
            4-Parda &nbsp;&nbsp; 5-Ind&iacute;gena &nbsp;&nbsp; 9-Ignorado
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${raceCode}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative;">
          <div class="ct"><span class="cn">14</span> ESCOLARIDADE</div>
          <div style="font-size:5px; line-height:1.2; margin-top:2px; padding-right:25px;">
            0-Analfabeto &nbsp;&nbsp; 1-1&ordf; a 4&ordf; s&eacute;rie inc EF &nbsp;&nbsp; 2-4&ordf; s&eacute;rie comp EF &nbsp;&nbsp; 3-5&ordf; a 8&ordf; s&eacute;rie inc EF &nbsp;&nbsp; 4-EF completo<br>
            5-EM incompleto &nbsp;&nbsp; 6-EM completo &nbsp;&nbsp; 7-Superior incompleto &nbsp;&nbsp; 8-Superior completo &nbsp;&nbsp; 9-Ignorado &nbsp;&nbsp; 10-N/A
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);">${schoolCode}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:2.2;">
          <div class="ct"><span class="cn">15</span> NUMERO DO CARTAO SUS</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(data.patientCns || '', 15)}</div>
        </div>
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct"><span class="cn">16</span> NOME DA MAE</div>
          <div class="cv" style="font-size:9px;">${data.patientMotherName || 'Nao informada'}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- BLOCO 3: DADOS DE RESIDENCIA -->
  <div class="sn-block">
    <div class="sn-sidebar">Dados de Residencia</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.35;">
          <div class="ct"><span class="cn">17</span> UF</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(data.patientUf || 'PA', 2)}</div>
        </div>
        <div class="sn-cell" style="flex:1.7;">
          <div class="ct"><span class="cn">18</span> MUNICIPIO DE RESIDENCIA</div>
          <div class="cv">${data.patientMunicipality || 'MARABA'}</div>
        </div>
        <div class="sn-cell" style="flex:0.9;">
          <div class="ct">CODIGO (IBGE)</div>
          <div class="cv" style="padding-top:3px;">${splitDigits('1504208', 7)}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">19</span> DISTRITO</div>
          <div class="cv">${data.patientDistrict || ''}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.5;">
          <div class="ct"><span class="cn">20</span> BAIRRO</div>
          <div class="cv">${data.patientNeighborhood || 'Nao informado'}</div>
        </div>
        <div class="sn-cell" style="flex:2.5;">
          <div class="ct"><span class="cn">21</span> LOGRADOURO (RUA, AVENIDA,...)</div>
          <div class="cv">${data.patientAddress || 'Nao informado'}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct"><span class="cn">22</span> NUMERO</div>
          <div class="cv">${data.patientNumber || 'S/N'}</div>
        </div>
        <div class="sn-cell" style="flex:1.6;">
          <div class="ct"><span class="cn">23</span> COMPLEMENTO (APTO., CASA,...)</div>
          <div class="cv">${data.patientComplement || ''}</div>
        </div>
        <div class="sn-cell" style="flex:1.6;">
          <div class="ct"><span class="cn">24</span> GEO CAMPO 1</div>
          <div class="cv"></div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct"><span class="cn">25</span> GEO CAMPO 2</div>
          <div class="cv"></div>
        </div>
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct"><span class="cn">26</span> PONTO DE REFERENCIA</div>
          <div class="cv">${data.patientRef || ''}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">27</span> CEP</div>
          <div class="cv" style="padding-top:3px;">${formatCepDigits(data.patientCep)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.6;">
          <div class="ct"><span class="cn">28</span> (DDD) TELEFONE</div>
          <div class="cv" style="padding-top:3px;">${splitDigits((data.patientPhone || '').replace(/\\D/g,''), 11)}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">29</span> ZONA</div>
          <div style="font-size:6px; line-height:1.1; margin-top:2px;">1 - Urbana &nbsp;&nbsp; 2 - Rural &nbsp;&nbsp; 3 - Periurbana &nbsp;&nbsp; 9 - Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${zoneCode}</div>
        </div>
        <div class="sn-cell" style="flex:0.9;">
          <div class="ct"><span class="cn">30</span> PAIS (SE RESID. FORA)</div>
          <div class="cv">${data.patientCountry || ''}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- BLOCO 4: DADOS CLINICOS E TRATAMENTO -->
  <div class="sn-block">
    <div class="sn-sidebar">Dados Cl&iacute;nicos / Atendimento</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.5;">
          <div class="ct"><span class="cn">31</span> N&ordm; DO PRONTU&Aacute;RIO / OCUPA&Ccedil;&Atilde;O</div>
          <div class="cv">${cs.prontuario || ''} ${cs.occupation ? ' - ' + cs.occupation : ''}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">32</span> DATA DO DIAGN&Oacute;STICO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.dataDiagnostico || data.symptomsDate), 8)}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">33</span> N&ordm; DE LES&Otilde;ES CUT&Acirc;NEAS</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(cs.lesoesCutaneas || '', 2)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:2.2;">
          <div class="ct"><span class="cn">34</span> FORMA CL&Iacute;NICA</div>
          <div style="font-size:5.5px; line-height:1.2; margin-top:2px; padding-right:20px;">
            1 - Indeterminada &nbsp;&nbsp; 2 - Tubercul&oacute;ide &nbsp;&nbsp; 3 - Dimorfa<br>
            4 - Virchowiana &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 - N&atilde;o classificado
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);">${cs.formaClinica || '1'}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">35</span> CLASSIFICA&Ccedil;&Atilde;O OPERACIONAL</div>
          <div style="font-size:6px; line-height:1.2; margin-top:2px;">
            1 - PB (Paucibacilar) &nbsp;&nbsp;&nbsp;&nbsp; 2 - MB (Multibacilar)
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);">${cs.classOperacional || '1'}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">36</span> N&ordm; NERVOS AFETADOS</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(cs.nervosAfetados || '0', 2)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:2.0;">
          <div class="ct"><span class="cn">37</span> GRAU DE INCAPACIDADE F&Iacute;SICA NO DIAGN&Oacute;STICO</div>
          <div style="font-size:5.5px; line-height:1.2; margin-top:2px; padding-right:20px;">
            0 - Grau Zero &nbsp;&nbsp; 1 - Grau I &nbsp;&nbsp; 2 - Grau II &nbsp;&nbsp; 3 - N&atilde;o Avaliado
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);">${cs.incapacidadeFisica || '0'}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:2.0;">
          <div class="ct"><span class="cn">38</span> MODO DE ENTRADA</div>
          <div style="font-size:5px; line-height:1.1; margin-top:2px; padding-right:20px;">
            1-Caso Novo &nbsp; 2-Transf mesmo mun &nbsp; 3-Transf outro mun &nbsp; 4-Transf outro estado<br>
            5-Transf outro pa&iacute;s &nbsp; 6-Recidiva &nbsp; 7-Outros reingressos &nbsp; 9-Ignorado
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);">${cs.modoEntrada || '1'}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:2.0;">
          <div class="ct"><span class="cn">39</span> MODO DE DETEC&Ccedil;&Atilde;O DO CASO NOVO</div>
          <div style="font-size:5.5px; line-height:1.2; margin-top:2px; padding-right:20px;">
            1 - Encaminhamento &nbsp;&nbsp; 2 - Demanda Espont&acirc;nea &nbsp;&nbsp; 3 - Exame Coletividade<br>
            4 - Exame Contatos &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 - Outros Modos &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9 - Ignorado
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);">${cs.modoDeteccao || '2'}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">40</span> BACILOSCOPIA</div>
          <div style="font-size:5.5px; line-height:1.2; margin-top:2px;">
            1-Positiva &nbsp; 2-Negativa &nbsp; 3-N&atilde;o realizada &nbsp; 9-Ignorado
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);">${cs.baciloscopia || '2'}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">41</span> DATA IN&Iacute;CIO TRATAMENTO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.dataInicioTratamento || ''), 8)}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.8;">
          <div class="ct"><span class="cn">42</span> ESQUEMA TERAP&Ecirc;UTICO INICIAL</div>
          <div style="font-size:5.2px; line-height:1.1; margin-top:2px; padding-right:20px;">
            1 - PQT/PB/6 doses &nbsp;&nbsp;&nbsp;&nbsp; 2 - PQT/MB/12 doses<br>
            3 - Outros Esquemas Substitutos
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);">${cs.esquemaTerapeutico || '1'}</div>
        </div>
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct"><span class="cn">43</span> N&ordm; CONTATOS REGISTRADOS</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(cs.contatosRegistrados || '0', 3)}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- INVESTIGADOR SIGNATURES -->
  <div class="sn-block" style="margin-top:4px;">
    <div class="sn-sidebar">Investigador</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="flex:2.0;">
          <div class="ct">MUNICIPIO / UNIDADE DE SA&Uacute;DE</div>
          <div class="cv">${data.munNotificacao || 'MARABA'} / ${unitName}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct">C&Oacute;DIGO DA UNID. DE SA&Uacute;DE</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(cnesCode, 7)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct">NOME DO INVESTIGADOR</div>
          <div class="cv" style="font-weight:900; font-size:10px;">${data.notificatorName || 'Profissional de Saude'}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct">FUN&Ccedil;&Atilde;O</div>
          <div class="cv">Profissional de Saude</div>
        </div>
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct">ASSINATURA</div>
          <div class="cv" style="border-bottom:1px dotted #555; margin-top:4px; min-height:14px;"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer-info">
    <span>Hansen&iacute;ase</span>
    <span>Sinan NET</span>
    <span>SVS 30/10/2007</span>
  </div>
</div>
`;
    }

    function generatePage1TracomaHtml(data) {
        return `
<div class="sinan-page">
  <div class="sn-header">
    <div class="sn-header-left">
      Rep&uacute;blica Federativa do Brasil<br>
      Minist&eacute;rio da Sa&uacute;de<br>
      Secretaria de Vigil&acirc;ncia em Sa&uacute;de
    </div>
    <div class="sn-header-center">
      <p class="sn-sinan">SINAN</p>
      <p class="sn-title">SISTEMA DE INFORMA&Ccedil;&Atilde;O DE AGRAVOS DE NOTIFICA&Ccedil;&Atilde;O</p>
      <p class="sn-subtitle">INQU&Eacute;RITO DE TRACOMA / FICHA DE INVESTIGA&Ccedil;&Atilde;O</p>
    </div>
    <div class="sn-header-right">
      <span class="sn-num-label">N&ordm;</span>
      <div class="sn-num-box">${data.sinan_number || '---.---'}</div>
    </div>
  </div>

  <!-- BLOCO 1: DADOS GERAIS -->
  <div class="sn-block">
    <div class="sn-sidebar">Dados Gerais</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1; min-height:22px;">
          <div class="ct"><span class="cn">1</span> TIPO DE NOTIFICA&Ccedil;&Atilde;O</div>
          <div style="font-size:7.5px; margin-top:2px;">4 - Inqu&eacute;rito Tracoma</div>
          <div class="single-box" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);">4</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:2.5; position:relative;">
          <div class="ct"><span class="cn">2</span> AGRAVO/DOEN&Ccedil;A</div>
          <div style="display:flex; justify-content:space-between; align-items:center; width:100%; font-size:11px; font-weight:900;">
            <span>TRACOMA</span>
            <span style="font-size:7px; font-weight:bold; display:inline-flex; align-items:center;">
              C&oacute;digo (CID10) &nbsp; <span style="display:inline-block; font-size:9px; font-weight:bold; letter-spacing:1px; border:1px solid #000; padding:1px 2px; background:#fff; margin-left:3px; font-family:monospace; line-height:1;">A 7 1 . 9</span>
            </span>
          </div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">3</span> DATA DA NOTIFICA&Ccedil;&Atilde;O</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(data.dataNotificacao), 8)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.4;">
          <div class="ct"><span class="cn">4</span> UF</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(data.ufNotificacao || 'PA', 2)}</div>
        </div>
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct"><span class="cn">5</span> MUNICIPIO DE NOTIFICACAO</div>
          <div class="cv">${data.munNotificacao || 'MARABA'}</div>
        </div>
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct">CODIGO (IBGE)</div>
          <div class="cv" style="padding-top:3px;">${splitDigits('1504208', 7)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:2.2;">
          <div class="ct"><span class="cn">6</span> UNIDADE DE SAUDE / ESCOLA NOTIFICADORA</div>
          <div class="cv">${unitName}</div>
        </div>
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct">CODIGO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(cnesCode, 7)}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">7</span> DATA DO EXAME OCULAR</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(data.symptomsDate), 8)}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- BLOCO 2: NOTIFICACAO INDIVIDUAL -->
  <div class="sn-block">
    <div class="sn-sidebar">Notificacao Individual</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="flex:3.0;">
          <div class="ct"><span class="cn">8</span> NOME DO PACIENTE / ALUNO</div>
          <div class="cv" style="font-size:10px; font-weight:900;">${data.patientName || 'Nao informado'}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">9</span> DATA DE NASCIMENTO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(data.patientBirthDate), 8)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.9;">
          <div class="ct"><span class="cn">10</span> (OU) IDADE</div>
          <div style="display:flex; align-items:center; gap:3px; margin-top:2px;">
            <div>${splitDigits(data.patientAge || '', 3, true)}</div>
            <div class="single-box">${data.patientAge ? '4' : '&nbsp;'}</div>
            <div style="font-size:5px; line-height:1.0; font-weight:bold; margin-left:2px;">
              1 - Hora<br>2 - Dia<br>3 - M&ecirc;s<br>4 - Ano
            </div>
          </div>
        </div>
        <div class="sn-cell" style="position:relative; flex:0.7;">
          <div class="ct"><span class="cn">11</span> SEXO</div>
          <div style="font-size:5.5px; line-height:1.1; margin-top:2px;">M - Masculino<br>F - Feminino<br>I - Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${sexCode}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">12</span> GESTANTE</div>
          <div style="font-size:5.2px; line-height:1.1; margin-top:2px;">
            1-1&ordm;Trim &nbsp;&nbsp; 2-2&ordm;Trim &nbsp;&nbsp; 3-3&ordm;Trim<br>
            4-Idade Ign. &nbsp;&nbsp; 5-N&atilde;o &nbsp;&nbsp; 6-N&atilde;o se aplica &nbsp;&nbsp; 9-Ign
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${pregnantCode}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.3;">
          <div class="ct"><span class="cn">13</span> RACA/COR</div>
          <div style="font-size:5.5px; line-height:1.1; margin-top:2px;">
            1-Branca &nbsp;&nbsp; 2-Preta &nbsp;&nbsp; 3-Amarela<br>
            4-Parda &nbsp;&nbsp; 5-Ind&iacute;gena &nbsp;&nbsp; 9-Ignorado
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${raceCode}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative;">
          <div class="ct"><span class="cn">14</span> ESCOLARIDADE</div>
          <div style="font-size:5px; line-height:1.2; margin-top:2px; padding-right:25px;">
            0-Analfabeto &nbsp;&nbsp; 1-1&ordf; a 4&ordf; s&eacute;rie inc EF &nbsp;&nbsp; 2-4&ordf; s&eacute;rie comp EF &nbsp;&nbsp; 3-5&ordf; a 8&ordf; s&eacute;rie inc EF &nbsp;&nbsp; 4-EF completo<br>
            5-EM incompleto &nbsp;&nbsp; 6-EM completo &nbsp;&nbsp; 7-Superior incompleto &nbsp;&nbsp; 8-Superior completo &nbsp;&nbsp; 9-Ignorado &nbsp;&nbsp; 10-N/A
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);">${schoolCode}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:2.2;">
          <div class="ct"><span class="cn">15</span> NUMERO DO CARTAO SUS</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(data.patientCns || '', 15)}</div>
        </div>
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct"><span class="cn">16</span> NOME DA MAE</div>
          <div class="cv" style="font-size:9px;">${data.patientMotherName || 'Nao informada'}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- BLOCO 3: DADOS DE RESIDENCIA -->
  <div class="sn-block">
    <div class="sn-sidebar">Dados de Residencia</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.35;">
          <div class="ct"><span class="cn">17</span> UF</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(data.patientUf || 'PA', 2)}</div>
        </div>
        <div class="sn-cell" style="flex:1.7;">
          <div class="ct"><span class="cn">18</span> MUNICIPIO DE RESIDENCIA</div>
          <div class="cv">${data.patientMunicipality || 'MARABA'}</div>
        </div>
        <div class="sn-cell" style="flex:0.9;">
          <div class="ct">CODIGO (IBGE)</div>
          <div class="cv" style="padding-top:3px;">${splitDigits('1504208', 7)}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">19</span> DISTRITO</div>
          <div class="cv">${data.patientDistrict || ''}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.5;">
          <div class="ct"><span class="cn">20</span> BAIRRO</div>
          <div class="cv">${data.patientNeighborhood || 'Nao informado'}</div>
        </div>
        <div class="sn-cell" style="flex:2.5;">
          <div class="ct"><span class="cn">21</span> LOGRADOURO (RUA, AVENIDA,...)</div>
          <div class="cv">${data.patientAddress || 'Nao informado'}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct"><span class="cn">22</span> NUMERO</div>
          <div class="cv">${data.patientNumber || 'S/N'}</div>
        </div>
        <div class="sn-cell" style="flex:1.6;">
          <div class="ct"><span class="cn">23</span> COMPLEMENTO (APTO., CASA,...)</div>
          <div class="cv">${data.patientComplement || ''}</div>
        </div>
        <div class="sn-cell" style="flex:1.6;">
          <div class="ct"><span class="cn">24</span> CEP</div>
          <div class="cv" style="padding-top:3px;">${formatCepDigits(data.patientCep)}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- BLOCO 4: DADOS DO EXAME OCULAR -->
  <div class="sn-block">
    <div class="sn-sidebar">Exame Ocular / Tracoma</div>
    <div class="sn-content">
      <div class="sn-row" style="background:#f0f0f0; border-bottom:1px solid #000; font-weight:bold; font-size:8px; padding:2px 4px;">
        &nbsp; DIAGN&Oacute;STICO E CLASSIFICA&Ccedil;&Atilde;O CL&Iacute;NICA DO TRACOMA (OMS)
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:2.0;">
          <div class="ct">OLHO DIREITO (OD)</div>
          <div style="font-size:7.5px; line-height:1.4; padding:3px 0;">
            TF (Folicular): <strong>${cs.odTf === '1' ? '[X] Sim' : '[ ] N&atilde;o'}</strong> &nbsp;&nbsp;
            TI (Intenso): <strong>${cs.odTi === '1' ? '[X] Sim' : '[ ] N&atilde;o'}</strong><br>
            TS (Cicatricial): <strong>${cs.odTs === '1' ? '[X] Sim' : '[ ] N&atilde;o'}</strong> &nbsp;&nbsp;
            TT (Triqu&iacute;ase): <strong>${cs.odTt === '1' ? '[X] Sim' : '[ ] N&atilde;o'}</strong> &nbsp;&nbsp;
            CO (Opacidade): <strong>${cs.odCo === '1' ? '[X] Sim' : '[ ] N&atilde;o'}</strong>
          </div>
        </div>
        <div class="sn-cell" style="flex:2.0;">
          <div class="ct">OLHO ESQUERDO (OE)</div>
          <div style="font-size:7.5px; line-height:1.4; padding:3px 0;">
            TF (Folicular): <strong>${cs.oeTf === '1' ? '[X] Sim' : '[ ] N&atilde;o'}</strong> &nbsp;&nbsp;
            TI (Intenso): <strong>${cs.oeTi === '1' ? '[X] Sim' : '[ ] N&atilde;o'}</strong><br>
            TS (Cicatricial): <strong>${cs.oeTs === '1' ? '[X] Sim' : '[ ] N&atilde;o'}</strong> &nbsp;&nbsp;
            TT (Triqu&iacute;ase): <strong>${cs.oeTt === '1' ? '[X] Sim' : '[ ] N&atilde;o'}</strong> &nbsp;&nbsp;
            CO (Opacidade): <strong>${cs.oeCo === '1' ? '[X] Sim' : '[ ] N&atilde;o'}</strong>
          </div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:2.0;">
          <div class="ct">CONDUTA / TRATAMENTO PRESCRITO</div>
          <div style="font-size:7px; line-height:1.2; margin-top:2px;">
            1 - Azitromicina dose &uacute;nica &nbsp;&nbsp; 2 - Col&iacute;rio / Outro &nbsp;&nbsp; 3 - Cirurgia TT &nbsp;&nbsp; 9 - Sem tratamento
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);">${cs.conduta || '1'}</div>
        </div>
        <div class="sn-cell" style="flex:2.0;">
          <div class="ct">EXAME DE CONTATOS DOMICILIARES</div>
          <div style="font-size:7.5px; padding-top:2px;">
            Examinados: <strong>${cs.contatosExaminados || '0'}</strong> &nbsp;&nbsp;&nbsp;&nbsp; Positivos: <strong>${cs.contatosPositivos || '0'}</strong>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- INVESTIGADOR SIGNATURES -->
  <div class="sn-block" style="margin-top:4px;">
    <div class="sn-sidebar">Investigador</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="flex:2.0;">
          <div class="ct">MUNICIPIO / UNIDADE DE SA&Uacute;DE</div>
          <div class="cv">${data.munNotificacao || 'MARABA'} / ${unitName}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct">C&Oacute;DIGO DA UNID. DE SA&Uacute;DE</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(cnesCode, 7)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct">NOME DO EXAMINADOR / INVESTIGADOR</div>
          <div class="cv" style="font-weight:900; font-size:10px;">${data.notificatorName || 'Profissional de Saude'}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct">FUN&Ccedil;&Atilde;O</div>
          <div class="cv">Profissional de Saude</div>
        </div>
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct">ASSINATURA</div>
          <div class="cv" style="border-bottom:1px dotted #555; margin-top:4px; min-height:14px;"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer-info">
    <span>Tracoma</span>
    <span>Inqu&eacute;rito Tracoma</span>
    <span>Sinan NET</span>
    <span>SVS</span>
  </div>
</div>
`;
    }

    function generatePage1AcidenteOfidicoHtml(data) {
        const customBlockHtml = `
  <div class="sn-block">
    <div class="sn-sidebar">Dados do Acidente</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">31</span> DATA DA INVESTIGACAO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.dataInvestigacao), 8)}</div>
        </div>
        <div class="sn-cell" style="flex:2.0;">
          <div class="ct"><span class="cn">32</span> OCUPACAO</div>
          <div class="cv">${cs.occupation || ''}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">33</span> DATA DO ACIDENTE</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.dataAcidente), 8)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.4;">
          <div class="ct"><span class="cn">34</span> UF OC.</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(cs.ufOcorrencia || 'PA', 2)}</div>
        </div>
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct"><span class="cn">35</span> MUNICIPIO OCORRENCIA</div>
          <div class="cv">${cs.munOcorrencia || ''}</div>
        </div>
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct"><span class="cn">36</span> LOCALIDADE OCORRENCIA</div>
          <div class="cv">${cs.localidadeOcorrencia || ''}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.0;">
          <div class="ct"><span class="cn">37</span> ZONA OCORRENCIA</div>
          <div style="font-size:6px; line-height:1.1; margin-top:2px;">1-Urbana &nbsp; 2-Rural &nbsp; 3-Periurbana &nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.zonaOcorrencia || '1'}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">38</span> TEMPO PICADA/ATENDIMENTO</div>
          <div style="font-size:5px; line-height:1.1; margin-top:2px;">
            1- 0-1h &nbsp; 2- 1-3h &nbsp; 3- 3-6h &nbsp; 4- 6-12h<br>
            5- 12-24h &nbsp; 6- 24h+ &nbsp; 9-Ignorado
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.tempoAtendimento || '1'}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">39</span> LOCAL DA PICADA</div>
          <div style="font-size:5px; line-height:1.1; margin-top:2px;">
            01-Cabeça &nbsp; 02-Braço &nbsp; 04-Mão &nbsp; 06-Tronco<br>
            07-Coxa &nbsp; 08-Perna &nbsp; 09-Pé &nbsp; 99-Ignorado
          </div>
          <div style="position:absolute; right:8px; top:4px; display:inline-flex;">
            <span class="digit-box" style="width:11px; height:13px; font-size:8px; border:1px solid #000; display:inline-flex; align-items:center; justify-content:center; background:#fff; font-family:monospace; font-weight:bold;">${String(cs.localPicada || '09')[0]}</span>
            <span class="digit-box" style="width:11px; height:13px; font-size:8px; border:1px solid #000; display:inline-flex; align-items:center; justify-content:center; background:#fff; font-family:monospace; font-weight:bold; margin-left:-1px;">${String(cs.localPicada || '09')[1]}</span>
          </div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:0.8;">
          <div class="ct"><span class="cn">40</span> MANIF. LOCAIS?</div>
          <div style="font-size:7px; margin-top:2px;">1-Sim &nbsp;&nbsp;&nbsp; 2-Não &nbsp;&nbsp;&nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.locais || '1'}</div>
        </div>
        <div class="sn-cell" style="flex:2.0;">
          <div class="ct"><span class="cn">41</span> SINTOMAS LOCAIS</div>
          <div class="cv" style="font-size:9.5px;">${cs.sintomasLocais || ''}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:0.8;">
          <div class="ct"><span class="cn">42</span> MANIF. SISTEMICAS?</div>
          <div style="font-size:7px; margin-top:2px;">1-Sim &nbsp;&nbsp;&nbsp; 2-Não &nbsp;&nbsp;&nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.sistemicas || '2'}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:2.0;">
          <div class="ct"><span class="cn">43</span> SINTOMAS SISTEMICOS</div>
          <div class="cv" style="font-size:9.5px;">${cs.sintomasSistemicos || ''}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.0;">
          <div class="ct"><span class="cn">44</span> TEMPO COAGULACAO</div>
          <div style="font-size:6.5px; line-height:1.1; margin-top:2px;">1-Normal &nbsp; 2-Alterado &nbsp; 3-Não Realizado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.tempoCoag || '1'}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.2;">
          <div class="ct"><span class="cn">45</span> TIPO DE ACIDENTE</div>
          <div style="font-size:5px; line-height:1.1; margin-top:2px;">
            1-Serpente &nbsp; 2-Aranha &nbsp; 3-Escorpião &nbsp; 4-Lagarta<br>
            5-Abelha &nbsp; 6-Outros &nbsp; 9-Ignorado
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.tipoAcidente || '1'}</div>
        </div>
        <div class="sn-cell" style="flex:1.5;">
          <div class="ct"><span class="cn">46/47/48</span> AGENTE CAUSADOR (ESPECIE)</div>
          <div class="cv">${cs.agenteEspecie || ''}</div>
        </div>
      </div>
    </div>
  </div>
        `;
        return generatePage1CustomHtml(data, "Acidentes por Animais Peçonhentos", "X29", customBlockHtml);
    }

    function generatePage2AcidenteOfidicoHtml(data) {
        return `
<div class="sinan-page">
  <div class="pg2-header">
    <p class="pg2-title">DADOS COMPLEMENTARES - ACIDENTES POR ANIMAIS PEÇONHENTOS</p>
    <p class="pg2-sub">(ANOTAR TODOS OS DADOS DISPONÍVEIS NO MOMENTO DA NOTIFICACAO)</p>
  </div>

  <!-- BLOCO 6: CLASSIFICAÇÃO E SOROTERAPIA -->
  <div class="sn-block">
    <div class="sn-sidebar">Classif. / Soroterapia</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.2;">
          <div class="ct"><span class="cn">49</span> CLASSIFICACAO DO CASO</div>
          <div style="font-size:7px; margin-top:2px;">1-Leve &nbsp; 2-Moderado &nbsp; 3-Grave &nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.classificacaoCaso || '1'}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.0;">
          <div class="ct"><span class="cn">50</span> SOROTERAPIA?</div>
          <div style="font-size:7px; margin-top:2px;">1-Sim &nbsp;&nbsp;&nbsp; 2-Não &nbsp;&nbsp;&nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.soroterapia || '2'}</div>
        </div>
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct"><span class="cn">51</span> QUANTIDADE DE AMPOLAS DE SORO</div>
          <div class="cv" style="font-size:9.5px;">${cs.soroAmpolas || ''}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.0;">
          <div class="ct"><span class="cn">52</span> COMPLICACOES LOCAIS?</div>
          <div style="font-size:7px; margin-top:2px;">1-Sim &nbsp;&nbsp;&nbsp; 2-Não &nbsp;&nbsp;&nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.complLocais || '2'}</div>
        </div>
        <div class="sn-cell" style="flex:3.0;">
          <div class="ct"><span class="cn">53</span> ESPECIFICAR COMPLICACOES LOCAIS</div>
          <div class="cv">${cs.complLocaisEspecificar || ''}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.0;">
          <div class="ct"><span class="cn">54</span> COMPLICACOES SISTEMICAS?</div>
          <div style="font-size:7px; margin-top:2px;">1-Sim &nbsp;&nbsp;&nbsp; 2-Não &nbsp;&nbsp;&nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.complSistemicas || '2'}</div>
        </div>
        <div class="sn-cell" style="flex:3.0;">
          <div class="ct"><span class="cn">55</span> ESPECIFICAR COMPLICACOES SISTEMICAS</div>
          <div class="cv">${cs.complSistemicasEspecificar || ''}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.0;">
          <div class="ct"><span class="cn">56</span> RELACIONADO AO TRABALHO?</div>
          <div style="font-size:7px; margin-top:2px;">1-Sim &nbsp;&nbsp;&nbsp; 2-Não &nbsp;&nbsp;&nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.trabalho || '2'}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">57</span> EVOLUCAO</div>
          <div style="font-size:6px; line-height:1.1; margin-top:2px;">1-Cura &nbsp; 2-Óbito por acidente &nbsp; 3-Óbito por outras causas &nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.evolucao || '1'}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">58</span> DATA DO OBITO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.dataObito), 8)}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">59</span> DATA DO ENCERRAMENTO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.dataEncerramento), 8)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell">
          <div class="ct">OBSERVACOES / INFORMACOES COMPLEMENTARES</div>
          <div class="cv" style="font-size:9.5px; font-weight:normal; min-height:40px;">${cs.obs || ''}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- INVESTIGADOR SIGNATURES -->
  <div class="sn-block">
    <div class="sn-sidebar">Investigador</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.5;">
          <div class="ct">MUNICIPIO/UNIDADE DE SAUDE</div>
          <div class="cv">${data.munNotificacao || 'MARABA'} / ${unitName}</div>
        </div>
        <div class="sn-cell" style="flex:1.5;">
          <div class="ct">NOME DO INVESTIGADOR</div>
          <div class="cv">${data.notificatorName || 'Profissional de Saude'}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct">FUNCAO</div>
          <div class="cv">Profissional de Saude</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct">ASSINATURA</div>
          <div class="cv" style="border-bottom:1px dotted #555; margin-top:8px; min-height:14px;"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer-info">
    <span>Dados Complementares / Peçonhentos</span>
    <span>Sinan NET</span>
    <span>SVS 17/07/2006</span>
  </div>
</div>
`;
    }

    function generatePage1LeishTegumentarHtml(data) {
        const customBlockHtml = `
  <div class="sn-block">
    <div class="sn-sidebar">Dados Clínicos / Diag.</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">31</span> DATA DA INVESTIGACAO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.dataInvestigacao), 8)}</div>
        </div>
        <div class="sn-cell" style="flex:2.0;">
          <div class="ct"><span class="cn">32</span> OCUPACAO</div>
          <div class="cv">${cs.occupation || ''}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.2;">
          <div class="ct"><span class="cn">33</span> PRESENCA DE LESAO</div>
          <div style="font-size:6px; line-height:1.1; margin-top:2px;">1-Cutânea &nbsp; 2-Mucosa &nbsp; 3-Ambas &nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.presencaLesao || '3'}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.0;">
          <div class="ct"><span class="cn">34</span> SE MUCOSA, CICATRIZES?</div>
          <div style="font-size:7px; margin-top:2px;">1-Sim &nbsp;&nbsp;&nbsp; 2-Não</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.cicatrizes || '2'}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.0;">
          <div class="ct"><span class="cn">35</span> CO-INFECÇÃO HIV</div>
          <div style="font-size:7px; margin-top:2px;">1-Sim &nbsp;&nbsp;&nbsp; 2-Não &nbsp;&nbsp;&nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.hiv || '2'}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.2;">
          <div class="ct"><span class="cn">36</span> PARASITOLOGICO DIRETO</div>
          <div style="font-size:6.5px; line-height:1.1; margin-top:2px;">1-Positivo &nbsp; 2-Negativo &nbsp; 3-Não Realizado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.diagParasito || '3'}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.2;">
          <div class="ct"><span class="cn">37</span> INTRADERMOREACAO (IRM)</div>
          <div style="font-size:6.5px; line-height:1.1; margin-top:2px;">1-Positivo &nbsp; 2-Negativo &nbsp; 3-Não Realizado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.diagIrm || '3'}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.2;">
          <div class="ct"><span class="cn">38</span> HISTOPATOLOGIA</div>
          <div style="font-size:5px; line-height:1.1; margin-top:2px;">1-Encontro Parasitas &nbsp; 2-Compatível &nbsp; 3-Não Comp. &nbsp; 4-Não Realizado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.histopato || '4'}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.2;">
          <div class="ct"><span class="cn">39</span> TIPO DE ENTRADA</div>
          <div style="font-size:6px; line-height:1.1; margin-top:2px;">1-Caso Novo &nbsp; 2-Recidiva &nbsp; 3-Transferência &nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.tipoEntrada || '1'}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.2;">
          <div class="ct"><span class="cn">40</span> FORMA CLINICA</div>
          <div style="font-size:7px; margin-top:2px;">1-Cutânea &nbsp;&nbsp;&nbsp; 2-Mucosa &nbsp;&nbsp;&nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.formaClinica || '1'}</div>
        </div>
      </div>
    </div>
  </div>
        `;
        return generatePage1CustomHtml(data, "Leishmaniose Tegumentar", "B55.1", customBlockHtml);
    }

    function generatePage2LeishTegumentarHtml(data) {
        return `
<div class="sinan-page">
  <div class="pg2-header">
    <p class="pg2-title">DADOS COMPLEMENTARES DO CASO - LEISHMANIOSE TEGUMENTAR AMERICANA</p>
    <p class="pg2-sub">(ANOTAR TODOS OS DADOS DISPONÍVEIS NO MOMENTO DA NOTIFICACAO)</p>
  </div>

  <!-- BLOCO 5: TRATAMENTO E CONCLUSÃO -->
  <div class="sn-block">
    <div class="sn-sidebar">Tratamento / Concl.</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">41</span> DATA INICIO TRATAMENTO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.inicioTratamento), 8)}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:2.0;">
          <div class="ct"><span class="cn">42</span> DROGA INICIAL ADMINISTRADA</div>
          <div style="font-size:5.5px; line-height:1.1; margin-top:2px;">
            1-Antimonial Pentavalente &nbsp; 2-Anfotericina B &nbsp; 3-Pentamidina<br>
            4-Outras &nbsp; 5-Não Utilizada
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.droga || '1'}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct"><span class="cn">43</span> PESO (KG)</div>
          <div class="cv">${cs.peso || ''}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">44</span> DOSE PRESCRITA Sb+5 (MG/KG/DIA)</div>
          <div style="font-size:5px; line-height:1.1; margin-top:2px;">
            1-Menor que 10 &nbsp; 2-Maior/igual 10 e menor 15<br>
            3-Igual a 15 &nbsp; 4-Maior ou igual a 20
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.dose || '1'}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">45</span> TOTAL AMPOLAS PRESCRITAS</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(cs.ampolas || '', 3)}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">46</span> OUTRA DROGA UTILIZADA (FALENCIA)</div>
          <div style="font-size:6px; line-height:1.1; margin-top:2px;">1-Anfotericina B &nbsp; 2-Pentamidina &nbsp; 3-Outras &nbsp; 4-Não se aplica</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.outraDroga || '4'}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.2;">
          <div class="ct"><span class="cn">47</span> CRITERIO DE CONFIRMACAO</div>
          <div style="font-size:7px; margin-top:2px;">1-Laboratorial &nbsp;&nbsp;&nbsp; 2-Clínico-Epidemiológico</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.criterio || '1'}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.2;">
          <div class="ct"><span class="cn">48</span> CLASSIFICACAO EPIDEMIOLOGICA</div>
          <div style="font-size:7px; margin-top:2px;">1-Autóctone &nbsp;&nbsp;&nbsp; 2-Importado &nbsp;&nbsp;&nbsp; 3-Indeterminado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.classEpidemio || '1'}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:0.8;">
          <div class="ct"><span class="cn">49</span> AUTOCTONE?</div>
          <div style="font-size:7px; margin-top:2px;">1-Sim &nbsp;&nbsp;&nbsp; 2-Não &nbsp;&nbsp;&nbsp; 3-Indeterminado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.autoctone || '1'}</div>
        </div>
        <div class="sn-cell" style="flex:0.4;">
          <div class="ct"><span class="cn">50</span> UF INF</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(cs.ufInfeccao || 'PA', 2)}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">51</span> PAIS PROVAVEL INF.</div>
          <div class="cv">${cs.paisInfeccao || 'Brasil'}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.5;">
          <div class="ct"><span class="cn">52</span> MUNICIPIO DE INFECCAO</div>
          <div class="cv">${cs.municipioInfeccao || ''}</div>
        </div>
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct"><span class="cn">53</span> DISTRITO</div>
          <div class="cv">${cs.distritoInfeccao || ''}</div>
        </div>
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct"><span class="cn">54</span> BAIRRO</div>
          <div class="cv">${cs.bairroInfeccao || ''}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.0;">
          <div class="ct"><span class="cn">55</span> RELACIONADA AO TRABALHO?</div>
          <div style="font-size:7px; margin-top:2px;">1-Sim &nbsp;&nbsp;&nbsp; 2-Não &nbsp;&nbsp;&nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.trabalho || '2'}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">56</span> EVOLUCAO DO CASO</div>
          <div style="font-size:6px; line-height:1.1; margin-top:2px;">1-Cura &nbsp; 2-Abandono &nbsp; 3-Óbito por LTA &nbsp; 4-Óbito por outras causas &nbsp; 5-Transferência &nbsp; 6-Mudança Diag.</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.evolucao || '1'}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">57</span> DATA DO OBITO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.dataObito), 8)}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">58</span> DATA DO ENCERRAMENTO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.dataEncerramento), 8)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell">
          <div class="ct">DESLOCAMENTO NOS ULTIMOS 6 MESES (DATAS E CIDADES)</div>
          <div class="cv" style="font-size:9.5px; font-weight:normal;">${cs.deslocamentos || ''}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell">
          <div class="ct">OBSERVACOES / INFORMACOES COMPLEMENTARES</div>
          <div class="cv" style="font-size:9px; font-weight:normal; min-height:40px;">${cs.obs || ''}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- INVESTIGADOR SIGNATURES -->
  <div class="sn-block">
    <div class="sn-sidebar">Investigador</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.5;">
          <div class="ct">MUNICIPIO/UNIDADE DE SAUDE</div>
          <div class="cv">${data.munNotificacao || 'MARABA'} / ${unitName}</div>
        </div>
        <div class="sn-cell" style="flex:1.5;">
          <div class="ct">NOME DO INVESTIGADOR</div>
          <div class="cv">${data.notificatorName || 'Profissional de Saude'}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct">FUNCAO</div>
          <div class="cv">Profissional de Saude</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct">ASSINATURA</div>
          <div class="cv" style="border-bottom:1px dotted #555; margin-top:8px; min-height:14px;"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer-info">
    <span>Dados Complementares / Leishmaniose Tegumentar</span>
    <span>Sinan NET</span>
    <span>SVS 17/07/2006</span>
  </div>
</div>
`;
    }

    function generatePage1DengueHtml(data) {
        const sc = cs.sinaisClinicos || {};
        const cb = (val) => '<span class="single-box">' + (val === '1' ? '1' : (val === '2' ? '2' : '&nbsp;')) + '</span>';
        const cb9 = (val) => '<span class="single-box">' + (val !== undefined && val !== null ? val : '9') + '</span>';

        return `
<div class="sinan-page">
  <div class="sn-header">
    <div class="sn-header-left">
      Rep&uacute;blica Federativa do Brasil<br>
      Minist&eacute;rio da Sa&uacute;de<br>
      Secretaria de Vigil&acirc;ncia em Sa&uacute;de
    </div>
    <div class="sn-header-center">
      <p class="sn-sinan">SINAN</p>
      <p class="sn-title">SISTEMA DE INFORMA&Ccedil;&Atilde;O DE AGRAVOS DE NOTIFICA&Ccedil;&Atilde;O</p>
      <p class="sn-subtitle">FICHA DE INVESTIGA&Ccedil;&Atilde;O DENGUE E FEBRE DE CHIKUNGUNYA N&ordm;</p>
    </div>
    <div class="sn-header-right">
      <span class="sn-num-label">N&ordm;</span>
      <div class="sn-num-box">${data.sinan_number || '---.---'}</div>
    </div>
  </div>

  <!-- DEFINIÇÕES DE CASO SUSPEITO -->
  <div style="border:1.5px solid #000; padding:4px 6px; margin-bottom:5px; font-size:7px; line-height:1.2; background:#fafafa;">
    <strong>Caso suspeito de dengue:</strong> pessoa que viva ou tenha viajado nos &uacute;ltimos 14 dias para &aacute;rea onde esteja ocorrendo transmiss&atilde;o de dengue ou tenha presen&ccedil;a de Ae.aegypti que apresente febre, usualmente entre 2 e 7 dias, e apresente duas ou mais das seguintes manifesta&ccedil;&otilde;es: n&aacute;useas, v&ocirc;mitos, exantema, mialgias, cefal&eacute;ia, dor retroorbital, pet&eacute;quias ou prova do la&ccedil;o positiva e leucopenia.<br>
    <strong>Caso suspeito de Chikungunya:</strong> febre de in&iacute;cio s&uacute;bito e artralgia ou artrite intensa com in&iacute;cio agudo, n&atilde;o explicado por outras condi&ccedil;&otilde;es, que resida ou tenha viajado para &aacute;reas end&ecirc;micas ou epid&ecirc;micas at&eacute; 14 dias antes do in&iacute;cio dos sintomas, ou que tenha v&iacute;nculo epidemiol&oacute;gico com um caso importado confirmado.
  </div>

  <!-- BLOCO 1: DADOS GERAIS -->
  <div class="sn-block">
    <div class="sn-sidebar">Dados Gerais</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1; min-height:24px;">
          <div class="ct"><span class="cn">1</span> TIPO DE NOTIFICA&Ccedil;&Atilde;O</div>
          <div style="font-size:7.5px; margin-top:2px;">
            2 - Individual
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);">
            ${tipoNotif}
          </div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:2.5; position:relative;">
          <div class="ct"><span class="cn">2</span> AGRAVO/DOEN&Ccedil;A &nbsp;&nbsp;&nbsp; 1- DENGUE &nbsp;&nbsp;&nbsp; 2- CHIKUNGUNYA</div>
          <div style="font-size:10px; font-weight:900; margin-top:2px;">
            ${diseaseLower === 'chikungunya' ? 'CHIKUNGUNYA' : 'DENGUE'}
          </div>
          <div class="single-box" style="position:absolute; right:110px; top:4px;">
            ${diseaseLower === 'chikungunya' ? '2' : '1'}
          </div>
          <div style="position:absolute; right:8px; top:4px; font-size:7px; font-weight:bold;">
            C&oacute;digo (CID10)<br>
            <span style="font-size:8px; border:1px solid #000; padding:1px 3px; font-family:monospace; background:#fff;">A 90</span>
            <span style="font-size:8px; border:1px solid #000; padding:1px 3px; font-family:monospace; background:#fff;">A 92</span>
          </div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">3</span> DATA DA NOTIFICA&Ccedil;&Atilde;O</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(data.dataNotificacao), 8)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.4;">
          <div class="ct"><span class="cn">4</span> UF</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(data.ufNotificacao || 'PA', 2)}</div>
        </div>
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct"><span class="cn">5</span> MUNIC&Iacute;PIO DE NOTIFICA&Ccedil;&Atilde;O</div>
          <div class="cv">${data.munNotificacao || 'MARABA'}</div>
        </div>
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct">C&Oacute;DIGO (IBGE)</div>
          <div class="cv" style="padding-top:3px;">${splitDigits('1504208', 7)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:2.2;">
          <div class="ct"><span class="cn">6</span> UNIDADE DE SA&Uacute;DE (OU OUTRA FONTE NOTIFICADORA)</div>
          <div class="cv">${unitName}</div>
        </div>
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct">C&Oacute;DIGO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(cnesCode, 7)}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">7</span> DATA DOS PRIMEIROS SINTOMAS</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(data.symptomsDate), 8)}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- BLOCO 2: NOTIFICAÇÃO INDIVIDUAL -->
  <div class="sn-block">
    <div class="sn-sidebar">Notifica&ccedil;&atilde;o Individual</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="flex:3.0;">
          <div class="ct"><span class="cn">8</span> NOME DO PACIENTE</div>
          <div class="cv" style="font-size:10px; font-weight:900;">${data.patientName || 'Nao informado'}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">9</span> DATA DE NASCIMENTO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(data.patientBirthDate), 8)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.9;">
          <div class="ct"><span class="cn">10</span> (OU) IDADE</div>
          <div style="display:flex; align-items:center; gap:3px; margin-top:2px;">
            <div>${splitDigits(data.patientAge || '', 3, true)}</div>
            <div class="single-box">${data.patientAge ? '4' : '&nbsp;'}</div>
            <div style="font-size:5px; line-height:1.0; font-weight:bold; margin-left:2px;">
              1 - Hora<br>2 - Dia<br>3 - M&ecirc;s<br>4 - Ano
            </div>
          </div>
        </div>
        <div class="sn-cell" style="position:relative; flex:0.7;">
          <div class="ct"><span class="cn">11</span> SEXO</div>
          <div style="font-size:5.5px; line-height:1.1; margin-top:2px;">
            M - Masculino<br>F - Feminino<br>I - Ignorado
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">
            ${sexCode}
          </div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">12</span> GESTANTE</div>
          <div style="font-size:5.2px; line-height:1.1; margin-top:2px;">
            1-1&ordm;Trimestre &nbsp;&nbsp; 2-2&ordm;Trimestre &nbsp;&nbsp; 3-3&ordm;Trimestre<br>
            4-Idade gestacional Ignorada &nbsp;&nbsp; 5-N&atilde;o &nbsp;&nbsp; 6-N&atilde;o se aplica<br>
            9-Ignorado
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">
            ${pregnantCode}
          </div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.3;">
          <div class="ct"><span class="cn">13</span> RA&Ccedil;A/COR</div>
          <div style="font-size:5.5px; line-height:1.1; margin-top:2px;">
            1-Branca &nbsp;&nbsp; 2-Preta &nbsp;&nbsp; 3-Amarela<br>
            4-Parda &nbsp;&nbsp; 5-Ind&iacute;gena &nbsp;&nbsp; 9-Ignorado
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">
            ${raceCode}
          </div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative;">
          <div class="ct"><span class="cn">14</span> ESCOLARIDADE</div>
          <div style="font-size:5px; line-height:1.2; margin-top:2px; padding-right:25px;">
            0-Analfabeto &nbsp;&nbsp; 1-1&ordf; a 4&ordf; s&eacute;rie incompleta do EF &nbsp;&nbsp; 2-4&ordf; s&eacute;rie completa do EF<br>
            3-5&ordf; &agrave; 8&ordf; s&eacute;rie incompleta do EF &nbsp;&nbsp; 4-Ensino fundamental completo &nbsp;&nbsp; 5-Ensino m&eacute;dio incompleto<br>
            6-Ensino m&eacute;dio completo &nbsp;&nbsp; 7-Educa&ccedil;&atilde;o superior incompleta &nbsp;&nbsp; 8-Educa&ccedil;&atilde;o superior completa &nbsp;&nbsp; 9-Ignorado &nbsp;&nbsp; 10-N&atilde;o se aplica
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);">
            ${schoolCode}
          </div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:2.2;">
          <div class="ct"><span class="cn">15</span> N&Uacute;MERO DO CART&Atilde;O SUS</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(data.patientCns || '', 15)}</div>
        </div>
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct"><span class="cn">16</span> NOME DA M&Atilde;E</div>
          <div class="cv" style="font-size:9px;">${data.patientMotherName || 'Nao informada'}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- BLOCO 3: DADOS DE RESIDÊNCIA -->
  <div class="sn-block">
    <div class="sn-sidebar">Dados de Resid&ecirc;ncia</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.35;">
          <div class="ct"><span class="cn">17</span> UF</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(data.patientUf || 'PA', 2)}</div>
        </div>
        <div class="sn-cell" style="flex:1.7;">
          <div class="ct"><span class="cn">18</span> MUNIC&Iacute;PIO DE RESID&Ecirc;NCIA</div>
          <div class="cv">${data.patientMunicipality || 'MARABA'}</div>
        </div>
        <div class="sn-cell" style="flex:0.9;">
          <div class="ct">C&Oacute;DIGO (IBGE)</div>
          <div class="cv" style="padding-top:3px;">${splitDigits('1504208', 7)}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">19</span> DISTRITO</div>
          <div class="cv">${data.patientDistrict || ''}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.5;">
          <div class="ct"><span class="cn">20</span> BAIRRO</div>
          <div class="cv">${data.patientNeighborhood || 'Nao informado'}</div>
        </div>
        <div class="sn-cell" style="flex:2.5;">
          <div class="ct"><span class="cn">21</span> LOGRADOURO (RUA, AVENIDA,...)</div>
          <div class="cv">${data.patientAddress || 'Nao informado'}</div>
        </div>
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct">C&Oacute;DIGO</div>
          <div class="cv"></div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct"><span class="cn">22</span> N&Uacute;MERO</div>
          <div class="cv">${data.patientNumber || 'S/N'}</div>
        </div>
        <div class="sn-cell" style="flex:1.6;">
          <div class="ct"><span class="cn">23</span> COMPLEMENTO (APTO., CASA,...)</div>
          <div class="cv">${data.patientComplement || ''}</div>
        </div>
        <div class="sn-cell" style="flex:1.6;">
          <div class="ct"><span class="cn">24</span> GEO CAMPO 1</div>
          <div class="cv"></div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct"><span class="cn">25</span> GEO CAMPO 2</div>
          <div class="cv"></div>
        </div>
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct"><span class="cn">26</span> PONTO DE REFER&Ecirc;NCIA</div>
          <div class="cv">${data.patientRef || ''}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">27</span> CEP</div>
          <div class="cv" style="padding-top:3px;">${formatCepDigits(data.patientCep)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.6;">
          <div class="ct"><span class="cn">28</span> (DDD) TELEFONE</div>
          <div class="cv" style="padding-top:3px;">${splitDigits((data.patientPhone || '').replace(/\D/g,''), 11)}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">29</span> ZONA</div>
          <div style="font-size:6px; line-height:1.1; margin-top:2px;">
            1 - Urbana &nbsp;&nbsp;&nbsp;&nbsp; 2 - Rural &nbsp;&nbsp;&nbsp;&nbsp; 3 - Periurbana &nbsp;&nbsp;&nbsp;&nbsp; 9 - Ignorado
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">
            ${zoneCode}
          </div>
        </div>
        <div class="sn-cell" style="flex:0.9;">
          <div class="ct"><span class="cn">30</span> PA&Iacute;S (SE RESID. FORA)</div>
          <div class="cv">${data.patientCountry || ''}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- BLOCO 4: DADOS CLÍNICOS E LABORATORIAIS -->
  <div class="sn-block">
    <div class="sn-sidebar" style="font-size:6.5px;">Inv. / Dados cl&iacute;nicos / Dados laboratoriais</div>
    <div class="sn-content">
      <div style="background:#e6e6e6; font-size:8px; font-weight:bold; text-align:center; padding:2px; border-bottom:1px solid #000;">
        Dados cl&iacute;nicos e laboratoriais
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">31</span> DATA DA INVESTIGA&Ccedil;&Atilde;O</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.dataInvestigacao), 8)}</div>
        </div>
        <div class="sn-cell" style="flex:2.0;">
          <div class="ct"><span class="cn">32</span> OCUPA&Ccedil;&Atilde;O</div>
          <div class="cv">${cs.occupation || ''}</div>
        </div>
      </div>

      <!-- Campo 33: Sinais clínicos -->
      <div class="sn-row" style="flex-direction:column; padding:3px 5px;">
        <div class="ct"><span class="cn">33</span> SINAIS CL&Iacute;NICOS &nbsp;&nbsp;&nbsp; 1-Sim &nbsp;&nbsp; 2-N&atilde;o</div>
        <div style="display:grid; grid-template-columns: repeat(7, 1fr); gap:3px; font-size:6.5px; font-weight:bold; margin-top:3px;">
          <div>Febre ${cb(sc.febre)}</div>
          <div>Cefaleia ${cb(sc.cefaleia)}</div>
          <div>V&ocirc;mito ${cb(sc.vomito)}</div>
          <div>Dor nas costas ${cb(sc.costas)}</div>
          <div>Artrite ${cb(sc.artrite)}</div>
          <div>Pet&eacute;quias ${cb(sc.petequias)}</div>
          <div>Prova do la&ccedil;o ${cb(sc.laco)}</div>

          <div>Mialgia ${cb(sc.mialgia)}</div>
          <div>Exantema ${cb(sc.exantema)}</div>
          <div>N&aacute;useas ${cb(sc.nauseas)}</div>
          <div>Conjuntivite ${cb(sc.conjuntivite)}</div>
          <div>Artralgia int. ${cb(sc.artralgia)}</div>
          <div>Leucopenia ${cb(sc.leucopenia)}</div>
          <div>Dor retroorb. ${cb(sc.retroorbital)}</div>
        </div>
      </div>

      <!-- Campo 34: Doenças pré-existentes -->
      <div class="sn-row" style="flex-direction:column; padding:3px 5px;">
        <div class="ct"><span class="cn">34</span> DOEN&Ccedil;AS PR&Eacute;-EXISTENTES &nbsp;&nbsp;&nbsp; 1-Sim &nbsp;&nbsp; 2-N&atilde;o &nbsp;&nbsp; 9-Ignorado</div>
        <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:3px; font-size:6.5px; font-weight:bold; margin-top:3px;">
          <div>Diabetes ${cb9(cs.comorbidades?.diabetes)}</div>
          <div>Hepatopatias ${cb9(cs.comorbidades?.hepatopatias)}</div>
          <div>Hipertens&atilde;o art. ${cb9(cs.comorbidades?.hipertensao)}</div>
          <div>Doen&ccedil;as auto-imunes ${cb9(cs.comorbidades?.autoimunes)}</div>

          <div>Doen&ccedil;as hematol. ${cb9(cs.comorbidades?.hematologicas)}</div>
          <div>Doen&ccedil;a renal cr&ocirc;nica ${cb9(cs.comorbidades?.renal)}</div>
          <div>Doen&ccedil;a &aacute;cido-p&eacute;ptica ${cb9(cs.comorbidades?.peptica)}</div>
          <div></div>
        </div>
      </div>

      <!-- Exames Sorologia Chikungunya -->
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct"><span class="cn">35</span> DATA 1&ordf; AMOSTRA CHIK (S1)</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.lab?.chikS1Date), 8)}</div>
        </div>
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct"><span class="cn">36</span> DATA 2&ordf; AMOSTRA CHIK (S2)</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.lab?.chikS2Date), 8)}</div>
        </div>
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct"><span class="cn">37</span> DATA EXAME PRNT</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.lab?.chikPrntDate), 8)}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:2.4;">
          <div class="ct"><span class="cn">38</span> RESULTADO CHIK / PRNT</div>
          <div style="font-size:5.5px; line-height:1.1; margin-top:2px;">
            1-Reagente &nbsp; 2-N&atilde;o Reagente &nbsp; 3-Inconclusivo &nbsp; 4-N&atilde;o Realizado<br>
            S1: ${singleBox(cs.lab?.chikS1Res || '4')} &nbsp;&nbsp; S2: ${singleBox(cs.lab?.chikS2Res || '4')} &nbsp;&nbsp; PRNT: ${singleBox(cs.lab?.chikPrntRes || '4')}
          </div>
        </div>
      </div>

      <!-- Exames Sorologia Dengue e NS1 -->
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct"><span class="cn">39</span> DATA IGM DENGUE</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.lab?.dengueIgmDate), 8)}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.2;">
          <div class="ct"><span class="cn">40</span> RESULTADO IGM</div>
          <div style="font-size:5px; margin-top:2px;">1-Pos &nbsp; 2-Neg &nbsp; 3-Inconc &nbsp; 4-N/Realiz</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.lab?.dengueIgmRes || '4'}</div>
        </div>
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct"><span class="cn">41</span> DATA EXAME NS1</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.lab?.ns1Date), 8)}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.2;">
          <div class="ct"><span class="cn">42</span> RESULTADO NS1</div>
          <div style="font-size:5px; margin-top:2px;">1-Pos &nbsp; 2-Neg &nbsp; 3-Inconc &nbsp; 4-N/Realiz</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.lab?.ns1Res || '4'}</div>
        </div>
      </div>

      <!-- Isolamento Viral e RT-PCR -->
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct"><span class="cn">43</span> DATA ISOLAMENTO VIRAL</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.lab?.isolamentoDate), 8)}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.2;">
          <div class="ct"><span class="cn">44</span> RES. ISOLAMENTO</div>
          <div style="font-size:5px; margin-top:2px;">1-Pos &nbsp; 2-Neg &nbsp; 3-Inconc &nbsp; 4-N/Realiz</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.lab?.isolamentoRes || '4'}</div>
        </div>
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct"><span class="cn">45</span> DATA RT-PCR</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.lab?.pcrDate), 8)}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.2;">
          <div class="ct"><span class="cn">46</span> RESULTADO RT-PCR</div>
          <div style="font-size:5px; margin-top:2px;">1-Pos &nbsp; 2-Neg &nbsp; 3-Inconc &nbsp; 4-N/Realiz</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.lab?.pcrRes || '4'}</div>
        </div>
      </div>

      <!-- Sorotipo, Histopatologia, Imunohistoquímica -->
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">47</span> SOROTIPO</div>
          <div style="font-size:5px; margin-top:2px;">1-DENV 1 &nbsp; 2-DENV 2 &nbsp; 3-DENV 3 &nbsp; 4-DENV 4</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.lab?.sorotipo || '&nbsp;'}</div>
        </div>
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct"><span class="cn">48</span> DATA HISTOPATOLOGIA</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.lab?.histoDate), 8)}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.1;">
          <div class="ct">RES. HISTOPAT.</div>
          <div style="font-size:5px; margin-top:2px;">1-Compat &nbsp; 2-Incompat &nbsp; 3-Inconc &nbsp; 4-N/R</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.lab?.histoRes || '4'}</div>
        </div>
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct"><span class="cn">49</span> DATA IMUNOHISTOQ.</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.lab?.imunoDate), 8)}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.1;">
          <div class="ct">RES. IMUNO.</div>
          <div style="font-size:5px; margin-top:2px;">1-Pos &nbsp; 2-Neg &nbsp; 3-Inconc &nbsp; 4-N/R</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.lab?.imunoRes || '4'}</div>
        </div>
      </div>

    </div>
  </div>

  <div class="footer-info">
    <span>Chikungunya/Dengue</span>
    <span>Sinan Online</span>
    <span>SVS 14/03/2016</span>
  </div>
</div>
        `;
    }

    function generatePage2DengueHtml(data) {
        const sa = cs.sinaisAlarme || {};
        const dg = cs.dengueGrave || {};
        const cb = (val) => '<span class="single-box">' + (val === '1' ? '1' : (val === '2' ? '2' : (val === '9' ? '9' : '&nbsp;'))) + '</span>';

        return `
<div class="sinan-page">
  <!-- BLOCO 1: HOSPITALIZAÇÃO -->
  <div class="sn-block">
    <div class="sn-sidebar">Hospitaliza&ccedil;&atilde;o</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:1.2;">
          <div class="ct"><span class="cn">50</span> OCORREU HOSPITALIZA&Ccedil;&Atilde;O?</div>
          <div style="font-size:6px; margin-top:2px;">1-Sim &nbsp;&nbsp; 2-N&atilde;o &nbsp;&nbsp; 9-Ignorado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.hospitalizacao?.ocorreu || '2'}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">51</span> DATA DA INTERNA&Ccedil;&Atilde;O</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.hospitalizacao?.dataInternacao), 8)}</div>
        </div>
        <div class="sn-cell" style="flex:0.4;">
          <div class="ct"><span class="cn">52</span> UF</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(cs.hospitalizacao?.uf || 'PA', 2)}</div>
        </div>
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct"><span class="cn">53</span> MUNIC&Iacute;PIO DO HOSPITAL</div>
          <div class="cv">${cs.hospitalizacao?.mun || ''}</div>
        </div>
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct">C&Oacute;DIGO (IBGE)</div>
          <div class="cv" style="padding-top:3px;">${splitDigits('', 7)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:2.2;">
          <div class="ct"><span class="cn">54</span> NOME DO HOSPITAL</div>
          <div class="cv">${cs.hospitalizacao?.nome || ''}</div>
        </div>
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct">C&Oacute;DIGO</div>
          <div class="cv"></div>
        </div>
        <div class="sn-cell" style="flex:1.5;">
          <div class="ct"><span class="cn">55</span> (DDD) TELEFONE</div>
          <div class="cv" style="padding-top:3px;">${splitDigits((cs.hospitalizacao?.fone || '').replace(/\D/g,''), 11)}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- BLOCO 2: LOCAL PROVÁVEL DE INFECÇÃO & CONCLUSÃO -->
  <div class="sn-block">
    <div class="sn-sidebar">Conclus&atilde;o</div>
    <div class="sn-content">
      <div style="background:#e6e6e6; font-size:7.5px; font-weight:bold; padding:2px 5px; border-bottom:1px solid #000;">
        Local Prov&aacute;vel de Infec&ccedil;&atilde;o (no per&iacute;odo de 15 dias)
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:2.0;">
          <div class="ct"><span class="cn">56</span> O CASO &Eacute; AUT&Oacute;CTONE DO MUNIC&Iacute;PIO DE RESID&Ecirc;NCIA?</div>
          <div style="font-size:6px; margin-top:2px;">1-Sim &nbsp;&nbsp; 2-N&atilde;o &nbsp;&nbsp; 3-Indeterminado</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.localInfeccao?.autoctone || '1'}</div>
        </div>
        <div class="sn-cell" style="flex:0.4;">
          <div class="ct"><span class="cn">57</span> UF</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(cs.localInfeccao?.uf || 'PA', 2)}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">58</span> PA&Iacute;S</div>
          <div class="cv">${cs.localInfeccao?.pais || 'Brasil'}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct"><span class="cn">59</span> MUNIC&Iacute;PIO</div>
          <div class="cv">${cs.localInfeccao?.mun || ''}</div>
        </div>
        <div class="sn-cell" style="flex:0.8;">
          <div class="ct">C&Oacute;DIGO (IBGE)</div>
          <div class="cv" style="padding-top:3px;">${splitDigits('', 7)}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">60</span> DISTRITO</div>
          <div class="cv">${cs.localInfeccao?.dist || ''}</div>
        </div>
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct"><span class="cn">61</span> BAIRRO</div>
          <div class="cv">${cs.localInfeccao?.bairro || ''}</div>
        </div>
      </div>

      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:2.2;">
          <div class="ct"><span class="cn">62</span> CLASSIFICA&Ccedil;&Atilde;O</div>
          <div style="font-size:5px; line-height:1.1; margin-top:2px;">
            5-Descartado &nbsp; 10-Dengue &nbsp; 11-Dengue c/ Sinais de Alarme<br>
            12-Dengue Grave &nbsp; 13-Chikungunya
          </div>
          <div style="position:absolute; right:8px; top:4px; display:inline-flex;">
            <span class="digit-box" style="width:11px; height:13px; font-size:8px; border:1px solid #000; display:inline-flex; align-items:center; justify-content:center; background:#fff; font-family:monospace; font-weight:bold;">${String(cs.conclusao?.classificacao || (diseaseLower === 'chikungunya' ? '13' : '10')).padStart(2,'0')[0]}</span>
            <span class="digit-box" style="width:11px; height:13px; font-size:8px; border:1px solid #000; display:inline-flex; align-items:center; justify-content:center; background:#fff; font-family:monospace; font-weight:bold; margin-left:-1px;">${String(cs.conclusao?.classificacao || (diseaseLower === 'chikungunya' ? '13' : '10')).padStart(2,'0')[1]}</span>
          </div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.5;">
          <div class="ct"><span class="cn">63</span> CRIT&Eacute;RIO DE CONFIRMA&Ccedil;&Atilde;O/DESCARTE</div>
          <div style="font-size:5px; line-height:1.1; margin-top:2px;">
            1-Laborat&oacute;rio &nbsp; 2-Cl&iacute;nico-Epidemiol&oacute;gico &nbsp; 3-Em investiga&ccedil;&atilde;o
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.conclusao?.criterio || '1'}</div>
        </div>
        <div class="sn-cell" style="position:relative; flex:1.2;">
          <div class="ct"><span class="cn">64</span> APRESENTA&Ccedil;&Atilde;O CL&Iacute;NICA</div>
          <div style="font-size:5.5px; margin-top:2px;">1-Aguda &nbsp; 2-Cr&ocirc;nica</div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.conclusao?.apresentacaoChik || '1'}</div>
        </div>
      </div>

      <div class="sn-row">
        <div class="sn-cell" style="position:relative; flex:2.0;">
          <div class="ct"><span class="cn">65</span> EVOLU&Ccedil;&Atilde;O DO CASO</div>
          <div style="font-size:5px; line-height:1.1; margin-top:2px;">
            1-Cura &nbsp; 2-&Oacute;bito pelo agravo &nbsp; 3-&Oacute;bito por outras causas<br>
            4-&Oacute;bito em investiga&ccedil;&atilde;o &nbsp; 9-Ignorado
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">${cs.conclusao?.evolucao || '1'}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">66</span> DATA DO &Oacute;BITO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.conclusao?.dataObito), 8)}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct"><span class="cn">67</span> DATA DO ENCERRAMENTO</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(cs.conclusao?.dataEncerramento || data.dataNotificacao), 8)}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- BLOCO 3: SINAIS DE ALARME E DENGUE GRAVE -->
  <div class="sn-block">
    <div class="sn-sidebar" style="font-size:5.5px;">Dados Cl&iacute;nicos - Dengue com Sinais de Alarme e Dengue Grave</div>
    <div class="sn-content">
      <div style="background:#e6e6e6; font-size:7.5px; font-weight:bold; text-align:center; padding:3px; border-bottom:1px solid #000;">
        Preencher os sinais cl&iacute;nicos para Dengue com Sinais de Alarme e Dengue Grave
      </div>

      <!-- Campo 68 & 69 -->
      <div class="sn-row" style="flex-direction:column; padding:3px 5px;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <div class="ct"><span class="cn">68</span> Dengue com sinais de alarme &nbsp;&nbsp;&nbsp; 1-Sim &nbsp; 2-N&atilde;o &nbsp; 9-Ignorado</div>
          <div style="font-size:6.5px; font-weight:bold; display:flex; align-items:center; gap:3px;">
            <span class="cn">69</span> Data de in&iacute;cio dos sinais de alarme: ${splitDigits(formatDateDigits(sa.dataInicio), 8)}
          </div>
        </div>
        <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:3px; font-size:6.5px; font-weight:bold; margin-top:3px;">
          <div>${cb(sa.vomitos)} V&ocirc;mitos persistentes</div>
          <div>${cb(sa.hematocrito)} Aumento progressivo do hemat&oacute;crito</div>
          <div>${cb(sa.dorAbdominal)} Dor abdominal intensa e cont&iacute;nua</div>
          <div>${cb(sa.hepatomegalia)} Hepatomegalia >= 2cm</div>
          <div>${cb(sa.letargia)} Letargia ou irritabilidade</div>
          <div>${cb(sa.acumuloLiq)} Ac&uacute;mulo de l&iacute;quidos</div>
          <div>${cb(sa.sangramento)} Sangramento de mucosa/outras hemorragias</div>
          <div>${cb(sa.hipotensao)} Hipotens&atilde;o postural e/ou lipot&iacute;mia</div>
          <div>${cb(sa.plaquetas)} Queda abrupta de plaquetas</div>
        </div>
      </div>

      <!-- Campo 70 & 71 -->
      <div class="sn-row" style="flex-direction:column; padding:3px 5px;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <div class="ct"><span class="cn">70</span> Dengue grave &nbsp;&nbsp;&nbsp; 1-Sim &nbsp; 2-N&atilde;o &nbsp; 9-Ignorado</div>
          <div style="font-size:6.5px; font-weight:bold; display:flex; align-items:center; gap:3px;">
            <span class="cn">71</span> Data de in&iacute;cio dos sinais de gravidade: ${splitDigits(formatDateDigits(dg.dataInicio), 8)}
          </div>
        </div>

        <div style="font-size:6.5px; font-weight:bold; margin-top:2px; color:#444;">Extravasamento grave de plasma:</div>
        <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:2px; font-size:6px; margin-top:1px;">
          <div>${cb(dg.pulso)} Pulso d&eacute;bil ou indetect&aacute;vel</div>
          <div>${cb(dg.taquicardia)} Taquicardia</div>
          <div>${cb(dg.pa)} PA convergente <= 20 mmHg</div>
          <div>${cb(dg.extremidades)} Extremidades frias</div>
          <div>${cb(dg.capilar)} Tempo enchimento capilar >= 3s</div>
          <div>${cb(dg.hipotensaoTardia)} Hipotens&atilde;o arterial em fase tardia</div>
          <div style="grid-column: span 3;">${cb(dg.acumuloResp)} Ac&uacute;mulo de l&iacute;quidos com insufici&ecirc;ncia respirat&oacute;ria</div>
        </div>

        <div style="font-size:6.5px; font-weight:bold; margin-top:3px; color:#444;">Sangramento grave:</div>
        <div style="display:grid; grid-template-columns: repeat(2, 1fr); gap:2px; font-size:6px; margin-top:1px;">
          <div>${cb(dg.hematemese)} Hemat&ecirc;mese</div>
          <div>${cb(dg.metrorragia)} Metrorragia volumosa</div>
          <div>${cb(dg.melena)} Melena</div>
          <div>${cb(dg.snc)} Sangramento do SNC</div>
        </div>

        <div style="font-size:6.5px; font-weight:bold; margin-top:3px; color:#444;">Comprometimento grave de &oacute;rg&atilde;os:</div>
        <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:2px; font-size:6px; margin-top:1px;">
          <div>${cb(dg.astAlt)} AST/ALT > 1.000</div>
          <div>${cb(dg.miocardite)} Miocardite</div>
          <div>${cb(dg.consciencia)} Altera&ccedil;&atilde;o da consci&ecirc;ncia</div>
          <div style="grid-column: span 3;">Outros &oacute;rg&atilde;os, especificar: <u>${dg.outrosOrgaos || '_____________________________'}</u></div>
        </div>
      </div>
    </div>
  </div>

  <!-- BLOCO 4: INFORMAÇÕES COMPLEMENTARES E OBSERVACÕES -->
  <div class="sn-block">
    <div class="sn-sidebar">Observa&ccedil;&otilde;es</div>
    <div class="sn-content">
      <div style="background:#e6e6e6; font-size:7.5px; font-weight:bold; padding:2px 5px; border-bottom:1px solid #000;">
        Informa&ccedil;&otilde;es complementares e observa&ccedil;&otilde;es
      </div>
      <div class="sn-row" style="min-height:45px; padding:3px 5px; font-size:8px;">
        ${cs.obs || ''}
      </div>
    </div>
  </div>

  <!-- BLOCO 5: INVESTIGADOR -->
  <div class="sn-block">
    <div class="sn-sidebar">Investigador</div>
    <div class="sn-content">
      <div class="sn-row">
        <div class="sn-cell" style="flex:2.0;">
          <div class="ct">MUNIC&Iacute;PIO/UNIDADE DE SA&Uacute;DE</div>
          <div class="cv">${cs.investigador?.unidade || data.munNotificacao + ' / ' + unitName}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct">C&Oacute;D. DA UNID. DE SA&Uacute;DE</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(cnesCode, 7)}</div>
        </div>
      </div>
      <div class="sn-row">
        <div class="sn-cell" style="flex:1.8;">
          <div class="ct">NOME</div>
          <div class="cv" style="font-weight:900; font-size:10px;">${cs.investigador?.nome || data.notificatorName || 'Profissional de Saude'}</div>
        </div>
        <div class="sn-cell" style="flex:1.0;">
          <div class="ct">FUN&Ccedil;&Atilde;O</div>
          <div class="cv">${cs.investigador?.funcao || 'Profissional de Saude'}</div>
        </div>
        <div class="sn-cell" style="flex:1.2;">
          <div class="ct">ASSINATURA</div>
          <div class="cv" style="border-bottom:1px dotted #555; margin-top:4px; min-height:14px;"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer-info">
    <span>Chikungunya/Dengue</span>
    <span>Sinan Online</span>
    <span>SVS 14/03/2016</span>
  </div>
</div>
        `;
    }

    if (diseaseLower === 'tracoma') {
        let tracomaRowsHtml = '';
        const cases = cs.cases || [];
        function formatAge(age) {
            if (age === undefined || age === '') return '<span class="digit-box">&nbsp;</span><span class="digit-box">&nbsp;</span><span class="digit-box">&nbsp;</span>';
            let ageStr = String(age).replace(/\D/g, '').padStart(3, '0');
            return splitDigits(ageStr, 3);
        }
        for (let i = 0; i < 25; i++) {
            const c = cases[i] || {};
            const fc = Array.isArray(c.fc) ? c.fc : [];
            const ageDigitsStr = formatAge(c.idade);

            tracomaRowsHtml += `
            <tr style="font-size: 8px; text-align: center; border-bottom: 1px solid #000; height: 17px;">
                <td style="border-right: 1px solid #000; padding: 1px; font-weight: bold; text-align: left; padding-left: 4px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                    ${c.inicial || '&nbsp;'}
                </td>
                <td style="border-right: 1px solid #000; padding: 1px;">
                    ${c.uf || 'PA'}
                </td>
                <td style="border-right: 1px solid #000; padding: 1px; text-align: left; padding-left: 2px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                    ${c.mun || 'MARABA'}
                </td>
                <td style="border-right: 1px solid #000; padding: 1px; text-align: left; padding-left: 2px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                    ${c.dist || '&nbsp;'}
                </td>
                <td style="border-right: 1px solid #000; padding: 1px; text-align: left; padding-left: 2px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                    ${c.bairro || '&nbsp;'}
                </td>
                <td style="border-right: 1px solid #000; padding: 1px;">
                    ${singleBox(c.zona || '9')}
                </td>
                <td style="border-right: 1px solid #000; padding: 1px; text-transform: uppercase;">
                    ${singleBox(c.sexo || 'I')}
                </td>
                <td style="border-right: 1px solid #000; padding: 1px; white-space: nowrap;">
                    <div style="display: inline-flex; align-items: center; justify-content: center; height: 11px;">
                        ${ageDigitsStr} <span style="font-weight: bold; margin-left: 2px; font-size: 7px; line-height: 1;">| 4 (anos)</span>
                    </div>
                </td>
                <td style="border-right: 1px solid #000; padding: 1px;">
                    ${singleBox(fc.includes('TF') ? '1' : '2')}
                </td>
                <td style="border-right: 1px solid #000; padding: 1px;">
                    ${singleBox(fc.includes('TI') ? '1' : '2')}
                </td>
                <td style="border-right: 1px solid #000; padding: 1px;">
                    ${singleBox(fc.includes('TS') ? '1' : '2')}
                </td>
                <td style="border-right: 1px solid #000; padding: 1px;">
                    ${singleBox(fc.includes('TT') ? '1' : '2')}
                </td>
                <td style="border-right: 1px solid #000; padding: 1px;">
                    ${singleBox(fc.includes('CO') ? '1' : '2')}
                </td>
                <td style="padding: 1px;">
                    ${singleBox(c.cirurg || '2')}
                </td>
            </tr>
            `;
        }
        html = generateTracomaHtml();
    } else {
        let page1, page2;
        if (diseaseLower === 'dengue' || diseaseLower === 'chikungunya') {
            page1 = generatePage1DengueHtml(data);
            page2 = generatePage2DengueHtml(data);
        } else if (diseaseLower === 'malaria') {
            page1 = generatePage1MalariaHtml(data);
            page2 = generatePage2MalariaHtml(data);
        } else if (diseaseLower === 'raiva') {
            page1 = generatePage1RaivaHtml(data);
            page2 = generatePage2RaivaHtml(data);
        } else if (diseaseLower === 'leishmaniose-visceral') {
            page1 = generatePage1LeishVisceralHtml(data);
            page2 = generatePage2LeishVisceralHtml(data);
        } else if (diseaseLower === 'chagas') {
            page1 = generatePage1ChagasHtml(data);
            page2 = generatePage2ChagasHtml(data);
        } else if (diseaseLower === 'leptospirose') {
            page1 = generatePage1LeptospiroseHtml(data);
            page2 = generatePage2LeptospiroseHtml(data);
        } else if (diseaseLower === 'acidente-ofidico' || diseaseLower === 'animais-peconhentos' || diseaseLower === 'peconhentos' || diseaseLower === 'ofidico') {
            page1 = generatePage1AcidenteOfidicoHtml(data);
            page2 = generatePage2AcidenteOfidicoHtml(data);
        } else if (diseaseLower === 'esquistossomose') {
            page1 = generatePage1EsquistossomoseHtml(data);
            page2 = '';
        } else if (diseaseLower === 'hanseniase') {
            page1 = generatePage1HanseniaseHtml(data);
            page2 = '';
        } else if (diseaseLower === 'tracoma') {
            page1 = generatePage1TracomaHtml(data);
            page2 = '';
        } else if (diseaseLower === 'leishmaniose-tegumentar') {
            page1 = generatePage1LeishTegumentarHtml(data);
            page2 = generatePage2LeishTegumentarHtml(data);
        } else {
            page1 = generatePage1Html(data);
            page2 = generatePage2Standard(data);
        }
        
        html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>Ficha SINAN - ${data.patientName || 'Paciente'}</title>
<style>
  @media screen { body { background:#f0f0f0; margin:0; padding:20px; display:flex; flex-direction:column; align-items:center; font-family:Arial,Helvetica,sans-serif; } .sinan-page { background:#fff; width:210mm; padding:8mm 10mm; box-sizing:border-box; margin-bottom:25px; box-shadow:0 4px 15px rgba(0,0,0,0.15); border:1px solid #ccc; } }
  @media print { body { margin:0; padding:0; background:#fff; font-family:Arial,Helvetica,sans-serif; -webkit-print-color-adjust:exact; print-color-adjust:exact; } .sinan-page { width:210mm; min-height:297mm; padding:8mm 10mm; box-sizing:border-box; page-break-after:always; background:#fff; } .no-print { display:none !important; } }
  .sinan-page * { box-sizing:border-box; }
  /* Header */
  .sn-header { display:flex; justify-content:space-between; align-items:stretch; border-bottom:2px solid #000; padding-bottom:6px; margin-bottom:6px; }
  .sn-header-left { width:30%; font-size:10px; font-weight:bold; line-height:1.4; }
  .sn-header-center { flex:1; text-align:center; padding:0 10px; }
  .sn-header-center .sn-sinan { font-size:11px; font-weight:bold; letter-spacing:2px; margin:0; }
  .sn-header-center .sn-title { font-size:14px; font-weight:900; margin:2px 0; letter-spacing:0.5px; }
  .sn-header-center .sn-subtitle { font-size:12px; font-weight:bold; text-decoration:underline; margin:0; }
  .sn-header-right { width:22%; display:flex; flex-direction:column; align-items:flex-end; justify-content:center; }
  .sn-num-label { font-size:8px; font-weight:bold; margin-bottom:2px; }
  .sn-num-box { border:1.5px solid #000; background:#f0f0f0; padding:5px 10px; font-size:13px; font-weight:bold; border-radius:4px; min-width:110px; text-align:center; }
  /* Blocks */
  .sn-block { display:flex; width:100%; border:1.5px solid #000; margin-bottom:5px; }
  .sn-sidebar { width:26px; background:#e6e6e6; border-right:1.5px solid #000; display:flex; align-items:center; justify-content:center; font-size:7.5px; font-weight:bold; text-align:center; text-transform:uppercase; writing-mode:vertical-rl; transform:rotate(180deg); padding:3px; flex-shrink:0; }
  .sn-content { flex:1; display:flex; flex-direction:column; }
  .sn-row { display:flex; width:100%; border-bottom:1px solid #000; }
  .sn-row:last-child { border-bottom:none; }
  .sn-cell { display:flex; flex-direction:column; padding:2px 5px; border-right:1px solid #000; flex:1; }
  .sn-cell:last-child { border-right:none; }
  .ct { font-size:7px; font-weight:bold; text-transform:uppercase; color:#111; display:flex; align-items:center; gap:3px; white-space:nowrap; }
  .cn { display:inline-flex; align-items:center; justify-content:center; border:1px solid #000; width:10px; height:10px; font-size:6.5px; font-weight:bold; background:#fff; flex-shrink:0; }
  .cv { font-size:9.5px; font-weight:bold; color:#000; padding-top:2px; min-height:14px; text-transform:uppercase; display:flex; align-items:center; flex-wrap:wrap; }
  .digit-box { display:inline-flex; align-items:center; justify-content:center; width:11px; height:13px; border:1px solid #000; margin-right:1px; font-size:8px; font-family:monospace; font-weight:bold; background:#fff; }
  .check-box { display:inline-flex; align-items:center; justify-content:center; width:10px; height:10px; border:1px solid #000; margin:0 2px; font-size:7.5px; font-weight:bold; background:#fff; flex-shrink:0; }
  .single-box { display:inline-flex; align-items:center; justify-content:center; width:11px; height:11px; border:1px solid #000; font-size:8px; font-weight:bold; background:#fff; flex-shrink:0; line-height:1; font-family:monospace; }
  .double-box { display:inline-flex; align-items:center; }
  .double-box span { display:inline-flex; align-items:center; justify-content:center; width:13px; height:13px; border:1px solid #000; font-size:8px; font-weight:bold; background:#fff; margin-left:-1px; line-height:1; font-family:monospace; }
  .fr { display:flex; align-items:center; flex-wrap:wrap; gap:6px; font-size:7.5px; margin-top:2px; }
  .fi { display:flex; align-items:center; gap:1px; }
  .footer-info { display:flex; justify-content:space-between; font-size:7.5px; font-weight:bold; margin-top:3px; border-top:1px solid #888; padding-top:2px; }
  .no-print-btn { position:fixed; top:20px; right:20px; background:#0d8abc; color:#fff; border:none; padding:10px 20px; font-size:14px; font-weight:bold; border-radius:8px; cursor:pointer; box-shadow:0 4px 10px rgba(0,0,0,0.2); z-index:9999; display:flex; align-items:center; gap:8px; }
  .no-print-btn:hover { background:#0a6f98; }
  .pg2-header { text-align:center; border-bottom:2px solid #000; padding-bottom:6px; margin-bottom:6px; }
  .pg2-title { font-size:16px; font-weight:900; margin:0; letter-spacing:1px; }
  .pg2-sub { font-size:9px; margin:2px 0 0 0; font-weight:bold; }
</style>
</head>
<body>
<button class="no-print-btn no-print" onclick="window.print()">&#128438; Imprimir / Salvar PDF</button>
${page1}
${page2}
</body>
</html>`;
    }

    printWindow.document.write(html);
    printWindow.document.close();
};window.showPatientNotificationDetail = function(historyItem, patient) {
    const modal = document.getElementById('patient-notification-detail-modal');
    const body = document.getElementById('patient-notification-detail-body');
    const printBtn = document.getElementById('btn-print-patient-notification');
    const editBtn = document.getElementById('btn-edit-patient-notification');
    
    if (!modal || !body) return;

    const data = historyItem.notificationData || {};

    const diseaseName = (typeof CaseNotificationModule !== 'undefined' && CaseNotificationModule.getDiseaseName) 
        ? CaseNotificationModule.getDiseaseName(data.disease) 
        : (data.disease || 'Não informado');

    const isEdited = historyItem.isEdited || data.isEdited;
    const updatedByName = historyItem.updatedByName || data.updatedByName;
    const updatedAt = historyItem.updatedAt || data.updatedAt;

    let html = `
        ${isEdited ? `
            <div style="margin-bottom: 15px; padding: 10px 14px; background-color: #fff8e1; border-left: 4px solid #ffb300; border-radius: 6px; font-size: 0.88rem; color: #8f6b00; display: flex; align-items: center; gap: 10px;">
                <i class="fas fa-exclamation-triangle" style="font-size: 1.2rem; color: #ffa000;"></i>
                <div>
                    <strong>Aviso de Alteração:</strong> Esta notificação foi modificada por <strong>${updatedByName || 'Profissional'}</strong> em <strong>${updatedAt || historyItem.date}</strong>.
                </div>
            </div>
        ` : ''}
        <div style="margin-bottom: 20px;">
            <h4 style="color: var(--primary-color); margin: 0 0 10px 0;">${historyItem.title}</h4>
            <p style="margin: 0 0 5px 0; color: #555;"><i class="far fa-calendar-alt"></i> <strong>Data da Notificação:</strong> ${historyItem.date}</p>
            <p style="margin: 0 0 5px 0; color: #555;"><strong>Doença Suspeita:</strong> ${diseaseName}</p>
            <p style="margin: 0 0 5px 0; color: #555;"><strong>Unidade de Saúde:</strong> ${data.healthUnit || 'Não informado'}</p>
            <p style="margin: 0 0 5px 0; color: #555;"><strong>Início dos Sintomas:</strong> ${data.symptomsDate || 'Não informado'}</p>
            <p style="margin: 0 0 5px 0; color: #555;"><strong>Notificador Origem:</strong> ${data.notificatorName || 'Não informado'}</p>
        </div>
        <div style="background: #f9fafb; padding: 15px; border-radius: 8px; border: 1px solid #eee;">
            <h5 style="margin: 0 0 10px 0; color: #333;">Sintomas Principais Relatados:</h5>
            <p style="margin: 0; color: #555; line-height: 1.5;">${data.mainSymptoms || historyItem.desc || 'Nenhum detalhe adicional disponível.'}</p>
        </div>
    `;

    body.innerHTML = html;
    modal.style.display = 'flex';

    // Determina se o usuário logado é o proprietário da notificação
    const currentUserId = (typeof AuthModule !== 'undefined' && AuthModule.currentUser) ? AuthModule.currentUser.id : null;
    const isOwner = data.notificatorId === currentUserId || historyItem.notificatorId === currentUserId || historyItem.isOwner;

    // Exibe ou oculta o botão de edição baseado na posse
    if (editBtn) {
        if (isOwner) {
            editBtn.style.display = 'inline-flex';
            
            const newEditBtn = editBtn.cloneNode(true);
            editBtn.parentNode.replaceChild(newEditBtn, editBtn);
            newEditBtn.addEventListener('click', () => {
                modal.style.display = 'none';
                window.enterEditNotificationMode(data, patient);
            });
        } else {
            editBtn.style.display = 'none';
        }
    }

    // Set up print handler
    const newPrintBtn = printBtn.cloneNode(true);
    printBtn.parentNode.replaceChild(newPrintBtn, printBtn);
    
    newPrintBtn.addEventListener('click', () => {
        const notifData = historyItem.notificationData || {};
        
        // Merge patient details into the printed data object
        const printData = {
            ...notifData,
            patientName: patient ? patient.name : (notifData.patientName || 'Não informado'),
            patientAge: patient ? patient.age : (notifData.patientAge || 'Não informado'),
            patientCns: patient ? patient.cns : (notifData.patientCns || ''),
            patientCpf: patient ? patient.cpf : (notifData.patientCpf || ''),
            patientBirthDate: patient ? patient.birthDate : (notifData.patientBirthDate || ''),
            patientMotherName: patient ? patient.motherName : (notifData.patientMotherName || ''),
            patientSex: patient ? patient.sex : (notifData.patientSex || ''),
            patientRace: patient ? patient.race : (notifData.patientRace || ''),
            patientEducation: patient ? patient.education : (notifData.patientEducation || ''),
            patientAddress: patient ? patient.address : (notifData.patientAddress || ''),
            patientNeighborhood: patient ? patient.neighborhood : (notifData.patientNeighborhood || ''),
            patientMunicipality: patient ? patient.municipality : (notifData.patientMunicipality || ''),
            patientUf: patient ? patient.uf : (notifData.patientUf || ''),
            patientPhone: patient ? patient.phone : (notifData.patientPhone || ''),
            patientZone: patient ? patient.zone : (notifData.patientZone || ''),
            
            disease: notifData.disease || historyItem.title.replace('Notificação - ', '').replace('Notificação Inicial - ', ''),
            healthUnit: notifData.healthUnit || '',
            symptomsDate: notifData.symptomsDate || '',
            mainSymptoms: notifData.mainSymptoms || historyItem.desc || '',
            clinicalSigns: notifData.clinicalSigns || {},
            labResults: notifData.labResults || {},
            observations: notifData.observations || '',
            notificatorName: notifData.notificatorName || '',
            created_at: notifData.created_at || new Date().toISOString()
        };
        
        if (typeof window.printNotificationData === 'function') {
            window.printNotificationData(printData);
        }
    });
};

window.enterEditNotificationMode = function(data, patient) {
    if (!data || !data.disease) return;

    // Redireciona para a tela de notificação
    App.showScreen('case-notification');

    // Troca para a aba da doença correspondente
    if (CaseNotificationModule && typeof CaseNotificationModule.switchDisease === 'function') {
        CaseNotificationModule.switchDisease(data.disease);
    }

    // Preenche os dados cadastrais do paciente usando a função existente
    if (window._fillPatientForm && patient) {
        window._fillPatientForm(patient, data.disease);
    }

    // Preenche as informações específicas da notificação
    const setVal = (id, val) => {
        const el = document.getElementById(id);
        if (el && val !== undefined && val !== null) el.value = val;
    };

    setVal(`symptoms-date-${data.disease}`, data.symptomsDate);
    setVal(`health-unit-${data.disease}`, data.healthUnit);
    setVal(`occupation-${data.disease}`, data.clinicalSigns?.occupation);
    setVal(`patient-pregnant-${data.disease}`, data.clinicalSigns?.pregnant);

    // Dados gerais
    setVal(`tipo-notificacao-${data.disease}`, data.surtoData?.tipoNotificacao || data.tipoNotificacao || '2');
    setVal(`data-notificacao-${data.disease}`, data.surtoData?.dataNotificacao || data.dataNotificacao || '');
    setVal(`uf-notificacao-${data.disease}`, data.surtoData?.ufNotificacao || data.ufNotificacao || 'PA');
    setVal(`mun-notificacao-${data.disease}`, data.surtoData?.munNotificacao || data.munNotificacao || 'MARABÁ');

    // Dados de surto
    setVal(`surto-casos-data-${data.disease}`, data.surtoData?.casosData || '');
    setVal(`surto-casos-num-${data.disease}`, data.surtoData?.casosSuspeitos || '');
    setVal(`surto-local-${data.disease}`, data.surtoData?.localSurto || '');

    // Dados complementares
    if (data.disease === 'dengue' || data.disease === 'chikungunya') {
        const cs = data.clinicalSigns || {};
        setVal(`dengue-data-investigacao-${data.disease}`, cs.dataInvestigacao);
        setVal(`dengue-ocupacao-${data.disease}`, cs.occupation);
        if (cs.sinaisClinicos) {
            Object.keys(cs.sinaisClinicos).forEach(k => setVal(`dengue-sint-${k}-${data.disease}`, cs.sinaisClinicos[k]));
        }
        if (cs.comorbidades) {
            Object.keys(cs.comorbidades).forEach(k => setVal(`dengue-comorb-${k}-${data.disease}`, cs.comorbidades[k]));
        }
        if (cs.lab) {
            setVal(`chik-s1-date-${data.disease}`, cs.lab.chikS1Date);
            setVal(`chik-s1-res-${data.disease}`, cs.lab.chikS1Res);
            setVal(`chik-s2-date-${data.disease}`, cs.lab.chikS2Date);
            setVal(`chik-s2-res-${data.disease}`, cs.lab.chikS2Res);
            setVal(`chik-prnt-date-${data.disease}`, cs.lab.chikPrntDate);
            setVal(`chik-prnt-res-${data.disease}`, cs.lab.chikPrntRes);
            setVal(`dengue-igm-date-${data.disease}`, cs.lab.dengueIgmDate);
            setVal(`dengue-igm-res-${data.disease}`, cs.lab.dengueIgmRes);
            setVal(`dengue-ns1-date-${data.disease}`, cs.lab.ns1Date);
            setVal(`dengue-ns1-res-${data.disease}`, cs.lab.ns1Res);
            setVal(`dengue-isolamento-date-${data.disease}`, cs.lab.isolamentoDate);
            setVal(`dengue-isolamento-res-${data.disease}`, cs.lab.isolamentoRes);
            setVal(`dengue-pcr-date-${data.disease}`, cs.lab.pcrDate);
            setVal(`dengue-pcr-res-${data.disease}`, cs.lab.pcrRes);
            setVal(`dengue-sorotipo-${data.disease}`, cs.lab.sorotipo);
            setVal(`dengue-histo-date-${data.disease}`, cs.lab.histoDate);
            setVal(`dengue-histo-res-${data.disease}`, cs.lab.histoRes);
            setVal(`dengue-imuno-date-${data.disease}`, cs.lab.imunoDate);
            setVal(`dengue-imuno-res-${data.disease}`, cs.lab.imunoRes);
        }
        if (cs.hospitalizacao) {
            setVal(`dengue-hospitalizacao-${data.disease}`, cs.hospitalizacao.ocorreu);
            setVal(`dengue-data-internacao-${data.disease}`, cs.hospitalizacao.dataInternacao);
            setVal(`dengue-hospital-uf-${data.disease}`, cs.hospitalizacao.uf);
            setVal(`dengue-hospital-mun-${data.disease}`, cs.hospitalizacao.mun);
            setVal(`dengue-hospital-nome-${data.disease}`, cs.hospitalizacao.nome);
            setVal(`dengue-hospital-fone-${data.disease}`, cs.hospitalizacao.fone);
        }
        if (cs.localInfeccao) {
            setVal(`dengue-autoctone-${data.disease}`, cs.localInfeccao.autoctone);
            setVal(`dengue-uf-infeccao-${data.disease}`, cs.localInfeccao.uf);
            setVal(`dengue-pais-infeccao-${data.disease}`, cs.localInfeccao.pais);
            setVal(`dengue-mun-infeccao-${data.disease}`, cs.localInfeccao.mun);
            setVal(`dengue-dist-infeccao-${data.disease}`, cs.localInfeccao.dist);
            setVal(`dengue-bairro-infeccao-${data.disease}`, cs.localInfeccao.bairro);
        }
        if (cs.conclusao) {
            setVal(`dengue-classificacao-${data.disease}`, cs.conclusao.classificacao);
            setVal(`dengue-criterio-${data.disease}`, cs.conclusao.criterio);
            setVal(`dengue-apresentacao-chik-${data.disease}`, cs.conclusao.apresentacaoChik);
            setVal(`dengue-evolucao-${data.disease}`, cs.conclusao.evolucao);
            setVal(`dengue-data-obito-${data.disease}`, cs.conclusao.dataObito);
            setVal(`dengue-data-encerramento-${data.disease}`, cs.conclusao.dataEncerramento);
        }
        if (cs.sinaisAlarme) {
            setVal(`dengue-sinais-alarme-date-${data.disease}`, cs.sinaisAlarme.dataInicio);
            setVal(`dengue-alarme-vomitos-${data.disease}`, cs.sinaisAlarme.vomitos);
            setVal(`dengue-alarme-dor-abdo-${data.disease}`, cs.sinaisAlarme.dorAbdominal);
            setVal(`dengue-alarme-letargia-${data.disease}`, cs.sinaisAlarme.letargia);
            setVal(`dengue-alarme-sangramento-${data.disease}`, cs.sinaisAlarme.sangramento);
            setVal(`dengue-alarme-hematocrito-${data.disease}`, cs.sinaisAlarme.hematocrito);
            setVal(`dengue-alarme-hepatomegalia-${data.disease}`, cs.sinaisAlarme.hepatomegalia);
            setVal(`dengue-alarme-acumulo-liq-${data.disease}`, cs.sinaisAlarme.acumuloLiq);
            setVal(`dengue-alarme-hipotensao-${data.disease}`, cs.sinaisAlarme.hipotensao);
            setVal(`dengue-alarme-plaquetas-${data.disease}`, cs.sinaisAlarme.plaquetas);
        }
        if (cs.dengueGrave) {
            setVal(`dengue-sinais-grave-date-${data.disease}`, cs.dengueGrave.dataInicio);
            setVal(`dengue-grave-pulso-${data.disease}`, cs.dengueGrave.pulso);
            setVal(`dengue-grave-pa-${data.disease}`, cs.dengueGrave.pa);
            setVal(`dengue-grave-capilar-${data.disease}`, cs.dengueGrave.capilar);
            setVal(`dengue-grave-acumulo-resp-${data.disease}`, cs.dengueGrave.acumuloResp);
            setVal(`dengue-grave-taquicardia-${data.disease}`, cs.dengueGrave.taquicardia);
            setVal(`dengue-grave-extremidades-${data.disease}`, cs.dengueGrave.extremidades);
            setVal(`dengue-grave-hipotensao-tardia-${data.disease}`, cs.dengueGrave.hipotensaoTardia);
            setVal(`dengue-grave-hematemese-${data.disease}`, cs.dengueGrave.hematemese);
            setVal(`dengue-grave-melena-${data.disease}`, cs.dengueGrave.melena);
            setVal(`dengue-grave-metrorragia-${data.disease}`, cs.dengueGrave.metrorragia);
            setVal(`dengue-grave-snc-${data.disease}`, cs.dengueGrave.snc);
            setVal(`dengue-grave-ast-alt-${data.disease}`, cs.dengueGrave.astAlt);
            setVal(`dengue-grave-miocardite-${data.disease}`, cs.dengueGrave.miocardite);
            setVal(`dengue-grave-consciencia-${data.disease}`, cs.dengueGrave.consciencia);
            setVal(`dengue-grave-outros-orgaos-${data.disease}`, cs.dengueGrave.outrosOrgaos);
        }
        if (cs.investigador) {
            setVal(`dengue-inv-unidade-${data.disease}`, cs.investigador.unidade);
            setVal(`dengue-inv-nome-${data.disease}`, cs.investigador.nome);
            setVal(`dengue-inv-funcao-${data.disease}`, cs.investigador.funcao);
        }
        setVal(`dengue-obs-${data.disease}`, cs.obs);
    } else if (data.disease === 'tracoma') {
        setVal(`tracoma-inquerito-${data.disease}`, data.clinicalSigns?.inquerito || '1');
        setVal(`tracoma-examinadas-${data.disease}`, data.clinicalSigns?.pessoasExaminadas || '0');
        setVal(`tracoma-positivos-${data.disease}`, data.clinicalSigns?.casosPositivos || '0');
        
        const tbody = document.querySelector(`#tracoma-cases-table-${data.disease} tbody`);
        if (tbody) {
            tbody.innerHTML = '';
            if (Array.isArray(data.clinicalSigns?.cases)) {
                data.clinicalSigns.cases.forEach(c => {
                    window.addTracomaCaseRow(`tracoma-cases-table-${data.disease}`, c);
                });
            } else {
                window.addTracomaCaseRow(`tracoma-cases-table-${data.disease}`);
            }
        }
    } else if (data.disease === 'hanseniase') {
        setVal(`hanseniase-prontuario-${data.disease}`, data.clinicalSigns?.prontuario);
        setVal(`hanseniase-ocupacao-${data.disease}`, data.clinicalSigns?.occupation);
        setVal(`hanseniase-lesoes-${data.disease}`, data.clinicalSigns?.lesoesCutaneas);
        setVal(`hanseniase-forma-${data.disease}`, data.clinicalSigns?.formaClinica);
        setVal(`hanseniase-class-oper-${data.disease}`, data.clinicalSigns?.classOperacional);
        setVal(`hanseniase-nervos-${data.disease}`, data.clinicalSigns?.nervosAfetados);
        setVal(`hanseniase-incapacidade-${data.disease}`, data.clinicalSigns?.incapacidadeFisica);
        setVal(`hanseniase-modo-entrada-${data.disease}`, data.clinicalSigns?.modoEntrada);
        setVal(`hanseniase-modo-deteccao-${data.disease}`, data.clinicalSigns?.modoDeteccao);
        setVal(`hanseniase-baciloscopia-${data.disease}`, data.clinicalSigns?.baciloscopia);
        setVal(`hanseniase-inicio-tratamento-${data.disease}`, data.clinicalSigns?.dataInicioTratamento);
        setVal(`hanseniase-esquema-${data.disease}`, data.clinicalSigns?.esquemaTerapeutico);
        setVal(`hanseniase-contatos-${data.disease}`, data.clinicalSigns?.contatosRegistrados);
    } else if (data.disease === 'esquistossomose') {
        setVal(`esquisto-data-investigacao-${data.disease}`, data.clinicalSigns?.dataInvestigacao);
        setVal(`esquisto-ocupacao-${data.disease}`, data.clinicalSigns?.occupation);
        setVal(`esquisto-data-copro-${data.disease}`, data.clinicalSigns?.dataCoproscopia);
        setVal(`esquisto-analise-quant-${data.disease}`, data.clinicalSigns?.analiseQuant);
        setVal(`esquisto-analise-qual-${data.disease}`, data.clinicalSigns?.analiseQual);
        setVal(`esquisto-outros-qual-${data.disease}`, data.clinicalSigns?.outrosQual);
        setVal(`esquisto-outros-especificar-${data.disease}`, data.clinicalSigns?.outrosEspecificar);
        setVal(`esquisto-fez-tratamento-${data.disease}`, data.clinicalSigns?.fezTratamento);
        setVal(`esquisto-data-tratamento-${data.disease}`, data.clinicalSigns?.dataTratamento);
        setVal(`esquisto-motivo-nao-tratamento-${data.disease}`, data.clinicalSigns?.motivoNaoTratamento);
        setVal(`esquisto-cura-1amostra-${data.disease}`, data.clinicalSigns?.cura1Amostra);
        setVal(`esquisto-cura-2amostra-${data.disease}`, data.clinicalSigns?.cura2Amostra);
        setVal(`esquisto-cura-3amostra-${data.disease}`, data.clinicalSigns?.cura3Amostra);
        setVal(`esquisto-cura-data-3amostra-${data.disease}`, data.clinicalSigns?.curaData3Amostra);
        setVal(`esquisto-forma-clinica-${data.disease}`, data.clinicalSigns?.formaClinica);
        setVal(`esquisto-autoctone-${data.disease}`, data.clinicalSigns?.autoctone);
        setVal(`esquisto-infeccao-uf-${data.disease}`, data.clinicalSigns?.infeccaoUf);
        setVal(`esquisto-infeccao-pais-${data.disease}`, data.clinicalSigns?.infeccaoPais);
        setVal(`esquisto-infeccao-mun-${data.disease}`, data.clinicalSigns?.infeccaoMun);
        setVal(`esquisto-infeccao-dist-${data.disease}`, data.clinicalSigns?.infeccaoDist);
        setVal(`esquisto-infeccao-bairro-${data.disease}`, data.clinicalSigns?.infeccaoBairro);
        setVal(`esquisto-infeccao-propriedade-${data.disease}`, data.clinicalSigns?.infeccaoPropriedade);
        setVal(`esquisto-infeccao-hidrica-${data.disease}`, data.clinicalSigns?.infeccaoHidrica);
        setVal(`esquisto-trabalho-${data.disease}`, data.clinicalSigns?.trabalho);
        setVal(`esquisto-evolucao-${data.disease}`, data.clinicalSigns?.evolucao);
        setVal(`esquisto-data-obito-${data.disease}`, data.clinicalSigns?.dataObito);
        setVal(`esquisto-data-encerramento-${data.disease}`, data.clinicalSigns?.dataEncerramento);
    } else if (data.disease === 'malaria') {
        setVal(`malaria-data-investigacao-${data.disease}`, data.clinicalSigns?.dataInvestigacao);
        setVal(`malaria-ocupacao-${data.disease}`, data.clinicalSigns?.occupation);
        setVal(`malaria-atividade-${data.disease}`, data.clinicalSigns?.atividade);
        setVal(`malaria-tipo-lamina-${data.disease}`, data.clinicalSigns?.tipoLamina);
        setVal(`malaria-sintomas-${data.disease}`, data.clinicalSigns?.sintomas);
        setVal(`malaria-data-exame-${data.disease}`, data.clinicalSigns?.dataExame);
        setVal(`malaria-resultado-exame-${data.disease}`, data.clinicalSigns?.resultadoExame);
        setVal(`malaria-parasitos-${data.disease}`, data.clinicalSigns?.parasitos);
        setVal(`malaria-parasitemia-cruzes-${data.disease}`, data.clinicalSigns?.parasitemiaCruzes);
        setVal(`malaria-esquema-tratamento-${data.disease}`, data.clinicalSigns?.esquemaTratamento);
        setVal(`malaria-data-inicio-trat-${data.disease}`, data.clinicalSigns?.dataInicioTrat);
        setVal(`malaria-classificacao-final-${data.disease}`, data.clinicalSigns?.classificacaoFinal);
        setVal(`malaria-autoctone-${data.disease}`, data.clinicalSigns?.autoctone);
        setVal(`malaria-uf-infeccao-${data.disease}`, data.clinicalSigns?.ufInfeccao);
        setVal(`malaria-pais-infeccao-${data.disease}`, data.clinicalSigns?.paisInfeccao);
        setVal(`malaria-municipio-infeccao-${data.disease}`, data.clinicalSigns?.municipioInfeccao);
        setVal(`malaria-ibge-infeccao-${data.disease}`, data.clinicalSigns?.ibgeInfeccao);
        setVal(`malaria-distrito-infeccao-${data.disease}`, data.clinicalSigns?.distritoInfeccao);
        setVal(`malaria-bairro-infeccao-${data.disease}`, data.clinicalSigns?.bairroInfeccao);
        setVal(`malaria-localidade-infeccao-${data.disease}`, data.clinicalSigns?.localidadeInfeccao);
        setVal(`malaria-data-encerramento-${data.disease}`, data.clinicalSigns?.dataEncerramento);
        setVal(`malaria-obs-${data.disease}`, data.clinicalSigns?.obs);
        setVal(`malaria-examinador-${data.disease}`, data.clinicalSigns?.examinador);
    } else if (data.disease === 'raiva') {
        setVal(`raiva-data-investigacao-${data.disease}`, data.clinicalSigns?.dataInvestigacao);
        setVal(`raiva-ocupacao-${data.disease}`, data.clinicalSigns?.occupation);
        setVal(`raiva-tipo-exposicao-${data.disease}`, data.clinicalSigns?.tipoExposicao);
        setVal(`raiva-localizacao-${data.disease}`, data.clinicalSigns?.localizacaoPicada);
        setVal(`raiva-ferimento-${data.disease}`, data.clinicalSigns?.ferimento);
        setVal(`raiva-tipo-ferimento-${data.disease}`, data.clinicalSigns?.tipoFerimento);
        setVal(`raiva-data-exposicao-${data.disease}`, data.clinicalSigns?.dataExposicao);
        setVal(`raiva-antecedentes-trat-${data.disease}`, data.clinicalSigns?.antecedentesTrat);
        setVal(`raiva-doses-aplicadas-${data.disease}`, data.clinicalSigns?.dosesAplicadas);
        setVal(`raiva-data-ultima-dose-${data.disease}`, data.clinicalSigns?.dataUltimaDose);
        setVal(`raiva-especie-animal-${data.disease}`, data.clinicalSigns?.especieAnimal);
        setVal(`raiva-animal-vacinado-${data.disease}`, data.clinicalSigns?.animalVacinado);
        setVal(`raiva-hospitalizacao-${data.disease}`, data.clinicalSigns?.hospitalizacao);
        setVal(`raiva-data-internacao-${data.disease}`, data.clinicalSigns?.dataInternacao);
        setVal(`raiva-hospital-uf-${data.disease}`, data.clinicalSigns?.hospitalUf);
        setVal(`raiva-hospital-mun-${data.disease}`, data.clinicalSigns?.hospitalMun);
        setVal(`raiva-hospital-nome-${data.disease}`, data.clinicalSigns?.hospitalNome);
        setVal(`raiva-sintomas-${data.disease}`, data.clinicalSigns?.sintomas);
        setVal(`raiva-vacina-atual-${data.disease}`, data.clinicalSigns?.vacinaAtual);
        setVal(`raiva-inicio-tratamento-${data.disease}`, data.clinicalSigns?.inicioTratamento);
        setVal(`raiva-vacina-doses-${data.disease}`, data.clinicalSigns?.vacinaDoses);
        setVal(`raiva-data-1dose-${data.disease}`, data.clinicalSigns?.data1Dose);
        setVal(`raiva-data-ultdose-${data.disease}`, data.clinicalSigns?.dataUltDose);
        setVal(`raiva-soro-aplicado-${data.disease}`, data.clinicalSigns?.soroAplicado);
        setVal(`raiva-data-soro-${data.disease}`, data.clinicalSigns?.dataSoro);
        setVal(`raiva-qtd-soro-${data.disease}`, data.clinicalSigns?.qtdSoro);
        setVal(`raiva-infiltracao-soro-${data.disease}`, data.clinicalSigns?.infiltracaoSoro);
        setVal(`raiva-diag-laboratorial-${data.disease}`, data.clinicalSigns?.diagLaboratorial);
        setVal(`raiva-variante-${data.disease}`, data.clinicalSigns?.variante);
        setVal(`raiva-classificacao-${data.disease}`, data.clinicalSigns?.classificacao);
        setVal(`raiva-criterio-${data.disease}`, data.clinicalSigns?.criterio);
        setVal(`raiva-autoctone-${data.disease}`, data.clinicalSigns?.autoctone);
        setVal(`raiva-uf-infeccao-${data.disease}`, data.clinicalSigns?.ufInfeccao);
        setVal(`raiva-pais-infeccao-${data.disease}`, data.clinicalSigns?.paisInfeccao);
        setVal(`raiva-municipio-infeccao-${data.disease}`, data.clinicalSigns?.municipioInfeccao);
        setVal(`raiva-ibge-infeccao-${data.disease}`, data.clinicalSigns?.ibgeInfeccao);
        setVal(`raiva-distrito-infeccao-${data.disease}`, data.clinicalSigns?.distritoInfeccao);
        setVal(`raiva-bairro-infeccao-${data.disease}`, data.clinicalSigns?.bairroInfeccao);
        setVal(`raiva-zona-infeccao-${data.disease}`, data.clinicalSigns?.zonaInfeccao);
        setVal(`raiva-trabalho-${data.disease}`, data.clinicalSigns?.trabalho);
        setVal(`raiva-data-obito-${data.disease}`, data.clinicalSigns?.dataObito);
        setVal(`raiva-data-encerramento-${data.disease}`, data.clinicalSigns?.dataEncerramento);
        setVal(`raiva-obs-${data.disease}`, data.clinicalSigns?.obs);
    } else if (data.disease === 'leishmaniose-visceral') {
        setVal(`leish-visc-data-investigacao-${data.disease}`, data.clinicalSigns?.dataInvestigacao);
        setVal(`leish-visc-ocupacao-${data.disease}`, data.clinicalSigns?.occupation);
        setVal(`leish-visc-sintomas-${data.disease}`, data.clinicalSigns?.sintomas);
        setVal(`leish-visc-hiv-${data.disease}`, data.clinicalSigns?.hiv);
        setVal(`leish-visc-diag-parasito-${data.disease}`, data.clinicalSigns?.diagParasito);
        setVal(`leish-visc-diag-imuno-${data.disease}`, data.clinicalSigns?.diagImuno);
        setVal(`leish-visc-tipo-entrada-${data.disease}`, data.clinicalSigns?.tipoEntrada);
        setVal(`leish-visc-inicio-tratamento-${data.disease}`, data.clinicalSigns?.inicioTratamento);
        setVal(`leish-visc-droga-${data.disease}`, data.clinicalSigns?.droga);
        setVal(`leish-visc-peso-${data.disease}`, data.clinicalSigns?.peso);
        setVal(`leish-visc-dose-${data.disease}`, data.clinicalSigns?.dose);
        setVal(`leish-visc-ampolas-${data.disease}`, data.clinicalSigns?.ampolas);
        setVal(`leish-visc-outra-droga-${data.disease}`, data.clinicalSigns?.outraDroga);
        setVal(`leish-visc-classificacao-${data.disease}`, data.clinicalSigns?.classificacao);
        setVal(`leish-visc-criterio-${data.disease}`, data.clinicalSigns?.criterio);
        setVal(`leish-visc-autoctone-${data.disease}`, data.clinicalSigns?.autoctone);
        setVal(`leish-visc-uf-infeccao-${data.disease}`, data.clinicalSigns?.ufInfeccao);
        setVal(`leish-visc-pais-infeccao-${data.disease}`, data.clinicalSigns?.paisInfeccao);
        setVal(`leish-visc-municipio-infeccao-${data.disease}`, data.clinicalSigns?.municipioInfeccao);
        setVal(`leish-visc-distrito-infeccao-${data.disease}`, data.clinicalSigns?.distritoInfeccao);
        setVal(`leish-visc-bairro-infeccao-${data.disease}`, data.clinicalSigns?.bairroInfeccao);
        setVal(`leish-visc-trabalho-${data.disease}`, data.clinicalSigns?.trabalho);
        setVal(`leish-visc-evolucao-${data.disease}`, data.clinicalSigns?.evolucao);
        setVal(`leish-visc-data-obito-${data.disease}`, data.clinicalSigns?.dataObito);
        setVal(`leish-visc-data-encerramento-${data.disease}`, data.clinicalSigns?.dataEncerramento);
        setVal(`leish-visc-deslocamentos-${data.disease}`, data.clinicalSigns?.deslocamentos);
        setVal(`leish-visc-obs-${data.disease}`, data.clinicalSigns?.obs);
    } else if (data.disease === 'chagas') {
        setVal(`chagas-data-investigacao-${data.disease}`, data.clinicalSigns?.dataInvestigacao);
        setVal(`chagas-ocupacao-${data.disease}`, data.clinicalSigns?.occupation);
        setVal(`chagas-vestigios-${data.disease}`, data.clinicalSigns?.vestigios);
        setVal(`chagas-data-vestigios-${data.disease}`, data.clinicalSigns?.dataVestigios);
        setVal(`chagas-sangue-${data.disease}`, data.clinicalSigns?.sangue);
        setVal(`chagas-controle-soro-${data.disease}`, data.clinicalSigns?.controleSoro);
        setVal(`chagas-contato-${data.disease}`, data.clinicalSigns?.contato);
        setVal(`chagas-mae-infeccao-${data.disease}`, data.clinicalSigns?.maeInfeccao);
        setVal(`chagas-transmissao-oral-${data.disease}`, data.clinicalSigns?.transmissaoOral);
        setVal(`chagas-deslocamentos-${data.disease}`, data.clinicalSigns?.deslocamentos);
        setVal(`chagas-obs-${data.disease}`, data.clinicalSigns?.obs);
    } else if (data.disease === 'leptospirose') {
        setVal(`lepto-data-investigacao-${data.disease}`, data.clinicalSigns?.dataInvestigacao);
        setVal(`lepto-ocupacao-${data.disease}`, data.clinicalSigns?.occupation);
        setVal(`lepto-situacao-risco-${data.disease}`, data.clinicalSigns?.situacaoRisco);
        setVal(`lepto-casos-anteriores-${data.disease}`, data.clinicalSigns?.casosAnteriores);
        setVal(`lepto-data-atendimento-${data.disease}`, data.clinicalSigns?.dataAtendimento);
        setVal(`lepto-sinais-sintomas-${data.disease}`, data.clinicalSigns?.sinaisSintomas);
        setVal(`lepto-hospitalizacao-${data.disease}`, data.clinicalSigns?.hospitalizacao);
        setVal(`lepto-data-internacao-${data.disease}`, data.clinicalSigns?.dataInternacao);
        setVal(`lepto-data-alta-${data.disease}`, data.clinicalSigns?.dataAlta);
        setVal(`lepto-hospital-nome-${data.disease}`, data.clinicalSigns?.hospitalNome);
        setVal(`lepto-elisa-resultado-${data.disease}`, data.clinicalSigns?.elisaResultado);
        setVal(`lepto-mat-resultado-${data.disease}`, data.clinicalSigns?.matResultado);
        setVal(`lepto-classificacao-${data.disease}`, data.clinicalSigns?.classificacao);
        setVal(`lepto-criterio-${data.disease}`, data.clinicalSigns?.criterio);
        setVal(`lepto-autoctone-${data.disease}`, data.clinicalSigns?.autoctone);
        setVal(`lepto-uf-infeccao-${data.disease}`, data.clinicalSigns?.ufInfeccao);
        setVal(`lepto-pais-infeccao-${data.disease}`, data.clinicalSigns?.paisInfeccao);
        setVal(`lepto-municipio-infeccao-${data.disease}`, data.clinicalSigns?.municipioInfeccao);
        setVal(`lepto-distrito-infeccao-${data.disease}`, data.clinicalSigns?.distritoInfeccao);
        setVal(`lepto-bairro-infeccao-${data.disease}`, data.clinicalSigns?.bairroInfeccao);
        setVal(`lepto-zona-infeccao-${data.disease}`, data.clinicalSigns?.zonaInfeccao);
        setVal(`lepto-ambiente-infeccao-${data.disease}`, data.clinicalSigns?.ambienteInfeccao);
        setVal(`lepto-trabalho-${data.disease}`, data.clinicalSigns?.trabalho);
        setVal(`lepto-evolucao-${data.disease}`, data.clinicalSigns?.evolucao);
        setVal(`lepto-data-obito-${data.disease}`, data.clinicalSigns?.dataObito);
        setVal(`lepto-data-encerramento-${data.disease}`, data.clinicalSigns?.dataEncerramento);
        setVal(`lepto-obs-riscos-${data.disease}`, data.clinicalSigns?.obsRiscos);
        setVal(`lepto-obs-${data.disease}`, data.clinicalSigns?.obs);
    } else if (data.disease === 'acidente-ofidico') {
        setVal(`ofidico-data-investigacao-${data.disease}`, data.clinicalSigns?.dataInvestigacao);
        setVal(`ofidico-ocupacao-${data.disease}`, data.clinicalSigns?.occupation);
        setVal(`ofidico-data-acidente-${data.disease}`, data.clinicalSigns?.dataAcidente);
        setVal(`ofidico-uf-ocorrencia-${data.disease}`, data.clinicalSigns?.ufOcorrencia);
        setVal(`ofidico-mun-ocorrencia-${data.disease}`, data.clinicalSigns?.munOcorrencia);
        setVal(`ofidico-localidade-ocorrencia-${data.disease}`, data.clinicalSigns?.localidadeOcorrencia);
        setVal(`ofidico-zona-ocorrencia-${data.disease}`, data.clinicalSigns?.zonaOcorrencia);
        setVal(`ofidico-tempo-atendimento-${data.disease}`, data.clinicalSigns?.tempoAtendimento);
        setVal(`ofidico-local-picada-${data.disease}`, data.clinicalSigns?.localPicada);
        setVal(`ofidico-locais-${data.disease}`, data.clinicalSigns?.locais);
        setVal(`ofidico-sintomas-locais-${data.disease}`, data.clinicalSigns?.sintomasLocais);
        setVal(`ofidico-sistemicas-${data.disease}`, data.clinicalSigns?.sistemicas);
        setVal(`ofidico-sintomas-sistemicos-${data.disease}`, data.clinicalSigns?.sintomasSistemicos);
        setVal(`ofidico-tempo-coag-${data.disease}`, data.clinicalSigns?.tempoCoag);
        setVal(`ofidico-tipo-acidente-${data.disease}`, data.clinicalSigns?.tipoAcidente);
        setVal(`ofidico-agente-especie-${data.disease}`, data.clinicalSigns?.agenteEspecie);
        setVal(`ofidico-classificacao-caso-${data.disease}`, data.clinicalSigns?.classificacaoCaso);
        setVal(`ofidico-soroterapia-${data.disease}`, data.clinicalSigns?.soroterapia);
        setVal(`ofidico-soro-ampolas-${data.disease}`, data.clinicalSigns?.soroAmpolas);
        setVal(`ofidico-compl-locais-${data.disease}`, data.clinicalSigns?.complLocais);
        setVal(`ofidico-compl-locais-especificar-${data.disease}`, data.clinicalSigns?.complLocaisEspecificar);
        setVal(`ofidico-compl-sistemicas-${data.disease}`, data.clinicalSigns?.complSistemicas);
        setVal(`ofidico-compl-sistemicas-especificar-${data.disease}`, data.clinicalSigns?.complSistemicasEspecificar);
        setVal(`ofidico-trabalho-${data.disease}`, data.clinicalSigns?.trabalho);
        setVal(`ofidico-evolucao-${data.disease}`, data.clinicalSigns?.evolucao);
        setVal(`ofidico-data-obito-${data.disease}`, data.clinicalSigns?.dataObito);
        setVal(`ofidico-data-encerramento-${data.disease}`, data.clinicalSigns?.dataEncerramento);
        setVal(`ofidico-obs-${data.disease}`, data.clinicalSigns?.obs);
    } else if (data.disease === 'leishmaniose-tegumentar') {
        setVal(`leish-tegu-data-investigacao-${data.disease}`, data.clinicalSigns?.dataInvestigacao);
        setVal(`leish-tegu-ocupacao-${data.disease}`, data.clinicalSigns?.occupation);
        setVal(`leish-tegu-presenca-lesao-${data.disease}`, data.clinicalSigns?.presencaLesao);
        setVal(`leish-tegu-cicatrizes-${data.disease}`, data.clinicalSigns?.cicatrizes);
        setVal(`leish-tegu-hiv-${data.disease}`, data.clinicalSigns?.hiv);
        setVal(`leish-tegu-diag-parasito-${data.disease}`, data.clinicalSigns?.diagParasito);
        setVal(`leish-tegu-diag-irm-${data.disease}`, data.clinicalSigns?.diagIrm);
        setVal(`leish-tegu-histopato-${data.disease}`, data.clinicalSigns?.histopato);
        setVal(`leish-tegu-tipo-entrada-${data.disease}`, data.clinicalSigns?.tipoEntrada);
        setVal(`leish-tegu-forma-clinica-${data.disease}`, data.clinicalSigns?.formaClinica);
        setVal(`leish-tegu-inicio-tratamento-${data.disease}`, data.clinicalSigns?.inicioTratamento);
        setVal(`leish-tegu-droga-${data.disease}`, data.clinicalSigns?.droga);
        setVal(`leish-tegu-peso-${data.disease}`, data.clinicalSigns?.peso);
        setVal(`leish-tegu-dose-${data.disease}`, data.clinicalSigns?.dose);
        setVal(`leish-tegu-ampolas-${data.disease}`, data.clinicalSigns?.ampolas);
        setVal(`leish-tegu-outra-droga-${data.disease}`, data.clinicalSigns?.outraDroga);
        setVal(`leish-tegu-criterio-${data.disease}`, data.clinicalSigns?.criterio);
        setVal(`leish-tegu-class-epidêmio-${data.disease}`, data.clinicalSigns?.classEpidemio);
        setVal(`leish-tegu-autoctone-${data.disease}`, data.clinicalSigns?.autoctone);
        setVal(`leish-tegu-uf-infeccao-${data.disease}`, data.clinicalSigns?.ufInfeccao);
        setVal(`leish-tegu-pais-infeccao-${data.disease}`, data.clinicalSigns?.paisInfeccao);
        setVal(`leish-tegu-municipio-infeccao-${data.disease}`, data.clinicalSigns?.municipioInfeccao);
        setVal(`leish-tegu-distrito-infeccao-${data.disease}`, data.clinicalSigns?.distritoInfeccao);
        setVal(`leish-tegu-bairro-infeccao-${data.disease}`, data.clinicalSigns?.bairroInfeccao);
        setVal(`leish-tegu-trabalho-${data.disease}`, data.clinicalSigns?.trabalho);
        setVal(`leish-tegu-evolucao-${data.disease}`, data.clinicalSigns?.evolucao);
        setVal(`leish-tegu-data-obito-${data.disease}`, data.clinicalSigns?.dataObito);
        setVal(`leish-tegu-data-encerramento-${data.disease}`, data.clinicalSigns?.dataEncerramento);
        setVal(`leish-tegu-deslocamentos-${data.disease}`, data.clinicalSigns?.deslocamentos);
        setVal(`leish-tegu-obs-${data.disease}`, data.clinicalSigns?.obs);
    } else {
        setVal(`comp-obito-${data.disease}`, data.clinicalSigns?.obito);
        setVal(`comp-contato-${data.disease}`, data.clinicalSigns?.contato);
        setVal(`comp-exantema-${data.disease}`, data.clinicalSigns?.exantema);
        setVal(`comp-exantema-date-${data.disease}`, data.clinicalSigns?.exantemaDate);
        setVal(`comp-petequias-${data.disease}`, data.clinicalSigns?.petequias);
        setVal(`comp-liquor-${data.disease}`, data.clinicalSigns?.liquor);
        setVal(`comp-vacina-${data.disease}`, data.clinicalSigns?.vacina);
        setVal(`comp-vacina-date-${data.disease}`, data.clinicalSigns?.vacinaDate);
        setVal(`comp-hospitalizacao-${data.disease}`, data.clinicalSigns?.hospitalizacao);
        setVal(`comp-hosp-date-${data.disease}`, data.clinicalSigns?.hospitalizacaoDate);
        setVal(`comp-hospital-uf-${data.disease}`, data.clinicalSigns?.hospitalUf);
        setVal(`comp-hospital-mun-${data.disease}`, data.clinicalSigns?.hospitalMun);
        setVal(`comp-hospital-nome-${data.disease}`, data.clinicalSigns?.hospitalName);
    }

    // Dados de residência extras
    setVal(`patient-uf-res-${data.disease}`, data.patientInfo?.uf || (patient && patient.uf) || 'PA');
    setVal(`patient-distrito-${data.disease}`, data.patientInfo?.district || '');
    setVal(`patient-zone-${data.disease}`, data.patientInfo?.zone || (patient && patient.zone) || 'Urbana');
    setVal(`patient-country-${data.disease}`, data.patientInfo?.country || '');

    // Observações
    setVal(`patient-obs-${data.disease}`, data.observations);

    // Colocar o formulário em modo de edição
    const form = document.getElementById(`notification-form-${data.disease}`);
    if (form) {
        form.dataset.editNotificationId = data.id;
        form.dataset.selectedPatientId = patient.id;
        
        // Atualizar texto do botão de envio
        const submitBtn = form.querySelector('.btn-notify');
        if (submitBtn) {
            submitBtn.innerHTML = '<i class="fas fa-save"></i> Atualizar Notificação';
        }
    }

    if (App && App.showToast) {
        App.showToast('Modo de edição: Edite os campos e clique em Atualizar Notificação.', 'info');
    }
};


// =========================================
// CONTROLE DE DENSIDADE DA TABELA + HEADER
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    // Controle de Densidade
    const densityBtn = document.getElementById('density-toggle-btn');
    const table = document.getElementById('recent-alerts-table');
    if (densityBtn && table) {
        let compact = false;
        densityBtn.addEventListener('click', () => {
            compact = !compact;
            table.classList.toggle('compact', compact);
            densityBtn.innerHTML = compact
                ? '<i class="fas fa-expand"></i> Confort\u00e1vel'
                : '<i class="fas fa-grip-lines"></i> Compacto';
        });
    }

    // Atualizar avatar/nome no header quando logar
    let lastLoadedUser = null;
    async function loadDashboardStatsAndNotifications() {
        const user = (typeof AuthModule !== 'undefined' && AuthModule.currentUser)
            ? AuthModule.currentUser
            : null;
            
        if (!user) {
            lastLoadedUser = null;
            return;
        }
        
        if (lastLoadedUser === user.id) return;
        lastLoadedUser = user.id;

        try {
            if (typeof EpiAPI === 'undefined') return;
            const notifications = await EpiAPI.getMyNotifications();
            
            const tbody = document.getElementById('recent-alerts');
            if (tbody) {
                tbody.innerHTML = '';
                if (notifications.length === 0) {
                    tbody.innerHTML = `
                        <tr>
                            <td colspan="5" style="text-align: center; color: #888; padding: 20px;">
                                Nenhuma notificação preenchida hoje.
                            </td>
                        </tr>
                    `;
                } else {
                    const diseaseNames = {
                        dengue: 'Dengue',
                        chikungunya: 'Chikungunya',
                        zika: 'Zika',
                        malaria: 'Malária',
                        leptospirose: 'Leptospirose',
                        influenza: 'Influenza',
                        monkeypox: 'Mpox'
                    };
                    
                    notifications.slice(0, 5).forEach(n => {
                        const dateStr = n.created_at 
                            ? new Date(n.created_at).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }) 
                            : new Date().toLocaleString('pt-BR');
                        const diseaseLabel = diseaseNames[n.disease.toLowerCase()] || n.disease;
                        
                        let statusBadge = '<span class="p-badge info">Pendente</span>';
                        if (n.status === 'SUBMITTED') {
                            statusBadge = '<span class="p-badge success">Transmitido</span>';
                        } else if (n.status === 'DRAFT') {
                            statusBadge = '<span class="p-badge warning">Rascunho</span>';
                        }
                        
                        const tr = document.createElement('tr');
                        tr.style.cursor = 'pointer';
                        tr.innerHTML = `
                            <td><strong>${n.patient_name || 'Paciente'}</strong></td>
                            <td>${diseaseLabel}</td>
                            <td>${dateStr}</td>
                            <td>${n.patient_neighborhood || 'Centro'}</td>
                            <td>${statusBadge}</td>
                        `;
                        tr.addEventListener('click', async () => {
                            try {
                                if (window.App && App.showLoading) App.showLoading();
                                const fullPatient = await EpiAPI.getPatient(n.patient_id);
                                if (window.App && App.hideLoading) App.hideLoading();

                                if (typeof PatientModule !== 'undefined') {
                                    PatientModule.openProfile(fullPatient);
                                    if (window.App && App.showScreen) {
                                        App.showScreen('patients');
                                    }

                                    const mappedPatient = PatientModule.currentPatient;
                                    if (mappedPatient && mappedPatient.history) {
                                        let historyItem = mappedPatient.history.find(h => h.notificationData && h.notificationData.id === n.id);
                                        if (!historyItem) {
                                            const diseaseLabel = diseaseNames[n.disease.toLowerCase()] || n.disease;
                                            historyItem = {
                                                title: `Notificação - ${diseaseLabel}`,
                                                date: dateStr,
                                                desc: `Local: ${n.health_unit || n.healthUnit || ''}.`,
                                                notificationData: {
                                                    id: n.id,
                                                    disease: n.disease,
                                                    healthUnit: n.health_unit || n.healthUnit,
                                                    symptomsDate: n.symptoms_date || n.symptomsDate,
                                                    mainSymptoms: n.symptoms ? (typeof n.symptoms === 'string' ? JSON.parse(n.symptoms).join(', ') : n.symptoms.join(', ')) : '',
                                                    clinicalSigns: typeof n.clinical_signs === 'string' ? JSON.parse(n.clinical_signs || '{}') : (n.clinical_signs || {}),
                                                    labResults: typeof n.lab_results === 'string' ? JSON.parse(n.lab_results || '{}') : (n.lab_results || {}),
                                                    observations: n.observations,
                                                    notificatorName: n.notificator_name || n.notificatorName,
                                                    notificatorId: n.notificator_id || n.notificatorId
                                                }
                                            };
                                        }
                                        if (typeof window.showPatientNotificationDetail === 'function') {
                                            window.showPatientNotificationDetail(historyItem, mappedPatient);
                                        }
                                    }
                                }
                            } catch (err) {
                                if (window.App && App.hideLoading) App.hideLoading();
                                console.error('Erro ao abrir detalhe da notificação:', err);
                                if (window.App && App.showToast) {
                                    App.showToast('Erro ao carregar prontuário do servidor.', 'error');
                                }
                            }
                        });
                        tbody.appendChild(tr);
                    });
                }
            }
            
            const metricActive = document.getElementById('metric-active');
            if (metricActive) {
                metricActive.textContent = notifications.length;
            }
            
            const metricSuspected = document.getElementById('metric-suspected');
            if (metricSuspected) {
                const triageCount = localStorage.getItem(`epi_triagens_${user.name}`) || '4';
                metricSuspected.textContent = triageCount;
            }
            
        } catch (err) {
            console.error('Erro ao carregar dados do painel:', err);
        }
    }

    window.triggerDashboardReload = () => {
        lastLoadedUser = null;
        loadDashboardStatsAndNotifications();
    };

    function updateHeaderUser() {
        const user = (typeof AuthModule !== 'undefined' && AuthModule.currentUser)
            ? AuthModule.currentUser
            : null;

        // Toggle dashboard panels
        const authHistory = document.getElementById('auth-recent-history');
        const visitorHistory = document.getElementById('visitor-recent-history');
        const authPlantao = document.getElementById('auth-plantao-stats');
        const visitorPlantao = document.getElementById('visitor-plantao-stats');
        
        if (user) {
            if (authHistory) authHistory.style.display = 'block';
            if (visitorHistory) visitorHistory.style.display = 'none';
            if (authPlantao) authPlantao.style.display = 'block';
            if (visitorPlantao) visitorPlantao.style.display = 'none';
            loadDashboardStatsAndNotifications();
        } else {
            if (authHistory) authHistory.style.display = 'none';
            if (visitorHistory) visitorHistory.style.display = 'flex';
            if (authPlantao) authPlantao.style.display = 'none';
            if (visitorPlantao) visitorPlantao.style.display = 'flex';
        }

        if (!user) return;
        const nameEl = document.getElementById('user-name');
        const avatarEl = document.getElementById('header-user-avatar');
        const roleEl = document.querySelector('.header-user-role');
        if (nameEl) nameEl.textContent = user.name || 'Visitante';
        if (avatarEl) avatarEl.src = user.photo || ('https://ui-avatars.com/api/?name=' + encodeURIComponent(user.name || 'U') + '&background=00427A&color=fff');
        if (roleEl) roleEl.textContent = user.role || 'Profissional de Saúde';
    }
    setInterval(updateHeaderUser, 2000);
    updateHeaderUser();
});

// ================================================
// HELPERS DE AUTOCOMPLETE DA FICHA DE NOTIFICAÇÃO
// ================================================

// Preenche todos os campos do formulário com dados do paciente
window._fillPatientForm = function(p, diseaseId) {
    const diseaseForm = document.getElementById(`notification-form-${diseaseId}`);
    if (diseaseForm) {
        diseaseForm.dataset.selectedPatientId = p.id;
    }
    const wrapperForm = document.getElementById(`form-${diseaseId}`);
    if (wrapperForm) {
        wrapperForm.dataset.selectedPatientId = p.id;
    }
    const raceMap = {
        'Branca': 'Branca', '1-Branca': 'Branca', '1': 'Branca', 'br': 'Branca',
        'Preta': 'Preta', '2-Preta': 'Preta', '2': 'Preta', 'pr': 'Preta', 'Negra': 'Preta',
        'Amarela': 'Amarela', '3-Amarela': 'Amarela', '3': 'Amarela', 'am': 'Amarela',
        'Parda': 'Parda', '4-Parda': 'Parda', '4': 'Parda', 'pa': 'Parda',
        'Indigena': 'Indigena', 'Indígena': 'Indigena', '5-Indigena': 'Indigena', '5-Indígena': 'Indigena', '5': 'Indigena', 'in': 'Indigena',
        'Nao informada': 'Nao informada', 'Não informada': 'Nao informada', '9-Ignorado': 'Nao informada', '9': 'Nao informada', 'ig': 'Nao informada'
    };
    const schoolMap   = {
        'Analfabeto': 'Analfabeto',
        'Ensino Fundamental 1a a 4a serie Incompleta': 'Ensino Fundamental 1a a 4a serie Incompleta',
        'Ensino Fundamental 4a serie Completa': 'Ensino Fundamental 4a serie Completa',
        'Ensino Fundamental 5a a 8a serie Incompleta': 'Ensino Fundamental 5a a 8a serie Incompleta',
        'Ensino Fundamental Incompleto': 'Ensino Fundamental 1a a 4a serie Incompleta',
        'Ensino Fundamental Completo': 'Ensino Fundamental Completo',
        'Ensino Medio Incompleto': 'Ensino Medio Incompleto',
        'Ensino Médio Incompleto': 'Ensino Medio Incompleto',
        'Ensino Medio Completo': 'Ensino Medio Completo',
        'Ensino Médio Completo': 'Ensino Medio Completo',
        'Ensino Superior Incompleto': 'Ensino Superior Incompleto',
        'Ensino Superior Completo': 'Ensino Superior Completo',
        'Não se aplica': 'Nao se aplica',
        'Nao se aplica': 'Nao se aplica',
        'Não informada': 'Nao informada',
        'Nao informada': 'Nao informada',
        'Ignorado': 'Nao informada'
    };
    const sexMap = { 'Masculino':'M', 'Feminino':'F', 'M':'M', 'F':'F', 'I':'I' };
    const zoneMap = {
        'Urbana': 'Urbana', '1-Urbana': 'Urbana', '1': 'Urbana',
        'Rural': 'Rural', '2-Rural': 'Rural', '2': 'Rural',
        'Periurbana': 'Periurbana', '3-Periurbana': 'Periurbana', '3': 'Periurbana',
        'Ignorado': 'Ignorado', '9-Ignorado': 'Ignorado', '9': 'Ignorado'
    };

    const fill = (fieldId, val) => {
        const el = document.getElementById(fieldId);
        if (!el || val === undefined || val === null || val === '-' || val === 'Não cadastrado') return;
        if (el.tagName === 'SELECT') {
            const opt = Array.from(el.options).find(o => o.value === String(val) || o.text.toLowerCase().includes(String(val).toLowerCase()));
            if (opt) { el.value = opt.value; el.style.background = '#f0f7ff'; }
        } else {
            el.value = val;
            el.style.background = '#f0f7ff';
            el.title = 'Preenchido automaticamente pelo cadastro SUS';
        }
    };

    fill(`patient-name-${diseaseId}`,     p.name);
    fill(`patient-age-${diseaseId}`,      p.age);
    fill(`patient-sus-${diseaseId}`,      p.cns);
    fill(`patient-mother-${diseaseId}`,   p.motherName);
    fill(`patient-sex-${diseaseId}`,      sexMap[p.sex] || 'I');
    fill(`patient-race-${diseaseId}`,     raceMap[p.race] || 'Nao informada');
    fill(`patient-schooling-${diseaseId}`, schoolMap[p.education] || 'Nao informada');
    fill(`patient-uf-res-${diseaseId}`,   p.uf || 'PA');
    fill(`patient-mun-res-${diseaseId}`,  p.municipality || 'MARABÁ');
    fill(`patient-distrito-${diseaseId}`, p.district || '');
    fill(`patient-location-${diseaseId}`, p.neighborhood);
    fill(`patient-street-${diseaseId}`,   p.address ? p.address.replace(/,\s*\d+.*$/, '').trim() : '');
    fill(`patient-number-${diseaseId}`,   p.address ? (p.address.match(/,\s*(\d+)/) || [])[1] || '' : '');
    fill(`patient-cep-${diseaseId}`,      p.cep || '');
    fill(`patient-phone-${diseaseId}`,    p.phone);
    fill(`patient-zone-${diseaseId}`,     zoneMap[p.zone] || 'Urbana');
    fill(`patient-country-${diseaseId}`,  p.country || 'BRASIL');

    // Data de nascimento: converte DD/MM/YYYY → YYYY-MM-DD
    if (p.birthDate) {
        const parts = p.birthDate.split('/');
        const isoDate = parts.length === 3 ? `${parts[2]}-${parts[1]}-${parts[0]}` : p.birthDate;
        fill(`patient-birth-${diseaseId}`, isoDate);
    }

    if (window.App) App.showToast(`✅ Dados de ${p.name} carregados do cadastro SUS!`, 'success');
};

// Busca exata pelo botão (CPF, CNS ou nome) e preenche formulário
window.autocompletePatient = async function(diseaseId) {
    const searchEl = document.getElementById(`patient-search-id-${diseaseId}`);
    if (!searchEl) return;

    const term = searchEl.value.trim();
    if (!term || term.length < 2) {
        if (window.App) App.showToast('Digite pelo menos 2 caracteres do CPF, CNS ou nome.', 'warning');
        return;
    }

    try {
        let results = [];
        let isLocal = false;

        if (typeof EpiAPI !== 'undefined' && EpiAPI.isLoggedIn()) {
            try {
                results = await EpiAPI.searchPatients(term);
            } catch (err) {
                console.warn('[autocompletePatient] Falha na busca da API, usando fallback local:', err.message);
            }
        }

        if (results.length === 0) {
            // Fallback local
            const q = term.toLowerCase();
            const localResults = PatientModule.mockDB.filter(p => {
                const name = p.name ? p.name.toLowerCase() : '';
                const cpf  = p.cpf  ? p.cpf.replace(/[\.\-]/g, '') : '';
                const cns  = p.cns  ? p.cns.replace(/\s/g, '') : '';
                const qClean = q.replace(/[\.\-\s]/g, '');
                return name.includes(q) || cpf.includes(qClean) || cns.includes(qClean);
            });
            results = localResults.map(p => ({
                id: p.id,
                name: p.name,
                _local: true
            }));
            isLocal = true;
        }

        if (results.length === 0) {
            if (window.App) App.showToast('Paciente não encontrado. Preencha os dados manualmente.', 'info');
            searchEl.style.borderColor = '#ef4444';
            return;
        }

        let fullPatient;
        if (isLocal) {
            const localFull = PatientModule.mockDB.find(m => String(m.id) === String(results[0].id));
            if (localFull) {
                fullPatient = {
                    id: localFull.id,
                    name: localFull.name,
                    cpf: localFull.cpf || '-',
                    cns: localFull.cns || '-',
                    birthDate: localFull.birthDate || null,
                    motherName: localFull.motherName || '-',
                    sex: localFull.sex === 'Feminino' ? 'F' : (localFull.sex === 'Masculino' ? 'M' : 'I'),
                    race: localFull.race || '-',
                    education: localFull.education || '-',
                    zone: localFull.zone || '-',
                    address: localFull.address || '-',
                    neighborhood: localFull.neighborhood || '-',
                    municipality: localFull.municipality || 'MARABÁ',
                    uf: localFull.uf || 'PA',
                    phone: localFull.phone || '-',
                };
            }
        } else {
            fullPatient = await EpiAPI.getPatient(results[0].id);
        }

        if (!fullPatient) {
            if (window.App) App.showToast('Erro ao carregar dados do paciente.', 'error');
            return;
        }

        searchEl.value = fullPatient.name;
        searchEl.style.background = '#e8f5e9';
        searchEl.style.borderColor = '#4caf50';

        // Fechar dropdown se estiver aberto
        const dropdown = document.getElementById(`patient-dropdown-${diseaseId}`);
        if (dropdown) dropdown.style.display = 'none';

        // Pre-fill patient's age in years for the fill function
        let calculatedAge = '-';
        if (fullPatient.birthDate) {
          let birth;
          if (typeof fullPatient.birthDate === 'string' && fullPatient.birthDate.includes('/')) {
            const parts = fullPatient.birthDate.split('/');
            birth = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
          } else {
            birth = new Date(fullPatient.birthDate);
          }
          if (!isNaN(birth)) {
            const diff = Date.now() - birth.getTime();
            const ageDate = new Date(diff);
            calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
          }
        }
        fullPatient.age = calculatedAge;

        window._fillPatientForm(fullPatient, diseaseId);
        
        if (isLocal && !EpiAPI.isLoggedIn()) {
            if (window.App) App.showToast('Dados carregados localmente (Offline).', 'info');
        }
    } catch (err) {
        if (window.App) App.showToast(err.message || 'Erro ao buscar paciente.', 'error');
    }
};
