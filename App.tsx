import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import GalleryPage from './pages/GalleryPage';
import BookingModal from './components/BookingModal';

const App: React.FC = () => {
    // Simple state-based router for SPA feeling
    const [currentPage, setCurrentPage] = useState<'home' | 'gallery'>('home');
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    const handleNavigate = (page: 'home' | 'gallery') => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setCurrentPage(page);
    };

    return (
        <div className="flex flex-col min-h-screen font-display">
            <Navbar
                currentPage={currentPage}
                onNavigate={handleNavigate}
                onOpenBooking={() => setIsBookingOpen(true)}
            />

            <main className="flex-grow">
                {currentPage === 'home' ? (
                    <LandingPage
                        onNavigateGallery={() => handleNavigate('gallery')}
                        onOpenBooking={() => setIsBookingOpen(true)}
                    />
                ) : (
                    <GalleryPage />
                )}
            </main>

            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
            <Footer />
        </div>
    );
};

export default App;
