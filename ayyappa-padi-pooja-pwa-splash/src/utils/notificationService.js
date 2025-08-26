// Notification service for sending push notifications
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

// Function to send notification to all subscribed users
export const sendNotificationToAllUsers = async (title, body, data = {}) => {
  try {
    // Get all users who have subscribed to notifications
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("isSubscribed", "==", true));
    const querySnapshot = await getDocs(q);
    
    const tokens = [];
    querySnapshot.forEach((doc) => {
      const userData = doc.data();
      if (userData.notificationToken) {
        tokens.push(userData.notificationToken);
      }
    });

    if (tokens.length === 0) {
      console.log("No subscribed users found");
      return;
    }

    // Send notification to all tokens
    await sendNotificationToTokens(tokens, title, body, data);
    console.log(`Notification sent to ${tokens.length} users`);
  } catch (error) {
    console.error("Error sending notification:", error);
  }
};

// Function to send notification to specific tokens
const sendNotificationToTokens = async (tokens, title, body, data = {}) => {
  try {
    const response = await fetch('/api/send-notification', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tokens,
        notification: {
          title,
          body,
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
          data
        }
      })
    });

    if (!response.ok) {
      throw new Error('Failed to send notification');
    }

    return await response.json();
  } catch (error) {
    console.error("Error sending notification to tokens:", error);
    throw error;
  }
};

// Function to send notification when new pooja is added
export const notifyNewPooja = async (pooja) => {
  const title = "🛕 New Ayyappa Padi Pooja";
  const body = `New pooja: ${pooja.title} in ${pooja.venue}`;
  const data = {
    poojaId: pooja.id,
    type: 'new_pooja',
    url: `/poojas`
  };

  await sendNotificationToAllUsers(title, body, data);
};

// Function to send notification for upcoming poojas
export const notifyUpcomingPooja = async (pooja) => {
  const title = "⏰ Upcoming Padi Pooja Reminder";
  const body = `Reminder: ${pooja.title} is happening soon in ${pooja.venue}`;
  const data = {
    poojaId: pooja.id,
    type: 'reminder',
    url: `/poojas`
  };

  await sendNotificationToAllUsers(title, body, data);
};

// Function to send devotional reminders
export const sendDevotionalReminder = async () => {
  const title = "🙏 Ayyappa Devotional Reminder";
  const body = "Swamiye Sharanam Ayyappa - May your devotion grow stronger each day";
  const data = {
    type: 'devotional',
    url: '/'
  };

  await sendNotificationToAllUsers(title, body, data);
};
