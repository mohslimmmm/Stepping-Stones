import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/ProjectDetail';
import Journal from './pages/Journal';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './admin/Dashboard';
import ProjectTable from './admin/ProjectTable';
import ProjectForm from './admin/ProjectForm';
import LeadsInbox from './admin/LeadsInbox';
import Layout from './components/Layout';
import AdminLayout from './components/AdminLayout';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="project/:id" element={<ProjectDetail />} />
          <Route path="journal" element={<Journal />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="projects" element={<ProjectTable />} />
          <Route path="projects/new" element={<ProjectForm />} />
          <Route path="projects/edit/:id" element={<ProjectForm />} />
          <Route path="leads" element={<LeadsInbox />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
