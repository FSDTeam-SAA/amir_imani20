import React from "react"

export default function ProductDetails() {
  return (
    <section className="py-12 border-t border-[#EFEFEF]">
      <div className="max-w-[800px]">
        {/* Main Title */}
        <h2 className="text-2xl font-bold text-[#111111] mb-6">
          DoUndo
        </h2>

        {/* Long Description */}
        <div className="space-y-6 mb-12 text-[#222222] text-base leading-relaxed">
          <p>
            DoUndo is an entertainment two-player game of strategy and layered decision-making. 
            Your goal is to match all 4 cards in your hand with a complete row of visible top cards 
            on the board, either horizontally or vertically.
          </p>
          <p>
            The game is played across three stackable layers using tactics like switching, 
            stacking, and predicting your opponent&apos;s next move.
          </p>
        </div>

        {/* Subheading and List */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-[#111111]">
            What&apos;s inside the box?
          </h3>
          <ul className="space-y-4 text-[#222222] text-base list-disc pl-5">
            <li>Fabric Game Board - A 4×4 grid with 16 spaces.</li>
            <li>72 Symbol Cards - 12 unique symbols, 6 copies each.</li>
            <li>Rulebook Full instructions and rules.</li>
            <li>Storybook - A thematic companion booklet with backstory and flavor.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
