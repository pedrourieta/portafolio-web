# Portafolio web adaptativo - Pedro Urieta

Sitio web personal de diseñador web desarrollado con HTML5, CSS3 y un poco de JavaScript. Se adapta a tres tipos de pantalla: escritorio, celular en vertical (portrait) y celular en horizontal (landscape).

Proyecto elaborado para la asignatura **Aplicaciones Web** de TSU en Desarrollo de Software Multiplataforma (UTEZ):

- AVS.02.02.01 Desarrollo de página HTML y CSS (versión de escritorio).
- AVS.02.05.01 Página web adaptativa (versión para celular con consultas de medios).

## Páginas

| Archivo | Contenido |
|---|---|
| `index.html` | Presentación, botón "Contratar ahora" y carrusel de proyectos |
| `sobre-mi.html` | Perfil, presentación y habilidades |
| `servicios.html` | Diseño de interfaces y bases de datos |
| `portafolio.html` | Galería de proyectos |
| `contacto.html` | Formulario, video "Cómo llegar" y datos de contacto |

## Estructura de archivos

```
portafolio-web/
├── index.html
├── sobre-mi.html
├── servicios.html
├── portafolio.html
├── contacto.html
├── styles.css      Hoja de estilos con las consultas de medios
├── script.js       Menú hamburguesa y flechas del carrusel
├── img/            Logotipo, ilustraciones e íconos (SVG/JPG)
└── video/          Video "Cómo llegar a la UTEZ" (MP4)
```

## Consultas de medios

| Vista | Consulta | Principales cambios |
|---|---|---|
| Escritorio | Estilos base | Menú horizontal y contenido a varias columnas |
| Celular vertical | `@media (max-width: 767px) and (orientation: portrait)` | Menú hamburguesa, una sola columna y carrusel con una tarjeta al centro |
| Celular horizontal | `@media (orientation: landscape) and (max-height: 500px)` | Menú horizontal compacto, contenido a dos columnas y carrusel con más tarjetas visibles |

## Cómo verlo

Abre `index.html` en el navegador. Para probar las vistas de celular, usa las herramientas de desarrollador (F12) y activa la vista de dispositivo móvil, en vertical y en horizontal.
