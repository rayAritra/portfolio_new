import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Highlights from "@/components/Highlights";
import Achievements from "@/components/Achievements";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BottomDock from "@/components/BottomDock";

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "60px", paddingBottom: "100px" }}>
        <Hero />
        <About />
        <Projects />
        <Highlights />
        <Achievements />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <BottomDock />
    </>
  );
}
