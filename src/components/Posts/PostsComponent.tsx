import { FC } from 'react';
import type { Posts } from '../../redux/posts/postsType';

interface PostsProps {
  post: Posts
}

const PostsComponent: FC<PostsProps> = ({post}) => {
  return (
    <li>
      {post.todo}
    </li>
  )
}

export default PostsComponent