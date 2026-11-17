# Luigi Miranda — Portafolio web

Portafolio personal estático en español e inglés, diseñado para GitHub Pages.
No requiere Node.js, PHP, base de datos ni instalación de dependencias.

## 1. Probar en Ubuntu

Abre `index.html` en tu navegador. También puedes ejecutar desde la carpeta del proyecto:

```bash
python3 -m http.server 8000
```

Entra en http://localhost:8000.

## 2. Personalizar antes de publicar

Edita `profile.js`:

- `social`: pega tus URLs de LinkedIn, GitHub, correo y CV.
- `education`: coloca el nombre real de tu universidad, fechas y título.
- `experience`: añade tu cargo, empresa o laboratorio, fechas y contribuciones.
- `projects`: agrega proyectos, tecnologías y enlaces al repositorio o demostración.
- `posts`: añade enlaces públicos de cada publicación de LinkedIn.
- `photo`: ruta de tu fotografía personal (opcional).
- `skills`: adapta la lista de tecnologías.

Los textos en `es` y `en` corresponden a los idiomas español e inglés. Si solo escribes
español, el texto español se mostrará también como alternativa en inglés.

Ejemplo para añadir una publicación a la lista `posts`:

```js
posts: [
  {
    date: "2026-11-17",
    title: {
      es: "Mi proyecto de robótica",
      en: "My robotics project"
    },
    description: {
      es: "Una breve descripción de los resultados.",
      en: "A brief description of the results."
    },
    url: "https://www.linkedin.com/posts/URL-REAL-DE-TU-PUBLICACION"
  }
]
```

Puedes obtener la URL desde una publicación de LinkedIn con el menú de tres puntos
y la opción de copiar enlace. Este sitio enlaza las publicaciones; no extrae datos
automáticamente de LinkedIn.

### Añadir fotos y vídeos de tus proyectos

La versión multimedia ya incluye WALTER, SO-101, COD y datos sintéticos.
Cada tarjeta tiene un selector de vídeo y dos fotografías. Guarda tus archivos
reales con los siguientes nombres (no es necesario modificar código):

| Proyecto | Carpeta | Archivos |
|---|---|---|
| WALTER | `assets/walter/` | `demo.mp4`, `photo-1.jpg`, `photo-2.jpg` |
| SO-101 | `assets/so101/` | `demo.mp4`, `photo-1.jpg`, `photo-2.jpg` |
| COD | `assets/cod/` | `demo.mp4`, `photo-1.jpg`, `photo-2.jpg` |
| Datos sintéticos | `assets/synthetic/` | `demo.mp4`, `photo-1.jpg`, `photo-2.jpg` |

Si un archivo no existe, se muestra una ilustración conceptual con la leyenda
"Contenido multimedia próximamente". Cuando añadas tus fotos o vídeos con
los nombres indicados, se mostrarán al seleccionar la pestaña correspondiente.
No se incluyen fotos de terceros ni vídeos ficticios.

También puedes usar más fotos, cambiar extensiones o usar una URL HTTPS directa
a un archivo multimedia en el arreglo `media` del proyecto en `profile.js`.

```js
media: [
  { type: "video", src: "assets/so101/demo.mp4" },
  { type: "image", src: "assets/so101/photo-1.jpg",
    alt: { es: "Robot SO-101 durante la teleoperación", en: "SO-101 during teleoperation" } },
  { type: "image", src: "assets/so101/photo-2.png" }
]
```

Para los vídeos, usa MP4 con vídeo H.264 y audio AAC, preferiblemente optimizados
para web. Si tienes FFmpeg, puedes comprimir un vídeo así:

```bash
ffmpeg -i original.mp4 -vf "scale=-2:720" -c:v libx264 -crf 25 -preset medium -c:a aac -movflags +faststart demo.mp4
```

Coloca tu foto de perfil en `assets/profile.jpg` si deseas que aparezca en Sobre mí.
Los enlaces de LinkedIn ya proporcionados están en `profile.js`. El título y
resumen de la publicación general se pueden reemplazar por sus datos reales.

El fondo de la portada usa Canvas 2D con una animación de articulaciones y
trayectorias; respeta la preferencia de movimiento reducido del navegador.

Si deseas un CV descargable, guarda tu PDF en `assets/cv.pdf` y cambia
`cv: ""` por `cv: "assets/cv.pdf"`.

Revisa todos los datos personales y elimina o actualiza cualquier proyecto que no
represente tu trabajo actual. Los enlaces vacíos no aparecen en la página.

## 3. Subir a GitHub Pages

1. Crea un repositorio público en GitHub. Puedes llamarlo
   `TU-USUARIO.github.io` para publicar en la raíz o `portafolio`.
2. Sube el **contenido de esta carpeta**, no la carpeta contenedora.
   `index.html` debe quedar junto a `styles.css`, `app.js` y `profile.js`
   en la raíz del repositorio.
3. Abre **Settings → Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**.
5. Selecciona la rama `main`, carpeta `/(root)` y guarda.
6. Cuando GitHub indique que está publicado, abre la URL de Pages.

También puedes subirlo desde la terminal:

```bash
git init
git add .
git commit -m "Crear portafolio personal"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/portafolio.git
git push -u origin main
```

El repositorio debe existir antes de ejecutar los dos últimos comandos.
No subas contraseñas, credenciales ni información personal que no quieras publicar.

## 4. Archivos

| Archivo | Función |
|---|---|
| index.html | Estructura y contenido principal |
| styles.css | Colores, diseño responsive y tipografía |
| profile.js | Formación, experiencia, proyectos, publicaciones y enlaces |
| app.js | Renderizado de contenido, idiomas y menú móvil |
| background.js | Fondo robótico animado |
| assets/favicon.svg | Icono de la pestaña |

Para modificar los colores principales, cambia las variables de `:root` en
`styles.css`. Los textos generales y sus traducciones se pueden editar en
`app.js`.
