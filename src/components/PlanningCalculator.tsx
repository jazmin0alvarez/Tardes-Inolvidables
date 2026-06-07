import React, { useState } from "react";
import { Calendar, Clock, Smile, Flame, Palette, Heart, CheckCircle2 } from "lucide-react";

export default function PlanningCalculator({ onScrollToPricing }: { onScrollToPricing: () => void }) {
  const [grandkidsNames, setGrandkidsNames] = useState("");
  const [nietosCount, setNietosCount] = useState<"1" | "2" | "3+">("2");
  const [ages, setAges] = useState<string>("5-8");
  const [energy, setEnergy] = useState<string>("media");
  const [showPlan, setShowPlan] = useState(false);
  const [calculatedPlan, setCalculatedPlan] = useState<any>(null);

  const handleGeneratePlan = (e: React.FormEvent) => {
    e.preventDefault();
    const names = grandkidsNames.trim() || (nietosCount === "1" ? "tu nieto" : "tus nietos");
    
    // Generate custom steps based on selection
    let recipeChoice = "Cookies Crujientes con Pepas de Chocolate 'Mágicas'";
    let taskForKids = "Colocar los chips de chocolate formando caritas felices y amasar bolitas.";
    let fruitChoice = "Monstruito Dentudo de Manzana";
    let drawingChoice = "Dinosaurios Amasando Dulces";
    let prepTimeLimit = "60 minutos";

    if (ages === "2-4") {
      recipeChoice = "Budín Esponjoso de Limón con glaseado fácil";
      taskForKids = "Ayudarte a aplastar la banana con tenedor o batir el glaseado con una cuchara de madera (muy seguro).";
      fruitChoice = "El León del Sol de Mandarina";
      drawingChoice = "Hojas gigantes con contornos gruesos para garabatear";
      prepTimeLimit = "45 minutos (ideal para su capacidad de atención corta)";
    } else if (ages === "9-12") {
      recipeChoice = "Super Budincito de Manzana y Canela";
      taskForKids = "Pesar los ingredientes en balanza, romper los huevos y mezclar de manera autónoma.";
      fruitChoice = "La Oruga Glotona de Uvas y rodajas de kiwi";
      drawingChoice = "Laberinto complejo y Diploma de Mini Chef";
      prepTimeLimit = "60 minutos";
    }

    let energyMessage = "";
    if (energy === "cansada") {
      energyMessage = "Elegimos actividades de mínimo esfuerzo físico para vos. Podés sentarte a tomar unos mates mientras ellos pintan o decoran cerquita tuyo en la mesa.";
    } else if (energy === "media") {
      energyMessage = "Un ritmo equilibrado. Cocinamos algo rico en 15 minutos de preparación y el resto de la tarde fluye con juegos sentados en la cocina.";
    } else {
      energyMessage = "¡Tarde de pura diversión! Vamos a amasar, armar figuras divertidas de frutas y colorear a lo grande.";
    }

    setCalculatedPlan({
      names,
      recipeChoice,
      taskForKids,
      fruitChoice,
      drawingChoice,
      prepTimeLimit,
      energyMessage
    });
    setShowPlan(true);

    // Minor smooth scroll to see the plan
    setTimeout(() => {
      document.getElementById("plan-calculated-result")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 100);
  };

  return (
    <div id="calculator-section" className="bg-white border-2 border-brand-orange rounded-3xl p-6 sm:p-8 max-w-3xl mx-auto shadow-md">
      <div className="text-center mb-6">
        <span className="bg-brand-sand text-brand-orange text-xs sm:text-sm px-4 py-1.5 rounded-full font-black uppercase tracking-wider border border-brand-border inline-block">
          Herramienta Interactiva Gratuita ★ Elegí tus opciones
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl text-brand-text mt-3 font-black">
          Planificá tu Tarde Dorada en 1 minuto
        </h3>
        <p className="text-brand-text text-sm sm:text-base mt-2 max-w-lg mx-auto font-bold">
          Contanos sobre tus nietos y te armamos un recorrido paso a paso para compartir momentos inolvidables hoy mismo.
        </p>
      </div>

      <form onSubmit={handleGeneratePlan} className="space-y-5">
        {/* Name input */}
        <div>
          <label className="block text-sm sm:text-base font-black text-brand-text mb-1.5 font-sans">
            1. ¿Cómo se llaman tus nietos? <span className="text-brand-orange font-bold">(Opcional, ej: Lucas y Sofía)</span>
          </label>
          <input
            type="text"
            className="w-full bg-white border-2 border-brand-border rounded-xl px-4 py-3 text-brand-text font-bold focus:outline-none focus:ring-2 focus:ring-brand-sage font-sans text-sm sm:text-base"
            placeholder="Escribí sus nombres para personalizar el plan..."
            value={grandkidsNames}
            onChange={(e) => setGrandkidsNames(e.target.value)}
          />
        </div>

        {/* Quantities & Ages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm sm:text-base font-black text-brand-text mb-1.5 font-sans">
              2. ¿Cuántos nietos vas a cuidar hoy?
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: "1 Nieto/a", val: "1" },
                { label: "2 Nietos", val: "2" },
                { label: "3 o más", val: "3+" }
              ].map((item) => (
                <button
                  key={item.val}
                  type="button"
                  onClick={() => setNietosCount(item.val as any)}
                  className={`py-3 px-1.5 rounded-xl text-xs sm:text-sm font-black border-2 transition-all cursor-pointer ${
                    nietosCount === item.val
                      ? "bg-emerald-200 border-emerald-300 text-stone-900 shadow-sm"
                      : "bg-white border-brand-border text-brand-text hover:bg-brand-bg/50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm sm:text-base font-black text-brand-text mb-1.5">
              3. ¿Qué edades tienen aproximadamente?
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: "2 a 4 años", val: "2-4" },
                { label: "5 a 8 años", val: "5-8" },
                { label: "9 a 12 años", val: "9-12" }
              ].map((item) => (
                <button
                  key={item.val}
                  type="button"
                  onClick={() => setAges(item.val)}
                  className={`py-3 px-1.5 rounded-xl text-xs sm:text-sm font-black border-2 transition-all cursor-pointer ${
                    ages === item.val
                      ? "bg-emerald-200 border-emerald-300 text-stone-900 shadow-sm"
                      : "bg-white border-brand-border text-brand-text hover:bg-brand-bg/50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Energy selection */}
        <div>
          <label className="block text-sm sm:text-base font-black text-brand-text mb-1.5">
            4. Sinceramente, hoy de energía estás...
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {[
              { label: "🙏 Estoy un poco cansada", val: "cansada", desc: "No quiero líos ni correr" },
              { label: "☕ Tranquila (Mate de por medio)", val: "media", desc: "Un hermoso término medio" },
              { label: "⭐ ¡Tengo pilas y paciencia!", val: "mucha", desc: "Para jugar e inventar juntos" }
            ].map((item) => (
              <button
                key={item.val}
                type="button"
                onClick={() => setEnergy(item.val)}
                className={`p-3.5 rounded-xl border-2 text-left transition-all cursor-pointer ${
                  energy === item.val
                    ? "bg-emerald-50 border-emerald-300 text-stone-900 ring-2 ring-emerald-200/20"
                    : "bg-white border-brand-border text-brand-text hover:bg-brand-bg/50"
                }`}
              >
                <div className="text-xs sm:text-sm font-black font-serif">{item.label}</div>
                <div className="text-xs font-bold text-brand-text mt-1">{item.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <button
          type="submit"
          className="w-full bg-emerald-200 hover:bg-emerald-300 text-stone-900 font-sans font-black py-4 px-6 rounded-2xl shadow-md border border-emerald-300 transition-all flex items-center justify-center gap-2 cursor-pointer text-base sm:text-lg uppercase"
        >
          <Smile className="w-6 h-6 text-emerald-700" />
          ¡VER RECORRIDO DE NUESTRA TARDE DULCE!
        </button>
      </form>

      {showPlan && calculatedPlan && (
        <div
          id="plan-calculated-result"
          className="mt-8 bg-white border-2 border-brand-orange rounded-2xl p-5 sm:p-6 shadow-md animate-fade-in text-brand-text"
        >
          <div className="flex items-center gap-3 border-b border-brand-border pb-4 mb-4">
            <div className="bg-brand-sand p-3 rounded-full text-brand-orange border border-brand-border shrink-0">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-black text-xl sm:text-2xl text-brand-text">
                ☕ Plan de Tarde Resuelta para: <span className="text-brand-orange font-extrabold">{calculatedPlan.names}</span>
              </h4>
              <p className="text-xs sm:text-sm text-brand-text font-black">Diseñado de base a su edad ({ages} años) y tu nivel de energía.</p>
            </div>
          </div>

          <p className="text-sm sm:text-base italic font-black text-brand-text mb-6 bg-brand-bg p-4 rounded-lg border-l-4 border-brand-sage leading-relaxed">
            <strong>Cómo te cuidamos hoy:</strong> {calculatedPlan.energyMessage}
          </p>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-brand-orange text-white text-sm font-black flex items-center justify-center shrink-0 shadow-sm border border-brand-border">1</div>
                <div className="w-0.5 h-full bg-brand-border my-1"></div>
              </div>
              <div className="pb-4">
                <span className="text-xs sm:text-sm font-black uppercase text-brand-sage tracking-wider flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> 16:00 hs — ¡Comienza el aroma dulce!
                </span>
                <p className="text-base sm:text-lg font-black text-brand-text mt-1">
                  Preparamos la receta: <span className="text-brand-orange">{calculatedPlan.recipeChoice}</span>
                </p>
                <p className="text-sm sm:text-base mt-1 text-brand-text font-bold leading-normal">
                  <strong>Su rol importante:</strong> {calculatedPlan.taskForKids} Mientras tanto, el horno empieza a entibiar la casa de alegría y perfumes.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-brand-orange text-white text-sm font-black flex items-center justify-center shrink-0 shadow-sm border border-brand-border">2</div>
                <div className="w-0.5 h-full bg-brand-border my-1"></div>
              </div>
              <div className="pb-4">
                <span className="text-xs sm:text-sm font-black uppercase text-brand-sage tracking-wider flex items-center gap-1">
                  <Palette className="w-3.5 h-3.5" /> 16:20 hs — El truco anti-pantallas
                </span>
                <p className="text-base sm:text-lg font-black text-brand-text mt-1">
                  Momento de color mientras horneamos
                </p>
                <p className="text-sm sm:text-base mt-1 text-brand-text font-bold leading-normal">
                  Mientras el budín o las galletitas están en el horno, sacamos los lápices de colores y les damos la lámina impresa de <strong>"{calculatedPlan.drawingChoice}"</strong>. Se van a concentrar pintando, con música suave de fondo, sintiendo el aroma que sale de la cocina sin siquiera acordarse de que el celular existe.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-brand-orange text-white text-sm font-black flex items-center justify-center shrink-0 shadow-sm border border-brand-border">3</div>
                <div className="w-0.5 h-full bg-brand-border my-1"></div>
              </div>
              <div className="pb-4">
                <span className="text-xs sm:text-sm font-black uppercase text-brand-sage tracking-wider flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5" /> 16:45 hs — El plato de fruta mágica
                </span>
                <p className="text-base sm:text-lg font-black text-brand-text mt-1">
                  Montamos el plato de fruta divertida: <span className="text-brand-orange">{calculatedPlan.fruitChoice}</span>
                </p>
                <p className="text-sm sm:text-base mt-1 text-brand-text font-bold leading-normal">
                  En menos de 5 minutos armamos entre todos este plato con gajos divertidos de frutas. Al verlo tan lindo, se lo van a devorar contentos antes de comer la porción dulce. ¡Fruta fresca de estación adentro!
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-brand-orange text-white text-sm font-black flex items-center justify-center shrink-0 shadow-sm border border-brand-border">✓</div>
              </div>
              <div>
                <span className="text-xs sm:text-sm font-black uppercase text-brand-sage tracking-wider">
                  17:00 hs — ¡Tarde Triunfal!
                </span>
                <p className="text-base sm:text-lg font-black text-brand-text mt-1 font-sans">
                  Sabor real hecho en casa, mate calentito para vos y abrazos interminables de agradecimiento.
                </p>
                <p className="text-sm sm:text-base mt-1 text-brand-text font-bold leading-normal">
                  ¡Y antes de que se los lleven los papás, dejas listos sus dibujitos mágicos terminados para que se los muestren orgullosos! Te van a mirar con ojos brillantes y decir: <em>"¡Abru, sos el amor más grande, sos la mejor abuela del mundo entero!"</em>.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-brand-beige border-2 border-brand-border rounded-2xl p-5 text-center">
            <p className="text-sm sm:text-base font-black text-brand-text leading-relaxed">
              Abuela, organizar esto no requiere meses de práctica ni complicarte con manuales aburridos. Todo el material detallado, las láminas, las recetas explicadas paso a paso con letra bien grande y los moldes listos están compilados para vos en el kit digital completo por una inversión menor a lo que cuesta un kilo de facturas en el barrio.
            </p>
            <a
              href="https://h8v1v6-g7.myshopify.com/cart/51152331538665:1?checkout"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 bg-emerald-200 hover:bg-emerald-300 text-stone-900 text-sm sm:text-base font-black py-3 px-6 rounded-2xl shadow border border-emerald-300 hover:scale-101 transition-all cursor-pointer uppercase text-center no-underline font-sans"
            >
              ¡QUIERO ESTA TARDE RESUELTA POR COMPLETO! →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
