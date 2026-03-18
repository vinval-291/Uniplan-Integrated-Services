import { 
  Users, 
  Briefcase, 
  GraduationCap, 
  ShieldCheck, 
  Lightbulb, 
  Handshake,
  Search,
  ExternalLink,
  Award,
  BookOpen,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ChevronRight,
  Menu,
  X,
  ArrowRight
} from 'lucide-react';

export const SERVICES = [
  {
    id: 'recruitment',
    title: 'Recruitment Services',
    description: 'Tailored recruitment solutions that match the right candidates with the right roles.',
    icon: Users,
    link: '/services#recruitment',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'outsourcing',
    title: 'Outsourcing Services',
    description: 'Providing skilled manpower to enhance business operations, allowing clients to focus on core functions.',
    icon: Briefcase,
    link: '/services#outsourcing',
    image: 'https://images.unsplash.com/photo-1768796371784-3ad0bf2723a0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'educational-consulting',
    title: 'Educational Consulting',
    description: 'Expert on educational advice. Degree conversion courses.',
    icon: ShieldCheck,
    link: '/services#educational-consulting',
    image: 'https://images.unsplash.com/photo-1622555063306-9930f396f051?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'management-consulting',
    title: 'Management Consulting',
    description: 'Expert advice on business strategy, operations, and organizational growth.',
    icon: Lightbulb,
    link: '/services#management-consulting',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'training',
    title: 'Professional Training',
    description: 'Comprehensive training modules designed to equip individuals with essential corporate skills.',
    icon: GraduationCap,
    link: '/services#training',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'vocational',
    title: 'Vocational Training',
    description: 'Hands-on practical skills development in Resin Art, Catering, Fashion Design, and more.',
    icon: Award,
    link: '/services#vocational',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'branding',
    title: 'Graphics & Branding',
    description: 'Creative design services to enhance brand identity, visibility, and marketing efforts.',
    icon: ShieldCheck,
    link: '/services#branding',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800'
  }
];

export const TRAINING_PROGRAMS = [
  'Public Speaking & Effective Communication',
  'Risk Management',
  'Health, Safety, and Environment (HSE)',
  'Stress Management',
  'Customer Service Excellence',
  'Conflict Management',
  'Workplace Ethics',
  'Effective Negotiation',
  'Marketing and Selling Techniques'
];

export const CLIENTS = [
  'Redeemers University',
  'Stanbic Pensions',
  'Fate Foundation',
  'Ashdam Solar Limited',
  'KPMG',
  'University of Ibadan Consultancy Services',
  'Access Bank',
  'Sterling Bank',
  'Lead City University',
  'New Horizons'
];

export const COURSES = [
  {
    id: 'hrm',
    title: 'Human Resource Management',
    category: 'Professional',
    duration: '8 Weeks',
    description: 'Master the art of managing people and organizational culture.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=400',
    details: 'This comprehensive course covers recruitment, employee relations, performance management, and strategic HR planning. You will learn how to align human capital with business objectives and foster a productive workplace culture.'
  },
  {
    id: 'project-mgmt',
    title: 'Project Management Professional',
    category: 'Management',
    duration: '10 Weeks',
    description: 'Learn to lead complex projects from inception to completion.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400',
    details: 'Gain mastery over project lifecycles, risk assessment, resource allocation, and stakeholder management. This course prepares you for global certifications and equips you with the tools to deliver projects on time and within budget.'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing Strategy',
    category: 'Marketing',
    duration: '6 Weeks',
    description: 'Drive growth through modern digital marketing channels.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400',
    details: 'Explore SEO, SEM, social media marketing, content strategy, and data analytics. Learn how to build a powerful online presence, engage target audiences, and measure the ROI of your digital campaigns.'
  },
  {
    id: 'hse',
    title: 'Health, Safety & Environment',
    category: 'Safety',
    duration: '4 Weeks',
    description: 'Ensure workplace safety and environmental compliance.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=400',
    details: 'Understand occupational health standards, hazard identification, risk control, and environmental regulations. This course is essential for safety officers and managers looking to implement robust safety management systems.'
  },
  {
    id: 'customer-care',
    title: 'Customer Care & Service Excellence',
    category: 'Professional',
    duration: '4 Weeks',
    description: 'Master the art of delivering exceptional customer experiences.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=400',
    details: 'Learn effective communication, conflict resolution, and relationship management. This course focuses on building customer loyalty and handling difficult situations with professionalism.'
  },
  {
    id: 'transport-logistics',
    title: 'Transport and Logistics Management',
    category: 'Management',
    duration: '8 Weeks',
    description: 'Optimize supply chain and transportation operations.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=400',
    details: 'Covering fleet management, supply chain optimization, international shipping, and warehouse operations. Ideal for professionals looking to streamline logistics processes.'
  },
  {
    id: 'public-speaking',
    title: 'Public Speaking & Effective Communication',
    category: 'Professional',
    duration: '6 Weeks',
    description: 'Build confidence and master the art of persuasive speaking.',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=400',
    details: 'Learn to structure speeches, use body language effectively, and engage any audience. Perfect for leaders, managers, and anyone looking to improve their presentation skills.'
  },
  {
    id: 'quality-control',
    title: 'Quality Control and Assurance',
    category: 'Management',
    duration: '8 Weeks',
    description: 'Implement robust quality management systems.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400',
    details: 'Learn ISO standards, statistical process control, and quality auditing. This course provides the tools to ensure products and services meet or exceed customer expectations.'
  },
  {
    id: 'negotiation',
    title: 'Negotiation Techniques',
    category: 'Professional',
    duration: '4 Weeks',
    description: 'Master the art of win-win negotiations.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400',
    details: 'Develop strategic negotiation skills, understand psychological triggers, and learn to close deals effectively while maintaining strong professional relationships.'
  }
];

export const CORE_VALUES = [
  { title: 'Integrity', description: 'Upholding the highest ethical standards.' },
  { title: 'Excellence', description: 'Delivering exceptional results through dedication.' },
  { title: 'Innovation', description: 'Adopting cutting-edge solutions for business challenges.' },
  { title: 'Customer-Centricity', description: 'Placing clients at the heart of everything we do.' },
  { title: 'Collaboration', description: 'Fostering a culture of teamwork.' }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Olawale Adeyemi",
    company: "Ashdam Solar Limited",
    text: "Uniplan's recruitment services helped us find the perfect technical talent for our expansion. Their professional approach is unmatched.",
    logo: "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
  },
  {
    id: 2,
    name: "Chidinma Okoro",
    company: "Lead City University",
    text: "The professional training modules provided by Uniplan have significantly improved our staff's communication and management skills.",
    logo: "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
  },
  {
    id: 3,
    name: "Samuel Johnson",
    company: "New Horizons",
    text: "Strategic consulting from Uniplan gave us a fresh perspective on our operations. We've seen a 20% increase in efficiency since implementation.",
    logo: "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
  },
  {
    id: 4,
    name: "Bisi Akande",
    company: "First Bank Nigeria",
    text: "Their outsourcing solutions allowed us to focus on our core banking operations while they handled our support staff efficiently.",
    logo: "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
  },
  {
    id: 5,
    name: "Emeka Nwosu",
    company: "KPMG Nigeria",
    text: "The management consulting team at Uniplan provided deep insights that helped us restructure our regional operations effectively.",
    logo: "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
  },
  {
    id: 6,
    name: "Fatima Yusuf",
    company: "Sterling Bank",
    text: "We've partnered with Uniplan for several vocational training cycles, and the quality of skill acquisition is consistently high.",
    logo: "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
  }
];
