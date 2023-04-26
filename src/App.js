
import {React,useState} from 'react';
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom'
import HomeLayout from "./layouts/HomeLayout";

//-----PAGES-----
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Hobbies from './pages/Hobbies'
import Certificates from './pages/Certificates'
import Contact from './pages/Contact'


function App() {
  const [burgerMenuStatus, setBurgerMenuStatus] = useState(false);

  const burgerMenuHandler = ()=>{
    setBurgerMenuStatus(prev => !prev)
  }
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HomeLayout/>}>
        <Route index element={<Home burgerMenuStatus={burgerMenuStatus} burgerMenuHandler={burgerMenuHandler}/>}/>
        <Route path="about" element={<About burgerMenuStatus={burgerMenuStatus} burgerMenuHandler={burgerMenuHandler}/>}/>
        <Route path="skills" element={<Skills burgerMenuStatus={burgerMenuStatus} burgerMenuHandler={burgerMenuHandler}/>}/>
        <Route path="hobbies" element={<Hobbies/>}/>
        <Route path="certificates" element={<Certificates/>}/>
        <Route path="contact" element={<Contact burgerMenuStatus={burgerMenuStatus} burgerMenuHandler={burgerMenuHandler}/>}/>
      </Route>
    )
  )
  return (
   <RouterProvider router={router}>
   </RouterProvider>
    
  );
}

export default App;
