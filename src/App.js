import { Routes, Route, Navigate } from "react-router-dom";
import { Auth, Admin } from "./layouts";
import "./App.css"

function App() {
  return (
    <Routes>
      <Route path="/admin/*" element={<Admin />} />
      <Route path="/level-1/*" element={<Auth />} />
      <Route path="*" element={<Navigate to="/admin/sign-in" replace />} />
    </Routes>
  );
}

export default App;
