# ✅ Checklist de Despliegue CCHIA Link-in-Bio

## Antes de Desplegar

### 1. Contenido
- [ ] Verificar todos los enlaces en `src/config/links.ts` funcionan
- [ ] Claim tiene menos de 90 caracteres
- [ ] Email de contacto es correcto en `brand.ts`
- [ ] Textos sin errores ortográficos

### 2. Recursos Visuales
- [ ] Logo cargado y visible en mobile y desktop
- [ ] Favicon (`public/favicon.svg`) configurado
- [ ] Imagen OG (`public/og-cchia.jpg`) creada (1200x630px)
- [ ] Imagen OG optimizada (<300KB)

### 3. SEO
- [ ] Title en `App.tsx` es correcto
- [ ] Meta description es descriptiva (150-160 caracteres)
- [ ] Open Graph tags completos
- [ ] Twitter Cards configurados
- [ ] `robots.txt` configurado

### 4. Configuración
- [ ] Colores de marca correctos en `brand.ts`
- [ ] URLs absolutas (https://) en todos los enlaces externos
- [ ] `emailNotify` configurado para notificaciones

### 5. Testing Local
- [ ] `npm run build` ejecuta sin errores
- [ ] `npm run preview` muestra el sitio correctamente
- [ ] Probar en Chrome, Firefox y Safari
- [ ] Probar en mobile (responsive)
- [ ] Todos los enlaces abren correctamente
- [ ] Botón "Próximamente" muestra tooltip
- [ ] Botón "Notificarme" abre email
- [ ] CTA sticky funciona y scrollea correcto

### 6. Accesibilidad
- [ ] Navegación completa con teclado (Tab)
- [ ] Focus visible en todos los elementos
- [ ] Screen reader puede leer todo el contenido
- [ ] Contraste de colores pasa WCAG AA
- [ ] Tooltips accesibles con teclado

### 7. Rendimiento
- [ ] Lighthouse Performance > 90
- [ ] Lighthouse Accessibility > 90
- [ ] Lighthouse Best Practices > 90
- [ ] Lighthouse SEO > 90
- [ ] Imágenes optimizadas

## Durante el Despliegue

### Netlify
- [ ] Conectar repositorio GitHub
- [ ] Build command: `npm run build`
- [ ] Publish directory: `dist`
- [ ] Node version: 18
- [ ] Deploy exitoso
- [ ] Verificar URL custom domain (si aplica)

### Vercel
- [ ] Importar proyecto
- [ ] Framework: Vite
- [ ] Root directory: `./`
- [ ] Deploy exitoso
- [ ] Verificar URL custom domain (si aplica)

## Después del Despliegue

### 1. Testing en Producción
- [ ] Sitio carga correctamente
- [ ] Todos los enlaces funcionan
- [ ] Imágenes cargan correctamente
- [ ] Favicon visible en pestaña
- [ ] Responsive en mobile real
- [ ] Velocidad de carga aceptable

### 2. SEO Verification
- [ ] Buscar en Google: `site:tu-dominio.com`
- [ ] Verificar Open Graph con [OpenGraph.xyz](https://www.opengraph.xyz/)
- [ ] Verificar Twitter Cards con [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [ ] Google Search Console configurado
- [ ] Sitemap enviado a Search Console

### 3. Analytics (Opcional)
- [ ] Google Analytics configurado
- [ ] Eventos de clicks trackeados
- [ ] Conversiones configuradas

### 4. Sharing
- [ ] Probar compartir en WhatsApp
- [ ] Probar compartir en Facebook
- [ ] Probar compartir en Twitter/X
- [ ] Probar compartir en LinkedIn
- [ ] Vista previa correcta en todas las plataformas

### 5. Monitoreo
- [ ] Configurar alertas de uptime (ej: UptimeRobot)
- [ ] Revisar errores en consola del navegador
- [ ] Configurar backup del código

## Mantenimiento Regular

### Mensual
- [ ] Verificar que todos los enlaces siguen funcionando
- [ ] Revisar analytics y métricas
- [ ] Actualizar contenido si es necesario

### Trimestral
- [ ] Actualizar dependencias (`npm update`)
- [ ] Revisar y optimizar performance
- [ ] Actualizar imagen OG si hay cambios de marca

### Anual
- [ ] Revisar y actualizar SEO
- [ ] Evaluar nuevas funcionalidades
- [ ] Renovar certificados SSL (si aplica)

---

## 🚨 Troubleshooting Común

### El build falla
```bash
# Limpiar cache y reinstalar
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Imágenes no cargan
- Verificar que están en `/public`
- Usar rutas absolutas: `/imagen.jpg` no `./imagen.jpg`

### Estilos no se aplican
```bash
# Rebuild de Tailwind
npm run build
```

### Enlaces no funcionan en producción
- Verificar que tienen `https://`
- Verificar `target="_blank"` en enlaces externos

---

**✅ Listo para Producción**

Una vez completados todos los items, tu sitio está listo para lanzar 🚀
