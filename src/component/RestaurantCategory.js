import ItemList from './itemList'
const RestaurantCategory=(data)=>{
 
 return(
    
    <>
    
    
    {/*Header */}
    <div onClick={()=>{data?.setExpandItem(data?.index)}} className="bg-gray-200 shadow-md rounded-md h-10 m-auto mt-2 w-1/2 px-8 py-2 flex justify-between">
     <span>{data.data.card.card.title}({data?.data?.card?.card?.itemCards?.length})</span>
     <span>&#8964;</span>
    </div>
    
    
    {/*body */}
    {data.expandItemStatus && <div className="w-1/2 m-auto"><ItemList /></div> }
    

    </>
    
    )

}

export default RestaurantCategory