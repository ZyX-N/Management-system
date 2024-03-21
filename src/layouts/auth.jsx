import { Routes, Route } from "react-router-dom";
import { SignIn } from "../pages/auth";

export function Auth() {
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
