import { useEffect, useState ,useContext} from "react"
import { Link } from "react-router-dom"
import useOnlineOffline from "../commmon/useOnlineOffline"
import UserData from "../commmon/UserData.js"
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector"



const HeaderComponent=()=>{

   const {loggedInUser}=useContext(UserData)

   //subscribing the store using useSelector
   const cartItems=useSelector(Store=>Store?.cart?.items)

   console.log("cartItem",cartItems)


    
     
    const [loginbtn,setLoginbtn]=useState("Login")    
    
    
    //if no dependency array,useEffect is called on every Render
    
    
    useEffect(()=>{
        console.log("useEffect Called")
    })
    
    
    //if it has empty array,then useEffect called on initail render Just Ones
    useEffect(()=>{
        console.log("This only ones")
    },[])
    

    
    
    return(

    <div className="flex justify-between bg-pink-100 shadow-lg mb-4">
        <div className="w-56">
            <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsu-C8khhxq3rfL3cUrV1bjL9fc3lBcCtrU0n8xnbYmkI2r_ccOVPhbConC9jrW90nZZs&usqp=CAU"></img>
        </div>
        <div className="nav-items ">
            
            <ul className="flex p-4 m-4 mt-12 justify-around">
                <li className="px-4">{useOnlineOffline()===false?"🔴":"🟢"}</li>

                <li className="px-4"><Link to="/">Home</Link></li>

                <li className="px-4"><Link to="/grocery">Grocery</Link></li>

                <li className="px-4"><Link to="/about">About Us</Link></li>

                <li className="px-4"><Link to="/contact">Contacts</Link></li>

                <li className="px-4 font-bold text-lg"><Link to="/cart">Cart-({cartItems.length} items)</Link></li>

                <button className="loginLogoutbtn" onClick={()=>{
                    loginbtn==="Login"?setLoginbtn("Logout"):setLoginbtn("Login")
                }}>{loggedInUser}
                </button>


            </ul>


        </div>
    </div>
    )


}

export default HeaderComponent