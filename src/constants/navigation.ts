/**
 * Rutas de navegación del sitio web.
 *
 * Este archivo centraliza las rutas y nombres de los enlaces
 * para evitar rutas escritas directamente en los componentes.
 */

export const HOME_ROUTE = "/" as const;

export const NAVIGATION_ROUTES = [
  {
    label: "Inicio",
    path: HOME_ROUTE,
    isInDevelopment: false,
  },
  {
    label: "Nuestra Parroquia",
    path: "/nuestra-parroquia",
    isInDevelopment: false,
  },
  {
    label: "Sacramentos",
    path: "/sacramentos",
    isInDevelopment: false,
  },
  {
    label: "Horarios",
    path: "/horarios",
    isInDevelopment: true,
  },
  {
    label: "Noticias",
    path: "/noticias",
    isInDevelopment: true,
  },
  {
    label: "Contacto",
    path: "/contacto",
    isInDevelopment: true,
  },
] as const;

export const DONATIONS_ROUTE = {
  label: "Donaciones",
  path: "/donaciones",
} as const;
