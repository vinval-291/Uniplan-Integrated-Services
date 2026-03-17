import React from 'react';
import { motion } from 'motion/react';
import { Hammer, Mail, Phone, Clock } from 'lucide-react';

const Maintenance = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
        <div className="bg-brand-primary p-12 text-center text-white">
          <motion.div
            initial={{ rotate: -20 }}
            animate={{ rotate: 20 }}
            transition={{ repeat: Infinity, duration: 2, repeatType: "reverse", ease: "easeInOut" }}
            className="inline-block mb-6"
          >
            <Hammer size={80} />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Under Maintenance</h1>
          <p className="text-brand-blue-grey/80 text-lg">
            We're currently performing some scheduled updates to improve your experience.
          </p>
        </div>
        
        <div className="p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 mb-1">Estimated Time</h3>
                <p className="text-slate-600">We'll be back online shortly. Thank you for your patience.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 mb-1">Email Us</h3>
                <p className="text-slate-600">admin@uniplanintegratedservices.com</p>
              </div>
            </div>
          </div>
          
          <div className="text-center pt-8 border-top border-slate-100">
            <p className="text-slate-500 mb-6">Need urgent assistance?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:08105314346" 
                className="flex items-center gap-2 px-6 py-3 bg-slate-100 rounded-full text-slate-700 font-bold hover:bg-slate-200 transition-all"
              >
                <Phone size={18} /> 08105314346
              </a>
              <a 
                href="mailto:admin@uniplanintegratedservices.com" 
                className="flex items-center gap-2 px-6 py-3 bg-brand-primary text-white rounded-full font-bold hover:bg-brand-primary/90 transition-all"
              >
                <Mail size={18} /> Send Email
              </a>
            </div>
          </div>
        </div>
        
        <div className="bg-slate-50 p-6 text-center text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} Uniplan Integrated Services. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
