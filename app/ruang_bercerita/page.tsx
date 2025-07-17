'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function TitipanCeritaPage() {
  return (
    <main className="bg-[#FDF7F2] text-gray-800 min-h-screen font-sans">

      {/* 🔝 Sticky Header */}
      <header className="sticky top-0 z-50 bg-[#FDF7F2] shadow-sm">
        <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 md:px-20 py-4">
          <Link href="/">
            <h1 className="text-sm md:text-2xl font-bold text-gray-800 cursor-pointer">
              Suaraku Remaja
            </h1>
          </Link>
        </nav>
      </header>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-20 py-12 space-y-10">
        {/* Judul dan Deskripsi */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Titipan Cerita 💌
          </h2>
          <p className="text-gray-700 text-base sm:text-lg">
            Tempat kamu bisa berbagi cerita, pengalaman, dan perasaanmu. Jangan ragu untuk mengekspresikan apa yang kamu rasakan di sini — semua cerita valid dan bermakna 💬✨
          </p>
        </motion.div>

        {/* Form Titipan Cerita */}
        <motion.form
          className="bg-white rounded-2xl shadow-lg p-6 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div>
            <label className="block text-gray-800 font-medium mb-1">Judul Cerita</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm"
              placeholder="Contoh: Hari Aku Berani Bicara"
            />
          </div>
          <div>
            <label className="block text-gray-800 font-medium mb-1">Isi Cerita</label>
            <textarea
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm"
              placeholder="Tulis ceritamu di sini..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full font-medium transition"
          >
            Kirim Cerita
          </button>
        </motion.form>
      </section>
    </main>
  );
}
