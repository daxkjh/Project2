import Navbar from "../Components/Navbar"

const Contact = ()=>{
    return(
        <>
        <Navbar />
        <div className="belowNav">
            <div style={{marginTop:"5%", marginLeft: '10%'}}>
        <h1>Contact Us</h1>
        <h2>Hotline: 1800-2255-669</h2>
        <h2>Email: incubegg_contact@incubegg.com</h2>
        <h2>Location: 61 JohnDoe Street</h2>
        </div>
        </div>
        </>
    )
}
export default Contact