import React from "react"
import { json } from "react-router-dom"

class UserClassComp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:"dummy name",
            location:"dummy location",
            avatar_url:"http://dummyimage.com"
        }

    }

  async  componentDidMount(){
   let data= await fetch("https://api.github.com/users/pargaisachin")

   let userData=await data.json()
  

    this.setState({
        name:userData.name,
        location:userData.location,
        avatar_url:userData.avatar_url
    })

 
    


    }


    componentDidUpdate(){
        console.log("component Did Update Called")
    }

    componentWillUnmount(){
        console.log("component will unmount called")
    }

    render(){
        return(
      <>
      <div className="user-card">
        <img src={this.state.avatar_url}></img>
         <h1>Name-{this.state.name}</h1>
         <h1>location-{this.state.location}</h1>
      </div>

      </>
        )
    }
}

export default UserClassComp