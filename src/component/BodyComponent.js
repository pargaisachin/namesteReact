import {useEffect, useState} from "react"
import { resList } from "../commmon/resdata"
import RestaurantContainer from "./RestaurantContainer"
import ShimmerUI from "./shimmer"


const BodyComponent=()=>{

const [listOfRestaurant,setListOfRestaurant]=useState([])
const [copyListOfRestaurant,setcopyListOfRestaurant]=useState([])
const [searchString,setSearchString]=useState("")

useEffect(()=>{
fetchData()
})

useEffect(()=>{
  let filteredListOfRes=copyListOfRestaurant.filter((item)=>{
    return item?.data?.name?.toLowerCase()?.includes(searchString?.toLowerCase())
  })
  setListOfRestaurant(filteredListOfRes)
  console.log(filteredListOfRes)

},[searchString])


  

  const fetchData=async()=>{

     let data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING")
    
    let json=await data.json()

    setListOfRestaurant(json?.data?.cards[2]?.data?.data?.cards)
    setcopyListOfRestaurant(json?.data?.cards[2]?.data?.data?.cards)
    
  }

  if(listOfRestaurant?.length===0){
    return (<><ShimmerUI></ShimmerUI></>)
  }

  

  return(
    <div className="body">
         <div className="filter">
          <button className="filter-btn" onClick={()=>{setListOfRestaurant(resList.filter((item)=>{return item.data.avgRating>4})) }}>Top Rated Restaurant</button>
          <input value={searchString}  onChange={(item)=>{

            setSearchString(item.target.value)

          }}></input>
          <button>Search</button>
          </div>
  
         <div className="res-container">
           {listOfRestaurant.map((resObj)=>{return <RestaurantContainer key={resObj?.data.id} resData={resObj}/>})}
         </div>
    </div>
    )
}
export default BodyComponent


