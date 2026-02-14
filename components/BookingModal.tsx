import React, { useState } from 'react';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        interest: 'General'
    });

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const message = `Hola, mi nombre es ${formData.name}. Me gustaría reservar un cupo o recibir más información sobre las clases de ${formData.interest}.`;
        const whatsappUrl = `https://wa.me/595981185887?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        onClose();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 transform transition-all animate-in fade-in zoom-in duration-300">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors bg-gray-100 rounded-full p-2"
                >
                    <span className="material-symbols-outlined">close</span>
                </button>

                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="material-symbols-outlined text-3xl">calendar_add_on</span>
                    </div>
                    <h3 className="text-2xl font-black text-[#171111] mb-2">Reserva tu Cupo</h3>
                    <p className="text-gray-500 text-sm">Déjanos tus datos y te contactaremos por WhatsApp para confirmar tu asistencia.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">Nombre Completo</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-300"
                            placeholder="Ej. Juan Pérez"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-1">WhatsApp / Teléfono</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-300"
                            placeholder="Ej. 0981 123 456"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="interest" className="block text-sm font-bold text-gray-700 mb-1">Interés Principal</label>
                        <div className="relative">
                            <select
                                id="interest"
                                name="interest"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none bg-white text-gray-600"
                                value={formData.interest}
                                onChange={handleChange}
                            >
                                <option value="Niños (5-12 años)">Clases para Niños</option>
                                <option value="Adolescentes">Clases para Adolescentes</option>
                                <option value="Adultos">Clases para Adultos</option>
                                <option value="Óleo">Técnica Óleo</option>
                                <option value="Acuarela">Técnica Acuarela</option>
                                <option value="General">Información General</option>
                            </select>
                            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">expand_more</span>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="group relative w-full overflow-hidden rounded-2xl bg-[#25D366] text-white shadow-xl transition-all hover:scale-[1.02] hover:shadow-green-500/40 active:scale-[0.98] mt-6"
                    >
                        {/* Decorative background text for "Premium" feel */}
                        <div className="absolute left-[-5%] top-1/2 -translate-y-1/2 text-7xl font-black opacity-10 select-none pointer-events-none uppercase tracking-tighter">
                            WHATSAPP
                        </div>

                        {/* Animated shine effect */}
                        <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-[100%]"></div>

                        <div className="relative flex items-center justify-center gap-4 py-5 px-6">
                            <div className="size-11 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:rotate-12 transition-transform">
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-7 h-7 fill-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                            </div>
                            <div className="flex flex-col items-start leading-none">
                                <span className="text-[10px] font-bold uppercase tracking-widest opacity-70 mb-1">Finalizar Reserva</span>
                                <span className="text-xl font-black">Continuar en WhatsApp</span>
                            </div>
                        </div>
                    </button>
                </form>

                <p className="text-xs text-center text-gray-400 mt-6">
                    Tus datos están seguros. Solo los usaremos para contactarte sobre las clases.
                </p>
            </div>
        </div>
    );
};

export default BookingModal;
