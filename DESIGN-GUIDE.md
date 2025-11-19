# 🎨 Guía Visual del Diseño - CCHIA Link-in-Bio

## 🌈 Paleta de Colores

### Colores de Marca
```
Navy (Principal)        #0E3A66  ████████
Teal Claro (Acento 1)   #04B6A1  ████████
Teal Oscuro (Acento 2)  #07809B  ████████
```

### Aplicación de Colores

**Modo Oscuro (Predeterminado)**
- Fondo: Gradiente radial Navy → Muy oscuro
- Cards: Fondo semitransparente con blur
- Textos: Blanco / Blanco 70%
- Acentos: Gradiente Teal 1 → Teal 2

**Modo Claro (Automático)**
- Fondo: Azul muy claro
- Cards: Blanco semitransparente
- Textos: Azul oscuro / Azul oscuro 70%
- Acentos: Igual que modo oscuro

---

## 📐 Layout y Espaciado

### Contenedor Principal
```
Mobile:  max-width: 520px
Desktop: max-width: 880px
Padding: 1rem (16px)
```

### Grid de Enlaces
```
Mobile:  1 columna
Tablet+: 2 columnas
Gap:     1rem (16px)
```

### Espaciados Verticales
```
Header padding-top:    3rem (48px)
Header padding-bottom: 2rem (32px)
Main padding-bottom:   6rem (96px)
Footer padding:        1.5rem (24px)
```

---

## 🔤 Tipografía

### Familia de Fuente
```
Primary: Inter
Fallback: system-ui, -apple-system, sans-serif
Weight: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
```

### Tamaños de Texto

**Header**
```
Logo:  64px × 64px (mobile) → 80px × 80px (desktop)
H1:    1.5rem/24px (mobile) → 1.875rem/30px (desktop)
Claim: 1rem/16px (mobile) → 1.125rem/18px (desktop)
```

**Cards**
```
Título:    1.125rem/18px (font-semibold)
Subtítulo: 0.875rem/14px (opacity 70%)
Badge:     0.75rem/12px
```

**Footer**
```
Texto: 0.875rem/14px (opacity 60%)
```

---

## 🎯 Componentes

### Logo
```
Tipo: SVG inline
Tamaño: 80px × 80px (responsive)
Elementos:
  - Círculo exterior (Navy)
  - Cerebro estilizado (Navy)
  - Lazo AI superior (Teal claro)
  - Lazo AI inferior (Teal oscuro)
  - 3 nodos de conexión
  - Texto "AI"
```

### Link Card
```
Padding: 1.5rem (24px)
Border-radius: 1.5rem (24px)
Background: Semitransparente con blur
Border: 1px Teal semitransparente
Shadow: Suave → Elevada (hover)

Estructura:
  [Icono] [Título + Subtítulo] [→]
  
  Icono:
    - Tamaño: 48px × 48px
    - Fondo: Gradiente Teal 1 → Teal 2
    - Icono: 24px × 24px (blanco)
    - Border-radius: 0.75rem (12px)
```

### Estados de Interacción

**Normal**
```
Opacity: 100%
Transform: none
Border: Teal 20%
```

**Hover**
```
Transform: translateY(-2px) scale(1.01)
Shadow: card-hover
Border: Teal 100%
Background: Gradiente Teal sutil
Duration: 200ms
```

**Focus**
```
Ring: 2px Teal
Ring-offset: 2px
Outline: none
```

**Disabled**
```
Opacity: 60%
Cursor: not-allowed
No hover effects
Badge "Próximamente"
```

---

## 🔘 Botones

### CTA Sticky (Inferior)
```
Width: 100%
Height: 3rem (48px)
Padding: 1rem 1.5rem (16px 24px)
Border-radius: 1.5rem (24px)
Background: Gradiente Teal 1 → Teal 2
Color: Blanco
Font-weight: 600

Position: Fixed bottom
Backdrop: Gradiente + blur

Hover:
  - Scale: 1.02
  - Shadow: 2xl
  
Active:
  - Scale: 0.98
```

### Botón "Notificarme" (Secundario)
```
Padding: 0.375rem 0.75rem (6px 12px)
Border-radius: 0.5rem (8px)
Background: Teal 10%
Border: 1px Teal 30%
Color: Inherit
Font-size: 0.875rem (14px)

Hover:
  - Background: Teal 20%
```

---

## 🎭 Efectos Visuales

### Gradientes

**Fondo Principal**
```css
background: radial-gradient(
  ellipse at top,
  var(--brand-bg-end),    /* Navy */
  var(--brand-bg-start)   /* Muy oscuro */
);
```

**Texto Gradiente**
```css
background: linear-gradient(
  135deg,
  var(--brand-teal-1),
  var(--brand-teal-2)
);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

**Cards (Hover)**
```css
background: linear-gradient(
  135deg,
  rgba(4, 182, 161, 0.1),
  rgba(7, 128, 155, 0.1)
);
```

### Sombras

**Card Normal**
```css
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -2px rgba(0, 0, 0, 0.1);
```

**Card Hover**
```css
box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2),
            0 4px 6px -4px rgba(0, 0, 0, 0.1);
```

**CTA Button Hover**
```css
box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
```

### Blur y Transparencias

**Cards**
```css
backdrop-filter: blur(10px);
background: rgba(255, 255, 255, 0.05);  /* Modo oscuro */
```

**Sticky Footer**
```css
backdrop-filter: blur(8px);
background: linear-gradient(
  to top,
  var(--brand-bg-start),
  rgba(var(--brand-bg-start), 0.95),
  transparent
);
```

---

## ✨ Animaciones

### Duración
```
Fast:   150ms (hover subtle)
Normal: 200ms (hover principal)
Slow:   300ms (transiciones complejas)
```

### Easing
```
ease-out  (predeterminado)
cubic-bezier(0.4, 0, 0.2, 1) para suavidad
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 📱 Breakpoints

```
Mobile:  < 768px  (1 columna)
Tablet:  ≥ 768px  (2 columnas)
Desktop: ≥ 1024px (mismas 2 columnas, más espaciado)
```

---

## ♿ Accesibilidad

### Contraste
```
Texto sobre fondo:      ≥ 4.5:1 (AA)
Textos grandes:         ≥ 3:1 (AA)
Elementos interactivos: ≥ 3:1 (AA)
```

### Focus Visible
```css
.btn-card:focus-visible {
  ring: 2px solid var(--brand-teal-1);
  ring-offset: 2px;
}
```

### ARIA
```html
aria-label="Descripción clara del enlace"
aria-disabled="true" (para botones deshabilitados)
role="tooltip" (para tooltips)
```

---

## 🖼️ Recursos Visuales

### Favicon
```
Formato: SVG
Tamaño: 64px × 64px
Colores: Navy + Teal 1 + Teal 2
```

### Open Graph Image
```
Formato: JPG
Tamaño: 1200px × 630px
Peso: < 300KB
Contenido:
  - Logo centrado
  - Nombre CCHIA
  - Claim
  - Colores de marca
```

---

## 📊 Performance Targets

```
Lighthouse Performance:  > 90
Lighthouse Accessibility: > 90
Lighthouse Best Practices: > 90
Lighthouse SEO:           > 90

First Contentful Paint:  < 1.5s
Time to Interactive:     < 3.0s
Total Bundle Size:       < 200KB
```

---

**Diseño creado para CCHIA** 🇨🇱
