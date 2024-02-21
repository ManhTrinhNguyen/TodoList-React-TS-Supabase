import { FC } from 'react';
import type { Posts } from '../../../redux/posts/postsType';
import { useAppDispatch } from '../../../redux/reduxHooks';
import { deletePost } from '../../../redux/posts/postsSlice';
import './CountItem.scss'

interface CountItemProps {
  posts: Posts[] | null
  darkMode: boolean
  activePostsArray: Posts[] | undefined
  completedPostsArray: Posts[] | undefined
  activePost: boolean
  completedPost: boolean
}

const CountItem: FC<CountItemProps> = ({ posts, darkMode, activePostsArray, completedPostsArray, activePost, completedPost }) => {
  const dispatch = useAppDispatch();

  // Delete Completed Posts function
  const deleteCompletedPosts = () => {
    if (posts !== null) {
      for (const post of posts) {
        if (post.completed) {
          dispatch(deletePost(post.id))
        }
      }
    }
  }

  // Show length of Post items
  const lengthOfPosts = () => {
    if (!activePost && !completedPost) {
      return <p>{ posts?.length } items left</p>
    } else if (activePost && !completedPost) {
      return <p>{ activePostsArray?.length } items left</p>
    } else if (!activePost && completedPost) {
      return <p>{ completedPostsArray?.length } items left</p>
    }
  }
  return (
    <div className={darkMode ? 'count-item-container-darkmode' : 'count-item-container'}>
      {lengthOfPosts()}
      <div onClick={deleteCompletedPosts}>Clear Completed</div>
    </div>
  )
}

export default CountItem