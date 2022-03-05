import React,{ useState } from 'react'
import classes from './Header.module.scss'
import { UilSun,UilMoon } from '@iconscout/react-unicons'

const Header = () => {
  const [darkMode,SetDarkMode] = useState(true);

  const darkModeClickHandler = () => {
    document.getElementsByTagName('body')[0].classList.toggle('dark-mode');
    if(document.getElementsByTagName('body')[0].classList.contains('dark-mode')){
      SetDarkMode(true);
    }
    else{
      SetDarkMode(false);
    }
  }
  
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>devfinder</h1>
      <button className={classes['toggle-dark-mode-btn']} onClick={darkModeClickHandler}>
        {darkMode? 'LIGHT' : 'DARK'}
        {darkMode? <UilSun className={classes.uilsun}/> : <UilMoon className={classes.uilsun}/>}
      </button>
    </header>
  )
}

export default Header