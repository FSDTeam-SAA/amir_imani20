import About from "@/components/home/About";
import AboutGame from "@/components/home/AboutGame";
import AboutUs from "@/components/home/AboutUs";
import FAQ from "@/components/shared/FAQ";
import Footer from "@/components/shared/Footer";
import GetInTouch from "@/components/shared/GetInTouch";
import Hero from "@/components/shared/Hero";
import Navbar from "@/components/shared/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" ">
      <Navbar />
      <Hero />
      <About />
      <GetInTouch />
      <FAQ />
      <Footer />
    </div>
  );
}
