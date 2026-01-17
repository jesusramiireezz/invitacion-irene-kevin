import { useState, useRef } from "react";
import InviteCard from "./components/InviteCard";
import InfoCardsSection from "./components/InfoCardsSection";
import ItinerarySection from "./components/ItinerarySection";
import RSVPSection from "./components/RSVPSection";
import EnvelopeIntro from "./components/EnvelopeIntro";
import ParticipaSection from "./components/ParticipaSection";

import song from "./assets/a-un-milimetrro-de-ti.mp3";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const audioRef = useRef(null);

  const handleIntroFinish = () => {
    setShowIntro(false);

    // 🔊 Arrancamos la música tras interacción válida
    if (audioRef.current) {
      audioRef.current.volume = 0.6;
      audioRef.current.play().catch(() => {
        // por si algún navegador raro falla, no rompemos nada
        console.log("Autoplay bloqueado");
      });
    }
  };

  return (
    <>
      {/* AUDIO GLOBAL */}
      <audio ref={audioRef} src={song} preload="auto" />

      {/* INTRO DEL SOBRE */}
      {showIntro && <EnvelopeIntro onFinish={handleIntroFinish} />}

      {/* CONTENIDO PRINCIPAL */}
      {!showIntro && (
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
          {/* PARTICIPA */}
          <section className="screen">
            <ParticipaSection />
          </section>

          <section className="screen">
            <RSVPSection />
          </section>
        </main>
      )}
    </>
  );
}
