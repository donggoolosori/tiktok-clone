import React, { useRef, useState } from "react";
import "./Video.css";

const Video = () => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const handleVideoPress = () => {
    // if video is playing -> stop
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      // otherwise -> play
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        className="video__player"
        loop
        ref={videoRef}
        src="https://user-images.githubusercontent.com/53213397/103125802-ac6e0c80-46cf-11eb-9cac-2ed4f4caf7e7.mp4"
      ></video>
      {/* Video Footer */}
      {/* Video  Sidebar*/}
    </div>
  );
};

export default Video;
