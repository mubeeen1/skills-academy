"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Phone, BookOpen, GraduationCap, Send, CheckCircle2, MessageSquare } from "lucide-react";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    whatsapp: "",
    course: "afns",
    education: "intermediate",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const courses = [
    { value: "afns", label: "AFNS Initial Test Prep" },
    { value: "pma", label: "PMA Initial Test Prep" },
    { value: "graphic-designing", label: "Mobile Graphic & Video Editing" },
    { value: "academic-admissions", label: "Academic Admissions & Certificates" },
  ];

  const educationLevels = [
    { value: "matric", label: "Matriculation / O-Levels" },
    { value: "intermediate", label: "Intermediate / A-Levels" },
    { value: "bachelors", label: "Bachelors / Undergraduate" },
    { value: "other", label: "Other" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  // Pre-filled WhatsApp link for direct support
  const getWhatsAppLink = () => {
    const academyPhone = "923063036421"; // Primary contact from banners
    const courseLabel = courses.find((c) => c.value === formData.course)?.label || formData.course;
    const text = `Assalamu Alaikum Siddiqui Skills Academy, I want to register for ${courseLabel}. Here are my details:\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*WhatsApp:* ${formData.whatsapp}\n*Education:* ${formData.education}\n*Notes:* ${formData.notes || "None"}`;
    return `https://wa.me/${academyPhone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="register" className="py-24 bg-slate-100 dark:bg-slate-900/50 relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-xs font-bold text-blue-600 dark:text-blue-500 uppercase tracking-widest mb-3">Admission Portal</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white tracking-tight">Register For Next Batch</h3>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          <p className="text-slate-600 dark:text-slate-400 mt-4 text-sm sm:text-base">
            Secure your seat by filling the registration form. Our coordinator will contact you shortly with scheduling details.
          </p>
        </div>

        {/* Form Container */}
        <div className="glass-panel-glow rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-10 relative">
          
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-6"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Full Name</label>
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
                        className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-850 hover:border-slate-300 dark:hover:border-slate-700 focus:border-blue-500 text-slate-800 dark:text-white rounded-2xl pl-12 pr-4 py-3.5 outline-none transition-colors duration-200"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Phone Number</label>
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
                        className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-850 hover:border-slate-300 dark:hover:border-slate-700 focus:border-blue-500 text-slate-800 dark:text-white rounded-2xl pl-12 pr-4 py-3.5 outline-none transition-colors duration-200"
                        placeholder="0306 3036421"
                      />
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">WhatsApp Number</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                        <MessageSquare className="h-5 w-5" />
                      </div>
                      <input
                        type="tel"
                        name="whatsapp"
                        required
                        value={formData.whatsapp}
                        onChange={handleChange}
                        className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-850 hover:border-slate-300 dark:hover:border-slate-700 focus:border-blue-500 text-slate-800 dark:text-white rounded-2xl pl-12 pr-4 py-3.5 outline-none transition-colors duration-200"
                        placeholder="0306 3036421"
                      />
                    </div>
                  </div>

                  {/* Course Dropdown */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Select Course</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-850 hover:border-slate-300 dark:hover:border-slate-700 focus:border-blue-500 text-slate-800 dark:text-white rounded-2xl pl-12 pr-4 py-3.5 outline-none transition-colors duration-200 appearance-none cursor-pointer"
                      >
                        {courses.map((course) => (
                          <option key={course.value} value={course.value}>
                            {course.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Education level */}
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Last Qualification</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                      <select
                        name="education"
                        value={formData.education}
                        onChange={handleChange}
                        className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-850 hover:border-slate-300 dark:hover:border-slate-700 focus:border-blue-500 text-slate-800 dark:text-white rounded-2xl pl-12 pr-4 py-3.5 outline-none transition-colors duration-200 appearance-none cursor-pointer"
                      >
                        {educationLevels.map((level) => (
                          <option key={level.value} value={level.value}>
                            {level.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Notes */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Additional Message (Optional)</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows="3"
                    className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-850 hover:border-slate-300 dark:hover:border-slate-700 focus:border-blue-500 text-slate-800 dark:text-white rounded-2xl p-4 outline-none transition-colors duration-200 resize-none"
                    placeholder="Enter any specific queries or requirements here..."
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-4 rounded-2xl transition-all duration-300 shadow-xl disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>Submit Registration</span>
                      <Send className="h-4.5 w-4.5" />
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                className="text-center py-12 space-y-6"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="inline-flex bg-emerald-500/10 p-4 rounded-full text-emerald-500 dark:text-emerald-400 border border-emerald-500/25 mb-4 animate-bounce">
                  <CheckCircle2 className="h-12 w-12" />
                </div>
                <h4 className="text-2xl font-bold text-slate-800 dark:text-white">Registration Submitted!</h4>
                <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Your form has been recorded. Click below to connect with us directly on WhatsApp and secure your batch timing!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 max-w-md mx-auto">
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-6 rounded-2xl shadow-xl shadow-emerald-500/10 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <MessageSquare className="h-5 w-5" />
                    <span>Send Message on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        name: "",
                        phone: "",
                        whatsapp: "",
                        course: "afns",
                        education: "intermediate",
                        notes: "",
                      });
                    }}
                    className="inline-flex items-center justify-center bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-semibold py-4 px-6 rounded-2xl transition-all duration-300 hover:bg-slate-300 dark:hover:bg-slate-850"
                  >
                    <span>Register Another</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
        </div>
      </div>
    </section>
  );
}
