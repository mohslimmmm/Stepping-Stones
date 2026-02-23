import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AdminSidebar from './components/layout/AdminSidebar';

// Client Pages
import Home from './pages/client/Home';
import Fleet from './pages/client/Fleet';
import CarDetail from './pages/client/CarDetail';
import Lifestyle from './pages/client/Lifestyle';
import About from './pages/client/About';
import Contact from './pages/client/Contact';

// Admin Pages
import Dashboard from './pages/admin/Dashboard';
import FleetManager from './pages/admin/FleetManager';
import CarForm from './pages/admin/CarForm';
import LeadsInbox from './pages/admin/LeadsInbox';

const ClientLayout = ({ children }) => (
  <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
    <Navbar />
    <main style={{ flex: 1 }}>
      {children}
    </main>
    <Footer />
  </div>
);

const AdminLayout = ({ children }) => (
  <div style={{ minHeight: '100vh', display: 'flex' }}>
    <AdminSidebar />
    <main style={{ flex: 1, padding: '30px', background: '#0a0a0a', overflowY: 'auto' }}>
      {children}
    </main>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Client Routes */}
        <Route path="/" element={<ClientLayout><Home /></ClientLayout>} />
        <Route path="/fleet" element={<ClientLayout><Fleet /></ClientLayout>} />
        <Route path="/fleet/:id" element={<ClientLayout><CarDetail /></ClientLayout>} />
        <Route path="/lifestyle" element={<ClientLayout><Lifestyle /></ClientLayout>} />
        <Route path="/about" element={<ClientLayout><About /></ClientLayout>} />
        <Route path="/contact" element={<ClientLayout><Contact /></ClientLayout>} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout><Dashboard /></AdminLayout>} />
        <Route path="/admin/fleet" element={<AdminLayout><FleetManager /></AdminLayout>} />
        <Route path="/admin/fleet/new" element={<AdminLayout><CarForm /></AdminLayout>} />
        <Route path="/admin/leads" element={<AdminLayout><LeadsInbox /></AdminLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
