import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CoursesOverview from "@/components/CoursesOverview";
import Features from "@/components/Features";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
        <Hero />
        <CoursesOverview />
        <Features />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
