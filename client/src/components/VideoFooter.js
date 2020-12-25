import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";

const VideoFooter = () => {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@aaaa</h3>
        <p>This is some description</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />

          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>I am a song</p>
              </>
            )}
          </Ticker>
        </div>
        <img
          className="videoFooter__record"
          src="https://pngimg.com/uploads/vinyl/vinyl_PNG102.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default VideoFooter;
