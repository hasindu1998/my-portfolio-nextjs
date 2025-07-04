import Image from "next/image";
import NavBar from "../components/NavBar";
import LandingPage from "@/components/LandingPage";
import About from "@/components/About";

export default function Home() {
  return (
    <div>
      <NavBar />
      <LandingPage />
      <About />
    </div>
  );
}
