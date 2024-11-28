import React, { useRef, useState } from "react";
import Styles from "./MainHeros.module.css";


export const MainHeros: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
      setShowButton(false);
    }
  };

  const handleVideoClick = () => {
    setShowButton(true); 
  };

  return (
    <div className={Styles.MainHerosContainer}>
      <div className={Styles.MainHerosChild}>
        <div className={Styles.MainHerosText}>
          <h1 className={Styles.MainHerosH1}>About the HillStation</h1>
          <p className={Styles.MainHerosParagraph}>
            Welcome to The Serene Retreat, where luxury meets tranquility.
            Nestled in the heart of the picturesque countryside, our hotel
            offers a perfect escape from the hustle and bustle of everyday life.
            Enjoy our elegantly designed rooms, each equipped with modern
            amenities and breathtaking views. Indulge in gourmet dining at our
            on-site restaurant, or unwind at our spa with a range of
            rejuvenating treatments. Whether you're here for a romantic getaway
            or a family vacation, The Serene Retreat promises an unforgettable
            experience.
          </p>
        </div>

        <div className={Styles.MainHerosVideoContainer}>
          <video
            ref={videoRef}
            className={Styles.BackgroundVideo}
            loop
            muted={false}
            playsInline
            onClick={handleVideoClick} 
          >
            <source src="/Streams/HillVideo2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {showButton && ( 
            <button
              className={Styles.PlayPauseButton}
              onClick={handlePlayPause}
            >
              {isPlaying ? "Pause" : "Play"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainHeros;
