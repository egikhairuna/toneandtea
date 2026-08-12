import { stefanFont, neueFont } from "../../fonts";

export default function AboutPage() {
  return (
    <section className="w-full bg-tone-cream min-h-screen pt-36 md:pt-48 pb-24 md:pb-32 px-6 md:px-16 lg:px-24 flex flex-col items-center border-t border-tone-rose/20">
      <div className="w-full max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Page Title */}
        <h1 className={`${stefanFont.className} text-4xl md:text-6xl lg:text-7xl text-tone-rose font-normal uppercase leading-tight tracking-tight mb-10 max-w-3xl`}>
          Find Your Balance Between the Hustle and the Calm.
        </h1>

        {/* Body Copy */}
        <div className="w-16 h-0.5 bg-tone-rose/40 mb-10 rounded-full"></div>

        <p className={`${neueFont.className} text-tone-rose/90 text-lg md:text-2xl font-light leading-relaxed max-w-3xl text-center`}>
          Tone &amp; Tea was born out of a simple observation: modern fitness often pushes us to exhaustion, forgetting the beauty of recovery. We wanted to create a place that balances both sides of the coin. Here, toning your muscles is just as important as slowing down your nervous system over a warm cup of tea. We are a community of mindful movers, wellness seekers, and people who believe that self-care isn&apos;t a luxury—it&apos;s a practice.
        </p>
      </div>
    </section>
  );
}
