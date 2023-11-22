import "./leftbar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";


const Leftbar = () => {

  const {currentUser} = useContext(AuthContext);

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
          <img src={currentUser.profileImg} alt="profile-img" />
          <span>{currentUser.name}</span>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Leftbar