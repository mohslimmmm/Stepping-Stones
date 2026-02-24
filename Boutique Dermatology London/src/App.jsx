import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ClientLayout from './layouts/ClientLayout';
import AdminLayout from './layouts/AdminLayout';

// Client Pages
import Home from './pages/client/Home';
import Discovery from './pages/client/Discovery';
import Detail from './pages/client/Detail';
import SkinJournal from './pages/client/SkinJournal';
import TrustAbout from './pages/client/TrustAbout';
import Contact from './pages/client/Contact';

// Admin Pages
import Dashboard from './pages/admin/Dashboard';
import Inventory from './pages/admin/Inventory';
import EditForm from './pages/admin/EditForm';
import LeadsInbox from './pages/admin/LeadsInbox';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="discovery" element={<Discovery />} />
          <Route path="treatment/:id" element={<Detail />} />
          <Route path="journal" element={<SkinJournal />} />
          <Route path="trust" element={<TrustAbout />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="edit/:id?" element={<EditForm />} />
          <Route path="leads" element={<LeadsInbox />} />
        </Route>
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
