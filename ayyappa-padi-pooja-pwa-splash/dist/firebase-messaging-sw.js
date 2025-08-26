// Firebase messaging service worker for background notifications
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');

// Firebase config will be injected during build time
const firebaseConfig = {
  apiKey: "AIzaSyACD-C7poJu6I5Cvvb6MyUQ3uM4x6rg-FI",
  authDomain: "ayyappa-padi-pooja.firebaseapp.com",
  projectId: "ayyappa-padi-pooja",
  storageBucket: "ayyappa-padi-pooja.appspot.com",
  messagingSenderId: "779308511885",
  appId: "1:779308511885:web:b50fb74c415fb40346a8c4"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log('Received background message:', payload);

  const notificationTitle = payload.notification?.title || 'Ayyappa Padi Pooja';
  const notificationOptions = {
    body: payload.notification?.body || 'New pooja update available',
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    tag: 'ayyappa-pooja-notification',
    requireInteraction: true,
    actions: [
      {
        action: 'view',
        title: 'View Poojas',
        icon: '/icon-192.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/icon-192.png'
      }
    ],
    data: payload.data || {}
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  console.log('Notification clicked:', event);
  
  event.notification.close();

  if (event.action === 'view') {
    // Open the poojas page
    event.waitUntil(
      clients.openWindow('/poojas')
    );
  } else if (event.action === 'close') {
    // Just close the notification
    event.notification.close();
  } else {
    // Default action - open the app
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});
