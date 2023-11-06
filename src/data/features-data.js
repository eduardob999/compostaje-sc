import {
  StarIcon,
  ArrowPathIcon,
  FingerPrintIcon,
  QuestionMarkCircleIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/24/solid";

export const featuresData = [
  {
    color: "blue",
    title: "Compostaje 101",
    icon: QuestionMarkCircleIcon,
    description:
      "¿Eres nuevo en el mundo del compostaje? En esta sección, te guiamos a través de los conceptos básicos del compostaje.",
    url: '/compostaje-sc/compostaje-101'
  },
  {
    color: "red",
    title: "Compostaje en la Ciudad",
    icon: BuildingStorefrontIcon,
    description:
      " ¿Vives en la ciudad y piensas que el compostaje es imposible? ¡Piensa de nuevo! Te mostramos cómo hacerlo de manera efectiva incluso en espacios pequeños.",
  },
  {
    color: "teal",
    title: "Beneficios del Compostaje",
    icon: StarIcon,
    description:
      "El compostaje no solo es bueno para el medio ambiente, sino que también tiene beneficios sorprendentes para tu jardín y tu billetera.",
  },
];

export default featuresData;
