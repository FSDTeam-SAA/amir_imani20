import React from "react";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="flex justify-center text-center py-16  py-20">
      {/* Badge */}
      <div className="">

      <div className="inline-block mb-6">
        <Button className="text-[#F04D2A] p bg-[#FFEFEB] text-sm font-semibold tracking-widest uppercase">
          ABOUT US
        </Button>
      </div>
      <p className="text-lg sm:text-xl text-[#000000] mb-10 leading-relaxed max-w-xl mx-auto">
        DoUndo connects strategy, perception, imagination, and story through
        thirteen symbols that tie every experience together.
      </p>
      <Button variant="outline" className="border-gray-300 text-gray-900 hover:bg-gray-50 bg-transparent">
                About Us <MoveRight />
              </Button>
      </div>

    </div>
  );
};

export default AboutUs;
