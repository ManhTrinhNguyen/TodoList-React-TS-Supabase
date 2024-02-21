import { useState } from 'react'
import moonImg from '../../assets/moon.png'
import sunImg from '../../assets/sun.png'
import todoImg from '../../assets/TODO.png'
import './Header.scss'
import { FC } from 'react'


interface HeaderProps {
  darkMode: boolean
  setDarkMode : (newValue: boolean | ((prev: boolean) => boolean))=> void
}


const Header: FC<HeaderProps> = ({ darkMode, setDarkMode }) => {

  const toggleMode = () => {
    setDarkMode(prev => !prev);
  }

  return (
    <div className={darkMode ? 'header-container-darkmode' : 'header-container'}>
      <div className='todo-moon-sun-container'>
        <img className='todo-img' src={todoImg} alt="Todo" />
        {darkMode ? <img onClick={toggleMode} className='mode-img' src={sunImg} alt="sun-img" /> : <img onClick={ toggleMode } className='mode-img' src={moonImg} alt="moon-img" />} 
      </div>
    </div>
  )
}

export default Header