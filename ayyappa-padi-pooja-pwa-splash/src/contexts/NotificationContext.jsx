import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { requestNotificationPermission, onMessageListener } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const { user } = useAuth();
  const [notificationToken, setNotificationToken] = useState(null);
  const [permission, setPermission] = useState("default");
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Check notification permission status
  useEffect(() => {
    if ("Notification" in window) {
      setPermission(Notification.permission);
    }
  }, []);

  // Request notification permission
  const requestPermission = async () => {
    try {
      const token = await requestNotificationPermission();
      if (token) {
        setNotificationToken(token);
        setPermission("granted");
        await saveTokenToDatabase(token);
        setIsSubscribed(true);
        return token;
      }
      return null;
    } catch (error) {
      console.error("Error requesting notification permission:", error);
      return null;
    }
  };

  // Save token to user's document in Firestore
  const saveTokenToDatabase = async (token) => {
    if (!user) return;
    
    try {
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, {
        notificationToken: token,
        email: user.email,
        displayName: user.displayName,
        lastUpdated: new Date(),
        isSubscribed: true
      }, { merge: true });
    } catch (error) {
      console.error("Error saving notification token:", error);
    }
  };

  // Remove token from database
  const unsubscribeFromNotifications = async () => {
    if (!user) return;
    
    try {
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, {
        notificationToken: null,
        isSubscribed: false,
        lastUpdated: new Date()
      }, { merge: true });
      
      setNotificationToken(null);
      setIsSubscribed(false);
    } catch (error) {
      console.error("Error unsubscribing from notifications:", error);
    }
  };

  // Check if user is subscribed
  useEffect(() => {
    const checkSubscription = async () => {
      if (!user) return;
      
      try {
        const userRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userRef);
        
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setIsSubscribed(userData.isSubscribed || false);
          setNotificationToken(userData.notificationToken || null);
        }
      } catch (error) {
        console.error("Error checking subscription status:", error);
      }
    };

    checkSubscription();
  }, [user]);

  // Handle foreground messages
  useEffect(() => {
    const unsubscribe = onMessageListener()
      .then((payload) => {
        console.log("Received foreground message:", payload);
        
        // Show custom notification for foreground messages
        if (payload?.notification) {
          const { title, body } = payload.notification;
          
          // Create custom notification element
          const notification = document.createElement("div");
          notification.className = "fixed top-4 right-4 bg-white border border-green-200 rounded-lg shadow-lg p-4 z-50 max-w-sm";
          notification.innerHTML = `
            <div class="flex items-start gap-3">
              <div class="flex-shrink-0">
                <img src="/icon-192.png" alt="Ayyappa" class="w-8 h-8 rounded-full">
              </div>
              <div class="flex-1">
                <h4 class="font-semibold text-gray-900">${title}</h4>
                <p class="text-sm text-gray-600">${body}</p>
                <div class="mt-2 flex gap-2">
                  <button onclick="window.location.href='/poojas'" class="text-xs bg-ayyappa-orange text-white px-2 py-1 rounded">View</button>
                  <button onclick="this.parentElement.parentElement.parentElement.remove()" class="text-xs bg-gray-300 text-gray-700 px-2 py-1 rounded">Close</button>
                </div>
              </div>
            </div>
          `;
          
          document.body.appendChild(notification);
          
          // Auto-remove after 5 seconds
          setTimeout(() => {
            if (notification.parentElement) {
              notification.remove();
            }
          }, 5000);
        }
      })
      .catch((err) => console.error("Error receiving foreground message:", err));

    return () => unsubscribe;
  }, []);

  const value = {
    notificationToken,
    permission,
    isSubscribed,
    requestPermission,
    unsubscribeFromNotifications,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
}

export const useNotifications = () => useContext(NotificationContext);
