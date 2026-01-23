// Módulos do aplicativo EpiConecta

// Dados de exemplo para o aplicativo
const sampleData = {
  user: {
    id: 'user-001',
    name: 'João Silva',
    role: 'Enfermeiro',
    healthCenter: 'UBS Jardim das Flores',
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

    // Use grid layout
    container.className = 'documents-grid';

    container.innerHTML = filteredDocs.map(doc => `
      <div class="document-card" data-id="${doc.id}">
        <div class="doc-icon-wrapper ${doc.format.toLowerCase()}">
          <i class="${this.getDocumentIcon(doc.format)}"></i>
        </div>
        <button class="doc-download-btn" data-id="${doc.id}" title="Baixar">
             <i class="fas fa-download"></i>
        </button>
        <div class="doc-info">
          <h4 class="doc-title" title="${doc.title}">${doc.title}</h4>
          <div class="doc-meta">
            <span>${doc.format.toUpperCase()}</span>
            <span>•</span>
            <span>${doc.size}</span>
          </div>
          <div class="doc-tags">
            ${doc.tags.slice(0, 2).map(tag => `<span class="doc-tag">${tag}</span>`).join('')}
            ${doc.tags.length > 2 ? `<span class="doc-tag">+${doc.tags.length - 2}</span>` : ''}
          </div>
        </div>
      </div>
    `).join('');

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
    'Gerais': [
      { id: 'febre', label: 'Febre Alta (>38°C)' },
      { id: 'febre_baixa', label: 'Febre Baixa' },
      { id: 'fadiga', label: 'Cansaço/Fadiga Extrema' },
      { id: 'mal_estar', label: 'Mal-estar Geral' },
      { id: 'perda_apetite', label: 'Perda de Apetite' },
      { id: 'calafrios', label: 'Calafrios' },
      { id: 'perda_peso', label: 'Perda de Peso' },
      { id: 'sudorese_noturna', label: 'Sudorese Noturna' }
    ],
    'Dores': [
      { id: 'dor_cabeca', label: 'Dor de Cabeça' },
      { id: 'dor_atras_olhos', label: 'Dor atrás dos Olhos' },
      { id: 'dor_corpo', label: 'Dor no Corpo' },
      { id: 'dor_articulacoes', label: 'Dor nas Articulações' },
      { id: 'dor_muscular', label: 'Dor Muscular (Mialgia)' },
      { id: 'dor_garganta', label: 'Dor de Garganta' },
      { id: 'dor_abdominal', label: 'Dor Abdominal' },
      { id: 'dor_peito', label: 'Dor no Peito' }
    ],
    'Respiratório': [
      { id: 'tosse_seca', label: 'Tosse Seca' },
      { id: 'tosse_produtiva', label: 'Tosse com Catarro' },
      { id: 'falta_ar', label: 'Falta de Ar / Dificuldade para Respirar' },
      { id: 'coriza', label: 'Coriza / Nariz Escorrendo' },
      { id: 'congestao', label: 'Nariz Entupido' },
      { id: 'espirros', label: 'Espirros Frequentes' },
      { id: 'dificuldade_respirar', label: 'Dificuldade para Respirar' }
    ],
    'Gastrointestinal': [
      { id: 'nauseas', label: 'Náuseas / Enjoo' },
      { id: 'vomitos', label: 'Vômitos' },
      { id: 'diarreia', label: 'Diarreia' },
      { id: 'dor_abdominal', label: 'Dor Abdominal' },
      { id: 'sangue_fezes', label: 'Sangue nas Fezes' },
      { id: 'hepatomegalia', label: 'Aumento do Fígado' },
      { id: 'esplenomegalia', label: 'Aumento do Baço' }
    ],
    'Pele e Lesões': [
      { id: 'manchas', label: 'Manchas Vermelhas na Pele' },
      { id: 'coceira', label: 'Coceira' },
      { id: 'sangramento', label: 'Sangramento (Gengiva/Nariz)' },
      { id: 'olhos_vermelhos', label: 'Olhos Vermelhos (Conjuntivite)' },
      { id: 'lesoes_cutaneas', label: 'Lesões Cutâneas' },
      { id: 'ulceras', label: 'Úlceras' },
      { id: 'nodulos', label: 'Nódulos' },
      { id: 'edema', label: 'Edema (Inchaço)' },
      { id: 'perda_sensibilidade', label: 'Perda de Sensibilidade' },
      { id: 'erupcoes', label: 'Erupções Cutâneas' }
    ],
    'Neurológicos': [
      { id: 'perda_olfato', label: 'Perda de Olfato/Paladar' },
      { id: 'convulsoes', label: 'Convulsões' },
      { id: 'confusao_mental', label: 'Confusão Mental' },
      { id: 'sonolencia', label: 'Sonolência Excessiva' },
      { id: 'agitacao', label: 'Agitação' },
      { id: 'hidrofobia', label: 'Hidrofobia (Medo de Água)' },
      { id: 'fotofobia', label: 'Fotofobia (Sensibilidade à Luz)' }
    ],
    'Outros': [
      { id: 'ictericia', label: 'Icterícia (Pele Amarelada)' },
      { id: 'anemia', label: 'Anemia' },
      { id: 'linfadenopatia', label: 'Aumento de Gânglios' },
      { id: 'cegueira', label: 'Problemas de Visão/Cegueira' },
      { id: 'picada_inseto', label: 'Picada de Inseto Visível' },
      { id: 'mordida_animal', label: 'Mordida de Animal' }
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
                  diseaseIds.forEach(id => {
                    const nameInput = document.getElementById(`patient-name-${id}`);
                    const ageInput = document.getElementById(`patient-age-${id}`);

                    if (nameInput) nameInput.value = this.currentPatient.name;
                    if (ageInput) ageInput.value = this.currentPatient.age;
                  });
                  App.showToast('Dados do paciente carregados com sucesso.', 'success');
                }
              }, 300);
            }
          }
        }
      });
    });
  },

  handleSearch(term) {
    if (!term) return;

    // Clean the search term - remove common formatting characters
    const cleanTerm = term.toLowerCase().replace(/[.\-\s/]/g, '');

    const results = this.mockDB.filter(p => {
      // Clean patient data for comparison
      const cleanCpf = p.cpf ? p.cpf.replace(/[.\-]/g, '') : '';
      const cleanCns = p.cns ? p.cns.replace(/\s/g, '') : '';
      const cleanBirthDate = p.birthDate ? p.birthDate.replace(/\//g, '') : '';
      const name = p.name ? p.name.toLowerCase() : '';

      // Search by name (partial match)
      if (name.includes(term.toLowerCase())) return true;

      // Search by CPF (with or without formatting)
      if (cleanCpf.includes(cleanTerm)) return true;

      // Search by CNS (with or without formatting)
      if (cleanCns.includes(cleanTerm)) return true;

      // Search by birth date (with or without formatting)
      if (cleanBirthDate.includes(cleanTerm)) return true;

      return false;
    });

    this.renderResults(results);
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
                    <small>Tente buscar por <b>"Maria"</b>, <b>"João"</b> ou <b>"05395045210"</b></small>
                </div>`;
      return;
    }

    results.forEach(p => {
      const card = document.createElement('div');
      card.className = 'patient-card-item';
      card.innerHTML = `
                <div class="p-item-photo">
                    <img src="${p.photo}" alt="${p.name}">
                </div>
                <div class="p-item-info">
                    <h4>${p.name}</h4>
                    <p>CNS: ${p.cns}</p>
                    <p>${p.age} anos • ${p.sex}</p>
                </div>
            `;
      card.onclick = () => this.openProfile(p);
      container.appendChild(card);
    });
  },

  renderRecents() {
    const container = document.getElementById('recent-patients-list');
    // Mostrar todos os pacientes do banco
    const recent = this.mockDB;

    container.innerHTML = '';
    recent.forEach(p => {
      const card = document.createElement('div');
      card.className = 'patient-card-item';
      card.innerHTML = `
                <div class="p-item-photo">
                    <img src="${p.photo}" alt="${p.name}">
                </div>
                <div class="p-item-info">
                    <h4>${p.name}</h4>
                    <p>${p.cns}</p>
                </div>
            `;
      card.onclick = () => this.openProfile(p);
      container.appendChild(card);
    });
  },

  openProfile(patient) {
    this.currentPatient = patient;
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
    document.getElementById('p-photo').src = patient.photo;
    document.getElementById('p-name').innerText = patient.name;
    document.getElementById('p-age').innerText = `${patient.age} anos`;
    document.getElementById('p-sex').innerText = patient.sex;
    document.getElementById('p-blood').innerText = patient.blood;
    document.getElementById('p-cns').innerText = patient.cns;

    // Populate Badges
    const badgesContainer = document.getElementById('p-badges');
    badgesContainer.innerHTML = '';
    patient.badges.forEach(b => {
      const span = document.createElement('span');
      span.className = `p-badge ${b.type}`;
      span.innerText = b.text;
      badgesContainer.appendChild(span);
    });

    // Summary Tab
    const allergiesList = document.getElementById('p-allergies-list');
    allergiesList.innerHTML = '';
    if (patient.allergies.length > 0) {
      patient.allergies.forEach(a => {
        const li = document.createElement('li');
        li.innerText = a;
        allergiesList.appendChild(li);
      });
      document.getElementById('p-allergies-box').style.display = 'block';
    } else {
      document.getElementById('p-allergies-box').style.display = 'none';
    }

    // Vitals
    document.getElementById('v-bp').innerText = patient.vitals.bp;
    document.getElementById('v-weight').innerText = patient.vitals.weight;

    // History Tab
    const timeline = document.getElementById('p-timeline');
    timeline.innerHTML = '';
    patient.history.forEach(h => {
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
  },

  setupEventListeners() {
    const enableBtn = document.getElementById('enable-location-btn');
    const selectDisease = document.getElementById('disease-select');

    // Automatically load Marabá on start
    setTimeout(() => {
      this.loadMapAt(this.cities['maraba'].coords[0], this.cities['maraba'].coords[1], 'maraba');
    }, 500);


    if (enableBtn) {
      enableBtn.onclick = () => this.requestLocation();
    }

    if (selectDisease) {
      selectDisease.addEventListener('change', (e) => {
        this.currentDisease = e.target.value;
        const center = this.map ? this.map.getCenter() : { lat: this.cities['maraba'].coords[0], lng: this.cities['maraba'].coords[1] };
        if (this.map) {
          this.generateCaseMarkers(center.lat, center.lng, 'maraba');
        }
      });
    }
  },

  requestLocation() {
    const overlay = document.getElementById('map-permission-overlay');
    const btn = document.getElementById('enable-location-btn');

    if (btn) btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Localizando...';

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.userLocation = [position.coords.latitude, position.coords.longitude];
          // Pass 'gps' to trigger dynamic generation around user
          this.loadMapAt(this.userLocation[0], this.userLocation[1], 'gps');
          if (overlay) overlay.style.display = 'none';
          if (btn) btn.innerHTML = 'Ativar Localização';
        },
        (error) => {
          console.error("Erro GPS:", error);
          alert("Não foi possível obter sua localização. Mostrando São Paulo por padrão.");
          this.loadMapAt(this.cities['saopaulo'].coords[0], this.cities['saopaulo'].coords[1], 'saopaulo');
          if (overlay) overlay.style.display = 'none';
          if (btn) btn.innerHTML = 'Ativar Localização';
        }
      );
    } else {
      alert("Seu navegador não suporta Geolocalização.");
      this.loadMapAt(this.cities['maraba'].coords[0], this.cities['maraba'].coords[1], 'maraba');
      if (overlay) overlay.style.display = 'none';
    }
  },

  loadMapAt(lat, lng, cityKey = 'maraba') {
    if (this.map) {
      this.map.flyTo([lat, lng], 12);
      this.generateCaseMarkers(lat, lng, cityKey);
      return;
    }

    setTimeout(() => {
      this.map = L.map('epidemiological-map', {
        zoomControl: false
      }).setView([lat, lng], 12);

      L.control.zoom({ position: 'topright' }).addTo(this.map);

      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap &copy; CARTO',
        subdomains: 'abcd',
        maxZoom: 19
      }).addTo(this.map);

      this.layerGroup = L.layerGroup().addTo(this.map);

      this.generateBubbleData(lat, lng, cityKey);
      this.addLegend();
    }, 100);
  },

  generateBubbleData(lat, lng, cityKey) {
    if (!this.layerGroup) return;
    this.layerGroup.clearLayers();

    let neighborhoods;

    // 1. Get Neighborhoods
    if (this.neighborhoodsData[cityKey]) {
      // Use predefined real data
      neighborhoods = this.neighborhoodsData[cityKey];
    } else {
      // Dynamic Generation for GPS/Unknown locations
      // Generate points relative to the provided lat/lng center
      neighborhoods = [
        { name: 'Centro Local', lat: lat, lng: lng },
        { name: 'Região Norte', lat: lat + 0.02, lng: lng },
        { name: 'Região Sul', lat: lat - 0.02, lng: lng },
        { name: 'Região Leste', lat: lat, lng: lng + 0.02 },
        { name: 'Região Oeste', lat: lat, lng: lng - 0.02 },
        { name: 'Área Industrial', lat: lat + 0.015, lng: lng + 0.015 },
        { name: 'Área Residencial', lat: lat - 0.015, lng: lng - 0.015 }
      ];
    }

    neighborhoods.forEach(hood => {
      // Number of sub-bubbles to generate per neighborhood to create "heat"
      const subBubbles = 3;

      for (let i = 0; i < subBubbles; i++) {
        // Random offset within SAFE radius (avoiding rivers)
        // Use logic: random angle, random distance < hood.radius
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random() * (hood.radius || 0.005);
        const pLat = hood.lat + (Math.sin(angle) * dist);
        const pLng = hood.lng + (Math.cos(angle) * dist);

        // Generate intensity
        // Realistic numbers for Marabá context
        let intensity = Math.floor(Math.random() * 80) + 10;

        // Disease Specific Adjustments (Using only allowed diseases)
        // Dengue/Chikungunya/Zika -> VETOR (High in urban areas)
        if (['dengue', 'chikungunya', 'zika'].includes(this.currentDisease)) {
          intensity *= 1.5;
        }
        // Leishmaniose -> Usually more peripheral or near forests, but we simplify
        if (this.currentDisease.includes('leishmaniose')) {
          intensity *= 1.2;
        }
        // Geohelmintíases (Verminoses)
        if (['ascaridiase', 'esquistossomose'].includes(this.currentDisease)) {
          intensity *= 0.8;
        }

        intensity = Math.floor(intensity);
        if (intensity < 10) intensity = 10;

        let color = this.colors.low;
        if (intensity > 40) color = this.colors.medium;
        if (intensity > 80) color = this.colors.high;
        if (intensity > 120) color = this.colors.critical;

        // USE L.circle (METERS) instead of L.circleMarker (PIXELS)
        // This ensures bubbles shrink when zooming out
        // Radius reduced to 150m for tighter packing
        const circle = L.circle([pLat, pLng], {
          color: 'transparent',
          fillColor: color,
          fillOpacity: 0.6,
          radius: 150 // Strict small radius to avoid river bleed
        });

        // Simplified popup
        const disLabel = this.currentDisease.charAt(0).toUpperCase() + this.currentDisease.slice(1);
        circle.bindPopup(`<b>${hood.name}</b><br>${disLabel}: Foco Detectado<br>Intensidade: ${intensity}`);

        this.layerGroup.addLayer(circle);
      }
    });

    // 6. Add Health Centers Markers
    this.addHealthCenters();
  },

  generateCaseMarkers(lat, lng, cityKey) {
    if (!this.layerGroup) return;
    this.layerGroup.clearLayers();

    const listContainer = document.getElementById('active-cases-list');
    if (listContainer) listContainer.innerHTML = '';

    let neighborhoods;
    if (this.neighborhoodsData[cityKey]) {
      neighborhoods = this.neighborhoodsData[cityKey];
    } else {
      neighborhoods = [{ name: 'Centro', lat: lat, lng: lng, radius: 0.005 }];
    }

    // Mock Names
    const names = ['Maria Silva', 'João Souza', 'Ana Oliveira', 'Pedro Santos', 'Lucas Pereira', 'Carla Lima', 'Fernanda Costa', 'Marcos Alves', 'Juliana Rocha', 'Gabriel Dias', 'Patricia Gomes', 'Rafael Martins', 'Beatriz Araujo', 'Thiago Lopes', 'Vanessa Cardoso'];

    // Generate ~15 Cases
    const numCases = 15;

    for (let i = 0; i < numCases; i++) {
      const hood = neighborhoods[Math.floor(Math.random() * neighborhoods.length)];

      // Random Pos within radius
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * (hood.radius || 0.005) * 0.8; // Safe margin
      const pLat = hood.lat + (Math.sin(angle) * dist);
      const pLng = hood.lng + (Math.cos(angle) * dist);

      const patientName = names[i % names.length];
      const status = Math.random() > 0.3 ? 'Confirmado' : 'Em Análise';

      // Create Marker
      const marker = L.marker([pLat, pLng], {
        title: patientName
      });

      const disLabel = this.currentDisease.charAt(0).toUpperCase() + this.currentDisease.slice(1);

      const popupContent = `
            <div style="text-align:center;">
                <b>${patientName}</b><br>
                <small>${hood.name}</small><br>
                <span style="color: ${status === 'Confirmado' ? '#F44336' : '#FF9800'}; font-weight:bold;">
                    ${disLabel} - ${status}
                </span>
            </div>
        `;

      marker.bindPopup(popupContent);
      this.layerGroup.addLayer(marker);

      // Add to List UI
      if (listContainer) {
        const item = document.createElement('div');
        item.className = 'case-item-row';
        item.style.cssText = 'display: flex; justify-content: space-between; align-items: center; padding: 12px; background: white; margin-bottom: 8px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); cursor: pointer; transition: transform 0.2s;';
        item.innerHTML = `
                <div style="display:flex; flex-direction:column;">
                    <span style="font-weight: 600; color: #333;">${patientName}</span>
                    <span style="font-size: 0.85rem; color: #666;"><i class="fas fa-map-marker-alt" style="font-size:10px;"></i> ${hood.name}</span>
                </div>
                <div style="text-align:right;">
                     <div style="font-weight:bold; color: var(--primary-color); font-size: 0.9rem;">${disLabel}</div>
                     <span style="font-size: 0.8rem; padding: 4px 8px; border-radius: 12px; background: ${status === 'Confirmado' ? '#ffebee' : '#fff3e0'}; color: ${status === 'Confirmado' ? '#c62828' : '#ef6c00'};">
                        ${status}
                     </span>
                </div>
            `;

        item.onclick = () => {
          this.map.flyTo([pLat, pLng], 15);
          marker.openPopup();
        };
        item.onmouseenter = () => item.style.transform = 'translateY(-2px)';
        item.onmouseleave = () => item.style.transform = 'translateY(0)';

        listContainer.appendChild(item);
      }
    }

    // 6. Add Health Centers Markers
    this.addHealthCenters();
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
    // Transmitidas por vetores
    'dengue': { name: 'Dengue', icon: 'fa-mosquito', category: 'vetor' },
    'chikungunya': { name: 'Chikungunya', icon: 'fa-mosquito', category: 'vetor' },
    'zika': { name: 'Zika', icon: 'fa-mosquito', category: 'vetor' },
    'leishmaniose-tegumentar': { name: 'Leishmaniose Tegumentar', icon: 'fa-bug', category: 'vetor' },
    'leishmaniose-visceral': { name: 'Leishmaniose Visceral', icon: 'fa-bug', category: 'vetor' },
    'chagas': { name: 'Doença de Chagas', icon: 'fa-home', category: 'vetor' },

    // Helmintíases e parasitoses
    'esquistossomose': { name: 'Esquistossomose', icon: 'fa-eye', category: 'helmintíase' },
    'ascaridiase': { name: 'Ascaridíase', icon: 'fa-bug', category: 'helmintíase' },
    'ancilostomiase': { name: 'Ancilostomíase', icon: 'fa-bug', category: 'helmintíase' },
    'tricuriase': { name: 'Tricuríase', icon: 'fa-bug', category: 'helmintíase' },
    'estrongiloidiase': { name: 'Estrongiloidíase', icon: 'fa-bug', category: 'helmintíase' },
    'teniase': { name: 'Teníase', icon: 'fa-bug', category: 'helmintíase' },
    'cisticercose': { name: 'Cisticercose', icon: 'fa-bug', category: 'helmintíase' },

    // Infecções bacterianas
    'hanseniase': { name: 'Hanseníase', icon: 'fa-user-injured', category: 'bacteriana' },
    'tracoma': { name: 'Tracoma', icon: 'fa-eye', category: 'bacteriana' },
    'leptospirose': { name: 'Leptospirose', icon: 'fa-virus', category: 'bacteriana' },

    // Outras
    'raiva': { name: 'Raiva', icon: 'fa-paw', category: 'outra' },
    'micetoma': { name: 'Micetoma', icon: 'fa-hand-paper', category: 'outra' },
    'escabiose': { name: 'Escabiose', icon: 'fa-bug', category: 'outra' },
    'acidente-ofidico': { name: 'Acidente Ofídico', icon: 'fa-paw', category: 'outra' }
  },

  init() {
    this.renderDiseaseSelector();
    this.setupDiseaseTabs();
    this.setupDropdown();
    this.setupForms();
    this.generateAllForms();
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
    if (!formCard) return;

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
        <form id="notification-form-${id}" class="notification-form">
          <div class="form-group">
            <label for="patient-name-${id}">
              <i class="fas fa-user"></i>
              Nome do paciente:
            </label>
            <input type="text" id="patient-name-${id}" placeholder="Digite o nome" required>
          </div>
          <div class="form-group">
            <label for="patient-age-${id}">
              <i class="fas fa-birthday-cake"></i>
              Idade:
            </label>
            <input type="number" id="patient-age-${id}" placeholder="Digite a idade" min="0" max="150" required>
          </div>
          <div class="form-group">
            <label for="patient-location-${id}">
              <i class="fas fa-map-marker-alt"></i>
              Bairro / Localidade:
            </label>
            <input type="text" id="patient-location-${id}" placeholder="Informe o bairro em Marabá" required>
          </div>
          <div class="form-group">
            <label for="symptoms-date-${id}">
              <i class="fas fa-calendar"></i>
              Data dos sintomas:
            </label>
            <div class="date-input-wrapper">
              <input type="date" id="symptoms-date-${id}" required>
              <button type="button" class="date-picker-btn" onclick="document.getElementById('symptoms-date-${id}').showPicker()">
                <i class="fas fa-calendar-alt"></i>
              </button>
            </div>
          </div>
          <div class="form-group full-width">
            <label for="main-symptoms-${id}">
              <i class="fas fa-notes-medical"></i>
              Sintomas principais:
            </label>
            <textarea id="main-symptoms-${id}" rows="4" placeholder="Descreva os sintomas principais..." required></textarea>
          </div>
          <button type="submit" class="btn-notify">
            <i class="fas fa-paper-plane"></i>
            Notificar Caso
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
        // Remove existing listeners
        const newForm = form.cloneNode(true);
        form.parentNode.replaceChild(newForm, form);

        // Add new listener
        newForm.addEventListener('submit', (e) => {
          e.preventDefault();
          this.handleFormSubmit(disease, newForm);
        });
      }
    });
  },

  handleFormSubmit(disease, form) {
    const data = {
      disease: disease,
      patientName: document.getElementById(`patient-name-${disease}`).value,
      patientAge: document.getElementById(`patient-age-${disease}`).value,
      location: document.getElementById(`patient-location-${disease}`).value,
      symptomsDate: document.getElementById(`symptoms-date-${disease}`).value,
      mainSymptoms: document.getElementById(`main-symptoms-${disease}`).value
    };

    // Validate
    if (!data.patientName || !data.patientAge || !data.location || !data.symptomsDate || !data.mainSymptoms) {
      App.showToast('Por favor, preencha todos os campos obrigatórios.', 'error');
      return;
    }

    // Show loading
    const submitBtn = form.querySelector('.btn-notify');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    submitBtn.disabled = true;

    // Simulate API call
    setTimeout(() => {
      App.showToast(`Caso de ${this.diseases[disease].name} notificado com sucesso!`, 'success');
      form.reset();
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      console.log('Notificação enviada:', data);
    }, 1500);
  },

  getDiseaseName(disease) {
    return this.diseases[disease]?.name || disease;
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
    const desktopNavItems = document.querySelectorAll('.desktop-nav .nav-item');
    desktopNavItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const screen = item.dataset.screen;
        if (screen) {
          this.showScreen(screen);
        }
      });
    });

    // Bottom Navigation (Mobile)
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
    const desktopNavItems = document.querySelectorAll('.desktop-nav .nav-item');
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

      NotificationsModule.init();
      ChatModule.init();
      LibraryModule.init();
      SymptomsModule.init();
      SettingsModule.init();
      PatientModule.init();
      MapModule.init();
      CaseNotificationModule.init();

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
        navigator.serviceWorker.register('/sw.js').then(registration => {
          console.log('ServiceWorker registration successful');
        }).catch(err => {
          console.log('ServiceWorker registration failed: ', err);
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
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
