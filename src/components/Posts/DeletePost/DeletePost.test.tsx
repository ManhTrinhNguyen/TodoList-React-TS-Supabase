import DeletePost from './DeletePost';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import { test, describe } from 'vitest';
import type { Posts } from '../../../redux/posts/postsType';
import { renderWithProviders } from '../../../utils/test-utils';
import { deletePost } from '../../../redux/posts/postsSlice';


// What Delete Component Functional 
// When click the delete logo it with the correct id it will delete post from the store 


const mockData: Posts[] = [{
  id: 1, 
  user_id: '9e017915-072b-4a3e-a474-5502cbadc4e4',
  todo: 'Testing',
  completed: false,
  created_at: new Date().toLocaleString()
},{
  id: 2, 
  user_id: '9e017915-072b-4a3e-a474-5502cbadc4e8',
  todo: 'Testing 2',
  completed: false,
  created_at: new Date().toLocaleString()
  }]

  const mockId = 1
describe('Render Delete Post', () => {
  test(('Correctly delete Posts from the store with ID'), async () => {
    const { store } = renderWithProviders(<DeletePost id={mockId} />, {
      preloadedState: {
        posts: {
          posts: mockData,
          isLoading: false,
          error: ''
        }
      }
    })
    await store.dispatch(deletePost(mockId))
    await waitFor(() => {
      expect(store.getState().posts.posts).toHaveLength(1)

    })
  });

  test(('Correctly delete Posts from the store with ID'), async () => {
    const { store } = renderWithProviders(<DeletePost id={mockId} />, {
      preloadedState: {
        posts: {
          posts: mockData,
          isLoading: false,
          error: ''
        }
      }
    })
    const deleteBtn = screen.getByAltText('delete')
  
    await fireEvent.click(deleteBtn)
    
    expect(store.getState().posts.isLoading).toBe(true)
     
  });
})
