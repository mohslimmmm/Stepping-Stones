import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-ivory">
      <AdminSidebar />
      <div className="flex-grow flex flex-col h-screen overflow-hidden">
        {/* Top Header for Admin */}
        <header className="bg-white border-b border-slate-grey/20 px-8 py-4 flex justify-between items-center shadow-sm">
          <h1 className="font-header text-2xl text-slate-dark">Clinic Administration</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm font-body font-bold text-slate">Dr. Alistair Sterling</span>
            <div className="w-10 h-10 bg-slate-dark rounded-full overflow-hidden grayscale">
               <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=100" alt="Avatar" />
            </div>
          </div>
        </header>
        {/* Scrollable Content Area */}
        <main className="flex-grow overflow-auto p-8 bg-ivory-dark/30">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
