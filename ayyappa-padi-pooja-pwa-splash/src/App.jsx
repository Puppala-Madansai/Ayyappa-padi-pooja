import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Poojas from "./pages/Poojas.jsx";
import AddPooja from "./pages/AddPooja.jsx";
import EditPooja from "./pages/EditPooja.jsx";
import MyPoojas from "./pages/MyPoojas.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import NotificationSettingsPage from "./pages/NotificationSettingsPage.jsx";
import { AuthProvider, useAuth } from "./contexts/AuthContext.jsx";
import { NotificationProvider } from "./contexts/NotificationContext.jsx";

// ✅ ProtectedRoute Wrapper
function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="p-8 text-center text-lg">Loading...</div>;
  }

  return user ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <NotificationProvider>
          <div className="min-h-screen flex flex-col bg-gray-50">
            {/* ✅ Header always visible */}
            <Header />

            {/* ✅ Main Routes */}
            <main className="flex-1 container mx-auto px-4 py-6">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/poojas" element={<Poojas />} />
                <Route path="/notifications" element={<NotificationSettingsPage />} />

                {/* Protected Routes */}
                <Route
                  path="/add"
                  element={
                    <ProtectedRoute>
                      <AddPooja />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/edit/:id"
                  element={
                    <ProtectedRoute>
                      <EditPooja />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/my"
                  element={
                    <ProtectedRoute>
                      <MyPoojas />
                    </ProtectedRoute>
                  }
                />

                {/* Auth Pages */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                {/* Redirect unknown paths */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>

            {/* ✅ Footer */}
            <footer className="text-center text-xs text-gray-500 py-6">
              Swamiye Sharanam Ayyappa 🙏
            </footer>
          </div>
        </NotificationProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
