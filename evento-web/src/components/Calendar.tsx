// src/components/Calendar.tsx
'use client';
import { useState } from 'react';
import { IEvento } from '../services/events';

interface CalendarProps {
  eventos: IEvento[];
}

export default function Calendar({ eventos }: CalendarProps) {
  const [viewDate, setViewDate] = useState(new Date());
  const currentMonth = viewDate.getMonth();
  const currentYear = viewDate.getFullYear();

  const nextMonth = () => setViewDate(new Date(currentYear, currentMonth + 1, 1));
  const prevMonth = () => setViewDate(new Date(currentYear, currentMonth - 1, 1));

  const nombreMes = new Intl.DateTimeFormat('es-MX', { month: 'long' }).format(viewDate).toUpperCase();
  const primerDiaMes = new Date(currentYear, currentMonth, 1).getDay();
  const startingOffset = primerDiaMes === 0 ? 6 : primerDiaMes - 1;
  const diasEnMes = new Date(currentYear, currentMonth + 1, 0).getDate();
  const arrayDias = Array.from({ length: diasEnMes }, (_, i) => i + 1);

  const eventosDelMes = eventos.filter(evento => {
    const d = new Date(evento.fecha);
    return d.getUTCMonth() === currentMonth && d.getUTCFullYear() === currentYear;
  });

  const eventosPorDia = eventosDelMes.reduce((acc, evento) => {
    const diaEvento = new Date(evento.fecha).getUTCDate();
    if (!acc[diaEvento]) acc[diaEvento] = [];
    acc[diaEvento].push(evento);
    return acc;
  }, {} as Record<number, IEvento[]>);

  const diasSemana = ['LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB', 'DOM'];

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-12 bg-zinc-950/40 backdrop-blur-2xl rounded-[3rem] shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/5 font-inter">
      
      <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8 px-6">
        <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter text-white select-none">
          {nombreMes} <span className="text-zinc-800 not-italic">{currentYear}</span>
        </h2>

        <div className="flex items-center gap-4 bg-zinc-900/50 p-3 rounded-[2rem] shadow-xl border border-white/5">
          <button onClick={prevMonth} className="p-4 hover:bg-zinc-800 rounded-2xl transition-all text-amber-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <div className="w-[1px] h-8 bg-zinc-800"></div>
          <button onClick={nextMonth} className="p-4 hover:bg-zinc-800 rounded-2xl transition-all text-amber-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-8 border-b border-white/5 pb-6">
        {diasSemana.map(dia => (
          <div key={dia} className="text-center font-black text-white text-sm tracking-[0.4em] uppercase">
            {dia}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2 sm:gap-4">
        {Array.from({ length: startingOffset }).map((_, i) => (
          <div key={`empty-${i}`} className="h-28 sm:h-48 bg-zinc-900/10 rounded-[2rem] border border-zinc-900/20" />
        ))}

        {arrayDias.map(dia => {
          const eventosDia = eventosPorDia[dia] || [];
          const esHoy = new Date().getUTCDate() === dia && new Date().getMonth() === currentMonth && new Date().getFullYear() === currentYear;
          
          return (
            <div key={dia} className={`group h-28 sm:h-48 border-2 rounded-[2rem] p-4 transition-all duration-500 ${eventosDia.length > 0 ? 'bg-zinc-900/40 border-zinc-800 shadow-xl' : 'bg-transparent border-zinc-900/30 hover:border-zinc-800'}`}>
              <div className="flex justify-between items-start">
                <span className={`text-2xl font-black italic transition-colors ${esHoy ? 'text-white' : 'text-white group-hover:text-amber-500'}`}>{dia}</span>
                {esHoy && <div className="w-2.5 h-2.5 bg-amber-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)] mt-2 mr-1 animate-pulse"></div>}
              </div>
              <div className="mt-2 space-y-1.5 overflow-y-auto max-h-[70%] no-scrollbar font-inter">
                {eventosDia.map(evento => (
                  <a
                    key={evento.id}
                    href={evento.enlace_instagram}
                    target="_blank"
                    className="flex flex-col p-2.5 rounded-2xl text-[10px] font-bold leading-tight uppercase truncate text-white transition-all hover:scale-105 hover:brightness-110 shadow-lg border border-white/5"
                    style={{ backgroundColor: evento.color_evento || '#333' }}
                  >
                    {evento.nombre}
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
