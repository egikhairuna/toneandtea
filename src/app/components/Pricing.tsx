import { stefanFont, neueFont } from "../fonts";

const pricingData = [
  {
    category: "Regular Class (1 Session)",
    package: "Single Session (Drop-In)",
    price: "Rp155.000",
    details: "Valid for 7 days",
  },
  {
    category: "Class Packages",
    package: "3 Sessions",
    price: "Rp400.000",
    details: "Valid for 30 days",
  },
  {
    category: "Class Packages",
    package: "5 Sessions",
    price: "Rp650.000",
    details: "Valid for 30 days",
  },
  {
    category: "Class Packages",
    package: "10 Sessions",
    price: "Rp1.200.000",
    details: "Valid for 60 days",
  },
  {
    category: "Class Packages",
    package: "20 Sessions",
    price: "Rp2.000.000",
    details: "Valid for 60 days (Can be shared between 2 people)",
  },
  {
    category: "Class Packages",
    package: "30 Sessions",
    price: "Rp2.900.000",
    details: "Valid for 60 days (Can be shared between 2 people)",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="w-full bg-tone-cream pt-36 md:pt-48 pb-24 md:pb-32 px-6 md:px-16 lg:px-24 border-t border-tone-rose/20">
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          <h2 className={`${stefanFont.className} text-5xl md:text-7xl lg:text-8xl text-tone-rose font-normal uppercase tracking-tight leading-none mb-6`}>
            Simple, Flexible Pricing
          </h2>
          <p className={`${neueFont.className} text-tone-rose/80 text-lg md:text-xl font-light leading-relaxed`}>
            Choose a pass that fits your lifestyle. Flexible drop-ins and shareable session packages designed to support your practice.
          </p>
        </div>

        {/* Pricing Table */}
        <div className="w-full overflow-x-auto rounded-[32px] md:rounded-[40px] shadow-xl bg-white border border-tone-rose/20">
          <table className="w-full min-w-[700px] text-left border-collapse">
            <thead>
              <tr className="bg-tone-rose text-white border-b border-tone-rose/30">
                <th className={`${stefanFont.className} py-5 px-6 md:px-8 text-sm md:text-base font-normal uppercase tracking-wider`}>
                  Category
                </th>
                <th className={`${stefanFont.className} py-5 px-6 md:px-8 text-sm md:text-base font-normal uppercase tracking-wider`}>
                  Package
                </th>
                <th className={`${stefanFont.className} py-5 px-6 md:px-8 text-sm md:text-base font-normal uppercase tracking-wider`}>
                  Price
                </th>
                <th className={`${stefanFont.className} py-5 px-6 md:px-8 text-sm md:text-base font-normal uppercase tracking-wider`}>
                  Details
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-tone-rose/10">
              {pricingData.map((row, index) => (
                <tr 
                  key={index}
                  className="hover:bg-tone-cream/50 transition-colors duration-200"
                >
                  <td className={`${neueFont.className} py-5 px-6 md:px-8 text-stone-600 text-sm md:text-base font-medium`}>
                    {row.category}
                  </td>
                  <td className={`${neueFont.className} py-5 px-6 md:px-8 text-tone-rose text-base md:text-lg font-bold`}>
                    {row.package}
                  </td>
                  <td className={`${neueFont.className} py-5 px-6 md:px-8 text-stone-800 text-base md:text-lg font-bold whitespace-nowrap`}>
                    {row.price}
                  </td>
                  <td className={`${neueFont.className} py-5 px-6 md:px-8 text-stone-500 text-sm md:text-base font-light`}>
                    {row.details}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
