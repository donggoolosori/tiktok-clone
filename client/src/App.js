import { useEffect, useState } from "react";
import "./App.css";
import axios from "./axios";
import Video from "./components/Video";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);
    };
    fetchData();
  }, []);

  console.log(videos);
  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, song, likes, messages, description, shares }) => (
            <Video
              url={url}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
