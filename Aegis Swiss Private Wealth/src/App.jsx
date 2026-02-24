import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';

// Client Pages
import Home from './pages/client/Home';
import Discovery from './pages/client/Discovery';
import ServiceDetail from './pages/client/ServiceDetail';
import Insights from './pages/client/Insights';
import TrustAbout from './pages/client/TrustAbout';
import Contact from './pages/client/Contact';

// Admin Pages
import Dashboard from './pages/admin/Dashboard';
import ClientRoster from './pages/admin/ClientRoster';
import ReportForm from './pages/admin/ReportForm';
import LeadsInbox from './pages/admin/LeadsInbox';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Client Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Discovery />} />
          <Route path="services/bespoke-portfolio" element={<ServiceDetail />} />
          <Route path="insights" element={<Insights />} />
          <Route path="trust" element={<TrustAbout />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="roster" element={<ClientRoster />} />
          <Route path="reports" element={<ReportForm />} />
          <Route path="leads" element={<LeadsInbox />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
