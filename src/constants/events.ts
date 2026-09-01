/**
 * Lista de eventos mostrados en la página de inicio.
 *
 * Cada elemento representa una actividad parroquial y contiene
 * la información utilizada para construir dinámicamente
 * las tarjetas de eventos.
 */

export const events = [
  {
    category: "Celebración",
    date: "Sáb, 24 May • 4:00 PM",
    title: "Celebraciones parroquiales",
    image:
      "https://images.unsplash.com/photo-1617866893127-0dddb005fae7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldWNoYXJpc3QlMjBicmVhZCUyMHdpbmUlMjBlbGVnYW50fGVufDF8fHx8MTc3ODgxMzA3Mnww&ixlib=rb-4.1.0&q=80&w=800",
    altText: "Celebración eucarística",
    path: "/calendario",
    canAddToCalendar: true,
  },
  {
    category: "Comunidad",
    date: "Sáb, 31 May • 10:00 AM",
    title: "Actividades comunitarias",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGdyb3VwJTIwY29tbXVuaXR5JTIwaGFwcHl8ZW58MXx8fHwxNzc4ODEzMDcyfDA&ixlib=rb-4.1.0&q=80&w=800",
    altText: "Encuentro comunitario",
    path: "/calendario",
    canAddToCalendar: true,
  },
  {
    category: "Espiritualidad",
    date: "Dom, 1 Jun • 6:00 PM",
    title: "Espacios de oración y formación",
    image:
      "https://images.unsplash.com/photo-1579975096649-e773152b04cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjaG9pciUyMHdvcnNoaXAlMjBtb2Rlcm58ZW58MXx8fHwxNzc4ODEzMDcyfDA&ixlib=rb-4.1.0&q=80&w=800",
    altText: "Espacio de oración y formación",
    path: "/calendario",
    canAddToCalendar: true,
  },
] as const;
