'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function RemajaSehatPage() {
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

      {/* 💡 Konten Artikel */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-20 py-12 space-y-10">
        {/* Header Artikel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center sm:text-left"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Remaja Sehat 💡
          </h2>
          <p className="text-gray-700 text-base sm:text-lg">
            Kumpulan artikel dan tips untuk membantu remaja menjaga kesehatan fisik dan mentalnya, biar makin siap menghadapi masa depan! 🧘‍♂️🍎
          </p>
        </motion.div>

        {/* Daftar Artikel */}
        <div className="grid grid-cols-1 gap-6">
          {[
            {
              title: "Tips Mengelola Stres Saat Sekolah",
              excerpt:
                "Sekolah bisa bikin stres? Tenang, yuk belajar cara ngatur waktu dan jaga mental biar tetap waras!",
              link: "#",
            },
            {
              title: "Pentingnya Tidur Cukup Bagi Remaja",
              excerpt:
                "Begadang demi tugas atau scroll TikTok? Baca dulu dampak buruknya buat tubuh kamu.",
              link: "#",
            },
            {
              title: "Makanan Sehat yang Gak Bikin Kantong Bolong",
              excerpt:
                "Jajan sehat gak harus mahal kok. Nih, beberapa rekomendasi makanan sehat dan murah meriah!",
              link: "#",
            },
          ].map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow hover:shadow-md transition"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{article.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">{article.excerpt}</p>
              <Link href={article.link}>
                <span className="text-pink-600 hover:underline text-sm font-medium">
                  Baca Selengkapnya →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
