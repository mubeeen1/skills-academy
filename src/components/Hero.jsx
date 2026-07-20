"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Award, ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  const banners = [
    {
      src: "/images/1.jpeg",
      alt: "AFNS-26 preparation banner",
      title: "AFNS Initial Test Preparation",
    },
    {
      src: "/images/2.jpeg",
      alt: "Graphic Designing and Video Editing Mobile Course",
      title: "Mobile Graphic & Video Editing",
    },
    {
      src: "/images/3.jpeg",
      alt: "School, College, University Certificates Guidance",
      title: "Hope & Provisional Certificates",
    },
    {
      src: "/images/4.jpeg",
      alt: "Matric and Intermediate admissions, improvement and supplementary help",
      title: "Academic Admissions Support",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [banners.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 250, damping: 25 },
        opacity: { duration: 0.35 },
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 250, damping: 25 },
        opacity: { duration: 0.35 },
      },
    }),
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      {/* Background Glow Blobs */}
      <div className="blob-container">
        <div
          className="blob bg-blue-500/10 dark:bg-blue-600/15 w-[350px] h-[350px] -top-20 -left-20"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="blob bg-indigo-500/10 dark:bg-indigo-600/10 w-[450px] h-[450px] -right-20 top-[20%]"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Content (Left) */}
          <motion.div
            className="lg:col-span-6 space-y-6 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 dark:border-blue-500/20 px-3.5 py-1.5 rounded-full text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider"
            >
              <Award className="h-4.5 w-4.5" />
              <span>Shape Your Future Career</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-slate-800 dark:text-white"
            >
              Accelerate Your Learning at{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 dark:from-blue-400 dark:via-indigo-400 dark:to-blue-600 bg-clip-text text-transparent block mt-2">
                Siddiqui Skills Academy
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-slate-600 dark:text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              Expert-led guidance for <strong>AFNS</strong> & <strong>PMA</strong> initial tests, <strong>MS Office</strong> masterclasses, <strong>Mobile Graphic Designing</strong>, and private board admission consultancies.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2"
            >
              <a
                href="#register"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-4 px-8 rounded-2xl shadow-xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300 hover:scale-[1.01]"
              >
                <span>Enroll in Batch</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#courses"
                className="inline-flex items-center justify-center bg-white dark:bg-slate-900/60 hover:bg-slate-50 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 font-semibold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-[1.01] backdrop-blur-md shadow-sm"
              >
                <span>Explore Courses</span>
              </a>
            </motion.div>

            {/* Quick Metrics */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200 dark:border-slate-900 max-w-md mx-auto lg:mx-0"
            >
              <div>
                <p className="text-2xl font-bold text-slate-800 dark:text-white">95%</p>
                <p className="text-xs text-slate-500 dark:text-slate-500 uppercase tracking-wider mt-1">Pass Rate</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-800 dark:text-white">100%</p>
                <p className="text-xs text-slate-500 dark:text-slate-500 uppercase tracking-wider mt-1">Assurance</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-800 dark:text-white">Online</p>
                <p className="text-xs text-slate-500 dark:text-slate-500 uppercase tracking-wider mt-1">WhatsApp Lectures</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Visual Banner Slider (Right) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-lg aspect-[5/4] sm:aspect-square overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-900 shadow-2xl p-2.5">
              
              <div className="relative w-full h-full overflow-hidden rounded-2xl bg-slate-950">
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={currentIndex}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={banners[currentIndex].src}
                      alt={banners[currentIndex].alt}
                      fill
                      priority
                      className="object-contain"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Arrow controllers */}
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full text-white border border-white/10 transition-colors z-10"
                  aria-label="Previous banner"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full text-white border border-white/10 transition-colors z-10"
                  aria-label="Next banner"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                {/* Banner title display */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 pt-10 text-center">
                  <p className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-0.5">Active Program</p>
                  <h4 className="text-sm font-bold text-white tracking-wide">{banners[currentIndex].title}</h4>
                </div>
              </div>

            </div>

            {/* Slider Dots */}
            <div className="flex items-center space-x-2 mt-4">
              {banners.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === i ? "w-6 bg-blue-600 dark:bg-blue-400" : "w-2.5 bg-slate-300 dark:bg-slate-800"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}
