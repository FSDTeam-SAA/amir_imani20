import React from "react";
import CommingSoon from "./CommingSoon";
import AboutUs from "./AboutUs";
import AboutGame from "./AboutGame";
import Image from "next/image";

const About = () => {
  return (
    <div className="relative w-full h-full">
      {/* Background image */}
      <div className="absolute inset-0 opacity-10 -z-10">
        <Image
          src="/shape.png"
          alt="shape"
          fill
          className="object-cover  "
        />
      </div>

      <AboutUs />
      <CommingSoon />
      <AboutGame />
    </div>
  );
};

export default About;
