"use client";

import { motion } from "framer-motion";
import { HeartPulse, Target, Video, GraduationCap, CheckCircle2, ArrowRight } from "lucide-react";

export default function Courses() {
  const courses = [
    {
      id: "afns",
      icon: <HeartPulse className="h-7 w-7 text-rose-500 dark:text-rose-400" />,
      badge: "Female Candidates",
      badgeColor: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
      title: "AFNS Initial Test Prep",
      subtitle: "Armed Forces Nursing Service",
      description: "Join Pakistan Army as Lieutenant. Comprehensive coaching designed for female candidates with complete guidance on requirements.",
      duration: "6 Weeks Program",
      requirements: [
        "FSc. Pre-Medical background",
        "Age limit: 17-24 Years",
        "Minimum marks: 50%",
        "Gender: Female only",
        "Minimum height: 5 Feet",
      ],
      highlights: [
        "Verbal & Non-Verbal intelligence tests",
        "Academic mocks (Biology, Chemistry, Physics)",
        "Advanced English grammar modules",
        "Time management & test-taking strategies",
      ],
      cta: "Register for AFNS-26",
    },
    {
      id: "pma",
      icon: <Target className="h-7 w-7 text-emerald-500 dark:text-emerald-400" />,
      badge: "Male Candidates",
      badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
      title: "PMA Initial Test Prep",
      subtitle: "Pakistan Military Academy",
      description: "Rigorous academic and mental training to ace the PMA Long Course and Technical Cadet Course (TCC) initial examinations.",
      duration: "8 Weeks Program",
      requirements: [
        "Intermediate (FA/FSc) or equivalent",
        "Age limit: 17-22 Years",
        "Minimum marks: 55% or 60%",
        "Gender: Male only",
        "Minimum height: 5' 4\"",
      ],
      highlights: [
        "Intensive Verbal & Non-Verbal reasoning",
        "General Knowledge & Current Affairs briefings",
        "Mathematics & Pakistan Studies review",
        "Introduction to the ISSB selection process",
      ],
      cta: "Register for PMA Long Course",
    },
    {
      id: "graphic-designing",
      icon: <Video className="h-7 w-7 text-blue-500 dark:text-blue-400" />,
      badge: "Self-Employment / Freelance",
      badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
      title: "Mobile Graphic & Video Editing",
      subtitle: "Learn at Home on WhatsApp",
      description: "Start earning! Graphic designing and video editing mobile course. Learn step-by-step from home on your smartphone via WhatsApp lectures.",
      duration: "4 Weeks Program",
      requirements: [
        "No prior coding/design experience needed",
        "Any basic Android/iOS Smartphone",
        "Basic WhatsApp & internet connection",
        "Interest in social media content creation",
      ],
      highlights: [
        "Mobile-based professional graphic designing",
        "Video editing on smartphone apps",
        "Designing social media banners & posters",
        "Freelance and self-employment guidance",
      ],
      cta: "Enroll in Mobile Course",
    },
    {
      id: "academic-admissions",
      icon: <GraduationCap className="h-7 w-7 text-amber-500 dark:text-amber-400" />,
      badge: "Matric & Intermediate Students",
      badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
      title: "Academic Admissions & Certificates",
      subtitle: "Save Your Academic Year",
      description: "Comprehensive guidance for private Matric/Intermediate admissions, hope certificates, provisional certificates, and struck-off student recovery.",
      duration: "Ongoing Consultation",
      requirements: [
        "Students who got Struck-off from school/college",
        "Matric or Intermediate supplemental students",
        "Improvement candidates seeking 100% marks",
        "Candidates needing official university certificates",
      ],
      highlights: [
        "Matric/Intermediate private registration",
        "Recovery counseling for struck-off students",
        "Provisional & Hope certificate guidance",
        "100% passing marks strategy mapping",
      ],
      cta: "Get Admission Assistance",
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 85, damping: 16 },
    },
  };

  return (
    <section id="courses" className="py-24 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden transition-colors duration-300">
      {/* Background glow */}
      <div className="absolute top-[20%] left-[50%] -translate-x-[50%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-blue-600 dark:text-blue-500 uppercase tracking-widest mb-3">Our Programs</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white tracking-tight">
            Specialized Courses & Academic Support
          </p>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          <p className="text-slate-600 dark:text-slate-400 mt-4 sm:text-lg">
            We provide structured mock classes, digital skills training, and university/board admission consultancy to secure your academic future.
          </p>
        </div>

        {/* Courses Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {courses.map((course) => (
            <motion.div
              key={course.id}
              className="glass-panel hover-shine flex flex-col justify-between p-6 sm:p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/40 hover:border-blue-500/30 dark:hover:border-blue-500/30 group"
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <div>
                {/* Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-slate-100 dark:bg-slate-950 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-inner group-hover:scale-105 transition-transform duration-300">
                    {course.icon}
                  </div>
                  <span className={`text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full border ${course.badgeColor}`}>
                    {course.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {course.title}
                </h3>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-4">{course.subtitle}</p>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {course.description}
                </p>

                {/* Grid layout for requirements & highlights inside the card */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-200 dark:border-slate-800/80 pt-4 mb-6">
                  {/* Requirements Column */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-700 dark:text-slate-400 uppercase tracking-wider mb-2.5">
                      Eligibility Rules:
                    </h4>
                    <ul className="space-y-2">
                      {course.requirements.map((req, i) => (
                        <li key={i} className="flex items-center text-xs text-slate-500 dark:text-slate-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 shrink-0"></span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Highlights Column */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-700 dark:text-slate-400 uppercase tracking-wider mb-2.5">
                      Syllabus & Focus:
                    </h4>
                    <ul className="space-y-2">
                      {course.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start text-xs text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="h-3.5 w-3.5 text-blue-500 mr-2 mt-0.5 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/40">
                <a
                  href="#register"
                  className="flex items-center justify-center space-x-2 w-full bg-slate-900 hover:bg-blue-600 dark:bg-slate-950 dark:hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 shadow-inner group/btn"
                >
                  <span className="text-sm">{course.cta}</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </a>
                <p className="text-center text-[10px] text-slate-400 mt-2.5 uppercase tracking-wider font-semibold">
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
