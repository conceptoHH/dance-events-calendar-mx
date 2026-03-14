# Dance Events Calendar MX 
Este es un proyecto experimental desarrollado bajo el concepto de Vibe Coding. El objetivo principal de este repositorio es explorar y poner a prueba las capacidades de programación asistida exclusivamente por modelos de lenguaje (LLMs) y herramientas de IA generativa.

## Propósito del Proyecto
Este no es un proyecto de desarrollo convencional. Se trata de un experimento para:
1. Explorar el Vibe Coding: Construir una aplicación funcional delegando la arquitectura y la implementación lógica a la IA.
2. Finalizar el proyecto que tenia meses sin tocar y no me acordaba como funcionaba

## Estructura del Monorepo
El proyecto está dividido en dos grandes bloques:

### Backend (dancemx-back)
* Framework: Strapi (Headless CMS)
* Lenguaje: TypeScript
* Base de Datos: SQLite (para desarrollo rápido)
* Funcionalidad: Gestión de eventos, tipos de baile, fechas y localizaciones.

### Frontend (evento-web)
* Framework: Next.js (App Router)
* Lenguaje: TypeScript
* Funcionalidad: Interfaz de calendario interactiva y formularios de registro de eventos.

## Notas sobre Vibe Coding
* Implementación: La mayor parte del código ha sido generado, refactorizado y depurado mediante prompts y agentes de IA.
* Arquitectura: Las decisiones estructurales fueron guiadas por el flujo de trabajo asistido, priorizando la iteración rápida sobre la planificación manual exhaustiva.
* Estado: Este es un entorno de pruebas en constante evolución para medir la eficacia de las herramientas de asistencia actuales.

## Instalación Local

### Requisitos
* Node.js (v18+)
* npm

### Pasos
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/conceptoHH/dance-events-calendar-mx.git
   cd dance-events-calendar-mx
   ```
2. Configurar Backend:
   ```bash
   cd dancemx-back
   npm install
   npm run develop
   ```
3. Configurar Frontend:
   ```bash
   cd ../evento-web
   npm install
   npm run dev
   ```

## Licencia
Proyecto de código abierto creado con fines educativos y experimentales.
