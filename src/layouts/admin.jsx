import { Routes, Route } from "react-router-dom";
import {
    Sidenav,
    DashboardNavbar,
    Footer,
} from "../widgets/layout";
import routes from "../routes";
import { useContextController } from "../context";

export function Admin() {

    const { terminalOpen, setTerminalOpen } = useContextController();

    const routeToSend = routes.filter((e) => e.layout === "admin")[0];

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
