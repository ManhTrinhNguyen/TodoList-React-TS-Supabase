import Header from "./Header";
import { render, screen, fireEvent } from '@testing-library/react';
import { test, vi, describe } from 'vitest';

// What is Header Functional 
// Header have 2 props darkMode: boolean, and setDarkMode: function 
// Header have the function toggleMode . when darkMode true appear sun icon . Darkmode false appear moon icon

const mockDarkModeFn = vi.fn()

describe('render Header', () => { 
  test('if darkMode is false should appear moonImg', () => { 
    render(<Header darkMode={false} setDarkMode={mockDarkModeFn} />)
    const moonImg = screen.getByAltText('moon-img')
    expect(moonImg).toBeInTheDocument()
  })
  test('if darkMode is true should appear sunImg', () => { 
    render(<Header darkMode={true} setDarkMode={mockDarkModeFn} />)
    const moonImg = screen.getByAltText('sun-img')
    expect(moonImg).toBeInTheDocument()
  })
  test('call setDarkmode when icon is clicked', () => { 
    render(<Header darkMode={true} setDarkMode={mockDarkModeFn} />)
    const sunImg = screen.getByAltText('sun-img')
    fireEvent.click(sunImg)
    expect(mockDarkModeFn).toHaveBeenCalledTimes(1)
  })
 })
