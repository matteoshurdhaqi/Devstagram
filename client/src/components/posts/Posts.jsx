import Post from "../post/Post"
import "./posts.scss"

const Posts = () => {

  const posts = [
    {
      id: 0,
      name: "Eric Cartman",
      userId: 1,
      img: "https://www.southpark.it/immagini/episodi/stagione8/2/originali/3.jpg",
      desc: "Il mio robottino ed io al mare"
    },
    {
      id: 1,
      name: "soshita",
      userId: 2,
      img: "https://i.guim.co.uk/img/media/323c85fb489c1c7d57d366f0b0053679a2c6c5df/107_0_718_431/master/718.png?width=465&quality=85&dpr=1&s=none",
      desc: "Campagna di disinformazione"
    },
  ]

  return (
    <div className='posts'>
      {posts.map(post=>(
        <Post post={post} key={post.id}/>
      ))}
    </div>
  )
}

export default Posts