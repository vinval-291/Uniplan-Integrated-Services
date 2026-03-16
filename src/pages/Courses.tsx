import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Clock, ArrowRight, ExternalLink, Filter, X } from 'lucide-react';
import { COURSES } from '../constants';

const CATEGORIES = ['All', 'Professional', 'Management', 'Marketing', 'Safety'];

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedCourse, setSelectedCourse] = useState<typeof COURSES[0] | null>(null);

  const filteredCourses = activeCategory === 'All' 
    ? COURSES 
    : COURSES.filter(course => course.category === activeCategory);

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-brand-blue-grey py-12 border-b border-slate-100">
        <div className="section-padding text-center">
          <h1 className="text-5xl mb-6 text-brand-primary font-bold">Our Courses</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Advance your career with our industry-leading professional and vocational courses.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-slate-50">
        <div className="section-padding">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-slate-500 font-semibold">
              <Filter size={18} />
              <span>Filter by Category:</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                    activeCategory === category
                      ? 'bg-brand-primary text-white shadow-lg'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 bg-white">
        <div className="section-padding">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
                >
                  <div className="aspect-video relative">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-brand-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                      {course.category}
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-2 text-slate-400 text-xs mb-4">
                      <Clock size={14} />
                      <span>{course.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-brand-primary transition-colors">{course.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-8">
                      {course.description}
                    </p>
                    <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                      <button 
                        onClick={() => setSelectedCourse(course)}
                        className="text-brand-primary font-bold text-sm flex items-center gap-1 hover:underline cursor-pointer"
                      >
                        Learn More <ArrowRight size={14} />
                      </button>
                      <a 
                        href={`https://lms.uniplanintegratedservices.com/courses/${course.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-brand-primary transition-colors"
                        title="View on LMS"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredCourses.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-400 text-lg italic">No courses found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Course Detail Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCourse(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden"
            >
              <button 
                onClick={() => setSelectedCourse(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-md rounded-full text-slate-500 hover:text-brand-primary transition-colors shadow-sm"
              >
                <X size={20} />
              </button>
              
              <div className="aspect-video relative">
                <img 
                  src={selectedCourse.image} 
                  alt={selectedCourse.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <div>
                    <div className="bg-brand-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest inline-block mb-3">
                      {selectedCourse.category}
                    </div>
                    <h2 className="text-3xl font-bold text-white">{selectedCourse.title}</h2>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-6 mb-8 text-sm font-semibold text-slate-500">
                  <div className="flex items-center gap-2">
                    <Clock size={18} className="text-brand-primary" />
                    <span>Duration: {selectedCourse.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen size={18} className="text-brand-primary" />
                    <span>Certificate Included</span>
                  </div>
                </div>
                
                <h4 className="text-lg font-bold mb-4 text-slate-900">Course Overview</h4>
                <p className="text-slate-600 leading-relaxed mb-8">
                  {selectedCourse.details}
                </p>
                
                <div className="flex gap-4">
                  <a 
                    href={`https://lms.uniplanintegratedservices.com/courses/${selectedCourse.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex-1 text-center"
                  >
                    Enroll Now
                  </a>
                  <button className="btn-secondary flex-1">Download Syllabus</button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* LMS CTA */}
      <section className="bg-brand-blue-grey py-12">
        <div className="section-padding text-center">
          <h2 className="text-3xl mb-6">Ready to start learning?</h2>
          <p className="text-slate-600 mb-10 max-w-xl mx-auto">
            Join thousands of professionals already advancing their careers on our integrated learning management platform.
          </p>
          <a href="https://lms.uniplanintegratedservices.com" className="btn-primary inline-flex items-center gap-2">
            Access LMS Platform <ExternalLink size={18} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Courses;
