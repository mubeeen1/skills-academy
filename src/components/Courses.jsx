"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HeartPulse, Target, Video, GraduationCap, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

export default function Courses() {
  const courses = [
    {
      id: "afns",
      courseParam: "afns",
      icon: <HeartPulse className="h-6 w-6 text-rose-500" />,
      badge: "Female Candidates",
      badgeColor: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
      title: "AFNS Initial Test Prep",
      subtitle: "Armed Forces Nursing Service",
      description: "Join Pakistan Army as Lieutenant. Comprehensive coaching designed for female candidates with complete guidance on FSC Pre-Medical requirements, age limits, marks, and height criteria.",
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
      image: "/images/4.jpeg",
      imageAlt: "AFNS Preparation Banner",
    },
    {
      id: "pma",
      courseParam: "pma",
      icon: <Target className="h-6 w-6 text-emerald-500" />,
      badge: "Male Candidates",
      badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
      title: "PMA Initial Test Prep",
      subtitle: "Pakistan Military Academy",
      description: "Rigorous academic and mental training to ace the PMA Long Course and Technical Cadet Course (TCC) initial examinations. Focuses on verbal, non-verbal intelligence modules, GK, and physical guidance.",
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
        "Physical fitness guidelines & ISSB intro",
      ],
      cta: "Register for PMA Long Course",
      // PMA doesn't have a banner, so we show a custom visual badge graphic
      image: null,
      imageAlt: "PMA Cadet Prep",
    },
    {
      id: "graphic-designing",
      courseParam: "digital",
      digitalCourseParam: "graphic",
      icon: <Video className="h-6 w-6 text-blue-500" />,
      badge: "Self-Employment / Freelance",
      badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
      title: "Mobile Graphic & Video Editing",
      subtitle: "Learn at Home on WhatsApp",
      description: "Start earning! Graphic designing and video editing mobile course. Learn step-by-step from home on your smartphone via WhatsApp lectures, and start freelancing on Fiverr.",
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
        "Freelance profiles and monetization setup",
      ],
      cta: "Enroll in Mobile Course",
      image: "/images/3.jpeg",
      imageAlt: "Graphic Design Mobile Course Banner",
    },
    {
      id: "academic-admissions",
      courseParam: "private",
      icon: <GraduationCap className="h-6 w-6 text-amber-500" />,
      badge: "Matric & Intermediate Students",
      badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
      title: "Academic Admissions & Certificates",
      subtitle: "Save Your Academic Year",
      description: "Comprehensive guidance for private Matric/Intermediate admissions, hope certificates, provisional certificates, and struck-off student recovery to secure 100% passing marks.",
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
      // Academic Admissions has two banners: 2.jpeg and 1.jpeg
      images: ["/images/2.jpeg", "/images/1.jpeg"],
      imageAlt: "Academic admissions and certificate support banners",
    },
  ];

  return (
    <section id="courses" className="py-24 bg-slate-100 dark:bg-slate-900/50 relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-[20%] left-[50%] -translate-x-[50%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-bold text-blue-600 dark:text-blue-500 uppercase tracking-widest mb-3">Our Programs</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white tracking-tight">
            Specialized Courses & Academic Support
          </p>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          <p className="text-slate-800 dark:text-slate-400 mt-4 sm:text-lg">
            Alternating curriculums and customized boarding guidelines backed by our actual batch flyers.
          </p>
        </div>

        {/* Courses Stack (Alternating Layout) */}
        <div className="space-y-24">
          {courses.map((course, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={course.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                
                {/* Course Details — always order-2 on mobile, alternates on desktop */}
                <div className={`lg:col-span-6 space-y-6 order-2 ${isEven ? "lg:order-first" : "lg:order-last"}`}>
                  <div className="flex items-center space-x-3">
                    <div className="bg-white dark:bg-slate-950 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-inner">
                      {course.icon}
                    </div>
                    <div>
                      <span className={`text-[11px] font-extrabold tracking-wider uppercase px-2.5 py-0.5 rounded-full border ${course.badgeColor}`}>
                        {course.badge}
                      </span>
                      <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1.5 leading-tight">{course.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-base font-semibold text-slate-800 dark:text-slate-400 uppercase tracking-wider">{course.subtitle}</p>
                  
                  <p className="text-slate-800 dark:text-slate-355 leading-relaxed text-base sm:text-lg">
                    {course.description}
                  </p>

                  {/* Syllabus / Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-slate-200 dark:border-slate-800 pt-6">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-slate-350 uppercase tracking-wider mb-3">Eligibility Rules:</h4>
                      <ul className="space-y-2.5">
                        {course.requirements.map((req, i) => (
                          <li key={i} className="flex items-start text-sm text-slate-700 dark:text-slate-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 mt-2.5 shrink-0"></span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-slate-350 uppercase tracking-wider mb-3">Syllabus & Focus:</h4>
                      <ul className="space-y-2.5">
                        {course.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start text-sm text-slate-800 dark:text-slate-300">
                            <CheckCircle2 className="h-4.5 w-4.5 text-blue-500 mr-2 shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                    <a
                      href={`/register?course=${course.courseParam}${course.digitalCourseParam ? `&digitalCourse=${course.digitalCourseParam}` : ""}`}
                      className="flex items-center justify-center space-x-2.5 w-full sm:w-auto bg-slate-900 hover:bg-blue-600 dark:bg-slate-950 dark:hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg group"
                    >
                      <span className="text-base">{course.cta}</span>
                      <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                    <span className="text-sm font-bold text-slate-700 uppercase tracking-widest">
                      {course.duration}
                    </span>
                  </div>
                </div>

                {/* Course Visual Banner — always order-1 on mobile so image sits above text, alternates on desktop */}
                <div className={`lg:col-span-6 flex justify-center order-1 ${isEven ? "lg:order-last" : "lg:order-first"}`}>
                  
                  {course.image ? (
                    // Regular Course with single banner (AFNS / Graphic Designing)
                    <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 p-2 shadow-xl hover:scale-[1.01] transition-transform duration-300">
                      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-900">
                        <Image
                          src={course.image}
                          alt={course.imageAlt}
                          fill
                          sizes="(max-w-768px) 100vw, 500px"
                          className="object-contain"
                        />
                      </div>
                    </div>
                  ) : course.images ? (
                    // Admissions with two banners side-by-side
                    <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                      {course.images.map((img, i) => (
                        <div key={i} className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 p-1 shadow-lg hover:scale-[1.02] transition-transform duration-300">
                          <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-900">
                            <Image
                              src={img}
                              alt={`${course.imageAlt} part ${i+1}`}
                              fill
                              sizes="250px"
                              className="object-cover"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    // PMA with custom abstract graphic card
                    <div className="w-full max-w-md p-8 glass-panel-glow rounded-3xl border border-slate-250 dark:border-slate-800 flex flex-col items-center text-center space-y-6 shadow-xl py-12">
                      <div className="bg-emerald-500/10 p-5 rounded-full text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        <ShieldCheck className="h-12 w-12" />
                      </div>
                      <h4 className="font-bold text-slate-800 dark:text-white text-xl">PMA Initial Cadet Selection</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs">
                        Guaranteed coaching program for Verbal, Non-Verbal, GK, and physical fitness mapping to secure recommendation in PMA Long Course.
                      </p>
                      <div className="flex space-x-2.5">
                        <span className="text-[10px] font-bold text-slate-500 border border-slate-200 dark:border-slate-800 px-3 py-1 rounded-full bg-white dark:bg-slate-950">ISSB Syllabus</span>
                        <span className="text-[10px] font-bold text-slate-500 border border-slate-200 dark:border-slate-800 px-3 py-1 rounded-full bg-white dark:bg-slate-950">Mock Tests</span>
                      </div>
                    </div>
                  )}

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
