import React, { useState, useEffect } from 'react';
import { 
  MapPin, Phone, Mail, Clock, 
  Calendar as CalendarIcon, ChevronLeft, ChevronRight, 
  Check, User, ArrowRight, ArrowLeft, ShieldCheck, Sparkles, X, Loader2,
  Info, Lock, PhoneCall, CalendarRange
} from 'lucide-react';
import { Reveal } from './Reveal';

type BookingStep = 1 | 2 | 3 | 4;

interface BookingData {
  service: string | null;
  dateRange: { from: Date | null; to: Date | null };
  time: string | null;
  name: string;
  email: string;
  phone: string;
}

interface ContactProps {
  isExternalModalOpen?: boolean;
  onOpenExternalModal?: () => void;
  onCloseExternalModal?: () => void;
}

const SERVICES = [
  { id: 'checkup', name: 'چک‌آپ و جرم‌گیری', icon: ShieldCheck, duration: '۳۰ دقیقه', price: 'ویزیت رایگان' },
  { id: 'whitening', name: 'طراحی لبخند (زیبایی)', icon: Sparkles, duration: '۶۰ دقیقه', price: 'مشاوره تخصصی' },
  { id: 'implant', name: 'ایمپلنت و جراحی', icon: User, duration: '۴۵ دقیقه', price: 'طرح درمان' },
];

const TIME_SLOTS = [
  '۰۹:۰۰ صبح', '۱۰:۳۰ صبح', '۱۲:۰۰ ظهر', 
  '۱۴:۳۰ عصر', '۱۶:۰۰ عصر', '۱۷:۳۰ عصر'
];

