import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import TulipLoader from "./components/TulipLoader";
import InviteCard from "./components/InviteCard";
import InfoCardsSection from "./components/InfoCardsSection";
import ItinerarySection from "./components/ItinerarySection";
import GiftSection from "./components/GiftSection";
import RSVPSection from "./components/RSVPSection";

export default function App() {
  const [showTulip, setShowTulip] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setShowTulip(false);
    }, 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <main className={`app-container ${showTulip ? "no-scroll" : ""}`}>
        {/* HERO */}
        <section className="screen">
          <InviteCard reveal={!showTulip} />
        </section>

        {/* FALTAN + UBICACIÓN */}
        <section className="screen">
          <InfoCardsSection />
        </section>

        {/* ITINERARIO */}
        <section className="screen">
          <ItinerarySection />
        </section>

        {/* REGALO */}
        <section className="screen">
          <GiftSection />
        </section>

        <section className="screen">
          <RSVPSection />
        </section>
      </main>

      <AnimatePresence>
        {showTulip && <TulipLoader key="tulip" />}
      </AnimatePresence>
    </>
  );
}
