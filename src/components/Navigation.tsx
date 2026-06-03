import { NavLink } from 'react-router-dom';
import { Map, MapPin, Send } from 'lucide-react';

export default function Navigation() {
  const navItems = [
    { name: 'The Problem', path: '/', icon: <Map className="w-4 h-4 mr-2" /> },
    { name: 'Power Check', path: '/check-zip', icon: <MapPin className="w-4 h-4 mr-2" /> },
    { name: 'Make the Shift', path: '/pledge', icon: <Send className="w-4 h-4 mr-2" /> },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-slate-900 border-b border-slate-800 text-slate-100">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row h-auto md:h-16 items-center justify-between py-4 md:py-0">
          <div className="flex items-center gap-2 font-black text-2xl tracking-tighter text-blue-500 mb-4 md:mb-0">
            <span className="text-white">Vote</span>Shift.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-1 md:gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-900/20'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`
                }
              >
                {item.icon}
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
