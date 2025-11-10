import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Journey from "./components/Journey";
import InquiryForm from "./components/InquiryForm";

function Footer() {
  return (
    <footer className="bg-white border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#4A4A4A]">
          © {new Date().getFullYear()} Nusantara Spice Traders. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="text-[#2A3D34] hover:underline">
            Instagram
          </a>
          <a href="#" className="text-[#2A3D34] hover:underline">
            LinkedIn
          </a>
          <a href="#" className="text-[#2A3D34] hover:underline">
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#F7F5F2] text-[#4A4A4A]">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <ProductGrid />
        <Journey />
        <InquiryForm />
      </main>
      <Footer />
    </div>
  );
}
