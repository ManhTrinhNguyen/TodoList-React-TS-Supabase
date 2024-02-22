import { FC, useState } from 'react';
import { useAppDispatch } from '../../../redux/reduxHooks';
import { addPost } from '../../../redux/posts/postsSlice';
import './PostForm.scss'
import cirleImg from '../../../assets/circle.png'
import cirleDarkMode from '../../../assets/circle-darkmode.png'

interface PostFormProps {
  darkMode: boolean;
  user_id: string
}
const PostForm: FC<PostFormProps> = ({ darkMode, user_id }) => {
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addPost({ text, user_id }));
    }
    setText('')
  };

  return (
    <div className={darkMode ? 'form-container-darkmode' : 'form-container'}>
      <img src={darkMode ? cirleDarkMode : cirleImg} alt="circle" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Create a new todo..."
          autoFocus
        />
      </form>
    </div>
  );
};

export default PostForm;
