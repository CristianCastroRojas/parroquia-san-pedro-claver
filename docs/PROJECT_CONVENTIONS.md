# Convenciones de organización y nombramiento del proyecto

## 1. Regla principal

El proyecto utiliza **inglés para el código** y **español para el contenido de la página y los comentarios**.

### Inglés

Se utiliza inglés para:

* Nombres de carpetas.
* Nombres de archivos.
* Componentes.
* Variables.
* Constantes.
* Funciones.
* Propiedades de objetos.
* Interfaces y tipos.
* Identificadores técnicos (`id`).
* Clases CSS.
* Nombres técnicos en general.

### Español

Se utiliza español para:

* Textos visibles al usuario.
* Títulos y descripciones.
* Menús visibles.
* Mensajes.
* Comentarios del código.
* Documentación interna.

---

# 2. Convención para carpetas

**Todas las carpetas deben utilizar minúsculas (`lowercase`).**

No utilizar PascalCase, camelCase ni nombres con espacios.

### Correcto

```text
components/

components/shared/

components/parish/

components/sacraments/

constants/

layouts/

pages/

styles/

assets/
```

### Incorrecto

```text
Components/

Shared/

Parish/

Sacraments/

sharedComponents/

SharedComponents/
```

Esta regla ayuda a mantener una estructura uniforme y evita posibles problemas de rutas en sistemas de archivos que diferencian entre mayúsculas y minúsculas.

---

# 3. Estructura general

La estructura base del proyecto será:

```text
src/

├── assets/
│
├── components/
│   ├── shared/
│   ├── home/
│   ├── parish/
│   └── sacraments/
│
├── constants/
│   ├── content.ts
│   ├── navigation.ts
│   └── sacraments.ts
│
├── layouts/
│   └── MainLayout.astro
│
├── pages/
│   ├── index.astro
│   ├── nuestra-parroquia.astro
│   ├── sacramentos.astro
│   ├── horarios.astro
│   ├── noticias.astro
│   ├── contacto.astro
│   └── donaciones.astro
│
├── styles/
│   └── global.css
│
└── ...
```

---

# 4. Componentes

Los componentes Astro utilizan **PascalCase**.

### Correcto

```text
Header.astro

Footer.astro

Navbar.astro

SocialLinks.astro

WhatsAppButton.astro

HeroSection.astro

MassSchedule.astro

ParishHistory.astro

SacramentCard.astro
```

### Incorrecto

```text
header.astro

header-component.astro

header_component.astro

hero-section.astro
```

La regla es:

```text
ComponentName.astro
```

---

# 5. Carpeta `shared`

La carpeta `shared` contiene componentes reutilizables en diferentes partes del sitio.

```text
components/

└── shared/

    ├── Footer.astro
    ├── Header.astro
    ├── Navbar.astro
    ├── SocialLinks.astro
    └── WhatsAppButton.astro
```

Un componente debe estar en `shared` cuando pueda utilizarse en diferentes páginas o secciones.

Por ejemplo:

```text
components/

├── shared/
│   └── Header.astro
│
└── sacraments/
    └── SacramentCard.astro
```

`Header.astro` es compartido.

`SacramentCard.astro` pertenece específicamente a la sección de sacramentos.

---

# 6. Páginas

Las páginas de Astro utilizan **kebab-case** cuando contienen varias palabras.

```text
pages/

├── index.astro

├── nuestra-parroquia.astro

├── sacramentos.astro

├── horarios.astro

├── noticias.astro

├── contacto.astro

└── donaciones.astro
```

Aunque estas rutas están en español, es correcto porque son **URLs públicas dirigidas a usuarios hispanohablantes**.

La página principal siempre será:

```text
pages/index.astro
```

No utilizar:

```text
home.astro

inicio.astro

main-page.astro

official-page.astro
```

---

# 7. Layouts

Los archivos de layout utilizan **PascalCase**.

El layout principal será:

```text
layouts/

└── MainLayout.astro
```

Se recomienda `MainLayout.astro` en lugar de `Layout.astro`, ya que identifica claramente que es el layout principal.

