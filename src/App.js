import { useEffect, useState } from "react";
import Player from "./components/Player";
// import './index.css';


function App() {

  const [songs] = useState([
    {
      title: "peace be unto you",
      artist: "Asake",
      img_src: "./images/Asake img-2.jfif",
      src: "./songs/Asake_-_Peace_Be_Unto_You.mp3"
    },
    {
      title: "Common person",
      artist: "Burna-boy",
      img_src: "./images/burnaa.jfif",
      src: "./songs/Burna_boy_-_Common_Person.mp3"
    },
    {
      title: "Ashawo",
      artist: "Fireboy",
      img_src: "./images/fire-boy.jfif",
      src: "./songs/Fireboy_DML_-_Ashawo.mp3"
    },
    {
      title: "peace be unto you",
      artist: "Ruger",
      img_src: "./images/ruger.jfif",
      src: "./songs/Ruger_-_Girlfriend_New_Song_.mp3"
    }
  ])

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0
      } else {
        return currentSongIndex + 1
      }
    })
  }, [currentSongIndex, songs.length])

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
