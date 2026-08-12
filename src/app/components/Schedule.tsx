import Link from "next/link";
import { stefanFont, neueFont } from "../fonts";

const scheduleData = [
  {
    time: "09.00AM - 10.00AM",
    classes: [
      { day: 0, title: "Pilates with Diana" },
      { day: 2, title: "Pilates with Alaya" },
      { day: 4, title: "Pilates with Ria" },
    ],
  },
  {
    time: "12.00AM - 01.00AM",
    classes: [
      { day: 1, title: "Pilates with Ria" },
      { day: 3, title: "Pilates with Diana" },
      { day: 5, title: "Pilates with Diana" },
    ],
  },
  {
    time: "03.00PM - 04.00PM",
    classes: [
      { day: 0, title: "Pilates with Ria" },
      { day: 2, title: "Pilates with Ria" },
      { day: 4, title: "Pilates with Alaya" },
    ],
  },
  {
    time: "06.00PM - 07.00PM",
    classes: [
      { day: 1, title: "Pilates with Dinar" },
      { day: 3, title: "Pilates with Dinar" },
      { day: 5, title: "Pilates with Mia" },
    ],
  },
];

const days = [
  { name: "Monday", date: "17" },
  { name: "Tuesday", date: "18" },
  { name: "Wednesday", date: "19" },
  { name: "Thursday", date: "20" },
  { name: "Friday", date: "21" },
  { name: "Saturday", date: "22" },
];

export default function Schedule() {
  return (
    <section id="schedule" className="w-full bg-[#BDD5EC] py-16 md:py-24 px-6 md:px-16 lg:px-24">
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="flex flex-col gap-8 w-full md:w-auto">
            <h2 className={`${stefanFont.className} text-white text-5xl md:text-7xl lg:text-8xl font-normal uppercase tracking-tight leading-none`}>
              FIND YOUR SCHEDULE
            </h2>
            
            {/* Date Range Selector Pill */}
            <div className="flex items-center gap-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 w-fit shadow-sm border border-white/20">
              <button className="text-stone-400 hover:text-stone-600 transition-colors w-6 h-6 flex items-center justify-center border border-stone-200 rounded-full">
                <span className="text-[10px]">‹</span>
              </button>
              <span className={`${neueFont.className} text-stone-500 text-sm px-4`}>
                17 July - 22 july
              </span>
              <button className="text-stone-400 hover:text-stone-600 transition-colors w-6 h-6 flex items-center justify-center border border-stone-200 rounded-full">
                <span className="text-[10px]">›</span>
              </button>
            </div>
          </div>
          
          <Link href="#" className={`${neueFont.className} text-white text-sm md:text-base border-b border-white pb-1 mb-2 hover:opacity-80 transition-opacity`}>
            Open Calendar
          </Link>
        </div>

        {/* Schedule Grid Table */}
        <div className="w-full overflow-x-auto rounded-[40px] shadow-2xl bg-white/10 backdrop-blur-sm">
          <div className="min-w-[1000px] w-full border border-white/20 rounded-[40px] overflow-hidden bg-white">
            {/* Table Header */}
            <div className="grid grid-cols-6 bg-[#595959]">
              {days.map((day, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center py-6 border-r border-[#666] last:border-r-0">
                  <span className={`${neueFont.className} text-white/70 text-sm font-medium`}>{day.name}</span>
                  <span className={`${neueFont.className} text-white text-2xl font-bold mt-1`}>{day.date}</span>
                </div>
              ))}
            </div>

            {/* Table Body */}
            <div className="grid grid-rows-4">
              {scheduleData.map((row, rowIdx) => (
                <div key={rowIdx} className="grid grid-cols-6 border-b border-stone-100 last:border-b-0 min-h-[160px]">
                  {Array.from({ length: 6 }).map((_, colIdx) => {
                    const classItem = row.classes.find((c) => c.day === colIdx);
                    return (
                      <div key={colIdx} className="p-4 border-r border-stone-100 last:border-r-0 flex flex-col items-center justify-center text-center group hover:bg-stone-50 transition-colors">
                        {classItem ? (
                          <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-2 duration-500">
                            <span className={`${neueFont.className} text-stone-400 text-[11px] font-medium tracking-wide mb-1`}>
                              {row.time}
                            </span>
                            <span className={`${neueFont.className} text-stone-600 text-sm font-bold leading-tight mb-4`}>
                              {classItem.title}
                            </span>
                            <button className={`${neueFont.className} px-8 py-1.5 rounded-full border border-stone-300 text-stone-500 text-xs font-medium hover:bg-stone-600 hover:text-white hover:border-stone-600 transition-all duration-300`}>
                              Book
                            </button>
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
