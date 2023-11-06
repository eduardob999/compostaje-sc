import { Home, Profile, SignIn, SignUp, Compostaje101, Vid1 } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
  QuestionMarkCircleIcon
} from "@heroicons/react/24/solid";
import Vid2 from "./pages/vid-2";
import Vid3 from "./pages/vid-3";
import Vid4 from "./pages/vid-4";

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
    name: "",
    path: "/compostaje-sc/compostaje-101/vid-1",
    element: <Vid1 />,
  },
  {
    name: "",
    path: "/compostaje-sc/compostaje-101/vid-2",
    element: <Vid2 />,
  },
  {
    name: "",
    path: "/compostaje-sc/compostaje-101/vid-3",
    element: <Vid3 />,
  },
  {
    name: "",
    path: "/compostaje-sc/compostaje-101/vid-4",
    element: <Vid4 />,
  }
];

export const hiddenRoutes = [
];

export default routes;
