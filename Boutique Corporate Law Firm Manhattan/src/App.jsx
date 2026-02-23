import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicLayout from './components/PublicLayout';
import AdminLayout from './components/AdminLayout';

// Client Pages
import HomePage from './pages/client/HomePage';
import PracticeAreasPage from './pages/client/PracticeAreasPage';
import PracticeDetail from './pages/client/PracticeDetail';
import InsightsPage from './pages/client/InsightsPage';
import AboutPage from './pages/client/AboutPage';
import ContactPage from './pages/client/ContactPage';

// Admin Pages
import DashboardPage from './pages/admin/DashboardPage';
import MattersTablePage from './pages/admin/MattersTablePage';
import EditorPage from './pages/admin/EditorPage';
import LeadsInboxPage from './pages/admin/LeadsInboxPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Client Side Routes */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="practice-areas" element={<PracticeAreasPage />} />
          <Route path="practice-detail" element={<PracticeDetail />} />
          <Route path="insights" element={<InsightsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>

        {/* Admin Side Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="matters" element={<MattersTablePage />} />
          <Route path="editor" element={<EditorPage />} />
          <Route path="leads" element={<LeadsInboxPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
