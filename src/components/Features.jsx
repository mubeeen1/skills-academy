"use client";

import { motion } from "framer-motion";
import { Users, ClipboardCheck, BookOpen, HeartHandshake, Compass } from "lucide-react";

export default function Features() {
  const highlights = [
    {
      icon: <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      title: "Experienced Mentors",
      description: "Learn from instructors who are familiar with force entry tests and specialized computer course curricula.",
    },
    {
      icon: <ClipboardCheck className="h-6 w-6 text-amber-600 dark:text-amber-400" />,
      title: "Real Exam Mocks",
      description: "Regular mock tests simulating the actual computerized tests for AFNS & PMA, helping to build speed and accuracy.",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-violet-600 dark:text-violet-400" />,
      title: "Structured Material",
      description: "Custom-curated notebooks, verbal/non-verbal practice sets, and updated MS Office lab manuals.",
    },
    {
      icon: <HeartHandshake className="h-6 w-6 text-rose-600 dark:text-rose-400" />,
      title: "Individual Attention",
      description: "Small batch sizes ensure every student gets personal guidance, addressing individual academic weaknesses.",
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      {/* Background lights */}
      <div className="absolute top-[40%] right-[-10%] w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Big Text & Stats */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-blue-600 dark:text-blue-500 uppercase tracking-widest">Why Choose Us</h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              A Proven Method for Academic Success
            </h3>
            <p className="text-slate-800 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
              At Siddiqui Skills Academy, we bridge the gap between candidate potential and military selection criteria. Our specialized teaching methodology ensures students are mentally, academically, and physically prepared.
            </p>
            
            {/* Stat Box */}
            <div className="p-6 glass-panel-glow rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-500/10 p-2 rounded-xl text-blue-600 dark:text-blue-400">
                  <Compass className="h-5.5 w-5.5" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">Full ISSB & Test Guidance</h4>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Beyond initial computer testing, we guide PMA candidates on physical requirements, academic interviews, and basic personality profiling.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Highlights Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-slate-900 hover:border-slate-300 dark:hover:border-slate-800 transition-colors duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-900 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    {highlight.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-xl mb-2">{highlight.title}</h4>
                  <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
