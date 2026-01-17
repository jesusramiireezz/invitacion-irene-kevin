import { useState, useRef, useEffect } from "react";

import InviteCard from "./components/InviteCard";
import InfoCardsSection from "./components/InfoCardsSection";
import ItinerarySection from "./components/ItinerarySection";
import RSVPSection from "./components/RSVPSection";
import EnvelopeIntro from "./components/EnvelopeIntro";
import ParticipaSection from "./components/ParticipaSection";

import song from "./assets/a-un-milimetrro-de-ti-recorte.mp3";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [audioPaused, setAudioPaused] = useState(false);
  const audioRef = useRef(null);

  const playAudio = () => {
    if (!audioRef.current) return;

    audioRef.current.volume = 0.6;
    audioRef.current
      .play()
      .then(() => setAudioPaused(false))
      .catch(() => {});
  };

  /* CONTROL DE VISIBILIDAD */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        audio.pause();
        setAudioPaused(true);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const handleIntroFinish = () => {
    setShowIntro(false);
    playAudio(); // interacción válida
  };

  return (
    <>
      {/* AUDIO */}
      <audio ref={audioRef} src={song} preload="auto" />

      {/* INTRO */}
      {showIntro && <EnvelopeIntro onFinish={handleIntroFinish} />}

      {/* CONTENIDO */}
      {!showIntro && (
        <>
          {/* BOTÓN SONIDO (solo si está pausado) */}
          {audioPaused && (
            <button
              onClick={playAudio}
              style={{
                position: "fixed",
                bottom: 20,
                right: 20,
                zIndex: 9999,
                background: "#6b7b5a",
                color: "#fff",
                border: "none",
                borderRadius: "999px",
                padding: "10px 14px",
                fontFamily: "Inter, sans-serif",
                fontSize: "12px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              Activar sonido
            </button>
          )}

          <main className="app-container">
            <section className="screen">
              <InviteCard reveal />
            </section>

            <section className="screen">
              <InfoCardsSection />
            </section>

            <section className="screen">
              <ItinerarySection />
            </section>

            <section className="screen">
              <ParticipaSection />
            </section>

            <section className="screen">
              <RSVPSection />
            </section>
          </main>
        </>
      )}
    </>
  );
}
