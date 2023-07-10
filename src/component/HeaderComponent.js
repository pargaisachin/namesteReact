import { useEffect, useState } from "react"

const HeaderComponent=()=>{

    const [loginbtn,setLoginbtn]=useState("Login")
    

    console.log("Header Component Called")
    //if no dependency array,useEffect is called on every Render

    useEffect(()=>{
        console.log("useEffect Called")
    })



    //if it has empty array,then useEffect called on initail render Just Ones

    useEffect(()=>{
        console.log("This only ones")
    },[])


    return(
    <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsu-C8khhxq3rfL3cUrV1bjL9fc3lBcCtrU0n8xnbYmkI2r_ccOVPhbConC9jrW90nZZs&usqp=CAU"></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contacts</li>
                <li>Cart</li>
                <button className="loginLogoutbtn" onClick={()=>{
                    loginbtn==="Login"?setLoginbtn("Logout"):setLoginbtn("Login")
                }}>{loginbtn}</button>
            </ul>
        </div>
    </div>
    )

}

export default HeaderComponent