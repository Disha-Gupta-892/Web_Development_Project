import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import { User, AuthState } from './types';
import { getSession, mockLogout } from './services/mockBackend';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'login' | 'dashboard' | 'register'>('home');
  const [auth, setAuth] = useState<AuthState>({
    isAuthenticated: false,
    currentUser: null,
  });

  useEffect(() => {
    // Check for existing session on mount
    const user = getSession();
    if (user) {
      setAuth({ isAuthenticated: true, currentUser: user });
    }
  }, []);

  const handleLoginSuccess = (user: User) => {
    setAuth({ isAuthenticated: true, currentUser: user });
    setView('dashboard');
  };

  const handleLogout = async () => {
    await mockLogout();
    setAuth({ isAuthenticated: false, currentUser: null });
    setView('home');
  };

  const renderView = () => {
    switch (view) {
      case 'home':
        return <Hero onJoinClick={() => setView(auth.isAuthenticated ? 'dashboard' : 'register')} />;
      case 'login':
        return <Login onLoginSuccess={handleLoginSuccess} onSwitchToRegister={() => setView('register')} />;
      case 'register':
        return <Register onRegisterSuccess={handleLoginSuccess} onSwitchToLogin={() => setView('login')} />;
      case 'dashboard':
        return auth.currentUser ? <Dashboard user={auth.currentUser} /> : <Login onLoginSuccess={handleLoginSuccess} onSwitchToRegister={() => setView('register')} />;
      default:
        return <Hero onJoinClick={() => setView('register')} />;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col">
      <Navbar 
        user={auth.currentUser} 
        onLogout={handleLogout} 
        setView={setView}
        currentView={view}
      />
      <main className="flex-grow">
        {renderView()}
      </main>
      <footer className="py-8 bg-zinc-900 text-center text-zinc-500 text-sm border-t border-zinc-800">
        <p>© {new Date().getFullYear()} Elite Fitness Club. All rights reserved.</p>
        <p className="mt-2 text-xs">Simulated Backend Demo | React + Tailwind + Gemini AI</p>
      </footer>
    </div>
  );
};

export default App;