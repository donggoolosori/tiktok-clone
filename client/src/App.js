import "./App.css";
import Video from "./components/Video";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url="https://user-images.githubusercontent.com/53213397/103125802-ac6e0c80-46cf-11eb-9cac-2ed4f4caf7e7.mp4"
          channel="aaaa"
          description="MERN STACK TICTOK"
          song="high"
          likes={123}
          messages={40}
          shares={32}
        />
        <Video
          url="https://user-images.githubusercontent.com/53213397/103125812-b1cb5700-46cf-11eb-99a9-bf244cc2e52f.mp4"
          channel="bbbb"
          description="Happy new year"
          song="Dynamite"
          likes={710}
          messages={321}
          shares={120}
        />
      </div>
    </div>
  );
}

export default App;
