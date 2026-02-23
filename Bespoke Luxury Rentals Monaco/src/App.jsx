import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import RootLayout from './layouts/RootLayout';
import AdminLayout from './layouts/AdminLayout';

// Public Pages
import Home from './pages/Home';
import Discovery from './pages/Discovery';
import PropertyDetail from './pages/PropertyDetail';
import Lifestyle from './pages/Lifestyle';
import Trust from './pages/Trust';
import Contact from './pages/Contact';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminProperties from './pages/admin/AdminProperties';
import AdminEdit from './pages/admin/AdminEdit';
import AdminLeads from './pages/admin/AdminLeads';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes with Root Layout */}
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/discovery" element={<Discovery />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/lifestyle" element={<Lifestyle />} />
          <Route path="/trust" element={<Trust />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Admin Routes with Admin Layout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="properties" element={<AdminProperties />} />
          <Route path="properties/edit/:id" element={<AdminEdit />} />
          <Route path="properties/new" element={<AdminEdit />} />
          <Route path="leads" element={<AdminLeads />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
