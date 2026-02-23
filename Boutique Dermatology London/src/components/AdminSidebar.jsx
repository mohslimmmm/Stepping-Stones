import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, Edit, Inbox, ArrowLeft } from 'lucide-react';

const AdminSidebar = () => {
  const location = useLocation();

  const links = [
    { name: 'Dashboard', path: '/admin', icon: <LayoutDashboard size={20} /> },
    { name: 'Inventory & Services', path: '/admin/inventory', icon: <Package size={20} /> },
    { name: 'Edit / Add', path: '/admin/edit', icon: <Edit size={20} /> },
    { name: 'Leads Inbox', path: '/admin/leads', icon: <Inbox size={20} /> },
  ];

  return (
    <div className="w-64 bg-slate-dark text-ivory h-screen sticky top-0 flex flex-col pt-8 pb-4">
      <div className="px-6 mb-12">
        <h2 className="font-header text-xl tracking-widest text-ivory">CLINIC<br/><span className="text-sm opacity-80 font-body uppercase text-blush">Portal</span></h2>
      </div>
      
      <nav className="flex-1 flex flex-col gap-2 px-4">
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.name}
              to={link.path}
              className={`flex items-center gap-3 px-4 py-3 text-sm tracking-wide transition-colors ${
                isActive 
                  ? 'bg-slate text-ivory border-l-2 border-blush' 
                  : 'text-ivory opacity-60 hover:opacity-100 hover:bg-slate'
              }`}
            >
              {link.icon}
              {link.name}
            </Link>
          );
        })}
      </nav>
      
      <div className="px-6 mt-auto">
        <Link to="/" className="flex items-center gap-2 text-sm opacity-60 hover:text-blush hover:opacity-100 transition-colors">
          <ArrowLeft size={16} /> Back to Site
        </Link>
      </div>
    </div>
  );
};

export default AdminSidebar;
