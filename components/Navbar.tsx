import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'خدمات تخصصی', href: '#services' },
    { name: 'نظرات مراجعین', href: '#testimonials' },
    { name: 'تماس با ما', href: '#contact' },
  ];

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
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen 
          ? 'bg-slate-950 py-4 shadow-xl' 
          : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-8 lg:px-12">
        <div className="flex items-center justify-between flex-row-reverse md:flex-row">
          {/* Logo */}
          <div className="flex-shrink-0 relative z-50">
            <div 
              className="flex items-center gap-3 group cursor-pointer"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
            >
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-all duration-300">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-slate-950 fill-current">
                  <path d="M12,2C10,2 4,3 4,11C4,18 10,22 12,22C14,22 20,18 20,11C20,3 14,2 12,2M12,18.5C10.5,18.5 7.5,17 7.5,13C7.5,10.5 9,9 12,9C15,9 16.5,10.5 16.5,13C16.5,17 13.5,18.5 12,18.5Z" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">دنتیا</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-12 space-x-reverse">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-[14px] font-medium text-white/60 hover:text-white tracking-wide transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Button */}
          <div className="flex-shrink-0 flex items-center relative z-50">
            <button
              onClick={onOpenBooking}
              className="hidden md:block bg-primary-600 hover:bg-primary-700 text-white px-10 py-3 rounded-full font-bold text-[12px] transition-all active:scale-95 shadow-lg shadow-primary-600/20"
            >
              رزرو نوبت آنلاین
            </button>
            
            <button
              className="text-white md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="منو"
            >
              {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-slate-950 flex flex-col items-center justify-center p-10 animate-in fade-in duration-300">
          <div className="flex flex-col items-center space-y-10 w-full">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-white text-3xl font-medium hover:text-primary-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="w-full pt-8 border-t border-white/10 max-w-xs">
              <button 
                onClick={() => { onOpenBooking(); setIsMobileMenuOpen(false); }}
                className="w-full bg-primary-600 text-white py-5 rounded-full font-bold text-lg shadow-xl active:scale-95 transition-all"
              >
                درخواست نوبت فوری
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};