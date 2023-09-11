import React, {lazy, Suspense, useEffect, useState } from "react"
import ReactDOM  from 'react-dom/client'
import HeaderComponent from "./component/HeaderComponent"
import BodyComponent from "./component/BodyComponent"
import About from "./component/About"
import Contactus from "./component/Contactus"
import Error from "./component/Error"
import RestaurantMenuPage from "./component/RestaurantMenuPage"
// import Grocery from "./component/Grocery"
const Grocery=lazy(()=>import("./component/Grocery"))
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import UserData from "./commmon/UserData.js"

const AppLayout=()=>{
const [userName,setUserName]=useState()

useEffect(()=>{

  const data={userName:"sachin"}
  setUserName(data.userName)
},[])

    return(
      <UserData.Provider value={{loggedInUser:userName,setUserName}}>
    <div className="app">
        <HeaderComponent/>
        <Outlet/>
    </div>
    </UserData.Provider>
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
          path:"/grocery",
          element:<Suspense fallback={<div>Loading...</div>}> <Grocery/> </Suspense> 
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

