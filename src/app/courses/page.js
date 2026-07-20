import Header from "@/components/Header";
import Courses from "@/components/Courses";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Courses & Consultancies | Siddiqui Skills Academy",
  description: "Browse the full catalog of courses and consultancy services at Siddiqui Skills Academy. Get prep info for PMA, AFNS, Graphic Design, and Private Board Admissions.",
};

export default function CoursesPage() {
  return (
    <>
      <Header />
      <main className="relative bg-slate-50 dark:bg-slate-950 min-h-screen pt-16 transition-colors duration-300">
        
        {/* Page Banner Header */}
        <div className="bg-white dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800/80 py-16 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left space-y-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Academy Courses & Services Directory
            </h1>
            <p className="text-slate-600 dark:text-slate-400 sm:text-lg max-w-2xl">
              View official flyers, complete admission details, syllabus targets, and eligibility rules for military entrance tests and digital courses.
            </p>
          </div>
        </div>

        {/* Full Alternating Rows Courses List */}
        <Courses />

        {/* Integrated Digital Skills Catalog */}
        <Skills />
        
      </main>
      <Footer />
    </>
  );
}
