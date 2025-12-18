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
      <div class="notification-item ${notif.read ? 'read' : ''}" data-id="${notif.id}">
        <div class="notification-icon">
          <i class="fas fa-${this.getNotificationIcon(notif.type)}"></i>
        </div>
        <div class="notification-content">
          <h4 class="notification-title">${notif.title}</h4>
          <p class="notification-preview">${notif.message}</p>
          <span class="notification-time">${this.formatDate(notif.date)}</span>
        </div>
        <div class="notification-actions">
          <button class="mark-as-read" data-id="${notif.id}">
            <i class="${notif.read ? 'fas fa-check-circle' : 'far fa-circle'}"></i>
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

    container.innerHTML = filteredDocs.map(doc => `
      <div class="document-item" data-id="${doc.id}">
        <div class="document-icon">
          <i class="${this.getDocumentIcon(doc.format)}"></i>
        </div>
        <div class="document-info">
          <h4 class="document-title">${doc.title}</h4>
          <div class="document-meta">
            <span class="document-type">${this.formatDocumentType(doc.type)}</span>
            <span class="document-size">${doc.size}</span>
            <span class="document-date">${new Date(doc.uploadDate).toLocaleDateString('pt-BR')}</span>
          </div>
          <div class="document-tags">
            ${doc.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
        </div>
        <div class="document-actions">
          <button class="download-button" data-id="${doc.id}">
            <i class="fas fa-download"></i>
          </button>
        </div>
      </div>
    `).join('');

    // Adiciona os event listeners para os botões de download
    document.querySelectorAll('.download-button').forEach(button => {
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        const docId = button.dataset.id;
        this.downloadDocument(docId);
      });
    });

    // Adiciona os event listeners para os itens do documento
    document.querySelectorAll('.document-item').forEach(item => {
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

// Módulo Principal do Aplicativo
const App = {
  currentScreen: 'dashboard',

  init() {
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

      // Mostra a tela inicial
      this.showScreen('dashboard');

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
    // Navegação pelo menu inferior
    const navItems = document.querySelectorAll('.bottom-nav .nav-item');
    navItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const screen = item.dataset.screen;
        if (screen) {
          this.showScreen(screen);
        }
      });
    });

    // Navegação pelos cards da tela inicial
    const actionCards = document.querySelectorAll('.action-card');
    actionCards.forEach(card => {
      card.addEventListener('click', () => {
        const screen = card.id.replace('-card', '');
        this.showScreen(screen);
      });
    });

    // Botão de voltar
    const backButtons = document.querySelectorAll('.back-button');
    backButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        this.showPreviousScreen();
      });
    });
  },

  showScreen(screenId) {
    // Esconde todas as telas
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
      screen.style.display = 'none';
    });

    // Mostra a tela solicitada
    const targetScreen = document.getElementById(`${screenId}-screen`);
    if (targetScreen) {
      targetScreen.style.display = 'block';
      this.currentScreen = screenId;

      // Atualiza o menu ativo
      this.updateActiveNavItem(screenId);

      // Rola para o topo
      window.scrollTo(0, 0);

      // Executa ações específicas ao mostrar determinadas telas
      this.onScreenShow(screenId);
    }
  },

  showPreviousScreen() {
    // Lógica para voltar à tela anterior
    // Por enquanto, sempre volta para o dashboard
    this.showScreen('dashboard');
  },

  updateActiveNavItem(screenId) {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
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
    const container = document.getElementById('recent-alerts');
    if (!container) return;

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
    const loadingOverlay = document.getElementById('loading-overlay');
    if (loadingOverlay) {
      loadingOverlay.classList.remove('active');
    }
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
};

// Inicializa o aplicativo quando o DOM estiver totalmente carregado
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

// Suporte para módulos ES6
export { App, NotificationsModule, ChatModule, LibraryModule, SettingsModule };
