import { Home, Profile, SignIn, SignUp, Compostaje101, Vid1 } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
  QuestionMarkCircleIcon
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: HomeIcon,
    name: "Página Principal",
    path: "/compostaje-sc/home",
    element: <Home />,
  },
  {
    icon: QuestionMarkCircleIcon,
    name: "Compostaje 101",
    path: "/compostaje-sc/compostaje-101",
    element: <SignUp />,
  },
  {
    path: "/compostaje-sc/compostaje-101/vid-1",
    element: <Vid1 />,
  }
];

export const hiddenRoutes = [
];

export default routes;
