import React from 'react'
import { useState } from 'react'

export const UserFunctionComp = () => {
const[count,setCount]=useState(0)
  return (
    <>
        <div>Count  {count}</div>
        <button onClick={()=>{setCount(count+1)}}>Count</button>
    </>

  )
}
