import ShowCompletedPost from './ShowCompletedPost';
import { render, screen, fireEvent } from '@testing-library/react';
import { test, vi, describe } from 'vitest';

// What is ShowCompletedPost functional 
// ShowCompletedPost have 3 props : setActivePost, SetCompletedPost, and Darkmode 
// ShowCompletedPost have 3 Div : All, Active and Completed
// If All is Clicked : setCompleted and setActive is false  
// If Active is Clicked : setCompleted false and setActive is true
// If Completed is Clicked : setCompleted true and setActive is false 

const mockSetActivePost = vi.fn()
const mockSetCompletedPost = vi.fn();

describe('render Header', () => { 
  test('if darkMode is True showCompletedPost container has className is show-completed-post-container-darkmode', () => { 
    const { container } = render(<ShowCompletedPost darkMode={true} setActivePost={mockSetActivePost} setCompletedPost={mockSetCompletedPost} />)
    if (container.firstChild !== null && container.firstChild instanceof HTMLElement) {
      expect(container.firstChild.classList.contains('show-completed-post-container-darkmode')).toBe(true)
    } else {
      // Handle the case where container.firstChild is null or not an HTMLElement
      throw new Error('container.firstChild is null or not an HTMLElement');
    }
  })
  test('if darkMode is False showCompletedPost container has className is show-completed-post-container', () => { 
    const { container } = render(<ShowCompletedPost darkMode={false} setActivePost={mockSetActivePost} setCompletedPost={mockSetCompletedPost} />)
    if (container.firstChild !== null && container.firstChild instanceof HTMLElement) {
      expect(container.firstChild.classList.contains('show-completed-post-container')).toBe(true)
    } else {
      // Handle the case where container.firstChild is null or not an HTMLElement
      throw new Error('container.firstChild is null or not an HTMLElement');
    }
  })

  test('if All is Clicked setActive Post and SetCompletedPost is false', () => {
    render(<ShowCompletedPost darkMode={false} setActivePost={mockSetActivePost} setCompletedPost={mockSetCompletedPost} />)
    const allConatiner = screen.getByText('All')
    fireEvent.click(allConatiner)
    expect(mockSetActivePost).toHaveBeenCalledWith(false)
    expect(mockSetCompletedPost).toHaveBeenCalledWith(false)
  });

  test('if Active is Clicked setActive Post is True , SetCompletedPost is false', () => {
    render(<ShowCompletedPost darkMode={false} setActivePost={mockSetActivePost} setCompletedPost={mockSetCompletedPost} />)
    const activeConatiner = screen.getByText('Active')
    fireEvent.click(activeConatiner)
    expect(mockSetActivePost).toHaveBeenCalledWith(true)
    expect(mockSetCompletedPost).toHaveBeenCalledWith(false)
  });

  test('if Completed is Clicked setActivePost is False , SetCompletedPost is True', () => {
    render(<ShowCompletedPost darkMode={false} setActivePost={mockSetActivePost} setCompletedPost={mockSetCompletedPost} />)
    const completedContainer = screen.getByText('Completed')
    fireEvent.click(completedContainer)
    expect(mockSetActivePost).toHaveBeenCalledWith(false)
    expect(mockSetCompletedPost).toHaveBeenCalledWith(true)
  });
 })
