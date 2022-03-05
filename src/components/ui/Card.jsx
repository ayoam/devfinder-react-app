import React from 'react'
import classes from './Card.module.scss';

const Card = (props) => {
  return (
    <div className={[props.className,classes.card].join(" ")}>
      {props.children}
    </div>
  )
}

export default Card