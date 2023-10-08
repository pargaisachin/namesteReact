import { Logo_URL } from "../commmon/Constant"
const RestaurantContainer=(props)=>{
    let {resData}=props


   



    let {name,cuisines,sla,costForTwo,avgRating,cloudinaryImageId}=resData?.info


return(
<div className=" bg-gray-300 hover:bg-gray-400  w-44 h-72 rounded-lg  border border-slate-100 border-solid">
 
     <img className="w-40 h-32 ml-2 mt-2 border border-slate-150 rounded-xl"   alt="res-logo" src={Logo_URL+cloudinaryImageId}></img>
     <div className="w-40  ml-3 ">
     <h3 className=" truncate font-bold">{name}</h3>
      <h4 className=" truncate">{cuisines.join(",")}</h4>
      <h4>{sla.deliveryTime
 + 'minutes'}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
     </div>
 
 


</div>
)

}

export const withLowRatedRestaurantLabel=(RestaurantContainer)=>{

      return (resData)=>{

          return(<>
          <label className="absolute bg-black text-white px-2 rounded-lg my-2">Low Rated</label>
          <RestaurantContainer resData={resData?.resData}/>
          </>)
      }


}

export default RestaurantContainer