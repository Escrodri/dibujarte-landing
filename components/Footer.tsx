import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
    return (
        <footer className="mt-24 border-t border-[#171111]/10 bg-background-dark py-16 text-white">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <Logo className="h-8 w-8 text-primary" />
                            <h3 className="text-xl font-bold">DibujArte</h3>
                        </div>
                        <p className="text-sm leading-relaxed text-white/60">
                            Formando artistas apasionados desde 2016. Nuestra misión es despertar el genio creativo que vive en cada persona.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="rounded-lg bg-white/5 p-2 text-white transition-colors hover:bg-primary">
                                <span className="material-symbols-outlined">share</span>
                            </a>
                            <a href="#" className="rounded-lg bg-white/5 p-2 text-white transition-colors hover:bg-primary">
                                <span className="material-symbols-outlined">photo_camera</span>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Contacto</h4>
                        <ul className="flex flex-col gap-4 text-sm text-white/70">
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">location_on</span>
                                Ruta N° 1 - Cnel. Bogado
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">call</span>
                                <a href="https://wa.me/595981185887?text=Hola!%20Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20las%20clases%20de%20arte." target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                                    +595 981 185 887
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">mail</span>
                                hola@dibujarte.es
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Newsletter</h4>
                        <p className="text-sm text-white/70">Recibe consejos de dibujo y noticias sobre nuestras próximas exposiciones.</p>
                        <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
                            <input className="w-full rounded-lg border-white/10 bg-white/5 px-4 py-2 text-sm focus:border-primary focus:ring-primary text-white" placeholder="Tu email" type="email" />
                            <button className="w-full rounded-lg bg-primary py-2 text-sm font-bold text-white transition-colors hover:bg-primary/80" type="submit">Suscribirse</button>
                        </form>
                    </div>
                </div>
                <div className="mt-16 flex flex-col items-center justify-between border-t border-white/10 pt-8 md:flex-row">
                    <p className="text-xs text-white/40">© 2016 DibujArte Escuela de Arte. Todos los derechos reservados.</p>
                    <div className="mt-4 flex gap-6 md:mt-0">
                        <a className="text-xs text-white/40 hover:text-primary" href="#">Política de Privacidad</a>
                        <a className="text-xs text-white/40 hover:text-primary" href="#">Términos de Servicio</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
