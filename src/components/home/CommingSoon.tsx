import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

import { MoveRight } from "lucide-react";

const CommingSoon = () => {
  return (
    <section className=" relative">
        {/* <div className="absolute inset-0 opacity-10 -z-10">
              <Image
                src="/shape.png"
                alt="shape"
                fill
                className="object-cover  w-full h-full"
              />
            </div> */}
      <div className="container mx-auto py-12">
        <h2 className="text-lg md:text-2xl xl:text-[48px] text-[#0C0D0E] leading-[150%] font-semibold mb-8 text-center">
          Play, Explore & Discover Your Next Adventure
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {/* Card 1 */}
          <div className="relative">
            <p className="absolute top-6 left-8 bg-[#4296A2] text-white px-3 py-1 rounded">
              New
            </p>
            <p className="absolute  bg-white/15  px-3 py-1  inset-0 rounded">

            </p>
            <Image
              src="/comming.png"
              width={490}
              height={670}
              alt="comming"
              className="rounded-lg w-full h-full"
            />

            <h2 className="absolute top-20 w-full text-center text-xl md:text-[48px] font-semibold text-white">
              Doundo game
            </h2>

            <Button className="absolute bottom-6 left-1/2 -translate-x-1/2">
              Buy Now
            </Button>
          </div>

          {/* Card 2 */}
          <div className="relative border-2 rounded-lg py-10  md:py-5   flex flex-col items-center justify-center">
            {/* <p className="absolute top-6 left-8 bg-black text-white px-3 py-1 rounded">
              New
            </p> */}

            <h2 className="text-[#F04D2A] text-base md:text-[48px] font-semibold leading-[120%]">
              Walnize
            </h2>
            <h2 className=" w-full text-center text-[#BDBDBD] text-xl md:text-[50px] font-semibold">
              Coming Soon
            </h2>

            <Button className=" mx-auto text-center rounded-full ">
              Get Verifide <MoveRight />
            </Button>
          </div>
        </div>
        <Button  className="mt-10 mx-auto flex items-center gap-2 border-gray-300 text-white">
           More Games<MoveRight />
        </Button>
      </div>
    </section>
  );
};

export default CommingSoon;
