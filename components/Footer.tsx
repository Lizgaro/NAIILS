import React, { useState } from 'react';
import { Instagram, MapPin, Phone } from 'lucide-react';
import PrivacyPolicyModal from './PrivacyPolicyModal';
import ScrollReveal from './ScrollReveal';

const Footer: React.FC = () => {
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);

  return (
    <>
    <footer className="bg-vogue-black text-white pt-20 pb-10 px-6 mt-0 relative overflow-hidden">
       {/* Secret BG Element */}
       <div className="absolute top-0 right-0 font-script text-[20rem] text-white/5 leading-none pointer-events-none -translate-y-1/3 translate-x-1/4">
           Future
       </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left relative z-10">
        
        <div className="md:col-span-2">
          <ScrollReveal variant="fade-in" delay={0.1}>
            <h2 className="font-serif text-5xl italic mb-6">Mari Nails.</h2>
            <p className="font-sans font-light text-sm text-gray-400 max-w-sm mx-auto md:mx-0 leading-relaxed">
                Пространство красоты, где качество встречается с эстетикой. Мы заботимся о вашем здоровье и создаем стиль, актуальный в любом возрасте.
            </p>
            <div className="mt-8">
                <span className="font-serif italic text-lg text-gray-500/80 inline-block tracking-widest opacity-70">
                    The Future is in Your Hands.
                </span>
            </div>
          </ScrollReveal>
        </div>

        <div>
           <ScrollReveal variant="slide-up" delay={0.2}>
               <h4 className="font-sans text-xs font-bold uppercase tracking-[0.2em] mb-6 text-secret-hot">Студия</h4>
               <div className="space-y-4 flex flex-col items-center md:items-start">
                  <a href="#" className="font-serif text-lg italic hover:text-secret-pink transition-colors">Москва, Тверская 15</a>
                  <a href="#" className="font-serif text-lg italic hover:text-secret-pink transition-colors">+7 (999) 000-00-00</a>
                  <a href="#" className="font-serif text-lg italic hover:text-secret-pink transition-colors">Ежедневно 09:00 — 21:00</a>
               </div>
           </ScrollReveal>
        </div>

        <div>
            <ScrollReveal variant="slide-up" delay={0.3}>
                <h4 className="font-sans text-xs font-bold uppercase tracking-[0.2em] mb-6 text-secret-hot">Меню</h4>
                <div className="space-y-2 flex flex-col items-center md:items-start text-sm text-gray-400 font-sans">
                    <a href="#booking-section" className="hover:text-white transition-colors">Услуги и цены</a>
                    <a href="#booking-section" className="hover:text-white transition-colors">Сертификаты</a>
                    <a href="#philosophy" className="hover:text-white transition-colors">О нас</a>
                    <button 
                        onClick={() => setIsPolicyOpen(true)}
                        className="hover:text-white transition-colors text-left"
                    >
                        Политика конфиденциальности
                    </button>
                </div>
            </ScrollReveal>
        </div>

      </div>
      
      <ScrollReveal variant="fade-in" delay={0.4}>
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-sans font-bold uppercase tracking-widest text-gray-500 relative z-10">
            <span>© 2026 Mari Nails Premium Studio.</span>
            <div className="flex gap-6 mt-4 md:mt-0">
                <span className="cursor-pointer hover:text-secret-pink transition-colors">Instagram</span>
                <span className="cursor-pointer hover:text-secret-pink transition-colors">WhatsApp</span>
            </div>
        </div>
      </ScrollReveal>
    </footer>

    <PrivacyPolicyModal isOpen={isPolicyOpen} onClose={() => setIsPolicyOpen(false)} />
    </>
  );
};

export default Footer;