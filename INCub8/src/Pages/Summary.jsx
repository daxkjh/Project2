import React from "react"
import { useEffect } from "react"
import SummaryCard from "../Components/SummaryCard"




const Summary =({menuShortlist, setMenuShortlist})=>{



    return(
        <div>
        <h1>Menu Shortlist</h1>
        {menuShortlist.map((x, index)=> <SummaryCard key={index} favItem={x} menuShortlist={menuShortlist} setMenuShortlist={setMenuShortlist}/>)}
        </div>
    )
}
export default Summary