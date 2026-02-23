import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home, Discovery, Detail, Insights, About, Contact, AdminDashboard, AdminRoster, AdminEdit, AdminLeads } from './pages';
import Header from './components/Header';
import Footer from './components/Footer';
import AdminLayout from './components/AdminLayout';

import { Outlet } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="discovery" element={<Discovery />} />
          <Route path="detail" element={<Detail />} />
          <Route path="insights" element={<Insights />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="roster" element={<AdminRoster />} />
          <Route path="edit" element={<AdminEdit />} />
          <Route path="leads" element={<AdminLeads />} />
        </Route>
      </Routes>
    </Router>
  );
}

const PublicLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
