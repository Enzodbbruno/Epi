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
      message: 'Foram registrados 15 novos casos de dengue na região sul da cidade. Fique atento aos sintomas e medidas preventivas.',
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
      name: 'Dengue - Região Sul',
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
      responseText = 'Sobre a **Dengue**: O boletim atual indica alta na região Sul. Recomenda-se intensificar visitas domiciliares e verificação de focos de água parada. Protocolo: verifique febre alta, dor retroorbital e manchas vermelhas.';
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

  // Base de Dados de Sintomas (Categorizada)
  symptomsData: {
    'Gerais': [
      { id: 'febre', label: 'Febre Alta (>38°C)' },
      { id: 'febre_baixa', label: 'Febre Baixa' },
      { id: 'fadiga', label: 'Cansaço/Fadiga Extrema' },
      { id: 'mal_estar', label: 'Mal-estar Geral' },
      { id: 'perda_apetite', label: 'Perda de Apetite' },
      { id: 'calafrios', label: 'Calafrios' }
    ],
    'Dores': [
      { id: 'dor_cabeca', label: 'Dor de Cabeça' },
      { id: 'dor_atras_olhos', label: 'Dor atrás dos Olhos' },
      { id: 'dor_corpo', label: 'Dor no Corpo' },
      { id: 'dor_articulacoes', label: 'Dor nas Articulações' },
      { id: 'dor_muscular', label: 'Dor Muscular (Mialgia)' },
      { id: 'dor_garganta', label: 'Dor de Garganta' }
    ],
    'Respiratório': [
      { id: 'tosse_seca', label: 'Tosse Seca' },
      { id: 'tosse_produtiva', label: 'Tosse com Catarro' },
      { id: 'falta_ar', label: 'Falta de Ar / Dificuldade para Respirar' },
      { id: 'coriza', label: 'Coriza / Nariz Escorrendo' },
      { id: 'congestao', label: 'Nariz Entupido' },
      { id: 'espirros', label: 'Espirros Frequentes' }
    ],
    'Gastrointestinal': [
      { id: 'nauseas', label: 'Náuseas / Enjoo' },
      { id: 'vomitos', label: 'Vômitos' },
      { id: 'diarreia', label: 'Diarreia' },
      { id: 'dor_abdominal', label: 'Dor Abdominal' }
    ],
    'Pele e Outros': [
      { id: 'manchas', label: 'Manchas Vermelhas na Pele' },
      { id: 'coceira', label: 'Coceira' },
      { id: 'sangramento', label: 'Sangramento (Gengiva/Nariz)' },
      { id: 'olhos_vermelhos', label: 'Olhos Vermelhos (Conjuntivite)' },
      { id: 'perda_olfato', label: 'Perda de Olfato/Paladar' }
    ]
  },

  // Base de Dados de Doenças e Regras
  diseases: [
    {
      id: 'dengue',
      name: 'Dengue',
      description: 'Doença viral transmitida pelo mosquito Aedes aegypti.',
      symptoms: ['febre', 'dor_atras_olhos', 'dor_muscular', 'dor_articulacoes', 'manchas', 'nauseas', 'mal_estar', 'dor_cabeca'],
      mandatory: ['febre'], // Sintomas que aumentam muito a chance
      weight: 1.2 // Peso para desempate
    },
    {
      id: 'covid',
      name: 'COVID-19',
      description: 'Infecção respiratória causada pelo coronavírus SARS-CoV-2.',
      symptoms: ['febre', 'tosse_seca', 'fadiga', 'perda_olfato', 'dor_garganta', 'dor_cabeca', 'falta_ar', 'coriza'],
      mandatory: ['tosse_seca', 'perda_olfato'],
      weight: 1.1
    },
    {
      id: 'gripe',
      name: 'Influenza (Gripe)',
      description: 'Infecção viral aguda do sistema respiratório.',
      symptoms: ['febre', 'tosse_seca', 'dor_garganta', 'coriza', 'dor_muscular', 'dor_cabeca', 'calafrios', 'fadiga'],
      mandatory: ['febre', 'tosse_seca'],
      weight: 1.0
    },
    {
      id: 'chikungunya',
      name: 'Chikungunya',
      description: 'Doença viral caracterizada por fortes dores nas articulações.',
      symptoms: ['febre', 'dor_articulacoes', 'dor_muscular', 'dor_cabeca', 'manchas', 'nauseas', 'olhos_vermelhos'],
      mandatory: ['dor_articulacoes'],
      weight: 1.2
    },
    {
      id: 'zika',
      name: 'Zika Vírus',
      description: 'Doença viral que pode causar febre baixa e erupções cutâneas.',
      symptoms: ['febre_baixa', 'manchas', 'coceira', 'dor_muscular', 'olhos_vermelhos', 'dor_articulações', 'dor_cabeca'],
      mandatory: ['manchas', 'coceira'],
      weight: 1.0
    },
    {
      id: 'resfriado',
      name: 'Resfriado Comum',
      description: 'Infecção viral leve das vias aéreas superiores.',
      symptoms: ['coriza', 'congestao', 'espirros', 'dor_garganta', 'tosse_produtiva', 'febre_baixa', 'mal_estar'],
      mandatory: ['coriza', 'espirros'],
      weight: 0.8
    },
    {
      id: 'gastro',
      name: 'Gastroenterite Viral',
      description: 'Inflamação do estômago e intestinos.',
      symptoms: ['diarreia', 'vomitos', 'nauseas', 'dor_abdominal', 'febre', 'calafrios', 'dor_cabeca'],
      mandatory: ['diarreia', 'vomitos'],
      weight: 1.0
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
      'Gastrointestinal': 'stomach', // Note: Check fa icon availability
      'Pele e Outros': 'allergies'
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

    if (activeEl) this.animateValue(activeEl, 0, this.metrics.active, 1500);
    if (admittedEl) this.animateValue(admittedEl, 0, this.metrics.admitted, 1000);
    if (recoveredEl) this.animateValue(recoveredEl, 0, this.metrics.recovered, 2000);

    // Animate CSS Charts (Simple trick: set height after load)
    const bars = document.querySelectorAll('.simple-bar-chart .bar');
    // Using setTimeout to trigger CSS transition
    setTimeout(() => {
      // Force relayout if needed, or just let CSS height transition kick in naturally if heights are inline.
      // Since heights are inline in HTML, we might need to "reset" them to 0 and then back to value to animate.
      // For simplicity in this demo, we assume they animate on view or we just leave them static.
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
  // Banco de Dados Simulado
  mockDB: [
    {
      id: 1,
      name: 'Maria de Lourdes Souza',
      age: 68,
      sex: 'Fem',
      blood: 'A+',
      cns: '700501249875',
      cpf: '123.456.789-00',
      photo: 'https://ui-avatars.com/api/?name=Maria+Lourdes&background=random&size=128',
      badges: [
        { text: 'Hipertensa', type: 'warning' },
        { text: 'Diabética', type: 'warning' },
        { text: 'Alergia: Penicilina', type: 'danger' }
      ],
      allergies: ['Penicilina', 'Dipirona'],
      vitals: { bp: '135/85', weight: '72', heartRate: '78' },
      history: [
        { date: '15/12/2025', title: 'Consulta Cardiologia', desc: 'Retorno de rotina. Pressão controlada.' },
        { date: '02/10/2025', title: 'Exames Laboratoriais', desc: 'Glicemia em jejum: 110 mg/dL.' },
        { date: '12/05/2025', title: 'Vacina Gripe', desc: 'Campanha Anual 2025.' }
      ],
      vaccines: [
        { name: 'Influenza (Gripe)', date: '12/05/2025' },
        { name: 'COVID-19 Reforço', date: '20/02/2025' },
        { name: 'Hepatite B', date: '10/01/2020' }
      ]
    },
    {
      id: 2,
      name: 'João Pedro Alves',
      age: 5,
      sex: 'Masc',
      blood: 'O+',
      cns: '890012356789',
      cpf: '555.444.333-22',
      photo: 'https://ui-avatars.com/api/?name=Joao+Pedro&background=random&size=128',
      badges: [
        { text: 'Asma', type: 'info' }
      ],
      allergies: ['Poeria', 'Ácaro'],
      vitals: { bp: '100/60', weight: '22', heartRate: '90' },
      history: [
        { date: '10/12/2025', title: 'Pediatra', desc: 'Crise de asma leve. Prescrito nebulização.' },
        { date: '15/08/2025', title: 'Vacinação', desc: 'Tetra Viral.' }
      ],
      vaccines: [
        { name: 'Tetra Viral', date: '15/08/2025' },
        { name: 'Poliomielite', date: '10/02/2023' },
        { name: 'BCG', date: '20/05/2020' }
      ]
    },
    {
      id: 3,
      name: 'Ana Clara Silva',
      age: 34,
      sex: 'Fem',
      blood: 'AB-',
      cns: '201098765432',
      cpf: '987.654.321-11',
      photo: 'https://ui-avatars.com/api/?name=Ana+Clara&background=random&size=128',
      badges: [
        { text: 'Gestante (20 sem)', type: 'info' }
      ],
      allergies: [],
      vitals: { bp: '110/70', weight: '68', heartRate: '82' },
      history: [
        { date: '18/12/2025', title: 'Pré-Natal', desc: 'Consulta mensal. Batimentos fetais normais.' },
        { date: '20/11/2025', title: 'Ultrassom Morfológico', desc: 'Desenvolvimento adequado.' }
      ],
      vaccines: [
        { name: 'dTpa', date: '20/11/2025' },
        { name: 'Influenza', date: '10/04/2025' }
      ]
    },
    {
      id: 4,
      name: 'Paciente Exemplo (Usuário)',
      age: 30,
      sex: 'Masc',
      blood: 'O+',
      cns: '05395045210',
      cpf: '053.950.452-10',
      photo: 'https://ui-avatars.com/api/?name=Enzo+User&background=0D8ABC&color=fff',
      badges: [
        { text: 'Cadastro Novo', type: 'info' }
      ],
      allergies: [],
      vitals: { bp: '120/80', weight: '75', heartRate: '70' },
      history: [
        { date: '19/12/2025', title: 'Primeiro Acesso', desc: 'Cadastro realizado no sistema.' }
      ],
      vaccines: []
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

    // Tabs
    const tabs = document.querySelectorAll('.p-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Remove active class from all
        tabs.forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.p-tab-content').forEach(c => c.classList.remove('active'));
        document.querySelectorAll('.p-tab-content').forEach(c => c.style.display = 'none');

        // Activate clicked
        tab.classList.add('active');
        const targetId = tab.dataset.tab;
        const targetContent = document.getElementById(targetId);
        targetContent.classList.add('active');
        targetContent.style.display = 'block';
      });
    });
  },

  handleSearch(term) {
    if (!term) return;
    term = term.toLowerCase().replace(/[.\-]/g, ''); // Clean CPF/CNS chars

    const results = this.mockDB.filter(p => {
      const cleanCpf = p.cpf.replace(/[.\-]/g, '');
      const name = p.name.toLowerCase();
      const cns = p.cns;

      return name.includes(term) || cleanCpf.includes(term) || cns.includes(term);
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
    // Mock Recents (Just showing Maria for now)
    const recent = [this.mockDB[0]];

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
                    <p>Acessado há 2 horas</p>
                </div>
            `;
      card.onclick = () => this.openProfile(p);
      container.appendChild(card);
    });
  },

  openProfile(patient) {
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

  // Cidades Predefinidas
  cities: {
    'saopaulo': { coords: [-23.5505, -46.6333], label: 'São Paulo' },
    'rio': { coords: [-22.9068, -43.1729], label: 'Rio de Janeiro' },
    'brasilia': { coords: [-15.7975, -47.8919], label: 'Brasília' },
    'salvador': { coords: [-12.9774, -38.5016], label: 'Salvador' },
    'manaus': { coords: [-3.1190, -60.0217], label: 'Manaus' }
  },

  // Dados Reais de Bairros (Latitude, Longitude)
  neighborhoodsData: {
    'saopaulo': [
      { name: 'Vila Mariana', lat: -23.5837, lng: -46.6339 },
      { name: 'Mooca', lat: -23.5592, lng: -46.5981 },
      { name: 'Pinheiros', lat: -23.5653, lng: -46.6914 },
      { name: 'Itaquera', lat: -23.5344, lng: -46.4515 },
      { name: 'Santana', lat: -23.4994, lng: -46.6316 },
      { name: 'Santo Amaro', lat: -23.6559, lng: -46.7027 }
    ],
    'rio': [
      { name: 'Copacabana', lat: -22.9707, lng: -43.1824 },
      { name: 'Tijuca', lat: -22.9255, lng: -43.2521 },
      { name: 'Barra da Tijuca', lat: -23.0004, lng: -43.3659 },
      { name: 'Madureira', lat: -22.8810, lng: -43.3400 },
      { name: 'Centro', lat: -22.9068, lng: -43.1729 }
    ],
    'brasilia': [
      { name: 'Asa Sul', lat: -15.8131, lng: -47.8961 },
      { name: 'Asa Norte', lat: -15.7631, lng: -47.8836 },
      { name: 'Águas Claras', lat: -15.8400, lng: -48.0300 },
      { name: 'Taguatinga', lat: -15.8333, lng: -48.0564 },
      { name: 'Plano Piloto', lat: -15.7975, lng: -47.8919 }
    ],
    'salvador': [
      { name: 'Pelourinho', lat: -12.9711, lng: -38.5108 },
      { name: 'Barra', lat: -13.0084, lng: -38.5283 },
      { name: 'Rio Vermelho', lat: -13.0125, lng: -38.4906 }
    ],
    'manaus': [
      { name: 'Centro', lat: -3.1190, lng: -60.0217 },
      { name: 'Adrianópolis', lat: -3.1096, lng: -60.0135 },
      { name: 'Ponta Negra', lat: -3.0734, lng: -60.0776 }
    ]
  },

  init() {
    this.setupEventListeners();
  },

  setupEventListeners() {
    const enableBtn = document.getElementById('enable-location-btn');
    const selectCity = document.getElementById('municipality-select');
    const selectDisease = document.getElementById('disease-select');

    if (enableBtn) {
      enableBtn.onclick = () => this.requestLocation();
    }

    if (selectCity) {
      selectCity.addEventListener('change', (e) => {
        const value = e.target.value;
        if (value === 'gps') {
          this.requestLocation();
        } else if (this.cities[value]) {
          this.loadMapAt(this.cities[value].coords[0], this.cities[value].coords[1], value);
          const overlay = document.getElementById('map-permission-overlay');
          if (overlay) overlay.style.display = 'none';
        }
      });
    }
    if (selectDisease) {
      selectDisease.addEventListener('change', (e) => {
        this.currentDisease = e.target.value;
        // Determine current city context correctly
        const selectCity = document.getElementById('municipality-select');
        let currentCity = 'saopaulo';

        if (selectCity) {
          if (selectCity.value === 'gps') {
            currentCity = 'gps';
          } else {
            currentCity = selectCity.value;
          }
        }

        const center = this.map ? this.map.getCenter() : { lat: this.defaultCoords[0], lng: this.defaultCoords[1] };
        if (this.map) {
          this.generateBubbleData(center.lat, center.lng, currentCity);
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
      this.loadMapAt(this.cities['saopaulo'].coords[0], this.cities['saopaulo'].coords[1], 'saopaulo');
      if (overlay) overlay.style.display = 'none';
    }
  },

  loadMapAt(lat, lng, cityKey = 'saopaulo') {
    if (this.map) {
      this.map.flyTo([lat, lng], 12);
      this.generateBubbleData(lat, lng, cityKey);
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
      // 2. Generate Random Case Counts
      let cases = Math.floor(Math.random() * 500) + 20; // 20 to 520 cases

      // Disease Multipliers
      if (this.currentDisease === 'covid') cases *= 1.5;
      if (this.currentDisease === 'zika') cases *= 0.3;

      cases = Math.floor(cases);

      // 3. Determine Radius and Color
      // Radius proportional to sqrt of area (cases) for perception accuracy
      const radius = Math.sqrt(cases) * 1.5;

      let color = this.colors.low;
      if (cases > 100) color = this.colors.medium;
      if (cases > 300) color = this.colors.high;
      if (cases > 600) color = this.colors.critical;

      // 4. Create Circle Marker at coordinates
      const circle = L.circleMarker([hood.lat, hood.lng], {
        radius: radius,
        fillColor: color,
        color: color,
        weight: 1,
        opacity: 0.8,
        fillOpacity: 0.5
      });

      // 5. Tooltip/Popup
      const disLabel = this.currentDisease.charAt(0).toUpperCase() + this.currentDisease.slice(1);

      circle.bindPopup(`
                <div style="text-align: center; min-width: 120px;">
                    <strong style="font-size: 1.1em; color: ${color}">${hood.name}</strong>
                    <hr style="margin: 5px 0; border: 0; border-top: 1px solid #eee;">
                    <div style="font-size: 0.9em; color: #666;">${disLabel}</div>
                    <div style="font-size: 1.4em; font-weight: bold; color: #333;">${cases}</div>
                    <div style="font-size: 0.8em; color: #999;">Casos Confirmados</div>
                </div>
            `);

      // Hover interactions
      circle.on('mouseover', function (e) {
        this.openPopup();
        this.setStyle({ fillOpacity: 0.8, weight: 2 });
      });
      circle.on('mouseout', function (e) {
        this.closePopup();
        this.setStyle({ fillOpacity: 0.5, weight: 1 });
      });

      this.layerGroup.addLayer(circle);
    });
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
    const backButtons = document.querySelectorAll('.back-button');
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
        if (MapModule && MapModule.init) {
          setTimeout(() => {
            MapModule.init();
          }, 100);
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
  }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
