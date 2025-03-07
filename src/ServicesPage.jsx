export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center p-10 bg-gradient-to-r from-pink-200 to-yellow-200">
      {/* 🎈 Left Side - Services Content */}
      <div className="lg:w-1/2 w-full text-center lg:text-left p-8 bg-white bg-opacity-90 rounded-lg shadow-xl">
        <h1 className="text-5xl font-extrabold text-pink-600 mb-6">🎊 Our Services 🎊</h1>
        <p className="text-lg text-gray-700 font-medium">
          We provide everything you need for the ultimate party experience!
        </p>

        {/* 🏆 Services List */}
        <div className="mt-6 space-y-6">
          <div className="p-5 bg-blue-500 text-white rounded-lg shadow-lg transform transition hover:scale-105">
            <h2 className="text-2xl font-bold">🎪 Party Rentals</h2>
            <p className="mt-1">Tables, chairs, canopies, tents, round tables with umbrellas, and bounce houses.</p>
          </div>

          <div className="p-5 bg-yellow-500 text-white rounded-lg shadow-lg transform transition hover:scale-105">
            <h2 className="text-2xl font-bold">🎈 Balloons & Helium</h2>
            <p className="mt-1">We fill up balloons with helium and offer custom balloon decorations.</p>
          </div>

          <div className="p-5 bg-pink-500 text-white rounded-lg shadow-lg transform transition hover:scale-105">
            <h2 className="text-2xl font-bold">🎉 Party Supplies</h2>
            <p className="mt-1">Piñatas, candies, and all paper supplies for your party needs.</p>
          </div>
        </div>
      </div>

      {/* 🎂 Right Side - Party Image */}
      <div className="hidden lg:flex lg:w-1/2 justify-center items-center">
        <img
          src="https://images.pexels.com/photos/6191547/pexels-photo-6191547.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Party setup"
          className="rounded-lg shadow-xl w-3/4"
        />
      </div>
    </div>
  );
}
