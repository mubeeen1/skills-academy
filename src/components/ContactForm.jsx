"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare, User, Info } from "lucide-react";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      submittedAt: new Date().toLocaleString("en-PK", { timeZone: "Asia/Karachi" }),
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      const body = new FormData();
      body.append("access_key", WEB3FORMS_KEY || "");
      body.append("subject", `New Academy Inquiry: ${formData.subject}`);
      body.append("from_name", "SSA Contact Page");
      Object.entries(payload).forEach(([k, v]) => body.append(k, v ?? ""));

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body,
      });

      if (!res.ok) throw new Error("Email delivery failed");
    } catch (err) {
      console.error("Web3Forms Contact Error:", err);
    } finally {
      setIsSubmitting(false);
      setIsSuccess(true);
    }
  };

  const getWhatsAppLink = () => {
    const academyPhone = "923231774948";
    const text = `Assalamu Alaikum Siddiqui Skills Academy,\n\nI have a query regarding the academy.\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Subject:* ${formData.subject}\n*Message:* ${formData.message}`;
    return `https://wa.me/${academyPhone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-24 bg-slate-50/60 dark:bg-slate-900/50 relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-blue-600 dark:text-blue-500 uppercase tracking-widest mb-3">Get in Touch</h2>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Contact Our Admissions Office
          </p>
          <div className="mt-4 h-1.5 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          <p className="text-slate-800 dark:text-slate-300 mt-5 text-base sm:text-lg lg:text-xl leading-relaxed">
            Have questions about timings, syllabus, or private registrations? Send us a message or call directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="glass-panel p-8 rounded-3xl border border-slate-200 dark:border-slate-800/80 shadow-lg space-y-8 flex-1">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Academy Information</h3>
              
              <div className="space-y-6">
                {/* Phone lines */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/10 p-3 rounded-xl text-blue-600 dark:text-blue-400 mt-1">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">Helpline Support</h4>
                    <div className="mt-2 space-y-1 text-sm text-slate-700 dark:text-slate-400 font-bold">
                      <p>0323-1774948 (Primary)</p>
                      <p>0313-6701631</p>
                      <p>0306-3036421</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-500/10 p-3 rounded-xl text-emerald-600 dark:text-emerald-400">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">Email Us</h4>
                    <p className="mt-1 text-sm text-slate-700 dark:text-slate-400 break-all font-bold">
                      siddiquiskillsacademy@gmail.com
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-500/10 p-3 rounded-xl text-amber-600 dark:text-amber-400 mt-1">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">Visit Campus</h4>
                    <p className="mt-1 text-sm text-slate-700 dark:text-slate-400 leading-relaxed font-semibold">
                      Main Campus, Near Army Selection & Recruitment Center, Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-6 rounded-3xl shadow-xl flex items-center justify-between group">
              <div className="space-y-1">
                <h4 className="font-bold text-base">Quick WhatsApp Chat</h4>
                <p className="text-xs text-emerald-100">Instantly talk to our admissions officer</p>
              </div>
              <a
                href="https://wa.me/923231774948"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-emerald-50 text-emerald-700 p-3.5 rounded-2xl shadow-md transition-all duration-300 hover:scale-105"
              >
                <MessageSquare className="h-5.5 w-5.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel-glow rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl p-8 sm:p-10 h-full flex flex-col justify-center relative">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="flex flex-col space-y-5"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <label className="text-sm font-extrabold text-slate-700 dark:text-slate-400 uppercase tracking-wider block">Your Name <span className="text-rose-500 dark:text-rose-400 ml-0.5">*</span></label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                            <User className="h-5 w-5" />
                          </div>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 focus:border-blue-500 text-slate-900 dark:text-white rounded-2xl pl-12 pr-4 py-3.5 outline-none transition-colors duration-200 text-base"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>

                      {/* Phone Number */}
                      <div className="space-y-2">
                        <label className="text-sm font-extrabold text-slate-700 dark:text-slate-400 uppercase tracking-wider block">Phone Number <span className="text-rose-500 dark:text-rose-400 ml-0.5">*</span></label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                            <Phone className="h-5 w-5" />
                          </div>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 focus:border-blue-500 text-slate-900 dark:text-white rounded-2xl pl-12 pr-4 py-3.5 outline-none transition-colors duration-200 text-base"
                            placeholder="03xx-xxxxxxx"
                          />
                        </div>
                      </div>

                      {/* Email Address */}
                      <div className="space-y-2">
                        <label className="text-sm font-extrabold text-slate-700 dark:text-slate-400 uppercase tracking-wider block">Email Address <span className="text-rose-500 dark:text-rose-400 ml-0.5">*</span></label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                            <Mail className="h-5 w-5" />
                          </div>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 focus:border-blue-500 text-slate-900 dark:text-white rounded-2xl pl-12 pr-4 py-3.5 outline-none transition-colors duration-200 text-base"
                            placeholder="email@domain.com"
                          />
                        </div>
                      </div>

                      {/* Subject */}
                      <div className="space-y-2">
                        <label className="text-sm font-extrabold text-slate-700 dark:text-slate-400 uppercase tracking-wider block">Subject <span className="text-rose-500 dark:text-rose-400 ml-0.5">*</span></label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                            <Info className="h-5 w-5" />
                          </div>
                          <input
                            type="text"
                            name="subject"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 focus:border-blue-500 text-slate-900 dark:text-white rounded-2xl pl-12 pr-4 py-3.5 outline-none transition-colors duration-200 text-base"
                            placeholder="e.g. Batch Timings"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="text-sm font-extrabold text-slate-700 dark:text-slate-400 uppercase tracking-wider block">Your Message <span className="text-rose-500 dark:text-rose-400 ml-0.5">*</span></label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 focus:border-blue-500 text-slate-900 dark:text-white rounded-2xl p-4 outline-none transition-colors duration-200 resize-none text-base"
                        placeholder="Write your questions or queries here..."
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group w-full sm:w-auto flex items-center justify-center space-x-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/20 text-white font-extrabold py-4 px-10 rounded-2xl transition-all duration-300 shadow-lg shadow-blue-500/10 disabled:opacity-50 text-base cursor-pointer self-center mt-2"
                    >
                      {isSubmitting ? (
                        <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    className="text-center py-10 space-y-6"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="inline-flex bg-emerald-500/10 p-4.5 rounded-full text-emerald-500 dark:text-emerald-400 border border-emerald-500/20 animate-bounce">
                      <CheckCircle2 className="h-12 w-12" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">Message Sent!</h3>
                    <p className="text-slate-800 dark:text-slate-300 max-w-md mx-auto text-base sm:text-lg">
                      Thank you for reaching out, <strong>{formData.name}</strong>. Your inquiry has been sent to our inbox via email. You can also connect with us directly on WhatsApp for an instant response!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 max-w-md mx-auto">
                      <a
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center space-x-2.5 bg-emerald-600 hover:bg-emerald-500 hover:scale-[1.02] hover:shadow-emerald-500/20 text-white font-bold py-5 px-6 rounded-2xl shadow-xl shadow-emerald-500/10 transition-all duration-300 flex-1 text-base cursor-pointer"
                      >
                        <MessageSquare className="h-5.5 w-5.5 transition-transform duration-300 group-hover:scale-110" />
                        <span>Send on WhatsApp</span>
                      </a>
                      <button
                        onClick={() => {
                          setIsSuccess(false);
                          setFormData({
                            name: "",
                            phone: "",
                            email: "",
                            subject: "",
                            message: "",
                          });
                        }}
                        className="inline-flex items-center justify-center bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-semibold py-5 px-6 rounded-2xl transition-all duration-300 hover:bg-slate-300 dark:hover:bg-slate-850 text-base"
                      >
                        <span>Reset Form</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
