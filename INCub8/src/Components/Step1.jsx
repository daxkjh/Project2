import React from "react"
import BizCheck from "./BizCheck"
import { Button, TextField } from "@mui/material"
import { useEffect, useState } from "react"


const Step1 = ({handleSubmit})=>{
    return(
        <>
         <h1>Step 1 : Choose Business Name</h1>
     
      <img
        src="https://i.imgur.com/05Hw3If.jpg"
        style={{ borderRadius: "50px", margin: "25px" }}
      />
      <h1>Your Start-up journey begins here</h1>
      <h2>
        Use business checker verify Company name availability
      </h2>
      <form onSubmit={handleSubmit}>
        <TextField
          id="bizname"
          name="bizname"
          label="Business Name"
          variant="outlined"
          style={{ margin: "20px" }}
        />
        <Button variant="contained" size="large" type="submit" style={{ margin: "20px" }}>
          Check Now
        </Button>
      </form>
      <BizCheck bizName={bizName} />
      </>
    )
}
export default Step1