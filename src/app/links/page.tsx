import Image from "next/image";
import { stefanFont, neueFont } from "../fonts";

export const metadata = {
  title: "Tone & Tea | Links",
  description: "Sweat with Purpose. Sip with Intention. Quick links and studio info.",
};

const linksData = [
  {
    label: "Booking Yoga & Mat Pilates",
    href: "https://www.toneandtea.com",
    icon: (
      <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
    ),
  },
  {
    label: "Location",
    href: "https://maps.app.goo.gl/uURc9mV7A4k5zDwj8?g_st=ic",
    icon: (
      <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-6-5.686-6-10a6 6 0 1112 0c0 4.314-6 10-6 10z" />
        <circle cx="12" cy="11" r="2.5" />
      </svg>
    ),
  },
  {
    label: "Partnership",
    href: "mailto:toneandtea.indonesia@gmail.com",
    icon: (
      <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/6285220099659",
    icon: (
      <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
      </svg>
    ),
  },
];

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-tone-cream py-12 md:py-16 px-6 flex flex-col justify-between items-center w-full">
      <div className="w-full max-w-md mx-auto flex flex-col items-center my-auto">
        {/* Header Logo */}
        <div className="flex items-center justify-center gap-2 mb-4 scale-105">
          <Image 
            src="/logo.svg" 
            alt="Tone & Tea Logo" 
            width={70} 
            height={70} 
            className="w-auto h-14 md:h-16 shrink-0" 
          />
          <Image 
            src="/logotype.svg?v=2" 
            alt="Tone & Tea Logotype" 
            width={120} 
            height={24} 
            className="w-auto h-7 md:h-8 shrink-0" 
          />
        </div>

        {/* Tagline */}
        <p className={`${neueFont.className} text-tone-brown/80 text-sm md:text-base text-center font-light mb-10 tracking-wide`}>
          Sweat with Purpose. Sip with Intention.
        </p>

        {/* Links Stack */}
        <div className="w-full flex flex-col gap-4.5 mb-10">
          {linksData.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${stefanFont.className} w-full bg-tone-rose text-white py-4.5 px-6 rounded-full uppercase tracking-[0.18em] font-medium text-sm md:text-base hover:bg-tone-rose/90 transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center gap-3.5 text-center cursor-pointer`}
            >
              {link.icon}
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-8 text-center">
        <p className={`${neueFont.className} text-tone-brown/50 text-xs md:text-sm font-light`}>
          Copyright © {new Date().getFullYear()} Tone &amp; Tea
        </p>
      </footer>
    </div>
  );
}
