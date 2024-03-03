import { useLocation, Link, useNavigate } from "react-router-dom";
import { Navbar, Typography, Breadcrumbs } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
// import { , Cog6ToothIcon } from "@heroicons/react/24/solid";
import routes from "../../routes";
import { useState } from "react";

export function DashboardNavbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== "");

  const [navOpen, setNavOpen] = useState(false);
  const [activeNavName, setActiveNavName] = useState("dashboard");

  const getSubPages = (pageName) => {
    let currentLayout = {};
    routes.forEach((item) => {
      item.layout === layout && (currentLayout = item);
    });

    if (Object.keys(currentLayout).length === 0) {
      return [];
    }
    // console.log(currentLayout);
    let subPagesList = currentLayout.subPages.filter(
      (item) => item.parent === pageName
    );
    return subPagesList;
  };

  window.addEventListener("resize", () => {
    window.innerWidth > 720 && setNavOpen(false);
  });

  return (
    <Navbar
      color={"white"}
      className={
        "rounded-xl transition-all sticky top-4 z-40 py-3 shadow-md shadow-blue-gray-500/5 overflow-visible"
      }
      fullWidth
      // blurred={fixedNavbar}
    >
      <div className="relative flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
        <div className="capitalize flex justify-between items-center">
          <div className="">
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
          <div className="inline-block md:hidden text-black">
            {navOpen ? (
              <XMarkIcon
                className="w-7 h-7 text-black cursor-pointer"
                onClick={() => setNavOpen(false)}
              />
            ) : (
              <Bars3Icon
                className="w-7 h-7 text-black cursor-pointer"
                onClick={() => setNavOpen(true)}
              />
            )}
          </div>
        </div>

        {/* <div className="hidden md:flex items-end w-full"> */}
        <div className="flex justify-end items-center w-full">
          <ul className="mr-auto md:ml-auto w-full flex justify-end">
            {routes.map(
              ({ layout, pages }) =>
                layout === "dashboard" &&
                pages.map(({ path, name, subPages }) => (
                  <div
                    className="relative flex items-center"
                    key={name}
                    onMouseEnter={(e) => {
                      let target = e.currentTarget.lastChild;
                      if (target.tagName.toLowerCase() === "div") {
                        target.classList.remove("hidden");
                        target.classList.add("block");
                        e.currentTarget.firstChild.classList.add(
                          "bg-gradient-to-br",
                          "from-gray-800",
                          "to-gray-900",
                          "text-white"
                        );
                      }
                    }}
                    onMouseLeave={(e) => {
                      let target = e.currentTarget.lastChild;
                      if (target.tagName.toLowerCase() === "div") {
                        target.classList.remove("block");
                        target.classList.add("hidden");
                        e.currentTarget.firstChild.classList.remove(
                          "bg-gradient-to-br",
                          "from-gray-800",
                          "to-gray-900",
                          "text-white"
                        );
                      }
                    }}
                  >
                    {subPages ? (
                      <>
                        <div
                          className={`px-3 py-2 mr-2 cursor-default hover:text-white hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-900 whitespace-nowrap rounded-md text-gray-900 capitalize transition-all duration-300 ease-in-out ${
                            "/" + page === path
                              ? "text-white bg-gradient-to-br from-gray-800 to-gray-900"
                              : ""
                          }`}
                        >
                          {name}
                        </div>
                        <div
                          className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg absolute top-[103%] right-1.5 hidden`}
                        >
                          <ul className="flex flex-col gap-1 p-1">
                            {getSubPages(name).map(
                              ({ name: subName, path: subPath }) => (
                                <li
                                  className="bg-transparent hover:bg-gray-700 text-white capitalize rounded-md h-8 min-w-28"
                                  key={subName}
                                >
                                  <Link
                                    to={`/${layout}${subPath}`}
                                    className="w-full h-full flex items-center px-2 cursor-pointer whitespace-nowrap"
                                  >
                                    {subName}
                                  </Link>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </>
                    ) : (
                      <Link
                        to={`/${layout}${path}`}
                        className={`px-3 py-2 mr-2 hover:text-white hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-900 whitespace-nowrap rounded-md text-gray-900 capitalize transition-all duration-300 ease-in-out ${
                          "/" + page === path
                            ? "text-white bg-gradient-to-br from-gray-800 to-gray-900"
                            : ""
                        }`}
                      >
                        {name}
                      </Link>
                    )}
                  </div>
                ))
            )}
          </ul>
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:bg-red-500 sm:ml-3 sm:w-auto shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] hover:scale-105 transition-all duration-75 whitespace-nowrap md:ml-6"
            onClick={() => {
              navigate("/admin/sign-in", { replace: false });
            }}
          >
            Log Out
          </button>
        </div>

        {/* {navOpen && (
          <div className="absolute top-[140%] flex items-center w-full">
            <ul className="mr-auto md:ml-auto w-full flex flex-col justify-end bg-white shadow-md shadow-gray-400 rounded-xl p-2">
              {routes.map(
                ({ layout, pages }) =>
                  layout === "dashboard" &&
                  pages.map(({ path, name, subPages }) => (
                    <li
                      className={`relative px-3 py-2 my-0.5 rounded-lg hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-900 hover:text-white w-full cursor-pointer ${
                        "/" + page === path
                          ? "text-white bg-gradient-to-br from-gray-800 to-gray-900"
                          : "text-gray-900"
                      }`}
                      key={name}
                      onClick={() => {
                        setActiveNavName(activeNavName === name ? null : name);
                      }}
                    >
                      <Link
                        to={`/${layout}${path}`}
                        className={`whitespace-nowrap rounded-lg capitalize transition-all duration-300 ease-in-out flex justify-between`}
                      >
                        {name}
                        {subPages && (
                          <ChevronUpIcon className="w-5 h-5 rotate-180" />
                        )}
                      </Link>

                      {subPages && (
                        <div
                          className={`w-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg absolute top-[105%] left-1/2 -translate-x-1/2 z-50 ${
                            activeNavName === name ? "block" : "hidden"
                          }`}
                        >
                          <ul className="flex flex-col gap-1 p-1">
                            {getSubPages(name).map(
                              ({ name: subName, path: subPath }) => (
                                <li
                                  className="bg-transparent hover:bg-gray-700 text-white capitalize rounded-md h-8 min-w-28"
                                  key={subName}
                                >
                                  <Link
                                    to={`/${layout}${subPath}`}
                                    className="w-full h-full flex items-center px-2 cursor-pointer whitespace-nowrap"
                                  >
                                    {subName}
                                  </Link>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}
                    </li>
                  ))
              )}
              <li>
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:bg-red-500 sm:ml-3 sm:w-auto shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] hover:scale-105 transition-all duration-75 whitespace-nowrap mt-4"
                  onClick={() => {
                    navigate("/auth/sign-in", { replace: false });
                  }}
                >
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        )} */}
      </div>
    </Navbar>
  );
}

DashboardNavbar.displayName = "/src/widgets/layout/dashboard-navbar.jsx";

export default DashboardNavbar;
