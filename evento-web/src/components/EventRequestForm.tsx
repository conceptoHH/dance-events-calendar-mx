// src/components/EventRequestForm.tsx
'use client';
import { useState } from 'react';

export default function EventRequestForm() {
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cargando, setCargando] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setCargando(true);

    const formData = new FormData(e.currentTarget);
    
    const data = {
      data: {
        nombre: formData.get('nombre') as string,
        lugar: formData.get('lugar') as string,
        fecha: formData.get('fecha') as string,
        detalles: formData.get('detalles') as string || "",
        enlace_instagram: formData.get('enlace') as string,
        color_evento: '#f59e0b', 
        publishedAt: null, 
      }
    };

    try {
      const res = await fetch('http://localhost:1337/api/eventos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setEnviado(true);
      } else {
        const d = await res.json();
        setError(d.error?.message || "Error al enviar.");
      }
    } catch (err) {
      setError("Error de conexión.");
    } finally {
      setCargando(false);
    }
  };

  return (
    <section id="publicar" className="py-24 px-4 font-inter">
      <div className="max-w-4xl mx-auto min-h-[600px] flex items-center justify-center">
        
        {enviado ? (
          <div className="w-full bg-zinc-950/40 backdrop-blur-2xl p-12 rounded-[3rem] border border-white/5 shadow-2xl text-center animate-in zoom-in duration-500 font-plus-jakarta">
             <div className="w-24 h-24 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-amber-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
             </div>
             <h3 className="text-4xl font-black text-white mb-4 tracking-tighter italic uppercase">¡RECIBIDO!</h3>
             <p className="text-zinc-400 text-lg max-w-md mx-auto leading-relaxed font-medium font-inter">Tu solicitud ha sido enviada. El administrador revisará tu evento pronto.</p>
             <button 
                onClick={() => setEnviado(false)} 
                className="mt-12 px-10 py-4 bg-white text-black rounded-2xl font-black uppercase text-xs tracking-[0.2em] hover:bg-amber-500 transition-all shadow-lg shadow-white/5 font-plus-jakarta"
             >
                Enviar otro
             </button>
          </div>
        ) : (
          <div className="w-full bg-zinc-950/40 backdrop-blur-2xl p-8 md:p-16 rounded-[3rem] shadow-2xl border border-white/5 font-plus-jakarta">
            <div className="mb-12 text-center">
              <span className="text-amber-500 font-black uppercase text-xs tracking-widest bg-amber-500/10 px-6 py-2 rounded-full border border-amber-500/20">Registra tu Evento</span>
              <h2 className="text-5xl md:text-6xl font-black text-white italic tracking-tighter mt-8 uppercase leading-none">
                SÚMATE A LA <span className="text-amber-500 underline underline-offset-8 decoration-8 decoration-amber-500/20">ESCENA</span>
              </h2>
            </div>

            {error && <div className="mb-8 p-4 bg-red-500/10 text-red-500 rounded-2xl text-[10px] font-black uppercase border border-red-500/20 tracking-widest font-inter">{error}</div>}

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col gap-4 font-inter">
                <label className="text-[10px] font-black uppercase text-zinc-500 ml-4 tracking-[0.3em]">Nombre del Evento</label>
                <input name="nombre" required className="bg-zinc-900/50 border-2 border-zinc-800 rounded-3xl px-8 py-5 focus:outline-none focus:border-amber-500 focus:bg-zinc-800 transition-all text-white font-bold placeholder:text-zinc-700 shadow-inner" placeholder="P.EJ. URBAN CUP" />
              </div>
              
              <div className="flex flex-col gap-4 font-inter">
                <label className="text-[10px] font-black uppercase text-zinc-500 ml-4 tracking-[0.3em]">Fecha</label>
                <input name="fecha" type="date" required className="bg-zinc-900/50 border-2 border-zinc-800 rounded-3xl px-8 py-5 focus:outline-none focus:border-amber-500 focus:bg-zinc-800 transition-all text-white font-bold" />
              </div>

              <div className="flex flex-col gap-4 md:col-span-2 font-inter">
                <label className="text-[10px] font-black uppercase text-zinc-500 ml-4 tracking-[0.3em]">Lugar / Ciudad</label>
                <input name="lugar" required className="bg-zinc-900/50 border-2 border-zinc-800 rounded-3xl px-8 py-5 focus:outline-none focus:border-amber-500 focus:bg-zinc-800 transition-all text-white font-bold shadow-inner" placeholder="MÉXICO CITY" />
              </div>

              <div className="flex flex-col gap-4 md:col-span-2 font-inter">
                <label className="text-[10px] font-black uppercase text-zinc-500 ml-4 tracking-[0.3em]">Instagram Link</label>
                <input name="enlace" required className="bg-zinc-900/50 border-2 border-zinc-800 rounded-3xl px-8 py-5 focus:outline-none focus:border-amber-500 focus:bg-zinc-800 transition-all text-white font-bold shadow-inner" placeholder="@EVENTO" />
              </div>

              <button 
                type="submit" 
                disabled={cargando}
                className="md:col-span-2 bg-white text-black font-black py-7 rounded-3xl shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95 uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-4 hover:bg-amber-500 font-plus-jakarta"
              >
                {cargando ? "ENVIANDO..." : "SOLICITAR PUBLICACIÓN"}
              </button>
            </form>
          </div>
        )}

      </div>
    </section>
  );
}
