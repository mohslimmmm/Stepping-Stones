import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Discovery from './pages/Discovery';
import ProjectDetail from './pages/ProjectDetail';
import Lifestyle from './pages/Lifestyle';
import About from './pages/About';
import Contact from './pages/Contact';

// Admin Imports
import AdminDashboard from './admin/Dashboard';
import AdminProjects from './admin/Projects';
import AdminProjectForm from './admin/ProjectForm';
import AdminLeads from './admin/Leads';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/discovery" element={<Discovery />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/lifestyle" element={<Lifestyle />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/projects" element={<AdminProjects />} />
            <Route path="/admin/projects/new" element={<AdminProjectForm />} />
            <Route path="/admin/projects/edit/:id" element={<AdminProjectForm />} />
            <Route path="/admin/leads" element={<AdminLeads />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
