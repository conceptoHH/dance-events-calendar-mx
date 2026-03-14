import EventRequestForm from "./EventRequestForm";

// src/components/Header.tsx
export default function Header() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-5 flex justify-between items-center bg-black/40 backdrop-blur-2xl border-b border-white/5 transition-all">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center font-black text-black italic text-2xl shadow-lg shadow-amber-500/20">
          D
        </div>
        <span className="font-black italic tracking-tighter text-white text-2xl uppercase">
          DANCE<span className="text-amber-500">MEX</span>
        </span>
      </div>
      
      <div className="hidden md:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
        <a href="#" className="hover:text-amber-500 transition-colors">Inicio</a>
        <a href="#calendario" className="hover:text-white transition-colors">Calendario</a>
        <a href="#acerca-de" className="hover:text-white transition-colors">Comunidad</a>
        <a href="#form" className="px-6 py-2.5 bg-amber-500 text-black rounded-full hover:bg-amber-400 transition-all font-black shadow-xl shadow-amber-500/10">
          Publicar Evento
        </a>     

      </div>
    </nav>
  );
}
