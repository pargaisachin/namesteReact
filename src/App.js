import React from "react"
import ReactDOM  from 'react-dom/client'
import HeaderComponent from "./component/HeaderComponent"
import BodyComponent from "./component/BodyComponent"
import About from "./component/About"
import Contactus from "./component/Contactus"
import {createBrowserRouter,RouterProvider} from "react-router-dom"
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

    console.log("bodyelement",<BodyComponent/>)
    return(
    <div className="app">
        <HeaderComponent/>
        <BodyComponent/>
    </div>
    )
}
const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>
    },
    {
      path:"/about",
      element:<About/>
    },

    {
      path:"/contact",
      element:<Contactus/>
    }
])


const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)