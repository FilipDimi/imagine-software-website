import React from 'react'
import styles from './RedirectButton.module.css'

const RedirectButton = (props) => {
  return (
    <button className={styles.button} onClick={props.onClick}>{props.title}</button>
  )
}

export default RedirectButton