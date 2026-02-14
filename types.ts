export interface ArtPiece {
    id: number;
    title: string;
    artist: string;
    category: 'Óleo' | 'Acuarela' | 'Acrílico' | 'Lápiz' | 'Mixta';
    imageUrl: string;
    description?: string;
}

export interface Testimonial {
    id: number;
    name: string;
    role: string;
    text: string;
    rating: number; // 1-5
    initials: string;
}

export interface FaqItem {
    question: string;
    answer: string;
}
