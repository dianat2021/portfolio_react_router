import { React, useRef } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
//STYLES
import "./App.css";
//-----PAGES-----
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import HobbiesPage from "./pages/HobbiesPage";
import CertificatesPage from "./pages/CertificatesPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="hobbies" element={<HobbiesPage />} />
        <Route path="certificates" element={<CertificatesPage b />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router}></RouterProvider>
}

export default App;
