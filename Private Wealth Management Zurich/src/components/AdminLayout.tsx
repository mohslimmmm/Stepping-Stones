import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, FileUp, Inbox, Shield, LogOut, Bell } from 'lucide-react';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const menuItems = [
    { name: 'Analytics', icon: <LayoutDashboard size={20} />, path: '/admin' },
    { name: 'Client Roster', icon: <Users size={20} />, path: '/admin/clients' },
    { name: 'Secure Reports', icon: <FileUp size={20} />, path: '/admin/reports' },
    { name: 'Leads Inbox', icon: <Inbox size={20} />, path: '/admin/leads' },
  ];

  return (
    <div className="min-h-screen bg-[#000a12] text-white flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 flex flex-col pt-8">
        <div className="px-8 mb-12 flex items-center gap-3">
          <Shield className="text-silver" />
          <span className="text-sm tracking-[0.3em] uppercase font-bold text-silver">Aegis Admin</span>
        </div>

        <nav className="flex-grow px-4 space-y-2">
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              className={`flex items-center gap-4 px-4 py-3 rounded-[4px] text-xs tracking-widest uppercase transition-all ${
                location.pathname === item.path ? 'bg-deep-indigo text-white shadow-lg' : 'text-silver/50 hover:bg-white/5 hover:text-white'
              }`}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="p-8 border-t border-white/5">
           <Link to="/" className="flex items-center gap-4 text-xs tracking-widest uppercase text-silver/50 hover:text-white">
              <LogOut size={16} />
              Exit Portal
           </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow flex flex-col">
        {/* Header */}
        <header className="h-20 border-b border-white/5 flex items-center justify-between px-10">
           <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-[10px] tracking-widest uppercase text-silver/30 font-bold">Secure Session Active</span>
           </div>
           <div className="flex items-center gap-8">
              <div className="relative">
                 <Bell size={18} className="text-silver/50" />
                 <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-red-500 rounded-full"></div>
              </div>
              <div className="flex items-center gap-3">
                 <div className="text-right">
                    <p className="text-[10px] tracking-widest uppercase font-bold">RM. Hoffmann</p>
                    <p className="text-[8px] text-silver/30 uppercase">Senior Relation Manager</p>
                 </div>
                 <div className="w-8 h-8 rounded-full bg-deep-indigo flex items-center justify-center text-[10px] font-bold">BH</div>
              </div>
           </div>
        </header>

        <div className="p-10">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
