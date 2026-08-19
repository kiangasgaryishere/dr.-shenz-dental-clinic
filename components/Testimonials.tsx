import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Reveal } from './Reveal';
import { TestimonialItem } from '../types';

const testimonials: TestimonialItem[] = [
  {
    name: "سارا رضایی",
    role: "مراجع دندانپزشکی زیبایی",
    content: "سطح مراقبت در این کلینیک بی‌نظیر است. من همیشه از دندانپزشکی می‌ترسیدم، اما دکتر و تیمش محیطی بسیار آرام ایجاد کردند. نتیجه نهایی لبخندم واقعاً زندگی‌ام را تغییر داد.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "محمد علوی",
    role: "مراجع ایمپلنت",
    content: "مدرن، تمیز و بسیار حرفه‌ای. ترکیب تکنولوژی روز دنیا با برخورد گرم و انسانی در این کلینیک عالی است. جراحی ایمپلنت من کاملاً بدون درد و با دقت بالا انجام شد.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "مریم حسینی",
    role: "والد مراجع بخش اطفال",
    content: "دخترم همیشه برای رفتن به دندانپزشکی مقاومت می‌کرد، اما از وقتی با دنتیا آشنا شدیم، خودش پیگیر نوبت‌هایش است! محیط بخش کودکان بسیار شاد و سرگرم‌کننده است.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary-100/30 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-8 lg:px-12 relative z-10 text-right">
        <div className="max-w-3xl mb-20">
          <Reveal direction="right">
            <span className="text-primary-600 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">نظرات مراجعین ما</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              داستان لبخندهای <br />
              <span className="text-slate-400 italic font-light">رضایت‌بخش شما.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <Reveal key={index} delay={index * 150} direction="up">
              <div className="group bg-white p-10 rounded-[2rem] border border-slate-100 hover:border-primary-100 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] flex flex-col h-full relative text-right">
                <div className="absolute top-8 left-10 text-slate-50 group-hover:text-primary-50 transition-colors duration-500">
                  <Quote size={60} fill="currentColor" className="transform scale-x-[-1]" />
                </div>

                <div className="flex gap-0.5 text-primary-500 mb-8 relative z-10 flex-row-reverse">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>

                <blockquote className="flex-1 relative z-10">
                  <p className="text-slate-600 text-lg leading-relaxed font-light italic">
                    "{item.content}"
                  </p>
                </blockquote>

                <div className="flex items-center gap-4 mt-10 pt-8 border-t border-slate-50 relative z-10 flex-row-reverse">
                  <div className="relative">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-14 h-14 rounded-2xl object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 tracking-tight">{item.name}</h4>
                    <p className="text-xs text-slate-400 font-medium mt-0.5">{item.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};