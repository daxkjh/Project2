import { Link } from "react-router-dom"
import '../App.css'

const Navbar =()=>{
    return(
        <div className="Navbar">
           <Link to={"/"}><img className="Logo" src="https://i.imgur.com/rDkJtJw.png?1"/></Link>
           <Link to={"/"}><div className="nav">Home</div></Link>
            <Link to={"/getstarted"}><div className="nav">Getting Started</div></Link>
            <div className="nav">Plans</div>
            <div className="nav">Contact Us</div>
        </div>
    )
}
export default Navbar