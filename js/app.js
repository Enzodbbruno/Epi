// DOM Elements
const actionCards = document.querySelectorAll('.action-card');
const alertCards = document.querySelectorAll('.alert-card');
const navItems = document.querySelectorAll('.nav-item');

// Sample data for demonstration
const sampleAlerts = [
    {
        id: 1,
        title: 'Alerta: Aumento de casos de Dengue',
        description: 'Região Sul - 15 novos casos confirmados',
        time: 'Há 2 horas',
        icon: 'exclamation-triangle',
        type: 'warning'
    },
    {
        id: 2,
        title: 'Campanha de Vacinação',
        description: 'Influenza - Atualização do público-alvo',
        time: 'Ontem',
        icon: 'syringe',
        type: 'info'
    }
];

// Initialize the app
function initApp() {
    setupEventListeners();
    updateDateTime();
    // Load initial data
    loadAlerts();
}

// Set up event listeners
function setupEventListeners() {
    // Navigation
    navItems.forEach(item => {
        item.addEventListener('click', handleNavClick);
    });

    // Action cards
    actionCards.forEach(card => {
        card.addEventListener('click', handleActionCardClick);
    });

    // Alert cards
    alertCards.forEach(card => {
        card.addEventListener('click', handleAlertClick);
    });
}

// Handle navigation item clicks
function handleNavClick(e) {
    e.preventDefault();
    const target = e.currentTarget;
    
    // Remove active class from all nav items
    navItems.forEach(item => item.classList.remove('active'));
    
    // Add active class to clicked nav item
    target.classList.add('active');
    
    // Here you would typically load the appropriate view
    console.log(`Navigating to: ${target.querySelector('span').textContent}`);
}

// Handle action card clicks
function handleActionCardClick(e) {
    const card = e.currentTarget;
    const cardType = card.id;
    
    // Add visual feedback
    card.style.transform = 'scale(0.95)';
    setTimeout(() => {
        card.style.transform = '';
    }, 200);
    
    // Navigate to the appropriate section
    switch(cardType) {
        case 'notifications':
            console.log('Opening Notifications');
            // In a real app, you would navigate to the notifications view
            break;
        case 'chat':
            console.log('Opening Chat');
            // In a real app, you would navigate to the chat view
            break;
        case 'library':
            console.log('Opening Library');
            // In a real app, you would navigate to the library view
            break;
    }
}

// Handle alert card clicks
function handleAlertClick(e) {
    const card = e.currentTarget;
    const alertId = card.dataset.id;
    
    // Add visual feedback
    card.style.transform = 'scale(0.98)';
    setTimeout(() => {
        card.style.transform = '';
    }, 200);
    
    // In a real app, you would navigate to the alert details view
    console.log(`Viewing alert ${alertId}`);
}

// Load and display alerts
function loadAlerts() {
    const alertsContainer = document.querySelector('.alerts-section');
    
    // In a real app, you would fetch this from an API
    if (alertsContainer) {
        // Clear existing alerts except the header
        const existingAlerts = document.querySelectorAll('.alert-card');
        existingAlerts.forEach(alert => alert.remove());
        
        // Add new alerts
        const alertsList = document.createElement('div');
        sampleAlerts.forEach(alert => {
            const alertElement = createAlertElement(alert);
            alertsList.appendChild(alertElement);
        });
        
        // Append after the section header
        const sectionHeader = document.querySelector('.section-header');
        if (sectionHeader) {
            sectionHeader.insertAdjacentElement('afterend', alertsList);
        }
    }
}

// Create alert element
function createAlertElement(alert) {
    const alertElement = document.createElement('div');
    alertElement.className = 'alert-card';
    alertElement.dataset.id = alert.id;
    
    const iconClass = alert.type === 'warning' ? 'exclamation-triangle' : 'syringe';
    const iconColor = alert.type === 'warning' ? '#e67e22' : '#2e7d32';
    const bgColor = alert.type === 'warning' ? '#f8e6d6' : '#d5e8d4';
    
    alertElement.innerHTML = `
        <div class="alert-icon" style="background: ${bgColor}; color: ${iconColor};">
            <i class="fas fa-${iconClass}"></i>
        </div>
        <div class="alert-content">
            <h3>${alert.title}</h3>
            <p>${alert.description}</p>
            <span class="alert-time">${alert.time}</span>
        </div>
    `;
    
    // Add click event listener
    alertElement.addEventListener('click', handleAlertClick);
    
    return alertElement;
}

// Update date and time
function updateDateTime() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        day: '2-digit', 
        month: 'long', 
        year: 'numeric',
        timeZone: 'America/Sao_Paulo'
    };
    
    const dateTimeElement = document.querySelector('.welcome-section p');
    if (dateTimeElement) {
        dateTimeElement.textContent = new Intl.DateTimeFormat('pt-BR', options).format(now);
    }
    
    // Update time every minute
    setTimeout(updateDateTime, 60000);
}

// Initialize the app when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initApp);

// Service Worker Registration (for PWA functionality)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
            console.log('ServiceWorker registration successful');
        }).catch(err => {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

// Handle offline/online status
window.addEventListener('online', () => {
    // Show online status
    showToast('Você está online', 'success');
});

window.addEventListener('offline', () => {
    // Show offline status
    showToast('Você está offline', 'warning');
});

// Toast notification function
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    // Show toast with animation
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    // Hide and remove toast after delay
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}
