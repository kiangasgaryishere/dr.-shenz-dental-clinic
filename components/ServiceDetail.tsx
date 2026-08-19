import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, User, Award, ShieldCheck, Star } from 'lucide-react';
import { Reveal } from './Reveal';
import { ServiceItem } from '../types';

interface ServiceDetailProps {
  service: ServiceItem;
  onBack: () => void;
  onBook: () => void;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack, onBook }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white animate-in fade-in duration-700 text-right">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-6 md:px-8 py-3.5 md:py-4 flex items-center justify-between flex-row-reverse">
          <button 
            onClick={onBack}
            className="group flex items-center gap-2 md:gap-3 text-slate-900 font-bold text-[10px] md:text-xs uppercase tracking-widest transition-all"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-950 group-hover:text-white transition-all">
              <ArrowRight size={16} md:size={18} />
            </div>
            <span className="hidden sm:inline">بازگشت به خدمات</span>
          </button>
          
          <div className="flex items-center gap-3 md:gap-4 truncate px-4 flex-row-reverse">
             <span className="text-slate-400 font-medium text-[10px] md:text-xs tracking-widest">{service.number}</span>
             <div className="w-1 h-1 bg-primary-600 rounded-full flex-shrink-0"></div>
             <span className="text-slate-950 font-bold text-[10px] md:text-xs truncate">{service.title}</span>
          </div>

          <button 
            onClick={onBook}
            className="bg-primary-600 text-white px-4 md:px-8 py-2 md:py-3 rounded-full font-bold text-[9px] md:text-xs hover:bg-primary-700 transition-all shadow-md shadow-primary-100"
          >
            رزرو نوبت
          </button>
        </div>
      </div>

      <header className="pt-24 pb-12 md:pt-32 md:pb-20 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <Reveal direction="right">
              <div className="space-y-6 md:space-y-8 text-center lg:text-right">
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full font-bold text-[9px] md:text-[10px] uppercase">
                  دپارتمان تخصصی {service.title}
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-950 leading-tight">
                  خدمات حرفه‌ای <br className="hidden sm:block" />
                  <span className="text-slate-400 italic font-light">{service.title}.</span>
                </h1>
                <p className="text-slate-500 text-base md:text-xl font-light leading-relaxed max-w-lg mx-auto lg:mr-0">
                  {service.detailedDescription}
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-8 pt-2 flex-row-reverse">
                    <div className="flex flex-col gap-0.5">
                        <span className="text-slate-950 font-bold text-sm md:text-base">تجهیزات مدرن</span>
                        <span className="text-slate-400 text-[9px] md:text-xs font-medium">دیجیتال</span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                        <span className="text-slate-950 font-bold text-sm md:text-base">+۱۵ سال</span>
                        <span className="text-slate-400 text-[9px] md:text-xs font-medium">سابقه بالینی</span>
                    </div>
                </div>
              </div>
            </Reveal>
            <Reveal direction="left" className="relative mt-8 lg:mt-0">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative max-w-md mx-auto">
                <img src={service.image} className="w-full h-full object-cover" alt={service.title} />
              </div>
            </Reveal>
          </div>
        </div>
      </header>

      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12 md:mb-20">
            <Reveal direction="right">
              <span className="text-primary-600 font-bold text-[10px] md:text-xs uppercase tracking-[0.4em] mb-3 md:mb-4 block">تیم متخصص</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-950 leading-tight mb-6 md:mb-8">
                پزشکان مجرب ما <br />
                <span className="text-slate-400 italic font-light">در کنار شما هستند.</span>
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
            {service.staff.map((member, idx) => (
              <Reveal key={member.id} delay={idx * 150} direction="up">
                <div className="group space-y-6 md:space-y-8 text-right">
                  <div className="aspect-[3/4] rounded-[2rem] overflow-hidden relative transition-all duration-700 bg-slate-100">
                    <img src={member.image} className="w-full h-full object-cover transform md:group-hover:scale-110 transition-transform duration-[2s]" alt={member.name} />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-end justify-between flex-row-reverse">
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-slate-950 mb-0.5">{member.name}</h3>
                            <p className="text-primary-600 font-bold text-[10px] md:text-xs">{member.role}</p>
                        </div>
                    </div>
                    <p className="text-slate-500 text-sm md:text-base font-light leading-relaxed">
                        {member.bio}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
            <Reveal direction="up">
                <div className="bg-slate-950 rounded-[2rem] md:rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden">
                    <div className="relative z-10 max-w-2xl mx-auto space-y-8 md:space-y-10">
                        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                            برای شروع یک تحول <br className="hidden sm:block" /> 
                            <span className="text-white/40 italic font-light">آماده هستید؟</span>
                        </h2>
                        <div className="flex flex-col sm:flex-row-reverse items-center justify-center gap-4 md:gap-6">
                            <button onClick={onBook} className="w-full sm:w-auto bg-white text-slate-950 px-10 md:px-12 py-4 md:py-5 rounded-full font-bold transition-all flex items-center justify-center gap-3">
                                <ArrowLeft size={18} /> رزرو نوبت حضوری
                            </button>
                            <button onClick={onBack} className="text-white/50 hover:text-white px-8 py-3 font-bold text-sm transition-all">
                                سایر خدمات کلینیک
                            </button>
                        </div>
                    </div>
                </div>
            </Reveal>
        </div>
      </section>
    </div>
  );
};