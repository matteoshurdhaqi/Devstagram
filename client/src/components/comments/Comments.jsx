import { useContext } from "react";
import {AuthContext} from "../../context/authContext";
import "./comments.scss";

const Comments = () => {
    const {currentUser} = useContext(AuthContext);
    const comments = [
        {
            id: 1,
            name: "Eric Cartman",
            userId: 1,
            desc: "lorem ipsum sit dolor amet cosectetur adispicit elit",
            profilePic: "https://static.miraheze.org/greatcharacterswiki/thumb/0/02/The-coon_.png/300px-The-coon_.png"
        },
        {
            id: 2,
            name: "Soshita",
            userId: 2,
            desc: "lorem ipsum sit dolor amet cosectetur adispicit elit",
            profilePic: "https://i.guim.co.uk/img/media/323c85fb489c1c7d57d366f0b0053679a2c6c5df/107_0_718_431/master/718.png?width=465&quality=85&dpr=1&s=none"
        }
    ]

    return (
        <div className="comments">
            <div className="write">
                <img src={currentUser.profilePic} alt="" />
                <input type="text" placeholder="Write a comment"/>
                <button>Send</button>
            </div>
            {comments.map(comment => (
                <div className="comment">
                    <img src={comment.profilePic} alt="" />
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className="date">1 hour ago</span>
                </div>
            ))
        }</div>
    )
}

export default Comments