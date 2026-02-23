import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Discovery from './pages/Discovery';
import Details from './pages/Details';
import Insights from './pages/Insights';
import Trust from './pages/Trust';
import Contact from './pages/Contact';

// Admin
import AdminLayout from './components/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import ClientRoster from './pages/admin/ClientRoster';
import ReportForm from './pages/admin/ReportForm';
import LeadsInbox from './pages/admin/LeadsInbox';

function App() {
  return (
    <Router>
      <Routes>
        {/* Client Side */}
        <Route path="/" element={
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Home />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/services" element={
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Discovery />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/services/portfolio-management" element={
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Details />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/insights" element={
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Insights />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/trust" element={
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Trust />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/contact" element={
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Contact />
            </main>
            <Footer />
          </div>
        } />

        {/* Admin Side */}
        <Route path="/admin" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
        <Route path="/admin/clients" element={<AdminLayout><ClientRoster /></AdminLayout>} />
        <Route path="/admin/reports" element={<AdminLayout><ReportForm /></AdminLayout>} />
        <Route path="/admin/leads" element={<AdminLayout><LeadsInbox /></AdminLayout>} />
        
        {/* Fallback */}
        <Route path="*" element={
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Home />
            </main>
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
