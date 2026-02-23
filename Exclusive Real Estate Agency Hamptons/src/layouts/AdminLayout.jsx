import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Building2, Edit3, Users, LogOut, Anchor } from 'lucide-react';
import { motion } from 'framer-motion';

export const AdminLayout = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { name: 'Listings', path: '/admin/listings', icon: Building2 },
    { name: 'Add Property', path: '/admin/edit', icon: Edit3 },
    { name: 'Leads Inbox', path: '/admin/leads', icon: Users },
  ];

  return (
    <div className="flex h-screen bg-background font-body overflow-hidden">
      
      {/* Sidebar */}
      <motion.aside 
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-72 bg-primary text-background flex flex-col hidden md:flex border-r border-primary/10 shadow-2xl relative z-20"
      >
        <div className="h-24 flex items-center px-8 bg-primary border-b border-background/10">
          <Link to="/" className="flex items-center gap-3 hover:text-accentBlue transition-colors group">
            <Anchor className="h-5 w-5 transform group-hover:-rotate-12 transition-transform duration-500" strokeWidth={1.5} />
            <span className="font-heading text-xl tracking-wide">Broker Portal</span>
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
                className={`flex items-center gap-4 px-6 py-4 transition-all duration-300 relative group ${
                  isActive ? 'text-background' : 'text-background/50 hover:text-background'
                }`}
              >
                {isActive && (
                  <motion.div 
                    layoutId="adminNavIndicator"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-accentBlue"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {/* Hover overlay */}
                <div className={`absolute inset-0 bg-background/5 opacity-0 group-hover:opacity-100 transition-opacity ${isActive ? 'bg-background/10 opacity-100' : ''}`}></div>
                <Icon className="h-4 w-4 relative z-10" strokeWidth={1.5} />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] relative z-10">{item.name}</span>
              </Link>
            );
          })}
        </nav>
        
        <div className="p-8 border-t border-background/10">
          <div className="flex items-center gap-4 text-background/50 hover:text-accentBlue cursor-pointer transition-colors group">
            <LogOut className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" strokeWidth={1.5} />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Secure Sign Out</span>
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden bg-[#F8F9FA]">
        {/* Topbar */}
        <motion.header 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-24 bg-white border-b border-primary/5 flex items-center justify-between px-10 shadow-sm relative z-10"
        >
          <h2 className="font-heading text-2xl text-primary tracking-wide">Private Workspace</h2>
          <div className="flex items-center gap-4">
            <div className="text-right mr-2">
              <p className="text-sm font-heading text-primary leading-tight">Alexander Sterling</p>
              <p className="text-[10px] font-body text-primary/50 uppercase tracking-[0.2em] font-bold">Managing Director</p>
            </div>
            <div className="h-10 w-10 bg-primary flex items-center justify-center text-background font-heading text-sm shadow-inner cursor-pointer hover:bg-accentBlue transition-colors">
              AS
            </div>
          </div>
        </motion.header>

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </main>
      </div>
    </div>
  );
};
