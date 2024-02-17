import { FC } from 'react';
import deleteLogo from '../../../assets/deleteShape.png';
import { useAppDispatch } from '../../../redux/reduxHooks';
import { deletePost } from '../../../redux/posts/postsSlice';
import './DeletePost.scss'
interface DeletePostProps {
  id: number;
}

const DeletePost: FC<DeletePostProps> = ({ id }) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    try {
      dispatch(deletePost(id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <span className="delete" onClick={handleDelete}>
      <img src={deleteLogo} alt="delete" />
    </span>
  );
};

export default DeletePost;
