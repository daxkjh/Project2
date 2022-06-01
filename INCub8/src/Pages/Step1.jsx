import React from "react"
import BizCheck from "../Components/BizCheck"
import { Button, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const Step1 = ()=>{
    const [bizName, setBizName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setBizName(event.target.bizname.value);
        console.log("test", event.target.bizname.value)
        console.log(bizName);
      };



    return(
        <>
         <h1>Step 1 : Choose Business Name</h1>
     
      <img
        src="https://i.imgur.com/05Hw3If.jpg"
        style={{ borderRadius: "50px", margin: "25px", float:"right"}}
      />
      <div style={{marginLeft:'5%' }}>
      <h1 style={{marginTop:'5%'}}>Your Start-up journey begins here</h1>
      <h2>
         Verify Company name availability
      </h2>
      <form style={{width:'20%'}} onSubmit={handleSubmit}>
        <TextField
        fullWidth
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
      <Button variant="contained" size="large" component={Link} to="/getstarted/step2" style={{ margin: "10px" }}>
          Next Step {'>'}
        </Button>
        </div>
      </>
    )
}
export default Step1