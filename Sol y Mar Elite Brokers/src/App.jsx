import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import ClientLayout from './components/layout/ClientLayout';
import AdminLayout from './components/layout/AdminLayout';

// Client Pages
import Home from './pages/client/Home';
import Collection from './pages/client/Collection';
import PropertyDetail from './pages/client/PropertyDetail';
import Journal from './pages/client/Journal';
import Atelier from './pages/client/Atelier';
import Contact from './pages/client/Contact';

// Admin Pages
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import Listings from './pages/admin/Listings';
import LeadsInbox from './pages/admin/LeadsInbox';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Client Routes */}
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="collection" element={<Collection />} />
          <Route path="property/:id" element={<PropertyDetail />} />
          <Route path="journal" element={<Journal />} />
          <Route path="atelier" element={<Atelier />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="listings" element={<Listings />} />
          <Route path="leads" element={<LeadsInbox />} />
        </Route>

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
