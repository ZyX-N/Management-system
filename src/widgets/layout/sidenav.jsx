import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ChartBarSquareIcon, TrashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { useMemo, useState } from "react";
import { useContextController } from "../../context";

export function Sidenav({ routes }) {

  const { sidenavOpen, setSidenavOpen } = useContextController();

  const [searchTerm, setSearchTerm] = useState("");

  const sidenavTypes = {
    dark: "bg-gradient-to-br from-gray-800 to-gray-900",
    white: "bg-white shadow-sm",
    transparent: "bg-transparent",
  };

  useMemo(() => {
    if (searchTerm.length > 1) {
      getStocksList(searchTerm)
    }
  }, [searchTerm]);

  return (
    <aside
      className={`${sidenavTypes['white']} ${sidenavOpen ? "translate-x-0" : "-translate-x-80"
        } fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 border border-blue-gray-100`}
    >
      <div
        className={`relative`}
      >
        <Link to="/" className="py-6 px-8 text-center">
          <Typography
            variant="h6"
            // color={sidenavType === "dark" ? "white" : "blue-gray"}
            color={"blue-gray"}
          >
            {"Admin"}
          </Typography>
        </Link>

        <IconButton
          variant="text"
          color="white"
          size="sm"
          ripple={false}
          className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
          onClick={() => setSidenavOpen(false)}
        >
          <XMarkIcon strokeWidth={2.5} className="h-5 w-5 text-black" />
        </IconButton>
      </div>

      <div className="mx-4 flex flex-col gap-1.5 h-[calc(100%-80px)]">
        {routes.pages.map((item) => (
          <div className="w-full h-10 text-white bg-indigo-500 hover:bg-indigo-600 rounded-md cursor-pointer" key={item.name}>
            <Link to={"/" + routes.layout + item.path} className="w-full h-full flex justify-center items-center capitalize">{item.name}</Link>
          </div>
        ))
        }
      </div>

    </aside>
  );
}

Sidenav.defaultProps = {
  brandImg: "/img/logo-ct.png",
  brandName: "Material Tailwind React",
};

Sidenav.propTypes = {
  brandImg: PropTypes.string,
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Sidenav.displayName = "/src/widgets/layout/sidnave.jsx";

export default Sidenav;