Si posteriormente existen otros layouts:

```text
layouts/

├── MainLayout.astro

├── AdminLayout.astro

└── AuthLayout.astro
```

---

# 8. Constants

La carpeta se llama:

```text
constants/
```

Los archivos utilizan nombres en inglés.

```text
constants/

├── content.ts

├── navigation.ts

└── sacraments.ts
```

No utilizar:

```text
constantes/

sacramentos.ts

navegacion.ts
```

aunque el contenido esté en español.

---

# 9. Variables

Las variables utilizan **camelCase**.

```ts
const parishName = "...";

const navigationRoutes = [];

const currentPage = "...";

const selectedSacrament = "...";
```

No utilizar:

```ts
const nombreParroquia = "...";

const rutasNavegacion = [];

const sacramentoSeleccionado = "...";
```

---

# 10. Constantes

Las constantes globales importantes utilizan **UPPER_SNAKE_CASE**.

```ts
export const HOME_ROUTE = "/";

export const DONATIONS_ROUTE = "/donaciones";

export const NAVIGATION_ROUTES = [];
```

La nomenclatura debe permanecer en inglés.

---

# 11. Propiedades de objetos

Las propiedades técnicas utilizan **camelCase** y nombres en inglés.

### Correcto

```ts
{
  id: "baptism",
  title: "Bautismo",
  icon: Droplets,
  image: "...",
  description: "...",
  requirements: [],
  schedule: "Sábados 4:00 PM"
}
```

### Incorrecto

```ts
{
  id: "bautismo",
  titulo: "Bautismo",
  icono: Droplets,
  imagen: "...",
  descripcion: "...",
  requisitos: [],
  horario: "Sábados 4:00 PM"
}
```

---

# 12. Identificadores (`id`)

Los identificadores técnicos utilizan inglés.

Cuando contienen varias palabras, utilizan **kebab-case**.

### Correcto

```ts
id: "baptism";

id: "first-communion";

id: "confirmation";

id: "marriage";

id: "confession";

id: "anointing-of-the-sick";
```

El contenido visible permanece en español:

```ts
title: "Bautismo";

title: "Primera Comunión";

title: "Confirmación";

title: "Matrimonio";

title: "Confesión";

title: "Unción de los Enfermos";
```

---

# 13. Contenido

El contenido destinado al usuario se mantiene en español.

Ejemplo:

```ts
{
  id: "baptism",
  title: "Bautismo",
  description:
    "La puerta a la vida espiritual y la incorporación a la Iglesia.",
  requirements: [
    "Registro civil de nacimiento del niño/a.",
    "Fotocopia de la cédula de los padres.",
  ],
  schedule: "Sábados 4:00 PM - Domingos 9:00 AM",
}
```

No se debe traducir el contenido al inglés solamente porque los nombres técnicos estén en inglés.

---

# 14. Contenido de los componentes

Cada componente debe mantener su **contenido fijo** dentro de una **constante local** utilizando la nomenclatura **UPPER_SNAKE_CASE**.

La constante debe centralizar todos los textos y valores de contenido utilizados por el componente.

El nombre de la constante debe estar en **inglés**, de acuerdo con la regla general del proyecto para nombres técnicos.

El contenido destinado al usuario debe permanecer en **español**.

### Correcto

```ts
const WHO_WE_ARE_CONTENT = {
  label: "Quiénes somos",
  title: "Una comunidad que camina en la fe",
  description:
    "Somos una comunidad parroquial que vive y celebra su fe en comunión con la Diócesis de Cúcuta.",
} as const;
```

El componente debe utilizar la constante:

```astro
<section>
  <span>{WHO_WE_ARE_CONTENT.label}</span>

  <h2>{WHO_WE_ARE_CONTENT.title}</h2>

  <p>{WHO_WE_ARE_CONTENT.description}</p>
</section>
```

### Incorrecto

No escribir directamente el contenido fijo dentro del marcado del componente:

