import React from 'react'
import styles from "./Home.module.scss"
import Player from '@/components/Video/Player'
import UiLayout from '../UiLayout'

export default function HomeLayout(props) {
   return (
      <>
         <UiLayout>
            {props.children}
         </UiLayout>
         <div className={styles.home_layout__video}>
            <Player />
         </div>
      </>
   )
}
