import AOS from "aos";
import "aos/dist/aos.css";
import { useRef } from "react";
import "./App.css";
import angel from "./assets/anjo-home.png";
import bgdefault from "./assets/bgangel.png";
import gospelMusic from "./assets/oceans-music.mp3";

function App() {
  const audioRef = useRef(null);

  // Inicia AOS para animações
  AOS.init();

  const handlePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${bgdefault})`,
        backgroundSize: "contain",
        backgroundPosition: "center left",
      }}
    >
      <audio ref={audioRef} src={gospelMusic} loop></audio>

      <div
        data-aos="fade-right"
        data-aos-offset="700"
        data-aos-easing="ease-in-sine"
      >
        <img src={angel} alt="Desenho de um anjo" />
      </div>
      <div
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        style={{
          marginBottom: "90px",
          position: "relative",
        }}
      >
        <h1
          style={{
            color: "#fff",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
            fontSize: "98px",
            margin: 0,
          }}
        >
          Olá Ravina!!!
        </h1>
        <p
          style={{
            margin: 0,
            fontSize: "30px",
            color: "#ffff",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
            width: "600px",
            lineHeight: "1.1",
            marginTop: "20px",
          }}
        >
          Uffff... Eu seiii... demorei!! o céu estava tendo uma festa, você sabe
          né... Mas cheguei em grande estilo!
        </p>
        <p
          style={{
            margin: 0,
            color: "#216a97",
            fontWeight: "bold",
            marginTop: "20px",
            width: "600px",
          }}
        >
          Clique no botão abaixo, e ouça uma linda e potente musica, equanto
          você se delicia com esse maravilhoso panetone. Lembre-se DEUS TE AMA!
        </p>
        <button
          onClick={handlePlayPause}
          style={{
            marginTop: "30px",
            padding: "16px 32px",
            backgroundColor: "#6fc7fedc",
            border: "none",
            borderRadius: "52px",
            cursor: "pointer",
            fontSize: "26px",
            color: "#fff",
            fontWeight: "bold",
            boxShadow: "2px 8px 8px rgba(131, 130, 130, 0.8)",
          }}
        >
          🎵 Clique para ouvir
        </button>
      </div>
    </div>
  );
}

export default App;
