import { screen, fireEvent} from '@testing-library/react';
import { test, describe, vi } from 'vitest';
import Posts from './Posts';
import { fetchPosts } from '../../../redux/posts/postsSlice';
import { renderWithProviders } from '../../../utils/test-utils';
import * as ReduxHooks from '../../../redux/reduxHooks'


// What does Posts Component do ? 
// Posts Component contain Header, PostForm, Posts, Count Item, Show Completed Posts, SignOut Component
// Fetch Posts from the store (Redux) by using useFetchPosts 
// if All is clicked (from ShowCompleted Posts) show all Posts
// if Active is clicked (from ShowCompleted Posts) show active Posts
// if Completed is clicked (from ShowCompleted Posts) show completed Posts

describe('Testing Posts Component', () => { 
  test('use preload State to render', () => {
    const initialState = [{
      id: 1,
      user_id: '9e017915-072b-4a3e-a474-5502cbadc4e4',
      todo: 'Testing',
      completed: false,
      created_at: new Date().toLocaleString()
    }, {
      id: 2,
      user_id: '9e017915-072b-4a3e-a474-5502cbadc4e8',
      todo: 'Testing 2',
      completed: false,
      created_at: new Date().toLocaleString()
    }];
    
    renderWithProviders(<Posts user_id='9e017915-072b-4a3e-a474-5502cbadc4e4' />, {
      preloadedState: {
        posts: {
          posts: initialState,
          isLoading: false,
          error: ''
        }
      }
    })
    expect(screen.getByText('Testing')).toBeInTheDocument()
  });

  test('correctly Fetch Data', async () => {
    const mockDispatch = vi.fn();
    vi.spyOn(ReduxHooks, 'useAppDispatch').mockReturnValue(mockDispatch);

    renderWithProviders(<Posts user_id='9e017915-072b-4a3e-a474-5502cbadc4e4' />);
    // await store.dispatch(fetchPosts())
    // expect(store.getState().posts.posts).not.toBeNull()
    expect(mockDispatch).toHaveBeenCalled()
    //expect(mockDispatch).toHaveBeenCalledWith(fetchPosts())

  });

  test('Correctly show All Data when All is clicked', async () => {
    const initialState = [{
      id: 1,
      user_id: '9e017915-072b-4a3e-a474-5502cbadc4e4',
      todo: 'Testing',
      completed: false,
      created_at: new Date().toLocaleString()
    }, {
      id: 2,
      user_id: '9e017915-072b-4a3e-a474-5502cbadc4e8',
      todo: 'Testing 2',
      completed: true,
      created_at: new Date().toLocaleString()
    }];
    
    const { store } = renderWithProviders(<Posts user_id='9e017915-072b-4a3e-a474-5502cbadc4e4' />, {
      preloadedState: {
        posts: {
          posts: initialState,
          isLoading: false,
          error: ''
        }
      }
    });

    const allBtn = screen.getByText('All')
    fireEvent.click(allBtn)
    expect(store.getState().posts.posts).toHaveLength(2)
    expect(screen.getByText('Testing')).toBeInTheDocument()
    expect(screen.getByText('Testing 2')).toBeInTheDocument()
  });

  test('Correctly show Active Data when Active is clicked', async () => {
    const initialState = [{
      id: 1,
      user_id: '9e017915-072b-4a3e-a474-5502cbadc4e4',
      todo: 'Testing',
      completed: false,
      created_at: new Date().toLocaleString()
    }, {
      id: 2,
      user_id: '9e017915-072b-4a3e-a474-5502cbadc4e8',
      todo: 'Testing 2',
      completed: true,
      created_at: new Date().toLocaleString()
    }];
    
    renderWithProviders(<Posts user_id='9e017915-072b-4a3e-a474-5502cbadc4e4' />, {
      preloadedState: {
        posts: {
          posts: initialState,
          isLoading: false,
          error: ''
        }
      }
    });

    const activeBtn = screen.getByText('Active')
    fireEvent.click(activeBtn)
    expect(screen.getByText('Testing')).toBeInTheDocument();
    expect(screen.queryByText('Testing 2')).not.toBeInTheDocument()
  });

  test('Correctly show Active Data when Active is clicked', async () => {
    const initialState = [{
      id: 1,
      user_id: '9e017915-072b-4a3e-a474-5502cbadc4e4',
      todo: 'Testing',
      completed: false,
      created_at: new Date().toLocaleString()
    }, {
      id: 2,
      user_id: '9e017915-072b-4a3e-a474-5502cbadc4e8',
      todo: 'Testing 2',
      completed: true,
      created_at: new Date().toLocaleString()
    }];
    
    renderWithProviders(<Posts user_id='9e017915-072b-4a3e-a474-5502cbadc4e4' />, {
      preloadedState: {
        posts: {
          posts: initialState,
          isLoading: false,
          error: ''
        }
      }
    });

    const completedBtn = screen.getByText('Completed')
    fireEvent.click(completedBtn)
    expect(screen.getByText('Testing 2')).toBeInTheDocument()
    expect(screen.queryByText('Testing')).not.toBeInTheDocument()
  });

})
