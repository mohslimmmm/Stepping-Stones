import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import AdminLayout from './layouts/AdminLayout';

// Public Pages
import Home from './pages/public/Home';
import Discovery from './pages/public/Discovery';
import TreatmentDetail from './pages/public/TreatmentDetail';
import LifestyleGuide from './pages/public/LifestyleGuide';
import About from './pages/public/About';
import Contact from './pages/public/Contact';

// Admin Pages
import Dashboard from './pages/admin/Dashboard';
import Treatments from './pages/admin/Treatments';
import Leads from './pages/admin/Leads';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes with Layout */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/treatments" element={<Discovery />} />
          <Route path="/treatments/:id" element={<TreatmentDetail />} />
          <Route path="/lifestyle" element={<LifestyleGuide />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Admin Routes with Layout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="treatments" element={<Treatments />} />
          <Route path="leads" element={<Leads />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
