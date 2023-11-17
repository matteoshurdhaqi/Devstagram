import { useContext } from "react"
import {AuthContext} from "../../context/authContext"
import "./stories.scss"

const Stories = () => {
    
    const {currentUser} = useContext(AuthContext)
    const stories = [
        {
            id: 1,
            name: "Soshita Nakagata",
            img: "https://picsum.photos/200/300"
        },
        {
            id: 2,
            name: "Soshita Nakagata",
            img: "https://picsum.photos/200/300"
        },
        {
            id: 3,
            name: "Soshita Nakagata",
            img: "https://picsum.photos/200/300"
        },
        {
            id: 4,
            name: "Soshita Nakagata",
            img: "https://picsum.photos/200/300"
        },
    ]

    return (
        <div className='stories'>
            <div className='story'>
                <img src={currentUser.profilePic} alt='' />
                <span>{currentUser.firstname}</span>
                <button>+</button>
            </div>
            {stories.map(story => (
                <div className='story' key={story.id}>
                    <img src={story.img} alt='' />
                    <span>{story.name}</span>
                </div>
            ))}
        </div>
    )
}

export default Stories