```astro
<section>
  <span>Quiénes somos</span>

  <h2>Una comunidad que camina en la fe</h2>

  <p>
    Somos una comunidad parroquial que vive y celebra su fe en comunión
    con la Diócesis de Cúcuta.
  </p>
</section>
```

Tampoco utilizar nombres de constantes en español:

```ts
const QUIENES_SOMOS_CONTENIDO = {
  etiqueta: "Quiénes somos",
  titulo: "Una comunidad que camina en la fe",
};
```

### Convención para nombres

Las constantes de contenido local deben utilizar nombres en inglés y **UPPER_SNAKE_CASE**.

Se recomienda utilizar el contexto del componente seguido de `_CONTENT`.

```ts
const HERO_CONTENT = {};

const WHO_WE_ARE_CONTENT = {};

const MASS_SCHEDULE_CONTENT = {};

const PARISH_HISTORY_CONTENT = {};

const SACRAMENTS_CONTENT = {};
```

### Propiedades y valores

Las propiedades técnicas de la constante utilizan **camelCase** y nombres en inglés.

Los valores destinados al usuario permanecen en español.

Ejemplo:

```ts
const HERO_CONTENT = {
  label: "Bienvenidos",
  title: "Nuestra comunidad parroquial",
  description: "Caminamos juntos en la fe y en el servicio.",
  image: "/images/parish-church.webp",
  imageAlt: "Iglesia de la parroquia",
  ctaLabel: "Conoce nuestra parroquia",
  ctaHref: "/nuestra-parroquia",
} as const;
```

En este ejemplo:

* `HERO_CONTENT` → inglés + `UPPER_SNAKE_CASE`.
* `label`, `title`, `description`, `image`, `imageAlt`, `ctaLabel`, `ctaHref` → inglés + `camelCase`.
* `"Bienvenidos"`, `"Nuestra comunidad parroquial"`, etc. → español.

### Excepción

Esta regla aplica al **contenido fijo y propio del componente**.

Los datos compartidos entre varios componentes, contenido reutilizable o información que deba centralizarse a nivel de aplicación puede permanecer en archivos dentro de `constants/`.

Por ejemplo:

```text
constants/

├── content.ts

├── navigation.ts

└── sacraments.ts
```

En estos casos, los componentes deben consumir las constantes compartidas en lugar de duplicar la información.

### Regla resumida

```text
¿Es contenido fijo y exclusivo de un componente?
→ constante local

→ WHO_WE_ARE_CONTENT

¿Es una constante de contenido?
→ inglés + UPPER_SNAKE_CASE

→ HERO_CONTENT

¿Es una propiedad de contenido?
→ inglés + camelCase

→ description

¿Es un valor visible para el usuario?
→ español

→ "Una comunidad que camina en la fe"
```

---

# 15. Comentarios

Los comentarios y la documentación del código se escriben en **español**.

### Correcto

```ts
/**
 * Información de los sacramentos disponibles en la parroquia.
 *
 * Este archivo centraliza el contenido de cada sacramento
 * para evitar información escrita directamente en los componentes.
 */
```

También:

```html
<!-- Encabezado -->

<!-- Contenido principal -->

<!-- Pie de página -->
```

No es necesario escribir los comentarios en inglés.

---

# 16. CSS

Los archivos CSS utilizan nombres en inglés.

Los nombres de archivo utilizan **kebab-case** cuando contienen varias palabras.

```text
styles/

└── global.css
```

Ejemplo:

```css
.parish-header {

}

.sacrament-card {

}

.navigation-menu {

}
```

No utilizar nombres técnicos en español:

```css
.encabezado-parroquia {

}

.tarjeta-sacramento {

}
```

---

# 17. Imágenes y archivos estáticos

Los nombres de imágenes y archivos utilizan **inglés + kebab-case**.

### Correcto

```text
parish-church.webp

parish-logo.svg

church-interior.webp

priest-profile.webp

baptism.webp

first-communion.webp
```

### Incorrecto

```text
iglesia-parroquia.webp

logo-parroquia.svg

interior-iglesia.webp

primera-comunion.webp
```

---

