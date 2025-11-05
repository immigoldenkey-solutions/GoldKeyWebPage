# 🚀 Guía de Despliegue - Gold Key Law

Esta guía te ayudará a publicar tu sitio web en diferentes plataformas.

---

## 📋 Antes de Empezar

### Archivos Necesarios:
- ✅ `goldkeylaw-complete.html` (renombrar a `index.html`)
- ✅ `logo.png` (tu logo)
- ✅ `README.md`

### Personaliza ANTES de subir:
1. ⚠️ **WhatsApp**: Cambia `573118848689` por tu número
2. ⚠️ **Email**: Cambia `info@goldkeylaw.com`
3. ⚠️ **Calendly**: Actualiza tu URL de Calendly
4. ⚠️ **Redes Sociales**: Actualiza URLs de Facebook, Instagram, etc.

---

## 🌐 Opción 1: GitHub Pages (GRATIS + Fácil)

### Paso 1: Crea una cuenta en GitHub
Ve a [github.com](https://github.com) y crea tu cuenta gratis.

### Paso 2: Crea un nuevo repositorio

1. Click en **"New repository"**
2. Nombre: `goldkeylaw-website` (o el que prefieras)
3. Público o Privado: **Público** (para GitHub Pages gratis)
4. Click **"Create repository"**

### Paso 3: Sube tus archivos

**Opción A: Interfaz Web (Más fácil)**

1. En tu repositorio, click **"uploading an existing file"**
2. Arrastra los archivos:
   - `index.html` (renombrado desde goldkeylaw-complete.html)
   - `logo.png`
   - `README.md`
3. Click **"Commit changes"**

**Opción B: Git Command Line**

```bash
# 1. Instala Git si no lo tienes
# Windows: https://git-scm.com/download/win
# Mac: brew install git
# Linux: sudo apt-get install git

# 2. Configura Git (primera vez)
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"

# 3. Clona tu repositorio
git clone https://github.com/TU-USUARIO/goldkeylaw-website.git
cd goldkeylaw-website

# 4. Copia tus archivos aquí
# Renombra goldkeylaw-complete.html a index.html

# 5. Sube los archivos
git add .
git commit -m "Primer commit - Website Gold Key Law"
git push origin main
```

### Paso 4: Activa GitHub Pages

1. En tu repositorio, ve a **Settings**
2. En el menú izquierdo, click **Pages**
3. En **Source**, selecciona:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**
5. ¡Espera 1-2 minutos!

### Paso 5: ¡Visita tu sitio!

Tu sitio estará en:
```
https://TU-USUARIO.github.io/goldkeylaw-website/
```

### 🎯 Dominio Personalizado (Opcional)

#### 1. Compra un dominio
- [Namecheap](https://www.namecheap.com): ~$10/año
- [GoDaddy](https://www.godaddy.com): ~$12/año  
- [Google Domains](https://domains.google): ~$12/año

#### 2. Configura DNS

En tu proveedor de dominio, agrega estos registros:

```
Type: A
Host: @
Value: 185.199.108.153

Type: A
Host: @
Value: 185.199.109.153

Type: A
Host: @
Value: 185.199.110.153

Type: A
Host: @
Value: 185.199.111.153

Type: CNAME
Host: www
Value: TU-USUARIO.github.io
```

#### 3. En GitHub Pages

1. Settings → Pages
2. Custom domain: `tudominio.com`
3. ✅ Enforce HTTPS
4. Click **Save**

**⏰ Espera**: Los cambios de DNS pueden tardar 24-48 horas.

---

## 🚀 Opción 2: Netlify (GRATIS + Más funciones)

### Ventajas:
- ✅ Deploy automático desde GitHub
- ✅ SSL gratis
- ✅ Formularios funcionales
- ✅ Dominio personalizado fácil

### Pasos:

1. **Crea cuenta en [Netlify](https://www.netlify.com)**

2. **Conecta con GitHub**
   - Click "Add new site"
   - "Import an existing project"
   - Autoriza GitHub
   - Selecciona tu repositorio

3. **Configura deploy**
   - Build command: (dejar vacío)
   - Publish directory: (dejar vacío)
   - Click "Deploy site"

4. **Tu sitio estará en**:
```
https://nombre-random-12345.netlify.app
```

5. **Dominio personalizado** (opcional):
   - Site settings → Domain management
   - Add custom domain
   - Sigue instrucciones DNS

---

## ⚡ Opción 3: Vercel (GRATIS + Muy rápido)

### Pasos:

1. **Crea cuenta en [Vercel](https://vercel.com)**

2. **Import Git Repository**
   - Click "Add New" → "Project"
   - Conecta GitHub
   - Selecciona tu repositorio
   - Click "Deploy"

3. **Tu sitio estará en**:
```
https://goldkeylaw-website.vercel.app
```

4. **Dominio personalizado**:
   - Settings → Domains
   - Add domain
   - Sigue instrucciones

---

## 📦 Opción 4: Hosting Tradicional (cPanel)

Si ya tienes hosting web:

### 1. Conecta por FTP

**Software recomendado**:
- [FileZilla](https://filezilla-project.org/) (Gratis)
- [Cyberduck](https://cyberduck.io/) (Gratis)

**Credenciales** (las da tu hosting):
- Host: ftp.tudominio.com
- Usuario: tu usuario
- Contraseña: tu contraseña

### 2. Sube archivos

1. Conecta por FTP
2. Ve a la carpeta `public_html` o `www`
3. Sube:
   - `index.html`
   - `logo.png`
   - Otros archivos

### 3. Visita tu sitio

```
https://tudominio.com
```

---

## 🔧 Actualizar el Sitio

### GitHub Pages / Netlify / Vercel:

```bash
# 1. Edita tus archivos localmente

# 2. Sube cambios
git add .
git commit -m "Actualización: descripción del cambio"
git push origin main

# 3. ¡Se actualiza automáticamente en 1-2 minutos!
```

### Hosting tradicional:
1. Edita archivos localmente
2. Sube por FTP (reemplaza archivos)
3. ¡Listo!

---

## 🐛 Solución de Problemas

### ❌ GitHub Pages: "404 - There isn't a GitHub Pages site here"

**Solución**:
1. Verifica que el archivo se llame `index.html` (no goldkeylaw-complete.html)
2. Verifica en Settings → Pages que esté activado
3. Espera 1-2 minutos más

### ❌ "AOS is not defined" error

**Solución**: Ya está corregido en `goldkeylaw-complete.html`. Si usas la versión anterior, descarga la nueva.

### ❌ Logo no aparece

**Solución**:
```html
<!-- Cambia la ruta en index.html -->
<img src="logo.png" alt="Gold Key Law">

<!-- Si el logo está en carpeta "images" -->
<img src="images/logo.png" alt="Gold Key Law">
```

### ❌ Calendly no carga

**Solución**:
1. Verifica tu URL de Calendly
2. Asegúrate de tener cuenta Calendly activa
3. Formato correcto:
```html
data-url="https://calendly.com/TU-USUARIO/TU-EVENTO"
```

### ❌ WhatsApp no abre

**Solución**:
```html
<!-- Formato correcto (con código de país) -->
<a href="https://wa.me/573118848689">

<!-- ❌ Incorrecto -->
<a href="https://wa.me/3118848689">
```

---

## 📊 Google Analytics (Opcional)

### Paso 1: Crea cuenta Analytics

1. Ve a [analytics.google.com](https://analytics.google.com)
2. Crea propiedad
3. Copia tu Measurement ID (ej: `G-XXXXXXXXXX`)

### Paso 2: Agrega código

Antes de `</head>` en `index.html`:

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

---

## 🔒 SSL / HTTPS

### GitHub Pages:
✅ Automático (activa "Enforce HTTPS")

### Netlify / Vercel:
✅ Automático

### Hosting tradicional:
Contacta a tu proveedor o usa [Let's Encrypt](https://letsencrypt.org/) (gratis)

---

## 📱 Testing en Dispositivos

### Online:
- [BrowserStack](https://www.browserstack.com/): Prueba en múltiples dispositivos
- [Responsinator](http://www.responsinator.com/): Vista responsive rápida

### Chrome DevTools:
1. F12 en Chrome
2. Click icono móvil (Ctrl+Shift+M)
3. Prueba diferentes tamaños

---

## 🎯 Checklist Final

Antes de hacer público:

- [ ] Logo actualizado
- [ ] Número de WhatsApp correcto
- [ ] Email actualizado  
- [ ] Calendly configurado
- [ ] Redes sociales actualizadas
- [ ] Probado en móvil
- [ ] Probado en desktop
- [ ] SSL/HTTPS activo
- [ ] Google Analytics (opcional)
- [ ] Dominio personalizado (opcional)

---

## 💡 Consejos Pro

### SEO Básico:
1. Crea archivo `sitemap.xml`
2. Envía a Google Search Console
3. Optimiza meta descriptions

### Performance:
1. Comprime imágenes ([TinyPNG](https://tinypng.com/))
2. Usa CDN para assets
3. Minimiza CSS/JS (opcional)

### Backup:
1. Mantén copia local
2. Commit regular a GitHub
3. Export desde hosting

---

## 📞 ¿Necesitas Ayuda?

- **Email**: info@goldkeylaw.com
- **WhatsApp**: +57 311 884 8689
- **GitHub Issues**: Abre un issue en el repositorio

---

## 🎉 ¡Felicitaciones!

Tu sitio web profesional está ahora en línea. 

**Próximos pasos**:
- Comparte tu URL en redes sociales
- Actualiza tarjetas de presentación
- Configura tu email profesional
- Monitorea con Analytics

---

<div align="center">

**Gold Key Law** - *La Llave Dorada para un Mejor Futuro*

¿Todo funcionando? ¡Comparte tu éxito con nosotros! 🚀

</div>
