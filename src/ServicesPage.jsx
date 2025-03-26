// src/ServicesPage.jsx

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-pink-50 py-12 px-6">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center text-sky-700 mb-6">
        Our Services
      </h1>
      <p className="text-center max-w-3xl mx-auto text-gray-700 text-lg mb-12">
        We bring the party to you! Party Land Rentals offers a full range of professional services to help make your event unforgettable. Whether you're planning a backyard birthday or a large outdoor celebration, our team is here to help make it stylish, smooth, and fun!
      </p>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          {
            title: "🎪 Event Rentals",
            description:
              "From elegant tables and chairs to canopies, tents, and bounce houses — we’ve got everything for your perfect setup.",
          },
          {
            title: "🎈 Balloon Services",
            description:
              "Custom helium balloon arrangements and balloon bars that brighten up any celebration with vibrant colors.",
          },
          {
            title: "🎉 Party Supplies",
            description:
              "Piñatas, candy, paper goods, and themed decorations — all your party supplies in one place.",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
          >
            <h2 className="text-2xl font-bold text-sky-700">{service.title}</h2>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Decorative Images Section */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {[
          "https://images.unsplash.com/photo-1502035618526-6b2f1f5bca1b?q=80&w=1470&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1559456751-057ed03f3143?q=80&w=1501&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1513546493312-0066d7de3fd2?q=80&w=1570&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1554727225-ee66ff0a1bc5?q=80&w=1588&auto=format&fit=crop",
        ].map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Decorative party ${index + 1}`}
            className="rounded-xl shadow-md object-cover w-full h-64"
          />
        ))}
      </div>
    </div>
  );
}
