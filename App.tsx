import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ServiceDetail } from './components/ServiceDetail';
import { ProgressBar } from './components/ProgressBar';
import { ServiceItem } from './types';

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Helper to go back to home from a detail page
  const handleBackToHome = () => {
    setSelectedService(null);
    // Optional: Scroll to services section after returning
    setTimeout(() => {
        const element = document.getElementById('services');
        if (element) {
            element.scrollIntoView({ behavior: 'auto' });
        }
    }, 50);
  };

  return (
    <div className="min-h-screen bg-white">
      <ProgressBar />
      {/* 
        Conditionally render the main app or the service detail "page" 
      */}
      {!selectedService ? (
        <>
          <Navbar onOpenBooking={() => setIsBookingModalOpen(true)} />
          <main>
            <Hero onOpenBooking={() => setIsBookingModalOpen(true)} />
            <Services onSelectService={setSelectedService} />
            <Testimonials />
            <Contact 
              isExternalModalOpen={isBookingModalOpen}
              onOpenExternalModal={() => setIsBookingModalOpen(true)}
              onCloseExternalModal={() => setIsBookingModalOpen(false)}
            />
          </main>
          <Footer />
        </>
      ) : (
        <div className="animate-in slide-in-from-right duration-500 ease-out">
          <ServiceDetail 
            service={selectedService} 
            onBack={handleBackToHome}
            onBook={() => setIsBookingModalOpen(true)}
          />
          {/* Keep Contact/Booking modal accessible on detail page via state */}
          <Contact 
            isExternalModalOpen={isBookingModalOpen}
            onOpenExternalModal={() => setIsBookingModalOpen(true)}
            onCloseExternalModal={() => setIsBookingModalOpen(false)}
          />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;