export const Contact: React.FC<ContactProps> = ({ 
  isExternalModalOpen, 
  onOpenExternalModal,
  onCloseExternalModal 
}) => {
  const [isLocalModalOpen, setIsLocalModalOpen] = useState(false);
  const [step, setStep] = useState<BookingStep>(1);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [bookingData, setBookingData] = useState<BookingData>({
    service: null,
    dateRange: { from: null, to: null },
    time: null,
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isModalOpen = isExternalModalOpen !== undefined ? isExternalModalOpen : isLocalModalOpen;
  
  const setModalOpen = (val: boolean) => {
    if (val) {
      if (onOpenExternalModal) onOpenExternalModal();
      else setIsLocalModalOpen(true);
    } else {
      if (onCloseExternalModal) onCloseExternalModal();
      else setIsLocalModalOpen(false);
    }
  };

  useEffect(() => {
    if (isModalOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isModalOpen]);

  const monthNames = ["ژانویه", "فوریه", "مارس", "آوریل", "می", "ژوئن",
    "جولای", "اوت", "سپتامبر", "اکتبر", "نوامبر", "دسامبر"
  ];

  const handlePrevMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  const handleNextMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));

  const isSameDay = (d1: Date, d2: Date) => {
    return d1.getFullYear() === d2.getFullYear() &&
           d1.getMonth() === d2.getMonth() &&
           d1.getDate() === d2.getDate();
  };

  const handleDateSelect = (date: Date) => {
    setBookingData(prev => {
        const { from, to } = prev.dateRange;
        // Start new selection if nothing selected or both selected (reset)
        if (!from || (from && to)) {
            return { ...prev, dateRange: { from: date, to: null }, time: null };
        }
        
        // We have 'from' but no 'to'
        if (date < from) {
             // If clicked before 'from', swap them to make a valid range
             return { ...prev, dateRange: { from: date, to: from }, time: null };
        } else if (isSameDay(date, from)) {
             // Clicked same day again, keep as single day
             return prev;
        } else {
             // Complete the range
             return { ...prev, dateRange: { from: from, to: date }, time: null };
        }
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setStep(4);
  };

  const resetBooking = () => {
    setStep(1);
    setBookingData({ service: null, dateRange: { from: null, to: null }, time: null, name: '', email: '', phone: '' });
    setModalOpen(false);
  };

  const formatDate = (date: Date | null) => {
    if (!date) return '';
    return new Intl.DateTimeFormat('fa-IR', { month: 'long', day: 'numeric' }).format(date);
  };

  const renderStep1 = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-6 duration-500 text-right">
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl md:text-3xl font-bold text-slate-950">چه خدماتی نیاز دارید؟</h3>
        <p className="text-slate-500 font-light text-sm md:text-base">لطفاً نوع درمان مورد نظر خود را برای تخصیص بهترین متخصص انتخاب کنید.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
        {SERVICES.map((service) => (
          <button
            key={service.id}
            onClick={() => setBookingData(prev => ({ ...prev, service: service.name }))}
            className={`group p-6 md:p-8 rounded-[2.5rem] border-2 text-right transition-all duration-500 relative overflow-hidden ${
              bookingData.service === service.name
                ? 'border-primary-600 bg-primary-50/50 ring-4 ring-primary-100'
                : 'border-slate-100 bg-white hover:border-primary-300 hover:shadow-2xl shadow-sm'
            }`}
          >
            <div className={`w-14 h-14 md:w-16 md:h-16 rounded-3xl flex items-center justify-center mb-6 transition-all duration-500 ${
              bookingData.service === service.name ? 'bg-primary-600 text-white scale-110' : 'bg-slate-50 text-slate-400 group-hover:bg-white group-hover:text-primary-600 group-hover:shadow-lg'
            }`}>
              <service.icon size={32} />
            </div>
            <div className="font-bold text-lg md:text-xl text-slate-900 mb-2">{service.name}</div>
            <div className="text-[12px] text-slate-400 font-medium mb-3">{service.duration}</div>
            <div className={`inline-block px-4 py-1.5 rounded-xl text-[10px] font-bold ${
              bookingData.service === service.name ? 'bg-primary-600 text-white' : 'bg-slate-100 text-slate-500'
            }`}>
              {service.price}
            </div>
          </button>
        ))}
      </div>
      <div className="bg-primary-50 p-6 rounded-[2rem] flex items-start gap-5 flex-row-reverse border border-primary-100 shadow-sm">
        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm">
            <Info className="text-primary-600" size={20} />
        </div>
        <p className="text-primary-900 text-xs md:text-sm leading-relaxed font-medium">
          برای تجربه بهتر، در صورت داشتن درد شدید، گزینه "چک‌آپ عمومی" را انتخاب کنید تا در سریع‌ترین زمان ممکن توسط پزشک معاینه شوید.
        </p>
      </div>
    </div>
  );

  const renderStep2 = () => {
    const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
    // In Iran/Jalali context usually week starts Saturday. 
    // JS Date.getDay(): Sun=0, Mon=1...Sat=6.
    // Mapping for Grid (Sat=0): Offset = (day + 1) % 7
    const firstDayOffset = (new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay() + 1) % 7;

    return (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-6 duration-500 text-right">
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl md:text-3xl font-bold text-slate-950">بازه زمانی مورد نظر</h3>
        <p className="text-slate-500 font-light text-sm md:text-base">لطفاً تاریخ یا بازه زمانی که امکان حضور دارید را انتخاب کنید.</p>
      </div>
      <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-12">
        <div className="flex-1 bg-white p-6 md:p-8 rounded-[3rem] border border-slate-100 shadow-xl select-none">
          
          <div className="flex items-center justify-between mb-8 px-2">
            <button 
                onClick={handlePrevMonth} 
                className="p-3 hover:bg-primary-50 rounded-2xl transition-colors border border-slate-100 text-slate-600 hover:text-primary-600 hover:border-primary-100"
            >
                <ChevronRight size={20} />
            </button>

            <h3 className="font-bold text-slate-950 text-xl">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </h3>

            <button 
                onClick={handleNextMonth} 
                className="p-3 hover:bg-primary-50 rounded-2xl transition-colors border border-slate-100 text-slate-600 hover:text-primary-600 hover:border-primary-100"
            >
                <ChevronLeft size={20} />
            </button>
          </div>

          <div className="grid grid-cols-7 text-center text-[12px] font-bold text-slate-400 mb-6 uppercase tracking-widest border-b border-slate-50 pb-4">
            <div>شن</div><div>یک</div><div>دو</div><div>سه</div><div>چهار</div><div>پنج</div><div className="text-red-400">جم</div>
          </div>
          <div className="grid grid-cols-7 gap-y-3">
            {[...Array(firstDayOffset)].map((_, i) => <div key={`empty-${i}`} />)}
            {[...Array(daysInMonth)].map((_, i) => {
              const day = i + 1;
              const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
              const isFriday = (date.getDay() + 1) % 7 === 6; // Check based on real date
              
              const { from, to } = bookingData.dateRange;
              const isSelectedStart = from && isSameDay(date, from);
              const isSelectedEnd = to && isSameDay(date, to);
              const isInRange = from && to && date > from && date < to;

              let bgClass = 'bg-white hover:bg-primary-50 border-slate-100 text-slate-700';
              let roundedClass = 'rounded-xl';

              if (isSelectedStart && to) {
                  bgClass = 'bg-primary-600 text-white shadow-lg z-10';
                  roundedClass = 'rounded-l-none rounded-r-xl'; 
              } else if (isSelectedEnd) {
                  bgClass = 'bg-primary-600 text-white shadow-lg z-10';
                  roundedClass = 'rounded-l-xl rounded-r-none';
              } else if (isSelectedStart && !to) {
                  bgClass = 'bg-primary-600 text-white shadow-lg z-10';
                  roundedClass = 'rounded-xl';
              } else if (isInRange) {
                  bgClass = 'bg-primary-50 text-primary-700 border-primary-50';
                  roundedClass = 'rounded-none';
              } else if (isFriday) {
                  bgClass = 'bg-slate-50 text-slate-300 opacity-50 cursor-not-allowed border-transparent';
              }

              return (
                <button
                  key={i}
                  disabled={isFriday}
                  onClick={() => handleDateSelect(date)}
                  className={`relative h-12 flex items-center justify-center text-sm font-bold transition-all border ${bgClass} ${roundedClass}`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>

        <div className="w-full lg:w-80 space-y-6">
          <div className="flex items-center gap-3 flex-row-reverse border-b border-slate-100 pb-4">
            <Clock size={22} className="text-primary-600" />
            <span className="font-bold text-slate-950 text-xl">ساعت ترجیحی</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            {TIME_SLOTS.map((time) => (
              <button
                key={time}
                onClick={() => setBookingData(prev => ({ ...prev, time }))}
                className={`px-5 py-5 rounded-[1.5rem] text-sm font-bold transition-all text-center border-2 ${
                  bookingData.time === time
                    ? 'bg-primary-600 text-white border-primary-600 shadow-xl shadow-primary-200'
                    : 'bg-white border-slate-100 text-slate-600 hover:border-primary-400 hover:text-primary-600 hover:shadow-md'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
    );
  };

  const renderStep3 = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-6 duration-500 text-right">
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl md:text-3xl font-bold text-slate-950">تکمیل اطلاعات نهایی</h3>
        <p className="text-slate-500 font-light text-sm md:text-base">لطفاً مشخصات خود را برای ثبت در پرونده پزشکی و تماس هماهنگی وارد کنید.</p>
      </div>
      
      <div className="bg-slate-50 p-8 md:p-10 rounded-[3rem] border border-slate-100 space-y-8 shadow-inner">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <label className="text-sm font-bold text-slate-600 flex items-center gap-2 flex-row-reverse mr-2">
              <User size={16} className="text-primary-500" /> نام و نام خانوادگی مراجع
            </label>
            <input
              type="text"
              className="w-full px-6 py-5 rounded-2xl bg-white border border-slate-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-50 outline-none transition-all text-right font-medium text-slate-900 shadow-sm"
              placeholder="نام کامل خود را وارد کنید"
            />
          </div>
          <div className="space-y-3">
            <label className="text-sm font-bold text-slate-600 flex items-center gap-2 flex-row-reverse mr-2">
              <Phone size={16} className="text-primary-500" /> شماره موبایل جهت تماس
            </label>
            <input
              type="tel"
              dir="ltr"
              className="w-full px-6 py-5 rounded-2xl bg-white border border-slate-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-50 outline-none transition-all text-right font-medium text-slate-900 shadow-sm"
              placeholder="۰۹۱۲-XXX-XXXX"
            />
          </div>
        </div>
        <div className="space-y-3">
          <label className="text-sm font-bold text-slate-600 flex items-center gap-2 flex-row-reverse mr-2">
            <Mail size={16} className="text-primary-500" /> پست الکترونیک (اختیاری)
          </label>
          <input
            type="email"
            dir="ltr"
            className="w-full px-6 py-5 rounded-2xl bg-white border border-slate-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-50 outline-none transition-all text-right font-medium text-slate-900 shadow-sm"
            placeholder="example@email.com"
          />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4 flex-row-reverse p-4 bg-slate-50 rounded-2xl border border-slate-100">
          <input type="checkbox" id="terms" className="w-6 h-6 rounded-lg border-slate-300 text-primary-600 focus:ring-primary-500 cursor-pointer" />
          <label htmlFor="terms" className="text-sm md:text-base text-slate-600 font-medium cursor-pointer">
            با <span className="text-primary-600 font-bold underline">شرایط و قوانین</span> رزرواسیون کلینیک دنتیا موافقم.
          </label>
        </div>
        <div className="flex items-center gap-3 text-slate-400 text-xs font-medium justify-center pt-2">
            <Lock size={14} className="text-green-500" /> امنیت اطلاعات شما توسط پروتکل‌های امنیتی کلینیک تضمین شده است.
        </div>
      </div>
    </div>
  );

  const renderSuccess = () => (
    <div className="text-center py-12 md:py-24 animate-in fade-in zoom-in-95 duration-700 text-right flex flex-col items-center">
      <div className="w-28 h-28 bg-green-50 text-green-500 rounded-[3rem] flex items-center justify-center mb-10 relative">
        <div className="absolute inset-0 bg-green-100 rounded-[3rem] animate-ping opacity-20"></div>
        <Check size={56} strokeWidth={3} className="relative z-10" />
      </div>
      <h3 className="text-3xl md:text-5xl font-bold text-slate-950 mb-6 text-center">نوبت شما با موفقیت رزرو شد</h3>
      <p className="text-slate-500 mb-12 max-w-lg mx-auto font-light text-lg md:text-xl leading-relaxed text-center">
        درخواست شما در سیستم کلینیک ثبت گردید. همکاران ما در بخش پذیرش، جهت تایید نهایی و ارسال لوکیشن با شما تماس خواهند گرفت.
      </p>
      
      <div className="w-full max-w-md bg-white border border-slate-100 shadow-xl rounded-[2.5rem] p-8 mb-12 space-y-5 text-right">
        <div className="flex justify-between items-center flex-row-reverse border-b border-slate-50 pb-4">
            <span className="text-slate-400 text-sm font-bold">کد رهگیری رزرو</span>
            <span className="text-primary-600 font-black tracking-widest text-lg">DT-98234</span>
        </div>
        <div className="flex justify-between items-center flex-row-reverse">
            <span className="text-slate-400 text-sm font-bold">سرویس انتخابی</span>
            <span className="text-slate-900 font-bold text-lg">{bookingData.service}</span>
        </div>
        <div className="flex justify-between items-center flex-row-reverse">
            <span className="text-slate-400 text-sm font-bold">تاریخ انتخابی</span>
            <div className="text-slate-900 font-bold text-lg flex flex-col items-end">
                {bookingData.dateRange.from && (
                    <span>
                        {formatDate(bookingData.dateRange.from)} 
                        {bookingData.dateRange.to && ` تا ${formatDate(bookingData.dateRange.to)}`}
                    </span>
                )}
            </div>
        </div>
        <div className="flex justify-between items-center flex-row-reverse">
            <span className="text-slate-400 text-sm font-bold">زمان ترجیحی</span>
            <span className="text-slate-900 font-bold text-lg">{bookingData.time}</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-5 w-full justify-center">
        <button
            onClick={resetBooking}
            className="bg-slate-950 text-white px-14 py-5 rounded-[1.5rem] font-bold text-base transition-all active:scale-95 hover:bg-slate-800 shadow-2xl"
        >
            بازگشت به سایت
        </button>
        <button className="flex items-center gap-3 justify-center px-10 py-5 rounded-[1.5rem] font-bold text-base text-slate-600 hover:bg-slate-100 border border-slate-200 transition-all">
            <PhoneCall size={20} className="text-primary-600" /> تماس مستقیم با پذیرش
        </button>
      </div>
    </div>
  );

  return (
    <section id="contact" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-right">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-start">
          
          <div className="lg:col-span-5 space-y-12 md:space-y-16">
            <div>
                <Reveal direction="right">
                    <span className="text-primary-600 font-bold text-[10px] md:text-xs uppercase tracking-[0.4em] mb-3 md:mb-4 block">ارتباط با دنتیا</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-slate-950 leading-tight tracking-tight mb-6 md:mb-8">
                        خدمات دندانپزشکی <br className="hidden md:block" />
                        <span className="text-slate-400 italic">با استانداردهای روز.</span>
                    </h2>
                    <p className="text-slate-500 text-base md:text-lg font-light leading-relaxed max-w-md">
                        تیم ما آماده پاسخگویی به سوالات شماست. برای دریافت مشاوره رایگان یا رزرو نوبت آنلاین، ما ۲۴ ساعته در دسترس هستیم.
                    </p>
                </Reveal>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 md:gap-12">
                <Reveal direction="right" delay={200}>
                    <div className="space-y-4 md:space-y-6">
                        <div className="flex items-center gap-5 flex-row-reverse">
                            <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center border border-primary-100 shadow-sm">
                                <Phone size={24} className="text-primary-600" />
                            </div>
                            <div className="text-right">
                                <span className="font-bold text-xs uppercase text-slate-400 block mb-1 tracking-widest">تلفن‌های تماس</span>
                                <p className="text-2xl font-bold text-slate-950 tracking-widest">۰۲۱-۱۲۳۴۵۶۷۸</p>
                            </div>
                        </div>
                    </div>
                </Reveal>

                <Reveal direction="right" delay={300}>
                    <div className="space-y-4 md:space-y-6">
                        <div className="flex items-center gap-5 flex-row-reverse">
                            <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center border border-primary-100 shadow-sm">
                                <MapPin size={24} className="text-primary-600" />
                            </div>
                            <div className="text-right">
                                <span className="font-bold text-xs uppercase text-slate-400 block mb-1 tracking-widest">مراجعه حضوری</span>
                                <p className="text-lg font-bold text-slate-950 leading-relaxed">تهران، خیابان ولیعصر، تقاطع تجریش</p>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Reveal direction="left" delay={200}>
                <div className="relative group rounded-[3.5rem] overflow-hidden bg-slate-950 aspect-[3/4] sm:aspect-video lg:aspect-auto lg:h-[750px] flex flex-col justify-end p-10 md:p-24 shadow-2xl">
                    <div className="absolute inset-0 z-0">
                        <img 
                            src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=1500" 
                            className="w-full h-full object-cover opacity-50 transition-all duration-1000"
                            alt="رزرو آنلاین نوبت"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                    </div>
                    
                    <div className="relative z-10 space-y-10 text-right">
                        <div className="inline-block px-5 py-2 bg-primary-600 rounded-xl text-white font-bold text-[11px] uppercase tracking-widest shadow-xl">
                            سریع‌ترین راه نوبت‌دهی
                        </div>
                        <h3 className="text-4xl md:text-7xl font-bold text-white leading-[1.1]">
                            طراحی لبخند شما <br />
                            <span className="text-white/40 font-light italic">فقط با چند کلیک.</span>
                        </h3>
                        <p className="text-white/60 text-lg md:text-2xl font-light max-w-sm leading-relaxed mr-auto sm:mr-0">
                            پنل هوشمند ما زمان شما را مدیریت می‌کند. همین حالا نوبت خود را ثبت کنید.
                        </p>
                        <div className="pt-6">
                            <button
                                onClick={() => setModalOpen(true)}
                                className="w-full sm:w-auto group/btn bg-white text-slate-950 px-14 py-6 rounded-full font-bold text-xl transition-all shadow-2xl flex items-center justify-center gap-5 hover:bg-primary-600 hover:text-white"
                            >
                                <ArrowLeft size={28} className="group-hover/btn:-translate-x-3 transition-transform" />
                                ثبت نوبت مشاوره رایگان
                            </button>
                        </div>
                    </div>
                </div>
            </Reveal>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5">
          <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-2xl animate-in fade-in duration-500" onClick={() => setModalOpen(false)} />
          <div className="relative w-full max-w-6xl bg-white rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row-reverse max-h-[95vh] animate-in zoom-in-95 slide-in-from-bottom-10 duration-500">
            
            <div className="hidden md:flex w-72 lg:w-80 bg-slate-50 border-l border-slate-100 flex-col p-12 justify-between text-right">
                <div className="space-y-16">
                    <div className="flex items-center gap-4 flex-row-reverse">
                        <div className="w-12 h-12 bg-slate-950 rounded-2xl flex items-center justify-center text-white shadow-2xl">
                            <CalendarIcon size={20} />
                        </div>
                        <span className="font-bold text-lg uppercase text-slate-900 tracking-tight">نوبت‌دهی دنتیا</span>
                    </div>
                    <div className="space-y-12">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className={`flex items-center gap-5 flex-row-reverse transition-all duration-500 ${step >= i ? 'opacity-100' : 'opacity-20'}`}>
                                <div className={`w-14 h-14 rounded-[1.5rem] flex items-center justify-center font-bold text-base border-2 transition-all ${step === i ? 'bg-primary-600 border-primary-600 text-white shadow-xl scale-110' : step > i ? 'bg-green-500 border-green-500 text-white' : 'border-slate-200 text-slate-400'}`}>
                                    {step > i ? <Check size={24} /> : i}
                                </div>
                                <div className="text-right">
                                    <span className={`block text-[10px] font-bold uppercase tracking-widest ${step === i ? 'text-primary-600' : 'text-slate-400'}`}>مرحله {i}</span>
                                    <span className={`text-base font-bold ${step === i ? 'text-slate-900' : 'text-slate-400'}`}>
                                        {i === 1 ? 'نوع خدمات' : i === 2 ? 'تعیین زمان' : 'تایید نهایی'}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
                    <p className="text-[11px] text-slate-400 leading-relaxed font-bold uppercase tracking-widest text-center">
                        DENTIA CLINIC 2025
                    </p>
                </div>
            </div>

            <div className="flex-1 flex flex-col bg-white overflow-hidden text-right">
                <div className="flex items-center justify-between px-8 md:px-16 py-8 md:py-10 flex-row-reverse border-b border-slate-50 bg-white sticky top-0 z-10">
                    <div className="flex flex-col gap-1">
                        <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                            {step === 4 ? 'رزرو تکمیل شد' : `فرآیند ثبت نوبت آنلاین`}
                        </h3>
                        {step < 4 && (
                            <div className="h-1.5 w-32 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-primary-600 transition-all duration-700" style={{ width: `${(step / 3) * 100}%` }}></div>
                            </div>
                        )}
                    </div>
                    <button onClick={() => setModalOpen(false)} className="p-4 bg-slate-50 hover:bg-red-50 hover:text-red-500 rounded-2xl text-slate-400 transition-all shadow-sm">
                        <X size={24} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto px-8 md:px-16 py-10 md:py-14 custom-scrollbar">
                    {step === 1 && renderStep1()}
                    {step === 2 && renderStep2()}
                    {step === 3 && renderStep3()}
                    {step === 4 && renderSuccess()}
                </div>

                {step < 4 && (
                    <div className="px-8 md:px-16 py-8 md:py-10 bg-slate-50/80 border-t border-slate-100 flex justify-between items-center flex-row">
                        {/* ادامه در سمت راست با فلش رو به جلو (چپ) */}
                        <button
                            onClick={() => {
                                if (step === 3) handleSubmit();
                                else setStep(prev => prev + 1 as BookingStep);
                            }}
                            disabled={
                                (step === 1 && !bookingData.service) ||
                                (step === 2 && (!bookingData.dateRange.from || !bookingData.time)) ||
                                isSubmitting
                            }
                            className="bg-primary-600 text-white px-12 py-5 rounded-[1.5rem] font-bold text-lg transition-all flex items-center gap-5 active:scale-95 disabled:opacity-40 disabled:scale-100 shadow-2xl shadow-primary-200"
                        >
                            {isSubmitting ? <Loader2 size={24} className="animate-spin" /> : (step === 3 ? 'تایید و ثبت نهایی نوبت' : 'ادامه و انتخاب زمان')}
                            {!isSubmitting && <ArrowLeft size={22} />}
                        </button>

                        {/* بازگشت در سمت چپ با فلش رو به عقب (راست) */}
                        {step > 1 ? (
                            <button
                                onClick={() => setStep(prev => prev - 1 as BookingStep)}
                                className="flex items-center gap-3 text-slate-400 hover:text-slate-950 font-bold text-sm uppercase transition-all px-6 py-4 rounded-2xl hover:bg-white hover:shadow-sm"
                            >
                                مرحله قبل <ArrowRight size={20} /> 
                            </button>
                        ) : <div />}
                    </div>
                )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};