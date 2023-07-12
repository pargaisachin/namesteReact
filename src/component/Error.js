import { useRouteError } from "react-router-dom"

const Error=()=>{

    const err=useRouteError()



    return(<>
    <div>
        {err.data}
    </div>

    </>)

}

export default Error