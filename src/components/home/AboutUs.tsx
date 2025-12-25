import React from "react";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="flex justify-center text-center py-16  md:y-20">
      {/* Badge */}
      <div className="">
        <div className="inline-block mb-6">
          <p className="text-[#F04D2A]  bg-[#FFEFEB] py-3 px-6 rounded-2xl text-sm font-semibold tracking-widest uppercase">
            ABOUT US
          </p>
        </div>
        <h2 className="text-lg md:text-2xl lg:text-[48px] 2xl:text-[60px] text-[#000000] mb-10 leading-relaxed font-medium  mx-auto">
          DoUndo connects strategy, perception, imagination, and story through
          thirteen symbols that tie every experience together.
        </h2>
        <Button className="border-gray-300 text-white hover:scale-105 ">
          About Us <MoveRight />
        </Button>
      </div>
    </div>
  );
};

export default AboutUs;
