export function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center p-8 bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-400">
      {/* Colorful Floating Confetti */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-full h-full opacity-50 mix-blend-multiply"></div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-5xl bg-white bg-opacity-95 backdrop-blur-lg p-12 rounded-lg shadow-xl border-4 border-pink-500">
        <h1 className="text-6xl font-extrabold text-pink-600 drop-shadow-lg animate-bounce">
          🎊 Party Land Rentals 🎊
        </h1>
        <p className="text-2xl font-semibold text-gray-800 mt-4">
          Serving the <span className="text-blue-600 font-bold">Tri-Valley Bay Area, CA</span>:
        </p>

        {/* Cities We Serve */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {["Dublin", "Livermore", "Pleasanton", "San Ramon", "Danville"].map((city) => (
            <div
              key={city}
              className="bg-gradient-to-r from-blue-500 to-blue-400 text-white p-4 rounded-lg font-bold shadow-lg text-lg transform transition duration-300 hover:scale-110 hover:rotate-3 hover:bg-pink-500"
            >
              {city}
            </div>
          ))}
        </div>

        <p className="text-xl text-gray-700 font-medium mt-6">
          Your **one-stop shop** for party rentals & supplies! From{" "}
          <span className="text-yellow-500 font-bold">tables & chairs</span> to{" "}
          <span className="text-red-500 font-bold">balloons & bounce houses</span>, we’ve got **everything** you need
          for a perfect event! 🎉🥳
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-6 flex justify-center space-x-6">
          <a
            href="/products"
            className="bg-pink-600 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg hover:bg-yellow-500 hover:scale-110 transition duration-300 transform hover:-rotate-2"
          >
            Browse Party Supplies 🎈
          </a>
          <a
            href="/services"
            className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg hover:bg-purple-500 hover:scale-110 transition duration-300 transform hover:rotate-2"
          >
            See Our Services 🏕️
          </a>
        </div>
      </div>
    </div>
  );
}
