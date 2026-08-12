import Image from 'next/image';
import Link from 'next/link';
import { stefanFont, neueFont } from '../fonts';

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-24 pb-10 px-6 md:px-16 lg:px-24 border-t border-stone-100">
      <div className="w-full">
        {/* Top Section: Flex for precise spacing */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-32">
          {/* Logo Section */}
          <div className="lg:w-1/4">
            <Link href="/">
              <Image 
                src="/logotype.svg?v=2" 
                alt="Tone 'N Tea" 
                width={160} 
                height={40} 
                className="w-auto h-11 shrink-0 opacity-90"
              />
            </Link>
          </div>

          {/* Links Groups */}
          <div className="flex flex-1 flex-col md:flex-row gap-24 lg:gap-32">
            {/* Column 2: Quick Links */}
            <div className="flex flex-col gap-8">
              <h3 className={`${neueFont.className} text-xl font-bold text-[#8A7D7A] tracking-tight`}>
                Quick Links
              </h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link href="#" className={`${neueFont.className} text-stone-400 hover:text-tone-rose transition-colors text-base underline underline-offset-[6px] decoration-stone-200`}>
                    Classes
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className={`${neueFont.className} text-stone-400 hover:text-tone-rose transition-colors text-base underline underline-offset-[6px] decoration-stone-200`}>
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className={`${neueFont.className} text-stone-400 hover:text-tone-rose transition-colors text-base underline underline-offset-[6px] decoration-stone-200`}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div className="flex flex-col gap-8">
              <h3 className={`${neueFont.className} text-xl font-bold text-[#8A7D7A] tracking-tight`}>
                Company
              </h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link href="/about" className={`${neueFont.className} text-stone-400 hover:text-tone-rose transition-colors text-base underline underline-offset-[6px] decoration-stone-200`}>
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="#" className={`${neueFont.className} text-stone-400 hover:text-tone-rose transition-colors text-base underline underline-offset-[6px] decoration-stone-200`}>
                    Career
                  </Link>
                </li>
                <li>
                  <Link href="#" className={`${neueFont.className} text-stone-400 hover:text-tone-rose transition-colors text-base underline underline-offset-[6px] decoration-stone-200`}>
                    Corporate Order
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:w-1/4 flex flex-col gap-6 lg:items-end lg:text-right">
            <div className="flex flex-col gap-6 max-w-[340px]">
              <h3 className={`${neueFont.className} text-xl font-bold text-[#8A7D7A] tracking-tight`}>
                Newsletter
              </h3>
              <p className={`${neueFont.className} text-stone-400 text-base leading-relaxed`}>
                Subscribe to be aware of our regular promotions & exclusive offers
              </p>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className={`${neueFont.className} w-full py-4 px-6 rounded-full border border-stone-200 bg-transparent text-stone-500 text-base focus:outline-none focus:border-tone-rose transition-colors placeholder:text-stone-300`}
                />
                <button className="absolute right-6 top-1/2 -translate-y-1/2 text-stone-400 hover:text-tone-rose transition-colors text-xl font-light">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-stone-100 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 overflow-hidden">
          {/* Socials */}
          <div className="flex items-center gap-6">
            {[
              { label: 'Instagram (@tone.and.tea)', href: '#' },
              { label: 'TikTok', href: '#' },
              { label: 'Youtube', href: '#' },
            ].map((social) => (
              <Link key={social.label} href={social.href} className={`${neueFont.className} text-stone-400 hover:text-tone-rose transition-colors text-sm font-bold underline underline-offset-4 decoration-stone-200`}>
                {social.label}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className={`${neueFont.className} text-stone-300 text-sm whitespace-nowrap`}>
            Copyright © {new Date().getFullYear()} Tone n Tea.
          </p>

          {/* Legal */}
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms & Conditions', 'Support'].map((legal) => (
              <Link key={legal} href="#" className={`${neueFont.className} text-stone-400 hover:text-tone-rose transition-colors text-sm font-bold underline underline-offset-4 decoration-stone-200`}>
                {legal}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
