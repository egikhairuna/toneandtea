import Image from 'next/image';
import { stefanFont, neueFont } from '../fonts';

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero.png" 
          alt="Tone 'N Tea Hero" 
          fill 
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 z-10"></div>
      </div>

      <div className="relative z-20 w-full h-full flex flex-col items-center justify-between py-24 md:py-32 text-center px-6">
        {/* TOP: Branding & Slogan */}
        <div className="flex flex-col pt-24 items-center gap-6">
          <div className="flex items-center brightness-0 invert opacity-90 scale-110">
            <Image src="/logo.svg" alt="Logo" width={90} height={90} className="w-auto h-20 shrink-0" />
            <Image src="/logotype.svg?v=2" alt="Logotype" width={140} height={30} className="w-auto h-10 shrink-0" />
          </div>

          <p className={`${stefanFont.className} text-white text-xl md:text-3xl uppercase font-normal drop-shadow-xl max-w-6xl mx-auto`}>
            IT&apos;S A FEELLINGS THAT SIT BETWEEN TONING UP AND WHINING DOWN
          </p>
        </div>

        {/* BOTTOM: Text and Button */}
        <div className="flex flex-col items-center gap-12 w-full mx-auto mb-10">
          <p className={`${neueFont.className} text-white text-base md:text-xl lg:text-2xl font-normal leading-relaxed max-w-7xl drop-shadow-xl`}>
            Tone & Tea: the upward energy and the downward stillness of sipping tea. Every curve and surface feels lived-in, evoking calm mornings, soft terracotta textures, and mindful presence.
          </p>
          
          <button className={`${stefanFont.className} bg-white text-tone-rose px-14 py-4 rounded-full uppercase tracking-[0.25em] font-medium text-lg hover:bg-tone-cream transition-all duration-300 shadow-2xl cursor-pointer`}>
            FIND OUT MORE
          </button>
        </div>
      </div>
    </section>
  );
}
