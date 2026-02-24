import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AdminSidebar from './components/layout/AdminSidebar';

// Client Pages
import Home from './pages/client/Home';
import Discovery from './pages/client/Discovery';
import DetailTemplate from './pages/client/DetailTemplate';
import LifestyleInfo from './pages/client/LifestyleInfo';
import About from './pages/client/About';
import Contact from './pages/client/Contact';

// Admin Pages
import Dashboard from './pages/admin/Dashboard';
import Inventory from './pages/admin/Inventory';
import EditForm from './pages/admin/EditForm';
import LeadsInbox from './pages/admin/LeadsInbox';

const ClientLayout = ({ children }) => (
  <div className="min-h-screen flex flex-col bg-warm-white text-dark-slate">
    <Navbar />
    <main className="flex-grow relative">
      {children}
    </main>
    <Footer />
  </div>
);

const AdminLayout = ({ children }) => (
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
        {children}
      </main>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Client Routes */}
        <Route path="/" element={<ClientLayout><Home /></ClientLayout>} />
        <Route path="/discovery" element={<ClientLayout><Discovery /></ClientLayout>} />
        <Route path="/listing/:id" element={<ClientLayout><DetailTemplate /></ClientLayout>} />
        <Route path="/lifestyle" element={<ClientLayout><Lifestyle /></ClientLayout>} />
        <Route path="/about" element={<ClientLayout><About /></ClientLayout>} />
        <Route path="/contact" element={<ClientLayout><Contact /></ClientLayout>} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout><Dashboard /></AdminLayout>} />
        <Route path="/admin/listings" element={<AdminLayout><Inventory /></AdminLayout>} />
        <Route path="/admin/edit" element={<AdminLayout><EditForm /></AdminLayout>} />
        <Route path="/admin/leads" element={<AdminLayout><LeadsInbox /></AdminLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
