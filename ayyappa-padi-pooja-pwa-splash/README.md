# Ayyappa Padi Pooja – React + Vite + Firebase

Devotional platform to add, view, and celebrate Ayyappa Padi Poojas.

## Features
- Devotional UI (Ayyappa colors, mantra, cards)
- Email/Password Auth (Login, Signup)
- Add Pooja form with: Organizer, **Contact**, **Location pickers (State → District → Mandal → Village)**, Complete Address, Date & Time, Description, Flyer
- **My Poojas** dashboard (list only your events) with **Edit** and **Delete**
- **Upcoming** and **Completed** (auto-separated by date)
- Firebase Storage for flyer images
- Firestore-backed lists; public can see Upcoming + Completed

## Quick start
```bash
npm i
cp .env.example .env  # put your Firebase creds here
npm run dev
```

### Firebase setup
- Enable **Auth → Email/Password**
- Create **Firestore**
- Create **Storage**

#### Firestore security rules (starter)
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /poojas/{id} {
      allow read: if true;
      allow create: if request.auth != null;
      allow update, delete: if request.auth != null && request.auth.uid == resource.data.createdBy;
    }
  }
}
```

#### Storage rules
```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /flyers/{userId}/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## Notes
- Editing replaces the flyer if you upload a new one and deletes the previous file.
- Location pickers use a small sample dataset in `src/utils/locationData.js` – extend as needed.

## Deploying to Netlify

This repo includes a `netlify.toml` with sensible defaults. You can deploy using Netlify's Git integration or the Netlify CLI.

1) Git-based deploy (recommended):
  - Push your repo to GitHub/GitLab/Bitbucket.
  - Connect the repo in Netlify (Sites → New site → Import from Git).
  - Netlify will run `npm run build` and publish the `dist` folder.
  - After deploy completes, Netlify shows a generated site URL (like `https://your-site-name.netlify.app`).

  The current deployed preview is: https://ayyappa-padi-pooja-pwa.netlify.app

2) CLI deploy (quick):
  - Install Netlify CLI: `npm i -g netlify-cli`
  - Run:
    ```bash
    netlify deploy --dir=dist --prod
    ```
  - The CLI will output the generated site URL after a successful deploy.

If you need a stable custom domain, add it in Netlify site settings and follow their DNS instructions. For automated notifications and server-side work (send-notification endpoint), consider deploying a small server or Cloud Function and updating the `src/utils/notificationService.js` endpoint accordingly.
# Ayyappa-padi-pooja
