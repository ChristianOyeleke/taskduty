import React from "react";
import pic from "../assets/images/hero-pic.png";

const Hero = ({ onGoToTasks, illustrationSrc }) => {
  const imageSource = illustrationSrc || pic;

  return (
    <section className="max-w-7xl mx-auto px-5 py-8 sm:px-8 sm:py-12 md:px-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
      {/* Top Image Container (Mobile) */}
      <div className="w-full flex justify-center max-w-xs sm:max-w-md md:max-w-lg md:order-2">
        <img
          src={imageSource}
          alt="Task management illustration"
          className="w-full h-auto object-contain max-h-64 sm:max-h-80 md:max-h-none"
        />
      </div>

      {/* Content Container (Mobile below image) */}
      <div className="flex-1 w-full max-w-xl text-center md:text-left md:order-1">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E1233] leading-tight mb-3">
          Manage your Tasks on <br className="hidden sm:inline" />
          <span className="text-[#9747FF]">TaskDuty</span>
        </h1>

        <p className="text-gray-500 my-4 sm:my-6 text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus,
          sapien, morbi ante nunc euismod ac felis ac. Massa et, at platea
          tempus duis non eget. Hendrerit tortor fermentum bibendum mi nisl
          semper porttitor.
        </p>

        {/* Full-width button on mobile for better touch UX */}
        <button
          onClick={onGoToTasks}
          className="w-full sm:w-auto bg-[#9747FF] hover:bg-[#8331ee] active:scale-95 text-white px-8 py-3.5 sm:py-3 rounded-lg font-semibold text-base shadow-md hover:shadow-lg transition-all cursor-pointer"
        >
          Go to My Tasks
        </button>
      </div>
    </section>
  );
};

export default Hero;
