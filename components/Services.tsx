import React from 'react';
import { Reveal } from './Reveal';
import { 
  ShieldCheck, 
  Sparkles, 
  Heart, 
  Stethoscope, 
  Layers, 
  Clock, 
  ArrowLeft 
} from 'lucide-react';
import { ServiceItem, StaffMember } from '../types';

const STAFF_POOL: Record<string, StaffMember[]> = {
  general: [
    { id: 'dr-vance', name: 'دکتر النا ونس', role: 'دندانپزشک ارشد', specialty: 'مراقبت‌های پیشگیرانه', bio: 'با بیش از ۱۲ سال تجربه، دکتر ونس بر تکنیک‌های کم‌تهاجمی برای حفظ ساختار طبیعی دندان تمرکز دارد.', image: 'https://images.unsplash.com/photo-1559839734-2b71f15367ef?auto=format&fit=crop&q=80&w=800' },
    { id: 'dr-thorne', name: 'دکتر مارکوس تورن', role: 'متخصص ترمیم', specialty: 'ترمیم‌های پیچیده', bio: 'دکتر تورن به دلیل رویکرد دقیق و آرام خود در انجام درمان‌های ترمیمی پیشرفته شناخته شده است.', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800' }
  ],
  cosmetic: [
    { id: 'dr-chen', name: 'دکتر سوفیا چن', role: 'متخصص زیبایی', specialty: 'طراحی لبخند', bio: 'دکتر چن با استفاده از جدیدترین متدهای دیجیتال، هزاران لبخند را با استفاده از لمینت و ونیر تغییر داده است.', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800' }
  ],
  pediatric: [
    { id: 'dr-martinez', name: 'دکتر لئو مارتینز', role: 'متخصص دندانپزشکی کودکان', specialty: 'کودک و نوجوان', bio: 'دکتر مارتینز محیطی شاد و بدون استرس را برای مراجعین خردسال فراهم می‌کند تا خاطره‌ای خوب از دندانپزشکی داشته باشند.', image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800' }
  ],
  ortho: [
    { id: 'dr-rossi', name: 'دکتر ایزابلا روسی', role: 'متخصص ارتودنسی', specialty: 'الاینرهای نامرئی', bio: 'استاد اصلاح ناهنجاری‌های فک و دندان با استفاده از پیشرفته‌ترین سیستم‌های ارتودنسی نامرئی.', image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=800' }
  ],
  implants: [
    { id: 'dr-blake', name: 'دکتر جولیان بلیک', role: 'متخصص ایمپلنت', specialty: 'جراحی فک و صورت', bio: 'دکتر بلیک جراحی‌های ایمپلنت را با دقت میکروسکوپی و با استفاده از راهنماهای جراحی دیجیتال انجام می‌دهد.', image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=800' }
  ],
  emergency: [
    { id: 'dr-jenkins', name: 'دکتر سارا جنکینز', role: 'متخصص درمان‌های فوری', specialty: 'اورژانس دندانپزشکی', bio: 'دکتر جنکینز مدیریت تیم پاسخگویی سریع ما را برای تسکین دردهای حاد و تروماهای دندانی بر عهده دارد.', image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=800' }
  ]
};

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "general",
    number: "۰۱",
    title: "دندانپزشکی عمومی",
    description: "مراقبت‌های پیشگیرانه، چک‌آپ‌های دوره‌ای و جرم‌گیری تخصصی برای حفظ سلامت همیشگی دهان و دندان.",
    detailedDescription: "بخش دندانپزشکی عمومی ما بر پایه تشخیص دقیق استوار است. ما با استفاده از اسکنرهای دیجیتال، کوچکترین مشکلات را پیش از تبدیل شدن به بحران شناسایی و درمان می‌کنیم.",
    icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800",
    staff: STAFF_POOL.general
  },
  {
    id: "cosmetic",
    number: "۰۲",
    title: "اصلاح طرح لبخند",
    description: "خدمات زیبایی شامل لمینت سرامیکی، کامپوزیت ونیر و بلیچینگ برای داشتن لبخندی هالیوودی و درخشان.",
    detailedDescription: "ما لبخند شما را متناسب با چهره‌تان طراحی می‌کنیم. استفاده از مواد درجه یک جهانی تضمین‌کننده ماندگاری و طبیعی بودن نتایج درمانی ماست.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
    staff: STAFF_POOL.cosmetic
  },
  {
    id: "pediatric",
    number: "۰۳",
    title: "دندانپزشکی کودکان",
    description: "محیطی آرام و کودکانه برای درمان‌های تخصصی اطفال، با تمرکز بر پیشگیری از پوسیدگی و آموزش.",
    detailedDescription: "در بخش اطفال، هدف ما ایجاد دوستی بین کودک و دندانپزشک است. ما از تکنیک‌های روان‌شناختی برای کنترل ترس و اضطراب کودکان استفاده می‌کنیم.",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=800",
    staff: STAFF_POOL.pediatric
  },
  {
    id: "ortho",
    number: "۰۴",
    title: "ارتودنسی دیجیتال",
    description: "ردیف کردن دندان‌ها با متدهای نوین، از جمله براکت‌های همرنگ دندان و سیستم‌های نامرئی (اینویزالاین).",
    detailedDescription: "با استفاده از شبیه‌سازی سه بعدی، شما می‌توانید نتیجه نهایی درمان ارتودنسی خود را حتی پیش از شروع درمان مشاهده کنید.",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
    staff: STAFF_POOL.ortho
  },
  {
    id: "implants",
    number: "۰۵",
    title: "ایمپلنت‌های دندانی",
    description: "جایگزینی دندان‌های از دست رفته با بهترین برندهای ایمپلنت دنیا و جراحی‌های دیجیتال بدون بخیه.",
    detailedDescription: "ما از تکنولوژی Implant Guide استفاده می‌کنیم تا جراحی را با کمترین میزان جراحت و بالاترین درصد موفقیت انجام دهیم.",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=800",
    staff: STAFF_POOL.implants
  },
  {
    id: "emergency",
    number: "۰۶",
    title: "خدمات اورژانسی",
    description: "تسکین فوری درد دندان و رسیدگی به حوادث ناگهانی در کوتاه‌ترین زمان ممکن توسط تیم متخصص.",
    detailedDescription: "در مواقع اضطراری، کلینیک ما اولویت را به شما می‌دهد. دردهای شدید و شکستگی‌های ناگهانی بلافاصله توسط متخصصین ما مدیریت می‌شوند.",
    icon: Clock,
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
    staff: STAFF_POOL.emergency
  }
];

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-20 gap-6 md:gap-8">
          <div className="max-w-2xl text-right">
            <Reveal direction="right">
              <span className="text-primary-600 font-bold text-[10px] md:text-xs uppercase tracking-[0.4em] mb-3 md:mb-4 block">تخصص‌های ما</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-950 leading-[1.3] tracking-tight">
                راهکارهای جامع برای <br className="hidden sm:block" />
                <span className="text-slate-400 italic font-light">آینده‌ای با لبخند درخشان.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal direction="left" delay={200}>
            <p className="text-slate-500 text-base md:text-lg max-w-sm leading-relaxed font-light text-right">
              ما هنر زیبایی را با دقت پزشکی ترکیب کرده‌ایم تا نتایجی فراتر از انتظارات شما ارائه دهیم.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-y-16 gap-x-8 md:gap-x-12">
          {SERVICES_DATA.map((service, index) => (
            <Reveal key={index} delay={index * 100} direction="up">
              <div 
                onClick={() => onSelectService(service)}
                className="group relative flex flex-col h-full cursor-pointer text-right"
              >
                <div className="relative h-[220px] sm:h-[280px] w-full rounded-[2rem] overflow-hidden mb-6 md:mb-8 shadow-sm">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-all duration-700 z-10" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-700"
                  />
                  
                  <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20 bg-white/95 backdrop-blur-md w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-slate-950 font-bold text-xs md:text-sm">{service.number}</span>
                  </div>

                  <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-20 text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-500">
                    <div className="bg-primary-600 p-2.5 md:p-3 rounded-xl md:rounded-2xl shadow-xl shadow-primary-600/30">
                      <service.icon size={20} className="md:w-6 md:h-6" />
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex flex-col px-1 md:px-2">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-950 mb-3 md:mb-4 group-hover:text-primary-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light mb-6 md:mb-8 flex-1">
                    {service.description}
                  </p>
                  
                  <div className="pt-4 border-t border-slate-100">
                    <div className="inline-flex items-center gap-2 font-bold text-[11px] md:text-[13px] text-slate-950 group-hover:text-primary-600 transition-all group/btn">
                      <ArrowLeft size={14} className="md:w-4 md:h-4 transform group-hover/btn:-translate-x-1 transition-transform" />
                      مشاهده جزئیات و تیم متخصص
                    </div>
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