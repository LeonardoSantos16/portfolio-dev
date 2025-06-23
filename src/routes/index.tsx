import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Project from "../pages/projects";
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:id" element={<Project />} />
    </Routes>
  );
}
