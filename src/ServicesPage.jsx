export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-slate-100 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div className="space-y-8">
          <h1 className="text-5xl font-extrabold text-slate-800 leading-tight">
            Our <span className="text-blue-600">Services</span>
          </h1>
          <p className="text-lg text-slate-600">
            At Party Land, we bring your celebrations to life. Whether you're hosting a backyard birthday or a full-scale event, we provide top-quality rentals and party essentials with exceptional service.
          </p>

          <div className="space-y-6">
            {/* Service Card 1 */}
            <div className="p-5 border-l-4 border-blue-500 bg-white shadow-md rounded-md hover:shadow-xl transition">
              <h2 className="text-2xl font-bold text-slate-800 mb-1">🎪 Event Rentals</h2>
              <p className="text-slate-600">
                From tables and chairs to tents and bounce houses—everything you need for a fun, organized party.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="p-5 border-l-4 border-yellow-400 bg-white shadow-md rounded-md hover:shadow-xl transition">
              <h2 className="text-2xl font-bold text-slate-800 mb-1">🎈 Balloon Services</h2>
              <p className="text-slate-600">
                Eye-catching helium balloons and custom balloon arrangements to elevate your decor.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="p-5 border-l-4 border-pink-400 bg-white shadow-md rounded-md hover:shadow-xl transition">
              <h2 className="text-2xl font-bold text-slate-800 mb-1">🎉 Party Supplies</h2>
              <p className="text-slate-600">
                We’ve got piñatas, candies, paper goods, and more to complete your celebration in style.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full h-full flex justify-center items-center">
          <img
            src="https://images.pexels.com/photos/6191547/pexels-photo-6191547.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Party setup"
            className="rounded-lg shadow-lg w-full max-w-md object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}
