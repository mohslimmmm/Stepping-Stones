import { Outlet, Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { 
  LayoutDashboard, 
  Package, 
  Inbox, 
  LogOut,
  Settings,
  Bell
} from 'lucide-react';

export default function AdminLayout() {
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Inventory & Services', href: '/admin/inventory', icon: Package },
    { name: 'Leads Inbox', href: '/admin/leads', icon: Inbox },
  ];

  const currentPath = location.pathname;

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      {/* Sidebar */}
      <aside className="w-64 bg-foreground shadow-2xl flex-shrink-0 flex flex-col hidden md:flex">
        <div className="h-20 flex items-center px-6 border-b border-background/20">
          <Link to="/admin" className="font-serif text-xl tracking-widest uppercase text-background">
            Clinic Portal
          </Link>
        </div>

        <nav className="flex-1 py-8 px-4 space-y-2">
          {navigation.map((item) => {
            const isActive = currentPath === item.href || (item.href !== '/admin' && currentPath.startsWith(item.href));
            return (
              <Link
                key={item.name}
                to={item.href}
                className={clsx(
                  'flex items-center px-4 py-3 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary text-background'
                    : 'text-background/70 hover:bg-background/10 hover:text-background'
                )}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-background/20">
          <Link 
            to="/" 
            className="flex items-center px-4 py-3 text-sm font-medium text-background/70 hover:text-background transition-colors"
          >
            <LogOut className="mr-3 h-5 w-5" />
            Exit Portal
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden bg-background/50">
        {/* Top Header */}
        <header className="h-20 bg-background border-b border-foreground/10 flex items-center justify-between px-8 shadow-sm">
          <h1 className="text-xl font-serif text-foreground/80 tracking-wide">
            {navigation.find(n => n.href === currentPath)?.name || 'Admin Management'}
          </h1>
          <div className="flex items-center space-x-6">
            <button className="text-foreground/50 hover:text-primary transition-colors">
              <Bell className="h-5 w-5" />
            </button>
            <button className="text-foreground/50 hover:text-primary transition-colors">
              <Settings className="h-5 w-5" />
            </button>
            <div className="h-8 w-8 bg-primary/20 text-primary flex items-center justify-center font-serif text-sm">
              DR
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
