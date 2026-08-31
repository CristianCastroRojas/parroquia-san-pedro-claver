/**
 * Rutas de navegación del sitio web.
 *
 * Este archivo centraliza las rutas y nombres de los enlaces
 * para evitar rutas escritas directamente en los componentes.
 */

// Navegación principal
export const RUTA_INICIO = "/" as const;

export const RUTAS_NAVEGACION = [
  {
    nombre: "Inicio",
    ruta: RUTA_INICIO,
    enDesarrollo: false,
  },
  {
    nombre: "Nosotros",
    ruta: "#",
    enDesarrollo: true,
  },
  {
    nombre: "Sacramentos",
    ruta: "#",
    enDesarrollo: true,
  },
  {
    nombre: "Calendario",
    ruta: "#",
    enDesarrollo: true,
  },
  {
    nombre: "Blog",
    ruta: "#",
    enDesarrollo: true,
  },
  {
    nombre: "Contacto",
    ruta: "#",
    enDesarrollo: true,
  },
] as const;

// Ruta de acción principal
export const RUTA_DONACION = {
  nombre: "Donar",
  ruta: "#",
} as const;
