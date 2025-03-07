export default function ServicesPage() {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Our Services</h1>
      <p className="text-lg text-center mb-8 text-gray-700">
        We offer a variety of party rentals and supplies to make your event unforgettable!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-blue-100 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold">🎪 Party Rentals</h2>
          <p className="text-gray-800 mt-2">
            Tables, chairs, canopies, tents, round tables with umbrellas, and bounce houses.
          </p>
        </div>
        <div className="p-6 bg-yellow-100 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold">🎈 Balloons & Helium</h2>
          <p className="text-gray-800 mt-2">We fill up balloons with helium and offer custom balloon decorations.</p>
        </div>
        <div className="p-6 bg-pink-100 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold">🎉 Party Supplies</h2>
          <p className="text-gray-800 mt-2">Piñatas, candies, and all paper supplies for your party needs.</p>
        </div>
      </div>
    </div>
  );
}
