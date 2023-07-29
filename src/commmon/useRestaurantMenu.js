import { useEffect,useState } from "react"
import { Menu_URL } from "./Constant"


const useRestaurantMenu= (resId)=>{

const [resInfo,setResInfo]=useState(null)
useEffect(()=>{
    fetchData()
 },[])
 
 const fetchData= async()=>{
    
 
      let data=await fetch(Menu_URL+resId)
      
      let jsonData=await data.json()
     
 
      setResInfo(jsonData?.data)
 
     }
   
 
     return resInfo
}

export default useRestaurantMenu