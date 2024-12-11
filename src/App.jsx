import AOS from "aos";
import "aos/dist/aos.css";
import { useRef } from "react";
import "./App.css";
import angel from "./assets/anjo-home.png";
import gospelMusic from "./assets/oceans-music.mp3";

function App() {
  const audioRef = useRef(null);

  AOS.init();

  const handlePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <div className="container">
      <audio ref={audioRef} src={gospelMusic} loop></audio>

      <div
        className="angel-image"
        data-aos="fade-right"
        data-aos-offset="700"
        data-aos-easing="ease-in-sine"
      >
        <img src={angel} alt="Desenho de um anjo" />
      </div>

      <div
        className="text-container"
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <h1 className="title">Olá Ravina!!!</h1>
        <p className="subtitle">
          Uffff... Eu seiii... demorei!! o céu estava tendo uma festa, você sabe
          né... Mas cheguei em grande estilo!
        </p>
        <p className="description">
          Clique no botão abaixo, e ouça uma linda e potente musica, enquanto
          você se delicia com esse maravilhoso panetone. Lembre-se DEUS TE AMA!
        </p>
        <button onClick={handlePlayPause} className="play-button">
          🎵 Clique para ouvir
        </button>
      </div>
    </div>
  );
}

export default App;
