import React from "react";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="flex container mx-auto justify-center text-center py-16  md:y-20">
      {/* Badge */}
      <div className="">
        <div className="inline-block mb-6">
          <p className="text-[#0E1D2B]  bg-[#F2E3C6] py-3 px-6 rounded-2xl text-sm font-semibold tracking-widest uppercase">
            ABOUT US
          </p>
        </div>
        <h2 className="text-lg md:text-2xl lg:text-[48px] 2xl:text-[60px] text-[#000000] mb-10 leading-relaxed font-medium leading-[68%] mx-auto">
          DoUndo connects people through games that live beyond the table.
        </h2>
        <Link href="/about-us">
        
        <Button className="border-gray-300 text-white cursor-pointer hover:scale-105 ">
          About Us <MoveRight />
        </Button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
