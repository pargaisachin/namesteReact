import ShimmerUI from "./ShimmerUI";
import { useParams } from 'react-router-dom';
import useRestaurantMenu from "../commmon/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";



const RestaurantMenuPage=()=>{

let {resId}=useParams()

let resInfo= useRestaurantMenu(resId)
const[expandItem,setExpandItem]=useState(null)


    if(resInfo===null){
        return <ShimmerUI/>
    }
    
    const {name,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info

    // const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    const categoryListWithFoodItems=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR

    const categoryList= categoryListWithFoodItems.cards.filter((element)=>{
                 return  element.card.card.title
    })

  
  
return(
    <>
        <div className="text-center mb-8">
        <h1>{name}</h1>
        <p>{cuisines.join(",")} -{costForTwoMessage}</p>
       
        
    </div>
    <div className="">
            {categoryList.map((item,index)=>{
             return (
             <RestaurantCategory expandItemStatus={expandItem===index?true:false} index={index} key={index} data={item} setExpandItem={(clickedIndex)=>{clickedIndex!==expandItem?setExpandItem(clickedIndex):setExpandItem(null) }} />)
        })}

    <div >

        </div>
        
        </div>
    </>

    )
    
}

export default RestaurantMenuPage