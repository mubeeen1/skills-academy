"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Award, Users } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const floatVariants = {
    animate: {
      y: [0, -12, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const floatVariantsDelayed = {
    animate: {
      y: [0, 12, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-950"
    >
      {/* Background Glow Blobs */}
      <div className="blob-container">
        <div
          className="blob bg-blue-600/20 w-[400px] h-[400px] -top-20 -left-20"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="blob bg-indigo-600/15 w-[500px] h-[500px] -right-20 top-[20%]"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="blob bg-violet-600/10 w-[350px] h-[350px] bottom-10 left-[30%]"
          style={{ animationDelay: "8s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Content (Left) */}
          <motion.div
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 rounded-full text-blue-400 text-xs font-semibold uppercase tracking-wider"
            >
              <Award className="h-4.5 w-4.5" />
              <span>Shape Your Future Career</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none"
            >
              Master Core Skills at{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-600 bg-clip-text text-transparent block mt-2">
                Siddiqui Skills Academy
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              Expert-led guidance to help you clear initial tests for <strong>AFNS</strong> & <strong>PMA</strong>, and master essential <strong>MS Office</strong> tools for corporate productivity. 
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
            >
              <a
                href="#register"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-4 px-8 rounded-2xl shadow-xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02]"
              >
                <span>Start Preparation</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#courses"
                className="inline-flex items-center justify-center bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 font-semibold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-[1.02] backdrop-blur-md"
              >
                <span>View Courses</span>
              </a>
            </motion.div>

            {/* Quick Metrics */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-900 max-w-md mx-auto lg:mx-0"
            >
              <div>
                <p className="text-2xl font-bold text-white">95%</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Pass Rate</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">10+</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Batch Sizes</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">1-on-1</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Mentorship</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Visual Card Panel (Right) */}
          <div className="lg:col-span-5 flex items-center justify-center relative min-h-[350px] lg:min-h-[450px]">
            
            {/* Visual Box 1 - AFNS */}
            <motion.div
              className="absolute w-64 p-6 glass-panel-glow rounded-3xl z-20 left-4 sm:left-10 lg:left-0 top-12"
              variants={floatVariants}
              animate="animate"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-rose-500/20 p-2 rounded-xl text-rose-400">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">Armed Forces</span>
              </div>
              <h3 className="font-bold text-lg text-white mb-1">AFNS Test prep</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Complete preparation for initial nursing test with mocks and study materials.
              </p>
            </motion.div>

            {/* Visual Box 2 - PMA */}
            <motion.div
              className="absolute w-64 p-6 glass-panel-glow rounded-3xl z-10 right-4 sm:right-10 lg:right-4 top-[45%]"
              variants={floatVariantsDelayed}
              animate="animate"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-emerald-500/20 p-2 rounded-xl text-emerald-400">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Military Academy</span>
              </div>
              <h3 className="font-bold text-lg text-white mb-1">PMA cadet prep</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Initial test coaching focusing on verbal, non-verbal, and academic modules.
              </p>
            </motion.div>

            {/* Visual Box 3 - MS Office */}
            <motion.div
              className="absolute w-56 p-4 glass-panel rounded-2xl z-30 left-10 sm:left-24 lg:left-10 bottom-6 flex items-center space-x-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="bg-blue-500/20 p-2.5 rounded-xl text-blue-400">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-white">MS Office course</h4>
                <p className="text-[10px] text-slate-400">Excel, Word & PowerPoint</p>
              </div>
            </motion.div>

            {/* Glowing Decorative Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent -z-10 rounded-full w-[350px] h-[350px] blur-3xl"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
