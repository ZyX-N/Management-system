import { Routes, Route, Navigate } from "react-router-dom";
import { Admin, Auth } from "./layouts";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/admin/*" element={<Admin />} />
      <Route path="/stock-maganer/*" element={<Admin />} />
      <Route path="/sign-in" element={<Auth />} />
      <Route path="*" element={<Navigate to="/sign-in" replace />} />
    </Routes>
  );
}

export default App;
