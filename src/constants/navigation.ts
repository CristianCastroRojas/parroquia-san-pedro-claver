/**
 * Rutas de navegación del sitio web.
 *
 * Este archivo centraliza las rutas y nombres de los enlaces
 * para evitar rutas escritas directamente en los componentes.
 */

// Navegación principal
export const RUTA_INICIO = "/" as const;

export const RUTAS_NAVEGACION = [
  { nombre: "Inicio", ruta: RUTA_INICIO },
  { nombre: "Nosotros", ruta: "/nosotros" },
  { nombre: "Sacramentos", ruta: "/sacramentos" },
  { nombre: "Galería", ruta: "/galeria" },
  { nombre: "Contacto", ruta: "/contacto" },
] as const;

// Ruta de acción principal
export const RUTA_DONACION = {
  nombre: "Donar",
  ruta: "/contacto",
} as const;
