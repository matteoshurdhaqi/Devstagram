import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useContext, useEffect, useState } from "react";
import { makeRequest } from "../../axios";
import { AuthContext } from "../../context/authContext";
import moment from "moment";

const Post = ({ post }) => {

  const [posts, setPosts] = useState([]);

  const {currentUser} = useContext(AuthContext);
  const [commentOpen, setCommentOpen] = useState(false);
  const liked = false;
  
  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.user.profileImg} alt="" />
            <div className="details">
              <Link to={`/profile/${post.userId}`} style={{ textDecoration: "none", color: "inherit" }}>
                <span className="name">{post.user.name}</span>
              </Link>
              <span className="date">{moment(post.createdAt).calendar()}</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>{post.description}</p>
          <p>{post.tags}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {liked ? <FavoriteOutlinedIcon /> :<FavoriteBorderOutlinedIcon/>}
            12 likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon/>
            12 comments
          </div>
          <div className="item">
            <ShareOutlinedIcon/>
            share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  )
}

export default Post