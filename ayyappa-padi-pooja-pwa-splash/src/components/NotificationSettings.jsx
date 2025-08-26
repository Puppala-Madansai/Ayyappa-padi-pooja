import React from "react";
import { useNotifications } from "../contexts/NotificationContext";
import { Bell, BellOff, CheckCircle, AlertCircle } from "lucide-react";

export default function NotificationSettings() {
  const { 
    permission, 
    isSubscribed, 
    requestPermission, 
    unsubscribeFromNotifications 
  } = useNotifications();

  const handleSubscribe = async () => {
    const token = await requestPermission();
    if (token) {
      // Show success message
      alert("🙏 Thank you! You'll now receive notifications about new Padi Poojas.");
    } else {
      alert("Please allow notifications in your browser settings to receive updates.");
    }
  };

  const handleUnsubscribe = async () => {
    await unsubscribeFromNotifications();
    alert("You've been unsubscribed from notifications.");
  };

  const getStatusMessage = () => {
    if (permission === "denied") {
      return {
        text: "Notifications are blocked. Please enable them in your browser settings.",
        icon: <AlertCircle className="text-red-500" size={20} />,
        color: "text-red-600"
      };
    }
    
    if (isSubscribed) {
      return {
        text: "You're subscribed to notifications! You'll receive updates about new Padi Poojas.",
        icon: <CheckCircle className="text-green-500" size={20} />,
        color: "text-green-600"
      };
    }
    
    if (permission === "granted") {
      return {
        text: "Notifications are enabled. Click subscribe to receive Padi Pooja updates.",
        icon: <Bell className="text-blue-500" size={20} />,
        color: "text-blue-600"
      };
    }
    
    return {
      text: "Enable notifications to stay updated about new Padi Poojas in your area.",
      icon: <BellOff className="text-gray-500" size={20} />,
      color: "text-gray-600"
    };
  };

  const status = getStatusMessage();

  return (
    <div className="card p-6 max-w-md mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-ayyappa-blue mb-2">
          🔔 Notification Settings
        </h3>
        <p className="text-sm text-gray-600">
          Stay updated about new Ayyappa Padi Poojas
        </p>
      </div>

      {/* Status Display */}
      <div className={`flex items-center gap-3 p-3 rounded-lg bg-gray-50 mb-4 ${status.color}`}>
        {status.icon}
        <p className="text-sm">{status.text}</p>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        {permission === "denied" ? (
          <div className="text-center">
            <p className="text-sm text-red-600 mb-2">
              Notifications are blocked in your browser
            </p>
            <button 
              onClick={() => window.open('chrome://settings/content/notifications', '_blank')}
              className="btn-primary text-sm"
            >
              Open Browser Settings
            </button>
          </div>
        ) : isSubscribed ? (
          <button 
            onClick={handleUnsubscribe}
            className="w-full btn-primary bg-red-600 hover:bg-red-700 flex items-center justify-center gap-2"
          >
            <BellOff size={18} />
            Unsubscribe from Notifications
          </button>
        ) : (
          <button 
            onClick={handleSubscribe}
            className="w-full btn-primary flex items-center justify-center gap-2"
            disabled={permission === "denied"}
          >
            <Bell size={18} />
            Subscribe to Notifications
          </button>
        )}
      </div>

      {/* Info Section */}
      <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
        <h4 className="font-semibold text-ayyappa-orange mb-2">What you'll receive:</h4>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• New Padi Pooja announcements</li>
          <li>• Updates about nearby events</li>
          <li>• Important devotional reminders</li>
          <li>• Special Ayyappa celebrations</li>
        </ul>
      </div>
    </div>
  );
}
