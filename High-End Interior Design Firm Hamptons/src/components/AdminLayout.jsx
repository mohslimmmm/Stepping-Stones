import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Briefcase, Users, MessageSquare, LogOut, PlusCircle } from 'lucide-react';

const AdminLayout = () => {
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
    { icon: Briefcase, label: 'Project Table', path: '/admin/projects' },
    { icon: MessageSquare, label: 'Leads Inbox', path: '/admin/leads' },
  ];

  return (
    <div className="min-h-screen flex bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 bg-deep-grey text-white hidden md:flex flex-col">
        <div className="p-8 border-b border-white/10">
          <h2 className="text-xl font-serif tracking-widest">SL <span className="text-sand">STUDIO</span></h2>
        </div>
        
        <nav className="flex-grow py-8 px-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-8 transition-colors ${
                location.pathname === item.path ? 'bg-sand text-white' : 'hover:bg-white/5'
              }`}
            >
              <item.icon size={20} />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          ))}
          <Link
            to="/admin/projects/new"
            className="flex items-center space-x-3 px-4 py-3 rounded-8 hover:bg-white/5 transition-colors"
          >
            <PlusCircle size={20} />
            <span className="text-sm font-medium">Add Project</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-white/10">
          <Link to="/" className="flex items-center space-x-3 px-4 py-3 rounded-8 hover:bg-red-500/20 text-white/70 hover:text-red-400 transition-colors">
            <LogOut size={20} />
            <span className="text-sm font-medium">Exit Admin</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow flex flex-col overflow-hidden">
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8">
          <h1 className="text-lg font-semibold text-slate-800">
            {menuItems.find(m => m.path === location.pathname)?.label || 'Studio Admin'}
          </h1>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm font-semibold text-slate-800">Lula Henderson</p>
              <p className="text-[10px] uppercase tracking-wider text-slate-400">Principal Designer</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-sand flex items-center justify-center text-white font-serif">LH</div>
          </div>
        </header>

        <div className="flex-grow overflow-auto p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
