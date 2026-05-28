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
                          let defaultUnit = 'ubs_hiroshi';
                          if (typeof AuthModule !== 'undefined' && AuthModule.currentUser && AuthModule.currentUser.healthCenter) {
                              const centerLower = AuthModule.currentUser.healthCenter.toLowerCase();
                              if (centerLower.includes('hiroshi')) defaultUnit = 'ubs_hiroshi';
                              else if (centerLower.includes('demetrio') || centerLower.includes('demétrio')) defaultUnit = 'ubs_demetrio';
                              else if (centerLower.includes('zoonoses')) defaultUnit = 'centro_zoonoses';
                              else if (centerLower.includes('municipal') || centerLower.includes('hmm')) defaultUnit = 'hmm';
                              else if (centerLower.includes('regional')) defaultUnit = 'regional';
                              else if (centerLower.includes('materno') || centerLower.includes('infantil') || centerLower.includes('hmi')) defaultUnit = 'hmi';
                              else if (centerLower.includes('zezinha')) defaultUnit = 'ubs_zezinha';
                              else if (centerLower.includes('laranjeiras')) defaultUnit = 'ubs_laranjeiras';
                              else if (centerLower.includes('pedro') || centerLower.includes('cavalcante')) defaultUnit = 'ubs_pedro_cavalcante';
                              else if (centerLower.includes('amadeu') || centerLower.includes('vivacqua')) defaultUnit = 'ubs_amadeu';
                              else if (centerLower.includes('morada')) defaultUnit = 'ubs_morada_nova';
                              else if (centerLower.includes('secretaria') || centerLower.includes('saúde') || centerLower.includes('saude')) defaultUnit = 'ubs_hiroshi';
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
            this.openProfile(fullPatient);
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
                item.style.marginBottom = '10px';
                item.style.padding = '15px';
                item.style.border = '1px solid #eee';
                item.style.borderRadius = '8px';
                item.style.display = 'flex';
                item.style.justifyContent = 'space-between';
                item.style.alignItems = 'center';
                item.style.backgroundColor = 'white';
                
                item.innerHTML = `
                    <div class="p-item-info">
                        <h4 style="color: var(--primary-color); margin: 0 0 5px 0;">${n.title}</h4>
                        <p style="margin: 0; font-size: 0.9rem; color: #555;"><i class="far fa-calendar-alt"></i> ${n.date}</p>
                    </div>
                    <button class="btn btn-outline btn-sm btn-view-notif" style="padding: 6px 12px; font-size: 0.85rem; cursor: pointer;">Ver mais</button>
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
                 <div id="patient-dropdown-${id}" style="display:none; position:absolute; top:100%; left:0; right:0; background:white; border:1px solid var(--border-color); border-radius:12px; box-shadow:0 10px 25px rgba(0,0,0,0.1); z-index:999; max-height:220px; overflow-y:auto;"></div>
               </div>
               <button type="button" id="patient-search-btn-${id}" class="btn" style="height: 48px; width: 48px; min-width: 48px; padding: 0; background: var(--primary); color: white; border: none; border-radius: 10px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s; box-shadow: var(--shadow-cta);"
                 onmouseenter="this.style.background='var(--primary-hover)'; this.style.transform='translateY(-1px)'" onmouseleave="this.style.background='var(--primary)'; this.style.transform='translateY(0)'">
                 <i class="fas fa-search" style="font-size: 1.1rem;"></i>
               </button>
            </div>
            <p style="font-size: 0.8rem; color: var(--text-gray); margin-top: 6px; margin-bottom: 0; line-height: 1.4;">Se o paciente nao for encontrado, preencha os dados abaixo — ele sera cadastrado automaticamente ao gravar.</p>
          </div>

          <!-- BLOCO 1: DADOS GERAIS -->
          <div class="sinan-section">
             <div class="sinan-section-title"><i class="fas fa-file-alt"></i> Dados Gerais (Campos 1-7)</div>
             <div class="sinan-grid-4">
                 <div class="form-group">
                     <label>1 - Tipo de Notificação</label>
                     <select id="tipo-notificacao-${id}">
                         <option value="1">1-Negativa</option>
                         <option value="2" selected>2-Individual</option>
                         <option value="3">3-Surto</option>
                         <option value="4">4-Inquerito Tracoma</option>
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
                 <div class="form-group" style="max-width:80px;">
                     <label>4 - UF</label>
                     <input type="text" id="uf-notificacao-${id}" value="PA" maxlength="2">
                 </div>
                 <div class="form-group span-2">
                     <label>5 - Município de Notificação</label>
                     <input type="text" id="mun-notificacao-${id}" value="MARABA">
                 </div>
                 <div class="form-group span-3">
                     <label>6 - Unidade de Saúde (ou Outra Fonte Notificadora)</label>
                     <select id="health-unit-${id}" required>
                          <option value="ubs_hiroshi">UBS Hiroshi Matsuda (CNES: 2301389)</option>
                          <option value="ubs_demetrio">UBS Demétrio Ribeiro (CNES: 2301621)</option>
                          <option value="centro_zoonoses">Centro de Zoonoses (CNES: 2301702)</option>
                          <option value="hmm">Hospital Municipal de Marabá - HMM (CNES: 2301850)</option>
                          <option value="regional">Hospital Regional do Sudeste do Pará (CNES: 5249449)</option>
                          <option value="hmi">Hospital Materno Infantil - HMI (CNES: 2301893)</option>
                          <option value="ubs_zezinha">UBS Enfermeira Zezinha (CNES: 2301907)</option>
                          <option value="ubs_laranjeiras">UBS Laranjeiras (CNES: 2301923)</option>
                          <option value="ubs_pedro_cavalcante">UBS Pedro Cavalcante (CNES: 2301931)</option>
                          <option value="ubs_amadeu">UBS Amadeu Vivacqua (CNES: 2301958)</option>
                          <option value="ubs_morada_nova">UBS Morada Nova (CNES: 2301966)</option>
                          <option value="outra">Outra / Rede Particular</option></select>
                 </div>
                 <div class="form-group">
                     <label>7 - Data dos Primeiros Sintomas *</label>
                     <input type="date" id="symptoms-date-${id}" required>
                 </div>
             </div>
          </div>

          <!-- BLOCO 2: NOTIFICACAO INDIVIDUAL -->
          <div class="sinan-section">
             <div class="sinan-section-title"><i class="fas fa-user"></i> Notificacao Individual (Campos 8-16)</div>
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
          <div class="sinan-section">
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

          <!-- BLOCO 5: DADOS CLINICOS E LABORATORIAIS -->
          <div class="sinan-section">
             <div class="sinan-section-title"><i class="fas fa-stethoscope"></i> Dados Clinicos e Laboratoriais</div>
             <div class="sinan-grid-4">
                 <div class="form-group span-2">
                     <label>01 - Data da Coleta da 1ª Amostra da Sorologia</label>
                     <input type="date" id="inv-date-${id}">
                 </div>
                 <div class="form-group span-2">
                     <label>02 - Data da Coleta da 1ª Amostra de Outra Amostra</label>
                     <input type="date" id="inv-date2-${id}">
                 </div>
                 <div class="form-group span-4">
                     <label>03 - Especificar Tipo de Exame</label>
                     <input type="text" id="lab-exame-type-${id}" placeholder="NS1, IgM, RT-PCR..." value="NS1 / Sorologia IgM / RT-PCR">
                 </div>
             </div>

             <label class="sinan-subsection mt-3">Sinais Clinicos</label>
             <div class="sinan-checkbox-grid">
                 <label><input type="checkbox" value="Febre"> Febre</label>
                 <label><input type="checkbox" value="Mialgia"> Mialgia</label>
                 <label><input type="checkbox" value="Cefaleia"> Cefaleia</label>
                 <label><input type="checkbox" value="Exantema"> Exantema</label>
                 <label><input type="checkbox" value="Vomito"> Vomito</label>
                 <label><input type="checkbox" value="Nauseas"> Nauseas</label>
                 <label><input type="checkbox" value="Dor nas costas"> Dor nas costas</label>
                 <label><input type="checkbox" value="Conjuntivite"> Conjuntivite</label>
                 <label><input type="checkbox" value="Artrite"> Artrite</label>
                 <label><input type="checkbox" value="Artralgia intensa"> Artralgia intensa</label>
                 <label><input type="checkbox" value="Petequias"> Petequias</label>
                 <label><input type="checkbox" value="Leucopenia"> Leucopenia</label>
                 <label><input type="checkbox" value="Dor retroorbital"> Dor retroorbital</label>
             </div>

             <label class="sinan-subsection mt-3">Doencas Pre-existentes</label>
             <div class="sinan-grid-4">
                 <div class="form-group"><label>Diabetes</label><select id="pre-diabetes-${id}"><option value="1">1-Sim</option><option value="2">2-Nao</option><option value="9" selected>9-Ignorado</option></select></div>
                 <div class="form-group"><label>Hepatopatias</label><select id="pre-hepatopatias-${id}"><option value="1">1-Sim</option><option value="2">2-Nao</option><option value="9" selected>9-Ignorado</option></select></div>
                 <div class="form-group"><label>Hipertensao</label><select id="pre-hipertensao-${id}"><option value="1">1-Sim</option><option value="2">2-Nao</option><option value="9" selected>9-Ignorado</option></select></div>
                 <div class="form-group"><label>D. Hematologicas</label><select id="pre-hematologicas-${id}"><option value="1">1-Sim</option><option value="2">2-Nao</option><option value="9" selected>9-Ignorado</option></select></div>
                 <div class="form-group"><label>Doenca Renal</label><select id="pre-renal-${id}"><option value="1">1-Sim</option><option value="2">2-Nao</option><option value="9" selected>9-Ignorado</option></select></div>
                 <div class="form-group"><label>D. Auto-imunes</label><select id="pre-autoimunes-${id}"><option value="1">1-Sim</option><option value="2">2-Nao</option><option value="9" selected>9-Ignorado</option></select></div>
             </div>

             <label class="sinan-subsection mt-3">Exames Laboratoriais</label>
             <div class="sinan-grid-4">
                 <div class="form-group span-2">
                     <label>Sorologia IgM Chikungunya</label>
                     <select id="lab-igm-chik-${id}"><option value="1">1-Positivo</option><option value="2">2-Negativo</option><option value="3">3-Inconclusivo</option><option value="4" selected>4-Nao realizado</option></select>
                 </div>
                 <div class="form-group span-2">
                     <label>Sorologia IgM Dengue</label>
                     <select id="lab-igm-dengue-${id}"><option value="1">1-Positivo</option><option value="2">2-Negativo</option><option value="3">3-Inconclusivo</option><option value="4" selected>4-Nao realizado</option></select>
                 </div>
                 <div class="form-group span-2">
                     <label>Exame NS1</label>
                     <select id="lab-ns1-${id}"><option value="1">1-Positivo</option><option value="2">2-Negativo</option><option value="3">3-Inconclusivo</option><option value="4" selected>4-Nao realizado</option></select>
                 </div>
                 <div class="form-group span-2">
                     <label>Isolamento / RT-PCR</label>
                     <select id="lab-rt-pcr-${id}"><option value="1">1-Positivo</option><option value="2">2-Negativo</option><option value="3">3-Inconclusivo</option><option value="4" selected>4-Nao realizado</option></select>
                 </div>
                 <div class="form-group span-4">
                     <label>Resultado Bacterioscopia</label>
                     <input type="text" id="lab-bacterioscopia-${id}" placeholder="Nao realizado / Negativo / Positivo">
                 </div>
             </div>
          </div>

          <!-- BLOCO 6: SINAIS DE ALARME E GRAVIDADE -->
          <div class="sinan-section">
             <div class="sinan-section-title"><i class="fas fa-exclamation-triangle"></i> Gravidade e Sinais de Alarme</div>
             <label class="sinan-subsection">Dengue com Sinais de Alarme</label>
             <div class="sinan-checkbox-grid">
                 <label><input type="checkbox" value="Hipotensao postural"> Hipotensao postural</label>
                 <label><input type="checkbox" value="Dor Abdominal intensa"> Dor Abdominal intensa</label>
                 <label><input type="checkbox" value="Hepatomegalia >= 2cm"> Hepatomegalia >= 2cm</label>
                 <label><input type="checkbox" value="Queda abrupta plaquetas"> Queda abrupta plaquetas</label>
                 <label><input type="checkbox" value="Letargia/irritabilidade"> Letargia/irritabilidade</label>
                 <label><input type="checkbox" value="Acumulo de liquidos"> Acumulo de liquidos</label>
                 <label><input type="checkbox" value="Vomitos persistentes"> Vomitos persistentes</label>
                 <label><input type="checkbox" value="Sangramento mucosa"> Sangramento mucosa</label>
                 <label><input type="checkbox" value="Aumento Hematocrito"> Aumento Hematocrito</label>
             </div>
             <label class="sinan-subsection mt-3">Dengue Grave | Extravasamento / Sangramento</label>
             <div class="sinan-checkbox-grid">
                 <label><input type="checkbox" value="Pulso debil / indetectavel"> Pulso debil / indetectavel</label>
                 <label><input type="checkbox" value="Taquicardia"> Taquicardia</label>
                 <label><input type="checkbox" value="Hematermese"> Hematermese</label>
                 <label><input type="checkbox" value="PA convergente <= 20"> PA convergente <= 20</label>
                 <label><input type="checkbox" value="Extremidades frias"> Extremidades frias</label>
                 <label><input type="checkbox" value="Melena"> Melena</label>
                 <label><input type="checkbox" value="Acumulo liquidos (resp)"> Acumulo liquidos (resp)</label>
                 <label><input type="checkbox" value="Hipotensao arterial"> Hipotensao arterial</label>
                 <label><input type="checkbox" value="Metrorragia / Sang. SNC"> Metrorragia / Sang. SNC</label>
             </div>
          </div>

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
            <div class="autocomplete-item" data-id="${p.id}" data-local="${p._local ? 'true' : 'false'}"
              style="padding:10px 16px;cursor:pointer;display:flex;align-items:center;gap:10px;border-bottom:1px solid #f0f0f0;">
              <img src="${photo}" style="width:34px;height:34px;border-radius:50%;object-fit:cover;" alt="">
              <div>
                <div style="font-weight:600;font-size:0.9rem;color:#1a1a2e;">${p.name}</div>
                <div style="font-size:0.77rem;color:#888;">CNS: ${p.cns} ${ageText ? '&bull; ' + ageText : ''} &bull; ${sexText} ${p._local ? '<span style="color:#00796b; font-weight:bold;">(Local)</span>' : ''}</div>
              </div>
            </div>`;
        }).join('');
      }

      // Add "register new patient" button in both cases
      html += `
        <div class="autocomplete-new-patient"
          style="padding:12px 16px;cursor:pointer;display:flex;align-items:center;gap:10px;color:#00796b;font-weight:700;font-size:0.9rem;background:#e8f5e9;border-top:1px solid #f0f0f0;">
          <i class="fas fa-user-plus" style="font-size:1.1rem;"></i>
          <div>
            <div>+ Cadastrar como novo paciente com este nome</div>
            <div style="font-size:0.75rem;font-weight:400;color:#555;">Preencha os dados abaixo e clique em Gravar</div>
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

    const payload = {
      patientId: patientId || null,
      disease: disease,
      healthUnit: healthUnitEl ? healthUnitEl.value : 'Não informada',
      symptomsDate: symptomsDateEl ? symptomsDateEl.value : '',
      symptoms: checkedSymptoms,
      clinicalSigns: {
        diabetes:          getVal(`pre-diabetes-${disease}`) || '9',
        hepatopatias:      getVal(`pre-hepatopatias-${disease}`) || '9',
        hipertensao:       getVal(`pre-hipertensao-${disease}`) || '9',
        hematologicas:     getVal(`pre-hematologicas-${disease}`) || '9',
        renal:             getVal(`pre-renal-${disease}`) || '9',
        autoimunes:        getVal(`pre-autoimunes-${disease}`) || '9',
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
      },
      labResults: {
        igmChikungunya:    getVal(`lab-igm-chik-${disease}`) || '4',
        igmDengue:         getVal(`lab-igm-dengue-${disease}`) || '4',
        ns1:               getVal(`lab-ns1-${disease}`) || '4',
        rtPcr:             getVal(`lab-rt-pcr-${disease}`) || '4',
        investigationDate: getVal(`inv-date-${disease}`) || '',
        investigationDate2:getVal(`inv-date2-${disease}`) || '',
        exameType:         getVal(`lab-exame-type-${disease}`) || 'NS1 / Sorologia IgM / RT-PCR',
        bacterioscopia:    getVal(`lab-bacterioscopia-${disease}`) || '',
      },
      surtoData: {
        tipoNotificacao:getVal(`tipo-notificacao-${disease}`) || '2',
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
        'acidente-ofidico': 'T63.0'
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

    let cleanUnit = String(data.healthUnit || '').toLowerCase().trim();
    let cnesCode = '-------';
    let unitName = 'OUTRA UNIDADE';

    if (cleanUnit.includes('hiroshi') || cleanUnit.includes('2301389') || cleanUnit === 'ubs_hiroshi') {
        cnesCode = '2301389';
        unitName = 'UBS HIROSHI MATSUDA';
    } else if (cleanUnit.includes('demetrio') || cleanUnit.includes('demétrio') || cleanUnit === 'ubs_demetrio') {
        cnesCode = '2301621';
        unitName = 'UBS DEMETRIO RIBEIRO';
    } else if (cleanUnit.includes('zoonoses') || cleanUnit === 'centro_zoonoses') {
        cnesCode = '2301702';
        unitName = 'CENTRO DE ZOONOSES';
    } else if (cleanUnit.includes('municipal') || cleanUnit.includes('hmm') || cleanUnit === 'hmm') {
        cnesCode = '2301850';
        unitName = 'HOSPITAL MUNICIPAL DE MARABA';
    } else if (cleanUnit.includes('regional') || cleanUnit === 'regional') {
        cnesCode = '5249449';
        unitName = 'HOSPITAL REGIONAL DO SUDESTE DO PARA';
    } else if (cleanUnit.includes('materno') || cleanUnit.includes('infantil') || cleanUnit.includes('hmi') || cleanUnit === 'hmi') {
        cnesCode = '2301893';
        unitName = 'HOSPITAL MATERNO INFANTIL';
    } else if (cleanUnit.includes('zezinha') || cleanUnit === 'ubs_zezinha') {
        cnesCode = '2301907';
        unitName = 'UBS ENFERMEIRA ZEZINHA';
    } else if (cleanUnit.includes('laranjeiras') || cleanUnit === 'ubs_laranjeiras') {
        cnesCode = '2301923';
        unitName = 'UBS LARANJEIRAS';
    } else if (cleanUnit.includes('pedro') || cleanUnit.includes('cavalcante') || cleanUnit === 'ubs_pedro_cavalcante') {
        cnesCode = '2301931';
        unitName = 'UBS PEDRO CAVALCANTE';
    } else if (cleanUnit.includes('amadeu') || cleanUnit.includes('vivacqua') || cleanUnit === 'ubs_amadeu') {
        cnesCode = '2301958';
        unitName = 'UBS AMADEU VIVACQUA';
    } else if (cleanUnit.includes('morada') || cleanUnit === 'ubs_morada_nova') {
        cnesCode = '2301966';
        unitName = 'UBS MORADA NOVA';
    } else {
        unitName = data.healthUnitText || data.healthUnit || 'OUTRA UNIDADE';
    }

    // Tipo notificacao
    const tipoNotif = data.tipoNotificacao || '2';

    // Gestante code based on sex
    const sexCode = data.patientSex === 'Masculino' || data.patientSex === 'M' ? 'M' : (data.patientSex === 'Feminino' || data.patientSex === 'F' ? 'F' : 'I');
    const pregnantCode = (sexCode === 'M') ? '6' : (cs.pregnant || '9');

    // Race code mapping
    let raceCode = '9';
    if (data.patientRace) {
        const rStr = String(data.patientRace).toLowerCase().trim();
        if (rStr.includes('branca') || rStr === 'br' || rStr === '1') raceCode = '1';
        else if (rStr.includes('preta') || rStr === 'pr' || rStr.includes('negra') || rStr === '2') raceCode = '2';
        else if (rStr.includes('amarela') || rStr === 'am' || rStr === '3') raceCode = '3';
        else if (rStr.includes('parda') || rStr === 'pa' || rStr === '4') raceCode = '4';
        else if (rStr.includes('indigena') || rStr.includes('indígena') || rStr === 'in' || rStr === '5') raceCode = '5';
    }

    // Schooling code mapping
    const schoolMap = {
      'Analfabeto': '0',
      'Ensino Fundamental 1a a 4a serie Incompleta': '1', '1a a 4a serie incompleta do EF': '1', '1ª a 4ª série incompleta do EF': '1',
      'Ensino Fundamental 4a serie Completa': '2', '4a serie completa do EF': '2', '4ª série completa do EF': '2',
      'Ensino Fundamental 5a a 8a serie Incompleta': '3', '5a a 8a serie incompleta do EF': '3', '5ª à 8ª série incompleta do EF': '3',
      'Ensino Fundamental Completo': '4',
      'Ensino Medio Incompleto': '5', 'Ensino Médio Incompleto': '5',
      'Ensino Medio Completo': '6', 'Ensino Médio Completo': '6',
      'Ensino Superior Incompleto': '7', 'Educação superior incompleta': '7',
      'Ensino Superior Completo': '8', 'Educação superior completa': '8',
      'Nao informada': '9', 'Não informada': '9', 'Ignorado': '9',
      'Nao se aplica': '10', 'Não se aplica': '10'
    };
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

    // Surto local double digit code
    const surtoLocalCode = data.surtoLocal ? String(data.surtoLocal).padStart(2, '0') : '';

    // Zone code mapping
    const zoneCode = { 'Urbana':'1', 'Rural':'2', 'Periurbana':'3', 'Ignorado':'9', '1':'1', '2':'2', '3':'3', '9':'9' }[data.patientZone] || '9';

    const html = `<!DOCTYPE html>
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
  .single-box { display:inline-flex; align-items:center; justify-content:center; width:15px; height:15px; border:1.5px solid #000; font-size:10px; font-weight:bold; background:#fff; flex-shrink:0; line-height:1; font-family:monospace; }
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

<!-- PAGINA 1: FICHA DE NOTIFICACAO -->
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
      <p class="sn-subtitle">FICHA DE NOTIFICA&Ccedil;&Atilde;O</p>
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

<!-- PAGINA 2: DADOS COMPLEMENTARES -->
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
        <div class="sn-cell" style="flex:1.3;">
          <div class="ct"><span class="cn">01</span> DATA DA COLETA DA 1A AMOSTRA DA SOROLOGIA</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(lr.investigationDate||''), 8)}</div>
        </div>
        <div class="sn-cell" style="flex:1.3;">
          <div class="ct"><span class="cn">02</span> DATA DA COLETA DA 1A AMOSTRA DE OUTRA AMOSTRA</div>
          <div class="cv" style="padding-top:3px;">${splitDigits(formatDateDigits(lr.investigationDate2||''), 8)}</div>
        </div>
        <div class="sn-cell" style="flex:1.4;">
          <div class="ct"><span class="cn">03</span> ESPECIFICAR TIPO DE EXAME</div>
          <div class="cv" style="font-size:8.5px;">${lr.exameType || 'NS1 / SOROLOGIA IgM / RT-PCR'}</div>
        </div>
      </div>
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
        <div class="sn-cell" style="position:relative; flex:2.0;">
          <div class="ct"><span class="cn">09</span> FOI REALIZADO LIQUOR?</div>
          <div style="font-size:7px; line-height:1.1; margin-top:2px;">
            1 - Sim &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 - N&atilde;o &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9 - Ignorado
          </div>
          <div class="single-box" style="position:absolute; right:8px; top:4px;">
            ${cs.liquor || '9'}
          </div>
        </div>
        <div class="sn-cell" style="flex:2.0;">
          <div class="ct"><span class="cn">10</span> RESULTADO DA BACTERIOSCOPIA</div>
          <div class="cv" style="font-size:8.5px;">${lr.bacterioscopia || 'NAO REALIZADO / NEGATIVO'}</div>
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
</body>
</html>`;

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

    let html = `
        <div style="margin-bottom: 20px;">
            <h4 style="color: var(--primary-color); margin: 0 0 10px 0;">${historyItem.title}</h4>
            <p style="margin: 0 0 5px 0; color: #555;"><i class="far fa-calendar-alt"></i> <strong>Data da Notificação:</strong> ${historyItem.date}</p>
            <p style="margin: 0 0 5px 0; color: #555;"><strong>Doença Suspeita:</strong> ${diseaseName}</p>
            <p style="margin: 0 0 5px 0; color: #555;"><strong>Unidade de Saúde:</strong> ${data.healthUnit || 'Não informado'}</p>
            <p style="margin: 0 0 5px 0; color: #555;"><strong>Início dos Sintomas:</strong> ${data.symptomsDate || 'Não informado'}</p>
            <p style="margin: 0 0 5px 0; color: #555;"><strong>Notificador:</strong> ${data.notificatorName || 'Não informado'}</p>
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

    // Pré-existentes
    setVal(`pre-diabetes-${data.disease}`, data.clinicalSigns?.diabetes);
    setVal(`pre-hepatopatias-${data.disease}`, data.clinicalSigns?.hepatopatias);
    setVal(`pre-hipertensao-${data.disease}`, data.clinicalSigns?.hipertensao);
    setVal(`pre-hematologicas-${data.disease}`, data.clinicalSigns?.hematologicas);
    setVal(`pre-renal-${data.disease}`, data.clinicalSigns?.renal);
    setVal(`pre-autoimunes-${data.disease}`, data.clinicalSigns?.autoimunes);

    // Laboratório
    setVal(`inv-date-${data.disease}`, data.labResults?.investigationDate);
    setVal(`inv-date2-${data.disease}`, data.labResults?.investigationDate2);
    setVal(`lab-exame-type-${data.disease}`, data.labResults?.exameType);
    setVal(`lab-igm-chik-${data.disease}`, data.labResults?.igmChikungunya);
    setVal(`lab-igm-dengue-${data.disease}`, data.labResults?.igmDengue);
    setVal(`lab-ns1-${data.disease}`, data.labResults?.ns1);
    setVal(`lab-rt-pcr-${data.disease}`, data.labResults?.rtPcr);
    setVal(`lab-bacterioscopia-${data.disease}`, data.labResults?.bacterioscopia);

    // Dados complementares
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

    // Dados de residência extras
    setVal(`patient-uf-res-${data.disease}`, data.patientInfo?.uf || (patient && patient.uf) || 'PA');
    setVal(`patient-distrito-${data.disease}`, data.patientInfo?.district || '');
    setVal(`patient-zone-${data.disease}`, data.patientInfo?.zone || (patient && patient.zone) || 'Urbana');
    setVal(`patient-country-${data.disease}`, data.patientInfo?.country || '');

    // Observações
    setVal(`patient-obs-${data.disease}`, data.observations);

    // Marcar os sintomas nos checkboxes
    const symptomsArray = data.mainSymptoms ? data.mainSymptoms.split(',').map(s => s.trim()) : [];
    const checkboxes = document.querySelectorAll(`#form-${data.disease} .sinan-checkbox-grid input[type="checkbox"]`);
    checkboxes.forEach(cb => {
        const labelText = cb.parentNode.textContent.trim();
        cb.checked = symptomsArray.includes(labelText);
    });

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
                        tr.innerHTML = `
                            <td><strong>${n.patient_name || 'Paciente'}</strong></td>
                            <td>${diseaseLabel}</td>
                            <td>${dateStr}</td>
                            <td>${n.patient_neighborhood || 'Centro'}</td>
                            <td>${statusBadge}</td>
                        `;
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
