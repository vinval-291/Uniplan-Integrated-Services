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
    image: 'https://images.unsplash.com/photo-1522071823992-b48e17395402?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'consulting',
    title: 'Management Consulting',
    description: 'Expert advice on business strategy, operations, and organizational growth.',
    icon: Lightbulb,
    link: '/services#consulting',
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
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=100"
  },
  {
    id: 2,
    name: "Chidinma Okoro",
    company: "Lead City University",
    text: "The professional training modules provided by Uniplan have significantly improved our staff's communication and management skills.",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=100"
  },
  {
    id: 3,
    name: "Samuel Johnson",
    company: "New Horizons",
    text: "Strategic consulting from Uniplan gave us a fresh perspective on our operations. We've seen a 20% increase in efficiency since implementation.",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=100"
  }
];
