import {
  HomeIcon,
  ChartBarIcon,
  UserIcon,
  HomeModernIcon,
  BellIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/solid";
import { SiAwsorganizations } from "react-icons/si";
import { GiOrganigram } from "react-icons/gi";
import {
  Dashboard,
  Inventory,
  Member,
  Origanization,
  Role,
  SignIn,
} from "./pages/admin";
import Category from "./pages/admin/category";
import { Product } from "./pages/admin/product";

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
        icon: <GiOrganigram {...icon} />,
        name: "origanization",
        path: "/origanization",
        subPages: false,
        element: <Origanization />,
      },
      // {
      //   icon: <UserIcon {...icon} />,
      //   name: "member",
      //   path: "/member",
      //   subPages: false,
      //   element: <Member />,
      // },
      {
        icon: <ClipboardDocumentListIcon {...icon} />,
        name: "category",
        path: "/category",
        subPages: false,
        element: <Category />,
      },
      {
        icon: <HomeModernIcon {...icon} />,
        name: "products",
        path: "/products",
        subPages: false,
        element: <Product />,
      },
      // {
      //   icon: <ClipboardDocumentListIcon {...icon} />,
      //   name: "orders",
      //   path: "/order",
      //   subPages: false,
      //   // element: <Inventory />,
      //   element: <div>Orders</div>,
      // },
      {
        icon: <BellIcon {...icon} />,
        name: "notification",
        path: "/notification",
        subPages: false,
        // element: <Inventory />,
        element: <div>Notification</div>,
      },
    ],
  },
];

export default routes;
