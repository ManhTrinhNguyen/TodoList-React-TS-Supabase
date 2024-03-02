import { screen, fireEvent } from '@testing-library/react';
import { test, describe, vi, afterEach, expect } from 'vitest';
import PostComponent from './PostsComponent';
import { renderWithProviders } from '../../../utils/test-utils';
import * as reactReduxHooks from '../../../redux/reduxHooks'

// const initialState = [{
//   id: 1,
//   user_id: '9e017915-072b-4a3e-a474-5502cbadc4e4',
//   todo: 'Testing',
//   completed: false,
//   created_at: new Date().toLocaleString()
// }, {
//   id: 2,
//   user_id: '9e017915-072b-4a3e-a474-5502cbadc4e8',
//   todo: 'Testing 2',
//   completed: false,
//   created_at: new Date().toLocaleString()
//   }];

const mockPost = {
  id: 3,
  user_id: '9e017915-072b-4a3e-a474-5502cbadc4e4',
  todo: 'Testing 3',
  completed: false,
  created_at: new Date().toLocaleString()
}

describe('Testing PostComponent', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });
  test('Should render correctly', () => {
    // const mockDispatch = vi.fn();
    // vi.spyOn(reactReduxHooks, 'useAppDispatch').mockReturnValue(mockDispatch);

    renderWithProviders(<PostComponent post={mockPost} darkMode={false} />)
   
    expect(screen.getByAltText('circle')).toBeInTheDocument();
    expect(screen.getByText('Testing 3')).toBeInTheDocument();
  });

  test('correctly called dispatch when img is clicked', async () => {
    const mockDispatch = vi.fn();
    vi.spyOn(reactReduxHooks, 'useAppDispatch').mockReturnValue(mockDispatch);

    renderWithProviders(<PostComponent post={mockPost} darkMode={false} />);
    
    const img = screen.getByAltText('circle')

    await fireEvent.click(img);

    expect(mockDispatch).toHaveBeenCalled();

    // expect(mockDispatch).toHaveBeenCalledWith(updatePost({
    //   id: mockPost.id,
    //   created_at: mockPost.created_at,
    //   todo: mockPost.todo,
    //   user_id: mockPost.user_id,
    //   completed: true,
    // }))
    
  });
  test('should render with dark mode class when darkMode prop is true', () => {
    const { container } = renderWithProviders(<PostComponent post={mockPost} darkMode={true} />);
    expect(container.firstChild).toHaveClass('post-container-darkmode');
  });

  test('should render with text-cross-line class when post is completed', () => {
    const completedPost = { ...mockPost, completed: true };
    const { getByText } = renderWithProviders(<PostComponent post={completedPost} darkMode={false} />);
    expect(getByText('Testing 3')).toHaveClass('text-cross-line');
  });
})