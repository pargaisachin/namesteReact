import { Logo_URL } from "../commmon/resdata"
const RestaurantContainer=(props)=>{
    let {resData}=props

    let {name,cuisines,deliveryTime,costForTwo,avgRating,cloudinaryImageId}=resData?.data


return(
<div className="res-card">
 <div >
     <img className="res-logo"  alt="res-logo" src={Logo_URL+cloudinaryImageId}></img>
 </div>
 <h3>{name}</h3>
 <h4>{cuisines.join(",")}</h4>
 <h4>{deliveryTime + 'minutes'}</h4>
 <h4>{avgRating}</h4>
 <h4>{`${costForTwo/100} For Two`}</h4>

</div>
)

}

export default RestaurantContainer