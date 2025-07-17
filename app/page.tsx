'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="bg-[#FDF7F2] text-gray-800 min-h-screen font-sans">
      
      {/* 🔝 Sticky Navbar */}
      <header className="sticky top-0 z-50 bg-[#FDF7F2] shadow-sm">
        <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 md:px-20 py-4">
          <div className="text-sm md:text-2xl font-bold text-gray-800"><h1>Suaraku Remaja</h1></div>
        </nav>
      </header>

      {/* 🎧 Hero Section */}
     <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Responsive: flex-row on mobile, grid on md+ */}
        <div className="flex flex-row md:grid md:grid-cols-2 gap-8 items-center">
          
          {/* Text Section */}
          <div className="flex-1 space-y-5">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl font-serif font-bold text-gray-900 leading-tight">
              Suaraku Remaja
            </h1>
            <p className="text-gray-700 text-base sm:text-lg">
              Sarana ungkap aspirasi remaja untuk merencanakan masa depan & menjadi harapan bangsa.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-2">
            
              <input
                type="email"
                placeholder="Enter email..."
                className="px-4 py-2 rounded-full border border-gray-300 w-full sm:w-64 text-sm outline-none"
              />
              <button className="bg-gray-900 text-white rounded-full px-6 py-2 text-sm font-medium">
                Kirim Email
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-end flex-shrink-0">
            <img
              src="/images/cewek.png"
              alt="Child listening"
              className="w-29 xs:w-28 sm:w-52 md:w-44 lg:w-86 object-contain"
            />
          </div>
        </div>
      </section>
      {/* 🌟 Features */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-6xl mx-auto">
        <p className="text-gray-700 text-base sm:text-lg text-center mb-6">
          Sebuah program advokasi dan konseling kreatif berbasis media (radio, website, dan sosial media)
          yang menjadi ruang bagi remaja untuk curhat, berbagi inspirasi, serta mendapatkan informasi dan 
          motivasi dalam merencanakan masa depan mereka.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Titipan Cerita",
              desc: "Kumpulan cerita 4P: Pendapat, Pengalaman, Perasaan, dan Permasalahan yang kalian alami.",
              icon: "📘",
              color: "blue",
            },
            {
              title: "Remaja Sehat",
              desc: "Artikel, tips & tricks tentang kesehatan remaja",
              icon: "💡",
              color: "yellow",
            },
            {
              title: "Ruang Bercerita",
              desc: "Ruang bagi kalian untuk curhat, berbagi inspirasi dan terbuka tentang keluh kesah dan pengalaman hidup kalian.",
              icon: "🧠",
              color: "pink",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <div className={`h-48 w-full flex items-center justify-center text-6xl bg-${item.color}-50`}>
                {item.icon}
              </div>
              <div className="p-6 text-left">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h2>
                <p className="text-gray-600 mb-5">{item.desc}</p>
                <button
                  className={`bg-${item.color}-500 hover:bg-${item.color}-600 text-white px-6 py-3 rounded-xl font-medium transition`}
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🧭 Footer */}
      <footer className="bg-white mt-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">
          {/* Brand Info */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Suaraku Remaja</h3>
            <p className="text-gray-600">
              Sarana ungkap aspirasi remaja untuk merencanakan masa depan & menjadi harapan bangsa.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-gray-800 font-semibold mb-3">Navigation</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-pink-600">Radio</a></li>
              <li><a href="#" className="hover:text-pink-600">Blog</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-gray-800 font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-pink-600">Help Center</a></li>
              <li><a href="#" className="hover:text-pink-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-pink-600">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Subscription */}
          <div>
            <h4 className="text-gray-800 font-semibold mb-3">Stay Updated</h4>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm"
              />
              <button className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 text-center py-4 text-xs text-gray-500">
          © {new Date().getFullYear()} Suaraku Remaja. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
