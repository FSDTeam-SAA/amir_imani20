import React from "react";

const Heros = ({ h2, h3 }: { h2?: string; h3?: string }) => {
  return (
    <section className="py-12 md:py-16  bg-[url('/heros.jpg')] bg-cover bg-center bg-no-repeat h-[60vh] ">
      <div className="container mx-auto px-4 flex flex-col justify-center items-center h-full">
        <h2 className="text-xl md:text-[48px] font-semibold text-center mb-4">
          {h2}
        </h2>
        <h2 className="text-xl md:text-[36px] text-center mb-4 text-[#F1562D]">
          {h3}
        </h2>
      </div>
    </section>
  );
};

export default Heros;
