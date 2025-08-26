import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";
import { useNotifications } from "../contexts/NotificationContext.jsx";
import { LogOut, PlusCircle, UserCircle2, List, Bell, BellOff, Menu, X } from "lucide-react";

export default function Header() {
  const { user, logout } = useAuth();
  const { isSubscribed, permission } = useNotifications();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate("/");
    setIsMenuOpen(false);
  };

  const navClass = ({ isActive }) =>
    `px-3 py-2 rounded-xl ${isActive ? "bg-ayyappa-yellow text-black" : "hover:bg-yellow-100"}`;

  const mobileNavClass = ({ isActive }) =>
    `block w-full px-4 py-3 text-left ${isActive ? "bg-ayyappa-yellow text-black" : "hover:bg-yellow-100"}`;

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-yellow-200">
      <div className="container mx-auto px-4 py-3">
        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="https://4.bp.blogspot.com/-p24h1ji1l2U/WeTPZW9DjJI/AAAAAAAACJU/T5R70DpofkokjB3ovuqtwzHico-CHvPdwCLcBGAs/s1600/muru-2.jpg" alt="Ayyappa" className="h-10 w-10 rounded-full object-cover border-2 border-ayyappa-gold"/>
            <div>
              <div className="font-dev text-ayyappa-blue text-xl leading-4">स्वामीये शरणम्</div>
              <div className="font-bold text-ayyappa-orange -mt-1">Ayyappa Padi Pooja</div>
            </div>
          </Link>
          <nav className="flex items-center gap-2">
            <NavLink to="/" className={navClass}>Home</NavLink>
            <NavLink to="/about" className={navClass}>About</NavLink>
            <NavLink to="/poojas" className={navClass}>Poojas</NavLink>
            {user && <NavLink to="/add" className={navClass}><span className="inline-flex items-center gap-1"><PlusCircle size={18}/> Add</span></NavLink>}
            {user && <NavLink to="/my" className={navClass}><span className="inline-flex items-center gap-1"><List size={18}/> My Poojas</span></NavLink>}
          </nav>
          <div className="flex items-center gap-3">
            {/* Notification Bell */}
            <Link 
              to="/notifications" 
              className="relative p-2 rounded-xl hover:bg-yellow-100 transition-colors"
              title={isSubscribed ? "Notifications enabled" : "Notification settings"}
            >
              {isSubscribed ? (
                <Bell className="text-green-600" size={20} />
              ) : (
                <BellOff className="text-gray-400" size={20} />
              )}
              {isSubscribed && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></span>
              )}
            </Link>
            
            {user ? (
              <>
                <span className="text-sm inline-flex items-center gap-1"><UserCircle2 size={18}/> <b>{user.displayName || user.email}</b></span>
                <button onClick={handleLogout} className="btn-primary inline-flex items-center gap-1"><LogOut size={16}/> Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn-primary">Login</Link>
                <Link to="/signup" className="btn-gold">Sign Up</Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
              <img src="https://4.bp.blogspot.com/-p24h1ji1l2U/WeTPZW9DjJI/AAAAAAAACJU/T5R70DpofkokjB3ovuqtwzHico-CHvPdwCLcBGAs/s1600/muru-2.jpg" alt="Ayyappa" className="h-8 w-8 rounded-full object-cover border-2 border-ayyappa-gold"/>
              <div>
                <div className="font-dev text-ayyappa-blue text-sm leading-3">स्वामीये शरणम्</div>
                <div className="font-bold text-ayyappa-orange text-xs -mt-0.5">Ayyappa Padi Pooja</div>
              </div>
            </Link>
            
            <div className="flex items-center gap-2">
              {/* Notification Bell */}
              <Link 
                to="/notifications" 
                className="relative p-2 rounded-xl hover:bg-yellow-100 transition-colors"
                title={isSubscribed ? "Notifications enabled" : "Notification settings"}
                onClick={() => setIsMenuOpen(false)}
              >
                {isSubscribed ? (
                  <Bell className="text-green-600" size={18} />
                ) : (
                  <BellOff className="text-gray-400" size={18} />
                )}
                {isSubscribed && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></span>
                )}
              </Link>
              
              {/* Hamburger Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-xl hover:bg-yellow-100 transition-colors"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="mt-3 bg-white/95 backdrop-blur rounded-xl border border-yellow-200 shadow-lg">
              <nav className="py-2">
                <NavLink to="/" className={mobileNavClass} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
                <NavLink to="/about" className={mobileNavClass} onClick={() => setIsMenuOpen(false)}>About</NavLink>
                <NavLink to="/poojas" className={mobileNavClass} onClick={() => setIsMenuOpen(false)}>Poojas</NavLink>
                {user && <NavLink to="/add" className={mobileNavClass} onClick={() => setIsMenuOpen(false)}><span className="inline-flex items-center gap-2"><PlusCircle size={18}/> Add Pooja</span></NavLink>}
                {user && <NavLink to="/my" className={mobileNavClass} onClick={() => setIsMenuOpen(false)}><span className="inline-flex items-center gap-2"><List size={18}/> My Poojas</span></NavLink>}
              </nav>
              
              <div className="border-t border-yellow-200 py-2">
                {user ? (
                  <div className="px-4 py-2">
                    <div className="text-sm text-gray-600 mb-3 flex items-center gap-2">
                      <UserCircle2 size={16}/>
                      <span><b>{user.displayName || user.email}</b></span>
                    </div>
                    <button 
                      onClick={handleLogout} 
                      className="w-full btn-primary inline-flex items-center justify-center gap-2"
                    >
                      <LogOut size={16}/> Logout
                    </button>
                  </div>
                ) : (
                  <div className="px-4 py-2 space-y-2">
                    <Link to="/login" className="block w-full btn-primary text-center" onClick={() => setIsMenuOpen(false)}>Login</Link>
                    <Link to="/signup" className="block w-full btn-gold text-center" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
