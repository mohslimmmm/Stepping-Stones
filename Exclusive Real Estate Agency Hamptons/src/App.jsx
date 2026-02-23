import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import { ClientLayout } from './layouts/ClientLayout';
import { AdminLayout } from './layouts/AdminLayout';

import { Home } from './pages/Home';
import { Discovery } from './pages/Discovery';
import { PropertyDetail } from './pages/PropertyDetail';
import { Lifestyle } from './pages/Lifestyle';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

import { Dashboard } from './pages/admin/Dashboard';
import { ListingsTable } from './pages/admin/ListingsTable';
import { EditForm } from './pages/admin/EditForm';
import { LeadsInbox } from './pages/admin/LeadsInbox';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Client Routes */}
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="discovery" element={<Discovery />} />
          <Route path="property/:id" element={<PropertyDetail />} />
          <Route path="lifestyle" element={<Lifestyle />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="listings" element={<ListingsTable />} />
          <Route path="edit" element={<EditForm />} />
          <Route path="leads" element={<LeadsInbox />} />
        </Route>
        
        {/* Standalone Route for Login (Optional placeholder) */}
        <Route path="/admin/login" element={
          <div className="min-h-screen bg-background flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
              <h2 className="font-heading text-4xl text-primary font-bold">Broker Portal</h2>
              <p className="mt-2 text-primary/70 font-body">Sign in to your account</p>
              <div className="mt-8 bg-white py-8 px-4 shadow-xl sm:rounded-none sm:px-10 border border-primary/10">
                <form className="space-y-6" action="/admin">
                  <div>
                    <label className="block text-sm font-body text-primary text-left">Email address</label>
                    <input type="email" required className="mt-1 block w-full border border-gray-300 px-3 py-2 shadow-sm focus:border-accentBlue focus:outline-none focus:ring-accentBlue sm:text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-body text-primary text-left">Password</label>
                    <input type="password" required className="mt-1 block w-full border border-gray-300 px-3 py-2 shadow-sm focus:border-accentBlue focus:outline-none focus:ring-accentBlue sm:text-sm" />
                  </div>
                  <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-none shadow-sm text-sm font-medium text-white bg-primary hover:bg-accentBlue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accentBlue transition-colors">
                    Sign in
                  </button>
                </form>
              </div>
            </div>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
