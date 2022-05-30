import { Link, Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"
import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#0052cc',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});

theme = createTheme(theme, {
  palette: {
    info: {
      main: theme.palette.secondary.main,
    },
  },
});

const Home =()=>{
    return(
        <div className="Home">
            <Navbar />
            <div className="homeimage1">
           <img  src="https://i.imgur.com/05Hw3If.jpg"/>
            <div className="image1text">
                <h1 >Do You Have An Amazing Idea?</h1>
                <p>Aspiring Entrepreneurs faces the same problem : The hardest part of having a million dollar business, is arguably making the first dollar. </p>
                <Link  to={"/getstarted"}><div className="homestartbutton">Get Started</div></Link>
                </div>
            </div>
        </div>
    )
}
export default Home