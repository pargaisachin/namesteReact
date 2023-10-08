import ItemList from './itemList'
const RestaurantCategory=(data)=>{

    console.log("data12345",data?.data?.card?.card?.itemCards)
 
 return(
    
    <>
    
    
    {/*Header */}
    <div onClick={()=>{data?.setExpandItem(data?.index)}} className="bg-gray-200 shadow-md rounded-md h-10 m-auto mt-2 w-2/3 px-8 py-2 flex justify-between">
     <span>{data.data.card.card.title}({data?.data?.card?.card?.itemCards?.length})</span>
     <span>&#8964;</span>
    </div>
    
    
    {/*body */}
    {data.expandItemStatus && <div className="w-2/3 m-auto"><ItemList data={data?.data?.card?.card?.itemCards}/></div> }
    

    </>
    
    )

}

export default RestaurantCategory