import { useFetchPosts } from '../../redux/posts/postsSlice'
import { useAppSelector } from '../../redux/reduxHooks';
import PostsComponent from './PostsComponent';

const Posts = () => {
  useFetchPosts(); // Custom hook to fetch posts

  const { posts, isLoading, error } = useAppSelector(state => state.posts)
  
  // Loading
  if (isLoading) {
    return <p>Loading...</p>
  }
  // Error
  if (error) {
    console.error(error)
  }
  
  return (
    <ul>
      {posts?.map(post => (
        <PostsComponent key={post.id} post={post} />
      ))}
    </ul>
  )
}

export default Posts