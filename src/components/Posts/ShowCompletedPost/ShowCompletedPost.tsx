import { FC } from 'react';
import './ShowCompletedPost.scss';

interface ShowCompletedPostProps {
  setCompletedPost: (newValue: boolean | ((prevValue: boolean) => boolean)) => void
  setActivePost: (newValue: boolean | ((prevValue: boolean) => boolean)) => void
  darkMode: boolean
}

const ShowCompletedPost: FC<ShowCompletedPostProps> = ({setActivePost, setCompletedPost, darkMode}) => {
  return (
    <div className={darkMode ? 'show-completed-post-container-darkmode' : 'show-completed-post-container'}>
      <div onClick={() => {
        setActivePost(false);
        setCompletedPost(false)
      }}>All</div>
      <div onClick={() => {
        setActivePost(true);
        setCompletedPost(false)
      }}>Active</div>
      <div onClick={() => {
        setActivePost(false);
        setCompletedPost(true)
      }}>Completed</div>
    </div>
  )
}

export default ShowCompletedPost