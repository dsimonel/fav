import React, { useRef, useEffect, useState } from "react";
import styles from "./ProgressBar.module.scss";

export default function ProgressBar({ videoRef }) {
   const [progress, setProgress] = useState(1);

   useEffect(() => {
      const intervalId = setInterval(() => {
         const video = videoRef.current;
         const currentTime = video.currentTime;
         const duration = video.duration;
         const progress = (currentTime / duration) * 100;
         setProgress(progress);
      }, 60);

      return () => {
         clearInterval(intervalId);
      };
   }, [videoRef]);

   return (
      <div className={styles.progress_bar__container}>
         <div className={styles.progress_bar__ui} style={{ width: `${progress}%` }} />
      </div>
   );
}
