# 🇨🇱 CCHIA Link-in-Bio

Landing page estilo Linktree para la **Cámara Chilena de Inteligencia Artificial (CCHIA)**. Diseñada con React 18, TypeScript, Tailwind CSS y optimizada para SEO, accesibilidad (WCAG 2.2 AA) y rendimiento (Lighthouse > 90).

> 📚 **[Ver índice completo de documentación](DOCS-INDEX.md)** para encontrar rápidamente lo que necesitas.

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
npm install
# o
pnpm install
# o
yarn install

# Modo desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

La aplicación estará disponible en `http://localhost:5173`

## 📁 Estructura del Proyecto

```
cchia-linkinbio/
├── public/
│   ├── favicon.svg              # Favicon del sitio
│   ├── manifest.json            # PWA manifest
│   ├── og-cchia.jpg            # Imagen Open Graph (debes crearla)
│   └── OG-IMAGE-README.md      # Instrucciones para crear OG image
├── src/
│   ├── components/
│   │   ├── LinkCard.tsx        # Card/botón de enlace
│   │   ├── Logo.tsx            # Logo SVG responsive
│   │   └── Tooltip.tsx         # Tooltip accesible
│   ├── config/
│   │   ├── brand.ts            # Configuración de marca (EDITABLE)
│   │   └── links.ts            # Configuración de enlaces (EDITABLE)
│   ├── styles/
│   │   └── index.css           # Estilos globales + Tailwind
│   ├── App.tsx                 # Componente principal
│   └── main.tsx                # Entry point
├── index.html
├── package.json
├── tailwind.config.js          # Configuración Tailwind
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Personalización

### 1. Cambiar Colores de Marca

Edita `src/config/brand.ts`:

```typescript
export const brand = {
  name: "Cámara Chilena de Inteligencia Artificial",
  shortName: "CCHIA",
  claim: "Conectamos talento, industria y academia para una IA responsable en Chile",
  colors: {
    navy: "#0E3A66",    // Azul marino institucional
    teal1: "#04B6A1",   // Teal claro del logo
    teal2: "#07809B"    // Teal oscuro del logo
  },
  emailNotify: "contacto@cchia.cl",
  year: new Date().getFullYear()
};
```

Los colores se aplicarán automáticamente en toda la aplicación mediante variables CSS.

### 2. Modificar Enlaces

Edita `src/config/links.ts`:

```typescript
export const links: Link[] = [
  {
    id: "instagram",              // ID único
    label: "Instagram",           // Título visible
    href: "https://www.instagram.com/cchia.cl/",
    subtitle: "Actualizaciones y comunidad",  // Opcional
    icon: "instagram",            // Icono de lucide-react
    disabled: false               // Si está deshabilitado
  },
  // ... más enlaces
];
```

**Iconos disponibles** (de lucide-react):
- `instagram`, `globe`, `mail`, `gamepad2`, `linkedin`, `twitter`, `youtube`, `github`, etc.

### 3. Sustituir el Logo

**Opción A: Editar el SVG**
Modifica `src/components/Logo.tsx` con tu diseño.

**Opción B: Usar imagen**
```tsx
// En Logo.tsx
export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <img 
      src="/logo-cchia.png" 
      alt="Logo CCHIA" 
      className={`w-16 h-16 md:w-20 md:h-20 ${className}`}
    />
  );
};
```

### 4. Imagen Open Graph (OG)

1. Crea una imagen de **1200x630px** con:
   - Logo CCHIA
   - Nombre y claim
   - Colores de marca

2. Guárdala como `public/og-cchia.jpg`

3. Optimízala (usa TinyPNG o similar)

## ♿ Accesibilidad

- ✅ Orden de tabulación lógico
- ✅ Roles ARIA y labels descriptivos
- ✅ Contraste WCAG 2.2 AA en todos los estados
- ✅ `prefers-reduced-motion` respetado
- ✅ Tooltips accesibles con teclado
- ✅ Focus visible en todos los elementos interactivos

## 📱 Responsive

- **Mobile-first**: Optimizado para móviles
- **Breakpoints**:
  - `< 768px`: 1 columna
  - `≥ 768px`: 2 columnas
- **Contenedor**: Max-width 520px (mobile), 880px (desktop)

## 🎯 SEO

- ✅ Meta tags completos (título, descripción)
- ✅ Open Graph para redes sociales
- ✅ Twitter Cards
- ✅ Favicon y manifest.json
- ✅ Estructura semántica HTML5
- ✅ `react-helmet-async` para meta tags dinámicos

## 🚢 Despliegue

### Netlify

1. Conecta tu repositorio
2. Build command: `npm run build`
3. Publish directory: `dist`
4. ✅ Deploy automático

### Vercel

1. Importa el proyecto
2. Framework Preset: `Vite`
3. ✅ Deploy automático

### Manual

```bash
npm run build
# Sube la carpeta 'dist' a tu hosting
```

## 🔧 Tecnologías

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool ultra-rápido
- **Tailwind CSS** - Utility-first CSS
- **react-helmet-async** - SEO meta tags
- **lucide-react** - Iconos modernos

## 📊 Rendimiento

- ⚡ Lighthouse Score > 90
- 🎨 Fuentes con `display=swap`
- 🖼️ Imágenes optimizadas
- 📦 JS mínimo
- 🔄 Code splitting automático

## 🎨 Modo Oscuro

El modo oscuro se activa automáticamente según la preferencia del sistema (`prefers-color-scheme`). Los colores se ajustan automáticamente manteniendo contraste AA.

## 📝 Personalización Avanzada

### Agregar un nuevo enlace

1. Abre `src/config/links.ts`
2. Agrega un objeto al array:

```typescript
{
  id: "linkedin",
  label: "LinkedIn",
  href: "https://www.linkedin.com/company/cchia",
  subtitle: "Red profesional",
  icon: "linkedin"
}
```

### Cambiar el claim

Edita `brand.claim` en `src/config/brand.ts` (máximo 90 caracteres).

### Modificar estilos de las cards

Edita la clase `.btn-card` en `src/styles/index.css`.

### Cambiar animaciones

Modifica las transiciones en `tailwind.config.js` o en los componentes individuales.

## 📄 Licencia

© CCHIA 2024 - Todos los derechos reservados.

## 🤝 Soporte

Para dudas o consultas: **contacto@cchia.cl**

---

**Hecho con ❤️ para la Cámara Chilena de Inteligencia Artificial**
