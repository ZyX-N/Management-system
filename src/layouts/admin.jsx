import { Routes, Route, useNavigate } from "react-router-dom";
import { Sidenav, DashboardNavbar, Footer } from "../widgets/layout";
import routes from "../routes";
import { useContextController } from "../context";
import React from "react";
import { apiConfig } from "../configs/connection";

export function Admin() {
  const navigate = useNavigate();

  const routeToSend = routes.filter((e) => e.layout === "admin")[0];

  const checkLogin = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        navigate("/admin/sign-in", { replace: false });
      }

      let headersList = {
        Authorization: `Bearer ${token}`,
      };

      let response = await fetch(`${apiConfig.base_url}/user/me`, {
        method: "GET",
        headers: headersList,
      });

      // let data = await response.json();
      if (response.status !== 200) {
        localStorage.clear("accessToken");
        navigate("/admin/sign-in", { replace: false });
      }

    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    checkLogin();
  }, []);

  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <Sidenav routes={routeToSend} />
      <div className="p-4 xl:ml-80">
        <DashboardNavbar />

        <div className="bg-white shadow-lg rounded-md px-4">
          <Routes>
            {routes.map(
              ({ layout, pages }) =>
                layout === "admin" &&
                pages.map(({ path, element }) => (
                  <Route exact path={path} element={element} />
                ))
            )}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Admin;
