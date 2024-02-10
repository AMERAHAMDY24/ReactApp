import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Portofolio from './Components/Portofolio/Portofolio';
import Contact from './Components/Contacts/Contact';
import Notfound from './Components/ErroePath/Notfound';

 let routes = createBrowserRouter([
   {path :"/", element : <Layout />, children :[
    {index :true , element : <Home/>},
     {path :"/Home" , element : <Home/>},
     {path :"/About" , element : <About/>},
     {path :"/Portofolio" , element : <Portofolio/>},
     {path :"/Contact" , element : <Contact/>},
     {path :"*" , element : <Notfound/>}

   ]}
 ])

export default function App() {
  return <>
 <RouterProvider router={routes}></RouterProvider>
</>
}
