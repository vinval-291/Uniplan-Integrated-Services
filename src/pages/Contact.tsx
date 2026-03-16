import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Linkedin, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Recruitment Services',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Save to Firestore
      await addDoc(collection(db, 'messages'), {
        ...formData,
        createdAt: serverTimestamp()
      });

      // Also call the local API for logging (optional, but good for backward compatibility)
      try {
        await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
      } catch (apiError) {
        console.error("Local API logging failed, but Firestore succeeded:", apiError);
      }

      setStatus('success');
      setResponseMsg("Thank you for your message. We have received it and will get back to you shortly!");
      setFormData({ name: '', email: '', subject: 'Recruitment Services', message: '' });
    } catch (error) {
      console.error("Firestore error:", error);
      setStatus('error');
      setResponseMsg('Something went wrong while sending your message. Please try again later.');
    }
  };

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-brand-blue-grey py-12 border-b border-slate-100">
        <div className="section-padding text-center">
          <h1 className="text-5xl mb-6 text-brand-primary font-bold">Contact Us</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Have questions or ready to partner with us? Reach out today and let's start a conversation about your growth.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl mb-8">Get in Touch</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/5 flex items-center justify-center text-brand-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Our Office</h4>
                  <p className="text-slate-600">No 4 beside Akala House, Mokola, Ibadan, Oyo State.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/5 flex items-center justify-center text-brand-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Phone Numbers</h4>
                  <p className="text-slate-600">08105314346, 08025529320</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/5 flex items-center justify-center text-brand-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email Address</h4>
                  <p className="text-slate-600">admin@uniplanintegratedservices.com</p>
                  <p className="text-slate-600">uniplanintegratedservicestd@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/5 flex items-center justify-center text-brand-primary shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Business Hours</h4>
                  <p className="text-slate-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p className="text-slate-600">Saturday: By Appointment</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-brand-primary hover:text-white transition-all"><Facebook size={20} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-brand-primary hover:text-white transition-all"><Instagram size={20} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-brand-primary hover:text-white transition-all"><Linkedin size={20} /></a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-brand-off-white p-10 rounded-2xl border border-slate-100 shadow-xl">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                  <p className="text-slate-600 mb-8">{responseMsg}</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="btn-primary"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h3 className="text-2xl mb-6">Send us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Full Name</label>
                        <input 
                          type="text" 
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all" 
                          placeholder="John Doe" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Email Address</label>
                        <input 
                          type="email" 
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all" 
                          placeholder="john@example.com" 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Subject</label>
                      <select 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all"
                      >
                        <option>Recruitment Services</option>
                        <option>Management Consulting</option>
                        <option>Training Programs</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Message</label>
                      <textarea 
                        name="message"
                        required
                        rows={5} 
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all" 
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    
                    {status === 'error' && (
                      <p className="text-red-500 text-sm font-semibold">{responseMsg}</p>
                    )}

                    <button 
                      type="submit" 
                      disabled={status === 'submitting'}
                      className="btn-primary w-full flex items-center justify-center gap-2"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 size={20} className="animate-spin" /> Sending...
                        </>
                      ) : (
                        <>
                          <Send size={20} /> Send Message
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[450px] bg-slate-200 relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.452623348123!2d3.8821!3d7.3989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d0000000001%3A0x0!2zTm8gNCBiZXNpZGUgQWthbGEgSG91c2UsIE1va29sYSwgSWJhZGFu!5e0!3m2!1sen!2sng!4v1710444600000!5m2!1sen!2sng" 
          className="w-full h-full border-0" 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Uniplan Office Location"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
