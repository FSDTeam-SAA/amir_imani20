"use client"

import React from "react"
import ProductNavbar from "@/components/shared/ProductNavbar"
import ProductHero from "@/components/shared/ProductHero"
import ProductDetails from "@/components/shared/ProductDetails"
import MediaSection from "@/components/shared/MediaSection"
import ProductFooter from "@/components/shared/ProductFooter"

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-[#FBFBFB] selection:bg-[#2E8F8A]/20 selection:text-[#2E8F8A]">
      {/* Patterned Background Overlay (Subtle) */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-0"
        style={{ 
          backgroundImage: 'url("/images/pattern-bg.png")', // Placeholder for patterned texture
          backgroundSize: '400px',
          backgroundRepeat: 'repeat'
        }}
      />

      <ProductNavbar />
      
      <main className="relative z-10 pt-20 lg:pt-24 pb-20 container mx-auto px-6 lg:px-0 max-w-[1000px]">
        <ProductHero />
        <ProductDetails />
        <MediaSection />
      </main>

      <ProductFooter />
    </div>
  )
}
