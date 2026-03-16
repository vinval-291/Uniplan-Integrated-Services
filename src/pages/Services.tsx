import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Services = () => {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-brand-blue-grey py-12">
        <div className="section-padding text-center">
          <h1 className="text-5xl mb-6">Our Services</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Comprehensive business solutions tailored to meet the unique needs of organizations and individuals in a dynamic market.
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-white">
        <div className="section-padding space-y-20">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-8">
                  <service.icon size={32} />
                </div>
                <h2 className="text-4xl mb-6">{service.title}</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                
                {service.id === 'recruitment' && (
                  <div className="bg-brand-off-white p-6 rounded-xl border border-slate-100">
                    <h4 className="font-bold text-brand-primary mb-4">Our Recruitment Charges:</h4>
                    <ul className="space-y-3 text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={18} className="text-brand-secondary shrink-0 mt-0.5" />
                        <span><strong>1-5 candidates:</strong> N10,000 per candidate (inclusive of placement within 3 months)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={18} className="text-brand-secondary shrink-0 mt-0.5" />
                        <span><strong>6-10 candidates:</strong> N7,000 per candidate (inclusive of placement within 3 months)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={18} className="text-brand-secondary shrink-0 mt-0.5" />
                        <span><strong>Above 10 candidates:</strong> N5,000 per candidate (inclusive of placement within 3 months)</span>
                      </li>
                    </ul>
                  </div>
                )}

                {service.id === 'vocational' && (
                  <div className="grid grid-cols-2 gap-4">
                    {['Resin Art', 'Tye and Dye', 'Catering', 'Cosmetology', 'Fashion Design', 'Computer Skills', 'Barbing'].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-slate-700">
                        <CheckCircle2 size={16} className="text-brand-primary" />
                        <span className="text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <div className={`relative ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-brand-blue-grey rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-primary py-16 text-white">
        <div className="section-padding text-center">
          <h2 className="text-4xl mb-8">Need a Custom Solution?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-12 text-lg">
            Our experts are ready to design a strategic approach that fits your specific organizational goals.
          </p>
          <button className="bg-white text-brand-primary px-8 py-4 rounded-md font-bold hover:bg-slate-100 transition-all">Request a Proposal</button>
        </div>
      </section>
    </div>
  );
};

export default Services;
