import { Leaf, Package, Ship, Factory } from "lucide-react";

export default function Journey() {
  const steps = [
    {
      icon: Leaf,
      title: "Farmers",
      desc: "Partnering with certified farmer groups across Sumatra, Java, and Sulawesi.",
    },
    {
      icon: Factory,
      title: "Processing",
      desc: "Wet-hulled and fully-washed stations with moisture and defect control.",
    },
    {
      icon: Package,
      title: "Quality",
      desc: "Independent lab testing, cupping scores, and compliance documentation.",
    },
    {
      icon: Ship,
      title: "Export",
      desc: "Insurance, fumigation, and trackable shipments from Jakarta & Belawan.",
    },
  ];

  return (
    <section id="journey" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-serif text-[#2A3D34] mb-8">
          Our Journey: From Origin to Port
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-black/5 bg-[#F7F5F2] p-6"
            >
              <s.icon className="text-[#2A3D34]" />
              <h3 className="mt-4 text-lg font-semibold text-[#2A3D34]">
                {s.title}
              </h3>
              <p className="mt-1 text-sm text-[#4A4A4A]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
