import Image from 'next/image';
import Link from 'next/link';
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

          <h1 className={`${stefanFont.className} text-white text-2xl md:text-4xl lg:text-5xl uppercase font-normal drop-shadow-xl max-w-6xl mx-auto tracking-wide`}>
            Sweat with Purpose. Sip with Intention.
          </h1>
        </div>

        {/* BOTTOM: Text and Buttons */}
        <div className="flex flex-col items-center gap-10 w-full mx-auto mb-10">
          <p className={`${neueFont.className} text-white text-base md:text-xl lg:text-2xl font-normal leading-relaxed max-w-5xl drop-shadow-xl`}>
            A modern sanctuary where dynamic movement meets mindful stillness. Elevate your body through Yoga &amp; Mat Pilates, and ground your soul with our curated wellness rituals.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto justify-center">
            <Link 
              href="#" 
              className={`${stefanFont.className} w-full sm:w-auto bg-white text-tone-rose px-10 py-4 rounded-full uppercase tracking-[0.25em] font-medium text-base md:text-lg hover:bg-tone-cream transition-all duration-300 shadow-2xl cursor-pointer text-center`}
            >
              Explore Classes
            </Link>
            <Link 
              href="#" 
              className={`${stefanFont.className} w-full sm:w-auto bg-white text-tone-rose px-10 py-4 rounded-full uppercase tracking-[0.25em] font-medium text-base md:text-lg hover:bg-tone-cream transition-all duration-300 shadow-2xl cursor-pointer text-center`}
            >
              Book Your Session
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
