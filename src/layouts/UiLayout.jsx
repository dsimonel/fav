import React from 'react'
import styles from "./UiLayout.module.scss"

export default function UiLayout(props) {
   return (
      <div className={styles.ui}>
         {props.children}
      </div>
   )
}
