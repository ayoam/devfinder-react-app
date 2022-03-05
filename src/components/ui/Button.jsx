import React from 'react'
import classes from './Button.module.scss'

const Button = (props) => {
  return (
    <button className={classes.button} onClick={props.onClickHandler}>
      {props.text}
    </button>
  )
}

export default Button