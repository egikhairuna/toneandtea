import Image from "next/image";
import { stefanFont } from "../fonts";

export default function FeatureSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-white relative overflow-hidden flex flex-col items-center">
      <div className="w-full px-6 md:px-16 lg:px-24 relative flex flex-col items-center">
        {/* Featured Image Container */}
        <div className="w-full relative aspect-[16/9] md:aspect-[21/9] rounded-[40px] md:rounded-[64px] overflow-hidden shadow-xl">
          <Image 
            src="/images/featured.png" 
            alt="Tone & Tea Featured" 
            fill 
            className="object-cover object-top"
          />
        </div>

        {/* CTA Button below image */}
        <button className={`${stefanFont.className} mt-12 bg-tone-rose text-white px-10 py-3 rounded-full hover:bg-tone-rose/90 transition-all duration-300 shadow-lg text-sm md:text-base uppercase tracking-widest cursor-pointer`}>
          GET YOUR BITES AND DRINKS VOUCHER HERE
        </button>
      </div>
    </section>
  );
}
