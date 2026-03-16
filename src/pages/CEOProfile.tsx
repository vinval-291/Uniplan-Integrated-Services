import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Mail, Award, BookOpen, Star } from 'lucide-react';

const CEOProfile = () => {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-brand-blue-grey py-16">
        <div className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://i.postimg.cc/1zGCRJWQ/Dr_Kunle_Awotiku.png" 
                alt="Dr. Kunle Awotiku" 
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-primary text-white p-8 rounded-2xl shadow-xl">
              <div className="text-3xl font-bold">25+</div>
              <div className="text-xs uppercase tracking-widest font-semibold opacity-80">Years Leadership</div>
            </div>
          </motion.div>
          
          <div>
            <span className="text-brand-primary font-bold text-sm uppercase tracking-widest mb-4 block">CEO & Founder</span>
            <h1 className="text-5xl mb-6">Dr. Kunle Awotiku</h1>
            <p className="text-slate-600 text-xl leading-relaxed mb-8 italic">
              "Empowering organizations and professionals through strategic management solutions and impactful training initiatives."
            </p>
            <div className="flex gap-4 mb-10">
              <a href="#" className="btn-primary flex items-center gap-2">
                <Linkedin size={18} /> LinkedIn Profile
              </a>
              <a href="mailto:admin@uniplanintegratedservices.com" className="btn-secondary flex items-center gap-2">
                <Mail size={18} /> Contact Directly
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-16 bg-white">
        <div className="section-padding max-w-4xl">
          <h2 className="text-3xl mb-8 flex items-center gap-3">
            <Star className="text-brand-accent" /> Professional Biography
          </h2>
          <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
            <p>
              Dr. Kunle Awotiku is a visionary business consultant and leader committed to developing organizations and empowering professionals through strategic management solutions and impactful training initiatives.
            </p>
            <p>
              With over two decades of experience in management consulting, HR solutions, and professional training, Dr. Awotiku has been at the forefront of organizational development in Nigeria. He founded Uniplan Systems (Nig) Limited in 1998, which has since grown into a leading name in the industry.
            </p>
            <p>
              His leadership philosophy centers on integrity, excellence, and the belief that human capital is the most valuable asset of any organization. He has successfully led numerous recruitment drives, corporate restructuring projects, and high-impact training programs for both public and private sector clients.
            </p>
            <p>
              Amb Dr Kunle Awotiku hails from Ikole town in Ekiti State. He is the MD/CEO of Uniplan Integrated Services, a management consulting firm that provides services in Trainings, Business Development, Recruitment Process Outsourcing, Human Resource Management and Consulting. He is also the Director of Scriploque Academy, an academy that discovers, trains and develops talents. He is the Chairman of Kunle Awotiku Foundation.
              He brings on board over 15 years of business consulting and personnel management experience. He is a public speaker that believes in the power of words and consistently operates on the mission statement; 'Your word determines your worth'. He is popularly known as Mr Word. He is passionate about raising world class speakers and this journey has begun as he has trained over five thousand persons becoming speakers while in turn mentoring over 380 speakers who are doing great. A fashionista and one time model.
            </p>
            <p>
              He has addressed over 500 thousand youths across the nation and some parts in Africa. He is a Human Resource expert, an Internationally certified Life Coach, a Neuro linguistics programmer, an Emotional Intelligence enthusiast, a Career builder, a Motivational speaker, a Wellness coach and a Serial entrepreneur.
              He is one of the faculty/facilitator for Fate Foundation on entrepreneurship. He is a consultant on communication for some Institutions and a consultant as well with NYSC on entrepreneurship development; and a facilitator on employability skills which has taken him across the six geo-political zones.
              He stands as a proactive change agent and an author of over eighteen books including; "Becoming the best candidate for that job", "Speak out", "Niche", "Unveil", "365 Wisdom words" and "The Destiny Child".
              He holds a first degree in Agricultural Economics and Extension and a second degree in Personnel Psychology. He is a Doctor of Philosophy in Public Administration from Prowess University, Delaware, USA.
              He is the Senior Special Adviser on Political matters to Hon. Olufunke Comforter Adeniyi-Olajide, Oyo State House of Assembly member. Fellow, Senior Fellow and Board member of several Institutes both Nationally and Internationally. He is an Ambassador of so many internationally recognised bodies.
              He is a mentor and counsellor for some leadership and youth organisations including YALI and Rotaract club. He is a Rotarian and Past President of the Ibadan-Challenge Chapter. He has received several awards both nationally and internationally.
              He is a husband and a father of two beautiful daughters.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-16 bg-brand-off-white">
        <div className="section-padding">
          <h2 className="text-3xl mb-12 text-center">Core Expertise & Focus</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Strategic Consulting', icon: Award, desc: 'Business strategy, operational improvement, and organizational development.' },
              { title: 'HR Solutions', icon: Linkedin, desc: 'Talent sourcing, placement solutions, and manpower outsourcing.' },
              { title: 'Professional Training', icon: BookOpen, desc: 'Corporate training for professionals and vocational skill development.' }
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-brand-primary/5 rounded-xl flex items-center justify-center text-brand-primary mb-6">
                  <item.icon size={24} />
                </div>
                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CEOProfile;
