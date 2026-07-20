"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2, MessageSquare, User, Send, GraduationCap,
  BookOpen, Upload, FileText, Calendar, MapPin, Mail,
  AlertCircle, ImageIcon, ChevronLeft, ChevronRight,
} from "lucide-react";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
const SHEETS_URL    = process.env.NEXT_PUBLIC_SHEETS_URL;
const IMGBB_KEY     = process.env.NEXT_PUBLIC_IMGBB_KEY;

const MAX_FILE_MB   = 3;
const MAX_FILE_BYTES = MAX_FILE_MB * 1024 * 1024;

/* ─── helpers ─────────────────────────────────────────────────────────── */

/** Upload an image file to ImgBB and return its direct image URL */
async function uploadToImgbb(file) {
  const formData = new FormData();
  formData.append("image", file);

  const res = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_KEY}`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) throw new Error(`ImgBB upload failed: ${res.status}`);
  const json = await res.json();
  if (!json.success) throw new Error(json.error?.message || "ImgBB upload rejected");
  return json.data.url; // Direct public URL
}

/** Web3Forms submission */
async function submitToWeb3Forms(payload) {
  const body = new FormData();
  body.append("access_key", WEB3FORMS_KEY);
  body.append("subject",    `New Registration — ${payload.course}`);
  body.append("from_name",  "Siddiqui Skills Academy");

  Object.entries(payload).forEach(([k, v]) => body.append(k, v ?? "—"));

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body,
  });
  if (!res.ok) throw new Error(`Web3Forms HTTP ${res.status}`);
  const json = await res.json();
  if (!json.success) throw new Error(json.message || "Web3Forms rejected");
  return json;
}

/** Google Sheets submission via SheetDB */
async function submitToGoogleSheets(payload) {
  const res = await fetch(SHEETS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: [payload] }),
  });

  if (!res.ok) throw new Error(`Sheets HTTP ${res.status}`);
  const json = await res.json();
  return json;
}

/* ─── component ───────────────────────────────────────────────────────── */

export default function RegisterForm() {
  const searchParams = useSearchParams();

  const courses = [
    { value: "afns",     label: "AFNS Entry Test Prep" },
    { value: "pma",      label: "PMA Initial Test Prep" },
    { value: "msoffice", label: "MS Office Complete Training" },
    { value: "digital",  label: "Digital Skills Course (See Catalogue)" },
    { value: "private",  label: "Matric / FA Private Admission" },
  ];

  const digitalCourses = [
    { value: "photo",            label: "Photo Editing" },
    { value: "video",            label: "Video Editing" },
    { value: "graphic",          label: "Graphic Designing" },
    { value: "logo",             label: "Logo Creator" },
    { value: "social_creator",   label: "Social Media Creator" },
    { value: "web_dev",          label: "Web Development" },
    { value: "it_fundamentals",  label: "IT Fundamentals" },
    { value: "computer_ops",     label: "Computer Operations" },
    { value: "hacking",          label: "Ethical Hacking" },
    { value: "fiverr",           label: "Fiverr Freelancing" },
    { value: "shopify",          label: "Shopify Dropshipping" },
    { value: "amazon",           label: "Amazon VA / Selling" },
    { value: "dropshipping",     label: "Drop Shipping Setup" },
    { value: "seo",              label: "SEO Optimization" },
    { value: "ads",              label: "Ads Management" },
    { value: "online_marketing", label: "Online Marketing" },
    { value: "email",            label: "Email Creation & Setup" },
    { value: "social_account",   label: "Social Account Setup" },
    { value: "monetization",     label: "Account Monetization" },
    { value: "business_mgmt",    label: "Business Management" },
  ];

  const educationLevels = [
    { value: "matric",       label: "Matriculation (10th Grade)" },
    { value: "intermediate", label: "Intermediate (12th Grade)" },
    { value: "bachelors",    label: "Bachelors Degree" },
    { value: "other",        label: "Other" },
  ];

  const emptyForm = {
    name: "", fatherName: "", cnic: "", dob: "",
    email: "", whatsapp: "",
    currentAddress: "", permanentAddress: "", sameAddress: false,
    qualification: "intermediate",
    course: "afns", digitalCourse: "photo",
    picture: null,
  };

  const [formData,         setFormData]         = useState(emptyForm);
  const [fileError,        setFileError]        = useState(null);
  const [isSubmitting,     setIsSubmitting]     = useState(false);
  const [isSuccess,        setIsSuccess]        = useState(false);
  const [submitError,      setSubmitError]      = useState(null);
  const [savedTo,          setSavedTo]          = useState({ email: false, sheets: false });
  const [uploadedPhotoUrl, setUploadedPhotoUrl] = useState("");

  // Custom modern calendar states
  const [dobInputText, setDobInputText] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const [calendarMonth, setCalendarMonth] = useState(new Date().getMonth());
  const [calendarYear, setCalendarYear] = useState(new Date().getFullYear() - 18);

  const monthsList = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const currentYear = new Date().getFullYear();
  const yearsList = Array.from({ length: currentYear - 1945 + 1 }, (_, i) => currentYear - i);

  const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

  /* ── pre-fill from URL query params ──────────────────────────────────── */
  useEffect(() => {
    const cp = searchParams.get("course");
    const dp = searchParams.get("digitalCourse");
    setFormData((prev) => ({
      ...prev,
      ...(courses.find((c) => c.value === cp)          ? { course:        cp } : {}),
      ...(digitalCourses.find((c) => c.value === dp)   ? { digitalCourse: dp } : {}),
    }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  /* ── bidirectional sync for DOB input ────────────────────────────────── */
  useEffect(() => {
    if (formData.dob) {
      const [y, m, d] = formData.dob.split("-");
      const formatted = `${d}-${m}-${y}`;
      if (dobInputText !== formatted) {
        setDobInputText(formatted);
        setCalendarMonth(parseInt(m, 10) - 1);
        setCalendarYear(parseInt(y, 10));
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.dob]);

  /* ── field handlers ──────────────────────────────────────────────────── */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const next = { ...prev, [name]: value };
      if (name === "currentAddress" && prev.sameAddress) next.permanentAddress = value;
      return next;
    });
  };

  const handleCnicChange = (e) => {
    let v = e.target.value.replace(/\D/g, "").slice(0, 13);
    let f = v.slice(0, 5);
    if (v.length > 5)  f += "-" + v.slice(5, 12);
    if (v.length > 12) f += "-" + v.slice(12, 13);
    setFormData((prev) => ({ ...prev, cnic: f }));
  };

  const handleDobInputChange = (e) => {
    let val = e.target.value.replace(/\D/g, "").slice(0, 8);
    let formatted = "";
    if (val.length > 0) formatted += val.slice(0, Math.min(val.length, 2));
    if (val.length > 2) formatted += "-" + val.slice(2, Math.min(val.length, 4));
    if (val.length > 4) formatted += "-" + val.slice(4, 8);

    setDobInputText(formatted);

    if (formatted.length === 10) {
      const [d, m, y] = formatted.split("-");
      const parsedDate = `${y}-${m}-${d}`;
      const dateObj = new Date(parsedDate);
      if (!isNaN(dateObj.getTime())) {
        setFormData((prev) => ({ ...prev, dob: parsedDate }));
        setCalendarMonth(parseInt(m, 10) - 1);
        setCalendarYear(parseInt(y, 10));
      }
    }
  };

  const selectDate = (day) => {
    const d = String(day).padStart(2, "0");
    const m = String(calendarMonth + 1).padStart(2, "0");
    const y = calendarYear;
    
    setFormData((prev) => ({ ...prev, dob: `${y}-${m}-${d}` }));
    setDobInputText(`${d}-${m}-${y}`);
    setShowCalendar(false);
  };

  const handlePrevMonth = () => {
    setCalendarMonth((prev) => {
      if (prev === 0) {
        setCalendarYear((y) => y - 1);
        return 11;
      }
      return prev - 1;
    });
  };

  const handleNextMonth = () => {
    setCalendarMonth((prev) => {
      if (prev === 11) {
        setCalendarYear((y) => y + 1);
        return 0;
      }
      return prev + 1;
    });
  };

  const handleAddressCheckbox = (e) => {
    const checked = e.target.checked;
    setFormData((prev) => ({
      ...prev, sameAddress: checked,
      permanentAddress: checked ? prev.currentAddress : prev.permanentAddress,
    }));
  };

  const handlePictureChange = (e) => {
    setFileError(null);
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > MAX_FILE_BYTES) {
      setFileError(`Photo must be under ${MAX_FILE_MB} MB. Your file is ${(file.size / 1024 / 1024).toFixed(1)} MB.`);
      e.target.value = "";
      return;
    }
    if (!file.type.startsWith("image/")) {
      setFileError("Please upload an image file (JPG, PNG, JPEG).");
      e.target.value = "";
      return;
    }
    setFormData((prev) => ({ ...prev, picture: file }));
  };

  /* ── submit ──────────────────────────────────────────────────────────── */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (fileError) return;
    setIsSubmitting(true);
    setSubmitError(null);

    const courseLabel = formData.course === "digital"
      ? `Digital Skills — ${digitalCourses.find((c) => c.value === formData.digitalCourse)?.label}`
      : courses.find((c) => c.value === formData.course)?.label ?? formData.course;

    const qualLabel = educationLevels.find((l) => l.value === formData.qualification)?.label ?? formData.qualification;

    const isConfigured = (key, placeholder) => key && key !== placeholder;

    // 1. Upload photo to ImgBB first (client-side)
    let photoUrl = "No photo uploaded";
    if (formData.picture && isConfigured(IMGBB_KEY, "your_imgbb_api_key_here")) {
      try {
        photoUrl = await uploadToImgbb(formData.picture);
      } catch (err) {
        console.error("ImgBB upload error, falling back:", err);
        photoUrl = "Upload failed / key error";
      }
    }
    setUploadedPhotoUrl(photoUrl);

    // Prepare payload with plain URL text
    const textPayload = {
      submittedAt:      new Date().toLocaleString("en-PK", { timeZone: "Asia/Karachi" }),
      name:             formData.name,
      fatherName:       formData.fatherName,
      cnic:             formData.cnic,
      dob:              formData.dob,
      email:            formData.email,
      whatsapp:         formData.whatsapp,
      currentAddress:   formData.currentAddress,
      permanentAddress: formData.permanentAddress,
      qualification:    qualLabel,
      course:           courseLabel,
      digitalCourse:    formData.course === "digital"
        ? (digitalCourses.find((c) => c.value === formData.digitalCourse)?.label ?? "")
        : "N/A",
      photoUrl:         photoUrl,
    };

    let sheetsOk = false;
    let emailOk = false;

    // 2. Submit to Google Sheets (CORS enabled SheetDB)
    if (isConfigured(SHEETS_URL, "your_google_apps_script_web_app_url_here")) {
      try {
        const sheetDbPayload = {
          "Submitted At":      textPayload.submittedAt,
          "Full Name":         textPayload.name,
          "Father's Name":     textPayload.fatherName,
          "CNIC":              textPayload.cnic,
          "Date of Birth":     textPayload.dob,
          "Email":             textPayload.email,
          "WhatsApp":          textPayload.whatsapp,
          "Current Address":   textPayload.currentAddress,
          "Permanent Address": textPayload.permanentAddress,
          "Qualification":     textPayload.qualification,
          "Course":            textPayload.course,
          "Digital Sub-Course": textPayload.digitalCourse,
          "Photo Link":        textPayload.photoUrl,
        };
        await submitToGoogleSheets(sheetDbPayload);
        sheetsOk = true;
      } catch (err) {
        console.error("Google Sheets Submission Error:", err);
      }
    }

    // 3. Submit to Web3Forms (bypasses attachment restrictions by sending standard text URL)
    if (isConfigured(WEB3FORMS_KEY, "your_web3forms_access_key_here")) {
      try {
        await submitToWeb3Forms(textPayload);
        emailOk = true;
      } catch (err) {
        console.error("Web3Forms Submission Error:", err);
      }
    }

    setSavedTo({ email: emailOk, sheets: sheetsOk });

    if (!emailOk && !sheetsOk) {
      setSubmitError(
        "Could not reach the servers right now. Please use the WhatsApp button below to send your details directly."
      );
    }

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  /* ── WhatsApp deep-link ──────────────────────────────────────────────── */
  const getWhatsAppLink = () => {
    const phone = "923231774948";
    const courseLabel = formData.course === "digital"
      ? `Digital Skills — ${digitalCourses.find((c) => c.value === formData.digitalCourse)?.label}`
      : courses.find((c) => c.value === formData.course)?.label ?? formData.course;

    const text = [
      "Assalamu Alaikum Siddiqui Skills Academy,",
      "",
      "I want to register for the upcoming batch.",
      "",
      `*Name:* ${formData.name}`,
      `*Father's Name:* ${formData.fatherName}`,
      `*CNIC:* ${formData.cnic}`,
      `*Date of Birth:* ${formData.dob}`,
      `*Email:* ${formData.email}`,
      `*WhatsApp:* ${formData.whatsapp}`,
      `*Current Address:* ${formData.currentAddress}`,
      `*Permanent Address:* ${formData.permanentAddress}`,
      `*Qualification:* ${formData.qualification}`,
      `*Course:* ${courseLabel}`,
      `*Photo Link:* ${uploadedPhotoUrl || "Not uploaded"}`,
    ].join("\n");

    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  };

  const resetForm = () => {
    setIsSuccess(false);
    setSubmitError(null);
    setFileError(null);
    setDobInputText("");
    setUploadedPhotoUrl("");
    setSavedTo({ email: false, sheets: false });
    setFormData(emptyForm);
  };

  /* ── style shorthands ────────────────────────────────────────────────── */
  const inp = "w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 focus:border-blue-500 text-slate-800 dark:text-white rounded-2xl pl-12 pr-4 py-3.5 outline-none transition-colors duration-200 text-base";
  const sel = `${inp} appearance-none cursor-pointer`;
  const lbl = "text-sm font-extrabold text-slate-700 dark:text-slate-400 uppercase tracking-wider block";

  const Ico = ({ children }) => (
    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
      {children}
    </div>
  );

  /* ─────────────────────────────────────────────────────────────────────── */
  return (
    <section id="register" className="py-24 bg-slate-50/60 dark:bg-slate-900/50 relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-sm font-bold text-blue-600 dark:text-blue-500 uppercase tracking-widest mb-3">Admission Portal</h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">Register For Next Batch</h3>
          <div className="mt-4 h-1.5 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full" />
          <p className="text-slate-800 dark:text-slate-400 mt-5 text-base sm:text-lg">
            Secure your seat by filling the registration form. Our coordinator will contact you shortly with scheduling details.
          </p>
        </div>

        {/* Card */}
        <div className="glass-panel-glow rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-10">
          <AnimatePresence mode="wait">

            {/* ── Form ── */}
            {!isSuccess ? (
              <motion.form key="form" onSubmit={handleSubmit}
                className="flex flex-col space-y-6"
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  {/* Name */}
                  <div className="space-y-2">
                    <label className={lbl}>Full Name</label>
                    <div className="relative">
                      <Ico><User className="h-5 w-5" /></Ico>
                      <input type="text" name="name" required value={formData.name} onChange={handleChange} className={inp} placeholder="John Doe" />
                    </div>
                  </div>

                  {/* Father */}
                  <div className="space-y-2">
                    <label className={lbl}>Father's Name</label>
                    <div className="relative">
                      <Ico><User className="h-5 w-5" /></Ico>
                      <input type="text" name="fatherName" required value={formData.fatherName} onChange={handleChange} className={inp} placeholder="Father's Full Name" />
                    </div>
                  </div>

                  {/* CNIC */}
                  <div className="space-y-2">
                    <label className={lbl}>CNIC / B-Form Number</label>
                    <div className="relative">
                      <Ico><FileText className="h-5 w-5" /></Ico>
                      <input type="text" name="cnic" required value={formData.cnic} onChange={handleCnicChange} className={inp} placeholder="37405-1234567-1" />
                    </div>
                  </div>

                  {/* DOB */}
                  <div className="space-y-2 relative">
                    <label className={lbl}>Date of Birth</label>
                    <div className="relative">
                      <Ico><Calendar className="h-5 w-5" /></Ico>
                      <input
                        type="text"
                        required
                        value={dobInputText}
                        onChange={handleDobInputChange}
                        placeholder="DD-MM-YYYY"
                        className={inp}
                      />
                      <button
                        type="button"
                        onClick={() => setShowCalendar((prev) => !prev)}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-blue-500 transition-colors cursor-pointer"
                      >
                        <Calendar className="h-5 w-5" />
                      </button>
                    </div>

                    <AnimatePresence>
                      {showCalendar && (
                        <>
                          <div className="fixed inset-0 z-40" onClick={() => setShowCalendar(false)} />
                          <motion.div
                            initial={{ opacity: 0, y: 12, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 380, damping: 26 }}
                            className="absolute left-0 right-0 sm:left-auto sm:w-[320px] z-50 mt-2 p-5 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/60 rounded-3xl shadow-2xl shadow-blue-500/5"
                          >
                            <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100 dark:border-slate-900">
                              <button
                                type="button"
                                onClick={handlePrevMonth}
                                className="p-1.5 hover:bg-slate-50 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-500 dark:text-slate-400 transition-all cursor-pointer"
                              >
                                <ChevronLeft className="h-4.5 w-4.5" />
                              </button>

                              <div className="flex items-center space-x-1.5">
                                <select
                                  value={calendarMonth}
                                  onChange={(e) => setCalendarMonth(parseInt(e.target.value, 10))}
                                  className="bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2.5 py-1.5 text-xs text-slate-800 dark:text-slate-200 font-extrabold outline-none cursor-pointer transition-colors"
                                >
                                  {monthsList.map((m, idx) => (
                                    <option key={m} value={idx} className="bg-white dark:bg-slate-950">{m.slice(0, 3)}</option>
                                  ))}
                                </select>

                                <select
                                  value={calendarYear}
                                  onChange={(e) => setCalendarYear(parseInt(e.target.value, 10))}
                                  className="bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2.5 py-1.5 text-xs text-slate-800 dark:text-slate-200 font-extrabold outline-none cursor-pointer transition-colors"
                                >
                                  {yearsList.map((y) => (
                                    <option key={y} value={y} className="bg-white dark:bg-slate-950">{y}</option>
                                  ))}
                                </select>
                              </div>

                              <button
                                type="button"
                                onClick={handleNextMonth}
                                className="p-1.5 hover:bg-slate-50 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-500 dark:text-slate-400 transition-all cursor-pointer"
                              >
                                <ChevronRight className="h-4.5 w-4.5" />
                              </button>
                            </div>

                            <div className="grid grid-cols-7 gap-1 text-center mb-2 text-[10px] font-extrabold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                              <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
                            </div>

                            <div className="grid grid-cols-7 gap-1 text-center">
                              {Array.from({ length: getFirstDayOfMonth(calendarMonth, calendarYear) }).map((_, idx) => (
                                <span key={`empty-${idx}`} className="w-8 h-8" />
                              ))}

                              {Array.from({ length: getDaysInMonth(calendarMonth, calendarYear) }).map((_, idx) => {
                                const day = idx + 1;
                                const dateString = `${calendarYear}-${String(calendarMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                                const isSelected = formData.dob === dateString;
                                
                                const today = new Date();
                                const isToday = today.getDate() === day && today.getMonth() === calendarMonth && today.getFullYear() === calendarYear;

                                return (
                                  <button
                                    key={`day-${day}`}
                                    type="button"
                                    onClick={() => selectDate(day)}
                                    className={`w-8 h-8 rounded-xl text-xs font-bold flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95 ${
                                      isSelected
                                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20 font-extrabold scale-105"
                                        : isToday
                                          ? "border border-blue-500/40 text-blue-600 dark:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-900 font-bold"
                                          : "hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-800 dark:text-slate-200"
                                    }`}
                                  >
                                    {day}
                                  </button>
                                );
                              })}
                            </div>
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className={lbl}>Email Address</label>
                    <div className="relative">
                      <Ico><Mail className="h-5 w-5" /></Ico>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange} className={inp} placeholder="email@domain.com" />
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="space-y-2">
                    <label className={lbl}>WhatsApp Number</label>
                    <div className="relative">
                      <Ico><MessageSquare className="h-5 w-5" /></Ico>
                      <input type="tel" name="whatsapp" required value={formData.whatsapp} onChange={handleChange} className={inp} placeholder="03xx-xxxxxxx" />
                    </div>
                  </div>

                  {/* Current Address */}
                  <div className="space-y-2 md:col-span-2">
                    <label className={lbl}>Current Address</label>
                    <div className="relative">
                      <Ico><MapPin className="h-5 w-5" /></Ico>
                      <input type="text" name="currentAddress" required value={formData.currentAddress} onChange={handleChange} className={inp} placeholder="House No, Street, Mohalla, City" />
                    </div>
                  </div>

                  {/* Permanent Address */}
                  <div className="space-y-2 md:col-span-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
                      <label className={lbl}>Permanent Address</label>
                      <label className="inline-flex items-center space-x-2 text-xs font-bold text-slate-700 dark:text-slate-400 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <input type="checkbox" checked={formData.sameAddress} onChange={handleAddressCheckbox}
                          className="rounded border-slate-300 dark:bg-slate-950 dark:border-slate-800 text-blue-600 focus:ring-blue-500 cursor-pointer" />
                        <span>Same as Current Address</span>
                      </label>
                    </div>
                    <div className="relative">
                      <Ico><MapPin className="h-5 w-5" /></Ico>
                      <input type="text" name="permanentAddress" required disabled={formData.sameAddress}
                        value={formData.permanentAddress} onChange={handleChange}
                        className={`${inp} disabled:opacity-60 disabled:bg-slate-50 dark:disabled:bg-slate-900`}
                        placeholder="House No, Street, Mohalla, City" />
                    </div>
                  </div>

                  {/* Qualification */}
                  <div className="space-y-2">
                    <label className={lbl}>Last Qualification</label>
                    <div className="relative">
                      <Ico><GraduationCap className="h-5 w-5" /></Ico>
                      <select name="qualification" value={formData.qualification} onChange={handleChange} className={sel}>
                        {educationLevels.map((l) => (
                          <option key={l.value} value={l.value} className="bg-white dark:bg-slate-955 text-slate-800 dark:text-white">{l.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Course */}
                  <div className="space-y-2">
                    <label className={lbl}>Select Course</label>
                    <div className="relative">
                      <Ico><BookOpen className="h-5 w-5" /></Ico>
                      <select name="course" value={formData.course} onChange={handleChange} className={sel}>
                        {courses.map((c) => (
                          <option key={c.value} value={c.value} className="bg-white dark:bg-slate-955 text-slate-800 dark:text-white">{c.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Digital Sub-category */}
                  {formData.course === "digital" && (
                    <motion.div className="space-y-2 md:col-span-2"
                      initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }}
                    >
                      <label className={lbl}>
                        Select Digital Skill
                        <span className="ml-2 text-[10px] font-bold text-blue-600 dark:text-blue-400 normal-case tracking-normal bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">Auto-filled</span>
                      </label>
                      <div className="relative">
                        <Ico><BookOpen className="h-5 w-5" /></Ico>
                        <select name="digitalCourse" value={formData.digitalCourse} onChange={handleChange}
                          className="w-full bg-white dark:bg-slate-955 border border-blue-500/50 dark:border-blue-500/30 hover:border-blue-500 focus:border-blue-600 text-slate-800 dark:text-white rounded-2xl pl-12 pr-4 py-3.5 outline-none transition-colors duration-200 appearance-none cursor-pointer text-base">
                          {digitalCourses.map((dc) => (
                            <option key={dc.value} value={dc.value} className="bg-white dark:bg-slate-950 text-slate-800 dark:text-white">{dc.label}</option>
                          ))}
                        </select>
                      </div>
                    </motion.div>
                  )}

                  {/* Fresh Picture Upload */}
                  <div className="space-y-2 md:col-span-2">
                    <div className="flex items-center justify-between">
                      <label className={lbl}>Fresh Picture</label>
                      <span className="text-[10px] font-bold text-slate-500 dark:text-slate-500 uppercase tracking-wider">
                        Max {MAX_FILE_MB} MB · JPG / PNG
                      </span>
                    </div>

                    <label className={`flex flex-col items-center justify-center w-full h-36 border-2 border-dashed rounded-2xl cursor-pointer transition-colors duration-200 ${
                      fileError
                        ? "border-rose-400 bg-rose-50 dark:bg-rose-950/20"
                        : formData.picture
                          ? "border-emerald-400 bg-emerald-50 dark:bg-emerald-950/20"
                          : "border-slate-300 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500/50 bg-white dark:bg-slate-955"
                    }`}>
                      <div className="flex flex-col items-center justify-center py-4 px-3 text-center">
                        {formData.picture ? (
                          <ImageIcon className="h-8 w-8 text-emerald-500 mb-2" />
                        ) : (
                          <Upload className="h-8 w-8 text-slate-400 dark:text-slate-500 mb-2" />
                        )}
                        <p className={`text-sm font-bold ${formData.picture ? "text-emerald-600 dark:text-emerald-400" : "text-slate-700 dark:text-slate-400"}`}>
                          {formData.picture ? `✓ ${formData.picture.name}` : "Click to upload fresh picture"}
                        </p>
                        {formData.picture && (
                          <p className="text-xs text-emerald-500 mt-1">
                            {(formData.picture.size / 1024).toFixed(0)} KB — will be hosted & emailed
                          </p>
                        )}
                        {!formData.picture && (
                          <p className="text-xs text-slate-500 mt-1">PNG, JPG or JPEG · Direct Web Hosting</p>
                        )}
                      </div>
                      <input type="file" name="picture" accept="image/*" required onChange={handlePictureChange} className="hidden" />
                    </label>

                    {/* File error */}
                    {fileError && (
                      <p className="flex items-center space-x-1.5 text-xs font-bold text-rose-600 dark:text-rose-400 mt-1">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        <span>{fileError}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Submit */}
                <button type="submit" disabled={isSubmitting || !!fileError}
                  className="group w-full sm:w-auto flex items-center justify-center space-x-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/20 text-white font-extrabold py-4 px-10 rounded-2xl transition-all duration-300 shadow-lg shadow-blue-500/10 disabled:opacity-50 disabled:cursor-not-allowed text-base cursor-pointer self-center mt-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Uploading &amp; Submitting…</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Registration</span>
                      <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </button>
              </motion.form>

            /* ── Success Screen ── */
            ) : (
              <motion.div key="success" className="text-center py-12 space-y-6"
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}
              >
                <div className={`inline-flex p-4 rounded-full border mb-4 ${submitError
                  ? "bg-amber-500/10 text-amber-500 border-amber-500/25"
                  : "bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border-emerald-500/25 animate-bounce"
                }`}>
                  {submitError ? <AlertCircle className="h-12 w-12" /> : <CheckCircle2 className="h-12 w-12" />}
                </div>

                <h4 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                  {submitError ? "Submission Issue" : "Registration Submitted!"}
                </h4>

                {/* Saved-to badges */}
                {!submitError && (
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    {[
                      { ok: savedTo.email,  label: "📧 Email Notification" },
                      { ok: savedTo.sheets, label: "📊 Google Sheets" },
                      { ok: !!uploadedPhotoUrl && !uploadedPhotoUrl.includes("failed"), label: "☁️ Image Hosted" },
                    ].map(({ ok, label }) => (
                      <span key={label} className={`inline-flex items-center space-x-1.5 text-xs font-bold px-3 py-1.5 rounded-full border ${
                        ok
                          ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20"
                          : "bg-slate-100 dark:bg-slate-900 text-slate-500 border-slate-300 dark:border-slate-800"
                      }`}>
                        <span>{ok ? "✓" : "✗"}</span>
                        <span>{label}</span>
                      </span>
                    ))}
                  </div>
                )}

                <p className="text-slate-800 dark:text-slate-350 max-w-md mx-auto text-base sm:text-lg">
                  {submitError
                    ? submitError
                    : <>Thank you, <strong>{formData.name}</strong>. Your registration &amp; photo link have been saved. Connect on WhatsApp to confirm your batch timing!</>
                  }
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 max-w-md mx-auto">
                  <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center space-x-2.5 bg-emerald-600 hover:bg-emerald-500 hover:scale-[1.02] text-white font-bold py-5 px-6 rounded-2xl shadow-xl shadow-emerald-500/10 transition-all duration-300 flex-1 text-base cursor-pointer">
                    <MessageSquare className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                    <span>Send on WhatsApp</span>
                  </a>
                  <button onClick={resetForm}
                    className="inline-flex items-center justify-center bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-semibold py-5 px-6 rounded-2xl transition-all duration-300 hover:bg-slate-300 dark:hover:bg-slate-800 text-base cursor-pointer">
                    Register Another
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
