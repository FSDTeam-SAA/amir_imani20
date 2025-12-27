import React from "react"
import { Play, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MediaSectionProps {
  videoLink?: string
}

export default function MediaSection({ videoLink }: MediaSectionProps) {
  const handlePlayClick = () => {
    if (videoLink) {
      window.open(videoLink, "_blank")
    }
  }

  return (
    <section className="py-12 border-t border-[#EFEFEF]">
      {/* Video Card */}
      <h2 className="text-[#0E1D2B] text-2xl md:text-3xl lg:text-5xl mb-5 text-center">Watch To Learn </h2>
      <div 
        className="relative w-full aspect-video rounded-xl overflow-hidden shadow-[0px_20px_40px_rgba(0,0,0,0.08)] bg-gray-100 mb-8 cursor-pointer"
        onClick={handlePlayClick}
      >
        {/* Placeholder for video thumbnail image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/images/video-placeholder.jpg")' }}
        />
        
        {/* Semi-opaque overlay with text */}
        <div className="absolute inset-0 bg-black/10 flex flex-col justify-end p-8 lg:p-12">
            <h3 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              How to play the game
            </h3>
            
            {/* Visual playback bar */}
            <div className="w-full h-1 bg-white/30 rounded-full mb-2 overflow-hidden">
                <div className="w-1/3 h-full bg-white rounded-full" />
            </div>
        </div>

        {/* Play Icon Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/40 transition-all transform hover:scale-110 active:scale-95">
            <Play className="w-8 h-8 text-white fill-current translate-x-1" />
          </div>
        </div>
      </div>

      {/* Caption and Download Button */}
      {/* <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <p className="text-lg font-medium text-[#111111]">
          Learn how to play. Download the instructions
        </p>
        <Button className="bg-[#F6E9D0] hover:bg-[#F2DEC0] text-[#111111] font-semibold px-8 py-6 rounded-xl flex items-center gap-2 border-none transition-colors">
          Download
          <Download className="w-5 h-5" />
        </Button>
      </div> */}
    </section>
  )
}

