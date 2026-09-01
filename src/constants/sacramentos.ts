import {
  Activity,
  BookOpen,
  Church,
  Droplets,
  Heart,
  Users,
} from "@lucide/astro";

export const sacramentos = [
  {
    id: "bautismo",
    titulo: "Bautismo",
    icono: Droplets,
    imagen:
      "https://images.unsplash.com/photo-1566516171511-1c411a59c8ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXB0aXNtJTIwd2F0ZXIlMjBjYXRob2xpY3xlbnwxfHx8fDE3Nzc4MTMwNzJ8MA&ixlib=rb-4.1.0&q=80&w=800",
    descripcion:
      "La puerta a la vida espiritual y la incorporación a la Iglesia.",
    requisitos: [
      "Registro civil de nacimiento del niño/a.",
      "Fotocopia de la cédula de los padres.",
      "Fotocopia de la cédula de los padrinos.",
      "Certificado de confirmación de los padrinos.",
      "Asistir a la charla pre-bautismal.",
    ],
    horario: "Sábados 4:00 PM - Domingos 9:00 AM",
  },
  {
    id: "primera-comunion",
    titulo: "Primera Comunión",
    icono: Church,
    imagen:
      "https://images.unsplash.com/photo-1617866893127-0dddb005fae7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldWNoYXJpc3QlMjBicmVhZCUyMHdpbmUlMjBlbGVnYW50fGVufDF8fHx8MTc3ODgxMzA3Mnww&ixlib=rb-4.1.0&q=80&w=800",
    descripcion:
      "Recibir por primera vez el Cuerpo y la Sangre de Cristo.",
    requisitos: [
      "Tener mínimo 9 años cumplidos.",
      "Partida de Bautismo original.",
      "Asistir al ciclo de catequesis (1 año).",
      "Participar en la misa dominical.",
    ],
    horario: "Catequesis: Sábados 9:00 AM",
  },
  {
    id: "confirmacion",
    titulo: "Confirmación",
    icono: Activity,
    imagen:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGdyb3VwJTIwY29tbXVuaXR5JTIwaGFwcHl8ZW58MXx8fHwxNzc4ODEzMDcyfDA&ixlib=rb-4.1.0&q=80&w=800",
    descripcion:
      "El sello del Espíritu Santo que nos hace testigos de Cristo.",
    requisitos: [
      "Tener mínimo 14 años cumplidos.",
      "Partida de Bautismo actualizada.",
      "Constancia de Primera Comunión.",
      "Asistir al ciclo de catequesis (1 año).",
    ],
    horario: "Catequesis: Sábados 4:00 PM",
  },
  {
    id: "matrimonio",
    titulo: "Matrimonio",
    icono: Heart,
    imagen:
      "https://images.unsplash.com/photo-1643224462567-c72419772a70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmluZ3MlMjBoYW5kcyUyMGNodXJjaHxlbnwxfHx8fDE3Nzg4MTMwNzJ8MA&ixlib=rb-4.1.0&q=80&w=800",
    descripcion:
      "La unión indisoluble de amor bendecida por Dios.",
    requisitos: [
      "Partidas de bautismo actualizadas de ambos.",
      "Registros civiles de nacimiento.",
      "Constancia de curso pre-matrimonial.",
      "Fotocopia de cédulas.",
      "Entrevista con el párroco (3 meses antes).",
    ],
    horario: "Agendar en despacho con 3 meses de anticipación.",
  },
  {
    id: "confesion",
    titulo: "Confesión",
    icono: BookOpen,
    imagen:
      "https://images.unsplash.com/photo-1473177104440-ffee2f376098?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaHVyY2glMjBpbnRlcmlvciUyMHJjaGl0ZWN0dXJlJTIwd2FybSUyMGxpZ2h0fGVufDF8fHx8MTc3ODgxMzA3MXww&ixlib=rb-4.1.0&q=80&w=800",
    descripcion:
      "El sacramento de la misericordia y el perdón de Dios.",
    requisitos: [
      "Examen de conciencia.",
      "Dolor de los pecados.",
      "Propósito de enmienda.",
      "Decir los pecados al confesor.",
      "Cumplir la penitencia.",
    ],
    horario: "Jueves 5:00 PM - Domingos durante las misas.",
  },
  {
    id: "uncion",
    titulo: "Unción de los Enfermos",
    icono: Users,
    imagen:
      "https://images.unsplash.com/photo-1698822079732-501a7e06860f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXRob2xpYyUyMGNodXJjaCUyMGNyb3NzJTIwZWxlZ2FudHxlbnwxfHx8fDE3Nzg4MTMwNzF8MA&ixlib=rb-4.1.0&q=80&w=800",
    descripcion:
      "Gracia, consuelo y fuerza para quien sufre enfermedad.",
    requisitos: [
      "Solicitar con anticipación en el despacho.",
      "En caso de emergencia, llamar al teléfono parroquial.",
    ],
    horario: "Con cita previa o emergencias 24/7.",
  },
];