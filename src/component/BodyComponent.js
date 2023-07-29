import {useEffect, useState} from "react"
import RestaurantContainer from "./RestaurantContainer"
import ShimmerUI from "./ShimmerUI"
import { Link } from "react-router-dom"
import useOnlineOffline from "../commmon/useOnlineOffline"


const BodyComponent=()=>{

const [listOfRestaurant,setListOfRestaurant]=useState([])
const [copyListOfRestaurant,setcopyListOfRestaurant]=useState([])
const [searchString,setSearchString]=useState("")

useEffect(()=>{
fetchData()
},[])

useEffect(()=>{
  let filteredListOfRes=copyListOfRestaurant.filter((item)=>{
    return item?.info?.name?.toLowerCase()?.includes(searchString?.toLowerCase())
  })
  setListOfRestaurant(filteredListOfRes)
  console.log(filteredListOfRes)

},[searchString])

let onlineStatus=useOnlineOffline()

if(onlineStatus===false){
  return <h1>Looks like your are offline ,Please check your internet</h1>
}


  

  const fetchData=async()=>{

     let data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING")
    
    let json=await data.json()

    setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setcopyListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    
  }

  if(listOfRestaurant?.length===0){
    return (<><ShimmerUI></ShimmerUI></>)
  }

  return(
    <div className="body">
         <div className="filter">
          <button className="filter-btn" onClick={()=>{setListOfRestaurant(listOfRestaurant.filter((item)=>{return item.info.avgRating>4})) }}>Top Rated Restaurant</button>
          <input value={searchString}  onChange={(item)=>{

            setSearchString(item.target.value)

          }}></input>
          <button>Search</button>
          </div>
  
         <div className="res-container">
           {listOfRestaurant.map((resObj)=>{
          
           return <Link key={resObj?.info.id} to={`/restaurant/${resObj?.info.id}`}><RestaurantContainer key={resObj?.info.id} resData={resObj} /><RestaurantContainer resData={resObj} /></Link>  
        })}
         </div>
    </div>
    )
}
export default BodyComponent


