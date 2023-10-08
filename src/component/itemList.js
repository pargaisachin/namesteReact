import { Logo_URL } from "../commmon/Constant"
import { useDispatch } from "react-redux"
import { addItems } from "../commmon/cartSlice"

const ItemList=(data)=>{

    const dispatch=useDispatch()


    
    const handleItem=(item)=>{


        
        dispatch(addItems(item))
        

    }


    return(
        data?.data?.map((item)=>{

          

return(
            <div className="w-full bg-gray-100  shadow-md p-4 flex justify-between  border-b-gray-300 border-b-2">
                <div className="w-9/12 flex flex-col justify-between" >
                <h1 className="text-lg font-bold">{item?.card?.info?.name}</h1>
                <h1 className="mt-2">{item?.card?.info?.description}</h1>
                <h1 className="text-lg  mt-2">{"₹"}{item?.card?.info?.price}</h1>

                </div>
                <div className="w-3/12">
                <button className="absolute bg-black text-white ml-2 mt-2 p-2 rounded-md" onClick={()=>{   handleItem(item)}}> Add+</button>
                    <img src={Logo_URL+item?.card?.info?.imageId}></img>
                {/* <h1>{item?.card?.info?.imageId}</h1> */}
                </div>
                

            </div>
           
)
            
        })

    )

}


export default  ItemList

