# 🎨 Guía de Personalización CCHIA Link-in-Bio

## 📋 Índice

1. [Cambiar Colores](#cambiar-colores)
2. [Modificar Enlaces](#modificar-enlaces)
3. [Personalizar Textos](#personalizar-textos)
4. [Cambiar Logo](#cambiar-logo)
5. [Agregar Nuevos Iconos](#agregar-nuevos-iconos)
6. [Modificar Estilos](#modificar-estilos)

---

## 🎨 Cambiar Colores

### Método Recomendado: Editar `brand.ts`

Abre `src/config/brand.ts` y modifica los valores:

```typescript
export const brand = {
  colors: {
    navy: "#TU_COLOR_NAVY",    // Color principal
    teal1: "#TU_COLOR_TEAL_1", // Acento claro
    teal2: "#TU_COLOR_TEAL_2"  // Acento oscuro
  }
};
```

Los colores se actualizarán automáticamente en:
- Botones y cards
- Gradientes
- Bordes hover
- Logo (si usa las variables)

### Método Alternativo: Variables CSS

Edita `src/styles/index.css`:

```css
:root {
  --brand-navy: #TU_COLOR;
  --brand-teal-1: #TU_COLOR;
  --brand-teal-2: #TU_COLOR;
}
```

---

## 🔗 Modificar Enlaces

### Agregar un Enlace

Edita `src/config/links.ts`:

```typescript
export const links: Link[] = [
  // Enlaces existentes...
  {
    id: "nuevo-enlace",           // ID único (lowercase, sin espacios)
    label: "Mi Nuevo Enlace",     // Texto visible
    href: "https://ejemplo.com",  // URL destino
    subtitle: "Descripción corta", // Opcional, máx 40 caracteres
    icon: "link",                 // Icono de lucide-react
    disabled: false               // true = deshabilitado
  }
];
```

### Reordenar Enlaces

Simplemente cambia el orden en el array `links`.

### Deshabilitar un Enlace

```typescript
{
  id: "game",
  label: "Juego",
  disabled: true,  // Aparecerá como "Próximamente"
  // ... resto de propiedades
}
```

### Eliminar un Enlace

Borra o comenta el objeto completo del array.

---

## 📝 Personalizar Textos

### Claim Principal

Edita `src/config/brand.ts`:

```typescript
export const brand = {
  claim: "Tu nuevo claim aquí (máx. 90 caracteres)"
};
```

### Nombre de la Organización

```typescript
export const brand = {
  name: "Nombre Completo de tu Organización",
  shortName: "SIGLAS"
};
```

### Footer

Edita `src/App.tsx`, línea del footer:

```tsx
<p>
  © {brand.shortName} {brand.year} · Tu texto personalizado
</p>
```

### Botón CTA Sticky

En `src/App.tsx`:

```tsx
<button ...>
  Tu Texto de CTA
</button>
```

---

## 🖼️ Cambiar Logo

### Opción 1: Usar tu Propia Imagen

1. Coloca tu logo en `public/` (ej: `public/mi-logo.png`)
2. Edita `src/components/Logo.tsx`:

```tsx
export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <img 
      src="/mi-logo.png" 
      alt="Logo de tu organización" 
      className={`w-16 h-16 md:w-20 md:h-20 object-contain ${className}`}
    />
  );
};
```

### Opción 2: Editar el SVG Existente

Abre `src/components/Logo.tsx` y modifica el código SVG con tu diseño.

**Tip**: Usa Figma, Illustrator o Inkscape para crear el SVG y copia el código.

---

## 🎯 Agregar Nuevos Iconos

### Iconos Disponibles

Revisa todos los iconos en: [lucide.dev/icons](https://lucide.dev/icons)

### Usar un Icono

1. Importa el icono en `src/components/LinkCard.tsx`:

```typescript
import { 
  ArrowRight, Instagram, Globe, Mail, Gamepad2, Bell,
  Linkedin, Twitter, Youtube, Github // <-- Nuevos
} from 'lucide-react';
```

2. Agrégalo al `iconMap`:

```typescript
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  instagram: Instagram,
  globe: Globe,
  mail: Mail,
  gamepad2: Gamepad2,
  linkedin: Linkedin,     // <-- Nuevo
  twitter: Twitter,       // <-- Nuevo
  youtube: Youtube,       // <-- Nuevo
  github: Github,         // <-- Nuevo
};
```

3. Úsalo en `links.ts`:

```typescript
{
  id: "linkedin",
  label: "LinkedIn",
  icon: "linkedin",  // <-- Usa el nombre del map
  // ...
}
```

---

## 🎨 Modificar Estilos

### Cambiar el Radio de los Bordes

En `tailwind.config.js`:

```javascript
borderRadius: {
  'xl': '1.5rem',  // Cambiar valores
  '2xl': '2rem',
}
```

O directamente en los componentes usando clases de Tailwind.

### Modificar Sombras

En `src/styles/index.css`:

```css
.btn-card:not(.disabled):hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3); /* Tu sombra */
}
```

### Cambiar Animaciones

En `src/styles/index.css`:

```css
.btn-card:not(.disabled):hover {
  transform: translateY(-4px) scale(1.02); /* Más movimiento */
  transition-duration: 300ms; /* Más lento */
}
```

### Desactivar Animaciones

```css
.btn-card:not(.disabled):hover {
  transform: none; /* Sin animación */
}
```

### Cambiar Fuente

Importa una nueva fuente en `src/styles/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
```

Actualiza en `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['Poppins', 'system-ui', 'sans-serif'],
}
```

---

## 🔍 Tips y Trucos

### Agregar Google Analytics

Agrega en `index.html` antes de `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Trackear Clicks en Enlaces

Los enlaces ya tienen `data-link` attributes para analytics:

```html
<div data-link="instagram">...</div>
```

Puedes usar esto con Google Analytics o cualquier herramienta.

### Cambiar el Gradiente del Fondo

En `src/styles/index.css`:

```css
body {
  background: radial-gradient(ellipse at top, #tu-color-1, #tu-color-2);
}
```

### Agregar un Toggle de Modo Oscuro Manual

Requiere implementación adicional con `useState` y `localStorage`. Contacta a tu desarrollador.

---

## ❓ FAQ

**P: ¿Puedo tener más de 4 enlaces?**  
R: Sí, agrega cuantos quieras en `links.ts`.

**P: ¿Puedo cambiar el orden de las columnas?**  
R: Sí, modifica el grid en `App.tsx` o usa `order-*` de Tailwind.

**P: ¿Cómo hago el sitio más ancho?**  
R: Edita `max-w-[880px]` en `App.tsx` con un valor mayor.

**P: ¿Puedo agregar un formulario de contacto?**  
R: Sí, requiere crear un componente adicional.

---

**¿Necesitas más ayuda?** Contacta a: contacto@cchia.cl
