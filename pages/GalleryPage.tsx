import React, { useState } from 'react';
import { ART_PIECES } from '../constants';
import { ArtPiece } from '../types';

const GalleryPage: React.FC = () => {
    const [filter, setFilter] = useState<string>('Todos');

    const filteredPieces = filter === 'Todos' 
        ? ART_PIECES 
        : ART_PIECES.filter(piece => piece.category === filter);

    const categories = ['Todos', 'Óleo', 'Acuarela', 'Acrílico', 'Lápiz', 'Mixta'];

    return (
        <div className="min-h-screen">
             {/* Hero Section */}
            <section className="mb-16 text-center md:text-left pt-12 px-6 md:px-10 max-w-7xl mx-auto">
                <div className="max-w-3xl">
                    <h2 className="text-4xl font-black leading-tight tracking-tight text-[#171111] sm:text-5xl lg:text-6xl">
                        Explora nuestra <span className="text-primary">Galería</span>
                    </h2>
                    <p className="mt-6 text-lg leading-relaxed text-[#171111]/70">
                        Cada trazo cuenta una historia de aprendizaje y pasión. Descubre el talento emergente de nuestros alumnos y déjate inspirar por sus creaciones únicas en diversas técnicas.
                    </p>
                </div>
            </section>

            {/* Filter Controls */}
            <section className="sticky top-[73px] z-40 mb-10 bg-white/95 px-6 py-4 backdrop-blur-sm border-b border-gray-100">
                <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-3">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`rounded-full px-6 py-2 text-sm font-bold transition-all ${
                                filter === cat 
                                    ? 'bg-primary text-white' 
                                    : 'bg-[#171111]/5 text-[#171111] hover:bg-[#171111]/10'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                    
                    <div className="ml-auto hidden items-center gap-2 lg:flex">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#171111]/40">Vista:</span>
                        <button className="p-1 text-primary">
                            <span className="material-symbols-outlined">grid_view</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="mx-auto max-w-7xl px-6 pb-20">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {filteredPieces.map((piece: ArtPiece) => (
                        <div key={piece.id} className="group relative flex flex-col gap-4">
                            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-[#171111]/5 shadow-sm">
                                <img 
                                    src={piece.imageUrl} 
                                    alt={piece.title} 
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                />
                                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#171111]/90 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-6">
                                    <span className="text-xs font-bold uppercase tracking-wider text-white/80">{piece.category}</span>
                                    <h4 className="text-xl font-bold text-white">{piece.title}</h4>
                                    <p className="text-sm text-white/70">por {piece.artist}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 flex flex-col items-center gap-6">
                    <p className="text-sm font-medium text-[#171111]/50">Mostrando {filteredPieces.length} obras</p>
                    <button className="flex items-center gap-2 rounded-lg border-2 border-primary px-8 py-3 font-bold text-primary transition-all hover:bg-primary hover:text-white">
                        Cargar más obras
                        <span className="material-symbols-outlined">expand_more</span>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default GalleryPage;
