import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <div className="Navbar" style={{ backgroundColor: "black" }}>
      <Link to={"/"}>
        <img className="Logo" src="https://i.imgur.com/a6JQfBz.png?1" />
      </Link>
      <Link to={"/"}>
        <div className="nav">Home</div>
      </Link>
      <Link to={"/getstarted/step1"}>
        <div className="nav">Getting Started</div>
      </Link>
      <Link to={"/plans"}><div className="nav">Plans</div></Link>
      <Link to={"/contacts"}><div className="nav">Contact Us</div></Link>
    </div>
  );
};
export default Navbar;
