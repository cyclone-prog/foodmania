import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import Error from './components/Error';
import RestaurantDetail from './components/RestaurantDetail';

import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';

const Main = () => {
  return(
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Main/>,
    errorElement:<Error/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },{
        path:"/contact",
        element:<Contact/>
      },{
        path:"/restaurant/:urlId",
        element:<RestaurantDetail/>
      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>)
