import React, { useState, useEffect } from 'react';
import {
  Sliders,
  Image as ImageIcon,
  Users,
  Briefcase,
  BookOpen,
  Info,
  Shield,
  MapPin,
  Mail,
  BellRing,
  LogOut,
  Plus,
  Trash2,
  Edit2,
  Save,
  Check,
  RefreshCw,
  Eye,
  CheckCircle,
  AlertCircle,
  Upload,
  ExternalLink,
  Phone,
  Layers,
  Sparkles,
  ArrowRight,
  Send,
  X,
  FileText,
  Calendar,
  Tag,
  Clock,
  Compass,
  HelpCircle,
} from 'lucide-react';
import api from '../../utils/api';

export default function AdminDashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState('site-content');
  const [saving, setSaving] = useState(false);
  const [feedback, setFeedback] = useState({ message: '', type: '' });

  // 1. Site Content & Contact Info State
  const [siteContent, setSiteContent] = useState({
    header: {
      logoText: 'Labradorite Motto',
      logoSubtext: 'Strategic Solutions & Advisory',
      logoUrl: '',
      contactNumber: '+91-9866865141',
      contactPhone2: '+91-9667710141',
      whatsapp: '+91 9667710141',
      contactEmail: '9866865141as@labradorite.co.in',
      contactEmail2: '9866865141as@gmail.com',
      marqueeItems: [
        'INDIAN AIR FORCE VETERAN-LED',
        'DEFENCE ACQUISITION & TECHNOLOGY CONSULTANCY',
        'DAP 2020 & DPM ADVISORY',
        'MRO & SUSTENANCE',
        'SUPPLY CHAIN RESILIENCE',
        'AATMANIRBHAR BHARAT ALIGNED',
        'NOIDA & NEW DELHI',
        'STRATEGIC LIFECYCLE ADVISORY',
      ],
    },
    footer: {
      address:
        'FLAT NO 701 Block K Homes 121, Noida Sector 121 PLOT NO GH 01, Noida, Gautam Buddha Nagar, Uttar Pradesh - 201307',
      email: '9866865141as@labradorite.co.in',
      email2: '9866865141as@gmail.com',
      phone: '+91-9866865141',
      phone2: '+91-9667710141',
      whatsapp: '+91 9667710141',
      copyrightText: '© 2026 Labradorite Consultancy & Services LLP. All rights reserved.',
      aboutSummary:
        'A specialized Defence Acquisition & Technology consultancy team founded around the professional experience of Indian Air Force veterans. Sharing knowledge, experience, and building trust to drive better defence business.',
      companyDetails: {
        name: 'LABRADORITE CONSULTANCY AND SERVICES LLP',
        registrationDate: '19 Jan 2024',
        llpin: 'ACF-0228',
        pan: 'AALFL3126B',
        tan: 'MRTL02978D',
        gst: '09AALFL3126B1ZL',
      },
      backgroundImage: '/images/iaf-fighter-jets-tarmac.jpg',
      socialLinks: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
        youtube: 'https://youtube.com',
      },
    },
    about: {
      heroTag: 'BUILT ON EXPERIENCE. DRIVEN BY INTEGRITY.',
      headline: "Indian Air Force Veteran & Professional Expertise for India's Defence Ecosystem.",
      story1:
        'We are a team brought together by an Indian Housewife and independent Entrepreneur to form an Acquisition & Technology Consultancy team of Indian Air Force Veterans, harnessing years of professional experience, dedication, and integrity towards the vision of Aatmanirbhar Bharat.',
      story2:
        'We share professional acumen and deep domain knowledge to bring together Startups, MSMEs, Indian defence entities, and foreign technology companies to build long-term, high-value business in the Indian defence sector.',
      clientBeliefQuote:
        'Our Belief is sharing professional knowledge, experience and building trust builds better business.',
      closingStatement:
        'We as Defence consultants carry on the business of providing Defence Acquisition and Technology consultancy services to Defence Acquisition entities and companies in or outside India to successfully start your defence acquisition business and grow.',
      image: '/images/service-pmg.jpg',
      objectiveSections: [
        {
          heading: 'Aatmanirbhar Bharat Alignment',
          content: 'Aligning domestic defense initiatives with national indigenisation goals and Make in India frameworks.',
        },
        {
          heading: 'Modernization Roadmap',
          content: 'Translating Ministry of Defence long-term perspective plans into actionable capability milestones.',
        },
        {
          heading: 'Indigenous Ecosystem Advisory',
          content: 'Structuring collaboration across DRDO programs, defence corridors, and private tier manufacturers.',
        },
        {
          heading: 'Policy & Space Integration',
          content: 'Navigating DAP 2020 compliance, offset fulfillment, and cross-sector aerospace & space synergies.',
        },
        {
          heading: 'Strategic Technology Partnerships',
          content: 'Facilitating structured Transfer of Technology (TOT) and joint ventures between Indian entities and global OEMs.',
        },
        {
          heading: 'MRO & Sustenance Hubs',
          content: 'Developing sustainable domestic maintenance, repair, and overhaul capabilities within defence corridors.',
        },
      ],
    },
    coreValues: [
      {
        number: '01',
        title: 'RELATIONSHIP',
        statement:
          'We believe in building engaged relationships with our clients, partners, employees, and community. The success of our business shall be rooted in the long-term relationships and deep customer loyalty we forge over the years.',
      },
      {
        number: '02',
        title: 'COMMITMENT',
        statement:
          'We honor our commitments to clients, to each other and to the company. We take ownership of our work and hold ourselves accountable for results.',
      },
      {
        number: '03',
        title: 'ETHOS',
        statement:
          'We work with the highest degree of work ethos, professionalism, integrity, and dedication for our client’s aspirations.',
      },
      {
        number: '04',
        title: 'TEAMING',
        statement:
          'We recognize that human resource is the strength to drive success. We work together, both as a company and with our clients, to share knowledge, foster innovative ideas, resolve impediments, and deliver quality results.',
      },
    ],
    home: {
      philosophyEyebrow: 'Brand Philosophy & Mission',
      philosophyHeading: 'Transformation through insight & military integrity.',
      philosophyQuote:
        'Our Belief is sharing professional knowledge, experience and building trust builds better business.',
      philosophyText:
        'Labradorite serves as a platform for transformation in Indian aerospace and defence. Founded around the operational experience of Indian Air Force veterans, we illuminate strategic pathways across complex procedural and indigenisation landscapes.',
      philosophyImage: '/images/iaf-fighter-jets-tarmac.jpg',
    },
    cta: {
      eyebrow: 'DIRECT STRATEGIC ENGAGEMENT',
      title: 'Ready to elevate your defence acquisition strategy?',
      description:
        'Connect directly with our Indian Air Force veteran advisory board to navigate DAP 2020 frameworks, indigenisation programs, and strategic partnerships.',
      primaryButtonText: 'Schedule Strategic Consultation',
      primaryButtonLink: '/contact',
      secondaryButtonText: 'Call Directorate: +91-9866865141',
      secondaryButtonPhone: '+91-9866865141',
      backgroundImage: '/images/iaf-fighter-jets-hero.jpg',
    },
    sectionVisibility: {
      showHero: true,
      showTrustStrip: true,
      showServices: true,
      showPhilosophy: true,
      showFaqs: true,
      showCta: true,
    },
    faqs: [
      {
        q: 'Who leads the consultancy at Labradorite?',
        a: 'The advisory is led by Air Commodore Arvind Srivastava, an Indian Air Force veteran with 30+ years of military aeronautical engineering service, and former Deputy Director General Technical (Air) in Defence Capital Acquisition at the Ministry of Defence.',
      },
      {
        q: 'What areas of defence and aerospace do you specialise in?',
        a: 'Our core competencies include Defence Capital Acquisitions under DAP 2020 (IDDM, Make, D&D categories), Aircraft MRO setup & base modernization, regulatory airworthiness approvals (DGCA/DGAQA/CEMILAC), and aerospace supply chain indigenisation.',
      },
      {
        q: 'How does Labradorite support defence offsets and ToT?',
        a: 'We assist foreign OEMs and Indian entities in structuring offset programs, navigating offset banking, and orchestrating Transfer of Technology (ToT) absorption compliant with MoD guidelines.',
      },
      {
        q: 'Can startups and MSMEs engage with your advisory?',
        a: 'Yes. We guide aerospace startups and MSMEs through iDEX challenges, Make-II/Make-III schemes, MoD vendor registration, and technical pitch alignment against military Service Qualitative Requirements (SQRs).',
      },
      {
        q: 'What is the engagement model for advisory services?',
        a: 'We engage through structured feasibility assessments, long-term project-management retainers, and milestone-linked consultation agreements based on operational scope.',
      },
    ],
  });

  // Marquee helper state
  const [newMarqueeText, setNewMarqueeText] = useState('');

  // 2. Banners State
  const [banners, setBanners] = useState([]);
  const [bannerForm, setBannerForm] = useState({
    title: '',
    subtitle: '',
    eyebrow: 'Aatmanirbhar Bharat · IAF Veteran-Led Advisory',
    imageUrl: '/images/iaf-fighter-jets-hero.jpg',
    badgeText: 'IAF Fighter Jets Formation',
    link: '/services',
    active: true,
  });
  const [editingBannerId, setEditingBannerId] = useState(null);

  // 3. Services State (Fully Working CRUD)
  const [services, setServices] = useState([]);
  const [serviceForm, setServiceForm] = useState({
    title: '',
    slug: '',
    featuredStatement: '',
    shortDesc: '',
    fullDesc: '',
    image: '/images/service-avionics.jpg',
    tags: 'DAP 2020, RFI & RFP, Strategy',
    iconName: 'Cpu',
    active: true,
  });
  const [editingServiceId, setEditingServiceId] = useState(null);

  // 4. Blogs & Insights State (NEW & Fully Working CRUD)
  const [blogs, setBlogs] = useState([]);
  const [blogForm, setBlogForm] = useState({
    title: '',
    slug: '',
    category: 'Procurement Policy',
    author: 'AVM Tyagi (Retd.)',
    date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
    readTime: '5 min read',
    summary: '',
    content: '',
    image: '/images/iaf-fighter-jets-hero.jpg',
    tags: 'DAP 2020, Make in India, Indigenisation',
    active: true,
  });
  const [editingBlogId, setEditingBlogId] = useState(null);

  // 5. Team Members State
  const [team, setTeam] = useState([]);
  const [teamForm, setTeamForm] = useState({
    name: '',
    designation: '',
    bio: '',
    photo: '',
    socialLink: 'https://linkedin.com',
    verified: true,
  });
  const [editingTeamId, setEditingTeamId] = useState(null);

  // 6. Maps State
  const [maps, setMaps] = useState([]);
  const [mapForm, setMapForm] = useState({
    label: '',
    address: '',
    latitude: 28.5961,
    longitude: 77.3888,
    embedUrl: '',
    isPrimary: true,
  });
  const [editingMapId, setEditingMapId] = useState(null);

  // 7. Enquiries State
  const [enquiries, setEnquiries] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  // 8. Notification Popup State
  const [notifications, setNotifications] = useState([]);
  const [notifForm, setNotifForm] = useState({
    title: '',
    message: '',
    style: 'festive',
    active: true,
  });

  const showFeedback = (msg, type = 'success') => {
    setFeedback({ message: msg, type });
    setTimeout(() => setFeedback({ message: '', type: '' }), 4500);
  };

  // Load Data on Mount & Tab Change
  useEffect(() => {
    loadTabContent();
  }, [activeTab]);

  // Live Polling for Enquiries
  useEffect(() => {
    let interval;
    if (activeTab === 'enquiries') {
      fetchEnquiries();
      interval = setInterval(() => {
        fetchEnquiries();
      }, 7000);
    }
    return () => clearInterval(interval);
  }, [activeTab]);

  const loadTabContent = async () => {
    try {
      if (
        activeTab === 'site-content' ||
        activeTab === 'about' ||
        activeTab === 'values' ||
        activeTab === 'cta' ||
        activeTab === 'sections' ||
        activeTab === 'philosophy' ||
        activeTab === 'faqs'
      ) {
        fetchSiteContent();
      }
      if (activeTab === 'banners') fetchBanners();
      if (activeTab === 'services') fetchServices();
      if (activeTab === 'blogs') fetchBlogs();
      if (activeTab === 'team') fetchTeam();
      if (activeTab === 'maps') fetchMaps();
      if (activeTab === 'enquiries') fetchEnquiries();
      if (activeTab === 'notifications') fetchNotifications();
    } catch (err) {
      showFeedback(err.message, 'error');
    }
  };

  // --- API Handlers ---

  // 1. Site Content (Header, Footer, About, Values, CTA, etc.)
  const fetchSiteContent = async () => {
    try {
      const data = await api.get('/site-content');
      if (data.content) {
        setSiteContent((prev) => ({
          ...prev,
          ...data.content,
          header: { ...prev.header, ...(data.content.header || {}) },
          footer: {
            ...prev.footer,
            ...(data.content.footer || {}),
            companyDetails: { ...prev.footer.companyDetails, ...(data.content.footer?.companyDetails || {}) },
            socialLinks: { ...prev.footer.socialLinks, ...(data.content.footer?.socialLinks || {}) },
          },
          about: { ...prev.about, ...(data.content.about || {}) },
          coreValues: data.content.coreValues && data.content.coreValues.length > 0 ? data.content.coreValues : prev.coreValues,
          home: { ...prev.home, ...(data.content.home || {}) },
          cta: { ...prev.cta, ...(data.content.cta || {}) },
          sectionVisibility: { ...prev.sectionVisibility, ...(data.content.sectionVisibility || {}) },
          faqs: data.content.faqs && data.content.faqs.length > 0 ? data.content.faqs : prev.faqs,
        }));
      }
    } catch (err) {
      console.warn('Could not fetch site content:', err.message);
    }
  };

  const saveFullSiteContent = async (customMsg = 'Website content updated and saved permanently!') => {
    setSaving(true);
    try {
      await api.put('/admin/site-content', siteContent);
      showFeedback(customMsg);
    } catch (err) {
      showFeedback(err.message, 'error');
    } finally {
      setSaving(false);
    }
  };

  // 2. Banners
  const fetchBanners = async () => {
    try {
      const data = await api.get('/admin/banners');
      if (data.banners) setBanners(data.banners);
    } catch (err) {
      console.warn('Could not fetch banners:', err.message);
    }
  };

  const handleBannerSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (editingBannerId) {
        await api.put(`/admin/banners/${editingBannerId}`, bannerForm);
        showFeedback('Hero Banner updated successfully!');
      } else {
        await api.post('/admin/banners', bannerForm);
        showFeedback('New Hero Banner created successfully!');
      }
      setBannerForm({
        title: '',
        subtitle: '',
        eyebrow: 'Aatmanirbhar Bharat · IAF Veteran-Led Advisory',
        imageUrl: '/images/iaf-fighter-jets-hero.jpg',
        badgeText: 'IAF Fighter Jets Formation',
        link: '/services',
        active: true,
      });
      setEditingBannerId(null);
      fetchBanners();
    } catch (err) {
      showFeedback(err.message, 'error');
    } finally {
      setSaving(false);
    }
  };

  const startEditBanner = (b) => {
    setEditingBannerId(b._id);
    setBannerForm({
      title: b.title || '',
      subtitle: b.subtitle || '',
      eyebrow: b.eyebrow || 'Aatmanirbhar Bharat · IAF Veteran-Led Advisory',
      imageUrl: b.imageUrl || '',
      badgeText: b.badgeText || 'IAF Fighter Jets Formation',
      link: b.link || '/services',
      active: b.active !== false,
    });
  };

  const deleteBanner = async (id) => {
    if (!window.confirm('Delete this hero banner?')) return;
    await api.delete(`/admin/banners/${id}`);
    showFeedback('Banner deleted');
    fetchBanners();
  };

  // 3. Services (CRUD)
  const fetchServices = async () => {
    try {
      const data = await api.get('/admin/services');
      if (data.services) setServices(data.services);
    } catch (err) {
      console.warn('Could not fetch services:', err.message);
    }
  };

  const handleServiceSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (editingServiceId) {
        await api.put(`/admin/services/${editingServiceId}`, serviceForm);
        showFeedback('Service capabilities updated successfully!');
      } else {
        await api.post('/admin/services', serviceForm);
        showFeedback('New service added to directory!');
      }
      setServiceForm({
        title: '',
        slug: '',
        featuredStatement: '',
        shortDesc: '',
        fullDesc: '',
        image: '/images/service-avionics.jpg',
        tags: 'DAP 2020, RFI & RFP, Strategy',
        iconName: 'Cpu',
        active: true,
      });
      setEditingServiceId(null);
      fetchServices();
    } catch (err) {
      showFeedback(err.message, 'error');
    } finally {
      setSaving(false);
    }
  };

  const startEditService = (s) => {
    setEditingServiceId(s._id || s.slug);
    setServiceForm({
      title: s.title || '',
      slug: s.slug || '',
      featuredStatement: s.featuredStatement || '',
      shortDesc: s.shortDesc || '',
      fullDesc: s.fullDesc || '',
      image: s.image || '',
      tags: Array.isArray(s.tags) ? s.tags.join(', ') : s.tags || '',
      iconName: s.iconName || 'Cpu',
      active: s.active !== false,
    });
  };

  const deleteService = async (id) => {
    if (!window.confirm('Are you sure you want to delete this service?')) return;
    await api.delete(`/admin/services/${id}`);
    showFeedback('Service deleted from directory');
    fetchServices();
  };

  // 4. Blogs & Insights (CRUD)
  const fetchBlogs = async () => {
    try {
      const data = await api.get('/admin/blogs');
      if (data.blogs) setBlogs(data.blogs);
    } catch (err) {
      console.warn('Could not fetch blogs:', err.message);
    }
  };

  const handleBlogSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (editingBlogId) {
        await api.put(`/admin/blogs/${editingBlogId}`, blogForm);
        showFeedback('Article updated successfully!');
      } else {
        await api.post('/admin/blogs', blogForm);
        showFeedback('New Strategic Article published live!');
      }
      setBlogForm({
        title: '',
        slug: '',
        category: 'Procurement Policy',
        author: 'AVM Tyagi (Retd.)',
        date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
        readTime: '5 min read',
        summary: '',
        content: '',
        image: '/images/iaf-fighter-jets-hero.jpg',
        tags: 'DAP 2020, Make in India, Indigenisation',
        active: true,
      });
      setEditingBlogId(null);
      fetchBlogs();
    } catch (err) {
      showFeedback(err.message, 'error');
    } finally {
      setSaving(false);
    }
  };

  const startEditBlog = (b) => {
    setEditingBlogId(b._id || b.slug);
    setBlogForm({
      title: b.title || '',
      slug: b.slug || '',
      category: b.category || 'Procurement Policy',
      author: b.author || 'Labradorite Strategic Advisory',
      date: b.date || '',
      readTime: b.readTime || '5 min read',
      summary: b.summary || '',
      content: b.content || '',
      image: b.image || '',
      tags: Array.isArray(b.tags) ? b.tags.join(', ') : b.tags || '',
      active: b.active !== false,
    });
  };

  const deleteBlog = async (id) => {
    if (!window.confirm('Delete this article from the Insights directory?')) return;
    await api.delete(`/admin/blogs/${id}`);
    showFeedback('Article deleted');
    fetchBlogs();
  };

  // 5. Team
  const fetchTeam = async () => {
    try {
      const data = await api.get('/team');
      if (data.team) setTeam(data.team);
    } catch (err) {
      console.warn('Could not fetch team:', err.message);
    }
  };

  const handleTeamSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (editingTeamId) {
        await api.put(`/admin/team/${editingTeamId}`, teamForm);
        showFeedback('Team member profile updated!');
      } else {
        await api.post('/admin/team', teamForm);
        showFeedback('New team member added to website!');
      }
      setTeamForm({
        name: '',
        designation: '',
        bio: '',
        photo: '',
        socialLink: 'https://linkedin.com',
        verified: true,
      });
      setEditingTeamId(null);
      fetchTeam();
    } catch (err) {
      showFeedback(err.message, 'error');
    } finally {
      setSaving(false);
    }
  };

  const startEditTeam = (m) => {
    setEditingTeamId(m._id);
    setTeamForm({
      name: m.name || '',
      designation: m.designation || m.role || '',
      bio: m.bio || '',
      photo: m.photo || '',
      socialLink: m.socialLink || '',
      verified: m.verified !== false,
    });
  };

  const deleteTeamMember = async (id) => {
    if (!window.confirm('Remove this team member from leadership directory?')) return;
    await api.delete(`/admin/team/${id}`);
    showFeedback('Team member removed');
    fetchTeam();
  };

  // 6. Maps
  const fetchMaps = async () => {
    try {
      const data = await api.get('/admin/maps');
      if (data.maps) setMaps(data.maps);
    } catch (err) {
      console.warn('Could not fetch maps:', err.message);
    }
  };

  const handleMapSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (editingMapId) {
        await api.put(`/admin/maps/${editingMapId}`, mapForm);
        showFeedback('Office location updated!');
      } else {
        await api.post('/admin/maps', mapForm);
        showFeedback('New office location added!');
      }
      setMapForm({
        label: '',
        address: '',
        latitude: 28.5961,
        longitude: 77.3888,
        embedUrl: '',
        isPrimary: false,
      });
      setEditingMapId(null);
      fetchMaps();
    } catch (err) {
      showFeedback(err.message, 'error');
    } finally {
      setSaving(false);
    }
  };

  const startEditMap = (m) => {
    setEditingMapId(m._id);
    setMapForm({
      label: m.label || '',
      address: m.address || '',
      latitude: m.latitude || 28.5961,
      longitude: m.longitude || 77.3888,
      embedUrl: m.embedUrl || '',
      isPrimary: Boolean(m.isPrimary),
    });
  };

  const deleteMap = async (id) => {
    if (!window.confirm('Remove this office location?')) return;
    await api.delete(`/admin/maps/${id}`);
    showFeedback('Location removed');
    fetchMaps();
  };

  // 7. Enquiries
  const fetchEnquiries = async () => {
    try {
      const data = await api.get('/admin/enquiries');
      if (data.enquiries) {
        setEnquiries(data.enquiries);
        setUnreadCount(data.unreadCount || 0);
      }
    } catch (err) {
      console.warn('Could not fetch enquiries:', err.message);
    }
  };

  const toggleEnquiryStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === 'new' ? 'read' : 'new';
    await api.patch(`/admin/enquiries/${id}/status`, { status: newStatus });
    fetchEnquiries();
  };

  const deleteEnquiry = async (id) => {
    if (!window.confirm('Delete this enquiry record?')) return;
    await api.delete(`/admin/enquiries/${id}`);
    showFeedback('Enquiry deleted');
    fetchEnquiries();
  };

  // 8. Notifications
  const fetchNotifications = async () => {
    try {
      const data = await api.get('/admin/notifications');
      if (data.notifications) setNotifications(data.notifications);
    } catch (err) {
      console.warn('Could not fetch notifications:', err.message);
    }
  };

  const handleNotifSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await api.post('/admin/notifications', notifForm);
      showFeedback('Announcement popup created & activated live!');
      setNotifForm({
        title: '',
        message: '',
        style: 'festive',
        active: true,
      });
      fetchNotifications();
    } catch (err) {
      showFeedback(err.message, 'error');
    } finally {
      setSaving(false);
    }
  };

  const toggleNotifActive = async (id, currentActive) => {
    await api.patch(`/admin/notifications/${id}/status`, { active: !currentActive });
    showFeedback('Announcement status updated');
    fetchNotifications();
  };

  const deleteNotif = async (id) => {
    if (!window.confirm('Delete announcement?')) return;
    await api.delete(`/admin/notifications/${id}`);
    showFeedback('Announcement deleted');
    fetchNotifications();
  };

  // Universal Image Uploader Helper
  const handleImageUpload = (file, targetSetter) => {
    if (!file) return;
    setSaving(true);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      try {
        const res = await api.post('/admin/upload', { image: reader.result });
        if (res.url) {
          targetSetter(res.url);
          showFeedback('Image uploaded & attached successfully!');
        }
      } catch (err) {
        showFeedback('Image upload error: ' + err.message, 'error');
      } finally {
        setSaving(false);
      }
    };
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row font-sans">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-72 bg-slate-900 border-r border-slate-800 p-6 flex flex-col justify-between flex-shrink-0">
        <div>
          {/* Logo & Admin Badge */}
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-500 via-yellow-500 to-indigo-600 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-amber-500/20">
              LM
            </div>
            <div>
              <h2 className="font-bold text-white text-base leading-tight">Master Admin</h2>
              <p className="text-xs text-amber-400 font-serif">Full Website Control</p>
            </div>
          </div>

          {/* Quick Preview Website Link */}
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-3.5 py-2 mb-6 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 rounded-xl text-xs text-slate-300 hover:text-white transition group"
          >
            <span className="flex items-center gap-2">
              <Eye className="w-3.5 h-3.5 text-amber-400" />
              <span>Live Website View</span>
            </span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 transition" />
          </a>

          {/* Navigation Tabs */}
          <nav className="space-y-1.5">
            <button
              onClick={() => setActiveTab('site-content')}
              className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                activeTab === 'site-content'
                  ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Sliders className="w-4 h-4" />
              <span>Header &amp; Marquee</span>
            </button>

            <button
              onClick={() => setActiveTab('banners')}
              className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                activeTab === 'banners'
                  ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <ImageIcon className="w-4 h-4" />
              <span>Hero Banners</span>
            </button>

            <button
              onClick={() => setActiveTab('sections')}
              className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                activeTab === 'sections'
                  ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Sections &amp; Delete (NEW)</span>
            </button>

            <button
              onClick={() => setActiveTab('philosophy')}
              className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                activeTab === 'philosophy'
                  ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Philosophy &amp; Mission</span>
            </button>

            <button
              onClick={() => setActiveTab('faqs')}
              className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                activeTab === 'faqs'
                  ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>FAQs Q&amp;A (Editable)</span>
            </button>

            <button
              onClick={() => setActiveTab('services')}
              className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                activeTab === 'services'
                  ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Services (Editable)</span>
            </button>

            <button
              onClick={() => setActiveTab('blogs')}
              className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                activeTab === 'blogs'
                  ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Blog &amp; Insights (NEW)</span>
            </button>

            <button
              onClick={() => setActiveTab('about')}
              className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                activeTab === 'about'
                  ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Info className="w-4 h-4" />
              <span>About &amp; Objectives</span>
            </button>

            <button
              onClick={() => setActiveTab('values')}
              className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                activeTab === 'values'
                  ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Shield className="w-4 h-4" />
              <span>Core Values &amp; Ethos</span>
            </button>

            <button
              onClick={() => setActiveTab('team')}
              className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                activeTab === 'team'
                  ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Leadership &amp; Team</span>
            </button>

            <button
              onClick={() => setActiveTab('cta')}
              className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                activeTab === 'cta'
                  ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>Footer, CTA &amp; Images</span>
            </button>

            <button
              onClick={() => setActiveTab('maps')}
              className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                activeTab === 'maps'
                  ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>Offices &amp; Google Map</span>
            </button>

            <button
              onClick={() => setActiveTab('enquiries')}
              className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                activeTab === 'enquiries'
                  ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <span>Client Enquiries</span>
              </div>
              {unreadCount > 0 && (
                <span className="bg-amber-500 text-slate-950 font-bold text-[10px] px-2 py-0.5 rounded-full">
                  {unreadCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('notifications')}
              className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                activeTab === 'notifications'
                  ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <BellRing className="w-4 h-4" />
              <span>Announcement Popup</span>
            </button>
          </nav>
        </div>

        {/* Logout */}
        <button
          onClick={onLogout}
          className="mt-8 w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium text-rose-400 hover:bg-rose-500/10 border border-transparent hover:border-rose-500/20 transition"
        >
          <LogOut className="w-4 h-4" />
          <span>Exit Admin</span>
        </button>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        {/* Feedback Alert Toast */}
        {feedback.message && (
          <div
            className={`fixed top-6 right-6 z-50 px-5 py-3.5 rounded-xl shadow-2xl flex items-center space-x-3 text-sm border backdrop-blur-md transition-all ${
              feedback.type === 'error'
                ? 'bg-rose-950/90 border-rose-500/40 text-rose-200'
                : 'bg-emerald-950/90 border-emerald-500/40 text-emerald-200'
            }`}
          >
            {feedback.type === 'error' ? (
              <AlertCircle className="w-5 h-5 text-rose-400" />
            ) : (
              <CheckCircle className="w-5 h-5 text-emerald-400" />
            )}
            <span>{feedback.message}</span>
          </div>
        )}

        {/* Header Bar */}
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-8 mb-8 border-b border-slate-800 gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                Live Data Synchronizer
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white capitalize mt-1">
              {activeTab.replace('-', ' ')}
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Every single section, text, and image can be edited here. Updates take effect across the website instantly.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={loadTabContent}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition"
              title="Refresh Data"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* ---------------- 1. SITE CONTENT (Header & Marquee Ticker) ---------------- */}
        {activeTab === 'site-content' && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              saveFullSiteContent('Header, Brand & Marquee Ticker details saved!');
            }}
            className="space-y-8 max-w-5xl"
          >
            {/* Header / Brand Details */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                <Sliders className="w-5 h-5 text-amber-400" />
                Brand &amp; Header Settings
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Brand Logo Text
                  </label>
                  <input
                    type="text"
                    value={siteContent.header.logoText}
                    onChange={(e) =>
                      setSiteContent({
                        ...siteContent,
                        header: { ...siteContent.header, logoText: e.target.value },
                      })
                    }
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Logo Subtext / Tagline
                  </label>
                  <input
                    type="text"
                    value={siteContent.header.logoSubtext}
                    onChange={(e) =>
                      setSiteContent({
                        ...siteContent,
                        header: { ...siteContent.header, logoSubtext: e.target.value },
                      })
                    }
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>
            </div>

            {/* Direct Phone & WhatsApp Numbers */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                <Phone className="w-5 h-5 text-amber-400" />
                Contact Numbers &amp; WhatsApp Lines
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Primary Mobile Line
                  </label>
                  <input
                    type="text"
                    value={siteContent.header.contactNumber}
                    onChange={(e) =>
                      setSiteContent({
                        ...siteContent,
                        header: { ...siteContent.header, contactNumber: e.target.value },
                        footer: { ...siteContent.footer, phone: e.target.value },
                      })
                    }
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Secondary Line (Directorate)
                  </label>
                  <input
                    type="text"
                    value={siteContent.header.contactPhone2 || ''}
                    onChange={(e) =>
                      setSiteContent({
                        ...siteContent,
                        header: { ...siteContent.header, contactPhone2: e.target.value },
                        footer: { ...siteContent.footer, phone2: e.target.value },
                      })
                    }
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    WhatsApp Advisory Line
                  </label>
                  <input
                    type="text"
                    value={siteContent.header.whatsapp || ''}
                    onChange={(e) =>
                      setSiteContent({
                        ...siteContent,
                        header: { ...siteContent.header, whatsapp: e.target.value },
                        footer: { ...siteContent.footer, whatsapp: e.target.value },
                      })
                    }
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Official Corporate Email
                  </label>
                  <input
                    type="email"
                    value={siteContent.header.contactEmail}
                    onChange={(e) =>
                      setSiteContent({
                        ...siteContent,
                        header: { ...siteContent.header, contactEmail: e.target.value },
                        footer: { ...siteContent.footer, email: e.target.value },
                      })
                    }
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Direct Alternate Email
                  </label>
                  <input
                    type="email"
                    value={siteContent.header.contactEmail2 || ''}
                    onChange={(e) =>
                      setSiteContent({
                        ...siteContent,
                        header: { ...siteContent.header, contactEmail2: e.target.value },
                        footer: { ...siteContent.footer, email2: e.target.value },
                      })
                    }
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>
            </div>

            {/* Marquee Announcement Ticker */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                <Sparkles className="w-5 h-5 text-amber-400" />
                Top Running Marquee Ticker Texts
              </h3>
              <p className="text-xs text-slate-400">
                These messages continuously glide along the top luxury ticker bar across all pages.
              </p>

              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="e.g. DEFENCE OFFSET STRUCTURING &amp; TOT ADVISORY"
                  value={newMarqueeText}
                  onChange={(e) => setNewMarqueeText(e.target.value)}
                  className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                />
                <button
                  type="button"
                  onClick={() => {
                    if (!newMarqueeText.trim()) return;
                    setSiteContent({
                      ...siteContent,
                      header: {
                        ...siteContent.header,
                        marqueeItems: [...(siteContent.header.marqueeItems || []), newMarqueeText.trim()],
                      },
                    });
                    setNewMarqueeText('');
                  }}
                  className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider transition"
                >
                  Add Ticker Item
                </button>
              </div>

              <div className="space-y-2 pt-2">
                {(siteContent.header.marqueeItems || []).map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200"
                  >
                    <span>{item}</span>
                    <button
                      type="button"
                      onClick={() => {
                        const updated = [...siteContent.header.marqueeItems];
                        updated.splice(idx, 1);
                        setSiteContent({
                          ...siteContent,
                          header: { ...siteContent.header, marqueeItems: updated },
                        });
                      }}
                      className="p-1.5 text-rose-400 hover:text-rose-300 transition"
                      title="Remove ticker item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={saving}
                className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl transition shadow-lg shadow-amber-500/20 disabled:opacity-50 text-xs uppercase tracking-wider"
              >
                <Save className="w-4 h-4" />
                <span>Save Header &amp; Marquee</span>
              </button>
            </div>
          </form>
        )}

        {/* ---------------- 2. HERO BANNERS ---------------- */}
        {activeTab === 'banners' && (
          <div className="space-y-10 max-w-5xl">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-amber-400" />
                {editingBannerId ? 'Edit Hero Banner' : 'Create New Hero Banner'}
              </h3>

              <form onSubmit={handleBannerSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Top Eyebrow Tag
                    </label>
                    <input
                      type="text"
                      value={bannerForm.eyebrow}
                      onChange={(e) => setBannerForm({ ...bannerForm, eyebrow: e.target.value })}
                      placeholder="e.g. Aatmanirbhar Bharat · IAF Veteran-Led Advisory"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Badge Text (Mobile / Formation)
                    </label>
                    <input
                      type="text"
                      value={bannerForm.badgeText}
                      onChange={(e) => setBannerForm({ ...bannerForm, badgeText: e.target.value })}
                      placeholder="e.g. IAF Fighter Jets Formation"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Hero Main Headline *
                  </label>
                  <input
                    type="text"
                    value={bannerForm.title}
                    onChange={(e) => setBannerForm({ ...bannerForm, title: e.target.value })}
                    placeholder="e.g. Building better business through knowledge, experience & trust."
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 font-serif"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Hero Subtitle / Description
                  </label>
                  <textarea
                    rows="3"
                    value={bannerForm.subtitle}
                    onChange={(e) => setBannerForm({ ...bannerForm, subtitle: e.target.value })}
                    placeholder="e.g. Defence Acquisition and Technology consultancy for Indian and global aerospace entities..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Background Image URL or Local Path *
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={bannerForm.imageUrl}
                        onChange={(e) => setBannerForm({ ...bannerForm, imageUrl: e.target.value })}
                        placeholder="e.g. /images/iaf-fighter-jets-hero.jpg"
                        required
                        className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                      />
                      <label className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold cursor-pointer flex items-center gap-1.5 shrink-0 transition">
                        <Upload className="w-3.5 h-3.5 text-amber-400" />
                        <span>Upload</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleImageUpload(e.target.files[0], (url) => setBannerForm({ ...bannerForm, imageUrl: url }))}
                        />
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Button CTA Destination Path
                    </label>
                    <input
                      type="text"
                      value={bannerForm.link}
                      onChange={(e) => setBannerForm({ ...bannerForm, link: e.target.value })}
                      placeholder="e.g. /services"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="bannerActive"
                      checked={bannerForm.active}
                      onChange={(e) => setBannerForm({ ...bannerForm, active: e.target.checked })}
                      className="w-4 h-4 text-amber-400 rounded bg-slate-950 border-slate-800 focus:ring-0"
                    />
                    <label htmlFor="bannerActive" className="text-xs text-slate-300 cursor-pointer">
                      Active on Homepage
                    </label>
                  </div>

                  <div className="flex gap-3">
                    {editingBannerId && (
                      <button
                        type="button"
                        onClick={() => {
                          setEditingBannerId(null);
                          setBannerForm({
                            title: '',
                            subtitle: '',
                            eyebrow: '',
                            imageUrl: '',
                            badgeText: '',
                            link: '/services',
                            active: true,
                          });
                        }}
                        className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold transition"
                      >
                        Cancel
                      </button>
                    )}
                    <button
                      type="submit"
                      disabled={saving}
                      className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold px-7 py-2.5 rounded-xl transition shadow-lg shadow-amber-500/20 disabled:opacity-50 text-xs uppercase tracking-wider"
                    >
                      <Save className="w-4 h-4" />
                      <span>{editingBannerId ? 'Update Banner' : 'Create Banner'}</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Existing Banners List */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-white">Active Homepage Banners ({banners.length})</h3>
              <div className="grid grid-cols-1 gap-4">
                {banners.map((b) => (
                  <div
                    key={b._id}
                    className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 hover:border-slate-700 transition"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-24 h-16 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shrink-0">
                        <img
                          src={b.imageUrl}
                          alt={b.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = '/images/iaf-fighter-jets-hero.jpg';
                          }}
                        />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                            {b.eyebrow || 'Hero Slide'}
                          </span>
                          {b.active && (
                            <span className="text-[9px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-semibold">
                              Live
                            </span>
                          )}
                        </div>
                        <h4 className="font-serif text-base font-normal text-white">{b.title}</h4>
                        <p className="text-xs text-slate-400 font-light line-clamp-1">{b.subtitle}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => startEditBanner(b)}
                        className="p-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl transition"
                        title="Edit Banner"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => deleteBanner(b._id)}
                        className="p-2.5 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 rounded-xl transition"
                        title="Delete Banner"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ---------------- 3. SERVICES (FULLY WORKING CRUD) ---------------- */}
        {activeTab === 'services' && (
          <div className="space-y-10 max-w-5xl">
            {/* Create / Edit Form */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-amber-400" />
                {editingServiceId ? 'Edit Consultancy Capability' : 'Add New Consultancy Service'}
              </h3>

              <form onSubmit={handleServiceSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Service Title *
                    </label>
                    <input
                      type="text"
                      value={serviceForm.title}
                      onChange={(e) => setServiceForm({ ...serviceForm, title: e.target.value })}
                      placeholder="e.g. Technology Consultancy"
                      required
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      URL Slug
                    </label>
                    <input
                      type="text"
                      value={serviceForm.slug}
                      onChange={(e) => setServiceForm({ ...serviceForm, slug: e.target.value })}
                      placeholder="e.g. technology-consultancy"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Featured Value Statement
                  </label>
                  <input
                    type="text"
                    value={serviceForm.featuredStatement}
                    onChange={(e) => setServiceForm({ ...serviceForm, featuredStatement: e.target.value })}
                    placeholder="e.g. If you have the technology, we have the strategy plan to sell that and find a buyer."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 font-serif"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Short Summary (Shown in directory cards) *
                  </label>
                  <textarea
                    rows="2"
                    value={serviceForm.shortDesc}
                    onChange={(e) => setServiceForm({ ...serviceForm, shortDesc: e.target.value })}
                    placeholder="e.g. Market opportunity mapping, EOI/RFI/RFP response structuring, and iDEX & Make program advisory..."
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 font-light"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Full Description / In-Depth Scope
                  </label>
                  <textarea
                    rows="4"
                    value={serviceForm.fullDesc}
                    onChange={(e) => setServiceForm({ ...serviceForm, fullDesc: e.target.value })}
                    placeholder="In-depth details about DAP 2020 frameworks, capability milestones, and transfer of technology..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 font-light"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Hero Image Path or Upload
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={serviceForm.image}
                        onChange={(e) => setServiceForm({ ...serviceForm, image: e.target.value })}
                        placeholder="e.g. /images/service-avionics.jpg"
                        className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                      />
                      <label className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold cursor-pointer flex items-center gap-1.5 shrink-0 transition">
                        <Upload className="w-3.5 h-3.5 text-amber-400" />
                        <span>Upload</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleImageUpload(e.target.files[0], (url) => setServiceForm({ ...serviceForm, image: url }))}
                        />
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Tags (Comma separated)
                    </label>
                    <input
                      type="text"
                      value={serviceForm.tags}
                      onChange={(e) => setServiceForm({ ...serviceForm, tags: e.target.value })}
                      placeholder="e.g. DAP 2020, iDEX, RFI & RFP"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="serviceActive"
                      checked={serviceForm.active}
                      onChange={(e) => setServiceForm({ ...serviceForm, active: e.target.checked })}
                      className="w-4 h-4 text-amber-400 rounded bg-slate-950 border-slate-800 focus:ring-0"
                    />
                    <label htmlFor="serviceActive" className="text-xs text-slate-300 cursor-pointer">
                      Active &amp; Visible in Directory
                    </label>
                  </div>

                  <div className="flex gap-3">
                    {editingServiceId && (
                      <button
                        type="button"
                        onClick={() => {
                          setEditingServiceId(null);
                          setServiceForm({
                            title: '',
                            slug: '',
                            featuredStatement: '',
                            shortDesc: '',
                            fullDesc: '',
                            image: '/images/service-avionics.jpg',
                            tags: '',
                            iconName: 'Cpu',
                            active: true,
                          });
                        }}
                        className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold transition"
                      >
                        Cancel
                      </button>
                    )}
                    <button
                      type="submit"
                      disabled={saving}
                      className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold px-7 py-2.5 rounded-xl transition shadow-lg shadow-amber-500/20 disabled:opacity-50 text-xs uppercase tracking-wider"
                    >
                      <Save className="w-4 h-4" />
                      <span>{editingServiceId ? 'Update Service' : 'Add Service'}</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Existing Services Directory Table */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-white">Live Services ({services.length})</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((s) => (
                  <div
                    key={s._id || s.slug}
                    className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between gap-4 hover:border-slate-700 transition"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shrink-0">
                        <img
                          src={s.image || '/images/service-avionics.jpg'}
                          alt={s.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = '/images/service-avionics.jpg';
                          }}
                        />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-serif text-base font-normal text-white">{s.title}</h4>
                          {s.active !== false && (
                            <span className="text-[9px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-semibold">
                              Active
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-amber-400/80 font-mono">/services/{s.slug || s.id}</p>
                        <p className="text-xs text-slate-400 font-light line-clamp-2">{s.shortDesc}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-slate-800/80">
                      <a
                        href={`/services/${s.slug || s.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] text-amber-400 hover:underline"
                      >
                        <span>View Page</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => startEditService(s)}
                          className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition"
                          title="Edit Service"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => deleteService(s._id || s.slug)}
                          className="p-2 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 rounded-lg transition"
                          title="Delete Service"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ---------------- 4. BLOGS & INSIGHTS (NEW & FULLY WORKING CRUD) ---------------- */}
        {activeTab === 'blogs' && (
          <div className="space-y-10 max-w-5xl">
            {/* Create / Edit Form */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-amber-400" />
                {editingBlogId ? 'Edit Strategic Insight Article' : 'Publish New Defence Insight'}
              </h3>

              <form onSubmit={handleBlogSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Article Title *
                    </label>
                    <input
                      type="text"
                      value={blogForm.title}
                      onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                      placeholder="e.g. Navigating DAP 2020: Make in India Strategic Imperatives"
                      required
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      URL Slug
                    </label>
                    <input
                      type="text"
                      value={blogForm.slug}
                      onChange={(e) => setBlogForm({ ...blogForm, slug: e.target.value })}
                      placeholder="e.g. navigating-dap-2020-make-in-india"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Domain Category
                    </label>
                    <input
                      type="text"
                      value={blogForm.category}
                      onChange={(e) => setBlogForm({ ...blogForm, category: e.target.value })}
                      placeholder="e.g. Procurement Policy, MRO, MSME"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Author / Directorate
                    </label>
                    <input
                      type="text"
                      value={blogForm.author}
                      onChange={(e) => setBlogForm({ ...blogForm, author: e.target.value })}
                      placeholder="e.g. AVM Tyagi (Retd.)"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Publication Date
                    </label>
                    <input
                      type="text"
                      value={blogForm.date}
                      onChange={(e) => setBlogForm({ ...blogForm, date: e.target.value })}
                      placeholder="e.g. 24 Feb 2026"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Executive Summary / Abstract (Shown in card grids) *
                  </label>
                  <textarea
                    rows="2"
                    value={blogForm.summary}
                    onChange={(e) => setBlogForm({ ...blogForm, summary: e.target.value })}
                    placeholder="Short executive summary summarizing key regulatory takeaways or industry milestones..."
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 font-light"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Full Article Content *
                  </label>
                  <textarea
                    rows="7"
                    value={blogForm.content}
                    onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })}
                    placeholder="Write the full commentary. Separate paragraphs with blank lines. Include detailed DAP 2020 analysis, field trial recommendations, and guidance..."
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 font-light leading-relaxed"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Featured Cover Image URL or Upload
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={blogForm.image}
                        onChange={(e) => setBlogForm({ ...blogForm, image: e.target.value })}
                        placeholder="e.g. /images/iaf-fighter-jets-hero.jpg"
                        className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                      />
                      <label className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold cursor-pointer flex items-center gap-1.5 shrink-0 transition">
                        <Upload className="w-3.5 h-3.5 text-amber-400" />
                        <span>Upload</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleImageUpload(e.target.files[0], (url) => setBlogForm({ ...blogForm, image: url }))}
                        />
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Tags (Comma separated)
                    </label>
                    <input
                      type="text"
                      value={blogForm.tags}
                      onChange={(e) => setBlogForm({ ...blogForm, tags: e.target.value })}
                      placeholder="e.g. DAP 2020, Make in India, Indigenisation"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="blogActive"
                      checked={blogForm.active}
                      onChange={(e) => setBlogForm({ ...blogForm, active: e.target.checked })}
                      className="w-4 h-4 text-amber-400 rounded bg-slate-950 border-slate-800 focus:ring-0"
                    />
                    <label htmlFor="blogActive" className="text-xs text-slate-300 cursor-pointer">
                      Published Live on Website
                    </label>
                  </div>

                  <div className="flex gap-3">
                    {editingBlogId && (
                      <button
                        type="button"
                        onClick={() => {
                          setEditingBlogId(null);
                          setBlogForm({
                            title: '',
                            slug: '',
                            category: 'Procurement Policy',
                            author: 'AVM Tyagi (Retd.)',
                            date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
                            readTime: '5 min read',
                            summary: '',
                            content: '',
                            image: '/images/iaf-fighter-jets-hero.jpg',
                            tags: '',
                            active: true,
                          });
                        }}
                        className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold transition"
                      >
                        Cancel
                      </button>
                    )}
                    <button
                      type="submit"
                      disabled={saving}
                      className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold px-7 py-2.5 rounded-xl transition shadow-lg shadow-amber-500/20 disabled:opacity-50 text-xs uppercase tracking-wider"
                    >
                      <Save className="w-4 h-4" />
                      <span>{editingBlogId ? 'Update Article' : 'Publish Article'}</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Existing Publications List */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-white">Published Insights Directory ({blogs.length})</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {blogs.map((b) => (
                  <div
                    key={b._id || b.slug}
                    className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between gap-4 hover:border-slate-700 transition"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shrink-0">
                        <img
                          src={b.image || '/images/iaf-fighter-jets-hero.jpg'}
                          alt={b.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = '/images/iaf-fighter-jets-hero.jpg';
                          }}
                        />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                            {b.category}
                          </span>
                          {b.active !== false && (
                            <span className="text-[9px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-semibold">
                              Live
                            </span>
                          )}
                        </div>
                        <h4 className="font-serif text-base font-normal text-white">{b.title}</h4>
                        <p className="text-xs text-slate-400 font-light line-clamp-2">{b.summary}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-slate-800/80">
                      <a
                        href={`/insights/${b.slug || b._id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] text-amber-400 hover:underline"
                      >
                        <span>Read Live Article</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => startEditBlog(b)}
                          className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition"
                          title="Edit Article"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => deleteBlog(b._id || b.slug)}
                          className="p-2 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 rounded-lg transition"
                          title="Delete Article"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ---------------- 5. ABOUT PAGE & BRAND STORY ---------------- */}
        {activeTab === 'about' && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              saveFullSiteContent('About Us page content & business objectives saved!');
            }}
            className="space-y-8 max-w-5xl"
          >
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                <Info className="w-5 h-5 text-amber-400" />
                About Us Headline &amp; Story Paragraphs
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Hero Eyebrow Tag
                  </label>
                  <input
                    type="text"
                    value={siteContent.about?.heroTag || ''}
                    onChange={(e) =>
                      setSiteContent({
                        ...siteContent,
                        about: { ...siteContent.about, heroTag: e.target.value },
                      })
                    }
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    About Section Image
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={siteContent.about?.image || ''}
                      onChange={(e) =>
                        setSiteContent({
                          ...siteContent,
                          about: { ...siteContent.about, image: e.target.value },
                        })
                      }
                      className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                    <label className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold cursor-pointer flex items-center gap-1.5 shrink-0 transition">
                      <Upload className="w-3.5 h-3.5 text-amber-400" />
                      <span>Upload</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) =>
                          handleImageUpload(e.target.files[0], (url) =>
                            setSiteContent({
                              ...siteContent,
                              about: { ...siteContent.about, image: url },
                            })
                          )
                        }
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Main Headline
                </label>
                <input
                  type="text"
                  value={siteContent.about?.headline || ''}
                  onChange={(e) =>
                    setSiteContent({
                      ...siteContent,
                      about: { ...siteContent.about, headline: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 font-serif"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Founding Ethos Paragraph 1
                </label>
                <textarea
                  rows="3"
                  value={siteContent.about?.story1 || ''}
                  onChange={(e) =>
                    setSiteContent({
                      ...siteContent,
                      about: { ...siteContent.about, story1: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 font-light"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Founding Ethos Paragraph 2
                </label>
                <textarea
                  rows="3"
                  value={siteContent.about?.story2 || ''}
                  onChange={(e) =>
                    setSiteContent({
                      ...siteContent,
                      about: { ...siteContent.about, story2: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 font-light"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Core Philosophy Quote
                </label>
                <input
                  type="text"
                  value={siteContent.about?.clientBeliefQuote || ''}
                  onChange={(e) =>
                    setSiteContent({
                      ...siteContent,
                      about: { ...siteContent.about, clientBeliefQuote: e.target.value },
                      home: { ...siteContent.home, philosophyQuote: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 font-serif italic"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Final Summary / Closing Statement
                </label>
                <textarea
                  rows="2"
                  value={siteContent.about?.closingStatement || ''}
                  onChange={(e) =>
                    setSiteContent({
                      ...siteContent,
                      about: { ...siteContent.about, closingStatement: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 font-serif italic"
                />
              </div>
            </div>

            {/* Strategic Business Objectives Grid Editor */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Layers className="w-5 h-5 text-amber-400" />
                  Strategic Business Objectives ({siteContent.about?.objectiveSections?.length || 0})
                </h3>
                <button
                  type="button"
                  onClick={() => {
                    const current = siteContent.about?.objectiveSections || [];
                    setSiteContent({
                      ...siteContent,
                      about: {
                        ...siteContent.about,
                        objectiveSections: [
                          ...current,
                          { heading: 'New Strategic Objective', content: 'Description of capability roadmap...' },
                        ],
                      },
                    });
                  }}
                  className="px-4 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs transition"
                >
                  + Add Objective
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(siteContent.about?.objectiveSections || []).map((sec, idx) => (
                  <div key={idx} className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-amber-400 font-mono">0{idx + 1}</span>
                      <button
                        type="button"
                        onClick={() => {
                          const updated = [...siteContent.about.objectiveSections];
                          updated.splice(idx, 1);
                          setSiteContent({
                            ...siteContent,
                            about: { ...siteContent.about, objectiveSections: updated },
                          });
                        }}
                        className="text-rose-400 hover:text-rose-300 text-xs"
                      >
                        Remove
                      </button>
                    </div>
                    <input
                      type="text"
                      value={sec.heading}
                      onChange={(e) => {
                        const updated = [...siteContent.about.objectiveSections];
                        updated[idx].heading = e.target.value;
                        setSiteContent({
                          ...siteContent,
                          about: { ...siteContent.about, objectiveSections: updated },
                        });
                      }}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white font-serif"
                    />
                    <textarea
                      rows="2"
                      value={sec.content}
                      onChange={(e) => {
                        const updated = [...siteContent.about.objectiveSections];
                        updated[idx].content = e.target.value;
                        setSiteContent({
                          ...siteContent,
                          about: { ...siteContent.about, objectiveSections: updated },
                        });
                      }}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-slate-300 font-light"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={saving}
                className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl transition shadow-lg shadow-amber-500/20 disabled:opacity-50 text-xs uppercase tracking-wider"
              >
                <Save className="w-4 h-4" />
                <span>Save About Page Content</span>
              </button>
            </div>
          </form>
        )}

        {/* ---------------- 6. CORE VALUES & TRUST ETHOS ---------------- */}
        {activeTab === 'values' && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              saveFullSiteContent('Core Values & Ethos saved permanently!');
            }}
            className="space-y-8 max-w-5xl"
          >
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Shield className="w-5 h-5 text-amber-400" />
                    Core Corporate Values ({siteContent.coreValues?.length || 0})
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Displayed in the capability trust strip and corporate presentation pages.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const current = siteContent.coreValues || [];
                    setSiteContent({
                      ...siteContent,
                      coreValues: [
                        ...current,
                        {
                          number: `0${current.length + 1}`,
                          title: 'EXCELLENCE',
                          statement: 'Commitment to the highest standards of defence advisory...',
                        },
                      ],
                    });
                  }}
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs transition"
                >
                  + Add Core Value
                </button>
              </div>

              <div className="space-y-4">
                {(siteContent.coreValues || []).map((val, idx) => (
                  <div key={idx} className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <input
                          type="text"
                          value={val.number}
                          onChange={(e) => {
                            const updated = [...siteContent.coreValues];
                            updated[idx].number = e.target.value;
                            setSiteContent({ ...siteContent, coreValues: updated });
                          }}
                          className="w-16 bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-amber-400 font-mono text-center"
                        />
                        <input
                          type="text"
                          value={val.title}
                          onChange={(e) => {
                            const updated = [...siteContent.coreValues];
                            updated[idx].title = e.target.value;
                            setSiteContent({ ...siteContent, coreValues: updated });
                          }}
                          className="w-64 bg-slate-900 border border-slate-800 rounded-lg px-3 py-1 text-xs text-white font-bold uppercase tracking-wider"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          const updated = [...siteContent.coreValues];
                          updated.splice(idx, 1);
                          setSiteContent({ ...siteContent, coreValues: updated });
                        }}
                        className="p-1 text-rose-400 hover:text-rose-300 transition"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <textarea
                      rows="2"
                      value={val.statement}
                      onChange={(e) => {
                        const updated = [...siteContent.coreValues];
                        updated[idx].statement = e.target.value;
                        setSiteContent({ ...siteContent, coreValues: updated });
                      }}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-300 font-light"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={saving}
                className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl transition shadow-lg shadow-amber-500/20 disabled:opacity-50 text-xs uppercase tracking-wider"
              >
                <Save className="w-4 h-4" />
                <span>Save Core Values</span>
              </button>
            </div>
          </form>
        )}

        {/* ---------------- 7. LEADERSHIP & TEAM ---------------- */}
        {activeTab === 'team' && (
          <div className="space-y-10 max-w-5xl">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Users className="w-5 h-5 text-amber-400" />
                {editingTeamId ? 'Edit Team Member Profile' : 'Add New Team Member'}
              </h3>

              <form onSubmit={handleTeamSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={teamForm.name}
                      onChange={(e) => setTeamForm({ ...teamForm, name: e.target.value })}
                      placeholder="e.g. Arvind"
                      required
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Designation / Role *
                    </label>
                    <input
                      type="text"
                      value={teamForm.designation}
                      onChange={(e) => setTeamForm({ ...teamForm, designation: e.target.value })}
                      placeholder="e.g. Founder &amp; Director"
                      required
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Executive Biography / Military &amp; Industry Profile
                  </label>
                  <textarea
                    rows="3"
                    value={teamForm.bio}
                    onChange={(e) => setTeamForm({ ...teamForm, bio: e.target.value })}
                    placeholder="Details about veteran experience, procurement accomplishments..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 font-light"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Photo URL or Local Path
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={teamForm.photo}
                        onChange={(e) => setTeamForm({ ...teamForm, photo: e.target.value })}
                        placeholder="e.g. /images/team-arvind.jpg"
                        className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                      />
                      <label className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold cursor-pointer flex items-center gap-1.5 shrink-0 transition">
                        <Upload className="w-3.5 h-3.5 text-amber-400" />
                        <span>Upload</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleImageUpload(e.target.files[0], (url) => setTeamForm({ ...teamForm, photo: url }))}
                        />
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      LinkedIn Profile URL
                    </label>
                    <input
                      type="url"
                      value={teamForm.socialLink}
                      onChange={(e) => setTeamForm({ ...teamForm, socialLink: e.target.value })}
                      placeholder="https://linkedin.com/in/..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="teamVerified"
                      checked={teamForm.verified}
                      onChange={(e) => setTeamForm({ ...teamForm, verified: e.target.checked })}
                      className="w-4 h-4 text-amber-400 rounded bg-slate-950 border-slate-800 focus:ring-0"
                    />
                    <label htmlFor="teamVerified" className="text-xs text-slate-300 cursor-pointer">
                      Verified IAF Veteran / Advisory Board Member
                    </label>
                  </div>

                  <div className="flex gap-3">
                    {editingTeamId && (
                      <button
                        type="button"
                        onClick={() => {
                          setEditingTeamId(null);
                          setTeamForm({
                            name: '',
                            designation: '',
                            bio: '',
                            photo: '',
                            socialLink: '',
                            verified: true,
                          });
                        }}
                        className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold transition"
                      >
                        Cancel
                      </button>
                    )}
                    <button
                      type="submit"
                      disabled={saving}
                      className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold px-7 py-2.5 rounded-xl transition shadow-lg shadow-amber-500/20 disabled:opacity-50 text-xs uppercase tracking-wider"
                    >
                      <Save className="w-4 h-4" />
                      <span>{editingTeamId ? 'Update Profile' : 'Add Team Member'}</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Existing Team Listing */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-white">Current Advisory Partners ({team.length})</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {team.map((m) => (
                  <div
                    key={m._id}
                    className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 flex items-start justify-between gap-4 hover:border-slate-700 transition"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-12 h-12 rounded-full bg-slate-950 border border-amber-400/40 text-amber-400 font-serif font-bold text-base flex items-center justify-center shrink-0 overflow-hidden">
                        {m.photo ? (
                          <img src={m.photo} alt={m.name} className="w-full h-full object-cover" />
                        ) : (
                          <span>{m.name.charAt(0)}</span>
                        )}
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-serif text-base font-normal text-white">{m.name}</h4>
                        <div className="text-[10px] text-amber-400 uppercase tracking-widest font-semibold">
                          {m.designation || m.role}
                        </div>
                        <p className="text-xs text-slate-400 font-light line-clamp-2">{m.bio}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={() => startEditTeam(m)}
                        className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition"
                        title="Edit Profile"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => deleteTeamMember(m._id)}
                        className="p-2 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 rounded-lg transition"
                        title="Delete Profile"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ---------------- 8. FOOTER, CTA & PAGE IMAGES ---------------- */}
        {activeTab === 'cta' && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              saveFullSiteContent('Footer, CTA & Page Images updated successfully!');
            }}
            className="space-y-8 max-w-5xl"
          >
            {/* Global CTA Section */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                <Compass className="w-5 h-5 text-amber-400" />
                Global Call to Action (CTA) Section
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    CTA Top Tag / Eyebrow
                  </label>
                  <input
                    type="text"
                    value={siteContent.cta?.eyebrow || ''}
                    onChange={(e) =>
                      setSiteContent({
                        ...siteContent,
                        cta: { ...siteContent.cta, eyebrow: e.target.value },
                      })
                    }
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    CTA Background Image
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={siteContent.cta?.backgroundImage || ''}
                      onChange={(e) =>
                        setSiteContent({
                          ...siteContent,
                          cta: { ...siteContent.cta, backgroundImage: e.target.value },
                        })
                      }
                      className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                    <label className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold cursor-pointer flex items-center gap-1.5 shrink-0 transition">
                      <Upload className="w-3.5 h-3.5 text-amber-400" />
                      <span>Upload</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) =>
                          handleImageUpload(e.target.files[0], (url) =>
                            setSiteContent({
                              ...siteContent,
                              cta: { ...siteContent.cta, backgroundImage: url },
                            })
                          )
                        }
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  CTA Headline
                </label>
                <input
                  type="text"
                  value={siteContent.cta?.title || ''}
                  onChange={(e) =>
                    setSiteContent({
                      ...siteContent,
                      cta: { ...siteContent.cta, title: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 font-serif"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  CTA Subtext / Description
                </label>
                <textarea
                  rows="2"
                  value={siteContent.cta?.description || ''}
                  onChange={(e) =>
                    setSiteContent({
                      ...siteContent,
                      cta: { ...siteContent.cta, description: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 font-light"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Primary Button Text
                  </label>
                  <input
                    type="text"
                    value={siteContent.cta?.primaryButtonText || ''}
                    onChange={(e) =>
                      setSiteContent({
                        ...siteContent,
                        cta: { ...siteContent.cta, primaryButtonText: e.target.value },
                      })
                    }
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Primary Button Link
                  </label>
                  <input
                    type="text"
                    value={siteContent.cta?.primaryButtonLink || ''}
                    onChange={(e) =>
                      setSiteContent({
                        ...siteContent,
                        cta: { ...siteContent.cta, primaryButtonLink: e.target.value },
                      })
                    }
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>
            </div>

            {/* Footer Background & Legal Details */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                <FileText className="w-5 h-5 text-amber-400" />
                Footer Summary, Background &amp; Legal Info
              </h3>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Footer Background Image
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={siteContent.footer?.backgroundImage || ''}
                    onChange={(e) =>
                      setSiteContent({
                        ...siteContent,
                        footer: { ...siteContent.footer, backgroundImage: e.target.value },
                      })
                    }
                    className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                  <label className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold cursor-pointer flex items-center gap-1.5 shrink-0 transition">
                    <Upload className="w-3.5 h-3.5 text-amber-400" />
                    <span>Upload</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) =>
                        handleImageUpload(e.target.files[0], (url) =>
                          setSiteContent({
                            ...siteContent,
                            footer: { ...siteContent.footer, backgroundImage: url },
                          })
                        )
                      }
                    />
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Footer About Summary
                </label>
                <textarea
                  rows="3"
                  value={siteContent.footer?.aboutSummary || ''}
                  onChange={(e) =>
                    setSiteContent({
                      ...siteContent,
                      footer: { ...siteContent.footer, aboutSummary: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 font-light"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Official Corporate Address
                </label>
                <textarea
                  rows="2"
                  value={siteContent.footer?.address || ''}
                  onChange={(e) =>
                    setSiteContent({
                      ...siteContent,
                      footer: { ...siteContent.footer, address: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 font-light"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    LLPIN Registration
                  </label>
                  <input
                    type="text"
                    value={siteContent.footer?.companyDetails?.llpin || ''}
                    onChange={(e) =>
                      setSiteContent({
                        ...siteContent,
                        footer: {
                          ...siteContent.footer,
                          companyDetails: { ...siteContent.footer.companyDetails, llpin: e.target.value },
                        },
                      })
                    }
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    PAN Number
                  </label>
                  <input
                    type="text"
                    value={siteContent.footer?.companyDetails?.pan || ''}
                    onChange={(e) =>
                      setSiteContent({
                        ...siteContent,
                        footer: {
                          ...siteContent.footer,
                          companyDetails: { ...siteContent.footer.companyDetails, pan: e.target.value },
                        },
                      })
                    }
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    GST Identification
                  </label>
                  <input
                    type="text"
                    value={siteContent.footer?.companyDetails?.gst || ''}
                    onChange={(e) =>
                      setSiteContent({
                        ...siteContent,
                        footer: {
                          ...siteContent.footer,
                          companyDetails: { ...siteContent.footer.companyDetails, gst: e.target.value },
                        },
                      })
                    }
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Copyright Notice Text
                </label>
                <input
                  type="text"
                  value={siteContent.footer?.copyrightText || ''}
                  onChange={(e) =>
                    setSiteContent({
                      ...siteContent,
                      footer: { ...siteContent.footer, copyrightText: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={saving}
                className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl transition shadow-lg shadow-amber-500/20 disabled:opacity-50 text-xs uppercase tracking-wider"
              >
                <Save className="w-4 h-4" />
                <span>Save Footer &amp; Images</span>
              </button>
            </div>
          </form>
        )}

        {/* ---------------- 9. OFFICES & MAP ---------------- */}
        {activeTab === 'maps' && (
          <div className="space-y-10 max-w-5xl">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-400" />
                {editingMapId ? 'Edit Location' : 'Add Corporate Office Location'}
              </h3>

              <form onSubmit={handleMapSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Office Label *
                    </label>
                    <input
                      type="text"
                      value={mapForm.label}
                      onChange={(e) => setMapForm({ ...mapForm, label: e.target.value })}
                      placeholder="e.g. Corporate Office - Noida / Delhi NCR"
                      required
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Full Physical Address *
                    </label>
                    <input
                      type="text"
                      value={mapForm.address}
                      onChange={(e) => setMapForm({ ...mapForm, address: e.target.value })}
                      placeholder="e.g. FLAT NO 701 Block K Homes 121, Noida Sector 121..."
                      required
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Google Maps Embed URL
                  </label>
                  <input
                    type="text"
                    value={mapForm.embedUrl}
                    onChange={(e) => setMapForm({ ...mapForm, embedUrl: e.target.value })}
                    placeholder="https://maps.google.com/maps?q=Noida%20Sector%20121..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 font-mono text-xs"
                  />
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="primaryLocation"
                      checked={mapForm.isPrimary}
                      onChange={(e) => setMapForm({ ...mapForm, isPrimary: e.target.checked })}
                      className="w-4 h-4 text-amber-400 rounded bg-slate-950 border-slate-800 focus:ring-0"
                    />
                    <label htmlFor="primaryLocation" className="text-xs text-slate-300 cursor-pointer">
                      Primary Registered Location
                    </label>
                  </div>

                  <div className="flex gap-3">
                    {editingMapId && (
                      <button
                        type="button"
                        onClick={() => {
                          setEditingMapId(null);
                          setMapForm({
                            label: '',
                            address: '',
                            latitude: 28.5961,
                            longitude: 77.3888,
                            embedUrl: '',
                            isPrimary: false,
                          });
                        }}
                        className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold transition"
                      >
                        Cancel
                      </button>
                    )}
                    <button
                      type="submit"
                      disabled={saving}
                      className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold px-7 py-2.5 rounded-xl transition shadow-lg shadow-amber-500/20 disabled:opacity-50 text-xs uppercase tracking-wider"
                    >
                      <Save className="w-4 h-4" />
                      <span>{editingMapId ? 'Update Location' : 'Save Location'}</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* List */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-white">Configured Office Locations ({maps.length})</h3>
              <div className="grid grid-cols-1 gap-4">
                {maps.map((m) => (
                  <div
                    key={m._id}
                    className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 flex items-start justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-serif text-base text-white">{m.label}</h4>
                        {m.isPrimary && (
                          <span className="text-[9px] bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded font-semibold">
                            Primary
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 font-light">{m.address}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => startEditMap(m)}
                        className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => deleteMap(m._id)}
                        className="p-2 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 rounded-lg transition"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ---------------- 10. CLIENT ENQUIRIES ---------------- */}
        {activeTab === 'enquiries' && (
          <div className="space-y-6 max-w-5xl">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white">Client Consultation Inbox ({enquiries.length})</h3>
              <span className="text-xs text-amber-400 font-mono">Live Sync Active</span>
            </div>

            {enquiries.length === 0 ? (
              <div className="p-12 text-center bg-slate-900/40 border border-slate-800 rounded-2xl space-y-3">
                <Mail className="w-10 h-10 text-slate-600 mx-auto" />
                <p className="text-sm text-slate-400">No client enquiries received yet.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {enquiries.map((enq) => (
                  <div
                    key={enq._id}
                    className={`bg-slate-900/60 border rounded-2xl p-5 transition ${
                      enq.status === 'new' ? 'border-amber-500/40 shadow-lg shadow-amber-500/5' : 'border-slate-800'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-white text-base">{enq.name}</h4>
                          {enq.company && (
                            <span className="text-xs text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full">
                              {enq.company}
                            </span>
                          )}
                          {enq.status === 'new' && (
                            <span className="text-[10px] bg-rose-500/20 text-rose-400 px-2 py-0.5 rounded font-bold uppercase">
                              New
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mt-1">
                          <span>{enq.email}</span>
                          <span>{enq.phone}</span>
                          <span>{new Date(enq.createdAt).toLocaleString()}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => toggleEnquiryStatus(enq._id, enq.status)}
                          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs transition"
                        >
                          Mark as {enq.status === 'new' ? 'Read' : 'Unread'}
                        </button>
                        <button
                          onClick={() => deleteEnquiry(enq._id)}
                          className="p-1.5 text-rose-400 hover:text-rose-300 transition"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="pt-3 space-y-1">
                      {enq.subject && (
                        <p className="text-xs font-semibold text-amber-400 font-serif">
                          Subject: {enq.subject}
                        </p>
                      )}
                      <p className="text-xs text-slate-300 font-light leading-relaxed whitespace-pre-line">
                        {enq.message}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ---------------- 11. ANNOUNCEMENT POPUP ---------------- */}
        {activeTab === 'notifications' && (
          <div className="space-y-10 max-w-5xl">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <BellRing className="w-5 h-5 text-amber-400" />
                Active Announcement Popup Modal
              </h3>

              <form onSubmit={handleNotifSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Popup Title *
                  </label>
                  <input
                    type="text"
                    value={notifForm.title}
                    onChange={(e) => setNotifForm({ ...notifForm, title: e.target.value })}
                    placeholder="e.g. ✨ Welcome to Labradorite Motto"
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Announcement Message Body *
                  </label>
                  <textarea
                    rows="3"
                    value={notifForm.message}
                    onChange={(e) => setNotifForm({ ...notifForm, message: e.target.value })}
                    placeholder="e.g. Indian Air Force Veteran & Professional Expertise for India's Defence Ecosystem..."
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 font-light"
                  />
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="notifActive"
                      checked={notifForm.active}
                      onChange={(e) => setNotifForm({ ...notifForm, active: e.target.checked })}
                      className="w-4 h-4 text-amber-400 rounded bg-slate-950 border-slate-800 focus:ring-0"
                    />
                    <label htmlFor="notifActive" className="text-xs text-slate-300 cursor-pointer">
                      Activate Immediately on All Site Visits
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={saving}
                    className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold px-7 py-2.5 rounded-xl transition shadow-lg shadow-amber-500/20 disabled:opacity-50 text-xs uppercase tracking-wider"
                  >
                    <Save className="w-4 h-4" />
                    <span>Create Announcement</span>
                  </button>
                </div>
              </form>
            </div>

            {/* List */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-white">Announcement History ({notifications.length})</h3>
              <div className="grid grid-cols-1 gap-4">
                {notifications.map((n) => (
                  <div
                    key={n._id}
                    className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 flex items-start justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-white text-base">{n.title}</h4>
                        {n.active && (
                          <span className="text-[9px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-semibold">
                            Active Live
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 font-light">{n.message}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleNotifActive(n._id, n.active)}
                        className={`px-3 py-1.5 rounded-lg text-xs transition ${
                          n.active ? 'bg-amber-500/20 text-amber-400' : 'bg-slate-800 text-slate-300'
                        }`}
                      >
                        {n.active ? 'Deactivate' : 'Activate'}
                      </button>
                      <button
                        onClick={() => deleteNotif(n._id)}
                        className="p-1.5 text-rose-400 hover:text-rose-300 transition"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ---------------- 9. SECTIONS VISIBILITY & DELETION CONTROLS (NEW) ---------------- */}
        {activeTab === 'sections' && (
          <div className="space-y-8 max-w-5xl">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-4">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Layers className="w-5 h-5 text-amber-400" />
                    Website Section Master Controls
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Turn any section on or off instantly. Deleting/hiding a section removes it from the live website immediately without losing its underlying content.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => saveFullSiteContent('Section visibility preferences updated!')}
                  disabled={saving}
                  className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-amber-500/20"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Visibility</span>
                </button>
              </div>

              {/* Sections Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* 1. Hero Section */}
                <div className={`p-5 rounded-2xl border transition ${siteContent.sectionVisibility?.showHero !== false ? 'bg-slate-950/80 border-slate-800' : 'bg-rose-950/20 border-rose-900/40'}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-sm">1. Cinematic Hero Banner</span>
                        <span className={`text-[9px] px-2 py-0.5 rounded font-semibold ${siteContent.sectionVisibility?.showHero !== false ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'}`}>
                          {siteContent.sectionVisibility?.showHero !== false ? 'Live Visible' : 'Hidden / Deleted'}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 font-light leading-relaxed">
                        Top banner with IAF fighter aircraft background, primary headline, credentials badge, and CTA action buttons.
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs text-slate-400">Display on Home:</span>
                    <button
                      type="button"
                      onClick={() => {
                        const current = siteContent.sectionVisibility?.showHero !== false;
                        const updated = { ...siteContent.sectionVisibility, showHero: !current };
                        setSiteContent({ ...siteContent, sectionVisibility: updated });
                        api.put('/admin/site-content', { ...siteContent, sectionVisibility: updated })
                          .then(() => showFeedback(`Hero section ${!current ? 'restored to live site' : 'deleted & hidden from site'}!`));
                      }}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${siteContent.sectionVisibility?.showHero !== false ? 'bg-rose-500/15 text-rose-300 hover:bg-rose-500/25' : 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30'}`}
                    >
                      {siteContent.sectionVisibility?.showHero !== false ? 'Delete / Hide Section' : 'Restore Section'}
                    </button>
                  </div>
                </div>

                {/* 2. Trust Strip */}
                <div className={`p-5 rounded-2xl border transition ${siteContent.sectionVisibility?.showTrustStrip !== false ? 'bg-slate-950/80 border-slate-800' : 'bg-rose-950/20 border-rose-900/40'}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-sm">2. Core Capabilities / Trust Strip</span>
                        <span className={`text-[9px] px-2 py-0.5 rounded font-semibold ${siteContent.sectionVisibility?.showTrustStrip !== false ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'}`}>
                          {siteContent.sectionVisibility?.showTrustStrip !== false ? 'Live Visible' : 'Hidden / Deleted'}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 font-light leading-relaxed">
                        Ribbon showcasing DAP 2020 Aligned, IAF Veteran Leadership, and Aatmanirbhar Bharat credentials.
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs text-slate-400">Display on Home:</span>
                    <button
                      type="button"
                      onClick={() => {
                        const current = siteContent.sectionVisibility?.showTrustStrip !== false;
                        const updated = { ...siteContent.sectionVisibility, showTrustStrip: !current };
                        setSiteContent({ ...siteContent, sectionVisibility: updated });
                        api.put('/admin/site-content', { ...siteContent, sectionVisibility: updated })
                          .then(() => showFeedback(`Trust strip ${!current ? 'restored' : 'deleted & hidden'}!`));
                      }}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${siteContent.sectionVisibility?.showTrustStrip !== false ? 'bg-rose-500/15 text-rose-300 hover:bg-rose-500/25' : 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30'}`}
                    >
                      {siteContent.sectionVisibility?.showTrustStrip !== false ? 'Delete / Hide Section' : 'Restore Section'}
                    </button>
                  </div>
                </div>

                {/* 3. Capabilities / Services Spotlight */}
                <div className={`p-5 rounded-2xl border transition ${siteContent.sectionVisibility?.showServices !== false ? 'bg-slate-950/80 border-slate-800' : 'bg-rose-950/20 border-rose-900/40'}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-sm">3. Strategic Capabilities Spotlight</span>
                        <span className={`text-[9px] px-2 py-0.5 rounded font-semibold ${siteContent.sectionVisibility?.showServices !== false ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'}`}>
                          {siteContent.sectionVisibility?.showServices !== false ? 'Live Visible' : 'Hidden / Deleted'}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 font-light leading-relaxed">
                        Cards displaying top defence consultancy services with direct links to service pages.
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs text-slate-400">Display on Home:</span>
                    <button
                      type="button"
                      onClick={() => {
                        const current = siteContent.sectionVisibility?.showServices !== false;
                        const updated = { ...siteContent.sectionVisibility, showServices: !current };
                        setSiteContent({ ...siteContent, sectionVisibility: updated });
                        api.put('/admin/site-content', { ...siteContent, sectionVisibility: updated })
                          .then(() => showFeedback(`Capabilities spotlight ${!current ? 'restored' : 'deleted & hidden'}!`));
                      }}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${siteContent.sectionVisibility?.showServices !== false ? 'bg-rose-500/15 text-rose-300 hover:bg-rose-500/25' : 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30'}`}
                    >
                      {siteContent.sectionVisibility?.showServices !== false ? 'Delete / Hide Section' : 'Restore Section'}
                    </button>
                  </div>
                </div>

                {/* 4. Brand Philosophy & Mission */}
                <div className={`p-5 rounded-2xl border transition ${siteContent.sectionVisibility?.showPhilosophy !== false ? 'bg-slate-950/80 border-slate-800' : 'bg-rose-950/20 border-rose-900/40'}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-sm">4. Brand Philosophy &amp; Mission</span>
                        <span className={`text-[9px] px-2 py-0.5 rounded font-semibold ${siteContent.sectionVisibility?.showPhilosophy !== false ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'}`}>
                          {siteContent.sectionVisibility?.showPhilosophy !== false ? 'Live Visible' : 'Hidden / Deleted'}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 font-light leading-relaxed">
                        Narrative section with quote, brand transformation ethos, and IAF veteran operational front photo.
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs text-slate-400">Display on Home:</span>
                    <button
                      type="button"
                      onClick={() => {
                        const current = siteContent.sectionVisibility?.showPhilosophy !== false;
                        const updated = { ...siteContent.sectionVisibility, showPhilosophy: !current };
                        setSiteContent({ ...siteContent, sectionVisibility: updated });
                        api.put('/admin/site-content', { ...siteContent, sectionVisibility: updated })
                          .then(() => showFeedback(`Philosophy section ${!current ? 'restored' : 'deleted & hidden'}!`));
                      }}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${siteContent.sectionVisibility?.showPhilosophy !== false ? 'bg-rose-500/15 text-rose-300 hover:bg-rose-500/25' : 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30'}`}
                    >
                      {siteContent.sectionVisibility?.showPhilosophy !== false ? 'Delete / Hide Section' : 'Restore Section'}
                    </button>
                  </div>
                </div>

                {/* 5. FAQs Section */}
                <div className={`p-5 rounded-2xl border transition ${siteContent.sectionVisibility?.showFaqs !== false ? 'bg-slate-950/80 border-slate-800' : 'bg-rose-950/20 border-rose-900/40'}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-sm">5. Frequently Asked Questions (FAQs)</span>
                        <span className={`text-[9px] px-2 py-0.5 rounded font-semibold ${siteContent.sectionVisibility?.showFaqs !== false ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'}`}>
                          {siteContent.sectionVisibility?.showFaqs !== false ? 'Live Visible' : 'Hidden / Deleted'}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 font-light leading-relaxed">
                        Interactive questions and answers accordion on credentials, procurement, and engagement.
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs text-slate-400">Display on Home:</span>
                    <button
                      type="button"
                      onClick={() => {
                        const current = siteContent.sectionVisibility?.showFaqs !== false;
                        const updated = { ...siteContent.sectionVisibility, showFaqs: !current };
                        setSiteContent({ ...siteContent, sectionVisibility: updated });
                        api.put('/admin/site-content', { ...siteContent, sectionVisibility: updated })
                          .then(() => showFeedback(`FAQ section ${!current ? 'restored to live site' : 'deleted & hidden from site'}!`));
                      }}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${siteContent.sectionVisibility?.showFaqs !== false ? 'bg-rose-500/15 text-rose-300 hover:bg-rose-500/25' : 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30'}`}
                    >
                      {siteContent.sectionVisibility?.showFaqs !== false ? 'Delete / Hide Section' : 'Restore Section'}
                    </button>
                  </div>
                </div>

                {/* 6. CTA Section */}
                <div className={`p-5 rounded-2xl border transition ${siteContent.sectionVisibility?.showCta !== false ? 'bg-slate-950/80 border-slate-800' : 'bg-rose-950/20 border-rose-900/40'}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-sm">6. Direct Strategic Engagement (CTA)</span>
                        <span className={`text-[9px] px-2 py-0.5 rounded font-semibold ${siteContent.sectionVisibility?.showCta !== false ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'}`}>
                          {siteContent.sectionVisibility?.showCta !== false ? 'Live Visible' : 'Hidden / Deleted'}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 font-light leading-relaxed">
                        Bottom luxury callout banner with telephone numbers and strategic consultation appointment link.
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs text-slate-400">Display on Pages:</span>
                    <button
                      type="button"
                      onClick={() => {
                        const current = siteContent.sectionVisibility?.showCta !== false;
                        const updated = { ...siteContent.sectionVisibility, showCta: !current };
                        setSiteContent({ ...siteContent, sectionVisibility: updated });
                        api.put('/admin/site-content', { ...siteContent, sectionVisibility: updated })
                          .then(() => showFeedback(`CTA banner ${!current ? 'restored' : 'deleted & hidden'}!`));
                      }}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${siteContent.sectionVisibility?.showCta !== false ? 'bg-rose-500/15 text-rose-300 hover:bg-rose-500/25' : 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30'}`}
                    >
                      {siteContent.sectionVisibility?.showCta !== false ? 'Delete / Hide Section' : 'Restore Section'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ---------------- 10. HOME PHILOSOPHY & MISSION (NEW) ---------------- */}
        {activeTab === 'philosophy' && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              saveFullSiteContent('Home Philosophy & Mission content saved permanently!');
            }}
            className="space-y-8 max-w-5xl"
          >
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                  Home Philosophy &amp; Mission Section (Word-by-Word Editable)
                </h3>
                <span className="text-xs text-slate-400">Controls the story on the homepage</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Eyebrow Small Tag
                  </label>
                  <input
                    type="text"
                    value={siteContent.home?.philosophyEyebrow || ''}
                    onChange={(e) =>
                      setSiteContent({
                        ...siteContent,
                        home: { ...siteContent.home, philosophyEyebrow: e.target.value },
                      })
                    }
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Main Heading
                  </label>
                  <input
                    type="text"
                    value={siteContent.home?.philosophyHeading || ''}
                    onChange={(e) =>
                      setSiteContent({
                        ...siteContent,
                        home: { ...siteContent.home, philosophyHeading: e.target.value },
                      })
                    }
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 font-serif"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Client Belief / Philosophy Highlight Quote
                </label>
                <textarea
                  rows="2"
                  value={siteContent.home?.philosophyQuote || ''}
                  onChange={(e) =>
                    setSiteContent({
                      ...siteContent,
                      home: { ...siteContent.home, philosophyQuote: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 font-serif italic"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Main Descriptive Body Text
                </label>
                <textarea
                  rows="4"
                  value={siteContent.home?.philosophyText || ''}
                  onChange={(e) =>
                    setSiteContent({
                      ...siteContent,
                      home: { ...siteContent.home, philosophyText: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 font-light leading-relaxed"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Operational Front Visual Image URL or File Upload
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={siteContent.home?.philosophyImage || ''}
                    onChange={(e) =>
                      setSiteContent({
                        ...siteContent,
                        home: { ...siteContent.home, philosophyImage: e.target.value },
                      })
                    }
                    className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                  <label className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold cursor-pointer flex items-center gap-1.5 shrink-0 transition">
                    <Upload className="w-3.5 h-3.5 text-amber-400" />
                    <span>Upload Image</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) =>
                        handleImageUpload(e.target.files[0], (url) =>
                          setSiteContent({
                            ...siteContent,
                            home: { ...siteContent.home, philosophyImage: url },
                          })
                        )
                      }
                    />
                  </label>
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t border-slate-800">
                <button
                  type="submit"
                  disabled={saving}
                  className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl transition shadow-lg shadow-amber-500/20 disabled:opacity-50 text-xs uppercase tracking-wider"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Philosophy Content</span>
                </button>
              </div>
            </div>
          </form>
        )}

        {/* ---------------- 11. FAQS MANAGER (NEW) ---------------- */}
        {activeTab === 'faqs' && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              saveFullSiteContent('Frequently Asked Questions updated successfully!');
            }}
            className="space-y-8 max-w-5xl"
          >
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-4">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-amber-400" />
                    FAQ Manager (Edit Every Question &amp; Answer)
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Manage all questions and answers displayed in the home page FAQ accordion.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      const current = siteContent.faqs || [];
                      setSiteContent({
                        ...siteContent,
                        faqs: [
                          ...current,
                          {
                            q: 'New Question: e.g. What is the scope of MRO setup advisory?',
                            a: 'Answer: e.g. We provide end-to-end guidance from facility planning to certification...',
                          },
                        ],
                      });
                    }}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-amber-400 border border-amber-500/30 font-semibold rounded-xl text-xs transition"
                  >
                    + Add Question
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold px-6 py-2 rounded-xl transition shadow-lg shadow-amber-500/20 text-xs uppercase tracking-wider"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save All FAQs</span>
                  </button>
                </div>
              </div>

              {/* FAQ Section Master Switch */}
              <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-sm font-semibold text-white block">FAQ Section Live Display</span>
                  <span className="text-xs text-slate-400">
                    {siteContent.sectionVisibility?.showFaqs !== false ? 'FAQ section is currently visible on the homepage' : 'FAQ section is currently hidden from the homepage'}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const current = siteContent.sectionVisibility?.showFaqs !== false;
                    const updated = { ...siteContent.sectionVisibility, showFaqs: !current };
                    setSiteContent({ ...siteContent, sectionVisibility: updated });
                    api.put('/admin/site-content', { ...siteContent, sectionVisibility: updated })
                      .then(() => showFeedback(`FAQ section ${!current ? 'restored to live site' : 'deleted & hidden from site'}!`));
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${siteContent.sectionVisibility?.showFaqs !== false ? 'bg-rose-500/15 text-rose-300 hover:bg-rose-500/25' : 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30'}`}
                >
                  {siteContent.sectionVisibility?.showFaqs !== false ? 'Delete / Hide FAQ Section' : 'Show FAQ Section'}
                </button>
              </div>

              {/* Individual FAQs list */}
              <div className="space-y-4">
                {(siteContent.faqs || []).map((faq, idx) => (
                  <div key={idx} className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-amber-400 font-mono">Q{idx + 1}</span>
                      <button
                        type="button"
                        onClick={() => {
                          const updated = [...siteContent.faqs];
                          updated.splice(idx, 1);
                          setSiteContent({ ...siteContent, faqs: updated });
                        }}
                        className="p-1.5 text-rose-400 hover:text-rose-300 rounded hover:bg-rose-500/10 text-xs flex items-center gap-1 transition"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Delete Q&amp;A</span>
                      </button>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-slate-400 mb-1">
                        Question Text
                      </label>
                      <input
                        type="text"
                        value={faq.q}
                        onChange={(e) => {
                          const updated = [...siteContent.faqs];
                          updated[idx].q = e.target.value;
                          setSiteContent({ ...siteContent, faqs: updated });
                        }}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2 text-sm text-white font-medium focus:border-amber-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-slate-400 mb-1">
                        Answer Text
                      </label>
                      <textarea
                        rows="3"
                        value={faq.a}
                        onChange={(e) => {
                          const updated = [...siteContent.faqs];
                          updated[idx].a = e.target.value;
                          setSiteContent({ ...siteContent, faqs: updated });
                        }}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2 text-xs text-slate-300 font-light leading-relaxed focus:border-amber-400 focus:outline-none"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-end pt-4 border-t border-slate-800">
                <button
                  type="submit"
                  disabled={saving}
                  className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl transition shadow-lg shadow-amber-500/20 disabled:opacity-50 text-xs uppercase tracking-wider"
                >
                  <Save className="w-4 h-4" />
                  <span>Save All FAQ Questions &amp; Answers</span>
                </button>
              </div>
            </div>
          </form>
        )}
      </main>
    </div>
  );
}
