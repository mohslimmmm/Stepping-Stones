import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-warm-white">
      <AdminSidebar />
      <div className="flex-grow flex flex-col h-screen overflow-hidden">
        <header className="bg-white border-b border-dark-slate/10 px-8 py-5 flex justify-between items-center shadow-sm shrink-0">
          <h1 className="text-2xl font-header text-dark-slate">Broker Portal Overview</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold tracking-widest uppercase text-terracotta">Isabella Silva</span>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-terracotta bg-warm-white-dark">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100" alt="Agent Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>
        <main className="flex-grow overflow-auto p-8 bg-warm-white-dark/30">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
