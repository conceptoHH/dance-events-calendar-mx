// src/components/About.tsx
export default function About() {
  return (
    <section id="acerca-de" className="py-40 px-4 md:px-10 bg-black relative overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] -ml-64 -mt-64"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center relative z-10">
        
        <div className="relative group">
          <div className="w-full aspect-square bg-amber-500 rounded-[3rem] -rotate-3 p-1 shadow-2xl shadow-amber-500/10 transition-transform group-hover:rotate-0 duration-700">
             <div className="w-full h-full bg-zinc-950 rounded-[2.5rem] p-10 flex flex-col justify-end rotate-3 group-hover:rotate-0 transition-transform duration-700 overflow-hidden relative">
                <span className="text-zinc-900 font-black text-[12rem] absolute -top-16 -right-16 leading-none select-none italic">DANCE</span>
                <p className="relative z-10 text-white text-4xl font-black italic uppercase leading-none mb-6 tracking-tighter">
                  CONECTANDO A LA <br /> ESCENA <span className="text-amber-500">MEXICANA</span>.
                </p>
                <div className="relative z-10 w-24 h-2.5 bg-amber-500 rounded-full" />
             </div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="space-y-4">
            <span className="text-amber-500 font-black uppercase text-[10px] tracking-[0.5em]">Nuestra Misión</span>
            <h2 className="text-5xl md:text-7xl font-black italic text-white tracking-tighter uppercase leading-[0.85]">
              IMPULSANDO <br /> LA <span className="text-zinc-800">CULTURA</span> <br /> URBANA.
            </h2>
          </div>
          
          <div className="space-y-8 text-zinc-500 text-lg font-medium leading-relaxed max-w-lg italic">
            <p>
              <strong className="text-white not-italic">Dance Mex</strong> es el punto de encuentro definitivo. Centralizamos la información para que nunca más te pierdas una batalla o taller.
            </p>
            <p>
              Facilitamos la visibilidad para organizadores y brindamos a los bailarines una herramienta profesional para planificar su carrera.
            </p>
            
            <div className="flex gap-14 pt-8">
              <div className="flex flex-col gap-1">
                <span className="text-5xl font-black text-white italic tracking-tighter uppercase">+100</span>
                <span className="text-[10px] uppercase tracking-[0.3em] font-black text-zinc-700">Eventos</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-5xl font-black text-white italic tracking-tighter uppercase">32</span>
                <span className="text-[10px] uppercase tracking-[0.3em] font-black text-zinc-700">Estados</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
