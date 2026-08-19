A modern, responsive dental clinic website built with React and TypeScript, featuring a beautiful Persian/Farsi interface and comprehensive booking system.

## 🚀 Features

- **Modern Design**: Beautiful, mobile-responsive UI with smooth animations
- **Persian/Farsi Interface**: Fully localized interface with RTL support
- **Online Booking System**: Complete appointment booking with date range selection
- **Service Showcase**: Detailed service pages with staff information
- **Interactive Components**: Smooth scrolling, reveal animations, and modern interactions
- **Professional Layout**: Hero section, services, testimonials, and contact sections

## 🛠 Tech Stack

- **Frontend**: React 19.2.3 with TypeScript
- **Build Tool**: Vite 6.2.0
- **Icons**: Lucide React
- **Styling**: Tailwind CSS (implied from component structure)
- **AI Integration**: Google Gemini AI (@google/genai)

## 📋 Services Offered

1. **General Dentistry** (دندانپزشکی عمومی)
   - Preventive care and regular checkups
   - Professional cleaning and scaling

2. **Cosmetic Dentistry** (اصلاح طرح لبخند)
   - Smile design with ceramic laminates
   - Composite veneers and whitening

3. **Pediatric Dentistry** (دندانپزشکی کودکان)
   - Child-friendly environment
   - Specialized care for children and teens

4. **Digital Orthodontics** (ارتودنسی دیجیتال)
   - Invisible aligners (Invisalign)
   - Modern bracket systems

5. **Dental Implants** (ایمپلنت‌های دندانی)
   - Digital implant surgery
   - Premium implant brands

6. **Emergency Services** (خدمات اورژانسی)
   - 24/7 emergency dental care
   - Pain relief and trauma management

## 🏗 Project Structure

```
├── components/
│   ├── Contact.tsx          # Contact section with booking modal
│   ├── Footer.tsx           # Website footer
│   ├── Hero.tsx             # Hero/landing section
│   ├── Navbar.tsx           # Navigation bar
│   ├── ProgressBar.tsx      # Page progress indicator
│   ├── Reveal.tsx           # Animation wrapper component
│   ├── ServiceDetail.tsx    # Detailed service view
│   ├── Services.tsx         # Services showcase
│   └── Testimonials.tsx     # Client testimonials
├── App.tsx                  # Main application component
├── types.ts                 # TypeScript type definitions
├── index.tsx                # Application entry point
└── package.json             # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dr.-shenz-dental-clinic
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash


   4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
# Build the application
npm run build

# Preview the production build
npm run preview
```

## 🎨 Key Components

### Booking System
The contact component features a sophisticated multi-step booking system:
- **Step 1**: Service selection with visual cards
- **Step 2**: Date range picker with Persian calendar
- **Step 3**: Personal information form
- **Step 4**: Confirmation and booking success

### Service Detail Pages
Each service has a dedicated detail page showing:
- Comprehensive service description
- Specialized staff information
- High-quality imagery
- Direct booking integration

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly interfaces
- RTL text support for Persian content

## 🔧 Customization

### Adding New Services
1. Update the `SERVICES_DATA` array in `components/Services.tsx`
2. Add corresponding staff members to `STAFF_POOL`
3. Include appropriate service images and icons

### Styling
The project uses Tailwind CSS classes throughout. Key design tokens:
- **Primary Color**: `primary-600` (customizable in Tailwind config)
- **Typography**: Bold headers with light body text
- **Spacing**: Generous padding and margins for breathing room
- **Borders**: Rounded corners with subtle shadows

### Language Support
Currently optimized for Persian/Farsi with RTL support. To add other languages:
1. Update text content in components
2. Adjust CSS for different text directions if needed
3. Modify date formatting in the booking system

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern dental clinic websites
- Icons provided by [Lucide React](https://lucide.dev/)
- Images sourced from [Unsplash](https://unsplash.com/)
- Built with [Vite](https://vitejs.dev/) and [React](https://reactjs.org/)

---

Made with ❤️ for modern dental practices

   # Copy the example env file
   cp .env.local.example .env.local
   
