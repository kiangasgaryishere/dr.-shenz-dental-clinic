import React from 'react';
import { Reveal } from './Reveal';
import { CalendarCheck, ArrowDown } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const imageSource = "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2500&auto=format&fit=crop";

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-l from-slate-950 via-slate-950/80 md:via-slate-950/70 to-transparent z-10" /> 
        <div className="absolute inset-0 w-full h-full">
          <img
            src={imageSource}
            alt="دندانپزشکی مدرن و دیجیتال"
            className="w-full h-full object-cover object-center opacity-70 md:opacity-90"
          />
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20 text-right">
        <div className="max-w-4xl space-y-8 md:space-y-10 pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="space-y-4 md:space-y-6">
            <Reveal delay={200} direction="right">
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.2] tracking-tight">
                مراقبتی متمایز <br /> 
                <span className="text-white/40 italic font-light">برای لبخندی ماندگار.</span>
              </h1>
            </Reveal>

            <Reveal delay={400} direction="right">
              <p className="text-white/60 text-base md:text-xl font-light leading-relaxed max-w-2xl">
                ما در کلینیک دنتیا، هنر طراحی لبخند را با تکنولوژی دیجیتال در آمیخته‌ایم تا تجربه‌ای بدون درد، سریع و فراتر از انتظار را برای شما رقم بزنیم.
              </p>
            </Reveal>
          </div>

          <Reveal delay={600} direction="up">
            <div className="pt-4 md:pt-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-start">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto bg-white text-slate-950 px-10 md:px-12 py-4 md:py-5 rounded-full font-bold text-sm md:text-lg transition-all hover:bg-slate-100 active:scale-95 shadow-2xl shadow-white/10 flex items-center justify-center gap-3 group"
              >
                رزرو وقت مشاوره رایگان
                <CalendarCheck className="w-5 h-5 md:w-6 md:h-6 text-primary-600 group-hover:scale-110 transition-transform" />
              </button>
              
              <button
                onClick={scrollToServices}
                className="w-full sm:w-auto bg-transparent border border-white/20 text-white hover:bg-white/10 px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-sm md:text-lg transition-all active:scale-95 flex items-center justify-center gap-3"
              >
                مشاهده خدمات
                <ArrowDown className="w-5 h-5 md:w-6 md:h-6 opacity-70" />
              </button>
            </div>
          </Reveal>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 opacity-20 hidden md:block animate-pulse">
        <div className="w-px h-12 md:h-16 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
};