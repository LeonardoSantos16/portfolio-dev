import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Project from "../pages/project";
import Projects from "../pages/all-projects";
import AboutMe from "../pages/about-me";
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:id" element={<Project />} />
      <Route path="projects" element={<Projects />} />
      <Route path="/about-me" element={<AboutMe />} />
    </Routes>
  );
}
