import About from "@/components/home/About";

import FAQ from "@/components/shared/FAQ";

import GetInTouch from "@/components/shared/GetInTouch";
import Hero from "@/components/shared/Hero";


export default function Home() {
  return (
    <div className=" ">
      
      <Hero />
      <About />
      <GetInTouch />
      <FAQ />
 
    </div>
  );
}
