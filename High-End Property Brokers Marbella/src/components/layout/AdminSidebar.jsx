import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Home, PlusCircle, Inbox, ArrowLeft } from 'lucide-react';

const AdminSidebar = () => {
  const location = useLocation();

  const links = [
    { name: 'Dashboard', path: '/admin', icon: <LayoutDashboard size={20} /> },
    { name: 'Listings', path: '/admin/listings', icon: <Home size={20} /> },
    { name: 'Add Mandate', path: '/admin/edit', icon: <PlusCircle size={20} /> },
    { name: 'Leads CRM', path: '/admin/leads', icon: <Inbox size={20} /> },
  ];

  return (
    <div className="w-64 bg-dark-slate text-warm-white h-screen sticky top-0 flex flex-col pt-8 pb-4 shadow-xl z-10">
      <div className="px-6 mb-12">
        <h2 className="text-xl font-header leading-none">
          Sol y Mar<br/><span className="text-xs tracking-widest text-gold uppercase font-body font-bold">Broker Portal</span>
        </h2>
      </div>
      
      <nav className="flex-1 flex flex-col gap-2 px-4">
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.name}
              to={link.path}
              className={`flex items-center gap-3 px-4 py-3 text-sm font-bold tracking-wide transition-all rounded ${
                isActive 
                  ? 'bg-terracotta text-white shadow-soft' 
                  : 'text-warm-white opacity-70 hover:opacity-100 hover:bg-white/10'
              }`}
            >
              {link.icon}
              {link.name}
            </Link>
          );
        })}
      </nav>
      
      <div className="px-6 mt-auto pt-6 border-t border-white/10">
        <Link to="/" className="flex items-center gap-2 text-sm font-bold opacity-70 hover:text-gold hover:opacity-100 transition-colors">
          <ArrowLeft size={16} /> Back to Website
        </Link>
      </div>
    </div>
  );
};

export default AdminSidebar;
