"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Award, Compass, ShieldCheck, Stars } from "lucide-react";

export default function Hero() {
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

  const floatVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const floatVariantsDelayed = {
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1.5,
      },
    },
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
            className="lg:col-span-7 space-y-6 text-center lg:text-left animate-fade-in"
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
              Unlock Practical Skills at{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 dark:from-blue-400 dark:via-indigo-400 dark:to-blue-600 bg-clip-text text-transparent block mt-2 leading-tight">
                Siddiqui Skills Academy
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-slate-800 dark:text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              Comprehensive training in **military test prep** (PMA & AFNS), **computer tools** (MS Office), and **freelance computer skills** (Graphic Design & Video Editing) to build a rewarding career.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2"
            >
              <a
                href="/register"
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
              className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200 dark:border-slate-900 max-w-md mx-auto lg:mx-0"
            >
              <div>
                <p className="text-3xl font-extrabold text-slate-900 dark:text-white">95%</p>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-400 uppercase tracking-wider mt-1.5">Pass Rate</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-slate-900 dark:text-white">20+</p>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-400 uppercase tracking-wider mt-1.5">Skills Taught</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-slate-900 dark:text-white">Online</p>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-400 uppercase tracking-wider mt-1.5">Home Lectures</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Visual Brand Showcase (Right) */}
          <div className="lg:col-span-5 flex items-center justify-center relative min-h-[400px]">
            
            {/* Main Logo Container */}
            <motion.div
              className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-[40px] bg-slate-950 p-6 border border-slate-200/80 dark:border-slate-800 shadow-2xl flex items-center justify-center z-20"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 70, damping: 15, delay: 0.2 }}
            >
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-inner">
                <Image
                  src="/images/logo.jpeg"
                  alt="Siddiqui Skills Academy Logo"
                  fill
                  priority
                  sizes="(max-w-768px) 250px, 300px"
                  className="object-cover scale-105"
                />
              </div>
              {/* Spinning outline light effect */}
              <div className="absolute inset-0 rounded-[40px] border border-blue-500/15 dark:border-blue-500/30 scale-105 animate-pulse"></div>
            </motion.div>

            {/* Float Badge 1 - Success */}
            <motion.div
              className="absolute p-4.5 glass-panel rounded-2xl z-30 right-[-10px] top-[15%] flex items-center space-x-3 shadow-xl"
              variants={floatVariants}
              animate="animate"
            >
              <div className="bg-emerald-500/10 p-2.5 rounded-xl text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="h-5.5 w-5.5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">ISO Standard</h4>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Quality Training</p>
              </div>
            </motion.div>

            {/* Float Badge 2 - Skills */}
            <motion.div
              className="absolute p-4.5 glass-panel rounded-2xl z-30 left-[-20px] bottom-[20%] flex items-center space-x-3 shadow-xl"
              variants={floatVariantsDelayed}
              animate="animate"
            >
              <div className="bg-blue-500/10 p-2.5 rounded-xl text-blue-600 dark:text-blue-400">
                <Stars className="h-5.5 w-5.5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">20+ Career Skills</h4>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Fiverr, Shopify & SEO</p>
              </div>
            </motion.div>

            {/* Float Badge 3 - Counsel */}
            <motion.div
              className="absolute p-4 glass-panel rounded-2xl z-10 left-[20%] top-[-10px] flex items-center space-x-2 shadow-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="bg-amber-500/10 p-2 rounded-lg text-amber-600 dark:text-amber-400">
                <Compass className="h-4.5 w-4.5" />
              </div>
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">ISSB prep support</span>
            </motion.div>

            {/* Radial glow background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent -z-10 rounded-full w-[400px] h-[400px] blur-3xl pointer-events-none"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
