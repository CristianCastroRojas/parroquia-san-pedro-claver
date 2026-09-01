import {
  Activity,
  BookOpen,
  Church,
  Droplets,
  Heart,
  Users,
} from "@lucide/astro";

/**
 * Información de los sacramentos disponibles en la parroquia.
 *
 * Este archivo centraliza el contenido de cada sacramento
 * para evitar información escrita directamente en los componentes.
 *
 * Cada sacramento contiene:
 * - Identificador único.
 * - Título.
 * - Icono representativo.
 * - Imagen.
 * - Descripción.
 * - Requisitos.
 * - Horario o información para solicitarlo.
 */

export const sacraments = [
  {
    id: "baptism",
    title: "Bautismo",
    icon: Droplets,
    image:
      "https://images.unsplash.com/photo-1566516171511-1c411a59c8ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXB0aXNtJTIwd2F0ZXIlMjBjYXRob2xpY3xlbnwxfHx8fDE3Nzc4MTMwNzJ8MA&ixlib=rb-4.1.0&q=80&w=800",
    description:
      "La puerta a la vida espiritual y la incorporación a la Iglesia.",
    requirements: [
      "Registro civil de nacimiento del niño/a.",
      "Fotocopia de la cédula de los padres.",
      "Fotocopia de la cédula de los padrinos.",
      "Certificado de confirmación de los padrinos.",
      "Asistir a la charla pre-bautismal.",
    ],
    schedule: "Sábados 4:00 PM - Domingos 9:00 AM",
  },

  {
    id: "first-communion",
    title: "Primera Comunión",
    icon: Church,
    image:
      "https://images.unsplash.com/photo-1617866893127-0dddb005fae7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldWNoYXJpc3QlMjBicmVhZCUyMHdpbmUlMjBlbGVnYW50fGVufDF8fHx8MTc3ODgxMzA3Mnww&ixlib=rb-4.1.0&q=80&w=800",
    description: "Recibir por primera vez el Cuerpo y la Sangre de Cristo.",
    requirements: [
      "Tener mínimo 9 años cumplidos.",
      "Partida de Bautismo original.",
      "Asistir al ciclo de catequesis (1 año).",
      "Participar en la misa dominical.",
    ],
    schedule: "Catequesis: Sábados 9:00 AM",
  },

  {
    id: "confirmation",
    title: "Confirmación",
    icon: Activity,
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHx8fDE3Nzc4ODEzMDcyfDA&ixlib=rb-4.1.0&q=80&w=800",
    description: "El sello del Espíritu Santo que nos hace testigos de Cristo.",
    requirements: [
      "Tener mínimo 14 años cumplidos.",
      "Partida de Bautismo actualizada.",
      "Constancia de Primera Comunión.",
      "Asistir al ciclo de catequesis (1 año).",
    ],
    schedule: "Catequesis: Sábados 4:00 PM",
  },

  {
    id: "marriage",
    title: "Matrimonio",
    icon: Heart,
    image:
      "https://images.unsplash.com/photo-1643224462567-c72419772a70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmluZ3MlMjBoYW5kcyUyMGNodXJjaHxlbnwxfHx8fDE3Nzg4MTMwNzJ8MA&ixlib=rb-4.1.0&q=80&w=800",
    description: "La unión indisoluble de amor bendecida por Dios.",
    requirements: [
      "Partidas de bautismo actualizadas de ambos.",
      "Registros civiles de nacimiento.",
      "Constancia de curso pre-matrimonial.",
      "Fotocopia de cédulas.",
      "Entrevista con el párroco (3 meses antes).",
    ],
    schedule: "Agendar en despacho con 3 meses de anticipación.",
  },

  {
    id: "confession",
    title: "Confesión",
    icon: BookOpen,
    image:
      "https://images.unsplash.com/photo-1473177104440-ffee2f376098?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaHVyY2glMjBpbnRlcmlvciUyMHJjaGl0ZWN0dXJlJTIwd2FybSUyMGxpZ2h0fGVufDF8fHx8MTc3ODgxMzA3MXww&ixlib=rb-4.1.0&q=80&w=800",
    description: "El sacramento de la misericordia y el perdón de Dios.",
    requirements: [
      "Examen de conciencia.",
      "Dolor de los pecados.",
      "Propósito de enmienda.",
      "Decir los pecados al confesor.",
      "Cumplir la penitencia.",
    ],
    schedule: "Jueves 5:00 PM - Domingos durante las misas.",
  },

  {
    id: "anointing-of-the-sick",
    title: "Unción de los Enfermos",
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1698822079732-501a7e06860f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXRob2xpYyUyMGNodXJjaCUyMGNyb3NzJTIwZWxlZ2FudHxlbnwxfHx8fDE3Nzg4MTMwNzF8MA&ixlib=rb-4.1.0&q=80&w=800",
    description: "Gracia, consuelo y fuerza para quien sufre enfermedad.",
    requirements: [
      "Solicitar con anticipación en el despacho.",
      "En caso de emergencia, llamar al teléfono parroquial.",
    ],
    schedule: "Con cita previa o emergencias 24/7.",
  },
] as const;
