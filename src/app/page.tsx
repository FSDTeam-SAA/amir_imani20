import About from "@/components/home/About";
import Products from "@/components/home/Products";
import FAQ from "@/components/shared/FAQ";
import Footer from "@/components/shared/Footer";
import GetInTouch from "@/components/shared/GetInTouch";
import Hero from "@/components/shared/Hero";
import Navbar from "@/components/shared/navbar";

export default function Home() {
  return (
    <div className=" ">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <GetInTouch />
      <FAQ />
      <Footer />
    </div>
  );
}
