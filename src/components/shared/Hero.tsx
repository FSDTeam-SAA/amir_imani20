"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-[#2A5D5F] to-[#1F4547] overflow-hidden">
      {/* Background gaming elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Left side - gaming cards and items */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-90">
          <div className="relative w-full h-full">
            {/* Pokéball */}
            <div className="absolute -left-12 top-8 w-32 h-32 rounded-full bg-gradient-to-br from-red-500 via-white to-gray-800 shadow-2xl transform -rotate-12" />
            {/* Card stack */}
            <div className="absolute -left-4 top-40 w-40 h-48 bg-blue-600 rounded-lg shadow-2xl transform -rotate-6" />
            <div className="absolute -left-6 top-44 w-40 h-48 bg-purple-600 rounded-lg shadow-xl transform rotate-3" />
            {/* Game pieces container */}
            <div className="absolute -left-16 bottom-16 w-32 h-32 bg-yellow-400 rounded-full shadow-2xl opacity-80" />
          </div>
        </div>

        {/* Right side - gaming products and pieces */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-90">
          <div className="relative w-full h-full">
            {/* Pokemon card */}
            <div className="absolute -right-8 top-0 w-48 h-64 bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 rounded-xl shadow-2xl transform rotate-12 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl font-bold mb-2">🔥</div>
                <div className="text-sm font-bold">CHARIZARD</div>
              </div>
            </div>
            {/* Game pieces */}
            <div className="absolute -right-4 bottom-12 w-24 h-24 bg-gray-300 rounded-full shadow-xl" />
            <div className="absolute -right-20 bottom-0 w-28 h-28 bg-yellow-300 rounded-full shadow-2xl opacity-70" />
          </div>
        </div>
      </div>

      {/* Center content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">ABOUT US</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-balance">Different games</span>
            <br />
            <span className="text-balance">one language</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-100 mb-10 leading-relaxed max-w-xl mx-auto">
            DoUndo connects strategy, perception, imagination, and story through thirteen symbols that tie every
            experience together.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button className="bg-black hover:bg-gray-900 text-white px-8 py-6 rounded-full text-lg font-semibold inline-flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300">
              Get Your Game Now
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent opacity-5" />
    </section>
  )
}
