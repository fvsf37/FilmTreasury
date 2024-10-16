# **Guía de Estilo - FilmTreasury**

Esta guía de estilo establece las reglas visuales y las decisiones de diseño implementadas en **FilmTreasury** para mantener la coherencia y la estética en toda la aplicación.

## **Paleta de Colores**

La combinación de colores sigue un esquema simple y elegante que asegura una experiencia visual agradable y una fácil legibilidad.

| Elemento          | Color HEX    | Uso Principal                                        |
| ----------------- | ------------ | --------------------------------------------------- |
| Fondo Principal    | `#21201e`    | Color de fondo de toda la aplicación.                |
| Texto Primario     | `#ebe8ff`    | Color principal del texto en todos los componentes.  |
| Botones y Enlaces  | `#42ab47`    | Color de los botones, enlaces y elementos interactivos. |
| Fondo de Tarjetas  | `#ffffff`    | Color de fondo de las tarjetas de películas y formularios. |
| Sombras y Bordes   | `#2b2a29`    | Color para sombras y bordes en los contenedores y el footer. |

## **Tipografía**

Se ha utilizado una sola familia tipográfica para mantener la consistencia y una experiencia legible.

- **Fuente Principal**: [Prosto One](https://fonts.google.com/specimen/Prosto+One)
- **Tamaños de fuente**:
  - Encabezados (h1): `36px`
  - Subtítulos (h2): `24px`
  - Texto de párrafo: `16px`
  - Texto de botón: `16px`

## **Componentes de Diseño**

### **Botones**

- **Color**: Fondo verde `#42ab47`, texto blanco `#ffffff`.
- **Estado Hover**: Fondo verde más oscuro `#369e3d`.
- **Esquinas**: Bordes redondeados con `6px`.
- **Tamaño**: Padding interno de `12px`.

### **Tarjetas de Películas**

- **Fondo**: Blanco `#ffffff`.
- **Sombra**: `0 4px 8px rgba(0, 0, 0, 0.1)` para un efecto de elevación.
- **Esquinas**: Redondeadas con `30px`.
- **Altura de Contenido**: Fija, para mantener consistencia entre tarjetas.

## **Diseño Responsivo**

La aplicación está diseñada para ajustarse a diferentes tamaños de pantalla:

- **Breakpoint principal**: `768px`. Cuando se reduce el ancho de la pantalla por debajo de este valor, las columnas de la aplicación se reorganizan verticalmente.
- **Uso de Grid y Flexbox**: Se utilizan tanto CSS Grid para el layout general como Flexbox para alinear elementos dentro de contenedores.

## **Iconos**

Se han utilizado iconos SVG e imágenes en formato `.jpg` para mantener la consistencia visual.
