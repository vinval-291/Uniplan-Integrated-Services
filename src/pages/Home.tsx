import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronRight, Briefcase, Users, GraduationCap, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, CLIENTS, TESTIMONIALS } from '../constants';

const HERO_SLIDES = [
  {
    title: "Strategic Management Consulting",
    description: "Expert guidance to optimize your business operations and achieve sustainable growth in a competitive market.",
    icon: BarChart,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Professional HR Solutions",
    description: "Comprehensive human resource management and recruitment services tailored to your organizational needs.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Specialized Training Programs",
    description: "Equipping your workforce with essential skills through industry-recognized professional training modules.",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800"
  }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const heroTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);

    return () => {
      clearInterval(heroTimer);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Slider */}
      <section className="relative min-h-screen flex items-center pt-20 bg-brand-blue-grey overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-primary via-transparent to-transparent"></div>
        </div>
        
        <div className="section-padding relative z-10 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block py-1 px-3 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest mb-6"
                >
                  Uniplan Services • {HERO_SLIDES[currentSlide].title}
                </motion.span>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl md:text-7xl mb-6 leading-[1.1]"
                >
                  {HERO_SLIDES[currentSlide].title.split(' ').slice(0, -1).join(' ')} <span className="text-brand-primary">{HERO_SLIDES[currentSlide].title.split(' ').pop()}</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed"
                >
                  {HERO_SLIDES[currentSlide].description}
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link to="/services" className="btn-primary flex items-center gap-2">
                    Explore Services <ArrowRight size={18} />
                  </Link>
                  <Link to="/contact" className="btn-secondary flex items-center gap-2">
                    Partner With Us
                  </Link>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                  <img 
                    src={HERO_SLIDES[currentSlide].image} 
                    alt={HERO_SLIDES[currentSlide].title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden md:block max-w-[200px]">
                  <div className="text-brand-primary font-bold text-3xl mb-1">25+</div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Years of Industry Experience</div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Indicators */}
          <div className="flex gap-3 mt-12">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-12 bg-brand-primary' : 'w-2 bg-slate-300'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-white py-16">
        <div className="section-padding">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-6">Leading Provider of Management Consulting & HR Solutions</h2>
            <p className="text-slate-600 leading-relaxed">
              Uniplan Integrated Services Ltd is a leading provider of management consulting, recruitment, outsourcing, and professional training services in Nigeria. With deep industry experience and a client-focused approach, we deliver strategic solutions that help organizations grow and thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-brand-off-white border border-slate-100 hover:border-brand-primary/20 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-primary/5 flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary/10 transition-colors">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl mb-4">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="aspect-video rounded-lg overflow-hidden mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <Link to={service.link} className="text-brand-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  Learn More <ChevronRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/services" className="btn-primary inline-flex items-center gap-2">
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CEO Spotlight */}
      <section className="bg-brand-blue-grey py-16">
        <div className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-brand-primary font-bold text-sm uppercase tracking-widest mb-4 block">Leadership Spotlight</span>
            <h2 className="text-4xl mb-6 leading-tight">Visionary Leadership for a Changing World</h2>
            <p className="text-slate-600 mb-8 leading-relaxed italic border-l-4 border-brand-primary pl-6">
              "Dr. Kunle Awotiku is a visionary business consultant and leader committed to developing organizations and empowering professionals through strategic management solutions and impactful training initiatives."
            </p>
            <Link to="/ceo" className="btn-primary inline-block">
              View CEO Profile
            </Link>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://i.postimg.cc/1zGCRJWQ/Dr_Kunle_Awotiku.png" 
                alt="Dr. Kunle Awotiku" 
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                <h3 className="text-2xl font-bold">Dr. Kunle Awotiku</h3>
                <p className="text-brand-accent font-semibold">CEO, Uniplan Integrated Services Ltd</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="bg-white py-16">
        <div className="section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Trusted by Leading Organizations</h2>
            <p className="text-slate-500">We have had the privilege of working with some of Nigeria's most distinguished organizations.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
            {CLIENTS.map((client) => (
              <div key={client} className="flex items-center justify-center font-display font-black text-2xl text-slate-400">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-brand-off-white py-16">
        <div className="section-padding">
          <div className="text-center mb-12">
            <span className="text-brand-primary font-bold text-sm uppercase tracking-widest mb-4 block">Success Stories</span>
            <h2 className="text-4xl mb-6">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={testimonial.logo} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover border border-slate-100"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                    <p className="text-xs text-brand-primary font-semibold uppercase tracking-wider">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed italic flex-grow">
                  "{testimonial.text}"
                </p>
                <div className="mt-6 flex text-brand-accent">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-blue-grey py-16 border-t border-slate-100">
        <div className="section-padding text-center">
          <h2 className="text-4xl mb-6 text-brand-primary font-bold">Ready to Transform Your Organization?</h2>
          <p className="text-slate-600 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            Partner with Uniplan Integrated Services for consulting, HR solutions, and professional training. Let's build a sustainable future together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary px-10 py-4">
              Book Consultation
            </Link>
            <Link to="/contact" className="btn-secondary px-10 py-4">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
