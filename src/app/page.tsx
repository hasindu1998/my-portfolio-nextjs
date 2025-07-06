import Image from "next/image";
import NavBar from "../components/NavBar";
import LandingPage from "@/components/LandingPage";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <NavBar />
      <LandingPage />
      <About />
      <Services />
      <Projects />
      <Skills />
    </div>
  );
}
