"use client";

import { motion } from "framer-motion";
import { HeartPulse, Target, Video, ArrowRight, CheckCircle2 } from "lucide-react";

export default function CoursesOverview() {
  const overviews = [
    {
      courseParam: "afns",
      icon: <HeartPulse className="h-7 w-7 text-rose-500" />,
      badge: "Female Candidates",
      badgeColor: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
      title: "AFNS Initial Test Prep",
      subtitle: "Armed Forces Nursing Service",
      description: "Join Pakistan Army as Lieutenant. Complete guidance on FSc Pre-Medical eligibility, age limit, height, and academic mocks.",
      bullets: ["Verbal & Non-Verbal IQ", "Biology, Physics & Chemistry", "English Grammar & Mocks"],
    },
    {
      courseParam: "pma",
      icon: <Target className="h-7 w-7 text-emerald-500" />,
      badge: "Male Candidates",
      badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
      title: "PMA Initial Test Prep",
      subtitle: "Pakistan Military Academy",
      description: "Rigorous academic and mental training to clear the PMA Long Course and Technical Cadet Course (TCC) entry examinations.",
      bullets: ["Verbal/Non-Verbal Drills", "GK & Current Affairs", "ISSB Selection Guidance"],
    },
    {
      courseParam: "digital",
      icon: <Video className="h-7 w-7 text-blue-500" />,
      badge: "Freelance & Self-Employment",
      badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
      title: "Mobile Graphic & Video Editing",
      subtitle: "Learn at Home on WhatsApp",
      description: "Graphic designing and video editing mobile course. Learn from home on your smartphone and start earning on Fiverr.",
      bullets: ["Mobile Graphic Design", "CapCut Video Editing", "Fiverr & Shopify Setup"],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 16 },
    },
  };

  return (
    <section id="courses" className="py-24 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-[20%] left-[50%] -translate-x-[50%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-blue-600 dark:text-blue-500 uppercase tracking-widest mb-3">Our Core Programs</h2>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Specialized Preparation & Training
          </p>
          <div className="mt-4 h-1.5 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          <p className="text-slate-800 dark:text-slate-400 mt-5 text-base sm:text-lg lg:text-xl leading-relaxed">
            We offer expert coaching to help you build digital skills or clear army initial selection tests.
          </p>
        </div>

        {/* 3-Card Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {overviews.map((item, index) => (
            <motion.div
              key={index}
              className="glass-panel hover-shine flex flex-col justify-between p-6 sm:p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/40 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-300 group"
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-slate-100 dark:bg-slate-950 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-inner group-hover:scale-105 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <span className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-400 mb-5">{item.subtitle}</p>

                <p className="text-base text-slate-800 dark:text-slate-355 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-3 border-t border-slate-200 dark:border-slate-800/60 pt-5 mb-6">
                  {item.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center text-sm text-slate-800 dark:text-slate-300">
                      <CheckCircle2 className="h-4.5 w-4.5 text-blue-500 mr-2.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card CTA */}
              <div className="pt-2">
                <a
                  href={`/register?course=${item.courseParam}`}
                  className="flex items-center justify-center space-x-2 w-full bg-slate-900 hover:bg-blue-600 dark:bg-slate-950 dark:hover:bg-blue-600 text-white font-bold py-3.5 px-4 rounded-xl transition-all duration-300 shadow-inner"
                >
                  <span className="text-sm">Quick Enroll</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Global CTA - Leads to all courses */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <a
              href="/courses"
              className="inline-flex items-center space-x-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold py-5 px-14 text-lg sm:text-xl rounded-2xl shadow-xl shadow-blue-500/10 hover:shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02] group"
            >
              <span>See All Courses</span>
              <ArrowRight className="h-5.5 w-5.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold tracking-wider uppercase text-center mt-2">
            *View full eligibility requirements, flyers, and certificate consultancies on a dedicated page
          </p>
        </div>

      </div>
    </section>
  );
}
