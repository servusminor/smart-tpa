"use client";

import React, { useState } from "react";
type Course = {
  img: string;
  title: string;
  desc: string;
  rating: number;
  price?: string;
  oldPrice?: string;
};
import Image from "next/image";
import { categories } from "../data/categories";
import { coursesByCategory } from "../data/coursesByCategory";

import {
  heroImage,
  testimonial1Image,
  testimonial2Image,
  testimonial3Image,
} from "../data/images";

type StarRatingProps = {
  rating: number;
};

const StarRating = ({ rating }: StarRatingProps) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-lg ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
        >
          ★
        </span>
      ))}
      <span className="text-sm font-medium text-gray-600 ml-2">({rating}.0)</span>
    </div>
  );
};

export default function ElearningLandingPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0].key);

  return (
    <div className="font-sans bg-white" style={{ fontFamily: 'InterTight, sans-serif', color: '#2B2E4A' }}>
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50" style={{ background: '#fff', borderBottom: '4px solid', borderImage: 'linear-gradient(90deg, #FFA500, #FF6F3C, #D32F2F) 1' }}>
        <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="SmartTPA Logo" 
              width={200} 
              height={200} 
              style={{ objectFit: 'contain', width: 80, height: 80 }} 
              priority
            />
          </div>
          <ul className="hidden md:flex gap-8" style={{ color: '#2B2E4A' }}>
            {['Beranda', 'Kursus', 'Tentang', 'Testimoni', 'FAQ'].map((item, idx) => (
              <li key={item}>
                <a
                  href={
                    item === 'Beranda' ? '#' :
                    item === 'Kursus' ? '#courses' :
                    item === 'Tentang' ? '#about' :
                    item === 'Testimoni' ? '#testimonials' :
                    item === 'FAQ' ? '#faq' : '#'
                  }
                  className="font-medium transition-colors px-2 py-1"
                  style={{
                    color: '#2B2E4A',
                    borderBottom: '3px solid transparent',
                    background: 'none',
                  }}
                  onMouseOver={e => (e.currentTarget.style.borderBottom = '3px solid #FFA500')}
                  onMouseOut={e => (e.currentTarget.style.borderBottom = '3px solid transparent')}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-4">
            <button className="px-5 py-2.5 rounded font-medium transition-colors" style={{ color: '#2B2E4A', border: '2px solid #FFB300', background: 'none' }}>Masuk</button>
            <button className="px-6 py-2.5 rounded font-medium shadow transition-colors" style={{ background: '#FFB300', color: '#2B2E4A', boxShadow: '0 2px 8px #FFB30033' }}>
              <span>Daftar</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-white min-h-screen flex items-center" style={{ minHeight: '100vh', color: '#2B2E4A', background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center w-full">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight tracking-tight" style={{ color: '#2B2E4A' }}>
              SmartTPA <span style={{ background: 'linear-gradient(90deg, #FFA500, #FF6F3C, #D32F2F)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>E-Learning</span>
            </h1>
            <p className="text-gray-600 text-xl mb-12 max-w-3xl">
              Platform pembelajaran online terdepan dengan ribuan kursus berkualitas tinggi. Tingkatkan skill Anda bersama instruktur berpengalaman dan komunitas pembelajar yang aktif.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="px-8 py-4 rounded-lg font-semibold shadow-lg transition-colors" style={{ background: '#FFB300', color: '#2B2E4A' }}>
                Daftar Sekarang
              </button>
              <button className="border-2 px-8 py-4 rounded-lg font-semibold transition-colors" style={{ borderColor: '#FFA500', color: '#FFA500' }}>
                <span>Lihat Kursus</span>
              </button>
            </div>
            <div className="mt-12 flex items-center gap-10 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="font-bold text-xl" style={{ color: '#FF6F3C' }}>50,000+</span>
                <span>Siswa Aktif</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-xl" style={{ color: '#FF6F3C' }}>1,200+</span>
                <span>Kursus Tersedia</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-xl" style={{ color: '#FF6F3C' }}>95%</span>
                <span>Tingkat Kepuasan</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src={heroImage}
              alt="smartTPA Hero"
              className="rounded-2xl w-full h-auto object-cover shadow-2xl"
              width={900}
              height={384}
              priority
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-xl shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #FFA500, #FF6F3C, #D32F2F)' }}>
                  <span className="font-bold text-xl" style={{ color: '#fff' }}>📚</span>
                </div>
                <div>
                  <div className="font-semibold text-lg text-gray-800">Pembelajaran Interaktif</div>
                  <div className="text-sm text-gray-600">Video HD + Quiz</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kategori Kursus Populer */}
      <section id="courses" className="py-24 bg-white" style={{ color: '#2B2E4A', background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight tracking-tight" style={{ color: '#2B2E4A', borderBottom: '4px solid', borderImage: 'linear-gradient(90deg, #FFA500, #FF6F3C, #D32F2F) 1' }}>
            Explore Learning
          </h1>
          <p className="text-gray-600 text-xl mb-12 max-w-3xl">
            Temukan berbagai kategori kursus yang sesuai dengan minat dan kebutuhan Anda
          </p>
          
          {/* Row kategori */}
          <div className="flex gap-4 overflow-x-auto pb-6 mb-6">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-7 py-3 rounded-full font-medium text-base whitespace-nowrap border transition-all ${
                  selectedCategory === cat.key 
                    ? '' 
                    : ''
                }`}
                style={selectedCategory === cat.key
                  ? { background: '#FFB300', color: '#2B2E4A', borderColor: '#FFB300', boxShadow: '0 2px 8px #FFB30033' }
                  : { background: '#fff', color: '#FFA500', borderColor: '#FFA500' }}
              >
                <span style={selectedCategory === cat.key ? { color: '#2B2E4A' } : { color: '#FFA500' }}>{cat.label}</span>
              </button>
            ))}
          </div>
          
          {/* Kursus per kategori */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-6 overflow-x-auto">
            {(
              selectedCategory === 'all'
                ? Object.values(coursesByCategory).flat()
                : (coursesByCategory as Record<string, Course[]>)[selectedCategory]
            ).slice(0, 8).map((course: Course, idx: number) => (
              <div
                key={idx}
                className="bg-white border rounded-2xl shadow-sm hover:shadow-lg transition-shadow flex flex-col min-w-[220px] h-full group cursor-pointer"
                style={{ transition: 'box-shadow 0.2s', borderColor: '#FFA500', borderWidth: 1, borderStyle: 'solid' }}
              >
                <div className="relative w-full h-40 mb-3">
                  <Image
                    src={course.img}
                    alt={course.title}
                    className="object-cover"
                    fill
                    style={{ objectFit: 'cover', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }}
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div className="flex flex-col flex-1 px-4 pb-4 pt-2">
                  <h3 className="font-bold text-base mb-1 line-clamp-2 min-h-[48px]" style={{ color: '#2B2E4A' }}>{course.title}</h3>
                  <p className="text-sm mb-2 line-clamp-2 min-h-[40px]" style={{ color: '#2B2E4A', opacity: 0.7 }}>{course.desc}</p>
                  <div className="mb-2"><StarRating rating={course.rating} /></div>
                  {course.price && (
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg font-bold" style={{ color: '#FFB300' }}>{course.price}</span>
                      {course.oldPrice && (
                        <span className="text-xs" style={{ color: '#D32F2F', textDecoration: 'line-through' }}>{course.oldPrice}</span>
                      )}
                    </div>
                  )}
                  {/* Tombol Lihat Detail dihapus */}
                </div>
              </div>
            ))}
          </div>

          <div className="flex mb-10">
            <button
              className="px-8 py-3 rounded-lg font-semibold shadow-lg transition-colors text-base mt-4 mb-2"
              style={{ background: '#FFB300', color: '#2B2E4A', boxShadow: '0 2px 8px #FFB30033', marginTop: '1.5rem', marginBottom: '0.5rem' }}
              onClick={() => setSelectedCategory('all')}
            >
              Tampilkan Semua Pelatihan
            </button>
          </div>

        </div>
      </section>
      

      {/* Package Section */}
      <section className="py-24" style={{ background: 'linear-gradient(135deg, #FFA500 0%, #FF6F3C 60%, #D32F2F 100%)', color: '#2B2E4A' }}>
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight tracking-tight" style={{ color: '#2B2E4A', borderBottom: '4px solid', borderImage: 'linear-gradient(90deg, #FFA500, #FF6F3C, #D32F2F) 1' }}>
            Pilih Jenis Pelatihan
          </h1>
          <p className="text-xl mb-12 max-w-3xl" style={{ color: '#2B2E4A', opacity: 0.7 }}>
            Temukan layanan pelatihan yang sesuai kebutuhan Anda, mulai dari gratis hingga solusi untuk perusahaan. Semua konten dan fitur mudah dipahami dan bermanfaat untuk pengembangan diri maupun tim Anda.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-4">
            {/* Pelatihan Gratis */}
            <div className="bg-white border rounded-lg shadow-sm hover:shadow-lg transition-shadow flex flex-col min-w-[220px] h-full group cursor-pointer p-6" style={{ borderColor: '#FFA500' }}>
              <div className="mb-4">
                <span className="inline-block text-white text-xs font-bold px-3 py-1.5 rounded-full mb-2" style={{ background: 'linear-gradient(90deg, #FFA500, #FF6F3C, #D32F2F)' }}>Pelatihan Gratis</span>
                <div className="font-bold text-lg mb-1" style={{ color: '#2B2E4A' }}>Akses Materi Tanpa Biaya</div>
                <div className="text-xs text-gray-500 mb-1">Untuk semua kalangan</div>
                <div className="text-xs text-green-600 font-semibold mb-1">100% Gratis, tanpa syarat</div>
                <div className="text-lg font-bold text-blue-600 mb-1">Rp0</div>
                <div className="text-xs text-gray-400 mb-2">Akses video, materi, dan quiz tanpa biaya apapun.</div>
              </div>
              <ul className="mb-4 space-y-2 text-gray-700 text-xs">
                <li>✓ Materi dasar & populer</li>
                <li>✓ Sertifikat digital gratis</li>
                <li>✓ Komunitas diskusi</li>
                <li>✓ Update materi rutin</li>
              </ul>
              <button className="px-4 py-2 rounded font-semibold transition-colors mt-auto text-xs" style={{ background: '#FFB300', color: '#2B2E4A' }}>Mulai Belajar Gratis</button>
            </div>
            {/* Pelatihan Paket */}
            <div className="bg-white border rounded-lg shadow-sm hover:shadow-lg transition-shadow flex flex-col min-w-[220px] h-full group cursor-pointer p-6" style={{ borderColor: '#FFA500' }}>
              <div className="mb-4">
                <span className="inline-block text-white text-xs font-bold px-3 py-1.5 rounded-full mb-2" style={{ background: 'linear-gradient(90deg, #FFA500, #FF6F3C, #D32F2F)' }}>Pelatihan Paket</span>
                <div className="font-bold text-lg mb-1" style={{ color: '#2B2E4A' }}>Belajar Lebih Lengkap & Fleksibel</div>
                <div className="text-xs text-gray-500 mb-1">Untuk individu & kelompok</div>
                <div className="text-xs text-green-600 font-semibold mb-1">Diskon hingga 20% untuk paket tahunan</div>
                <div className="text-lg font-bold text-blue-600 mb-1">Mulai Rp150.000/bulan</div>
                <div className="text-xs text-gray-400 mb-2">Akses ribuan kursus premium, fitur mentoring, dan sertifikat resmi.</div>
              </div>
              <ul className="mb-4 space-y-2 text-gray-700 text-xs">
                <li>✓ Semua fitur pelatihan gratis</li>
                <li>✓ Kelas premium & live session</li>
                <li>✓ Konsultasi mentor</li>
                <li>✓ Sertifikat resmi SmartTPA</li>
              </ul>
              <button className="px-4 py-2 rounded font-semibold transition-colors mt-auto text-xs" style={{ background: '#FFB300', color: '#2B2E4A' }}>Lihat Paket</button>
            </div>
            {/* Pelatihan Enterprise */}
            <div className="bg-white border rounded-lg shadow-sm hover:shadow-lg transition-shadow flex flex-col min-w-[220px] h-full group cursor-pointer p-6" style={{ borderColor: '#FFA500' }}>
              <div className="mb-4">
                <span className="inline-block text-white text-xs font-bold px-3 py-1.5 rounded-full mb-2" style={{ background: 'linear-gradient(90deg, #FFA500, #FF6F3C, #D32F2F)' }}>Pelatihan Enterprise</span>
                <div className="font-bold text-lg mb-1" style={{ color: '#2B2E4A' }}>Solusi untuk Perusahaan & Organisasi</div>
                <div className="text-xs text-gray-500 mb-1">Untuk tim & perusahaan</div>
                <div className="text-lg font-bold text-blue-600 mb-1">Harga khusus & custom</div>
                <div className="text-xs text-gray-400 mb-2">Pelatihan karyawan, pelaporan progres, dan integrasi sistem HR.</div>
              </div>
              <ul className="mb-4 space-y-2 text-gray-700 text-xs">
                <li>✓ Semua fitur paket</li>
                <li>✓ Dashboard monitoring tim</li>
                <li>✓ Laporan perkembangan karyawan</li>
                <li>✓ Integrasi sistem perusahaan</li>
                <li>✓ Konsultasi & support prioritas</li>
              </ul>
              <button className="px-4 py-2 rounded font-semibold transition-colors mt-auto text-xs" style={{ background: '#FFB300', color: '#2B2E4A' }}>Hubungi Kami</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section id="testimonials" className="py-24 bg-white" style={{ color: '#2B2E4A', background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 leading-tight tracking-tight">
            Testimoni Pengguna
          </h1>
          <p className="text-gray-600 text-xl mb-12 max-w-3xl">
            Apa kata mereka yang telah menggunakan platform smartTPA
          </p>
         
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-4">
            {/* Testimoni Card 1 */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow flex flex-col min-w-[220px] h-full group cursor-pointer p-6">
              <div className="flex items-center gap-3 mb-4">
                <Image src={testimonial1Image} alt="Sarah Putri" className="w-12 h-12 rounded-full object-cover border border-gray-200" width={48} height={48} />
                <div>
                  <div className="font-bold text-gray-900 text-base">Sarah Putri</div>
                  <div className="text-xs text-gray-500">Frontend Developer di Tech Corp</div>
                </div>
              </div>
              <div className="mb-2"><StarRating rating={5} /></div>
              <p className="text-gray-700 text-sm mb-2 line-clamp-4">&quot;Platform ini benar-benar mengubah karir saya! Materi yang diajarkan sangat praktis dan langsung bisa diterapkan di pekerjaan. Instrukturnya juga sangat responsif dalam menjawab pertanyaan.&quot;</p>
            </div>
            {/* Testimoni Card 2 */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow flex flex-col min-w-[220px] h-full group cursor-pointer p-6">
              <div className="flex items-center gap-3 mb-4">
                <Image src={testimonial2Image} alt="Rizky Pratama" className="w-12 h-12 rounded-full object-cover border border-gray-200" width={48} height={48} />
                <div>
                  <div className="font-bold text-gray-900 text-base">Rizky Pratama</div>
                  <div className="text-xs text-gray-500">UI/UX Designer Freelancer</div>
                </div>
              </div>
              <div className="mb-2"><StarRating rating={5} /></div>
              <p className="text-gray-700 text-sm mb-2 line-clamp-4">&quot;Kursus UI/UX Design di sini sangat komprehensif. Dari teori hingga praktek, semuanya dijelaskan dengan detail. Sekarang saya sudah bisa freelance dengan skill yang didapat.&quot;</p>
            </div>
            {/* Testimoni Card 3 */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow flex flex-col min-w-[220px] h-full group cursor-pointer p-6">
              <div className="flex items-center gap-3 mb-4">
                <Image src={testimonial3Image} alt="Andi Setiawan" className="w-12 h-12 rounded-full object-cover border border-gray-200" width={48} height={48} />
                <div>
                  <div className="font-bold text-gray-900 text-base">Andi Setiawan</div>
                  <div className="text-xs text-gray-500">Pemilik Toko Online</div>
                </div>
              </div>
              <div className="mb-2"><StarRating rating={4} /></div>
              <p className="text-gray-700 text-sm mb-2 line-clamp-4">&quot;Sebagai pebisnis, kursus digital marketing di sini sangat membantu saya memahami strategi pemasaran online. Penjualan produk saya meningkat 200% setelah menerapkan ilmunya.&quot;</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer dengan alamat dan social media */}
      <footer className="py-12" style={{ background: '#2B2E4A', color: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <div className="text-2xl font-bold mb-2" style={{ color: '#FFB300' }}>SmartTPA</div>
            <div className="text-sm mb-2" style={{ color: '#fff', opacity: 0.95, fontWeight: 500 }}>Jl. Contoh Alamat No. 123, Jakarta, Indonesia</div>
            <div className="text-sm" style={{ color: '#fff', opacity: 0.95, fontWeight: 500 }}>Email: <span style={{ color: '#FFB300' }}>info@smarttpa.com</span></div>
            <div className="text-sm" style={{ color: '#fff', opacity: 0.95, fontWeight: 500 }}>Telepon: <span style={{ color: '#FFB300' }}>+62 812-3456-7890</span></div>
          </div>
          <div>
            <div className="font-semibold mb-2" style={{ color: '#FFB300' }}>Ikuti Kami</div>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-80 transition-colors">
                <svg width="24" height="24" fill="currentColor" style={{ color: '#FFA500' }}><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-80 transition-colors">
                <svg width="24" height="24" fill="currentColor" style={{ color: '#FF6F3C' }}><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:opacity-80 transition-colors">
                <svg width="24" height="24" fill="currentColor" style={{ color: '#D32F2F' }}><path d="M22.46 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 11.07 9.03c0 .352.04.695.116 1.022C7.728 9.89 4.1 8.1 1.671 5.149a4.48 4.48 0 0 0-.606 2.254c0 1.555.792 2.927 2.002 3.732a4.48 4.48 0 0 1-2.03-.561v.057a4.48 4.48 0 0 0 3.594 4.393c-.193.053-.397.081-.607.081-.148 0-.292-.014-.432-.04.293.915 1.144 1.58 2.152 1.598A8.98 8.98 0 0 1 2 19.54a12.68 12.68 0 0 0 6.88 2.017c8.253 0 12.77-6.833 12.77-12.77 0-.195-.004-.39-.013-.583A9.14 9.14 0 0 0 24 4.59a8.93 8.93 0 0 1-2.54.698z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-xs" style={{ color: '#FFB300', fontWeight: 600, textShadow: '0 1px 4px #2B2E4A' }}>&copy; {new Date().getFullYear()} SmartTPA. All rights reserved.</div>
      </footer>
    </div>
  );
}