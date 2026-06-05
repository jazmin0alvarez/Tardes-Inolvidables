import React, { useState } from "react";
import { RECIPES_DATA, FRUIT_DESIGNS } from "../data";
import { Cookie, Apple, Palette, Sparkles, Check, Flame, ChevronRight, Lock } from "lucide-react";

export default function RecipeCarousel({ onScrollToPricing }: { onScrollToPricing: () => void }) {
  const [activeTab, setActiveTab] = useState<"recipes" | "fruits" | "drawings">("recipes");
  const [selectedRecipeIdx, setSelectedRecipeIdx] = useState(0);

  return (
    <div id="recipe-carousel-section" className="bg-gradient-to-b from-white to-brand-bg/40 py-8 px-4 border border-brand-border rounded-3xl max-w-4xl mx-auto shadow-sm">
      <div className="text-center mb-6">
        <h3 className="font-serif text-2xl sm:text-3xl text-brand-text font-black">
          Espiá qué vas a encontrar adentro...
        </h3>
        <p className="text-brand-text text-xs sm:text-base mt-2 max-w-md mx-auto font-sans font-bold">
          Un adelanto del material práctico diseñado con amor para que disfrutes sin complicaciones.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center border-b border-brand-border mb-6 font-sans">
        <button
          onClick={() => setActiveTab("recipes")}
          className={`flex items-center gap-1.5 px-4 pb-3 text-xs sm:text-sm font-black border-b-2 transition-all cursor-pointer ${
            activeTab === "recipes"
              ? "border-brand-sage text-brand-text"
              : "border-transparent text-brand-text/80 hover:text-brand-text font-bold"
          }`}
        >
          <Cookie className="w-4 h-4 text-brand-sage" />
          <span>5 Recetas Clásicas & Sin TACC</span>
        </button>

        <button
          onClick={() => setActiveTab("fruits")}
          className={`flex items-center gap-1.5 px-4 pb-3 text-xs sm:text-sm font-black border-b-2 transition-all cursor-pointer ${
            activeTab === "fruits"
              ? "border-brand-sage text-brand-text"
              : "border-transparent text-brand-text/80 hover:text-brand-text font-bold"
          }`}
        >
          <Apple className="w-4 h-4 text-brand-orange" />
          <span>Caritas de Frutas</span>
        </button>

        <button
          onClick={() => setActiveTab("drawings")}
          className={`flex items-center gap-1.5 px-4 pb-3 text-xs sm:text-sm font-black border-b-2 transition-all cursor-pointer ${
            activeTab === "drawings"
              ? "border-brand-sage text-brand-text"
              : "border-transparent text-brand-text/80 hover:text-brand-text font-bold"
          }`}
        >
          <Palette className="w-4 h-4 text-brand-sage" />
          <span>Dibujos Imprimibles</span>
        </button>
      </div>

      {/* Tab Contents */}
      {activeTab === "recipes" && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 animate-fade-in text-brand-text">
          {/* Recipe List sidebar */}
          <div className="md:col-span-5 space-y-2 font-sans">
            {RECIPES_DATA.map((r, idx) => (
              <button
                key={r.id}
                onClick={() => setSelectedRecipeIdx(idx)}
                className={`w-full text-left p-3.5 rounded-xl border transition-all flex justify-between items-center cursor-pointer ${
                  selectedRecipeIdx === idx
                    ? "bg-brand-beige border-brand-orange ring-1 ring-brand-orange shadow-sm"
                    : "bg-white border-brand-border hover:bg-brand-bg/50"
                }`}
              >
                <div>
                  <p className="text-xs sm:text-sm font-black text-brand-text flex items-center gap-1">
                    {r.name}
                    {r.isGlutenFree && (
                      <span className="bg-brand-sand text-brand-orange text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded font-black tracking-wide border border-brand-border">
                        Sin TACC
                      </span>
                    )}
                  </p>
                  <span className="text-[10px] sm:text-xs text-brand-text font-extrabold block mt-0.5">Lleva: {r.duration}</span>
                </div>
                <ChevronRight className={`w-4 h-4 text-brand-orange transition-transform ${selectedRecipeIdx === idx ? "translate-x-1 font-bold" : ""}`} />
              </button>
            ))}
          </div>

          {/* Active Recipe detail card */}
          <div className="md:col-span-7 bg-white border border-brand-border rounded-2xl p-5 shadow-sm relative overflow-hidden flex flex-col justify-between">
            {/* Watermark circle */}
            <div className="absolute -right-8 -top-8 w-24 h-24 bg-brand-sand/10 rounded-full pointer-events-none"></div>

            <div>
              <div className="flex flex-wrap gap-1 mb-2 font-sans">
                {RECIPES_DATA[selectedRecipeIdx].tags.map((t, idx) => (
                  <span key={idx} className="bg-brand-bg text-brand-text text-xs px-2 px-2.5 py-1 rounded-full font-extrabold border border-brand-border">
                    ★ {t}
                  </span>
                ))}
              </div>

              <h4 className="font-serif text-lg sm:text-xl font-black text-brand-text mb-1.5">
                {RECIPES_DATA[selectedRecipeIdx].name}
              </h4>

              {/* Delicious interactive preview image for cookie recipes */}
              {(selectedRecipeIdx === 1 || selectedRecipeIdx === 3) && (
                <div className="mb-4 overflow-hidden rounded-xl border-4 border-rose-200 bg-rose-50 max-h-44 flex items-center justify-center relative shadow-xs">
                  <img
                    src="/src/assets/images/cookies_deliciosas_1780667886898.png"
                    alt="Cookies deliciosas crujientes"
                    className="w-full h-full object-cover max-h-44 hover:scale-[1.02] transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-rose-400 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs border border-white">
                    🍪 ¡Así de ricas van a quedar!
                  </div>
                </div>
              )}

              <div className="flex gap-4 text-xs sm:text-sm text-brand-text border-b border-brand-border pb-2 mb-3 font-sans font-bold">
                <span>⏱️ Duración total: <strong>{RECIPES_DATA[selectedRecipeIdx].duration}</strong></span>
                <span>👨‍🍳 Dificultad: <strong>{RECIPES_DATA[selectedRecipeIdx].difficulty}</strong></span>
              </div>

              <p className="text-brand-text text-sm sm:text-base leading-relaxed italic mb-4 font-serif font-semibold">
                "{RECIPES_DATA[selectedRecipeIdx].description}"
              </p>

              {/* Ingredients peek box */}
              <div className="bg-brand-bg rounded-xl p-3 border border-brand-border mb-4 font-sans text-xs sm:text-sm">
                <span className="font-black text-brand-text uppercase tracking-wider text-xs block mb-1">✍️ Lista de compras simplificada:</span>
                <p className="text-brand-text font-medium leading-relaxed">Ingredientes económicos y cotidianos que ya tenés (harina/maicena, azúcar mascabo o común, huevos de campo, ralladura fresca, esencia de vainilla).</p>
              </div>
            </div>

            <div className="border-t border-brand-border pt-3 flex flex-col sm:flex-row gap-2.5 sm:items-center justify-between font-sans">
              <span className="text-xs sm:text-sm text-brand-sage font-black flex items-center gap-1">
                <Check className="w-4 h-4 text-brand-sage font-bold" />
                <span>Letra extra grande y paso a paso para abuelas</span>
              </span>
              <button
                onClick={onScrollToPricing}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm bg-rose-200 hover:bg-rose-300 text-stone-900 font-black py-2 px-4 rounded-full border border-rose-300 cursor-pointer shadow-xs transition-colors self-start sm:self-auto"
              >
                <Lock className="w-3.5 h-3.5 text-rose-700" />
                <span>Desbloquear receta completa</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === "fruits" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-fade-in text-brand-text font-sans">
          {/* List of designs */}
          <div className="lg:col-span-7 space-y-4">
            {FRUIT_DESIGNS.map((fd) => (
              <div key={fd.id} className="bg-white border border-brand-border rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xs hover:border-brand-sage hover:shadow-sm transition-all relative">
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="bg-brand-bg text-brand-text text-xs px-2.5 py-0.5 rounded-full font-black uppercase tracking-wider border border-brand-border">
                      {fd.difficulty}
                    </span>
                    <span className="text-brand-orange text-xs sm:text-sm font-black">🍏 Pilar Receta Saludable</span>
                  </div>
                  <h4 className="font-serif text-base sm:text-lg font-black text-brand-text mb-1">
                    {fd.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-orange font-black mb-2">
                    Necesitás: {fd.ingredients}
                  </p>
                  <p className="text-brand-text text-sm sm:text-base leading-relaxed">
                    {fd.description}
                  </p>
                </div>

                <div className="border-t border-brand-border pt-2.5 mt-3 text-xs sm:text-sm text-brand-text font-bold italic flex justify-between items-center">
                  <span>Paso a paso ilustrado en el libro pdf</span>
                  <span className="text-brand-sage font-black">100% Sano ✔</span>
                </div>
              </div>
            ))}
          </div>

          {/* Real image showcase card */}
          <div className="lg:col-span-5 bg-white border border-brand-border rounded-3xl p-4 flex flex-col justify-between shadow-xs hover:border-brand-sage transition-all relative overflow-hidden">
            <div className="bg-brand-bg/60 p-2.5 rounded-2xl border border-brand-border/60">
              <img 
                src="/src/assets/images/frutas_divertidas_1780667898096.png" 
                alt="Caritas y monstruos de frutas divertidas para niños" 
                className="w-full h-56 sm:h-72 object-cover rounded-xl shadow-xs hover:scale-[1.01] transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-4 text-center">
              <span className="bg-brand-sand text-brand-orange text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full inline-block">
                ★ Inspiración Real ★
              </span>
              <h4 className="font-serif text-base sm:text-lg font-bold text-brand-text mt-2">
                ¡Así de hermosas quedan las creaciones!
              </h4>
              <p className="text-brand-text text-xs sm:text-sm leading-relaxed max-w-xs mx-auto mt-1 font-medium">
                Con gajitos comunes de naranja, frutilla o kiwi podés armar estos maravillosos personajes divertidos que tus nietos comerán con orgullo.
              </p>
            </div>
          </div>
        </div>
      )}

      {activeTab === "drawings" && (
        <div className="bg-white border border-brand-border rounded-2xl p-5 sm:p-6 animate-fade-in text-brand-text text-center font-sans">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-4">
            {[
              { title: "Laberinto de las Cookies", file: "Hoja A4" },
              { title: "Diploma Mini Chef", file: "Instante para colgar" },
              { title: "Dinosaurios Amasando", file: "Letras gigantes" },
              { title: "El Mate Dulce y Flores", file: "Para pintar juntos" }
            ].map((d, idx) => (
              <div key={idx} className="border border-dashed border-brand-border rounded-xl p-3 bg-brand-bg flex flex-col items-center justify-center hover:border-brand-sage transition-colors">
                <Palette className="w-8 h-8 text-brand-sage/60 mb-1" />
                <span className="text-xs sm:text-sm font-black text-brand-text">{d.title}</span>
                <span className="text-xs text-brand-text font-black mt-1 bg-white/80 px-2 py-0.5 rounded-md border border-brand-border">{d.file}</span>
              </div>
            ))}
          </div>
          <p className="text-brand-text text-sm sm:text-base max-w-lg mx-auto leading-relaxed mt-4 font-medium">
            <strong>¿Cómo funciona?</strong> Imprimís las hojas en cualquier impresora hogareña (diseñadas en blanco y negro para no gastar de más). Mientras el budín perfuma la cocina, ellos se concentran pintando, charlando y compartiendo con vos un momento único que ni el mejor teléfono puede comprar.
          </p>
        </div>
      )}
    </div>
  );
}
