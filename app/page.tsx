'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Stars, ChefHat, Brain, MedalIcon } from 'lucide-react';
import ReactConfetti from 'react-confetti';
import emailjs from '@emailjs/browser';

const HomePage = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  const [noClickCount, setNoClickCount] = useState(0);

  useEffect(() => {
    // Initial window size
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // Update window size when window is resized
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleForgiveClick = () => {
    setIsClicked(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleForgiveClick();
    }
  };

  const handleYesClick = () => {
    setShowConfetti(true);
    setShowSuccessMessage(true);
    
    
   emailjs.send(
      'service_y3apk32',    // Replace with your Service ID
      'template_pzpb0dc',   // Replace with your Template ID
      {
        reply_to: 'emirkutlugun01@gmail.com',
        to_name: 'Emir Kutlugün',
        message: 'She said YES to watching Shrek! 🎬',
      },
      '5B1gquoB1o0KCPChc'  // Replace with your Public Key
    ).catch(error => console.error('Failed to send email:', error));
    emailjs.send(
        'service_y3apk32',    // Replace with your Service ID
        'template_pzpb0dc',   // Replace with your Template ID
        {
          reply_to: 'emirkutlugun01@gmail.com',
          to_name: 'Emir Kutlugün',
          message: 'She said YES to watching Shrek! 🎬',
        },
        '5B1gquoB1o0KCPChc'  // Replace with your Public Key
      ).catch(error => console.error('Failed to send email:', error));
    
    
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  };

  const handleNoClick = () => {
    setNoClickCount(prev => prev + 1);
  };

  return (
    <main className="min-h-screen bg-hearts bg-gradient-to-b from-pink-50 to-white relative">
      {showConfetti && windowSize.width > 0 && (
        <div className="fixed inset-0 z-50">
          <ReactConfetti
            width={windowSize.width}
            height={windowSize.height}
            recycle={false}
            numberOfPieces={500}
            colors={['#F87171', '#FB7185', '#F472B6', '#ff6b6b', '#ff8787']}
          />
        </div>
      )}
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center space-y-6"
        >
          <Heart className="w-24 h-24 text-red-400 mx-auto heart-float" />
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-pink-600">
            Her şey için özür dilerim...
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-red-400 to-pink-600 rounded-full" />
        </motion.div>

        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="space-y-8 text-center"
        >
          <img
            src="/images/main.jpg"
            alt="Romantic scene"
            className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
          />
          <div className="space-y-6 text-gray-700 max-w-2xl mx-auto">
            <p className="text-2xl md:text-3xl font-medium leading-relaxed">
            Hata yaptığımı biliyorum ve seni incittiğimi bilmek beni acıtıyor. Seninle küs geçen her an sonsuz gibi geliyor.
            </p>
            <p className="text-xl leading-relaxed">
            Sen benim için her şeyden önemlisin, seni incitmek istemiyorum. Senin mutluluğun benim için en önemli şey.
            </p>
          </div>
        </motion.div>

        {/* Memory Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="relative group">
            <img
              src="/images/1.jpg"
              alt="Happy memories"
              className="w-full h-[300px] object-cover rounded-xl shadow-lg transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl flex items-end p-6">
              <p className="text-white text-lg font-medium">İkinci Buluşmamız (ilkinden foto yok)</p>
            </div>
          </div>
          <div className="relative group">
            <img
              src="/images/2.jpg"
              alt="Romantic moments"
              className="w-full h-[300px] object-cover rounded-xl shadow-lg transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl flex items-end p-6">
              <p className="text-white text-lg font-medium">metro</p>
            </div>
          </div>
          <div className="relative group">
            <img
              src="/images/3.jpg"
              alt="Together forever"
              className="w-full h-[300px] object-cover rounded-xl shadow-lg transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl flex items-end p-6">
              <p className="text-white text-lg font-medium">cok guzelsin burada</p>
            </div>
          </div>
        </motion.div>

        {/* Promises */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="space-y-8"
        >
          {/* Funky Header */}
          <div className="relative py-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-pink-500 to-red-400 animate-gradient-x mb-2">
              Neden Barışmalıyız
            </h2>
            <div className="flex justify-center items-center gap-3 mt-2">
              <Heart className="w-6 h-6 text-red-400 animate-bounce" />
              <div className="h-0.5 w-20 bg-gradient-to-r from-red-400 to-transparent" />
              <Stars className="w-6 h-6 text-pink-400 animate-pulse" />
              <div className="h-0.5 w-20 bg-gradient-to-l from-red-400 to-transparent" />
              <Heart className="w-6 h-6 text-red-400 animate-bounce" style={{ animationDelay: '0.2s' }} />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow">
              <Brain className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Zihinsel Engelliyim</h3>
              <p className="text-gray-600">Olay çok basit. Anlamamanı umardım fakat yardımına ihtiyacım var.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow">
              <ChefHat className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Yemek Yapabiliyorum</h3>
              <p className="text-gray-600">Buluşmalarda artık yaptığım yemekleri getireceğim söz veriyorum.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow">
              <MedalIcon className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Aslında O Kadar Salak Değilim</h3>
              <p className="text-gray-600">2010 yılında martı yayınları denemesinde türkiye 1.si oldum.</p>
            </div>
          </div>
        </motion.div>

        {/* Interactive Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-center space-y-8"
        >
          <button
            onClick={handleForgiveClick}
            onKeyDown={handleKeyDown}
            aria-label="Click to forgive me"
            tabIndex={0}
            className="px-12 py-6 bg-gradient-to-r from-red-400 to-pink-500 text-white rounded-full 
                     text-2xl font-semibold transform transition-all duration-300 
                     hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300
                     shadow-lg hover:shadow-xl"
          >
            {isClicked ? "Artık daha iyi bir insan olacağım, söz veriyorum! ❤️" : "Lütfen beni affeder misin? 🥺"}
          </button>

          {isClicked && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-4"
            >
              <div className="text-2xl text-pink-600 font-medium">
                Bu siteyi yaparken Shrek izlemek istediğmi farkettim aşağıdaki butona basarsan cevabını almış olacağım!
              </div>
              <div className="flex justify-center space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Heart 
                    key={i} 
                    className="w-8 h-8 text-red-400 animate-bounce" 
                    style={{ animationDelay: `${i * 0.15}s` }} 
                  />
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* New Yes/No Buttons */}
        {isClicked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center gap-6 mt-8"
          >
            <button
              onClick={handleYesClick}
              className="px-12 py-4 bg-gradient-to-r from-green-400 to-green-500 text-white rounded-full 
                        text-xl font-semibold transform transition-all duration-300 
                        hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300
                        shadow-lg hover:shadow-xl"
            >
              Evet, Shrek izleyelim! 🎬
            </button>
            <button
              onClick={handleNoClick}
              className={`px-12 py-4 bg-gradient-to-r from-red-400 to-red-500 text-white rounded-full 
                        text-xl font-semibold transform transition-all duration-300 
                        hover:scale-90 focus:outline-none focus:ring-4 focus:ring-red-300
                        shadow-lg hover:shadow-xl ${noClickCount > 0 ? 'animate-shake' : ''}`}
            >
              {noClickCount === 0 ? 'Hayır (lütfen buna basma diğer butonda sürpriz var) 🚫' :
               noClickCount === 1 ? 'Gerçekten mi? 😢' :
               noClickCount === 2 ? 'Lütfen 🥺' :
               noClickCount === 3 ? 'HANDE NAZ! 😭' :
               'Peki...  🎬'}
            </button>
          </motion.div>
        )}

        {showSuccessMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-8"
          >
            <p className="text-xl text-green-600 font-medium">
              Detaylı bilgiler size iletilecektir 💌
            </p>
          </motion.div>
        )}

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="text-center space-y-4 pt-12"
        >
          <p className="text-xl text-gray-600">Seni seviyorum ❤️</p>
          <p className="text-lg text-gray-500">Seninle birlikte her şey güzel olacak 💚</p>
        </motion.footer>
      </div>
    </main>
  );
};

export default HomePage; 