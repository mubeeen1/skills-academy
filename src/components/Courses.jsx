"use client";

import { motion } from "framer-motion";
import { HeartPulse, Target, MonitorPlay, CheckCircle2, ArrowRight } from "lucide-react";

export default function Courses() {
  const courses = [
    {
      id: "afns",
      icon: <HeartPulse className="h-7 w-7 text-rose-400" />,
      badge: "Female Candidates",
      badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/25",
      title: "AFNS Initial Test Prep",
      subtitle: "Armed Forces Nursing Service",
      description: "Comprehensive coaching specifically designed for female candidates aspiring to join the Pak Army as Commissioned Officers (Nursing).",
      duration: "6 Weeks Program",
      highlights: [
        "Verbal Intelligence Tests preparation",
        "Non-Verbal Intelligence Tests shortcuts",
        "Subjective academic mocks (Biology, Chemistry, Physics)",
        "Advanced English grammar and vocabulary modules",
        "Time management drills and test-taking strategies",
      ],
      cta: "Prepare for AFNS",
    },
    {
      id: "pma",
      icon: <Target className="h-7 w-7 text-emerald-400" />,
      badge: "Male Candidates",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
      title: "PMA Initial Test Prep",
      subtitle: "Pakistan Military Academy",
      description: "Rigorous academic and mental training to ace the PMA Long Course and Technical Cadet Course (TCC) initial examinations.",
      duration: "8 Weeks Program",
      highlights: [
        "Intensive Verbal & Non-Verbal reasoning drills",
        "General Knowledge & Current Affairs briefings",
        "Mathematics & Pakistan Studies review",
        "Physical fitness guidelines & planning",
        "Introduction to ISSB selection process",
      ],
      cta: "Prepare for PMA",
    },
    {
      id: "ms-office",
      icon: <MonitorPlay className="h-7 w-7 text-blue-400" />,
      badge: "All Students & Professionals",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/25",
      title: "MS Office Masterclass",
      subtitle: "Essential IT Skills",
      description: "Acquire professional digital competence required by modern offices, universities, and administrative positions worldwide.",
      duration: "4 Weeks Program",
      highlights: [
        "MS Word: Professional report writing & formatting",
        "MS Excel: Formulas, pivot tables, data visualization",
        "MS PowerPoint: Designing presentation slides",
        "Internet, Email, and computer security basics",
        "Practical hands-on lab projects",
      ],
      cta: "Learn MS Office",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <section id="courses" className="py-24 bg-slate-900/50 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[20%] left-[50%] -translate-x-[50%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-3">Our Curriculums</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Specialized Courses for Career Growth
          </p>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-4 sm:text-lg">
            We provide structured, highly-focused prep modules taught by experienced instructors to ensure high success rates.
          </p>
        </div>

        {/* Courses Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {courses.map((course) => (
            <motion.div
              key={course.id}
              className="glass-panel hover-shine flex flex-col justify-between p-8 rounded-3xl transition-colors duration-300 hover:border-slate-700/80 group"
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div>
                {/* Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 shadow-inner group-hover:scale-110 transition-transform duration-300">
                    {course.icon}
                  </div>
                  <span className={`text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full border ${course.badgeColor}`}>
                    {course.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-200">
                  {course.title}
                </h3>
                <p className="text-sm font-semibold text-slate-400 mb-4">{course.subtitle}</p>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {course.description}
                </p>

                {/* Divider */}
                <div className="border-t border-slate-800/80 my-4"></div>

                {/* Highlights Title */}
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Key Highlights:</h4>

                {/* Highlights List */}
                <ul className="space-y-3 mb-8">
                  {course.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start text-sm text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-blue-500 mr-2.5 mt-0.5 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Action */}
              <div className="mt-auto">
                <a
                  href="#register"
                  className="flex items-center justify-center space-x-2 w-full bg-slate-950 hover:bg-blue-600 border border-slate-800 hover:border-blue-500 text-white font-semibold py-3.5 px-4 rounded-2xl transition-all duration-300 shadow-inner group/btn"
                >
                  <span className="text-sm">{course.cta}</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </a>
                <p className="text-center text-[10px] text-slate-500 mt-2.5 uppercase tracking-wider font-semibold">
                  {course.duration}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
