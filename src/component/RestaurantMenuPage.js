import { useEffect,useState } from "react"
import ShimmerUI from "./shimmer"

import { useParams } from 'react-router-dom';



const RestaurantMenuPage=()=>{

let {resId}=useParams()

useEffect((item)=>{
   fetchData()
},[])

const [restaurantMenuData,setRestaurantMenuData]=useState(null)



const fetchData= async()=>{

     let data=await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${resId}&submitAction=ENTER`)
     
     let jsonData=await data.json()

     setRestaurantMenuData(jsonData?.data)

    }

    if(restaurantMenuData===null){
        return <ShimmerUI/>
    }

    
    const {name,cuisines,costForTwoMessage}=restaurantMenuData?.cards[0]?.card?.card?.info

    const {itemCards}=restaurantMenuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card


  
return(

    
    <div className="restaurant-menu">
        <h1>{name}</h1>
        <p>{cuisines.join(",")} -{costForTwoMessage}</p>
        <h1>Menu</h1>
        <ul>
            {itemCards.map((item)=>{
              return <li>{item.card.info.name}</li>
        })}
        </ul>
        
    </div>

    )

    
}

export default RestaurantMenuPage