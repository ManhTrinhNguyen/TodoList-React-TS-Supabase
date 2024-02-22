import { useFetchPosts } from '../../../redux/posts/postsSlice';
import { useAppSelector } from '../../../redux/reduxHooks';
import PostForm from '../PostForm/PostForm';
import PostComponent from '../PostComponent/PostsComponent';
import SignOut from '../../../Auth/SignOut/SignOut';
import Header from '../../Header/Header';
import { useState } from 'react';
import CountItem from '../CountItem/CountItem';
import ShowCompletedPost from '../ShowCompletedPost/ShowCompletedPost';
import './Posts.scss';
import { FC } from 'react';

interface PostsProps {
  user_id: string
}

const Posts: FC<PostsProps> = ({ user_id }) => {
  
  const [darkMode, setDarkMode] = useState(false);
  const [completedPost, setCompletedPost] = useState(false)
  const [activePost, setActivePost] = useState(false)

  useFetchPosts(); // Custom hook to fetch posts

  const { posts, error } = useAppSelector((state) => state.posts);
  const completedPostsArray = posts?.filter(post => post.completed);
  const activePostsArray = posts?.filter(post => !post.completed);

  // Show Posts Function 
  const showPosts = () => {
    if (!activePost && !completedPost) {
      return posts?.map((post) => (
        <PostComponent key={post.id} post={post} darkMode={darkMode} />
      ))
    } else if (activePost && !completedPost) {
      return activePostsArray?.map((post) => (
        <PostComponent key={post.id} post={post} darkMode={darkMode} />
      ))
    } else if (!activePost && completedPost) {
      return completedPostsArray?.map((post) => (
        <PostComponent key={post.id} post={post} darkMode={darkMode} />
      ))
    }
  }

  // Error
  if (error) {
    console.error(error);
  }

  return (
    <div className={darkMode ? 'child-container-darkmode' : 'child-container'}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <PostForm darkMode={darkMode} user_id={user_id} />
      <ul className="posts-container">
        {showPosts()}
        <CountItem posts={posts} completedPostsArray={completedPostsArray} activePostsArray={activePostsArray} darkMode={darkMode} completedPost={ completedPost } activePost={activePost} />
        <ShowCompletedPost setCompletedPost={setCompletedPost} setActivePost={ setActivePost } darkMode={darkMode}/>
      </ul>
    <SignOut />
    </div>
  );
};

export default Posts;
