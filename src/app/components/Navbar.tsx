'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { stefanFont } from '../fonts';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="fixed top-6 md:top-12 left-0 right-0 mx-auto w-[92%] md:w-[95%] z-50 bg-white shadow-xl rounded-full px-4 md:px-5 py-1.5 md:py-2 flex items-center justify-between transition-all duration-300">
        <Link href="/" className="flex items-center gap-1 md:gap-0">
          <Image src="/logo.svg" alt="Tone 'N Tea Logo" width={80} height={80} className="w-auto h-10 md:h-17 shrink-0" />
          <Image src="/logotype.svg?v=2" alt="Tone 'N Tea Logotype" width={102} height={20} className="w-auto h-5 md:h-8 shrink-0" />
        </Link>

        <div className="flex items-center gap-4 md:gap-12">
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10 lg:gap-15">
            <Link href="/about" className={`${stefanFont.className} text-tone-rose hover:text-tone-brown transition-colors uppercase text-lg tracking-[0.25em] font-medium`}>
              Our Story
            </Link>
            <Link href="https://tonentea.rezerv.co/class" className={`${stefanFont.className} text-tone-rose hover:text-tone-brown transition-colors uppercase text-lg tracking-[0.25em] font-medium`}>
              Classes
            </Link>
            <Link href="https://tonentea.rezerv.co/package" className={`${stefanFont.className} text-tone-rose hover:text-tone-brown transition-colors uppercase text-lg tracking-[0.25em] font-medium`}>
              Pricing
            </Link>
            <Link href="/contact" className={`${stefanFont.className} text-tone-rose hover:text-tone-brown transition-colors uppercase text-lg tracking-[0.25em] font-medium`}>
              Contact
            </Link>
          </div>

          <div className="flex items-center">
            {/* Desktop Join Us Button */}
            <Link href="#" className={`${stefanFont.className} hidden md:flex bg-tone-rose text-white px-10 py-4 rounded-full hover:bg-tone-rose/80 transition-colors shadow-md hover:shadow-lg text-lg font-medium tracking-widest uppercase cursor-pointer whitespace-nowrap`}>
              Join Us!
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button 
              onClick={toggleMenu}
              className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <div className={`w-6 h-0.5 bg-tone-rose transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-tone-rose transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-tone-rose transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Navigation */}
      <div 
        className={`fixed inset-0 z-[60] transition-all duration-500 md:hidden ${isOpen ? 'visible' : 'invisible'}`}
      >
        {/* Backdrop overlay */}
        <div 
          className={`absolute inset-0 bg-stone-900/40 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={toggleMenu}
        ></div>

        {/* Sidebar Content */}
        <div 
          className={`absolute top-0 left-0 h-full w-full bg-white shadow-2xl transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="p-8 pb-12 flex flex-col h-full items-center">
            {/* Header */}
            <div className="flex items-center justify-between w-full mb-16">
              <Link href="/" onClick={() => setIsOpen(false)} className="scale-75 origin-left">
                <Image src="/logotype.svg?v=2" alt="Tone 'N Tea" width={120} height={20} className="w-auto h-8" />
              </Link>
              <button 
                onClick={toggleMenu}
                className="text-tone-rose p-2 text-2xl"
              >
                ✕
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-8 items-center w-full">
              {[
                { label: 'Our Story', href: '/about' },
                { label: 'Classes', href: 'https://tonentea.rezerv.co/class' },
                { label: 'Pricing', href: 'https://tonentea.rezerv.co/package' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <Link 
                  key={item.label}
                  href={item.href} 
                  onClick={toggleMenu}
                  className={`${stefanFont.className} text-tone-rose text-3xl uppercase tracking-[0.2em] font-medium border-b border-stone-50 transition-all hover:scale-105`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Bottom Section */}
            <div className="mt-auto w-full flex flex-col items-center gap-12">
              <Link 
                href="#"
                onClick={toggleMenu}
                className={`${stefanFont.className} w-full py-5 bg-tone-rose text-white rounded-full text-2xl font-medium tracking-[0.15em] uppercase text-center shadow-lg shadow-tone-rose/20`}
              >
                Join Us!
              </Link>
              
              <div className="pt-8 border-t border-stone-100 w-full text-center">
                <p className="text-stone-300 text-sm uppercase tracking-widest">
                  Tone & Tea © 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
