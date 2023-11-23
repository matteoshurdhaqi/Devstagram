import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts"
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Profile = () => {
  const {currentUser} = useContext(AuthContext);

  return (
    <div className="profile">
      <div className="images">
        <img src={currentUser.coverImg} alt="" className="cover" />
        <img src={currentUser.profileImg} alt="" className="profilePic" />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large"/>
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize="large"/>
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize="large"/>
            </a>
            
          </div>
          <div className="center">
            <span>{currentUser.name}</span>
            <div className="info">
              <div className="item">
                <PlaceIcon/>
                <span>{currentUser.city}</span>
              </div>
              <div className="item">
                <LanguageIcon/>
                <span>{currentUser.website}</span>
              </div>
              
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon/>
            <MoreVertIcon/>
          </div>
        </div>
        <Posts/> 
      </div>
      
    </div>
  )
}

export default Profile