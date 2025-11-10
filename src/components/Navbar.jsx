import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#products", label: "Products" },
    { href: "#journey", label: "Our Journey" },
    { href: "#inquiry", label: "Inquiry" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F7F5F2]/80 backdrop-blur border-b border-black/5">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="text-lg font-semibold tracking-wide text-[#2A3D34]">
          Nusantara <span className="text-[#D4AF37]">Spice</span> Traders
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[#4A4A4A] hover:text-[#2A3D34] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#inquiry"
            className="inline-flex items-center gap-2 rounded-full bg-[#2A3D34] px-4 py-2 text-sm font-medium text-white hover:bg-[#23332D] transition-colors"
          >
            Get a Quote
          </a>
        </div>

        <button
          aria-label="Toggle Menu"
          className="md:hidden p-2 rounded-md text-[#2A3D34] hover:bg-black/5"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-[#F7F5F2]">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-[#2A3D34]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#inquiry"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-[#2A3D34] px-4 py-2 text-sm font-medium text-white"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
