/**
 * Lista de noticias mostradas en la página de inicio.
 *
 * Cada elemento representa una publicación parroquial y contiene
 * la información utilizada para construir dinámicamente
 * las tarjetas de noticias.
 */

export const news = [
  {
    category: "Espiritualidad",
    date: "18 May. 2026",
    title: "Jornada de confesiones: un reencuentro con la misericordia",
    description:
      "Más de 300 feligreses se acercaron al sacramento de la Reconciliación en una jornada preparada para Pentecostés.",
    image:
      "https://images.unsplash.com/photo-1553906451-86e5710d388e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmllc3QlMjBibGVzc2luZyUyMHBlb3BsZSUyMHdhcm18ZW58MXx8fHwxNzc4ODEzMDcxfDA&ixlib=rb-4.1.0&q=80&w=800",
    altText: "Jornada de confesiones comunitarias",
    path: "/blog/confesiones-comunitarias-pentecostes",
  },
  {
    category: "Comunidad",
    date: "10 May. 2026",
    title: "Éxito total en el bazar juvenil pro-misiones",
    description:
      "Agradecemos a toda la comunidad. Recaudamos más del doble de la meta para apoyar las misiones.",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGdyb3VwJTIwY29tbXVuaXR5JTIwaGFwcHl8ZW58MXx8fHwxNzc4ODEzMDcyfDA&ixlib=rb-4.1.0&q=80&w=800",
    altText: "Bazar juvenil pro-misiones",
    path: "/blog/exito-bazar-juvenil-pro-misiones",
  },
  {
    category: "Parroquia",
    date: "05 May. 2026",
    title: "Restauración de la fachada del templo",
    description:
      "Conoce los avances de la obra de mantenimiento que embellecerá nuestra casa espiritual.",
    image:
      "https://images.unsplash.com/photo-1698822079732-501a7e06860f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXRob2xpYyUyMGNodXJjaCUyMGNyb3NzJTIwZWxlZ2FudHxlbnwxfHx8fDE3Nzg4MTMwNzF8MA&ixlib=rb-4.1.0&q=80&w=800",
    altText: "Restauración de la fachada del templo",
    path: "/blog/restauracion-fachada-templo",
  },
] as const;
