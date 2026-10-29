import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';

// Shared Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieConsentModal from './components/CookieConsentModal';
import NotificationModal from './components/NotificationModal';

// Admin Components
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';

// Pages Imports
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import TechnologyConsultancy from './pages/TechnologyConsultancy';
import Sustenance from './pages/Sustenance';
import Leasing from './pages/Leasing';
import ProjectManagement from './pages/ProjectManagement';
import MiscServices from './pages/MiscServices';
import SupplyChainSupport from './pages/SupplyChainSupport';
import Insights from './pages/Insights';
import InsightDetail from './pages/InsightDetail';
import Contact from './pages/Contact';
import VisitingCard from './pages/VisitingCard';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

// New SEO / Local / International Landing Pages
import AviationConsultantIndia from './pages/AviationConsultantIndia';
import CityLanding from './pages/CityLanding';
import InternationalLanding from './pages/InternationalLanding';
import AboutForAi from './pages/AboutForAi';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Protected Admin Route Handler
function AdminRouteWrapper() {
  const [adminUser, setAdminUser] = useState(() => {
    const token = localStorage.getItem('adminToken');
    const userStr = localStorage.getItem('adminUser');
    return token && userStr ? JSON.parse(userStr) : null;
  });

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    setAdminUser(null);
  };

  if (!adminUser) {
    return <AdminLogin onLoginSuccess={(user) => setAdminUser(user)} />;
  }

  return <AdminDashboard onLogout={handleLogout} />;
}

// Layout wrapper
function AppLayout() {
  const location = useLocation();
  const isVisitingCard = location.pathname === '/visiting-card';
  const isAdminPage = location.pathname === '/adminarvindllc';

  if (isAdminPage) {
    return <AdminRouteWrapper />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      {!isVisitingCard && <Navbar />}
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          
          {/* Services Routes */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/technology-consultancy" element={<TechnologyConsultancy />} />
          <Route path="/services/mro-sustenance" element={<Sustenance />} />
          <Route path="/services/leasing-consultancy" element={<Leasing />} />
          <Route path="/services/project-management" element={<ProjectManagement />} />
          <Route path="/services/supply-chain-support" element={<SupplyChainSupport />} />
          <Route path="/services/miscellaneous-services" element={<MiscServices />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />

          {/* National India Aviation Hub & Multi-City Landing Pages (Task 3) */}
          <Route path="/aviation-consultant" element={<Navigate to="/aviation-consultant-india" replace />} />
          <Route path="/aviation-consultant-india" element={<AviationConsultantIndia />} />
          <Route path="/aviation-consultant-delhi-ncr" element={<CityLanding citySlug="delhi-ncr" />} />
          <Route path="/aviation-consultant-mumbai" element={<CityLanding citySlug="mumbai" />} />
          <Route path="/aviation-consultant-bengaluru" element={<CityLanding citySlug="bengaluru" />} />
          <Route path="/aviation-consultant-hyderabad" element={<CityLanding citySlug="hyderabad" />} />
          <Route path="/aviation-consultant-chennai" element={<CityLanding citySlug="chennai" />} />
          <Route path="/aviation-consultant-kolkata" element={<CityLanding citySlug="kolkata" />} />
          <Route path="/aviation-consultant-pune" element={<CityLanding citySlug="pune" />} />
          <Route path="/aviation-consultant-ahmedabad" element={<CityLanding citySlug="ahmedabad" />} />

          {/* International Target Markets (Task 4) */}
          <Route path="/aviation-consultant-uae" element={<InternationalLanding regionSlug="uae" />} />
          <Route path="/aviation-consultant-singapore" element={<InternationalLanding regionSlug="singapore" />} />
          <Route path="/aviation-consultant-united-kingdom" element={<InternationalLanding regionSlug="united-kingdom" />} />
          <Route path="/aviation-consultant-usa" element={<InternationalLanding regionSlug="usa" />} />

          {/* Machine-Readable AI Summary Page (Task 6) */}
          <Route path="/about-for-ai" element={<AboutForAi />} />

          {/* Insights / Blog Routes (Task 6) */}
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<InsightDetail />} />
          <Route path="/blog" element={<Navigate to="/insights" replace />} />
          <Route path="/blog/:slug" element={<Navigate to="/insights/:slug" replace />} />

          {/* Graceful redirects for removed services & legacy verticals */}
          <Route path="/services/acquisition-process" element={<Navigate to="/services" replace />} />
          <Route path="/services/capital-acquisitions" element={<Navigate to="/services" replace />} />
          <Route path="/services/it-networking" element={<Navigate to="/services" replace />} />
          <Route path="/services/end-to-end-assistance" element={<Navigate to="/services" replace />} />
          <Route path="/verticals" element={<Navigate to="/services" replace />} />
          <Route path="/verticals/*" element={<Navigate to="/services" replace />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/visiting-card" element={<VisitingCard />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />

          {/* Hidden Admin Login & Control Panel Route */}
          <Route path="/adminarvindllc" element={<AdminRouteWrapper />} />

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {!isVisitingCard && <Footer />}

      {/* Global Active Announcement Modal */}
      <NotificationModal />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppLayout />
    </Router>
  );
}
