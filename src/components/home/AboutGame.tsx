"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const AboutGame = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm">
              <Image src="/aboutgame.png" alt="Wainzite Game" width={700} height={600} className="w-full rounded-lg shadow-lg" />
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-block bg-red-50 text-red-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              ABOUT US
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Game</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Wainzite represents the pinnacle of tabletop gaming innovation, combining intricate storytelling with
              strategic gameplay. Each card tells a story, and every decision shapes your adventure in ways you never
              imagined.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Our design philosophy focuses on creating immersive experiences that bring players together, whether
              you&apos;re a seasoned gamer or discovering the joy of tabletop gaming for the first time. With gorgeous
              artwork and captivating mechanics, Wainzite transcends the traditional gaming experience.
            </p>

            <div className="flex gap-4">
              <Button className="bg-gray-900 hover:bg-black text-white px-6">Explore More</Button>
              <Button variant="outline" className="border-gray-300 text-gray-900 hover:bg-gray-50 bg-transparent">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutGame
