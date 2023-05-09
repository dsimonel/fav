import React, { useRef } from "react";
import styles from "./Player.module.scss";
import ProgressBar from "./ProgressBar";

export default function Player() {
   const videoRef = useRef(null);
   return (
      <>
         <video className={styles.player} muted loop autoPlay ref={videoRef}>
            <source src="/testvideos/gata.mp4" type="video/mp4" />
         </video>
         <ProgressBar videoRef={videoRef} />
      </>
   );
}
