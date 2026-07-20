import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import Features from "@/components/Features";
import RegisterForm from "@/components/RegisterForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative bg-slate-950 min-h-screen">
        <Hero />
        <Courses />
        <Features />
        <RegisterForm />
      </main>
      <Footer />
    </>
  );
}
