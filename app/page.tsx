export default function Home() {
  return (
    <main className="min-h-screen px-6 py-12 max-w-6xl mx-auto">

      {/* HERO */}
      <section className="text-center space-y-6 mt-20">
        <h1 className="text-6xl font-bold gradient-text">
          CannexLogistics
        </h1>

        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          The infrastructure layer for cannabis logistics, storage, and distribution.
        </p>

        <div className="flex justify-center gap-4 pt-6">
          <button className="px-6 py-3 rounded-xl bg-green-500 text-black font-semibold">
            Get Started
          </button>
          <button className="px-6 py-3 rounded-xl glass">
            Learn More
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="grid md:grid-cols-3 gap-6 mt-24">
        {[
          "Secure Licensed Warehousing",
          "Real-Time Inventory Tracking",
          "Compliance Automation",
          "Smart Distribution Routing",
          "Grower to Retailer Network",
          "Enterprise-Grade Infrastructure",
        ].map((feature, i) => (
          <div key={i} className="p-6 rounded-2xl glass">
            <h3 className="text-lg font-semibold">{feature}</h3>
          </div>
        ))}
      </section>

      {/* VALUE PROP */}
      <section className="mt-32 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          Built for the Future of Cannabis Infrastructure
        </h2>

        <p className="text-gray-400">
          CannexLogistics connects growers, distributors, extractors, and retailers
          through a unified logistics and storage network designed for compliance,
          efficiency, and scale.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="mt-40 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} CannexLogistics
      </footer>

    </main>
  );
}
