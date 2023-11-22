import {useQuery} from '@tanstack/react-query'
import { makeRequest } from "../../axios"
import Post from "../post/Post"
import "./posts.scss"



const Posts = () => {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await makeRequest.get('/post'); // Assicurati che l'URL sia corretto
  //       setPosts(response.data);
  //     } catch (error) {
  //       console.error('Errore durante il recupero dei post:', error);
  //     }
  //   };

  //   fetchPosts();
  // }, []);

  const { data: posts, isLoading, isError } = useQuery(['posts'], async () => {
    const response = await makeRequest.get('/post');
    return response.data;
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading posts</p>;

  return (
    <div className='posts'>
      {posts.map(post => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  )
}

export default Posts