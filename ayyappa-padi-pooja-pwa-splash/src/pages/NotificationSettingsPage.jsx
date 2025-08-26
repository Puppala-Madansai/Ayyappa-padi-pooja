import React from "react";
import NotificationSettings from "../components/NotificationSettings";

export default function NotificationSettingsPage() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-ayyappa-blue mb-2">
          🔔 Notification Settings
        </h1>
        <p className="text-gray-600">
          Manage your notification preferences for Ayyappa Padi Pooja updates
        </p>
      </div>
      
      <NotificationSettings />
      
      <div className="card p-6 max-w-2xl mx-auto">
        <h3 className="text-lg font-semibold text-ayyappa-orange mb-3">
          About Push Notifications
        </h3>
        <div className="space-y-3 text-sm text-gray-700">
          <p>
            <strong>Why enable notifications?</strong> Stay connected with the Ayyappa community 
            and never miss important Padi Pooja events in your area.
          </p>
          <p>
            <strong>Privacy:</strong> We only send notifications about Padi Pooja events. 
            Your data is secure and we never share it with third parties.
          </p>
          <p>
            <strong>Control:</strong> You can unsubscribe at any time from this page or 
            through your browser settings.
          </p>
          <p>
            <strong>Frequency:</strong> We send notifications only when there are new 
            Padi Pooja announcements or important updates.
          </p>
        </div>
      </div>
    </div>
  );
}
