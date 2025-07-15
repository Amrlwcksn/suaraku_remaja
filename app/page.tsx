'use client';

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo / Judul */}
          <div className="text-lg md:text-xl font-semibold text-black tracking-tight">
            Suaraku Remaja
          </div>

          {/* Link navigasi */}
          <div>
            <Link href="/tentang">
              <span className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                Tentang
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Tentang Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-14 max-w-6xl mx-auto text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
          Suaraku Remaja
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-700 font-medium">
          Sarana ungkap aspirasi remaja untuk merencanakan masa depan & menjadi harapan bangsa.
        </p>
        <p className="mt-6 text-sm md:text-base text-gray-600 leading-relaxed">
          Sebuah program advokasi dan konseling kreatif berbasis media (radio, website, dan sosial media)
          yang menjadi ruang bagi remaja untuk curhat, berbagi inspirasi, serta mendapatkan informasi dan 
          motivasi dalam merencanakan masa depan mereka.
        </p>
        <hr className="mt-8 border-gray-200" />
      </section>

      {/* main konten */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="h-48 w-full relative">
              <img
                src="/images/titipancerita.jpg"
                alt="Ilustrasi Titipan Cerita"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6 text-left">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Titipan Cerita</h2>
              <p className="text-gray-600 mb-5">
                Kumpulan cerita 4P: Pendapat, Pengalaman, Perasaan, dan Permasalahan yang kalian alami.
              </p>
              <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-xl font-medium transition">
                Lihat Inspirasi
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="h-48 w-full relative">
              <img
                src="/images/titipancerita.jpg"
                alt="Ilustrasi Konseling"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6 text-left">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Remaja Sehat</h2>
              <p className="text-gray-600 mb-5">
                Artikel, tips & tricks tentang kesehatan remaja
              </p>
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-medium transition">
                Temukan Motivasi
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="h-48 w-full relative">
              <img
                src="/images/titipancerita.jpg"
                alt="Ilustrasi Ruang Inspirasi"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6 text-left">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Ruang Bercerita</h2>
              <p className="text-gray-600 mb-5">
                Ruang bagi kalian untuk curhat, berbagi inspirasi dan terbuka tentang keluh kesah dan pengalaman hidup kalian.
              </p>
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-medium transition">
                Mulai Bercerita
              </button>
            </div>
          </div>

        </div>
      </section>



    </>
  );
}
