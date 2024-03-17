import { useLocation, Link, useNavigate } from "react-router-dom";
import { Navbar, Typography, Breadcrumbs } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon, ChevronUpIcon, PowerIcon } from "@heroicons/react/24/solid";
// import { , Cog6ToothIcon } from "@heroicons/react/24/solid";
import routes from "../../routes";
import { useState } from "react";
import { useContextController } from "../../context";

export function DashboardNavbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== "");

  const { setSidenavOpen } = useContextController();

  window.addEventListener("resize", () => {
    window.innerWidth > 960 && setSidenavOpen(false);
  });

  return (
    <div className="flex flex-col gap-4">
      <Navbar
        color={"white"}
        className={
          "rounded-xl transition-all sticky top-4 z-40 py-3 shadow-md shadow-blue-gray-500/5 overflow-visible"
        }
        fullWidth
      // blurred={fixedNavbar}
      >
        <div className="w-full relative flex justify-between gap-6 lg:items-center">
          <div className="capitalize hidden lg:flex flex-col justify-between items-start pl-5">
            <Breadcrumbs className={"bg-transparent p-0 transition-all mt-1"}>
              {/* <Link to={`/${layout}`}> */}
                <Typography
                  variant="small"
                  color="blue-gray"
                  // className="font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100"
                  className="font-normal opacity-50"
                >
                  {layout}
                </Typography>
              {/* </Link> */}
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {page}
              </Typography>
            </Breadcrumbs>
            <Typography variant="h6" color="blue-gray">
              {page}
            </Typography>
          </div>
          <div className="flex justify-between items-center w-full lg:w-auto">
            <Bars3Icon
              className="w-7 h-7 text-black cursor-pointer lg:hidden"
              onClick={() => setSidenavOpen(true)}
            />
            <button
              type="button"
              className="inline-flex gap-2 flex-row justify-center rounded-md bg-red-600 p-2 text-sm font-semibold text-white hover:bg-red-500 sm:ml-3 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] hover:scale-105 transition-all duration-75 whitespace-nowrap md:ml-6"
              onClick={() => {
                localStorage.clear("accessToken");
                navigate("/admin/sign-in", { replace: false });
              }}
            >
              <PowerIcon 
              className="w-5 h-5 text-white cursor-pointer"
              />
              Log Out
            </button>
          </div>
        </div>


      </Navbar>

      <div className="capitalize flex flex-col justify-between items-start pl-5 lg:hidden">
        <Breadcrumbs className={"bg-transparent p-0 transition-all mt-1"}>
          <Link to={`/${layout}`}>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100"
            >
              {layout}
            </Typography>
          </Link>
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal"
          >
            {page}
          </Typography>
        </Breadcrumbs>
        <Typography variant="h6" color="blue-gray">
          {page}
        </Typography>
      </div>
    </div>
  );
}

export default DashboardNavbar;
