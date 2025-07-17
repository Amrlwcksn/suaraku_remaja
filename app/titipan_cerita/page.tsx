'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function TitipanCeritaPage() {
  const stories = [
    {
      nama: "Anonim",
      judul: "Aku Takut Gagal",
      isi: "Kadang aku ngerasa gak cukup baik buat orang tuaku. Ekspektasi mereka tinggi banget, dan aku takut ngecewain mereka. Aku cuma pengen didengar tanpa harus dihakimi.",
      tanggal: "12 Juli 2025",
    },
    {
      nama: "Lia, 17th",
      judul: "Temanku Menjauh",
      isi: "Dulu kita sahabatan banget, sekarang dia berubah dan menjauh. Aku bingung, salahku di mana? Tapi aku masih peduli dan kangen banget sama dia.",
      tanggal: "10 Juli 2025",
    },
    {
      nama: "Anonim",
      judul: "Cerita Tentang Cemas",
      isi: "Setiap kali masuk kelas atau ngobrol sama orang, jantungku deg-degan banget. Aku tahu ini namanya anxiety, tapi aku belum tahu harus gimana...",
      tanggal: "8 Juli 2025",
    },
    {
      nama: "Raka, 16th",
      judul: "Merasa Sendirian di Rumah Sendiri",
      isi: "Orang tua selalu sibuk. Aku lebih sering ngobrol sama AI daripada keluarga sendiri. Kadang aku pengen ada yang nanya, 'Kamu capek gak hari ini?'",
      tanggal: "6 Juli 2025",
    },
    {
      nama: "Anonim",
      judul: "Body Image Itu Berat",
      isi: "Setiap kali bercermin, aku ngerasa gak cukup cakep. Padahal aku tahu, semua orang unik. Tapi tekanan dari media sosial bikin insecure terus.",
      tanggal: "4 Juli 2025",
    },
    {
      nama: "Nadya, 18th",
      judul: "Masa Depan Bikin Takut",
      isi: "Udah mau lulus sekolah, tapi aku belum tahu mau jadi apa. Rasanya semua orang punya tujuan kecuali aku. Apa aku gagal jadi dewasa?",
      tanggal: "2 Juli 2025",
    },
  ];

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

      {/* 💌 Halaman Cerita */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-20 py-12 space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center sm:text-left"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Titipan Cerita 💌
          </h2>
          <p className="text-gray-700 text-base sm:text-lg">
            Tempat di mana suara-suara remaja menemukan rumahnya. Cerita kalian bukan hanya curhat — tapi kekuatan yang bisa saling menguatkan 🤝
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                {story.judul}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-2">
                {story.nama} • {story.tanggal}
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {story.isi}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
