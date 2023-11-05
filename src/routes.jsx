import { Home, Profile, SignIn, SignUp, Compostaje101 } from "@/pages";
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
  }
];

export default routes;
