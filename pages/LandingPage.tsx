import React, { useEffect, useState } from 'react';
import { ART_PIECES, TESTIMONIALS, FAQS } from '../constants';
import FloatingWhatsapp from '../components/FloatingWhatsapp';
import heroImage from '@/images/Highresolution_professional_corporate_2k_202 (1).jpeg';


interface LandingPageProps {
    onNavigateGallery: () => void;
    onOpenBooking: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigateGallery, onOpenBooking }) => {
    const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 14, mins: 35 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.mins > 0) return { ...prev, mins: prev.mins - 1 };
                if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, mins: 59 };
                if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, mins: 59 };
                return prev;
            });
        }, 60000); // Update every minute to simulate
        return () => clearInterval(timer);
    }, []);

    const previewGallery = ART_PIECES.slice(0, 4);

    return (
        <div className="relative">
            {/* 1. HERO SECTION */}
            <section className="relative overflow-hidden pt-12 pb-20 px-4 md:px-10 bg-[#fdfcfb]">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div className="z-10 order-2 md:order-1">
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold mb-6">
                            <span className="material-symbols-outlined text-sm">alarm</span>
                            CUPOS LIMITADOS - SOLO 5 LUGARES DISPONIBLES
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 tracking-tight text-[#171111]">
                            Despierta tu <span className="text-primary">creatividad</span>
                        </h1>
                        <p className="text-xl text-gray-700 mb-4 font-medium">
                            Aprende a dibujar y pintar desde cero, sin experiencia previa.
                        </p>
                        <p className="text-lg text-gray-500 mb-8">
                            Clases personalizadas para niños (5+), adolescentes y adultos en un ambiente inspirador.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={onOpenBooking}
                                className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-primary/30 flex items-center justify-center gap-2"
                            >
                                Reservar mi cupo ahora
                            </button>
                            <a
                                href="https://wa.me/595981185887?text=Hola!%20Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20las%20clases%20de%20arte."
                                target="_blank"
                                rel="noreferrer"
                                className="bg-white border-2 border-[#25D366] text-[#25D366] px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-colors flex items-center justify-center gap-2"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6 fill-[#25D366]"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                WhatsApp
                            </a>
                        </div>
                        {/* Countdown Timer */}
                        <div className="mt-10 flex gap-4 items-center">
                            <p className="text-sm font-bold uppercase tracking-widest text-gray-400">La oferta termina en:</p>
                            <div className="flex gap-2 text-[#171111]">
                                <div className="bg-canvas p-2 rounded-lg text-center min-w-[50px]">
                                    <span className="block text-xl font-bold">{timeLeft.days.toString().padStart(2, '0')}</span>
                                    <span className="text-[10px] uppercase">Días</span>
                                </div>
                                <div className="bg-canvas p-2 rounded-lg text-center min-w-[50px]">
                                    <span className="block text-xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</span>
                                    <span className="text-[10px] uppercase">Hrs</span>
                                </div>
                                <div className="bg-canvas p-2 rounded-lg text-center min-w-[50px]">
                                    <span className="block text-xl font-bold">{timeLeft.mins.toString().padStart(2, '0')}</span>
                                    <span className="text-[10px] uppercase">Min</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative order-1 md:order-2">
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl rotate-2">
                            <img
                                alt="Artista dibujando"
                                className="w-full aspect-square object-cover"
                                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. PROBLEM & SOLUTION */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#171111]">¿Te gustaría dibujar pero no sabes por dónde empezar?</h2>
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <div className="flex flex-col items-center gap-3">
                            <span className="material-symbols-outlined text-primary text-4xl">block</span>
                            <p className="font-medium">Sientes que no tienes "talento" innato</p>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <span className="material-symbols-outlined text-primary text-4xl">history_edu</span>
                            <p className="font-medium">Nunca aprendiste técnicas básicas</p>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <span className="material-symbols-outlined text-primary text-4xl">schedule</span>
                            <p className="font-medium">No encuentras el tiempo para empezar</p>
                        </div>
                    </div>
                    <div className="bg-background-light p-8 rounded-2xl border-l-8 border-primary shadow-sm inline-block text-left">
                        <p className="text-xl italic text-gray-700">
                            "En <strong>DibujArte</strong> te enseñamos paso a paso, desde lo más básico hasta técnicas avanzadas, con atención 100% personalizada para que descubras que el arte es una habilidad que todos pueden desarrollar."
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. CORE BENEFITS */}
            <section className="py-20 px-4 bg-[#faf9f6]" id="beneficios">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-[#171111]">¿Por qué elegir nuestro estudio?</h2>
                        <div className="w-20 h-1 bg-primary mx-auto"></div>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform">
                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined">person</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">100% Personalizado</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Avanzamos a tu propio ritmo, enfocándonos en tus intereses y estilo personal.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform">
                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined">palette</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Múltiples Técnicas</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Óleo, acuarela, carboncillo, acrílico y técnicas mixtas para una formación completa.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform">
                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined">groups</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Para todas las edades</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Grupos divididos por niveles y edades: Niños (5+), jóvenes y adultos.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform">
                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined">calendar_month</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Horarios Flexibles</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Clases disponibles los Viernes y Sábados para adaptarse a tu rutina semanal.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. METHODOLOGY */}
            <section className="py-20 bg-white" id="metodologia">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-[#171111]">Nuestra Metodología</h2>
                        <p className="text-gray-600">Un camino estructurado diseñado para el éxito artístico</p>
                    </div>
                    <div className="relative flex flex-col md:flex-row justify-between gap-8">
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/20 -translate-y-1/2 -z-10"></div>
                        {[{ num: 1, t: "Evaluación Inicial", d: "Identificamos tu nivel y tus objetivos creativos." },
                        { num: 2, t: "Fundamentos", d: "Luz, sombra, perspectiva y anatomía básica." },
                        { num: 3, t: "Técnicas Pro", d: "Uso avanzado de materiales y teoría del color." },
                        { num: 4, t: "Proyecto Final", d: "Creación de una obra original de principio a fin." },
                        { num: 5, t: "Seguimiento", d: "Feedback constante para tu crecimiento continuo." }].map((step) => (
                            <div key={step.num} className="flex-1 bg-white p-6 rounded-xl shadow-sm text-center relative border border-gray-100">
                                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4">{step.num}</div>
                                <h4 className="font-bold mb-2 text-[#171111]">{step.t}</h4>
                                <p className="text-xs text-gray-500">{step.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. GALLERY PREVIEW */}
            <section className="py-20 bg-[#faf9f6]" id="galeria-preview">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 items-center mb-12 gap-8">
                        <div>
                            <h2 className="text-3xl font-bold mb-4 text-[#171111]">Nuestros alumnos crean orgullo</h2>
                            <p className="text-gray-600">No solo aprenden técnicas; descubren una nueva forma de ver el mundo. Mira algunos de los trabajos realizados en nuestro estudio.</p>
                        </div>
                        <div className="flex justify-start md:justify-end">
                            <button
                                onClick={onNavigateGallery}
                                className="text-primary font-bold flex items-center gap-2 hover:underline bg-primary/5 px-4 py-2 rounded-full hover:bg-primary/10 transition-all"
                            >
                                Explorar galería completa
                                <span className="material-symbols-outlined">arrow_right_alt</span>
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {previewGallery.map((art) => (
                            <div key={art.id} className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-200">
                                <img
                                    src={art.imageUrl}
                                    alt={art.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                    <span className="text-white text-sm font-bold">{art.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. TESTIMONIALS */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 text-center mb-12">
                    <h2 className="text-3xl font-bold text-[#171111]">Lo que dicen nuestros artistas</h2>
                </div>
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((t, idx) => (
                        <div key={t.id} className={`bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md ${idx === 1 ? 'md:scale-105 ring-1 ring-primary/5 shadow-lg' : ''}`}>
                            <div className="flex text-yellow-400 mb-4">
                                {[...Array(t.rating)].map((_, i) => <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>)}
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed italic">"{t.text}"</p>
                            <div className="flex items-center gap-3">
                                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-xs">{t.initials}</div>
                                <div className="text-left">
                                    <p className="font-bold text-sm text-gray-900">{t.name}</p>
                                    <p className="text-xs text-gray-500">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 7. PRICING */}
            <section className="py-20 bg-[#faf9f6]" id="precios">
                <div className="max-w-3xl mx-auto px-4">
                    <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border-t-8 border-primary transform hover:scale-[1.01] transition-transform duration-300">
                        <div className="p-12 text-center">
                            <h2 className="text-2xl font-bold mb-2 text-[#171111]">Plan Mensual Estándar</h2>
                            <div className="flex items-center justify-center gap-1 my-6">
                                <span className="text-2xl font-bold text-gray-400">Gs.</span>
                                <span className="text-6xl font-black text-primary">120.000</span>
                            </div>
                            <div className="space-y-4 mb-10 text-left max-w-sm mx-auto">
                                {[
                                    "Clases semanales personalizadas",
                                    "Acceso a todos los materiales",
                                    "Exposiciones de alumnos",
                                    "Sin costo de matrícula"
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-green-500">check_circle</span>
                                        <span className="text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                            <button
                                onClick={onOpenBooking}
                                className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-xl shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors"
                            >
                                Quiero inscribirme ahora
                            </button>
                            <p className="mt-4 text-xs text-gray-400 italic">Paga mes a mes, sin contratos de permanencia.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. ABOUT US */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="aspect-square bg-canvas rounded-full overflow-hidden border-8 border-white shadow-xl p-4">
                            {/* PLACEHOLDER: Replace src with your uploaded image URL */}
                            <img
                                src={heroImage}
                                alt="Director de DibujArte"
                                className="w-full h-full object-cover rounded-full object-[center_15%]"
                            />
                        </div>
                        <div className="absolute -bottom-6 right-0 md:bottom-10 bg-primary text-white p-6 rounded-2xl shadow-xl max-w-[200px]">
                            <p className="font-bold text-2xl">10+</p>
                            <p className="text-xs uppercase tracking-widest">Años de experiencia compartiendo arte</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-4xl font-black mb-6 text-[#171111]">Nuestra Historia</h2>
                        <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                            DibujArte nació del sueño de crear un espacio donde la expresión artística no fuera exclusiva de unos pocos "talentosos", sino una herramienta de felicidad y crecimiento para todos.
                        </p>
                        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                            Nuestra misión es guiarte en el descubrimiento de tu propio lenguaje visual, proporcionándote las herramientas técnicas necesarias para que tus ideas cobren vida en el lienzo.
                        </p>
                        <div className="flex gap-4">
                            {[{ icon: 'favorite', label: 'Pasión' }, { icon: 'auto_awesome', label: 'Magia' }, { icon: 'diversity_3', label: 'Comunidad' }].map((item, i) => (
                                <div key={i} className="text-center">
                                    <span className="material-symbols-outlined text-primary text-4xl mb-2">{item.icon}</span>
                                    <p className="text-xs font-bold uppercase">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. LOCATION */}
            <section className="py-20 bg-[#faf9f6]">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-12 text-[#171111]">¿Dónde estamos?</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="text-left space-y-6">
                            <div className="flex items-start gap-4">
                                <span className="material-symbols-outlined text-primary">location_on</span>
                                <div>
                                    <p className="font-bold text-xl">Dirección</p>
                                    <p className="text-gray-600">Ruta N° 1 – Coronel Bogado, Paraguay</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="material-symbols-outlined text-primary">call</span>
                                <div>
                                    <p className="font-bold text-xl">Teléfono</p>
                                    <p className="text-gray-600">0981 185 887</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="material-symbols-outlined text-primary">schedule</span>
                                <div>
                                    <p className="font-bold text-xl">Horarios</p>
                                    <p className="text-gray-600">Viernes: 14:00 - 18:00<br />Sábados: 08:00 - 17:00</p>
                                </div>
                            </div>
                            <a
                                href="https://www.google.com/maps/dir/?api=1&destination=-27.165211,-56.230180"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary text-white px-8 py-3 rounded-xl font-bold inline-flex items-center gap-2 hover:bg-primary/90 transition-all hover:scale-105"
                            >
                                Cómo llegar <span className="material-symbols-outlined">directions</span>
                            </a>
                        </div>
                        <div className="rounded-3xl overflow-hidden h-[400px] border-4 border-white shadow-xl">
                            <iframe
                                title="Ubicación DibujArte"
                                src="https://maps.google.com/maps?q=-27.165211,-56.230180&z=15&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* 10. FAQ */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center text-[#171111]">Preguntas Frecuentes</h2>
                    <div className="space-y-4">
                        {FAQS.map((faq, i) => (
                            <details key={i} className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                                <summary className="flex justify-between items-center p-6 cursor-pointer font-bold list-none text-[#171111]">
                                    {faq.question}
                                    <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                                </summary>
                                <div className="px-6 pb-6 text-gray-600">
                                    {faq.answer}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* 11. CTA */}
            <section className="py-20 px-4 bg-[#faf9f6]">
                <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <h2 className="text-4xl md:text-6xl font-black mb-8">Es tu momento de crear</h2>
                    <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">Únete a nuestra comunidad y descubre el artista que llevas dentro. No dejes para mañana el sueño que puedes empezar hoy.</p>
                    <a
                        href="https://wa.me/595981185887?text=Hola!%20Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20las%20clases%20de%20arte."
                        target="_blank"
                        className="group relative inline-flex items-center gap-6 bg-[#25D366] text-white px-12 py-6 rounded-2xl font-black text-2xl shadow-2xl hover:scale-105 transition-all overflow-hidden"
                    >
                        {/* Decorative background text */}
                        <div className="absolute left-[-10%] top-1/2 -translate-y-1/2 text-8xl font-black opacity-10 select-none pointer-events-none uppercase tracking-tighter">
                            WHATSAPP
                        </div>

                        {/* Animated shine effect */}
                        <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-[100%]"></div>

                        <div className="relative flex items-center gap-4">
                            <div className="size-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:rotate-12 transition-transform">
                                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                            </div>
                            <span>Contáctanos: 0981 185 887</span>
                        </div>
                    </a>
                </div>
            </section>

            <FloatingWhatsapp />
        </div>
    );
};

export default LandingPage;