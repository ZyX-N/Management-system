import { Routes, Route } from "react-router-dom";
import {
  ChartPieIcon,
  UserIcon,
  UserPlusIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { Navbar, Footer } from "../widgets/layout";
import { SignIn } from "../pages/admin";

export function AdminAuth() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Routes>
        <Route
          exact
          path={"/"}
          element={<SignIn />}
        />
      </Routes>
    </div>
  );
}
