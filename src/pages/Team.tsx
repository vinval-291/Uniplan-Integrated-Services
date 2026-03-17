import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Mail, Award } from 'lucide-react';

const Team = () => {
  const team = [
    {
      name: 'Kunle Awotiku',
      role: 'CEO / Principal Consultant',
      image: 'https://i.postimg.cc/1zGCRJWQ/Dr_Kunle_Awotiku.png',
      bio: 'Visionary leader with 25+ years in management consulting.'
    },
    {
      name: 'Temitayo Aderibigbe',
      role: 'Graphic Design',
      image: 'https://i.postimg.cc/dVwpkhfs/Temitayo_Aderibigbe.png',
      bio: 'Creative visual storyteller specializing in brand identity and digital assets.'
    },
    {
      name: 'Esther Opeyemi Aworeni',
      role: 'Content Creator',
      image: 'https://i.postimg.cc/4xsq7Y0n/Esther_Opeyemi_Aworeni.png',
      bio: 'Expert in crafting engaging narratives and strategic content for diverse platforms.'
    },
    {
      name: 'Oladipupo Kehinde Gloria',
      role: 'Business Liaison',
      image: 'https://i.postimg.cc/3JgzxXtJ/Oladipupo_Kehinde_Gloria.png',
      bio: 'Bridging the gap between client needs and organizational solutions with excellence.'
    },
    {
      name: 'Kuteyi Oluwaloye Vincent',
      role: 'Web Developer',
      image: 'https://i.postimg.cc/VkfZs3S0/Kuteyi_Oluwaloye_Vincent.png',
      bio: 'Full-stack developer building robust, scalable, and high-performance web applications.'
    },
    {
      name: 'Olujobi Olayiwola',
      role: 'UI/UX',
      image: 'https://i.postimg.cc/4Nzjx6WZ/Olujobi_Olayiwola.png',
      bio: 'Designing intuitive and aesthetically pleasing digital experiences.'
    },
    {
      name: 'Oderinlo Oyindamola',
      role: 'Marketing',
      image: 'https://i.postimg.cc/SNWHx6gk/Oderinlo_Oyindamola.png',
      bio: 'Strategic marketer focused on growth, brand awareness, and market penetration.'
    }
  ];

  return (
    <div className="pt-24">
      <section className="bg-brand-blue-grey py-12">
        <div className="section-padding text-center">
          <h1 className="text-5xl mb-6">Our Professional Team</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Meet the experts behind Uniplan Integrated Services. Our team is composed of highly qualified professionals, with 60% holding Master's degrees.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6 shadow-lg">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <div className="flex gap-4 text-white">
                      <a href="#"><Linkedin size={20} /></a>
                      <a href="#"><Mail size={20} /></a>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                <p className="text-brand-primary font-semibold mb-4">{member.role}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
