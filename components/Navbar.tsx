import React, { useState } from 'react';
import Logo from './Logo';

interface NavbarProps {
    currentPage: 'home' | 'gallery';
    onNavigate: (page: 'home' | 'gallery') => void;
    onOpenBooking: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenBooking }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleNav = (page: 'home' | 'gallery', id?: string) => {
        onNavigate(page);
        setMobileMenuOpen(false);
        if (id && page === 'home') {
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <button onClick={() => handleNav('home')} className="flex items-center gap-3">
                    <Logo className="h-10 w-10 text-primary" />
                    <span className="text-xl font-black tracking-tight text-[#171111]">DibujArte</span>
                </button>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-8">
                    <button onClick={() => handleNav('home', 'beneficios')} className="text-sm font-medium text-[#171111] hover:text-primary transition-colors">Beneficios</button>
                    <button onClick={() => handleNav('home', 'metodologia')} className="text-sm font-medium text-[#171111] hover:text-primary transition-colors">Metodología</button>
                    <button
                        onClick={() => handleNav('gallery')}
                        className={`text-sm transition-colors ${currentPage === 'gallery' ? 'font-bold text-primary' : 'font-medium text-[#171111] hover:text-primary'}`}
                    >
                        Galería
                    </button>
                    <button onClick={() => handleNav('home', 'precios')} className="text-sm font-medium text-[#171111] hover:text-primary transition-colors">Precios</button>
                </nav>

                <div className="hidden md:flex items-center">
                    <button
                        onClick={onOpenBooking}
                        className="rounded-lg bg-primary px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
                    >
                        Reservar Cupo
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-gray-600"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <span className="material-symbols-outlined text-3xl">
                        {mobileMenuOpen ? 'close' : 'menu'}
                    </span>
                </button>
            </div>

            {/* Mobile Dropdown */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 p-4 flex flex-col gap-4 shadow-xl">
                    <button onClick={() => handleNav('home', 'beneficios')} className="text-left py-2 font-medium">Beneficios</button>
                    <button onClick={() => handleNav('home', 'metodologia')} className="text-left py-2 font-medium">Metodología</button>
                    <button onClick={() => handleNav('gallery')} className="text-left py-2 font-bold text-primary">Galería</button>
                    <button onClick={() => handleNav('home', 'precios')} className="text-left py-2 font-medium">Precios</button>
                    <button
                        onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
                        className="w-full rounded-lg bg-primary py-3 font-bold text-white"
                    >
                        Reservar Cupo
                    </button>
                </div>
            )}
        </header>
    );
};

export default Navbar;
