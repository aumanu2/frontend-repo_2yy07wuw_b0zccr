import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#F7F5F2]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/I5S4e5yWb3s4PaCt/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#F7F5F2]/70 via-[#F7F5F2]/80 to-[#F7F5F2]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <p className="text-xs tracking-widest uppercase text-[#2A3D34]/80 mb-3">
          Premium Indonesian Commodities
        </p>
        <h1 className="text-3xl sm:text-5xl font-serif text-[#2A3D34] leading-tight">
          Connecting the World to Verifiable Indonesian Commodities.
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#4A4A4A]">
          Transparent supply chains, audited quality, and export-ready logistics.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a
            href="#products"
            className="rounded-full bg-[#2A3D34] text-white px-5 py-2.5 text-sm font-medium hover:bg-[#23332D]"
          >
            Explore Products
          </a>
          <a
            href="#journey"
            className="rounded-full border border-[#2A3D34] text-[#2A3D34] px-5 py-2.5 text-sm font-medium hover:bg-[#2A3D34] hover:text-white"
          >
            Our Journey
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6">
          {[
            { name: "ISO 9001" },
            { name: "Halal" },
            { name: "Organic" },
            { name: "Fairtrade" },
          ].map((c) => (
            <span
              key={c.name}
              className="text-xs sm:text-sm font-medium text-[#4A4A4A] bg-white/70 backdrop-blur rounded-full px-3 py-1 border border-black/5"
            >
              {c.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
