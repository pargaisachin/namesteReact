import ShimmerUI from "./ShimmerUI";
import { useParams } from 'react-router-dom';
import useRestaurantMenu from "../commmon/useRestaurantMenu";



const RestaurantMenuPage=()=>{

let {resId}=useParams()

let resInfo= useRestaurantMenu(resId)

    if(resInfo===null){
        return <ShimmerUI/>
    }
    
    const {name,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info

    const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

  
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