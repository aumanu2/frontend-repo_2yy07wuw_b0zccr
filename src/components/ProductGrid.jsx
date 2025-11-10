export default function ProductGrid() {
  const products = [
    {
      id: 1,
      name: "Sumatra Arabica Grade 1",
      region: "Aceh Gayo",
      certifications: ["Organic", "Fairtrade"],
      specs: "Moisture ≤12.5% · Screen 17/18",
      image:
        "https://images.unsplash.com/photo-1478749485505-2a903a729c85?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Java Robusta Premium",
      region: "Bondowoso",
      certifications: ["Halal"],
      specs: "Moisture ≤12% · Screen 16",
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "White Pepper (Muntok)",
      region: "Bangka Belitung",
      certifications: ["ISO 9001"],
      specs: "ASTA ≥ 60 · Admixture ≤ 0.5%",
      image:
        "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Cassia Cinnamon",
      region: "West Sumatra",
      certifications: ["Organic"],
      specs: "Moisture ≤ 14% · Oil ≥ 2%",
      image:
        "https://images.unsplash.com/photo-1601924938388-a1f5d7f1f86e?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section id="products" className="bg-[#F7F5F2] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#2A3D34]">
              Product Catalog
            </h2>
            <p className="text-sm text-[#4A4A4A]">
              Export-ready lots with full traceability and lab reports on request.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button className="rounded-full border border-[#2A3D34] text-[#2A3D34] px-4 py-2 text-sm hover:bg-[#2A3D34] hover:text-white">
              Coffee
            </button>
            <button className="rounded-full border border-[#2A3D34] text-[#2A3D34] px-4 py-2 text-sm hover:bg-[#2A3D34] hover:text-white">
              Spices
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((p) => (
            <article
              key={p.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-black/5 hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#2A3D34]">{p.name}</h3>
                <p className="text-sm text-[#4A4A4A]">{p.region}</p>
                <p className="mt-2 text-xs text-[#4A4A4A]">{p.specs}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.certifications.map((c) => (
                    <span
                      key={c}
                      className="text-xs bg-[#F7F5F2] text-[#2A3D34] border border-black/5 rounded-full px-2.5 py-1"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <a
                  href="#inquiry"
                  className="mt-4 inline-flex text-sm text-[#2A3D34] hover:text-[#23332D] font-medium"
                >
                  Request Sample →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
