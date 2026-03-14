// src/app/page.tsx
import { getEventos } from '../services/events';
import Header from '../components/Header';
import Calendar from '../components/Calendar';
import EventRequestForm from '../components/EventRequestForm';
import About from '../components/About';

export default async function HomePage() {
  const eventos = await getEventos();

  return (
    <main className="min-h-screen selection:bg-amber-500 selection:text-black">
      
      {/* Header Fijo */}
      <Header />

      {/* Hero / Introducción rápida */}
      <section className="pt-52 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px] -mr-96 -mt-96 opacity-50"></div>
        <div className="max-w-7xl mx-auto text-center md:text-left">
           <span className="text-amber-500 font-black uppercase text-[10px] tracking-[0.6em] ml-2 block mb-6 animate-in slide-in-from-left duration-700">Comunidad de Danza México</span>
           <h1 className="text-6xl md:text-[10rem] font-black italic text-white uppercase tracking-tighter leading-[0.8] mb-12 animate-in slide-in-from-left duration-1000">
             CALENDARIO <br /> <span className="text-zinc-500" >De Eventos</span><span> 2026</span>
           </h1>
        </div>
      </section>

      {/* 1. CALENDARIO */}
      <section id="calendario" className="pb-32 px-4 relative z-10">
        <Calendar eventos={eventos} />
      </section>

      {/* 2. SOLICITUD DE EVENTOS (Estilo oscuro unificado) */}
      <section id='form'>
        <EventRequestForm />
      </section>

      {/* 3. ACERCA DE */}
      <About />

      {/* Footer Unificado con Header */}
      <footer className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] -mr-48 -mb-48 opacity-40"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="flex flex-col items-center md:items-start gap-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center font-black text-black italic text-xl shadow-lg shadow-amber-500/20">D</div>
              <span className="font-black italic text-white text-3xl uppercase tracking-tighter">DANCE<span className="text-amber-500">MEX</span></span>
            </div>
            <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.4em]">Hecho para la comunidad, por la comunidad</p>
          </div>
          
          <div className="flex gap-16 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">
            <a href="#" className="hover:text-amber-500 transition-colors">Instagram</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Facebook</a>
            <a href="#" className="hover:text-amber-500 transition-colors">TikTok</a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-[10px] text-zinc-700 font-bold uppercase tracking-[0.2em] mb-3">
              &copy; {new Date().getFullYear()} DANCEMEX MEXICO.
            </p>
            <div className="flex gap-4 justify-center md:justify-end text-zinc-900 font-black italic text-xs tracking-widest select-none">
              <span>BBOY</span>
              <span>POPPIN</span>
              <span>HOUSE</span>
              <span>WAACK</span>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
