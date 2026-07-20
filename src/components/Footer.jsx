"use client";

import Image from "next/image";
import { Phone, Mail, MapPin, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 pt-16 pb-8 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-slate-200 dark:border-slate-900">
          
          {/* Logo & Brand Details */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 shadow-md bg-black">
                <Image
                  src="/images/logo.jpeg"
                  alt="Siddiqui Skills Academy Logo"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-800 dark:text-white">
                Siddiqui Skills Academy
              </span>
            </div>
            <p className="text-slate-700 dark:text-slate-400 text-base max-w-sm leading-relaxed">
              Empowering candidates to excel in army entrance exams and digital workspaces with quality mentorship and state-of-the-art preparation mock programs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-bold text-slate-800 dark:text-white text-base uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-base text-slate-700 dark:text-slate-400">
              <li>
                <a href="/#home" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="/courses" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Courses Offered</a>
              </li>
              <li>
                <a href="/#why-us" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="/register" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Enroll Today</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-bold text-slate-800 dark:text-white text-base uppercase tracking-wider">Get In Touch</h4>
            <ul className="space-y-3 text-base text-slate-700 dark:text-slate-400">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-blue-600 dark:text-blue-500 mr-2.5 shrink-0 mt-0.5" />
                <div className="flex flex-col space-y-0.5">
                  <span>0306-3036421</span>
                  <span>0313-6701631</span>
                  <span>0323-1774948</span>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-blue-600 dark:text-blue-500 mr-2.5 shrink-0 mt-0.5" />
                <span className="break-all">siddiquiskillsacademy@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-500 mr-2.5 shrink-0 mt-0.5" />
                <span>Main Campus, Near Army Selection & Recruitment Center, Pakistan</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-400 dark:text-slate-500">
          <p>© {currentYear} Siddiqui Skills Academy. All rights reserved.</p>
          <div className="flex items-center space-x-2 mt-4 sm:mt-0">
            <Globe className="h-4.5 w-4.5 text-slate-400 dark:text-slate-600" />
            <span>Designed for Modern Excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
