/**
 * Contenido centralizado del sitio web.
 *
 * Este archivo contiene los textos y datos
 * que se muestran en las diferentes secciones.
 */
export const CONTENT = {
  // Encabezado
  encabezado: {
    nombreCorto: "San Pedro Claver",
    nombreCompleto: "Parroquia San Pedro Claver Cúcuta",
    tipo: "Parroquia",
    ciudad: "Cúcuta",
  },

  // Pie de página
  pie: {
    descripcion:
      "Una comunidad viva que camina en la fe, la esperanza y la caridad. Bienvenidos a tu casa espiritual.",
  },

  // Redes sociales
  redesSociales: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
  },

  // Información de contacto
  contacto: {
    direccion: "Calle 17 #17-62, barrio Vallesther",
    telefono: "323 253 5901",
    correo: "parroquia.sanpedroclaver@diocesisdecucuta.com",
  },

  // Información legal
  legal: {
    privacidad: "Política de Privacidad",
    terminos: "Términos de Uso",
  },

  // Información parroquial
  parroquia: {
    fechaFundacion: "8 de diciembre de 1992",
    parroco: "Rhonald Sttyd Suárez Carrillo",
    vicaría: "San Luis",
    arciprestazgo: "La Sagrada Familia",
    fiestaPatronal: "9 de septiembre",
  },
} as const;
