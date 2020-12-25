import React, { useRef, useState } from "react";
import "./Video.css";
import VideoSidebar from "./VideoSidebar";
import VideoFooter from "./VideoFooter";

const Video = ({
  url,
  channel,
  description,
  song,
  likes,
  shares,
  messages,
}) => {
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
        src={url}
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
};

export default Video;