# 18. Rutas públicas

Las URLs públicas pueden estar en español.

Esto no contradice la regla de utilizar inglés para el código.

### Correcto

```text
/

/nuestra-parroquia

/sacramentos

/horarios

/noticias

/contacto

/donaciones
```

Las rutas están dirigidas a usuarios hispanohablantes, por lo que mantenerlas en español es apropiado.

---

# 19. Ejemplo completo

```text
src/

├── assets/
│
├── components/
│   ├── shared/
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Navbar.astro
│   │   ├── SocialLinks.astro
│   │   └── WhatsAppButton.astro
│   │
│   ├── home/
│   │   ├── HeroSection.astro
│   │   ├── WelcomeSection.astro
│   │   └── MassSchedule.astro
│   │
│   ├── parish/
│   │   ├── ParishHistory.astro
│   │   ├── ParishInformation.astro
│   │   └── ParishStaff.astro
│   │
│   └── sacraments/
│       ├── SacramentCard.astro
│       └── SacramentList.astro
│
├── constants/
│   ├── content.ts
│   ├── navigation.ts
│   └── sacraments.ts
│
├── layouts/
│   └── MainLayout.astro
│
├── pages/
│   ├── index.astro
│   ├── nuestra-parroquia.astro
│   ├── sacramentos.astro
│   ├── horarios.astro
│   ├── noticias.astro
│   ├── contacto.astro
│   └── donaciones.astro
│
└── styles/
    └── global.css
```

---

# 20. Tabla de referencia rápida

| Elemento                      | Convención         | Ejemplo                   |
| ----------------------------- | ------------------ | ------------------------- |
| Carpetas                      | `lowercase`        | `components/shared/`      |
| Componentes                   | `PascalCase`       | `WhatsAppButton.astro`    |
| Páginas                       | `kebab-case`       | `nuestra-parroquia.astro` |
| Archivos TS                   | `camelCase`        | `sacraments.ts`           |
| Variables                     | `camelCase`        | `parishName`              |
| Constantes globales           | `UPPER_SNAKE_CASE` | `HOME_ROUTE`              |
| Constantes de contenido local | `UPPER_SNAKE_CASE` | `WHO_WE_ARE_CONTENT`      |
| Propiedades                   | `camelCase`        | `isInDevelopment`         |
| IDs                           | `kebab-case`       | `first-communion`         |
| CSS                           | `kebab-case`       | `parish-header`           |
| Comentarios                   | Español            | `// Encabezado`           |
| Contenido                     | Español            | `"Nuestra Parroquia"`     |
| URLs                          | Español            | `/sacramentos`            |

---

# 21. Regla definitiva

Antes de crear cualquier archivo o componente, aplicar estas reglas:

```text
¿Es una carpeta?

→ minúsculas

→ components/shared/

¿Es un componente?

→ PascalCase

→ Header.astro

¿Es una página?

→ kebab-case

→ nuestra-parroquia.astro

¿Es un archivo de datos/constantes?

→ nombre en inglés

→ sacraments.ts

¿Es una variable?

→ camelCase

→ parishName

¿Es una constante global?

→ UPPER_SNAKE_CASE

→ HOME_ROUTE

¿Es una constante de contenido local?

→ UPPER_SNAKE_CASE + inglés

→ WHO_WE_ARE_CONTENT

¿Es una propiedad técnica?

→ camelCase + inglés

→ description

¿Es un identificador?

→ inglés + kebab-case

→ first-communion

¿Es contenido fijo de un componente?

→ constante local

→ HERO_CONTENT

¿Es contenido para el usuario?

→ español

→ "Primera Comunión"

¿Es un comentario?

→ español

→ "Información de los sacramentos"

¿Es una URL pública?

→ español

→ /sacramentos
```

## Principio del proyecto

**Inglés para la estructura y el código.**

**Español para la interfaz, el contenido y la documentación.**

**El contenido fijo de cada componente debe estar centralizado en una constante local `UPPER_SNAKE_CASE`.**

Las carpetas siempre se mantienen en **minúsculas**.
