import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'

// Read .env file manually
const envContent = readFileSync(resolve(__dirname, '.env'), 'utf-8');
const envVars = {};
envContent.split('\n').forEach(line => {
  const [key, value] = line.split('=');
  if (key && value && !key.startsWith('#')) {
    envVars[key.trim()] = value.trim();
  }
});

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Ayyappa Padi Pooja',
        short_name: 'Padi Pooja',
        description: 'Devotional Ayyappa Padi Pooja updates and sharing platform',
        theme_color: '#ff9933',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/',
        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          { src: '/splash-640x1136.png', sizes: '640x1136', type: 'image/png' },
          { src: '/splash-750x1334.png', sizes: '750x1334', type: 'image/png' },
          { src: '/splash-1242x2208.png', sizes: '1242x2208', type: 'image/png' },
          { src: '/splash-1125x2436.png', sizes: '1125x2436', type: 'image/png' },
          { src: '/splash-828x1792.png', sizes: '828x1792', type: 'image/png' },
          { src: '/splash-1242x2688.png', sizes: '1242x2688', type: 'image/png' },
          { src: '/splash-1536x2048.png', sizes: '1536x2048', type: 'image/png' },
          { src: '/splash-1668x2224.png', sizes: '1668x2224', type: 'image/png' },
          { src: '/splash-1668x2388.png', sizes: '1668x2388', type: 'image/png' },
          { src: '/splash-2048x2732.png', sizes: '2048x2732', type: 'image/png' },
          {
            src: '/icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          { src: '/splash-640x1136.png', sizes: '640x1136', type: 'image/png' },
          { src: '/splash-750x1334.png', sizes: '750x1334', type: 'image/png' },
          { src: '/splash-1242x2208.png', sizes: '1242x2208', type: 'image/png' },
          { src: '/splash-1125x2436.png', sizes: '1125x2436', type: 'image/png' },
          { src: '/splash-828x1792.png', sizes: '828x1792', type: 'image/png' },
          { src: '/splash-1242x2688.png', sizes: '1242x2688', type: 'image/png' },
          { src: '/splash-1536x2048.png', sizes: '1536x2048', type: 'image/png' },
          { src: '/splash-1668x2224.png', sizes: '1668x2224', type: 'image/png' },
          { src: '/splash-1668x2388.png', sizes: '1668x2388', type: 'image/png' },
          { src: '/splash-2048x2732.png', sizes: '2048x2732', type: 'image/png' }
        ]
      }
    }),
    {
      name: 'generate-firebase-sw',
      closeBundle() {
        try {
          // Read the template service worker
          const swTemplate = readFileSync(resolve(__dirname, 'public/firebase-messaging-sw.js'), 'utf-8');
          
          // Replace environment variable placeholders with actual values from .env
          const swContent = swTemplate
            .replace('self.FIREBASE_API_KEY', `"${envVars.VITE_FIREBASE_API_KEY}"`)
            .replace('self.FIREBASE_AUTH_DOMAIN', `"${envVars.VITE_FIREBASE_AUTH_DOMAIN}"`)
            .replace('self.FIREBASE_PROJECT_ID', `"${envVars.VITE_FIREBASE_PROJECT_ID}"`)
            .replace('self.FIREBASE_STORAGE_BUCKET', `"${envVars.VITE_FIREBASE_STORAGE_BUCKET}"`)
            .replace('self.FIREBASE_MESSAGING_SENDER_ID', `"${envVars.VITE_FIREBASE_MESSAGING_SENDER_ID}"`)
            .replace('self.FIREBASE_APP_ID', `"${envVars.VITE_FIREBASE_APP_ID}"`);
          
          // Write the generated service worker to dist
          writeFileSync(resolve(__dirname, 'dist/firebase-messaging-sw.js'), swContent);
          console.log('✅ Firebase service worker generated successfully');
        } catch (error) {
          console.error('❌ Error generating Firebase service worker:', error);
        }
      }
    }
  ]
})
