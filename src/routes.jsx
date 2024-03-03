import {
  HomeIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";
import { Dashboard, Inventory, Member, Role, SignIn } from "./pages/admin";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "admin",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/dashboard",
        subPages: false,
        element: <Dashboard />,
      },
      {
        icon: <ChartBarIcon {...icon} />,
        name: "role",
        path: "/role",
        subPages: false,
        element: <Role />,
      },
      {
        icon: <ChartBarIcon {...icon} />,
        name: "member",
        path: "/member",
        subPages: false,
        element: <Member />,
      },
      {
        icon: <ChartBarIcon {...icon} />,
        name: "inventory",
        path: "/inventory",
        subPages: false,
        element: <Inventory />,
      },
    ],
    auth:[
      {
        icon: <HomeIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        subPages: false,
        element: <SignIn />,
      },
    ]
  },

];

export default routes;
