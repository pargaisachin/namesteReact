import React, {lazy, Suspense, useEffect, useState } from "react"
import ReactDOM  from 'react-dom/client'
import HeaderComponent from "./component/HeaderComponent"
import BodyComponent from "./component/BodyComponent"
import About from "./component/About"
import Contactus from "./component/Contactus"
import Error from "./component/Error"
import RestaurantMenuPage from "./component/RestaurantMenuPage"
import Cart from "./component/Cart"
import Store from "./commmon/store"
import { Provider } from "react-redux"
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
      <Provider store={Store}>
      
       <UserData.Provider value={{loggedInUser:userName,setUserName}}>
         <div className="app">
           <HeaderComponent/>
           <Outlet/>
         </div>
       </UserData.Provider>
      
      </Provider>

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
        },
        {
          path:"/cart",
          element:<Cart/>
        }
      ],
      errorElement:<Error/>
    }
])


const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)

