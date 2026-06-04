import React, { useState, useEffect } from "react";
import { Sparkles, Heart } from "lucide-react";

export default function HeaderBanner() {
  const [minutes, setMinutes] = useState(14);
  const [seconds, setSeconds] = useState(52);
  const [recentBuyer, setRecentBuyer] = useState("");

  const buyers = [
    "Marta de San Isidro",
    "Estela de Córdoba Capital",
    "Liliana de Rosario",
    "Clara de Mendoza",
    "María Elsa de Lanús",
    "Silvia de Ramos Mejía",
    "Graciela de Mar del Plata",
    "Teresa de San Miguel"
  ];

  useEffect(() => {
    // Countdown timer
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        setMinutes(15);
        setSeconds(0);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds, minutes]);

  useEffect(() => {
    // Rotate recent buyers
    setRecentBuyer(buyers[Math.floor(Math.random() * buyers.length)]);
    const buyerInterval = setInterval(() => {
      setRecentBuyer(buyers[Math.floor(Math.random() * buyers.length)]);
    }, 6000);
    return () => clearInterval(buyerInterval);
  }, []);

  return (
    <div id="header-banner-root">
      {/* Promo Bar */}
      <div className="bg-brand-sage text-white text-xs sm:text-sm py-2 px-4 font-sans text-center flex flex-wrap justify-center items-center gap-2 font-medium">
        <span className="inline-flex items-center gap-1">
          <Sparkles className="w-4 h-4 text-brand-sand animate-pulse" />
          <span>¡Descuento de Lanzamiento del 50% exclusivo para abuelas en Argentina!</span>
        </span>
        <span className="hidden md:inline">|</span>
        <span className="bg-white/10 text-white text-[11px] px-2.5 py-0.5 rounded-full font-bold">
          Precio congelado por hoy: $5.990 ARS (Antes $11.980)
        </span>
        <span className="hidden sm:inline font-bold text-brand-beige">
          — Tu oferta termina en {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </span>
      </div>

      {/* Social Proof Toaster banner */}
      <div className="bg-brand-bg border-b border-brand-border py-1.5 px-4 text-center text-xs text-brand-text font-sans flex items-center justify-center gap-2 overflow-hidden animate-fade-in">
        <span className="w-2 h-2 rounded-full bg-brand-sage inline-block animate-ping"></span>
        <Heart className="w-3 h-3 text-brand-orange fill-brand-orange inline" />
        <span className="font-semibold">Compra reciente:</span> 
        <span>{recentBuyer} acaba de ordenar su kit "Meriendas con los Nietos" ☕</span>
      </div>
    </div>
  );
}
