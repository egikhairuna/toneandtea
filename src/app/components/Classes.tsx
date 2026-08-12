import { stefanFont, neueFont } from "../fonts";

const classData = [
  {
    name: "Dynamic Flow (Yoga)",
    level: "All Levels",
    description: "An energizing practice connecting breath to movement. Build heat, increase flexibility, and clear your mind.",
  },
  {
    name: "Core & Control (Mat Pilates)",
    level: "Intermediate / Open",
    description: "A targeted mat session focusing on deep abdominal strength, spinal articulation, and muscular endurance using body weight and props.",
  },
  {
    name: "Slow Flow & Ground (Yin & Restorative)",
    level: "All Levels",
    description: "Deep stretches and prolonged holds designed to release deep-seated tension, calm the nervous system, and reset your energy.",
  },
];

export default function Classes() {
  return (
    <section id="classes" className="w-full bg-white py-24 md:py-32 px-6 md:px-16 lg:px-24 border-t border-tone-rose/20">
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className={`${stefanFont.className} text-5xl md:text-7xl lg:text-8xl text-tone-rose font-normal uppercase tracking-tight leading-none mb-6`}>
            Our Classes
          </h2>
          <p className={`${neueFont.className} text-tone-rose/80 text-lg md:text-xl font-light leading-relaxed`}>
            Move your body. Align your center. Explore our signature class offerings tailored for all levels.
          </p>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {classData.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-tone-cream/40 border border-tone-rose/20 rounded-[32px] md:rounded-[40px] p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl"
            >
              <div>
                {/* Image Placeholder */}
                <div className="w-full aspect-[4/3] rounded-[24px] md:rounded-[28px] bg-stone-200 border border-stone-300/50 flex items-center justify-center text-stone-400 text-sm font-medium mb-8">
                  <span>Image placeholder</span>
                </div>

                {/* Level Badge */}
                <div className="mb-4">
                  <span className={`${neueFont.className} inline-block bg-tone-rose/15 text-tone-rose text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider`}>
                    {item.level}
                  </span>
                </div>

                {/* Class Title */}
                <h3 className={`${stefanFont.className} text-2xl md:text-3xl text-tone-rose font-normal uppercase leading-tight mb-4`}>
                  {item.name}
                </h3>

                {/* Description */}
                <p className={`${neueFont.className} text-stone-600 text-base md:text-lg font-light leading-relaxed mb-6`}>
                  {item.description}
                </p>
              </div>

              {/* Action Link */}
              <a 
                href="#schedule" 
                className={`${stefanFont.className} inline-block text-center w-full py-3.5 px-6 rounded-full bg-tone-rose text-white text-sm font-medium uppercase tracking-widest hover:bg-tone-rose/90 transition-colors shadow-sm mt-4`}
              >
                Book Class
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
