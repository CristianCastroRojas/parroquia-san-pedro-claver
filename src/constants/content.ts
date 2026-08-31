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
    nombreCompleto: "Parroquia San Pedro Claver",
    tipo: "Parroquia",
    ciudad: "Cúcuta",
  },

  // Pie de página
  pie: {
    descripcion:
      "Una comunidad viva que camina en la fe, la esperanza y la caridad. Bienvenidos a tu casa espiritual.",
  },

  // Redes sociales
  redesSociales: [
    { nombre: "Facebook", url: "#", icono: "simple-icons:facebook" },
    { nombre: "Instagram", url: "#", icono: "simple-icons:instagram" },
    { nombre: "YouTube", url: "#", icono: "simple-icons:youtube" },
  ],

  // Emisora Vox Dei
  voxDei: {
    etiqueta: "Emisora Vox Dei",
    titulo: "La voz de nuestra Iglesia te acompaña",
    descripcion:
      "Escucha Vox Dei, la emisora de las parroquias de la Diócesis de Cúcuta, y mantente conectado con la fe, la comunidad y la vida de nuestra Iglesia.",
    boton: "Escuchar Vox Dei",
    url: "https://emisoravoxdei.com/",
  },

  // Información de contacto
  contacto: {
    direccion: "Calle 17 #17-62, barrio Vallesther",
    telefono: "323 253 5901",
    correo: "parroquia.sanpedroclaver@diocesisdecucuta.com",
  },

  // WhatsApp
  whatsapp: {
    mensaje:
      "Hola, quisiera comunicarme con la parroquia para obtener más información.",
    etiqueta: "Chatea con nosotros",
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
