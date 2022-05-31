import { useState } from "react"
import { Outlet } from "react-router-dom"
import BizCheck from "../Components/BizCheck"
import Navbar from "../Components/Navbar"
import ProgressBar from "../Components/ProgressBar"

const GetStarted =()=>{

    const [bizName, setBizName] = useState("")

const handleSubmit=(event)=>{
event.preventDefault()
setBizName(event.target.bizname.value)
console.log(bizName)
}

    return(
        <div className="GetStarted">
            <Navbar />
            {/* <ProgressBar /> */}
            <img
          src="https://i.imgur.com/05Hw3If.jpg"
          style={{ borderRadius: "50px", margin: '25px'}}
        />
            <h1>Your Start-up journey begins here</h1>
            <h2>Use our business checker to see if your ideal company name is available</h2>
            <form onSubmit={handleSubmit}>
            <input className="searchInput" type="text" id="bizname" name="bizname" placeholder="What do you have in mind?" />
            <button style={{borderRadius: '50px', padding: '10px'}}>Check Now!</button>
            </form>
            <Outlet/>
            <BizCheck bizName={bizName}/>
        </div>
    )
}
export default GetStarted