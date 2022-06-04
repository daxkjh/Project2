import React from "react"
import { useEffect } from "react"
import SummaryCard from "../Components/SummaryCard"




const Summary =({menuShortlist})=>{



    return(
        <div>
        <h1>Menu Shortlist</h1>
        {menuShortlist.map((x, index)=> <SummaryCard key={index} menuShortlist={x}/>)}
        </div>
    )
}
export default Summary