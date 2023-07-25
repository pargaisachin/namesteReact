import React from "react"
import ReactDOM  from 'react-dom/client'
import HeaderComponent from "./component/HeaderComponent"
import BodyComponent from "./component/BodyComponent"
import About from "./component/About"
import Contactus from "./component/Contactus"
import Error from "./component/Error"
import RestaurantMenuPage from "./component/RestaurantMenuPage"
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
/**
 * 
 * 
 * header
 * -logo
 * -navbar
 * 
 * Body
 * -searchbar
 * -RestautantContainer
 * 
 * footer
 * 
 * 
 */
const AppLayout=()=>{
    return(
    <div className="app">
        <HeaderComponent/>
        <Outlet/>
    </div>
    )


}


const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      children:[
        {
          path:"/",
          element:<BodyComponent/>,
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/contact",
          element:<Contactus/>
        },
        {
          path:"/restaurant/:resId",
          element:<RestaurantMenuPage/> 
        }
      ],
      errorElement:<Error/>
    }
])


const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)

