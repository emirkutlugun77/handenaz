import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-50 to-white">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-gray-800">Sayfa Bulunamadı</h2>
        <p className="text-gray-600">Aradığınız sayfa mevcut değil</p>
        <Link 
          href="/" 
          className="inline-block px-6 py-3 bg-gradient-to-r from-red-400 to-pink-500 text-white rounded-full 
                    text-lg font-semibold transform transition-all duration-300 
                    hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  )
} 