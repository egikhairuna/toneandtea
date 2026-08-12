import Link from "next/link";
import { stefanFont, neueFont } from "../fonts";

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-stone-50 pt-36 md:pt-48 pb-24 md:pb-32 px-6 md:px-16 lg:px-24 border-t border-stone-200">
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className={`${stefanFont.className} text-5xl md:text-7xl lg:text-8xl text-tone-rose font-normal uppercase tracking-tight leading-none mb-6`}>
            Step Into Our Sanctuary.
          </h2>
          <p className={`${neueFont.className} text-tone-rose/80 text-lg md:text-xl font-light leading-relaxed`}>
            We would love to welcome you to the mat and the lounge.
          </p>
        </div>

        {/* Contact Info Cards / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Location */}
          <div className="bg-white p-8 rounded-[32px] border border-stone-200 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className={`${stefanFont.className} text-xl text-tone-rose uppercase font-normal mb-4`}>
                Location
              </h3>
              <p className={`${neueFont.className} text-stone-600 text-sm leading-relaxed mb-6`}>
                Jl. Kemang Timur No.12B 7, RT.7/RW.3, Bangka, Kec. Mampang Prpt., Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12730
              </p>
            </div>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Jl.+Kemang+Timur+No.12B+7+Bangka+Mampang+Prapatan+Jakarta+Selatan" 
              target="_blank"
              rel="noopener noreferrer"
              className={`${neueFont.className} text-stone-400 hover:text-tone-rose transition-colors text-sm font-bold underline underline-offset-4 decoration-stone-200 inline-block`}
            >
              Open in Google Maps →
            </a>
          </div>

          {/* Studio Hours */}
          <div className="bg-white p-8 rounded-[32px] border border-stone-200 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className={`${stefanFont.className} text-xl text-tone-rose uppercase font-normal mb-4`}>
                Studio Hours
              </h3>
              <div className={`${neueFont.className} text-stone-600 text-sm leading-relaxed space-y-2`}>
                <p><span className="font-semibold text-stone-700">Monday – Friday:</span><br />07.00 AM – 09.00 PM</p>
                <p><span className="font-semibold text-stone-700">Saturday – Sunday:</span><br />07.00 AM – 01.00 PM</p>
              </div>
            </div>
          </div>

          {/* Inquiries & Bookings */}
          <div className="bg-white p-8 rounded-[32px] border border-stone-200 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className={`${stefanFont.className} text-xl text-tone-rose uppercase font-normal mb-4`}>
                Inquiries &amp; Bookings
              </h3>
              <div className={`${neueFont.className} text-stone-600 text-sm leading-relaxed space-y-3`}>
                <p>
                  <span className="text-stone-400 block text-xs uppercase tracking-wider mb-0.5">Email</span>
                  <a 
                    href="mailto:toneandtea.indonesia@gmail.com" 
                    className="hover:text-tone-rose transition-colors underline underline-offset-4 decoration-stone-200 break-all"
                  >
                    toneandtea.indonesia@gmail.com
                  </a>
                </p>
                <p>
                  <span className="text-stone-400 block text-xs uppercase tracking-wider mb-0.5">WhatsApp</span>
                  <a 
                    href="#" 
                    className="hover:text-tone-rose transition-colors underline underline-offset-4 decoration-stone-200"
                  >
                    [Insert Number]
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Instagram */}
          <div className="bg-white p-8 rounded-[32px] border border-stone-200 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className={`${stefanFont.className} text-xl text-tone-rose uppercase font-normal mb-4`}>
                Instagram
              </h3>
              <p className={`${neueFont.className} text-stone-600 text-sm leading-relaxed mb-6`}>
                Follow us for daily practice updates, wellness tips, and tea lounge developments.
              </p>
            </div>
            <a 
              href="#" 
              className={`${neueFont.className} text-stone-400 hover:text-tone-rose transition-colors text-sm font-bold underline underline-offset-4 decoration-stone-200 inline-block`}
            >
              @tone.and.tea →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
