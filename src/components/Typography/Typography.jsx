import React from 'react'
import styles from "./Typography.module.scss"

export function Typography(props) {
   if (props.type === "h1"){
      return (
         <h1>{props.children}</h1>
      )
   }
   
   if (props.type === "body"){
      return (
         <p className={styles.body}>{props.children}</p>
      )
   }
}
