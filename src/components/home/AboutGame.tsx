"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const AboutGame = () => {
  return (
    <section className=" relative py-16 ">
      {/* <div className="absolute inset-0 opacity-10 -z-10">
              <Image
                src="/shape.png"
                alt="shape"
                fill
                className="object-cover  w-full h-full"
              />
            </div> */}
      <div className="container mx-auto px-6">
        <div className="py-5 text-center">
          <h2 className="text-[#000000] text-xl md:text-[48px]">About Game</h2>
          <p className="text-[#535862] text-base">Learn more about the company and the team behind it.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative w-full aspect-5/3 ">
              <Image
                src="/aboutgame.png"
                alt="Wainzite Game"
                width={700}
                height={600}
                className="w-full aspect-5/3 rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-[#4597A0] text-base md:text-xl font-semibold leading-[150%]">
              Phoenix Baker • 19 Jan 2022
            </p>

            <h2 className="text-4xl font-bold text-gray-900 mb-4">walnize</h2>

            {/* <p className="inline-block bg-red-50 text-red-600 text-xs font-semibold px-3 py-1 rounded-full mb-4"></p> */}
            <p className="text-gray-700 leading-relaxed mb-6">
              Linear helps streamline software projects, sprints, tasks, and bug
              tracking. Here’s how to get...
            </p>

            <div className="flex gap-4">
              <Button className="bg-[#FFEFEB]  text-[#F04D2A] px-6 cursor-pointer">
                Explore More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGame;
