import React, { useRef, useEffect, useState } from 'react';
import Tilt3D from './Tilt3D';
import Scroll3D from './Scroll3D';
import ScrollReveal from './ScrollReveal';
import BlurImage from './BlurImage';
import { ArrowUpRight, Upload } from 'lucide-react';

interface Work {
    id: number;
    img: string;
    title: string;
    tag: string;
    cols: string;
    rows: string;
    alt: string;
}

const defaultWorks: Work[] = [
    {
        id: 1,
        img: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=2670&auto=format&fit=crop',
        title: 'Cyber Red',
        tag: 'Вне Времени',
        cols: 'md:col-span-2',
        rows: 'md:row-span-2',
        alt: 'Ярко-красный Cyber Red маникюр, стильный дизайн ногтей от студии Mari Nails 2026'
    },
    {
        id: 2,
        img: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=2670&auto=format&fit=crop',
        title: 'Chrome & Nude',
        tag: 'Тренд 2026',
        cols: 'md:col-span-1',
        rows: 'md:row-span-1',
        alt: 'Нюдовый маникюр с хромированным дизайном, тренды Mari Nails 2026'
    },
    {
        id: 3,
        img: 'https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?q=80&w=2670&auto=format&fit=crop',
        title: 'Smart Педикюр',
        tag: 'Забота',
        cols: 'md:col-span-1',
        rows: 'md:row-span-2',
        alt: 'Процедура смарт-педикюра, идеальный уход за ногами в салоне Mari Nails 2026'
    },
    {
        id: 4,
        img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2670&auto=format&fit=crop',
        title: 'Японский Уход',
        tag: 'Здоровье',
        cols: 'md:col-span-1',
        rows: 'md:row-span-1',
        alt: 'Японский эко-маникюр для восстановления ногтей, натуральный глянец Mari Nails 2026'
    },
    {
        id: 5,
        img: 'https://images.unsplash.com/photo-1596462502278-27bfdd403348?q=80&w=2670&auto=format&fit=crop',
        title: '3D Jelly Art',
        tag: 'Эксклюзив',
        cols: 'md:col-span-1',
        rows: 'md:row-span-1',
        alt: 'Креативный 3D Jelly Art дизайн ногтей, авторский маникюр Mari Nails 2026'
    },
    {
        id: 6,
        img: 'https://images.unsplash.com/photo-1629367494173-c78a56567877?q=80&w=2670&auto=format&fit=crop',
        title: 'Dark Aura',
        tag: 'Готика',
        cols: 'md:col-span-1',
        rows: 'md:row-span-2',
        alt: 'Темный готический аура-маникюр, тренд сезона осень-зима'
    },
    {
        id: 7,
        img: 'https://images.unsplash.com/photo-1599693359686-83ea11b59005?q=80&w=2670&auto=format&fit=crop',
        title: 'White Pearl',
        tag: 'Классика',
        cols: 'md:col-span-2',
        rows: 'md:row-span-1',
        alt: 'Жемчужно-белый маникюр, классика для невест'
    },
    {
        id: 8,
        img: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2670&auto=format&fit=crop',
        title: 'Neon Glitch',
        tag: 'Вечеринка',
        cols: 'md:col-span-1',
        rows: 'md:row-span-1',
        alt: 'Неоновый яркий маникюр для вечеринок, дизайн ногтей 2026'
    }
];

