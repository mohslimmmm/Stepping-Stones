import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Building2, Users, LogOut, Search } from 'lucide-react';

const AdminLayout = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Listings', path: '/admin/listings', icon: Building2 },
    { name: 'Leads', path: '/admin/leads', icon: Users },
  ];

  return (
    <div className="min-h-screen flex bg-alabaster">
      {/* Sidebar */}
      <aside className="w-64 bg-espresso text-alabaster flex flex-col fixed h-full z-20">
        <div className="p-6 border-b border-alabaster/10">
          <h1 className="font-serif text-xl text-alabaster">Sol y Mar</h1>
          <p className="text-olive text-xs tracking-widest uppercase mt-1">Admin Portal</p>
        </div>
        
        <nav className="flex-1 py-6">
          <ul className="space-y-2 px-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname.startsWith(item.path);
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-sm transition-colors ${isActive ? 'bg-navy text-alabaster' : 'text-alabaster/70 hover:bg-alabaster/5 hover:text-alabaster'}`}
                  >
                    <Icon size={18} />
                    <span className="text-sm font-medium">{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        
        <div className="p-4 border-t border-alabaster/10">
          <Link to="/" className="flex items-center space-x-3 px-4 py-3 text-alabaster/70 hover:text-alabaster transition-colors">
            <LogOut size={18} />
            <span className="text-sm">Sign Out</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 bg-alabaster min-h-screen">
        <header className="h-16 bg-white border-b border-olive/20 flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="flex items-center text-espresso/60 bg-alabaster px-3 py-1.5 rounded-sm border border-olive/20">
            <Search size={16} className="mr-2" />
            <input type="text" placeholder="Search off-market..." className="bg-transparent border-none outline-none text-sm w-64 placeholder-espresso/40" />
          </div>
          <div className="flex items-center space-x-4">
            <div className="h-8 w-8 rounded-full bg-navy text-alabaster flex items-center justify-center text-xs font-serif">MB</div>
            <span className="text-sm font-medium text-espresso">Mateo Broker</span>
          </div>
        </header>
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
