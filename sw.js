// Nome do cache
const CACHE_NAME = 'epiconecta-v27-csssyntax';
// Arquivos para armazenar em cache
const urlsToCache = [
  './',
  './index.html',
  './css/style.css',
  './js/app.js',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap',
  // Ícones e imagens podem ser adicionados aqui
];

// Instalação do Service Worker
self.addEventListener('install', event => {
  // Executa a instalação
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache aberto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Ativação do Service Worker
self.addEventListener('activate', event => {
  // Remove caches antigos
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => cacheName !== CACHE_NAME)
          .map(cacheName => caches.delete(cacheName))
      );
    })
  );
});

// Estratégia de cache: Network First, fallback para cache
self.addEventListener('fetch', event => {
  // Ignora requisições que não são GET
  if (event.request.method !== 'GET') return;

  // Para requisições de dados da API, usa Network First
  if (event.request.url.includes('/api/')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Clona a resposta para armazenar no cache
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => cache.put(event.request, responseToCache));
          return response;
        })
        .catch(() => {
          // Se a rede falhar, tenta buscar do cache
          return caches.match(event.request);
        })
    );
  } else {
    // Para recursos estáticos, usa Cache First
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          // Retorna do cache se disponível
          if (response) {
            return response;
          }

          // Se não estiver no cache, busca na rede e armazena
          return fetch(event.request).then(response => {
            // Verifica se recebemos uma resposta válida
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clona a resposta para armazenar no cache
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => cache.put(event.request, responseToCache));

            return response;
          });
        })
    );
  }
});

// Mensagens do Service Worker
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Sincronização em segundo plano
self.addEventListener('sync', event => {
  if (event.tag === 'sync-data') {
    console.log('Sincronizando dados em segundo plano...');
    // Aqui você pode adicionar a lógica de sincronização
  }
});

// Notificações push
self.addEventListener('push', event => {
  if (!(self.Notification && self.Notification.permission === 'granted')) {
    return;
  }

  const data = event.data ? event.data.json() : {};
  const title = data.title || 'EpiConecta';
  const options = {
    body: data.body || 'Nova notificação',
    icon: data.icon || '/icons/icon-192x192.png',
    badge: '/icons/badge.png',
    data: data.data || {},
    vibrate: [200, 100, 200, 100, 200, 100, 200],
    tag: data.tag || 'simple-push-notification'
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

// Ação ao clicar na notificação
self.addEventListener('notificationclick', event => {
  event.notification.close();

  const urlToOpen = event.notification.data.url || '/';

  event.waitUntil(
    clients.matchAll({ type: 'window' })
      .then(windowClients => {
        // Verifica se já existe uma aba aberta com a URL
        for (let i = 0; i < windowClients.length; i++) {
          const client = windowClients[i];
          if (client.url === urlToOpen && 'focus' in client) {
            return client.focus();
          }
        }

        // Se não encontrou, abre uma nova aba
        if (clients.openWindow) {
          return clients.openWindow(urlToOpen);
        }
      })
  );
});
