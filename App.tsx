import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import BookingCalendar from './components/BookingCalendar';
import Footer from './components/Footer';
import AIGenerator from './components/AIGenerator';
import Trends from './components/Trends';
import ThreeBackground from './components/ThreeBackground';
import ScrollReveal from './components/ScrollReveal';
import { ShieldCheck, Clock, Heart, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative selection:bg-secret-pink selection:text-white">
      
      {/* GLOBAL 3D BACKGROUND */}
      <ThreeBackground />

      {/* Editorial Navigation with Glassmorphism */}
      <nav 
        className={`fixed top-0 w-full z-50 px-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex justify-between items-center ${
          isScrolled 
            ? 'py-3 bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm' 
            : 'py-8 bg-transparent border-b border-transparent'
        }`}
      >
        <div 
          className={`font-serif text-xl md:text-2xl italic tracking-tight cursor-pointer group uppercase transition-all duration-700 hover:tracking-widest ${
            isScrolled ? 'text-vogue-black' : 'text-white drop-shadow-md'
          }`}
        >
          MARI NAILS<span className="text-secret-hot group-hover:text-secret-pink transition-colors duration-700">.</span>
        </div>
        
        <div className="hidden md:flex gap-12">
            {[
                { name: 'Коллекции', id: 'trends' }, 
                { name: 'Mari AI Studio', id: 'ai-atelier' }
            ].map(item => (
                <span 
                    key={item.name} 
                    onClick={() => scrollToSection(item.id)}
                    className={`relative font-sans text-[10px] font-bold uppercase tracking-[0.2em] cursor-pointer transition-colors group ${
                      isScrolled 
                        ? 'text-vogue-black hover:text-secret-hot' 
                        : 'text-white/90 hover:text-white drop-shadow-sm'
                    }`}
                >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-secret-hot transition-all duration-300 group-hover:w-full"></span>
                </span>
            ))}
        </div>

        <button 
          onClick={() => scrollToSection('booking-section')}
          className={`relative overflow-hidden group font-sans text-[10px] font-bold uppercase tracking-[0.25em] px-8 py-3 transition-all duration-500 border shadow-lg ${
            isScrolled 
              ? 'bg-vogue-black text-white hover:bg-black border-transparent hover:border-vogue-gold/30 hover:shadow-vogue-gold/10' 
              : 'bg-white/10 text-white border-white/30 hover:bg-white hover:text-black backdrop-blur-md'
          }`}
        >
          <span className="relative z-10 flex items-center gap-2 group-hover:text-vogue-gold transition-colors duration-300">
             Записаться
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out"></div>
        </button>
      </nav>

      <Hero />

      {/* TRENDS 2026 SECTION */}
      <Trends />

      {/* PHILOSOPHY: HIGH FASHION MANIFESTO */}
      <section className="py-24 px-6 relative overflow-hidden" id="philosophy">
          {/* Translucent background container to make text pop over 3D bg */}
          <div className="absolute inset-0 bg-white/70 backdrop-blur-3xl z-0"></div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
                <ScrollReveal variant="slide-up">
                    <span className="font-script text-5xl md:text-7xl text-secret-hot mb-4 block transform -rotate-2 opacity-90">L'Art de Vivre</span>
                </ScrollReveal>
                
                <ScrollReveal variant="slide-up" delay={0.1}>
                    <h2 className="font-serif text-5xl md:text-7xl text-vogue-black leading-[0.9] mb-16 drop-shadow-sm tracking-tight font-medium">
                        Поэзия на <br/> <span className="italic text-gray-400 font-light">Кончиках Пальцев</span>
                    </h2>
                </ScrollReveal>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    <ScrollReveal variant="slide-up" delay={0.2} className="h-full">
                        <div className="h-full group bg-white/60 backdrop-blur-md p-10 rounded-2xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(219,39,119,0.1)] transition-all duration-500 hover:-translate-y-2">
                            <div className="mb-6 text-secret-hot bg-white w-14 h-14 flex items-center justify-center rounded-full shadow-sm group-hover:bg-secret-hot group-hover:text-white transition-colors duration-300">
                                <ShieldCheck size={26} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-serif text-3xl italic mb-4 font-light text-vogue-black">Ритуал Чистоты</h3>
                            <p className="font-sans text-sm font-light leading-relaxed text-gray-600">
                                Мы придерживаемся строгого медицинского протокола. Трехэтапная стерилизация — это наш стандарт. Ваша безопасность — это не опция, это фундамент нашего люкс-сервиса.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal variant="slide-up" delay={0.3} className="h-full">
                        <div className="h-full group bg-white/60 backdrop-blur-md p-10 rounded-2xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(219,39,119,0.1)] transition-all duration-500 hover:-translate-y-2">
                            <div className="mb-6 text-secret-hot bg-white w-14 h-14 flex items-center justify-center rounded-full shadow-sm group-hover:bg-secret-hot group-hover:text-white transition-colors duration-300">
                                <Clock size={26} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-serif text-3xl italic mb-4 font-light text-vogue-black">Время как Материал</h3>
                            <p className="font-sans text-sm font-light leading-relaxed text-gray-600">
                                Эффективность встречается с искусством. Мы уважаем современный темп. Сложные архитектурные дизайны выполняются с ювелирной скоростью и гарантией носки 4 недели.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal variant="slide-up" delay={0.4} className="h-full">
                        <div className="h-full group bg-white/60 backdrop-blur-md p-10 rounded-2xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(219,39,119,0.1)] transition-all duration-500 hover:-translate-y-2">
                            <div className="mb-6 text-secret-hot bg-white w-14 h-14 flex items-center justify-center rounded-full shadow-sm group-hover:bg-secret-hot group-hover:text-white transition-colors duration-300">
                                <Heart size={26} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-serif text-3xl italic mb-4 font-light text-vogue-black">Святилище Стиля</h3>
                            <p className="font-sans text-sm font-light leading-relaxed text-gray-600">
                                Пространство вне возраста и суеты. Будь вам 16 или 60, наша студия предлагает атмосферу закрытого клуба, где стиль — единственный язык общения.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
      </section>

      {/* AI GENERATOR SECTION */}
      <AIGenerator />

      {/* Booking Section */}
      <section className="py-24 px-6 relative" id="booking-section">
        {/* Subtle glass layer behind booking */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl z-0"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
            <ScrollReveal variant="fade-in">
                <div className="flex items-center justify-center gap-4 mb-10">
                    <Sparkles className="text-secret-hot animate-pulse-slow" size={20} />
                    <h2 className="font-serif text-5xl md:text-7xl uppercase tracking-tighter text-center font-medium text-vogue-black">Бронирование</h2>
                    <Sparkles className="text-secret-hot animate-pulse-slow" size={20} />
                </div>
            </ScrollReveal>
            <ScrollReveal variant="slide-up" delay={0.1}>
                <p className="text-center font-sans text-xs uppercase tracking-[0.2em] text-gray-500 mb-12 font-bold">
                    Зарезервируйте свое время
                </p>
            </ScrollReveal>
            
            <ScrollReveal variant="slide-up" delay={0.2} duration={1.2}>
                <BookingCalendar />
            </ScrollReveal>
        </div>
      </section>

      {/* FINAL EDITORIAL QUOTE - Refined and Subtle */}
      <section className="py-24 px-6 bg-white/40 backdrop-blur-sm relative overflow-hidden flex items-center justify-center">
         <ScrollReveal variant="bloom" duration={1.5}>
             <div className="max-w-3xl mx-auto text-center relative z-10">
                <span className="font-sans text-[9px] font-bold uppercase tracking-[0.3em] text-gray-300 mb-6 block">
                    Vision 2026
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-gray-700 leading-snug tracking-wide italic font-light">
                    The Future is in Your Hands.
                </h2>
                <div className="mt-8 flex justify-center">
                    <div className="h-12 w-[1px] bg-gray-300 opacity-50"></div>
                </div>
             </div>
         </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
};

export default App;