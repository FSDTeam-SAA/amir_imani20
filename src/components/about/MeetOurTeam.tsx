"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "../ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { MoveRightIcon } from "lucide-react";
const MeetOurTeam = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Left column → bottom to top
  const leftY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // Right column → top to bottom
  const rightY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const data = [
    {
      img: "/images/team-1.png",
      name: "Amir Imani",
      position: "Founder",
      discription:
        "Amir Imani is the creator of DoUndo, a series of games with simple rules and endless possibilities. Thirteen unique symbols lie at the heart of his work, each carrying a story that brings depth and meaning to every game.",
      side: `left`,
    },
    {
      img: "/images/team-2.png",
      name: "Sara Seydi",
      position: "Co Founder & Director of Strategy and Growthr",
      discription:
        "Sara is the strategic force behind DoUndo, turning ideas into reality and guiding them toward growth. With expertise in management and leadership, she shapes branding, partnerships, strategy, and funding, laying strong foundations for DoUndo’s journey as a global brand.",
      side: `right`,
    },
    {
      img: "/images/team-3.png",
      name: "Shikha Singh",
      position: "Designer",
      discription:
        "Shikha is the creative force behind DoUndo’s visual identity. As the graphic designer, she brings Amir’s vision to life, crafting every symbol, card, and box design with care and imagination. From brainstorming with the team to shaping the game’s look and feel, Shikha ensures that DoUndo’s design truly connects with its players.",
      side: `left`,
    },
  ];
  return (
    <section className="py-16 lg:py-20">
      <div className="container mx-auto">
        <span className=" text-amber-200 text-base px-3 py-2 rounded-2xl">
          Team
        </span>
        <h2 className="text-xl md:text-2xl xl:text-5xl">Meet Our Founders</h2>
        <div>
          {data.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center my-12 md:my-20 ${
                item.side === "right" ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/2 px-4 ">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={600}
                  height={700}
                  className="rounded-lg shadow-lg w-full aspect-5/4 object-cover rounded-3xl"
                />
              </div>
              <div className="w-full md:w-1/2 px-4 mt-6 md:mt-0">
                <h3 className="text-2xl lg:text-4xl font-semibold mb-2">
                  {item.name}
                </h3>
                <h4 className="text-xl lg:text-2xl text-gray-400 mb-4">
                  {item.position}
                </h4>
                <p className="text-gray-600">{item.discription}</p>
                <p className=" flex gap-3 items-center pt-8">
                  <Link href={"#"}>
                    <FaXTwitter className=" w-10 h-10 hover:rounded-full hover:bg-[#4296a2] p-2" />
                  </Link>
                  <Link href={"#"}>
                    <FaLinkedinIn className=" w-10 h-10 hover:rounded-full hover:bg-[#4296a2] p-2" />
                  </Link>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-24  bg-[#f2e3c6] rounded-3xl  px-8  relative overflow-hidden">
          {/* <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
          </div> */}

          <div className="relative   grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-20 flex-col md:flex-row justify-between items-center">
            <div className="md:col-span-2 flex flex-col justify-center items-start py-10 md:py-0">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6 italic">
                Ready to explore the DoUndo universe?
              </h2>

              <p className="not-italic mb-4 text-lg">
                Discover the world of DoUndo, unique games, rich symbols, and
                endless ways to play. Start your journey today and bring
                unforgettable moments home with every game.
              </p>
              <Button className="hover:bg-[#4296a2] transform transition-all duration-300 py-5 rounded-2xl text-white mt-4">
                Get Your Game Now <MoveRightIcon />
              </Button>
            </div>
            <div
              ref={sectionRef}
              className=" bg-[#f2e3c6] rounded-3xl  relative overflow-hidden flex gap-5 md:gap-10 md:grid-cols-1"
            >
              <motion.div style={{ y: leftY }} className="flex flex-col gap-5">
                <Image
                  src="/images/aboutbottom1.png"
                  alt="Decorative Background"
                  width={600}
                  height={400}
                  className="w-full pointer-events-none select-none"
                />
                <Image
                  src="/images/aboutbottom2.png"
                  alt="Decorative Background"
                  width={600}
                  height={400}
                  className="w-full pointer-events-none select-none"
                />
                <Image
                  src="/images/aboutbottom3.png"
                  alt="Decorative Background"
                  width={600}
                  height={400}
                  className="w-full pointer-events-none select-none"
                />
              </motion.div>

              <motion.div style={{ y: rightY }} className="flex flex-col gap-5">
                <Image
                  src="/images/aboutbottom4.png"
                  alt="Decorative Background"
                  width={600}
                  height={400}
                  className="w-full pointer-events-none select-none"
                />
                <Image
                  src="/images/aboutbottom5.png"
                  alt="Decorative Background"
                  width={600}
                  height={400}
                  className="w-full pointer-events-none select-none"
                />
                <p className="w-full aspect-5/1 bg-black/30 rounded-4xl backdrop-blur-3xl" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
