// src/components/Hero.tsx
'use client';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Decorativo Inmersivo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505]" />
        <div className="w-full h-full flex items-center justify-center text-zinc-900/10 font-black text-[15vw] md:text-[20vw] uppercase italic select-none leading-none tracking-tighter">
          DANCE MEX
        </div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-[0.4em] mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse shadow-[0_0_8px_#fbbf24]"></span>
          Comunidad & Escena Nacional
        </div>
        
        <h1 className="text-7xl md:text-[11rem] font-black italic text-white tracking-tighter leading-[0.85] mb-12 uppercase animate-in fade-in slide-in-from-bottom-8 duration-1000">
          EL CALENDARIO <br />
          <span className="text-zinc-800 not-italic">DE</span> <span className="text-amber-500">DANZA</span>
        </h1>
        
        <p className="text-zinc-400 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-16 leading-relaxed opacity-80 animate-in fade-in duration-1000 delay-300">
          Encuentra todas las batallas, talleres y sociales en un solo lugar. Conecta con la escena más vibrante de México.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 w-full sm:w-auto animate-in fade-in duration-1000 delay-500">
          <button 
            onClick={() => scrollToSection('calendario')}
            className="group px-12 py-5 bg-white text-black font-black rounded-2xl hover:bg-amber-500 transition-all uppercase text-xs tracking-[0.2em] shadow-2xl shadow-white/5 flex items-center justify-center gap-3 active:scale-95"
          >
            Ver Calendario
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-1 transition-transform"><path d="m7 7 5 5 5-5"/><path d="m7 13 5 5 5-5"/></svg>
          </button>
          
          <button 
            onClick={() => scrollToSection('publicar')}
            className="px-12 py-5 bg-zinc-900/50 text-white font-black rounded-2xl hover:bg-zinc-800 transition-all uppercase text-xs tracking-[0.2em] border border-zinc-800 backdrop-blur-md active:scale-95"
          >
            Publicar Mi Evento
          </button>
        </div>
      </div>

      {/* Decoración lateral */}
      <div className="absolute bottom-20 left-10 hidden lg:flex flex-col gap-4 text-zinc-800 text-[10px] font-black uppercase tracking-[0.8em] [writing-mode:vertical-lr] rotate-180">
        BATALLAS • TALLERES • SOCIALES
      </div>
    </section>
  );
}
