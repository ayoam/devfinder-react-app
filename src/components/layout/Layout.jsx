import React from 'react'
import Header from '../header/Header';
import classes from './Layout.module.scss'
const layout = (props) => {
  return (
    <>
      <main className={classes.main}>
        <Header/>
        {props.children}
      </main>
    </>
  )
}

export default layout