import Link from 'next/link'
import React from 'react'
import classes from './button.module.css'

function Button(props) {
  return props.link ? 
    ( <Link href={props.link} className={classes.btn}>{props.children}</Link> ) :
    ( <button onClick={props.onClick} className={classes.btn}>{props.children}</button> )
}

export default Button