import {useEffect, useState} from "react"
import RestaurantContainer ,{withLowRatedRestaurantLabel}from "./RestaurantContainer"
import ShimmerUI from "./ShimmerUI"
import { Link } from "react-router-dom"
import useOnlineOffline from "../commmon/useOnlineOffline"


const BodyComponent=()=>{


const [listOfRestaurant,setListOfRestaurant]=useState([])
const [copyListOfRestaurant,setcopyListOfRestaurant]=useState([])
const [searchString,setSearchString]=useState("")
const LowRatedRestaurant=withLowRatedRestaurantLabel(RestaurantContainer)


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
    console.log("pp",json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info?.id)
    console.log(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    setListOfRestaurant(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setcopyListOfRestaurant(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    
  }

  if(listOfRestaurant?.length===0){ 
    return (<><ShimmerUI></ShimmerUI></>)
  }

  return(
    <div className="grid justify-items-center ">
         <div className="">
          <button className=" px-4 bg-gray-200 rounded-lg" onClick={()=>{setListOfRestaurant(listOfRestaurant.filter((item)=>{return item.info.avgRating>4})) }}>Top Rated Restaurant</button>
          <input className="px-8 border border-solid border-black" type="text" value={searchString}   onChange={(item)=>{

            setSearchString(item.target.value)

          }}></input>
          <button className="bg-lime-200 rounded-lg m-4 px-4 py-2" >Search</button>
          </div>
  
         <div className="grid grid-cols-4 gap-4 ">
           {listOfRestaurant.map((resObj,index)=>{
            console.log("p",index,resObj)
          
           return <Link key={resObj?.info.id} to={`/restaurant/${resObj?.info.id}`}>
            {resObj?.info.avgRating<3.8 ?<LowRatedRestaurant resData={resObj}/>:<RestaurantContainer resData={resObj} />}</Link>  
        })}
         </div>
    </div>
    )
}
export default BodyComponent


