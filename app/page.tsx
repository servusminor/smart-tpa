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
    <div className="font-sans bg-white" style={{ fontFamily: 'InterTight, sans-serif' }}>
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-700">SmartTPA</div>
          <ul className="hidden md:flex gap-8 text-gray-700">
            <li><a href="#" className="font-medium hover:text-blue-600 transition-colors">Beranda</a></li>
            <li><a href="#courses" className="font-medium hover:text-blue-600 transition-colors">Kursus</a></li>
            <li><a href="#about" className="font-medium hover:text-blue-600 transition-colors">Tentang</a></li>
            <li><a href="#testimonials" className="font-medium hover:text-blue-600 transition-colors">Testimoni</a></li>
            <li><a href="#faq" className="font-medium hover:text-blue-600 transition-colors">FAQ</a></li>
          </ul>
          <div className="flex gap-4">
            <button className="text-blue-600 px-5 py-2.5 rounded font-medium hover:bg-blue-50 transition-colors">Masuk</button>
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded font-medium shadow hover:bg-blue-700 transition-colors">
              <span className="text-white">Daftar</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-white min-h-screen flex items-center" style={{ minHeight: '100vh' }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center w-full">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 leading-tight tracking-tight">
              SmartTPA <span className="text-blue-600"></span>
            </h1>
            <p className="text-gray-600 text-xl mb-12 max-w-3xl">
              Platform pembelajaran online terdepan dengan ribuan kursus berkualitas tinggi. Tingkatkan skill Anda bersama instruktur berpengalaman dan komunitas pembelajar yang aktif.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition-colors">
                Daftar Sekarang
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                <span className="group-hover:text-white">Lihat Kursus</span>
              </button>
            </div>
            <div className="mt-12 flex items-center gap-10 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-blue-600 font-bold text-xl">50,000+</span>
                <span>Siswa Aktif</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-600 font-bold text-xl">1,200+</span>
                <span>Kursus Tersedia</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-600 font-bold text-xl">95%</span>
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
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xl">📚</span>
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
      <section id="courses" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 leading-tight tracking-tight">
            Explore Learning
          </h1>
          <p className="text-gray-600 text-xl mb-12 max-w-3xl">
            Temukan berbagai kategori kursus yang sesuai dengan minat dan kebutuhan Anda
          </p>
          
          {/* Row kategori */}
          <div className="flex gap-4 overflow-x-auto pb-6 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-7 py-3 rounded-full font-medium text-base whitespace-nowrap border transition-all ${
                  selectedCategory === cat.key 
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md' 
                    : 'bg-white text-blue-600 border-blue-600 hover:bg-blue-50'
                }`}
              >
                <span className={selectedCategory === cat.key ? 'text-white' : 'text-blue-600'}>{cat.label}</span>
              </button>
            ))}
          </div>
          
          {/* Deskripsi kategori aktif */}
          {/* Deskripsi kategori aktif dihapus */}
          
          {/* Kursus per kategori */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12 overflow-x-auto">
            {(coursesByCategory as Record<string, Course[]>)[selectedCategory].slice(0, 8).map((course: Course, idx: number) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow flex flex-col min-w-[220px] h-full group cursor-pointer"
                style={{ transition: 'box-shadow 0.2s' }}
              >
                <div className="relative w-full h-40 mb-3">
                  <Image
                    src={course.img}
                    alt={course.title}
                    className="rounded-t-lg object-cover"
                    fill
                    style={{ objectFit: 'cover', borderTopLeftRadius: '0.75rem', borderTopRightRadius: '0.75rem' }}
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div className="flex flex-col flex-1 px-4 pb-4 pt-2">
                  <h3 className="font-bold text-base text-gray-900 mb-1 line-clamp-2 min-h-[48px]">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-2 line-clamp-2 min-h-[40px]">{course.desc}</p>
                  <div className="mb-2"><StarRating rating={course.rating} /></div>
                  {course.price && (
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg font-bold text-gray-900">{course.price}</span>
                      {course.oldPrice && (
                        <span className="text-xs text-gray-400 line-through">{course.oldPrice}</span>
                      )}
                    </div>
                  )}
                  {/* Tombol Lihat Detail dihapus */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 leading-tight tracking-tight">
            Pilih Paket Belajar
          </h1>
          <p className="text-gray-600 text-xl mb-12 max-w-3xl">
            Temukan paket yang sesuai dengan kebutuhan pembelajaran Anda
          </p>
         
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-4">
            {/* Personal Plan */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow flex flex-col min-w-[220px] h-full group cursor-pointer p-6">
              <div className="mb-4">
                <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-2">Personal Plan</span>
                <div className="font-bold text-lg text-blue-700 mb-1">For you</div>
                <div className="text-xs text-gray-500 mb-1">Individual</div>
                <div className="text-xs text-green-600 font-semibold mb-1">15% off for the first 1 year(s)</div>
                <div className="text-lg font-bold text-gray-800 mb-1">Starting at <span className="line-through text-gray-400">Rp187,500</span><span className="ml-2 text-blue-600">Rp159,375</span> <span className="text-xs font-normal">/month</span></div>
                <div className="text-xs text-gray-400 mb-2">Billed monthly or annually. Cancel anytime.</div>
              </div>
              <ul className="mb-4 space-y-2 text-gray-700 text-xs">
                <li>✓ Access to 26,000+ top courses</li>
                <li>✓ Certification prep</li>
                <li>✓ Goal-focused recommendations</li>
                <li>✓ AI-powered coding exercises</li>
              </ul>
              <button className="bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700 transition-colors mt-auto text-xs">Try for Free</button>
            </div>
            {/* Team Plan */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow flex flex-col min-w-[220px] h-full group cursor-pointer p-6">
              <div className="mb-4">
                <span className="inline-block bg-green-600 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-2">Team Plan</span>
                <div className="font-bold text-lg text-green-700 mb-1">For your team</div>
                <div className="text-xs text-gray-500 mb-1">2 to 20 people</div>
                <div className="text-lg font-bold text-gray-800 mb-1">Rp478,000 <span className="text-xs font-normal">a month per user</span></div>
                <div className="text-xs text-gray-400 mb-2">Billed annually. Cancel anytime.</div>
              </div>
              <ul className="mb-4 space-y-2 text-gray-700 text-xs">
                <li>✓ Access to 13,000+ top courses</li>
                <li>✓ Certification prep</li>
                <li>✓ Goal-focused recommendations</li>
                <li>✓ AI-powered coding exercises</li>
                <li>✓ Analytics and adoption reports</li>
              </ul>
              <button className="bg-green-600 text-white px-4 py-2 rounded font-semibold hover:bg-green-700 transition-colors mt-auto text-xs">Contact Sales</button>
            </div>
            {/* Enterprise Plan */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow flex flex-col min-w-[220px] h-full group cursor-pointer p-6">
              <div className="mb-4">
                <span className="inline-block bg-yellow-600 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-2">Enterprise Plan</span>
                <div className="font-bold text-lg text-yellow-700 mb-1">For your whole organization</div>
                <div className="text-xs text-gray-500 mb-1">More than 20 people</div>
                <div className="text-lg font-bold text-gray-800 mb-1">Contact sales for pricing</div>
              </div>
              <ul className="mb-4 space-y-2 text-gray-700 text-xs">
                <li>✓ Access to 30,000+ top courses</li>
                <li>✓ Certification prep</li>
                <li>✓ Goal-focused recommendations</li>
                <li>✓ AI-powered coding exercises</li>
                <li>✓ Advanced analytics and insights</li>
                <li>✓ Dedicated customer success team</li>
                <li>✓ International course collection featuring 15 languages</li>
                <li>✓ Customizable content</li>
                <li>✓ Hands-on tech training with add-on</li>
                <li>✓ Strategic implementation services with add-on</li>
              </ul>
              <button className="bg-yellow-600 text-white px-4 py-2 rounded font-semibold hover:bg-yellow-700 transition-colors mt-auto text-xs">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section id="testimonials" className="py-24 bg-white">
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
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <div className="text-2xl font-bold mb-2 text-white">SmartTPA</div>
            <div className="text-sm text-white mb-2">Jl. Contoh Alamat No. 123, Jakarta, Indonesia</div>
            <div className="text-sm text-white">Email: info@smarttpa.com</div>
            <div className="text-sm text-white">Telepon: +62 812-3456-7890</div>
          </div>
          <div>
            <div className="font-semibold mb-2 text-white">Ikuti Kami</div>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-400 transition-colors">
                <svg width="24" height="24" fill="currentColor" className="text-white"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-400 transition-colors">
                <svg width="24" height="24" fill="currentColor" className="text-white"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-300 transition-colors">
                <svg width="24" height="24" fill="currentColor" className="text-white"><path d="M22.46 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 11.07 9.03c0 .352.04.695.116 1.022C7.728 9.89 4.1 8.1 1.671 5.149a4.48 4.48 0 0 0-.606 2.254c0 1.555.792 2.927 2.002 3.732a4.48 4.48 0 0 1-2.03-.561v.057a4.48 4.48 0 0 0 3.594 4.393c-.193.053-.397.081-.607.081-.148 0-.292-.014-.432-.04.293.915 1.144 1.58 2.152 1.598A8.98 8.98 0 0 1 2 19.54a12.68 12.68 0 0 0 6.88 2.017c8.253 0 12.77-6.833 12.77-12.77 0-.195-.004-.39-.013-.583A9.14 9.14 0 0 0 24 4.59a8.93 8.93 0 0 1-2.54.698z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-white/70">&copy; {new Date().getFullYear()} SmartTPA. All rights reserved.</div>
      </footer>
    </div>
  );
}