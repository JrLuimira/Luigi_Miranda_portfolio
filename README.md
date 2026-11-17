# Luigi Miranda | Robotics, Vision & Software

Portfolio estático bilingüe (inglés por defecto, español opcional), preparado para GitHub Pages.

## Probar

Desde la carpeta del proyecto:

```bash
python3 -m http.server 8000
```

Abre http://localhost:8000. No requiere instalar dependencias.

## Agregar el vídeo panorámico de portada

Guarda tu vídeo como `assets/hero/banner.mp4`. Se mostrará de fondo a todo el ancho con reproducción automática silenciosa, en bucle, y un botón de pausa. Se detiene al salir de la portada.

Opcionalmente añade `assets/hero/poster.jpg` para que aparezca mientras carga el vídeo. Si todavía no existe el vídeo ni el póster, verás un fondo de programación animado.

Recomendación: vídeo horizontal 16:9 o 21:9, MP4 (H.264), 720p/1080p, con los elementos importantes centrados. Para comprimirlo:

```bash
ffmpeg -i original.mp4 -vf "scale=-2:1080" -c:v libx264 -crf 25 -preset medium -an -movflags +faststart assets/hero/banner.mp4
```

## Multimedia de proyectos

Cada proyecto muestra un reproductor de vídeo y dos fotos con ampliación. Coloca estos archivos reales en la carpeta correspondiente:

| Proyecto | Carpeta | Archivos |
|---|---|---|
| WALTER | assets/walter/ | demo.mp4, photo-1.jpg, photo-2.jpg |
| SO-101 | assets/so101/ | demo.mp4, photo-1.jpg, photo-2.jpg |
| COD | assets/cod/ | demo.mp4, photo-1.jpg, photo-2.jpg |
| Synthetic Data | assets/synthetic/ | demo.mp4, photo-1.jpg, photo-2.jpg |

Si falta un archivo, el sitio lo indica y no muestra imágenes rotas. Puedes añadir vídeos o fotos con otros nombres editando el arreglo `media` de cada proyecto en `profile.js`.

La foto incluida en `assets/profile.png` es la fotografía real extraída del CV que compartiste. Puedes reemplazarla por una de mayor resolución. También incluí el CV original en `assets/cv.pdf`: revisa si deseas publicar todos los datos que contiene antes de subirlo a GitHub.

## Editar contenido

- `profile.js`: formación, experiencia, investigación, proyectos, enlaces de LinkedIn y contacto.
- `index.html`: estructura, portada y sección de presentación.
- `app.js`: funciones de galerías, filtros, idiomas, vídeo y navegación.
- `styles.css`: diseño.

Agrega tus URLs personales de GitHub y LinkedIn en `social` de `profile.js`. Los enlaces de las dos publicaciones compartidas ya están incorporados.

## Publicar en GitHub Pages

1. Sube los archivos y la carpeta `assets` directamente a la raíz de tu repositorio público.
2. En GitHub, entra en Settings → Pages, elige Deploy from a branch, rama `main`, carpeta `/(root)`.
3. Guarda y abre la dirección que GitHub te indique.

Evita subir vídeos sin optimizar o datos privados que no quieras publicar.
