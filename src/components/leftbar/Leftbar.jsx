import "./leftbar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { Link } from "react-router-dom";


const Leftbar = () => {
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
        <div className="item">
          <HomeOutlinedIcon />
          <span>Home</span>
        </div>

        <div className="item">
          <ExploreOutlinedIcon />
          <span>Esplora</span>
        </div>

        <div className="item">
          <SlideshowOutlinedIcon />
          <span>Reels</span>
        </div>

        <div className="item">
          <FavoriteBorderOutlinedIcon />
          <span>Notifiche</span>
        </div>

        <div className="item">
          <AddBoxOutlinedIcon />
          <span>Crea</span>
        </div>

        <div className="user">
          <img src="" alt="" />
          <span>Eric Cartman</span>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Leftbar