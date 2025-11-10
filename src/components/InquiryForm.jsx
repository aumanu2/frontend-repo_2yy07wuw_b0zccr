import { useState } from "react";

export default function InquiryForm() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      setStatus("loading");
      // Backend not implemented in this task; simulate success
      await new Promise((r) => setTimeout(r, 800));
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <section id="inquiry" className="bg-[#F7F5F2] py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-serif text-[#2A3D34] mb-6">
          Request a Quote
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl border border-black/5 p-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-[#2A3D34] mb-1">
              Product
            </label>
            <select
              name="product"
              required
              className="w-full rounded-lg border border-black/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            >
              <option value="Sumatra Arabica Grade 1">Sumatra Arabica Grade 1</option>
              <option value="Java Robusta Premium">Java Robusta Premium</option>
              <option value="White Pepper (Muntok)">White Pepper (Muntok)</option>
              <option value="Cassia Cinnamon">Cassia Cinnamon</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#2A3D34] mb-1">
              Estimated Volume (MT)
            </label>
            <input
              type="number"
              name="volume"
              min="1"
              placeholder="25"
              required
              className="w-full rounded-lg border border-black/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#2A3D34] mb-1">
              Incoterm
            </label>
            <select
              name="incoterm"
              required
              className="w-full rounded-lg border border-black/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            >
              <option>FOB</option>
              <option>CIF</option>
              <option>CFR</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-[#2A3D34] mb-1">
              Business Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="sebastian@company.com"
              required
              className="w-full rounded-lg border border-black/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-[#2A3D34] mb-1">
              Notes
            </label>
            <textarea
              name="notes"
              rows={4}
              placeholder="Quality preferences, certifications required, destination port, etc."
              className="w-full rounded-lg border border-black/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            />
          </div>

          <div className="sm:col-span-2 flex items-center gap-3">
            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-full bg-[#2A3D34] text-white px-5 py-2.5 text-sm font-medium hover:bg-[#23332D] disabled:opacity-60"
            >
              {status === "loading" ? "Submitting..." : "Send Inquiry"}
            </button>
            {status === "success" && (
              <p className="text-sm text-green-700">Inquiry sent. We'll respond shortly.</p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-700">Something went wrong. Try again.</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
