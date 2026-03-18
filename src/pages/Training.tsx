import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { TRAINING_PROGRAMS, COURSES } from '../constants';

const Training = () => {
  const certifications = COURSES.map(course => course.title);

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-brand-off-white py-16 border-b border-slate-100">
        <div className="section-padding text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-brand-primary mx-auto mb-8 shadow-xl"
          >
            <GraduationCap size={40} />
          </motion.div>
          <h1 className="text-5xl mb-6">Professional Training</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Equipping individuals and organizations with essential skills for the modern workplace through specialized, industry-recognized training modules.
          </p>
        </div>
      </section>

      {/* Training Modules */}
      <section className="py-16 bg-white">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TRAINING_PROGRAMS.map((program, index) => (
              <motion.div
                key={program}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-8 rounded-xl bg-brand-blue-grey border border-transparent hover:border-brand-primary/20 hover:bg-white hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-brand-primary mb-6 shadow-sm group-hover:bg-brand-primary/10 transition-all">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">{program}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Comprehensive curriculum designed by industry experts to deliver practical, actionable knowledge.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-brand-blue-grey border-y border-slate-100">
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl mb-8 text-brand-primary font-bold">Professional Certifications</h2>
              <p className="text-slate-600 mb-10 text-lg leading-relaxed">
                All our training courses are designed to provide practical skills and knowledge, complete with comprehensive training materials and certificates that are widely respected in the industry.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert) => (
                  <div key={cert} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                    <Award size={20} className="text-brand-primary shrink-0" />
                    <span className="text-sm font-semibold text-slate-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" 
                  alt="Training Session" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Format */}
      <section className="py-16 bg-white">
        <div className="section-padding text-center">
          <h2 className="text-3xl mb-16">Flexible Training Formats</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'In-Person Training', desc: 'Hands-on sessions at our facility or your corporate office.' },
              { title: 'Virtual Workshops', desc: 'Interactive online sessions accessible from anywhere.' },
              { title: 'Custom Corporate', desc: 'Bespoke programs tailored to your team\'s specific needs.' }
            ].map((format) => (
              <div key={format.title} className="space-y-4">
                <div className="w-16 h-16 bg-brand-primary/5 rounded-full flex items-center justify-center text-brand-primary mx-auto mb-6">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="text-xl font-bold">{format.title}</h4>
                <p className="text-slate-500">{format.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Training;
