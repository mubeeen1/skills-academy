import { Suspense } from "react";
import Header from "@/components/Header";
import RegisterForm from "@/components/RegisterForm";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Batch Registration | Siddiqui Skills Academy",
  description: "Secure your seat for the upcoming military prep or digital skills batches. Fill in the online registration form to enroll at Siddiqui Skills Academy.",
};

export default function RegisterPage() {
  return (
    <>
      <Header />
      <main className="relative bg-slate-50 dark:bg-slate-950 min-h-screen pt-16 transition-colors duration-300">
        
        {/* Page Banner Header */}
        <div className="bg-white dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800/80 py-16 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left space-y-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Academy Batch Registration
            </h1>
            <p className="text-slate-600 dark:text-slate-400 sm:text-lg max-w-2xl">
              Secure your seat for the upcoming batches of PMA Initial Prep, AFNS entry preparation, smartphone graphic design, or private board admissions.
            </p>
          </div>
        </div>

        {/* Detailed Registration Form — wrapped in Suspense for useSearchParams() */}
        <Suspense fallback={<div className="py-24 text-center text-slate-500">Loading form...</div>}>
          <RegisterForm />
        </Suspense>
        
      </main>
      <Footer />
    </>
  );
}
