import React, { useState, useEffect } from "react";
import Mainlogo from "../../../assets/MainLogo.svg";
import signupIcon from "../../../assets/signupIcon.svg";
import Styles from "./MainHeaders.module.css";


export const MainHeaders: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 25,
    seconds: 45,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        const totalSeconds =
          prevTime.hours * 3600 + prevTime.minutes * 60 + prevTime.seconds - 1;

        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        if (totalSeconds <= 0) {
          clearInterval(interval);
          return { hours: 0, minutes: 0, seconds: 0 };
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={Styles.MainHeadersContainers}>
      <div className={Styles.MainHeadersChild}>
        <img src={Mainlogo} alt="company logo Icon" className={Styles.MainHeaderMainlogo} />
        <div className={Styles.MainHeadersChildList}>
          <div className={Styles.Countdown}>
            <div className={Styles.TimeBlock}>
              <span className={Styles.TimeNumber}>{timeLeft.hours}</span>
              <span className={Styles.TimeLabel}>HOURS</span>
            </div>
            <div className={Styles.TimeBlock}>
              <span className={Styles.TimeNumber}>{timeLeft.minutes}</span>
              <span className={Styles.TimeLabel}>MINUTES</span>
            </div>
            <div className={Styles.TimeBlock}>
              <span className={Styles.TimeNumber}>{timeLeft.seconds}</span>
              <span className={Styles.TimeLabel}>SECONDS</span>
            </div>
          </div>
          <div className={Styles.SignUpContainer}>
            <img src={signupIcon} alt="sign up icon" className={Styles.SignUpIcon} />
            <input
              type="text"
              className={Styles.SignUpInput}
              placeholder="Sign Up Copy Goes Here"
            />
            <button className={Styles.SignUpButton}>ENTER</button>
          </div>
        </div>
      </div>
      <div className={Styles.VideoWrapper}>
        <video className={Styles.BackgroundVideos} autoPlay loop muted playsInline>
        <source src="/Streams/HillVideo2.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default MainHeaders;
