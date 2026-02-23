import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Client Pages
import Home from './pages/Home';
import Discovery from './pages/Discovery';
import DetailTemplate from './pages/DetailTemplate';
import Journal from './pages/Journal';
import About from './pages/About';
import Contact from './pages/Contact';

// Admin Components
import AdminLayout from './components/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import Inventory from './pages/admin/Inventory';
import EditForm from './pages/admin/EditForm';
import LeadsInbox from './pages/admin/LeadsInbox';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-ivory text-slate">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Client Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/discovery" element={<Discovery />} />
            <Route path="/treatment/:id" element={<DetailTemplate />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="inventory" element={<Inventory />} />
              <Route path="edit" element={<EditForm />} />
              <Route path="leads" element={<LeadsInbox />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
