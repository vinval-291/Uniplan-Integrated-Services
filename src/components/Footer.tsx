import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Twitter, Music } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <img 
              src="https://i.postimg.cc/F7xq7p9F/Uniplan-New-Web-Logo-removebg-preview.png" 
              alt="UNIPLAN Logo" 
              className="h-10 w-auto object-contain brightness-0 invert"
              referrerPolicy="no-referrer"
            />
          </Link>
          <p className="text-sm leading-relaxed mb-6">
            Empowering Businesses Through Strategic Consulting, HR Solutions, and Professional Training.
          </p>
          <div className="flex gap-4">
            <a href="https://facebook.com/uniplanintegrated" target="_blank" rel="noopener noreferrer" className="hover:text-brand-secondary transition-colors" title="Facebook"><Facebook size={20} /></a>
            <a href="https://instagram.com/uniplanintegratedservices" target="_blank" rel="noopener noreferrer" className="hover:text-brand-secondary transition-colors" title="Instagram"><Instagram size={20} /></a>
            <a href="https://x.com/Uniplan_ltd" target="_blank" rel="noopener noreferrer" className="hover:text-brand-secondary transition-colors" title="X (Twitter)"><Twitter size={20} /></a>
            <a href="https://tiktok.com/@uniplanintegratedservices" target="_blank" rel="noopener noreferrer" className="hover:text-brand-secondary transition-colors" title="TikTok"><Music size={20} /></a>
            <a href="https://linkedin.com/company/uniplan-integrated-services" target="_blank" rel="noopener noreferrer" className="hover:text-brand-secondary transition-colors" title="LinkedIn"><Linkedin size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/about" className="hover:text-brand-secondary">About Us</Link></li>
            <li><Link to="/services" className="hover:text-brand-secondary">Our Services</Link></li>
            <li><Link to="/training" className="hover:text-brand-secondary">Training Programs</Link></li>
            <li><Link to="/team" className="hover:text-brand-secondary">Our Team</Link></li>
            <li><Link to="/contact" className="hover:text-brand-secondary">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Services</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/services" className="hover:text-brand-secondary">Recruitment</Link></li>
            <li><Link to="/services" className="hover:text-brand-secondary">Educational Consult</Link></li>
            <li><Link to="/services" className="hover:text-brand-secondary">Outsourcing</Link></li>
            <li><Link to="/services" className="hover:text-brand-secondary">Management Consulting</Link></li>
            <li><Link to="/services" className="hover:text-brand-secondary">Vocational Training</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Contact Info</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="text-brand-primary shrink-0" />
              <span>No 4 beside Akala House, Mokola, Ibadan, Oyo State</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="text-brand-primary shrink-0" />
              <div className="flex flex-col gap-1">
                <a href="tel:08105314346" className="hover:text-brand-secondary transition-colors">08105314346</a>
                <a href="tel:08025529320" className="hover:text-brand-secondary transition-colors">08025529320</a>
              </div>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="text-brand-primary shrink-0" />
              <a href="mailto:contact@uniplanintegratedservices.com" className="hover:text-brand-secondary transition-colors">
                contact@uniplanintegratedservices.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-slate-800 text-center text-xs space-y-2">
        <p>&copy; {new Date().getFullYear()} Uniplan Integrated Services Ltd. All rights reserved.</p>
        <p className="text-slate-500">
          This website is created by{' '}
          <a 
            href="https://linkedin.com/in/kuteyi-oluwaloye-vincent" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-brand-primary hover:text-brand-secondary transition-colors font-medium"
          >
            Kuteyi Vincent
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
