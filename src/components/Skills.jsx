"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera, Video, Palette, PenTool, Share2, Code2, Cpu, Monitor,
  Terminal, DollarSign, ShoppingBag, Layers, Truck, Search,
  Megaphone, TrendingUp, Mail, UserPlus, Coins, Briefcase, Layers3, ArrowRight,
} from "lucide-react";

export default function Skills() {
  const categories = [
    { id: "all", label: "All Skills", icon: <Layers3 className="h-4 w-4" /> },
    { id: "creative", label: "Creative Arts", icon: <Palette className="h-4 w-4" /> },
    { id: "tech", label: "Tech & Web Development", icon: <Code2 className="h-4 w-4" /> },
    { id: "ecommerce", label: "E-Commerce & Freelancing", icon: <ShoppingBag className="h-4 w-4" /> },
    { id: "marketing", label: "Marketing & SEO", icon: <TrendingUp className="h-4 w-4" /> },
  ];

  const skillsData = [
    // Creative Arts
    { name: "Photo Editing", registerValue: "photo", category: "creative", icon: <Camera className="h-6 w-6 text-rose-500" />, description: "Master Photoshop, Lightroom, and mobile-based editing apps to retouch and design visuals." },
    { name: "Video Editing", registerValue: "video", category: "creative", icon: <Video className="h-6 w-6 text-rose-500" />, description: "Learn cuts, effects, audio synchronization, and color grading on Premiere Pro & CapCut." },
    { name: "Graphic Designing", registerValue: "graphic", category: "creative", icon: <Palette className="h-6 w-6 text-rose-500" />, description: "Create professional posters, brochures, and flyers using advanced digital illustration tools." },
    { name: "Logo Creator", registerValue: "logo", category: "creative", icon: <PenTool className="h-6 w-6 text-rose-500" />, description: "Design corporate brand marks, vector logos, and visual brand identity guidelines." },
    { name: "Social Media Creator", registerValue: "social_creator", category: "creative", icon: <Share2 className="h-6 w-6 text-rose-500" />, description: "Build eye-catching social media posts, thumbnails, and viral reels layout designs." },

    // Tech & Web
    { name: "Web Development", registerValue: "web_dev", category: "tech", icon: <Code2 className="h-6 w-6 text-blue-500" />, description: "Introduction to HTML, CSS, JavaScript, and building modern, responsive websites." },
    { name: "IT Fundamentals", registerValue: "it_fundamentals", category: "tech", icon: <Cpu className="h-6 w-6 text-blue-500" />, description: "Understand hardware, software configurations, networks, and general system operations." },
    { name: "Computer Operations", registerValue: "computer_ops", category: "tech", icon: <Monitor className="h-6 w-6 text-blue-500" />, description: "Typing speed, OS shortcuts, file management, and core digital workspace literacy." },
    { name: "Ethical Hacking", registerValue: "hacking", category: "tech", icon: <Terminal className="h-6 w-6 text-blue-500" />, description: "Basics of cyber security, network protection protocols, and secure coding practices." },

    // E-Commerce
    { name: "Fiverr Freelancing", registerValue: "fiverr", category: "ecommerce", icon: <DollarSign className="h-6 w-6 text-emerald-500" />, description: "Create gigs, optimize gigs for SEO, write proposals, and manage international client orders." },
    { name: "Shopify Dropshipping", registerValue: "shopify", category: "ecommerce", icon: <ShoppingBag className="h-6 w-6 text-emerald-500" />, description: "Build high-converting Shopify stores, search for winning products, and configure themes." },
    { name: "Amazon VA / Selling", registerValue: "amazon", category: "ecommerce", icon: <Layers className="h-6 w-6 text-emerald-500" />, description: "Product hunting, listing optimization, keyword research, and virtual assistant operations." },
    { name: "Drop Shipping Setup", registerValue: "dropshipping", category: "ecommerce", icon: <Truck className="h-6 w-6 text-emerald-500" />, description: "Sourcing products from AliExpress/CJDropshipping, automating orders, and supplier handling." },

    // Marketing & SEO
    { name: "SEO Optimization", registerValue: "seo", category: "marketing", icon: <Search className="h-6 w-6 text-indigo-500" />, description: "Rank websites on Google using On-Page, Off-Page, and Technical SEO tactics." },
    { name: "Ads Management", registerValue: "ads", category: "marketing", icon: <Megaphone className="h-6 w-6 text-indigo-500" />, description: "Run profitable Facebook, Instagram, and Google Ads campaigns to get client sales." },
    { name: "Online Marketing", registerValue: "online_marketing", category: "marketing", icon: <TrendingUp className="h-6 w-6 text-indigo-500" />, description: "Digital marketing strategies, lead generation, and social media branding strategies." },
    { name: "Email Creation & Setup", registerValue: "email", category: "marketing", icon: <Mail className="h-6 w-6 text-indigo-500" />, description: "Set up professional business emails, newsletters, and automated cold email campaigns." },
    { name: "Social Account Setup", registerValue: "social_account", category: "marketing", icon: <UserPlus className="h-6 w-6 text-indigo-500" />, description: "Create and optimize pages for Facebook, Instagram, TikTok, and LinkedIn business use." },
    { name: "Account Monetization", registerValue: "monetization", category: "marketing", icon: <Coins className="h-6 w-6 text-indigo-500" />, description: "How to monetize pages via stars, subscriptions, affiliate marketing, and local ads." },
    { name: "Business Management", registerValue: "business_mgmt", category: "marketing", icon: <Briefcase className="h-6 w-6 text-amber-500" />, description: "Team coordination, project organization, scheduling, and basic business operations." },
  ];

  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills = activeTab === "all"
    ? skillsData
    : skillsData.filter((skill) => skill.category === activeTab);

  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      {/* Glow circles */}
      <div className="absolute top-[30%] left-[-10%] w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-blue-600 dark:text-blue-500 uppercase tracking-widest mb-3">Core Skills Directory</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white tracking-tight">
            Comprehensive Digital Skills Catalog
          </p>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          <p className="text-slate-800 dark:text-slate-400 mt-4 sm:text-lg">
            We train our students in 20+ job-ready skills to enable freelancing, self-employment, and corporate employment.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-2xl border text-sm font-semibold transition-all duration-300 ${
                activeTab === category.id
                  ? "bg-slate-900 border-slate-900 text-white dark:bg-white dark:border-white dark:text-slate-950 shadow-md"
                  : "bg-slate-50 border-slate-200 text-slate-800 hover:text-slate-900 hover:bg-slate-100 dark:bg-slate-900/50 dark:border-slate-800/80 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-900"
              }`}
            >
              {category.icon}
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="glass-panel p-5 rounded-2xl border border-slate-200/60 dark:border-slate-900 hover:border-blue-500/20 dark:hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between group"
                whileHover={{ y: -4, scale: 1.01 }}
              >
                <div>
                  <div className="bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-900 w-11 h-11 rounded-xl flex items-center justify-center mb-4">
                    {skill.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1.5">{skill.name}</h4>
                  <p className="text-xs text-slate-700 dark:text-slate-400 leading-relaxed">{skill.description}</p>
                </div>

                {/* Register Now Button */}
                <div className="border-t border-slate-100 dark:border-slate-900/60 mt-4 pt-3">
                  <a
                    href={`/register?course=digital&digitalCourse=${skill.registerValue}`}
                    className="flex items-center justify-center space-x-1.5 w-full bg-slate-900 hover:bg-blue-600 dark:bg-slate-950 dark:hover:bg-blue-600 text-white text-xs font-bold py-2.5 px-3 rounded-xl transition-all duration-300 shadow-inner group/btn"
                  >
                    <span>Register Now</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
