export function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center bg-gradient-to-b from-white via-blue-50 to-pink-50 text-center px-6 py-16">
      {/* Welcome Header */}
      <h1 className="text-5xl sm:text-6xl font-extrabold text-sky-700 tracking-tight drop-shadow-sm mb-4">
        Welcome to <span className="text-pink-500">Party Land Rentals</span>
      </h1>
      <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mb-8 leading-relaxed">
        Serving <strong>Dublin</strong>, <strong>Livermore</strong>, <strong>Pleasanton</strong>, <strong>San Ramon</strong>, and <strong>Danville</strong> — we bring the fun to your doorstep with top-quality rentals, sweet supplies, and colorful vibes!
      </p>

      {/* Services Preview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mb-12">
        {[
          { title: "🎪 Event Rentals", desc: "Tables, chairs, canopies, tents & bounce houses." },
          { title: "🎈 Balloon Bar", desc: "Custom helium balloons & festive arrangements." },
          { title: "🎉 Party Supplies", desc: "Piñatas, candies, and colorful tableware." }
        ].map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition transform hover:-translate-y-1">
            <h2 className="text-2xl font-bold text-sky-700">{item.title}</h2>
            <p className="text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        <a
          href="/products"
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg shadow"
        >
          Shop Rentals
        </a>
        <a
          href="/services"
          className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg shadow"
        >
          Our Services
        </a>
      </div>

      {/* Image Showcase */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mb-16">
        {[
          "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2940&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1478088702756-f16754aaf0c4?q=80&w=2940&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1496637721836-f46d116e6d34?q=80&w=3087&auto=format&fit=crop",
        ].map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`party-img-${i}`}
            className="rounded-xl shadow-md object-cover h-64 w-full hover:scale-105 transition duration-300"
          />
        ))}
      </div>

      {/* About Section */}
      <section className="max-w-4xl text-left bg-white bg-opacity-90 p-6 rounded-xl shadow">
        <h3 className="text-3xl font-bold text-sky-700 mb-2">Why Party Land?</h3>
        <p className="text-gray-700 leading-relaxed">
          At Party Land, we believe celebrations should be easy, joyful, and unforgettable. That’s why we go above and beyond with every delivery — from bouncing castles to balloon bouquets, we’ve got your back. Whether you're throwing a backyard birthday or a full-blown bash, we're your friendly local party experts with top-tier customer service, quality rentals, and a passion for parties.
        </p>
      </section>
    </div>
  );
}
