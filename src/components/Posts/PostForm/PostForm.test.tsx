import { screen, fireEvent } from '@testing-library/react';
import { test, describe, vi } from 'vitest';
import PostForm from './PostForm';
import { renderWithProviders } from '../../../utils/test-utils';
import * as reactReduxHooks from '../../../redux/reduxHooks'


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

describe('Testing PostForm', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test('Should render PostForm correctly', () => {
    const user_id = '9e017915-072b-4a3e-a474-5502cbadc4e8'
   
    renderWithProviders(<PostForm darkMode={false} user_id={user_id} />);

    const input = screen.getByPlaceholderText('Create a new todo...')
    expect(input).toBeInTheDocument();

  });

  test('should submit a post when form is submitted with non-empty text', () => {
    const mockDispatch = vi.fn();
    vi.spyOn(reactReduxHooks, 'useAppDispatch').mockReturnValue(mockDispatch);

    const user_id = '9e017915-072b-4a3e-a474-5502cbadc4e8'
   
    renderWithProviders(<PostForm darkMode={false} user_id={user_id} />, {
      preloadedState: {
        posts: {
          posts: initialState,
          isLoading: false,
          error: ''
        }
      }
    });

    const input = screen.getByPlaceholderText('Create a new todo...')
    expect(input).toBeInTheDocument()
    const form = screen.getByTestId('form')
    expect(form).toBeInTheDocument()

    fireEvent.change(input, { target: { value: 'New Post' } });
    expect(input).toHaveValue('New Post');
    
    fireEvent.submit(form)
    expect(mockDispatch).toHaveBeenCalled()
    //expect(mockDispatch).toHaveBeenCalledWith(addPost({ text: 'New Post', user_id: user_id}))
  });

  test('should render form-container-darkmode when prop darkmode is true', () => {
    const user_id = '9e017915-072b-4a3e-a474-5502cbadc4e8'
    const { container } = renderWithProviders(<PostForm darkMode={true} user_id={user_id} />);
    expect(container.firstChild).toHaveClass('form-container-darkmode')
  })
})