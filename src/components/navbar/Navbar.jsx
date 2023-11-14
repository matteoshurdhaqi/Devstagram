import "./navbar.scss"

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{textDecoration:"none"}}>
          <span>Devstagram</span>
        </Link>
        
        
        
        <div className="search">
          <SearchOutlinedIcon/>
          <input type="text" placeholder="Cerca..."/>
        </div>
      </div>
      <div className="right">
        <DarkModeOutlinedIcon/>
        <PersonOutlineOutlinedIcon/>
        <EmailOutlinedIcon/>
        <NotificationsOutlinedIcon/>
        <div className="user">
          <img src="" alt="" />
          <span>Eric Cartman</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar