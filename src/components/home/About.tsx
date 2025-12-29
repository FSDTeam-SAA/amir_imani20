import React from "react";
import ComingSoon from "./ComingSoon";
import AboutUs from "./AboutUs";
import AboutGame from "./AboutGame";
import Image from "next/image";

const About = () => {
  return (
    <div className="relative w-full   ">
      {/* Background image */}
      <div className="fixed top-0 left-0 inset-0 opacity-10 -z-10 w-full h-full">
        <Image
          src="/images/Texture Background.jpg"
          alt="shape"
          fill
          className="object-contain  w-screen h-screen object-cover opacity-50"
        />
      </div>

      <AboutUs />
      <ComingSoon />
      <AboutGame />
    </div>
  );
};

export default About;
