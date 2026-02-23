import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import AdminLayout from './layouts/AdminLayout';
import Home from './pages/public/Home';
import Discovery from './pages/public/Discovery';
import ProcedureDetail from './pages/public/ProcedureDetail';
import PatientResources from './pages/public/PatientResources';
import TrustAbout from './pages/public/TrustAbout';
import Contact from './pages/public/Contact';

// Admin Pages
import Dashboard from './pages/admin/Dashboard';
import Procedures from './pages/admin/Procedures';
import GalleryForm from './pages/admin/GalleryForm';
import Leads from './pages/admin/Leads';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="discovery" element={<Discovery />} />
          <Route path="procedure/:id" element={<ProcedureDetail />} />
          <Route path="resources" element={<PatientResources />} />
          <Route path="about" element={<TrustAbout />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="procedures" element={<Procedures />} />
          <Route path="gallery" element={<GalleryForm />} />
          <Route path="leads" element={<Leads />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
