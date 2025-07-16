import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import SkillGrid from "./components/SkillGrid";

export const metadata = {
  title: "Hilmi Nurbani – Full-Stack Developer",
  description: "Experienced full-stack developer building modern web apps.",
  keywords: ["Full-Stack", "Next.js", "Portfolio", "Hilmi Nurbani"],
  authors: [{ name: "Hilmi Nurbani" }],
};

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <SkillGrid />
      <Portfolio />
      <Experience />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}
