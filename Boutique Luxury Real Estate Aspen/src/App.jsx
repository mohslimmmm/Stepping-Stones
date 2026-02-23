import { BrowserRouter as Router, Routes, Route, Outlet, Link } from 'react-router-dom';
import { LayoutDashboard, List, PlusSquare, Inbox, Menu, X, ArrowRight } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Discovery from './pages/Discovery';
import PropertyDetail from './pages/PropertyDetail';
import LifestyleGuide from './pages/LifestyleGuide';
import TrustAbout from './pages/TrustAbout';
import Contact from './pages/Contact';

// Admin imports
import AdminDashboard from './pages/admin/AdminDashboard';
import ListingsTable from './pages/admin/ListingsTable';
import EditAddForm from './pages/admin/EditAddForm';
import LeadsInbox from './pages/admin/LeadsInbox';

import './App.css';

// --- Layouts ---
const MainLayout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="layout-main">
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <Link to="/" className="brand">Altitude Alpine</Link>
          
          <nav className="nav-links desktop-only">
            <Link to="/discovery">Discovery</Link>
            <Link to="/lifestyle">Lifestyle</Link>
            <Link to="/about">Trust & About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          
          <div className="nav-actions desktop-only">
            <Link to="/contact" className="btn-primary">Schedule Showing</Link>
          </div>

          <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {mobileMenuOpen && (
          <div className="mobile-nav">
             <Link to="/discovery" onClick={() => setMobileMenuOpen(false)}>Discovery</Link>
             <Link to="/lifestyle" onClick={() => setMobileMenuOpen(false)}>Lifestyle</Link>
             <Link to="/about" onClick={() => setMobileMenuOpen(false)}>Trust & About</Link>
             <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
             <Link to="/admin" onClick={() => setMobileMenuOpen(false)}>Broker Portal</Link>
          </div>
        )}
      </header>

      <main className="main-content fade-in-up">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-brand">
            <h2>Altitude Alpine</h2>
            <p>Boutique luxury real estate in Aspen.</p>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h3>Explore</h3>
              <Link to="/discovery">Properties</Link>
              <Link to="/lifestyle">Lifestyle</Link>
            </div>
            <div className="link-group">
              <h3>Company</h3>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="link-group">
              <h3>Legal</h3>
              <Link to="#">Privacy Policy</Link>
              <Link to="/admin" className="broker-portal-link">Broker Portal <ArrowRight size={14} /></Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const AdminLayout = () => {
  return (
    <div className="layout-admin">
      <aside className="admin-sidebar">
        <div className="admin-brand">Altitude Admin</div>
        <nav className="admin-nav">
          <Link to="/admin" className="admin-nav-item"><LayoutDashboard size={20} /> Dashboard</Link>
          <Link to="/admin/listings" className="admin-nav-item"><List size={20} /> Listings</Link>
          <Link to="/admin/edit" className="admin-nav-item"><PlusSquare size={20} /> Add Property</Link>
          <Link to="/admin/leads" className="admin-nav-item"><Inbox size={20} /> Leads Inbox</Link>
        </nav>
        <div className="admin-sidebar-footer">
          <Link to="/" className="btn-secondary" style={{width: '100%', borderColor: 'rgba(255,255,255,0.2)', color: '#fff'}}>View Site</Link>
        </div>
      </aside>
      <main className="admin-main">
        <header className="admin-header">
          <div className="admin-header-title">Broker Portal</div>
          <div className="admin-user">J. Doe</div>
        </header>
        <div className="admin-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

// --- App Component ---
function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="discovery" element={<Discovery />} />
          <Route path="property/:id" element={<PropertyDetail />} />
          <Route path="lifestyle" element={<LifestyleGuide />} />
          <Route path="about" element={<TrustAbout />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="listings" element={<ListingsTable />} />
          <Route path="edit" element={<EditAddForm />} />
          <Route path="edit/:id" element={<EditAddForm />} />
          <Route path="leads" element={<LeadsInbox />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
