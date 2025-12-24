import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Righteous } from "next/font/google";
import { MoveRight } from "lucide-react";

const CommingSoon = () => {
  return (
    <section>
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Play, Explore & Discover Your Next Adventure
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {/* Card 1 */}
          <div className="relative">
            <p className="absolute top-10 left-8 bg-black text-white px-3 py-1 rounded">
              New
            </p>

            <Image
              src="/comming.png"
              width={490}
              height={670}
              alt="comming"
              className="rounded-lg w-full h-full"
            />

            <h2 className="absolute top-20 w-full text-center text-xl font-semibold text-white">
              Doundo game
            </h2>

            <Button className="absolute bottom-6 left-1/2 -translate-x-1/2">
              Buy Now
            </Button>
          </div>

          {/* Card 2 */}
          <div className="relative border-2 rounded-lg  flex items-center justify-center">
            <p className="absolute top-10 left-8 bg-black text-white px-3 py-1 rounded">
              New
            </p>

            <h2 className="text-[#F04D2A] text-[60px] font-semibold leading-[120%]">
              Walnize
            </h2>
            <h2 className="absolute top-20 w-full text-center text-xl font-semibold">
              Coming Soon
            </h2>

            <Button className="absolute bottom-6 left-1/2 -translate-x-1/2">
              Get Verifide <MoveRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommingSoon;
