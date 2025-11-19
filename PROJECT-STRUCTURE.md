# 📦 Estructura del Proyecto CCHIA Link-in-Bio

```
cchia-linkinbio/
│
├── 📄 index.html                    # Punto de entrada HTML
├── 📄 package.json                  # Dependencias y scripts
├── 📄 vite.config.ts                # Configuración de Vite
├── 📄 tailwind.config.js            # Configuración de Tailwind CSS
├── 📄 tsconfig.json                 # Configuración de TypeScript
├── 📄 postcss.config.js             # Configuración de PostCSS
│
├── 📄 README.md                     # ⭐ Documentación principal
├── 📄 QUICKSTART.md                 # ⚡ Guía de inicio rápido
├── 📄 CUSTOMIZATION.md              # 🎨 Guía de personalización
├── 📄 DEPLOYMENT-CHECKLIST.md       # ✅ Checklist de despliegue
│
├── 📄 .gitignore                    # Archivos ignorados por Git
├── 📄 netlify.toml                  # Configuración para Netlify
├── 📄 vercel.json                   # Configuración para Vercel
│
├── 📁 public/                       # Archivos públicos (servidos tal cual)
│   ├── 📄 favicon.svg              # ⭐ Favicon del sitio
│   ├── 📄 manifest.json            # PWA manifest
│   ├── 📄 robots.txt               # SEO - Instrucciones para bots
│   └── 📄 OG-IMAGE-README.md       # Instrucciones para imagen OG
│   └── 🖼️ og-cchia.jpg             # ❌ DEBES CREAR ESTA IMAGEN
│
└── 📁 src/                          # Código fuente
    │
    ├── 📄 main.tsx                 # ⭐ Entry point de React
    ├── 📄 App.tsx                  # ⭐ Componente principal
    ├── 📄 vite-env.d.ts            # Tipos de Vite
    │
    ├── 📁 components/               # Componentes reutilizables
    │   ├── 📄 LinkCard.tsx         # ⭐ Card de enlace
    │   ├── 📄 Logo.tsx             # ⭐ Logo SVG responsive
    │   └── 📄 Tooltip.tsx          # Tooltip accesible
    │
    ├── 📁 config/                   # ⭐ ARCHIVOS EDITABLES
    │   ├── 📄 brand.ts             # 🎨 Colores, textos, email
    │   └── 📄 links.ts             # 🔗 Configuración de enlaces
    │
    └── 📁 styles/
        └── 📄 index.css            # ⭐ Estilos globales + Tailwind

```

---

## 🎯 Archivos Clave para Editar

### Configuración (Más Importantes)

| Archivo | Propósito | Frecuencia de Edición |
|---------|-----------|----------------------|
| **`src/config/brand.ts`** | Colores, nombre, claim, email | ⭐⭐⭐ Alta |
| **`src/config/links.ts`** | Enlaces y botones | ⭐⭐⭐ Alta |
| **`public/og-cchia.jpg`** | Imagen para redes sociales | ⭐⭐ Media |

### Componentes (Personalización Avanzada)

| Archivo | Propósito | Frecuencia de Edición |
|---------|-----------|----------------------|
| `src/components/Logo.tsx` | Logo del sitio | ⭐ Baja |
| `src/components/LinkCard.tsx` | Diseño de las cards | ⭐ Baja |
| `src/App.tsx` | Layout principal | ⭐ Baja |

### Estilos

| Archivo | Propósito | Frecuencia de Edición |
|---------|-----------|----------------------|
| `src/styles/index.css` | Estilos globales, animaciones | ⭐ Baja |
| `tailwind.config.js` | Configuración de Tailwind | ⭐ Baja |

---

## 📊 Tecnologías Utilizadas

### Core
- **React 18** - Framework UI
- **TypeScript** - Type safety
- **Vite** - Build tool ultra-rápido

### Styling
- **Tailwind CSS** - Utility-first CSS
- **PostCSS** - CSS processor
- **Autoprefixer** - Prefijos CSS automáticos

### UI/UX
- **lucide-react** - Iconos modernos
- **react-helmet-async** - SEO meta tags

### Desarrollo
- **ESLint** - Linting (opcional)
- **Git** - Control de versiones

---

## 🔧 Scripts Disponibles

```bash
npm run dev        # Servidor de desarrollo (localhost:5173)
npm run build      # Build para producción
npm run preview    # Preview del build
npm run lint       # Ejecutar linter (si está configurado)
```

---

## 📦 Tamaño del Bundle

El proyecto está optimizado para ser ligero:

- **HTML**: ~1 KB
- **CSS**: ~15 KB (con Tailwind optimizado)
- **JS**: ~150 KB (React + dependencias minificadas)
- **Total**: ~170 KB (gzipped: ~55 KB)

---

## 🎨 Variables CSS Disponibles

```css
--brand-navy         /* Color principal */
--brand-teal-1       /* Acento claro */
--brand-teal-2       /* Acento oscuro */
--brand-bg-start     /* Fondo gradiente inicio */
--brand-bg-end       /* Fondo gradiente fin */
--brand-card-bg      /* Fondo de cards */
--brand-card-border  /* Borde de cards */
--brand-text-primary /* Texto principal */
--brand-text-secondary /* Texto secundario */
```

Se actualizan automáticamente al cambiar `src/config/brand.ts`

---

## ✨ Características Implementadas

✅ **Responsive**: Mobile-first, 1-2 columnas  
✅ **Accesible**: WCAG 2.2 AA, navegación por teclado  
✅ **SEO**: Meta tags, Open Graph, Twitter Cards  
✅ **Performance**: Lighthouse > 90  
✅ **PWA Ready**: Manifest, favicon, theme-color  
✅ **Dark Mode**: Automático con prefers-color-scheme  
✅ **Animaciones**: Suaves con reduced-motion support  
✅ **TypeScript**: Type-safe  
✅ **Editable**: Configuración centralizada  
✅ **Deploy Ready**: Netlify + Vercel configs  

---

## 🚀 Próximos Pasos

1. Editar `src/config/brand.ts` con tus colores y textos
2. Editar `src/config/links.ts` con tus enlaces
3. Crear imagen `public/og-cchia.jpg` (1200x630px)
4. Ejecutar `npm install && npm run dev`
5. Personalizar según necesites
6. Desplegar en Netlify o Vercel

---

**¿Listo para empezar?** Lee `QUICKSTART.md` 🚀
