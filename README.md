# CrisCor — Portfolio de Cristian Corrales

Portfolio personal (Data Analyst / Business Intelligence) construido con:

- Next.js 14 (App Router)
- React 18 + TypeScript
- TailwindCSS
- Framer Motion

## Variables de entorno

Copia `.env.example` como `.env.local` y agrega tu API key de [Resend](https://resend.com)
para que el formulario de contacto pueda enviar correos:

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxx
```

En Vercel, agrega la misma variable en **Project Settings → Environment Variables**.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build de producción

```bash
npm run build
npm run start
```

## Pendientes de contenido

Todo el contenido placeholder (foto, textos de "Sobre mí", proyectos, logros,
enlaces de contacto y CV) vive en `lib/data.ts` — reemplázalo ahí antes de
publicar.
