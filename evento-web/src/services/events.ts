// src/services/events.ts

export interface IEvento {
  id: number;
  documentId: string;
  nombre: string;
  lugar: string;
  fecha: string; // Formato YYYY-MM-DD de Strapi
  detalles: string;
  color_evento: string;
  enlace_instagram?: string;
  imagen?: {
    url: string;
  };
}

interface IApiResponse {
  data: IEvento[];
}

export async function getEventos() {
  const STRAPI_URL = 'http://localhost:1337'; // Ajustar según sea necesario
  
  try {
    // Pedimos los campos de imagen y ordenamos por fecha
    const res = await fetch(`${STRAPI_URL}/api/eventos?populate=*&sort=fecha:asc`, {
      cache: 'no-store',
    });

    if (!res.ok) throw new Error('Falló al obtener eventos');
    
    const respuesta: IApiResponse = await res.json();
    return respuesta.data;
  } catch (error) {
    console.error("Error en getEventos:", error);
    return [];
  }
}
