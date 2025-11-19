# 🚀 Inicio Rápido - CCHIA Link-in-Bio

## ⚡ En 3 Minutos

### 1. Descargar e Instalar
```bash
# Descomprime el ZIP
# Navega a la carpeta
cd cchia-linkinbio

# Instala dependencias
npm install
```

### 2. Ejecutar en Desarrollo
```bash
npm run dev
```

Abre: http://localhost:5173

### 3. Personalizar
Edita estos 2 archivos principales:

**`src/config/brand.ts`** - Colores y textos
```typescript
colors: {
  navy: "#0E3A66",
  teal1: "#04B6A1",
  teal2: "#07809B"
}
```

**`src/config/links.ts`** - Enlaces
```typescript
[
  { id: "instagram", label: "Instagram", href: "...", icon: "instagram" },
  // Agrega más...
]
```

### 4. Crear Imagen Open Graph
- Dimensiones: 1200x630px
- Guarda como: `public/og-cchia.jpg`
- Ver instrucciones: `public/OG-IMAGE-README.md`

### 5. Build para Producción
```bash
npm run build
```

### 6. Desplegar

**Opción A: Netlify**
1. Sube a GitHub
2. Conecta en netlify.com
3. ✅ Deploy automático

**Opción B: Vercel**
1. Sube a GitHub
2. Importa en vercel.com
3. ✅ Deploy automático

**Opción C: Manual**
```bash
npm run build
# Sube carpeta 'dist/' a tu hosting
```

---

## 📚 Documentación Completa

- **README.md** - Documentación general
- **CUSTOMIZATION.md** - Guía de personalización detallada
- **DEPLOYMENT-CHECKLIST.md** - Checklist antes de lanzar

---

## 🆘 Soporte

¿Problemas? contacto@cchia.cl

---

**¡Listo! Tu landing está funcionando** 🎉
