import { FC } from 'react';
import type { Posts } from '../../../redux/posts/postsType';
import DeletePost from '../DeletePost/DeletePost';
import circleImg from '../../../assets/circle.png';
import circleImgDark from '../../../assets/circle-darkmode.png';
import circleImgCompleted from '../../../assets/completedCircle.png'
import './PostsComponent.scss';
import { useAppDispatch } from '../../../redux/reduxHooks';
import { updatePost } from '../../../redux/posts/postsSlice';

interface PostsProps {
  post: Posts;
  darkMode: boolean;
}


const PostComponent: FC<PostsProps> = ({ post, darkMode }) => {
  const dispatch = useAppDispatch();
  const toggleCompletedCircle = (post: Posts, darkMode: boolean): string => {
    if (darkMode) {
      if (post.completed) {
        return circleImgCompleted
      } else {
        return circleImgDark
      }
    } else {
      if (post.completed) {
        return circleImgCompleted
      } else {
        return circleImg
      }
    } 
  }

  return (
    <li className={darkMode ? 'post-container-darkmode' : 'post-container'}>
      <img
        onClick={() => post.completed ? dispatch(updatePost({
          id: post.id,
          created_at: post.created_at,
          todo: post.todo,
          completed: false 
        })) : dispatch(updatePost({
          id: post.id,
          created_at: post.created_at,
          todo: post.todo,
          completed: true
        }))}
        className='circle'
        src={toggleCompletedCircle(post, darkMode)}
        alt="circle"
      />
      <span className={post.completed ? 'text-cross-line' : 'text'}>{post.todo}</span>
      <DeletePost id={post.id} />
    </li>
  );
};

export default PostComponent;
