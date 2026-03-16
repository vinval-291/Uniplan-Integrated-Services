import React from 'react';
import { motion } from 'motion/react';
import { CORE_VALUES } from '../constants';
import { Shield, Target, Eye, History } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-brand-blue-grey py-16">
        <div className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl mb-8">About Uniplan Integrated Services</h1>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Uniplan Integrated Services Ltd is a leading provider of Management Consulting, Business Development, Human Resource Management, Recruitment Process Outsourcing (RPO), and Specialized Training Services.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              As a subsidiary of Uniplan Systems (Nig) Limited, which was established in 1998, we have built a strong reputation for delivering strategic, innovative, and client-centered solutions.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" 
                alt="Office Environment" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="section-padding grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-12 rounded-3xl bg-brand-blue-grey border border-slate-100 shadow-xl">
            <Target size={48} className="text-brand-primary mb-8" />
            <h2 className="text-3xl mb-6 text-brand-primary font-bold">Our Mission</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              To deliver strategic, innovative, and high-quality solutions that enable organizations to enhance operational efficiency, optimize business performance, and achieve sustainable growth.
            </p>
          </div>
          <div className="p-12 rounded-3xl bg-slate-900 text-white shadow-xl">
            <Eye size={48} className="text-brand-accent mb-8" />
            <h2 className="text-3xl mb-6">Our Vision</h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              To be the leading provider of Management Consulting, HR solutions, and training services in Nigeria, known for our commitment to excellence, innovation, and client satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-brand-off-white">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Our Core Values</h2>
            <p className="text-slate-500">The principles that guide everything we do.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {CORE_VALUES.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-slate-100 text-center shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-brand-primary/5 rounded-full flex items-center justify-center text-brand-primary mx-auto mb-6">
                  <Shield size={24} />
                </div>
                <h4 className="font-bold mb-2">{value.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-white">
        <div className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800" 
                alt="Corporate History" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-6">
              <History size={32} className="text-brand-primary" />
              <h2 className="text-3xl">Our Journey</h2>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Established in 1998 as Uniplan Systems (Nig) Limited, we have evolved into a multi-faceted consulting firm. Over the decades, we have pride ourselves on our deep understanding of local and global market dynamics.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              This expertise allows us to offer customized services that meet the unique needs of our diverse clientele, ranging from academic institutions to top-tier financial organizations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
