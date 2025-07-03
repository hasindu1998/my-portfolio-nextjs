import Image from "next/image";
import NavBar from "../components/NavBar";
import LandingPage from "@/components/LandingPage";

export default function Home() {
  return (
    <div>
      <NavBar />
      <LandingPage />
    </div>
  );
}
