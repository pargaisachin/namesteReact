import { useState,useEffect } from "react"

const useOnlineOffline=()=>{

    const [internetStatus,setInternetStatus]=useState(true)

    useEffect(()=>{
        connectivityStatus()
    },[])

    const connectivityStatus=()=>{

        window.addEventListener("online",()=>{setInternetStatus(true)})
        window.addEventListener("offline",()=>{setInternetStatus(false)})

    }

    return internetStatus






}

export default useOnlineOffline