
import {React,useState} from 'react';
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom'
import HomeLayout from "./layouts/HomeLayout";
//STYLES
import './App.css'
//-----PAGES-----
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import SkillsPage from './pages/SkillsPage'
import HobbiesPage from './pages/HobbiesPage'
import CertificatesPage from './pages/CertificatesPage'
import ContactPage from './pages/ContactPage'



function App() {
  const [burgerMenuStatus, setBurgerMenuStatus] = useState(false);

  const burgerMenuHandler = ()=>{
    setBurgerMenuStatus(prev => !prev)
  }
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HomeLayout/>}>
        <Route index element={<Home burgerMenuStatus={burgerMenuStatus} burgerMenuHandler={burgerMenuHandler} setBurgerMenuStatus={setBurgerMenuStatus}/>} />
        <Route path="about" element={<AboutPage burgerMenuStatus={burgerMenuStatus} burgerMenuHandler={burgerMenuHandler}/>}/>
        <Route path="skills" element={<SkillsPage burgerMenuStatus={burgerMenuStatus} burgerMenuHandler={burgerMenuHandler}/>}/>
        <Route path="hobbies" element={<HobbiesPage burgerMenuStatus={burgerMenuStatus} burgerMenuHandler={burgerMenuHandler}/>}/>
        <Route path="certificates" element={<CertificatesPage burgerMenuStatus={burgerMenuStatus} burgerMenuHandler={burgerMenuHandler} />}/>
        <Route path="contact" element={<ContactPage burgerMenuStatus={burgerMenuStatus} burgerMenuHandler={burgerMenuHandler}/>}/>
      </Route>
    )
  )
  return (
   <RouterProvider router={router}>
   </RouterProvider>
    
  );
}

export default App;
