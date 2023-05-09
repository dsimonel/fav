import React from 'react'
import styles from "./MainLayout.module.scss"

export default function MainLayout(props) {
   return (
      <main className={styles.main_container}>
            {props.children}
         <div className={styles.main_container__navbar}>
            a
         </div>
      </main>
   )
}
