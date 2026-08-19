import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
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
    <footer className="bg-slate-900 text-slate-300 py-16 text-right">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-2">کلینیک دنتیا</h3>
            <p className="text-slate-400 leading-relaxed">
              ارائه‌دهنده خدمات تخصصی دندانپزشکی با بهره‌گیری از تکنولوژی‌های روز دنیا. لبخند شما، اولویت اول ماست.
            </p>
            <div className="flex gap-4 pt-4 flex-row-reverse">
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">لینک‌های سریع</h4>
            <ul className="space-y-3">
              <li><a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="hover:text-white transition-colors">صفحه اصلی</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="hover:text-white transition-colors">خدمات تخصصی</a></li>
              <li><a href="#testimonials" onClick={(e) => scrollToSection(e, '#testimonials')} className="hover:text-white transition-colors">نظرات مراجعین</a></li>
              <li><a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="hover:text-white transition-colors">تماس با ما</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">خدمات اصلی</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="hover:text-white transition-colors">ایمپلنت دیجیتال</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">اصلاح طرح لبخند</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">دندانپزشکی کودکان</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">ارتودنسی نامرئی</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">خبرنامه سلامت</h4>
            <p className="text-slate-400 mb-4">برای دریافت نکات بهداشتی و تخفیفات دوره‌ای عضو شوید.</p>
            <form className="flex gap-2 flex-row-reverse" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="ایمیل شما" 
                className="bg-slate-800 text-white px-4 py-2 rounded-lg outline-none focus:ring-1 focus:ring-primary-500 w-full text-right"
              />
              <button type="submit" className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                عضویت
              </button>
            </form>
          </div>

        </div>
        
        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-sm text-slate-500">
          <p>تمام حقوق این وب‌سایت متعلق به کلینیک دندانپزشکی دنتیا است. &copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};