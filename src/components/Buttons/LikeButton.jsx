import React, { useState } from 'react'
import styles from "./LikeButton.module.scss"
import { LikeIcon, LikeActiveIcon } from "@/icons"
import { Typography } from '@/components/Typography'

export default function LikeButton(props) {
   const [isActive, setIsActive] = useState(props.active)

   return (
         isActive ? (
            <button className={styles.button} onClick={() => setIsActive(false)} >
               <LikeActiveIcon />
               <Typography type="body">{props.likes}</Typography>
            </button>
         ):(
            <button className={styles.button} onClick={() => setIsActive(true)}>
               <LikeIcon />
            </button>
         )
   )
}
