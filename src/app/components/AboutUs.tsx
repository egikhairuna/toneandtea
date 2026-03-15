'use client';

import { useState } from 'react';
import { stefanFont, neueFont } from '../fonts';

const accordionItems = [
  {
    title: "CONNECT YOUR BODY TO YOUR SOUL",
    content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.\n\n• Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper\n• suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n• Duis autem vel eum iriure dolor in hendrerit in\n• Vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla\n• Amei, cons ectetuer adipiscing elit, sed diam",
  },
  {
    title: "BENEFITS",
    content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.\n\n• Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper\n• suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
  },
  {
    title: "PROGRAMS",
    content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.\n\n• Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper\n• suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
  },
  {
    title: "CLASSES",
    content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.\n\n• Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper\n• suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
  },
  {
    title: "DRINKS?",
    content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.\n\n• Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper\n• suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
  },
];

export default function AboutUs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="bg-tone-cream py-24 md:py-32 overflow-hidden border-t border-tone-rose/20 w-full">
      <div className="w-full px-6 md:px-16 lg:px-24 flex flex-col md:flex-row gap-16 md:gap-24 items-start">
        {/* Left: Heading */}
        <div className="w-full md:w-1/4">
          <h2 className={`${stefanFont.className} text-7xl md:text-8xl lg:text-9xl text-tone-rose font-normal uppercase leading-none drop-shadow-sm`}>
            WHY<br />US?
          </h2>
        </div>

        {/* Right: Accordion */}
        <div className="w-full md:w-3/4">
          <div className="border-t border-tone-rose/30">
            {accordionItems.map((item, index) => (
              <div key={index} className="border-b border-tone-rose/30">
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full py-8 md:py-12 flex items-center justify-between text-left group transition-all duration-300"
                >
                  <span className={`${stefanFont.className} text-4xl md:text-6xl lg:text-[72px] text-tone-rose font-normal uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-300`}>
                    {item.title}
                  </span>
                  <span className="text-4xl md:text-5xl text-tone-rose font-light transition-transform duration-500 ease-in-out" style={{ transform: activeIndex === index ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-[800px] mb-12' : 'max-h-0'}`}
                >
                  <p className={`${neueFont.className} text-tone-rose/80 text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-2xl whitespace-pre-line`}>
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM: Marquee Banner */}
      <div className="mt-24 md:mt-40 bg-tone-rose py-4 relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(10)].map((_, i) => (
            <span key={i} className={`${stefanFont.className} text-white mx-8 text-xl md:text-2xl font-normal uppercase tracking-[0.2em]`}>
              CLICK HERE FOR FREE TRIAL CLASSES  •
            </span>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex">
          {[...Array(10)].map((_, i) => (
            <span key={i} className={`${stefanFont.className} text-white mx-8 text-xl md:text-2xl font-normal uppercase tracking-[0.2em]`}>
              CLICK HERE FOR FREE TRIAL CLASSES  •
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