const Gallery: React.FC = () => {
    const parallaxRef1 = useRef<HTMLDivElement>(null);
    const parallaxRef2 = useRef<HTMLDivElement>(null);
    const parallaxRef3 = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    
    const [works, setWorks] = useState<Work[]>(defaultWorks);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize(); // Check initially
        window.addEventListener('resize', handleResize);

        const handleScroll = () => {
            if (!parallaxRef1.current || !parallaxRef2.current || !parallaxRef3.current) return;
            const scrolled = window.scrollY;
            const windowHeight = window.innerHeight;
            const componentOffset = parallaxRef1.current.parentElement?.offsetTop || 0;
            const relativeScroll = scrolled - componentOffset + windowHeight / 3;

            // Enhanced Parallax Logic: Multi-layer movement with damping
            // Layer 1: Slow, large
            const y1 = relativeScroll * 0.08; 
            const r1 = relativeScroll * 0.01; 
            
            // Layer 2: Medium speed, opposing direction
            const y2 = relativeScroll * -0.12;
            const r2 = relativeScroll * -0.02;

            // Layer 3: Faster, foreground-like feel
            const y3 = relativeScroll * 0.15;
            const r3 = relativeScroll * 0.03;

            requestAnimationFrame(() => {
                if(parallaxRef1.current) parallaxRef1.current.style.transform = `translate3d(0, ${y1}px, 0) rotate(${r1}deg)`;
                if(parallaxRef2.current) parallaxRef2.current.style.transform = `translate3d(0, ${y2}px, 0) rotate(${r2}deg)`;
                if(parallaxRef3.current) parallaxRef3.current.style.transform = `translate3d(0, ${y3}px, 0) rotate(${r3}deg)`;
            });
        };

        window.addEventListener('scroll', handleScroll);
        
        // Load custom works from localStorage
        const savedWorks = localStorage.getItem('user-gallery-works');
        if (savedWorks) {
            try {
                const parsed = JSON.parse(savedWorks);
                setWorks([...parsed, ...defaultWorks]);
            } catch (e) {
                console.error("Failed to parse saved gallery works", e);
            }
        }

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            const base64 = reader.result as string;
            const newWork: Work = {
                id: Date.now(),
                img: base64,
                title: 'Ваше Фото',
                tag: 'Загружено',
                cols: 'md:col-span-1',
                rows: 'md:row-span-1',
                alt: 'Загруженное пользователем фото маникюра'
            };

            const existingSavedStr = localStorage.getItem('user-gallery-works');
            let existingSaved: Work[] = [];
            if (existingSavedStr) {
                try {
                    existingSaved = JSON.parse(existingSavedStr);
                } catch (e) { console.error(e) }
            }

            const updatedSaved = [newWork, ...existingSaved];
            localStorage.setItem('user-gallery-works', JSON.stringify(updatedSaved));

            setWorks([...updatedSaved, ...defaultWorks]);
        };
        reader.readAsDataURL(file);
    };

    return (
        <section className="py-24 px-4 relative overflow-hidden bg-white/70 backdrop-blur-2xl" id="portfolio">
            
            {/* Parallax Background Elements */}
            <div ref={parallaxRef1} className="absolute top-0 -left-20 w-[40rem] h-[40rem] bg-gradient-to-br from-secret-pink/20 to-transparent rounded-full blur-[80px] pointer-events-none z-0 transition-transform will-change-transform opacity-60 mix-blend-multiply"></div>
            <div ref={parallaxRef2} className="absolute -bottom-40 -right-20 w-[50rem] h-[50rem] bg-gradient-to-tl from-blue-100/30 to-transparent rounded-full blur-[100px] pointer-events-none z-0 transition-transform will-change-transform opacity-60 mix-blend-multiply"></div>
            {/* 3rd Layer for Depth */}
            <div ref={parallaxRef3} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-gradient-to-r from-vogue-gold/10 to-transparent rounded-full blur-[90px] pointer-events-none z-0 transition-transform will-change-transform opacity-40 mix-blend-screen"></div>

            <div className="max-w-6xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-end border-b border-black/10 pb-6 relative z-10">
                <div>
                    <ScrollReveal variant="slide-up">
                        <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-secret-hot mb-2 block">Портфолио</span>
                    </ScrollReveal>
                    <ScrollReveal variant="slide-up" delay={0.1}>
                        <h2 className="font-serif text-5xl md:text-7xl text-vogue-black leading-[0.9] font-medium tracking-tight">
                            Искусство <br/> <span className="italic font-light text-gray-500">Будущего</span>
                        </h2>
                    </ScrollReveal>
                </div>
                <div className="mt-6 md:mt-0 max-w-xs text-right flex flex-col items-end gap-4">
                    <ScrollReveal variant="fade-in" delay={0.2}>
                        <p className="font-sans text-sm text-gray-600 leading-relaxed font-light">
                            Станьте свидетелем чистоты линий и совершенства покрытия. Мы создаем тренды 2026 года уже сегодня.
                        </p>
                    </ScrollReveal>
                    
                    {/* Upload Button */}
                    <ScrollReveal variant="bloom" delay={0.3}>
                        <button 
                            onClick={handleUploadClick}
                            className="group flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full font-sans text-[9px] font-bold uppercase tracking-widest text-gray-600 hover:text-secret-hot hover:border-secret-hot transition-all bg-white/50"
                        >
                            <Upload size={14} className="group-hover:animate-bounce" />
                            Добавить Свое Фото
                        </button>
                    </ScrollReveal>
                    <input 
                        type="file" 
                        ref={fileInputRef} 
                        onChange={handleFileChange} 
                        className="hidden" 
                        accept="image/*"
                    />
                </div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px] md:auto-rows-[300px] relative z-10">
                {works.map((work, index) => {
                    const CardContent = (
                        <div className="relative w-full h-full cursor-pointer overflow-hidden rounded-sm">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10 pointer-events-none"></div>
                            <BlurImage
                                src={work.img} 
                                alt={work.alt} 
                                className="w-full h-full"
                                imageClassName="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                                loading="lazy"
                            />
                            
                            {/* Overlay Info - Modified for Mobile Visibility */}
                            <div className={`
                                absolute bottom-0 left-0 w-full p-6 z-20 transition-all duration-500 flex justify-between items-end
                                ${isMobile 
                                    ? 'bg-gradient-to-t from-black/80 to-transparent translate-y-0 opacity-100' 
                                    : 'bg-gradient-to-t from-black/90 to-transparent translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'
                                }
                            `}>
                                <div>
                                    <span className="font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-secret-pink mb-1 block">{work.tag}</span>
                                    <h3 className="font-serif text-3xl text-white italic font-light tracking-wide">{work.title}</h3>
                                </div>
                                <div className={`
                                    w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white bg-white/10 backdrop-blur-sm
                                    ${isMobile ? '' : 'hover:bg-white hover:text-black transition-colors'}
                                `}>
                                    <ArrowUpRight size={16} />
                                </div>
                            </div>
                        </div>
                    );

                    return (
                        <div key={work.id} className={`${work.cols} ${work.rows} relative group`}>
                            <Scroll3D delay={isMobile ? 0 : index * 0.05} className="w-full h-full">
                                {isMobile ? (
                                    // Mobile: No Tilt, Static Layout
                                    <div className="w-full h-full">
                                        {CardContent}
                                    </div>
                                ) : (
                                    // Desktop: Tilt Enabled - Adjusted Intensity for Subtlety
                                    <Tilt3D intensity={5} className="w-full h-full">
                                        {CardContent}
                                    </Tilt3D>
                                )}
                            </Scroll3D>
                        </div>
                    );
                })}
            </div>
            
            <div className="text-center mt-16 relative z-10">
                 <button className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] border-b border-black pb-1 hover:text-secret-hot hover:border-secret-hot transition-colors">
                    Смотреть Портфолио в Instagram
                 </button>
            </div>
        </section>
    );
};

export default Gallery;