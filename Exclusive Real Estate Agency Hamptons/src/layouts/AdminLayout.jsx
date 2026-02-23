import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Building2, Edit3, Users, LogOut, Anchor } from 'lucide-react';

export const AdminLayout = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { name: 'Listings', path: '/admin/listings', icon: Building2 },
    { name: 'Add Property', path: '/admin/edit', icon: Edit3 },
    { name: 'Leads Inbox', path: '/admin/leads', icon: Users },
  ];

  return (
    <div className="flex h-screen bg-gray-50 font-body">
      
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-white flex flex-col hidden md:flex">
        <div className="h-16 flex items-center px-6 bg-primary border-b border-accentBlue/30">
          <Link to="/" className="flex items-center gap-2 hover:text-accentGreen transition-colors">
            <Anchor className="h-5 w-5" />
            <span className="font-heading text-lg font-bold">Admin Portal</span>
          </Link>
        </div>
        
        <nav className="flex-1 px-4 py-8 flex flex-col gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path || (item.path !== '/admin' && location.pathname.startsWith(item.path));
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-none transition-colors ${
                  isActive ? 'bg-accentBlue text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="text-sm uppercase tracking-wider">{item.name}</span>
              </Link>
            );
          })}
        </nav>
        
        <div className="p-4 border-t border-accentBlue/30">
          <div className="flex items-center gap-3 px-4 py-3 text-white/70 hover:text-white hover:bg-white/10 cursor-pointer transition-colors">
            <LogOut className="h-5 w-5" />
            <span className="text-sm uppercase tracking-wider">Sign Out</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
          <h2 className="font-heading text-xl text-primary">Broker Workspace</h2>
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 bg-accentBlue flex items-center justify-center text-white font-heading text-sm font-bold">
              AS
            </div>
            <span className="text-sm text-primary/80 font-medium">Alexander Sterling</span>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
