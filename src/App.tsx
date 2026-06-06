import React, { useState } from "react";
import { 
  Heart, 
  Sparkles, 
  BookOpen, 
  Award, 
  ArrowRight, 
  CheckCircle, 
  PhoneCall, 
  Clock, 
  ShieldCheck, 
  ChevronDown, 
  Volume2, 
  VolumeX,
  Star
} from "lucide-react";
import HeaderBanner from "./components/HeaderBanner";
import PlanningCalculator from "./components/PlanningCalculator";
import RecipeCarousel from "./components/RecipeCarousel";
import CheckoutModal from "./components/CheckoutModal";
import { REVIEWS_DATA, FAQS } from "./data";

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [waNotify, setWaNotify] = useState(false);

  const triggerWaSimulate = () => {
    setWaNotify(true);
    setTimeout(() => setWaNotify(false), 5500);
  };

  // Play a cute soft simulated sound message (just a simulation with status indicator for maximum emotional touch)
  const toggleAudioSimulation = () => {
    setIsAudioPlaying(!isAudioPlaying);
  };

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg font-sans antialiased text-brand-text selection:bg-brand-sand">
      
      {/* Header Promo Bar & Realtimer */}
      <HeaderBanner />

      {/* Main Elegant Header */}
      <header className="bg-white sticky top-0 z-40 border-b-2 border-brand-orange py-4 px-4 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-11 h-11 rounded-full bg-brand-orange flex items-center justify-center text-white font-serif font-black shadow-inner text-xl">
              M
            </div>
            <div>
              <span className="font-serif font-black text-brand-text text-base sm:text-lg leading-none block">Meriendas con los Nietos</span>
              <span className="text-xs text-brand-text uppercase tracking-widest font-black block mt-1">La abuela práctica ☕</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-6 text-sm sm:text-base font-black text-brand-text">
            <button onClick={() => scrollToSection("problema")} className="hover:text-brand-orange transition cursor-pointer underline decoration-brand-sage decoration-2">El Desafío</button>
            <button onClick={() => scrollToSection("calculator-section")} className="hover:text-brand-orange transition cursor-pointer underline decoration-brand-sage decoration-2">Planificador</button>
            <button onClick={() => scrollToSection("beneficios")} className="hover:text-brand-orange transition cursor-pointer underline decoration-brand-sage decoration-2">¿Por qué este método?</button>
            <button onClick={() => scrollToSection("que-incluye")} className="hover:text-brand-orange transition cursor-pointer underline decoration-brand-sage decoration-2">¿Qué incluye el Kit?</button>
          </div>

         <button
            onClick={handleOpenCheckout}
            className="bg-rose-200 hover:bg-rose-300 text-stone-900 font-black text-xs sm:text-sm py-2.5 px-5 rounded-xl shadow-md border border-rose-300 transition-all flex items-center gap-1.5 cursor-pointer uppercase font-sans"
          >
            <Sparkles className="w-4 h-4 text-rose-600 fill-rose-500" />
            <span>QUIERO MI KIT</span>
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 px-4 bg-brand-bg border-b border-brand-border">
        {/* Decorative ambient elements */}
        <div className="absolute top-20 left-10 w-48 h-48 bg-brand-sand/15 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-brand-beige/40 rounded-full blur-3xl opacity-75"></div>

        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Title & Text */}
            <div className="lg:col-span-7 text-left space-y-6">
              <span className="inline-flex items-center gap-1.5 bg-brand-sand text-brand-orange text-xs sm:text-sm font-black uppercase tracking-wider px-4 py-2 rounded-full relative border-2 border-brand-border">
                <span className="w-2 h-2 rounded-full bg-brand-orange inline-block animate-ping"></span>
                <span>Para abuelas argentinas dispuestas a crear recuerdos eternos</span>
              </span>

              <img 
                src="https://i.imgur.com/3v86hWi.png" 
                alt="¿Cómo lograr que tus nietos dejen las pantallas y de verdad sientan que tu casa es el mejor lugar del mundo?" 
                className="w-full object-contain max-w-xl mx-0 block"
                referrerPolicy="no-referrer"
              />

              <p className="text-brand-text text-base sm:text-lg font-bold leading-relaxed font-sans max-w-xl">
                Volvé a sentir el calor de los momentos compartidos. Una guía creada desde el corazón para abuelas que quieren regalarles a sus nietos una infancia con olor a bizcochuelo recién horneado, mesas llenas de risas y juegos sobre papel que los desconecten de las pantallas, guardando para siempre en su memoria el aroma de tu casa.
              </p>

              {/* Core Call To Actions */}
              <div className="flex flex-col sm:flex-row gap-4 items-stretch max-w-md">
                <button
                  onClick={handleOpenCheckout}
                  className="w-full bg-rose-200 hover:bg-rose-300 text-stone-900 font-sans font-black text-base sm:text-lg px-8 py-5 rounded-2xl shadow-md border border-rose-300 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer uppercase hover:scale-[1.01] transform"
                >
                  <span>¡QUIERO MI TARDE RESUELTA!</span>
                  <ArrowRight className="w-5 h-5 text-rose-600" />
                </button>
              </div>

              {/* Social icons, value triggers */}
              <div className="flex flex-wrap gap-2 text-xs text-brand-text font-black">
                <span className="flex items-center gap-1 bg-white px-2.5 py-1 rounded-lg border border-brand-border shadow-xs">
                  <CheckCircle className="w-3.5 h-3.5 text-brand-sage animate-pulse" />
                  <span>Reembolso de 30 días</span>
                </span>
                <span className="flex items-center gap-1 bg-white px-2.5 py-1 rounded-lg border border-brand-border shadow-xs">
                  <CheckCircle className="w-3.5 h-3.5 text-brand-sage" />
                  <span>Letra grande legible</span>
                </span>
                <span className="flex items-center gap-1 bg-white px-2.5 py-1 rounded-lg border border-brand-border shadow-xs">
                  <CheckCircle className="w-3.5 h-3.5 text-brand-sage" />
                  <span>Variantes sin TACC</span>
                </span>
              </div>
            </div>

            {/* Right Column: Hero Image Grandma & Child + Product Mockup Stack */}
            <div className="lg:col-span-5 relative mt-12 lg:mt-0 min-h-[460px] sm:min-h-[500px] lg:min-h-[440px]">
              <div className="relative w-full h-full">
                {/* 1. Grandma & Child Polaroid Image (Cozy Memories Layer) */}
                <div 
                  className="absolute top-0 left-2 w-[72%] bg-white p-3 pb-8 rounded-2xl shadow-md border-2 border-brand-border -rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-500 z-10 hover:z-30 cursor-pointer group"
                  onClick={handleOpenCheckout}
                >
                  <div className="overflow-hidden rounded-xl aspect-[4/3] bg-brand-sand">
                    <img 
                      src="https://i.imgur.com/KKmO91W.png" 
                      alt="Abuela dulce cocinando galletitas de chocolate con su amado nieto"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <p className="font-serif font-black text-center text-xs sm:text-sm text-brand-orange mt-2">
                    ♥ Recuerdos inolvidables
                  </p>
                </div>

                {/* 2. New Cover Image (Fabulous Main Resource Layer) */}
                <div 
                  className="absolute top-24 right-2 w-[78%] bg-white p-3 pb-10 rounded-2xl shadow-2xl border-2 border-brand-orange rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 z-20 hover:z-30 cursor-pointer group"
                  onClick={handleOpenCheckout}
                >
                  <div className="overflow-hidden rounded-xl aspect-[4/3] bg-brand-sand shadow-inner relative">
                    <img 
                      src="https://i.imgur.com/bZcJIkg.png" 
                      alt="Portada de Meriendas con los Nietos de la Abuela Práctica"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                  </div>
                  <p className="font-serif font-black text-center text-sm text-brand-text mt-3">
                    📖 ¡El Kit Completo de Meriendas Inteligentes!
                  </p>
                </div>

                {/* Badge accent */}
                <div className="absolute -top-6 -right-1 bg-rose-200 text-stone-900 border border-rose-300 font-sans font-black text-xs sm:text-sm px-4 py-2.5 rounded-2xl shadow-lg z-30 rotate-12 flex items-center gap-1.5 hover:scale-110 transition-transform cursor-pointer" onClick={handleOpenCheckout}>
                  <Sparkles className="w-4 h-4 text-rose-600 fill-rose-500 animate-pulse" />
                  <span>¡100% Práctico!</span>
                </div>
              </div>
            </div>
          </div>

          {/* Simulated WhatsApp Voice Note Emotional Audio Player */}
          <div className="mt-16 bg-white border border-brand-border rounded-2xl p-5 max-w-2xl mx-auto shadow-md text-left font-sans transition-all hover:border-brand-sage relative">
            <div className="absolute -top-3.5 left-6 bg-brand-sage text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-xs">
              ★ Testimonio de abuela real
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-1.5">
              <button
                onClick={toggleAudioSimulation}
                className={`w-14 h-14 rounded-full flex items-center justify-center text-white transition-all cursor-pointer shrink-0 ${
                  isAudioPlaying ? "bg-brand-sage animate-pulse" : "bg-brand-sage hover:bg-brand-sage/95"
                }`}
                title="Escuchar audio de abuela"
              >
                {isAudioPlaying ? <Volume2 className="w-7 h-7 text-brand-beige" /> : <VolumeX className="w-7 h-7 text-brand-beige" />}
              </button>
              <div className="flex-1 w-full text-center sm:text-left">
                <p className="text-sm font-black text-brand-text flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <span>Mensaje de voz de Carmen (63 años, Banfield)</span>
                  <span className="text-xs text-brand-sage font-mono font-black animate-pulse">01:14</span>
                </p>
                <div className="relative mt-1">
                  {isAudioPlaying ? (
                    <div className="flex items-center justify-center sm:justify-start gap-0.5 py-1.5">
                      <div className="h-3 w-1 bg-brand-sage animate-bounce"></div>
                      <div className="h-6 w-1 bg-brand-sage animate-bounce [animation-delay:0.1s]"></div>
                      <div className="h-4 w-1 bg-brand-sage animate-bounce [animation-delay:0.3s]"></div>
                      <div className="h-5 w-1 bg-brand-sage animate-bounce [animation-delay:0.2s]"></div>
                      <div className="h-2 w-1 bg-brand-sage animate-bounce [animation-delay:0.4s]"></div>
                      <div className="h-6 w-1 bg-brand-sage animate-bounce [animation-delay:0.15s]"></div>
                      <div className="h-4 w-1 bg-brand-sage animate-bounce [animation-delay:0.35s]"></div>
                      <p className="text-xs sm:text-sm text-brand-text font-black italic ml-2">"¡Nene, me salvaste la vida con el monstruo de manzana!..."</p>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 py-1">
                      <div className="h-1 bg-brand-border rounded flex-1 hidden sm:block"></div>
                      <span className="text-xs sm:text-sm text-brand-text font-bold font-sans">Hacé clic para escuchar la voz de la experiencia ★</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {isAudioPlaying && (
              <p className="text-xs sm:text-sm text-brand-text leading-relaxed font-sans bg-brand-bg border border-brand-border rounded-xl p-3.5 mt-3.5 italic transition-all animate-fade-in font-bold border-l-4 border-l-brand-sage">
                "¡Hola querida! Mirá, te cuento... Yo estaba cansadísima, asustada porque los mellis se la pasaban gritando con TikTok. Compré este manual por el precio de dos facturas, imprimimos los dibujos y preparamos las galletas de avena. No sabés lo que nos divertimos. Estuvieron callados y felices amasando. ¡Hasta comieron manzana roja pensando que eran monstruos! Probalo de abuela a abuela, te va a cambiar las tardes."
              </p>
            )}
          </div>
        </div>
      </section>

      {/* IDENTIFICACIÓN DEL PROBLEMA */}
      <section id="problema" className="py-16 px-4 bg-white border-t border-b border-brand-border text-brand-text">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs sm:text-sm uppercase font-black tracking-wider text-brand-orange font-sans">Abuela... seamos cien por ciento honestas</span>
            <h2 className="font-serif text-2xl sm:text-4xl text-brand-text font-black mt-1.5">
              ¿Cuidar a tus nietos a veces se siente como una batalla perdida?
            </h2>
          </div>

          <p className="text-center text-brand-text text-base sm:text-lg max-w-2xl mx-auto mb-10 font-sans font-bold leading-relaxed">
            Llegan a casa con toda la energía del mundo. Vos los esperás con toda la ilusión del corazón. Querés darles amor, mimos, charlas reales. Pero la realidad de la tarde suele lucir muy diferente del ideal...
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
            {/* Provs */}
            {[
              { 
                title: "📱 El hipnotismo de la pantalla", 
                desc: "Apenas entran a tu casa, te saludan apurados y ya están pidiendo la clave del Wi-Fi o el celular. Se quedan horas como zombies, con los ojos vidriosos, absorbiendo ruidos estridentes que les sobreestimulan y los ponen de mal humor."
              },
              { 
                title: "🥐 Meriendas improvisadas y caras", 
                desc: "No sabías qué cocinar, te diste vueltas por la cocina y terminaste bajando al almacén a contrarreloj para comprar galletitas resecas llenas de grasa e ingredientes raros, o gastando una fortuna en panadería industrial de apuro."
              },
              { 
                title: "😔 La dolorosa culpa silenciosa", 
                desc: "Estás cansada. Es comprensible, tus rodillas o tu espalda ya no tienen quince años. Te da culpa estar exhausta, por lo que termines rindiéndote y encendiéndoles los dibujitos en la tele solo para poder sentarte a descansar media hora en paz."
              },
              { 
                title: "🍏 La fruta que nadie quiere tocar", 
                desc: "Sabés que necesitan vitaminas. Les picás una manzana con cariño o les pelás una mandarina, pero el plato se queda oxidado o seco sobre la mesa de la cocina. Prefieren el paquete brillante con saborizantes químicos."
              }
            ].map((p, idx) => (
              <div key={idx} className="bg-white border-2 border-brand-orange p-6 rounded-2xl flex flex-col gap-2 shadow-sm hover:border-brand-orange transition-colors">
                <h4 className="font-black text-brand-text text-lg sm:text-xl">{p.title}</h4>
                <p className="text-brand-text text-sm sm:text-base leading-relaxed font-semibold">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AGITACIÓN EMOCIONAL */}
      <section className="py-16 px-4 bg-gradient-to-b from-brand-bg to-[#FAF8F5] text-brand-text">
        <div className="max-w-3xl mx-auto text-center font-sans">
          <Heart className="w-12 h-12 text-rose-500 mx-auto fill-rose-500 animate-pulse" />
          
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-text font-black mt-4 leading-snug">
            El tiempo vuela, abuela... <br className="hidden sm:inline" />
            Ellos van a crecer en un abrir y cerrar de ojos.
          </h2>

          <div className="mt-6 text-brand-text text-lg sm:text-xl space-y-5 text-left max-w-2xl mx-auto leading-relaxed border-l-4 border-rose-300 pl-5 italic font-serif font-black">
            <p>
              "Pensalo por un solo segundo... La infancia de tus nietos se está escribiendo hoy."
            </p>
            <p>
              "¿Qué recuerdos querés que guarden para siempre en su memoria cuando pasen los años y vos ya no estés en esta cocina? ¿El sonido metálico de un video genérico de YouTube en una pantalla táctil y fría...?"
            </p>
            <p>
              "¿O el perfume inolvidable a budín casero de limón recién horneado, sus manitos cubiertas de harina, las risas tímidas decorando caritas de frutas y la heladera llena de dibujos pintados con orgullo junto a su abuela?"
            </p>
          </div>

          <p className="text-brand-text mt-8 text-base sm:text-lg max-w-lg mx-auto font-sans font-bold leading-relaxed">
            No necesitás ser una maestra jardinera superdotada, ni gastar miles de pesos, ni terminar agotada sin poder levantarte de la cama mañana. Solo te hace falta una <strong>receta infalible de abuela práctica</strong>.
          </p>

          <div className="mt-8">
            <button
              onClick={handleOpenCheckout}
              className="bg-rose-200 hover:bg-rose-300 text-stone-900 font-sans font-black text-sm sm:text-base py-4 px-8 rounded-2xl shadow-md border border-rose-300 transition-all uppercase cursor-pointer"
            >
              ⭐ SÍ, QUIERO CREAR RECUERDOS ETERNOS EN LA COCINA
            </button>
          </div>
        </div>
      </section>

      {/* INTERACTIVE CALENDAR PLATFORM */}
      <section className="py-12 px-4 bg-white border-t border-b border-brand-border">
        <div className="max-w-5xl mx-auto">
          <PlanningCalculator onScrollToPricing={() => scrollToSection("comprar")} />
        </div>
      </section>

      {/* PRESENTACIÓN DE LA SOLUCIÓN */}
      <section className="py-16 px-4 bg-brand-bg text-brand-text">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs sm:text-sm uppercase font-black tracking-wider text-brand-orange font-sans">¡Damos vuelta las tardes por completo!</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-text font-black mt-2">
              Presentamos: "Meriendas con los Nietos"
            </h2>
            <p className="text-brand-text mt-2 text-base sm:text-lg max-w-xl mx-auto font-sans font-bold leading-normal">
              El kit de actividades y recetas familiares pensado para abuelas que quieren disfrutar el tiempo real sin tecnología.
            </p>
          </div>

          {/* Core presentation graphic block */}
          <div className="bg-gradient-to-r from-rose-50 to-rose-100 text-rose-950 rounded-3xl p-6 sm:p-10 shadow-md relative overflow-hidden mb-12 border-2 border-rose-300">
            {/* Graphic flourishes */}
            <div className="absolute right-0 bottom-0 w-48 h-48 bg-rose-300/20 rounded-full blur-2xl"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 font-sans">
                <span className="bg-rose-500 text-white text-xs uppercase font-black tracking-widest px-3 py-1 rounded-full">
                  FÓRMULA SECRETA
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-rose-950 font-black leading-tight">
                  Tardes inolvidables con tus nietos en menos de 60 minutos
                </h3>
                <p className="text-rose-900 text-sm sm:text-base leading-relaxed font-bold">
                  Creamos un sistema práctico compuesto por tres pilares básicos que se complementan en armonía: una receta rápida que sale sí o sí, una actividad de coloreado que relaja el ambiente mientras horneamos, y un juego frutal para alimentar su salud.
                </p>
                <p className="text-xs text-rose-700 font-bold italic">
                  *Advertencia: No te hablaremos de formatos raros ni enlaces mágicos hasta que sepas exactamente todo lo precioso que vas a poder vivir y tocar con tus nietos hoy mismo.
                </p>
              </div>

              <div className="bg-white/95 border-2 border-rose-300 rounded-2xl p-5 sm:p-6 space-y-4 font-sans text-sm sm:text-base text-rose-950">
                <p className="font-serif italic text-base sm:text-lg text-rose-900 font-black">Tres pilares de oro que se activan hoy:</p>
                
                <div className="flex gap-2.5">
                  <div className="text-rose-500 font-black">✔</div>
                  <div className="font-bold">
                    <strong className="text-rose-900">Pilar Recetas Prácticas:</strong> 5 preparaciones ricas para unir manos en masa sin que la cocina se vuelva un campo de batalla.
                  </div>
                </div>

                <div className="flex gap-2.5">
                  <div className="text-rose-500 font-black">✔</div>
                  <div className="font-bold">
                    <strong className="text-rose-900">Pilar Anti-Pantalla Imprimible:</strong> Hojas de dibujos de líneas gruesas para colorear en silencio mientras el aroma invade la casa.
                  </div>
                </div>

                <div className="flex gap-2.5">
                  <div className="text-rose-500 font-black">✔</div>
                  <div className="font-bold">
                    <strong className="text-rose-900">Pilar Fruta Sane Jugando:</strong> Ideas visuales rápidas para cambiar la manzana renegada de siempre por monstruos que devoran contentos.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DESTACADA: PREVIEW DE FRUTAS CREATIVAS */}
      <section className="py-12 px-4 bg-white text-brand-text border-b border-brand-border">
        <div className="max-w-4xl mx-auto font-sans">
          <div className="bg-white border-2 border-brand-orange rounded-3xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-md">
            {/* Image side */}
            <div className="md:col-span-5 relative group overflow-hidden rounded-2xl border-2 border-brand-border bg-white p-2.5 shadow-sm">
              <img 
                src="https://i.imgur.com/JNsEVdB.jpeg" 
                alt="Recetas saludables de frutas para niños" 
                className="w-full h-auto object-cover rounded-xl transition-all duration-300 group-hover:scale-[1.01]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-5 left-5 bg-brand-orange text-white text-xs font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                ¡Adelanto Real! 🍎
              </div>
            </div>
            
            {/* Text side */}
            <div className="md:col-span-7 space-y-4">
              <span className="text-xs uppercase font-black tracking-widest text-brand-orange bg-brand-sand px-3 py-1.5 rounded-full border border-brand-border inline-block">
                EL PILAR SALUDABLE EN ACCIÓN
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-black text-brand-text leading-tight">
                Transformá la fruta renegada en un juego delicioso
              </h3>
              <p className="text-brand-text text-sm sm:text-base font-bold leading-relaxed">
                ¿Viste lo difícil que es hacerles comer vitaminas? En el kit digital te enseñamos cómo usar gajos de mandarina, frutillas, kiwi o uvas para que tus nietos armen con sus manitos estos divertidos leoncitos, monstruitos o simpáticas oruguitas. 
              </p>
              <div className="flex flex-wrap gap-2 text-xs sm:text-sm font-black text-brand-text">
                <span className="flex items-center gap-1 bg-brand-sand border-2 border-brand-border px-3 py-1.5 rounded-lg shadow-xs">
                  🎯 Cero protestas
                </span>
                <span className="flex items-center gap-1 bg-brand-sand border-2 border-brand-border px-3 py-1.5 rounded-lg shadow-xs">
                  ⚡ En menos de 5 minutos
                </span>
                <span className="flex items-center gap-1 bg-brand-sand border-2 border-brand-border px-3 py-1.5 rounded-lg shadow-xs">
                  🧒 100% Hecho por ellos
                </span>
              </div>
              <p className="text-xs sm:text-sm text-brand-text font-bold italic leading-snug">
                *Los chicos se concentran y comen con orgullo su propia escultura frutal. ¡De abuela a abuela, es un camino de ida!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS CLAROS */}
      <section id="beneficios" className="py-16 px-4 bg-white border-t border-b border-brand-border text-brand-text">
        <div className="max-w-4xl mx-auto font-sans">
          <div className="text-center mb-12">
            <span className="text-sm uppercase font-black tracking-widest text-brand-orange bg-brand-sand px-3 py-1.5 rounded-full border border-brand-border inline-block">El sabor de la tranquilidad</span>
            <h2 className="font-serif text-2xl sm:text-4xl text-brand-text font-black mt-3">
              Los beneficios de tener tardes resueltas
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border-2 border-brand-border rounded-2xl p-6 hover:border-brand-orange hover:shadow-md transition-all bg-white shadow-sm">
              <span className="text-3xl">🥐</span>
              <h4 className="font-black text-brand-text mt-3 text-lg sm:text-xl">La merienda fluye sola</h4>
              <p className="text-brand-text text-sm sm:text-base leading-relaxed font-bold mt-2">
                Se acabó el dar vueltas frente a la heladera preguntándote qué cocinarle a los chicos. Tenés el mapa de ruta exacto coordinado por edades.
              </p>
            </div>

            <div className="border-2 border-brand-border rounded-2xl p-6 hover:border-brand-orange hover:shadow-md transition-all bg-white shadow-sm">
              <span className="text-3xl">💤</span>
              <h4 className="font-black text-brand-text mt-3 text-lg sm:text-xl">Sin terminar exhausta</h4>
              <p className="text-brand-text text-sm sm:text-base leading-relaxed font-bold mt-2">
                La técnica 'Manitos en acción' te permite asignarle roles activos. Ellos trabajan y se desplazan; vos los supervisás calentando el mate.
              </p>
            </div>

            <div className="border-2 border-brand-border rounded-2xl p-6 hover:border-brand-orange hover:shadow-md transition-all bg-white shadow-sm">
              <span className="text-3xl">🍎</span>
              <h4 className="font-black text-brand-text mt-3 text-lg sm:text-xl">Frutas adentro sin quejas</h4>
              <p className="text-brand-text text-sm sm:text-base leading-relaxed font-bold mt-2">
                Gajos que forman leoncitos y uvas que forman gusanitos. Es increíble cómo al transformarlo en juego, la fruta vuela del plato al instante.
              </p>
            </div>

            <div className="border-2 border-brand-border rounded-2xl p-6 hover:border-brand-orange hover:shadow-md transition-all bg-white shadow-sm">
              <span className="text-3xl">🇦🇷</span>
              <h4 className="font-black text-brand-text mt-3 text-lg sm:text-xl">Cuidando el bolsillo</h4>
              <p className="text-brand-text text-sm sm:text-base leading-relaxed font-bold mt-2">
                Ingredientes nacionales sencillos y super económicos. Sin necesidad de gastar una fortuna en confiterías industriales costosas.
              </p>
            </div>

            <div className="border-2 border-brand-border rounded-2xl p-6 hover:border-brand-orange hover:shadow-md transition-all bg-white shadow-sm">
              <span className="text-3xl">🛡️</span>
              <h4 className="font-black text-brand-text mt-3 text-lg sm:text-xl">100% Inclusivo (Sin TACC)</h4>
              <p className="text-brand-text text-sm sm:text-base leading-relaxed font-bold mt-2">
                Añadimos variantes sin gluten para que cuides la salud de tus nietos con total seguridad y sabor espectacular si son celíacos.
              </p>
            </div>

            <div className="border-2 border-brand-border rounded-2xl p-6 hover:border-brand-orange hover:shadow-md transition-all bg-white shadow-sm">
              <span className="text-3xl">👵</span>
              <h4 className="font-black text-brand-text mt-3 text-lg sm:text-xl">El orgullo de ser especial</h4>
              <p className="text-brand-text text-sm sm:text-base leading-relaxed font-bold mt-2">
                Para los papás serás la abuela salvadora y para tus nietos serás la abuela inolvidable y aventurera que siempre tiene ideas mágicas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE CAROUSEL SNEAK PEEK */}
      <section className="py-12 bg-white/55 border-b border-brand-border">
        <RecipeCarousel onScrollToPricing={() => scrollToSection("comprar")} />
      </section>

      {/* QUÉ INCLUYE (Con presentación clara del formato PDF práctico) */}
      <section id="que-incluye" className="py-16 px-4 bg-white text-brand-text">
        <div className="max-w-4xl mx-auto font-sans">
          <div className="text-center mb-12">
            <span className="text-sm uppercase font-black tracking-widest text-brand-orange bg-brand-sand px-3 py-1.5 rounded-full border border-brand-border inline-block">Práctico, directo y en tu correo</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-text font-black mt-3">
              ¿Qué incluye el Kit Digital "Meriendas con los Nietos"?
            </h2>
            <p className="text-brand-text mt-3 text-sm sm:text-base max-w-xl mx-auto font-bold leading-relaxed">
              Todo el material está consolidado en un hermoso y práctico <strong>documento PDF digital</strong> con letra bien grande listo para abrir en tu celular, tablet, compu o imprimir con un clic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Items include list */}
            {[
              { 
                title: "🍪 5 recetas de abuela probadas paso a paso", 
                desc: "Explicaciones de budines esponjosos y cookies mágicas de preparación rápida (15-20 min) que salen ricas sí o sí." 
              },
              { 
                title: "🎨 Dibujos Anti-Pantallas imprimibles", 
                desc: "Colección de hojas listas para imprimir en blanco y negro (consumen mínima tinta). El laberinto, dinosaurios y más." 
              },
              { 
                title: "🍎 Animalitos y Monstruitos de fruta divertida", 
                desc: "Ideas visuales rápidas para cambiar la manzana oxidada por hermosos leoncitos, monstruitos u oruguitas que comen felices." 
              },
              { 
                title: "🌾 2 recetas alternativas sin TACC", 
                desc: "Especialmente añadidas para nietos con intolerancias alimenticias o celiaquía sin perder un solo gramo del delicioso sabor de siempre." 
              },
              {
                title: "📸 Adorable resultado en la cocina",
                desc: "Así de hermosas y doraditas quedan las cookies con pepas de chocolate que tus nietos van a decorar con orgullo.",
                image: "https://i.imgur.com/4OO4h8u.png"
              }
            ].map((item, idx) => (
              <div key={idx} className={`flex gap-4 items-start p-5 rounded-2xl shadow-xs border-2 ${item.image ? "bg-rose-50 border-rose-300" : "bg-white border-brand-orange"}`}>
                {item.image ? (
                  <div className="w-full flex gap-4 items-center">
                    <img 
                      src={item.image} 
                      alt="Cookies doradas con pepas de chocolate" 
                      className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-xl border-2 border-rose-250 shadow-xs shrink-0" 
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <span className="bg-rose-400 text-white text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full font-black border border-white inline-block mb-1">
                        Adelanto Exclusivo 🍪
                      </span>
                      <h4 className="font-black text-rose-950 text-base sm:text-lg leading-tight">{item.title}</h4>
                      <p className="text-rose-900 text-xs sm:text-sm leading-snug mt-1 font-bold">{item.desc}</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="bg-brand-orange text-white p-2.5 rounded-full text-sm shrink-0 font-black w-9 h-9 flex items-center justify-center border border-brand-border shadow-xs">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-black text-brand-text text-base sm:text-lg">{item.title}</h4>
                      <p className="text-brand-text text-sm sm:text-base leading-relaxed mt-1 font-semibold">{item.desc}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFORMACIÓN ANTES / DESPUÉS */}
      <section className="py-16 px-4 bg-white text-brand-text font-sans">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs sm:text-sm uppercase font-black tracking-widest text-brand-orange bg-brand-sand px-3 py-1.5 rounded-full border border-brand-border inline-block">¿Notás el cambio rotundo?</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-text font-black mt-2">
              Tu vida como abuela, antes y después...
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Antes */}
            <div className="bg-rose-50/70 p-6 sm:p-8 rounded-3xl border-2 border-rose-200 relative shadow-sm">
              <div className="absolute right-4 top-4 bg-rose-200 text-rose-950 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                La tarde de siempre 😞
              </div>
              <h3 className="font-serif font-black text-xl text-rose-950 mb-4">La tarde estresante</h3>
              
              <ul className="space-y-4 text-sm sm:text-base text-black font-bold">
                <li className="flex gap-2.5 items-start">
                  <span className="text-rose-600 font-extrabold text-base sm:text-lg shrink-0">✗</span>
                  <span>Los chicos idos con el volumen insoportable de la tablet.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="text-rose-600 font-extrabold text-base sm:text-lg shrink-0">✗</span>
                  <span>Correr de urgencia para comprar galletitas raras llenas de aditivos.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="text-rose-600 font-extrabold text-base sm:text-lg shrink-0">✗</span>
                  <span>Frustración de no tener ideas y culpa constante por encenderles la tele.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="text-rose-600 font-extrabold text-base sm:text-lg shrink-0">✗</span>
                  <span>Chicos irritados que rezongan toda la tarde pidiendo volver con sus celulares.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="text-rose-600 font-extrabold text-base sm:text-lg shrink-0">✗</span>
                  <span>Terminar la tarde exhausta, con dolor de nuca y sin recuerdos de valor.</span>
                </li>
              </ul>
            </div>

            {/* Después */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-brand-orange relative shadow-md">
              <div className="absolute right-4 top-4 bg-brand-orange text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                La tarde resuelta ❤️
              </div>
              <h3 className="font-serif font-black text-xl text-brand-text mb-4">La tarde mágica</h3>
              
              <ul className="space-y-4 text-sm sm:text-base text-brand-text font-bold">
                <li className="flex gap-2.5 items-start">
                  <span className="text-brand-orange font-extrabold text-base sm:text-lg shrink-0">✔</span>
                  <span>Hogareño aroma a budín casero caliente saliendo de la cocina.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="text-brand-orange font-extrabold text-base sm:text-lg shrink-0">✔</span>
                  <span>Chicos concentrados coloreando con lápices sentados al lado tuyo.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="text-brand-orange font-extrabold text-base sm:text-lg shrink-0">✔</span>
                  <span>Alegría compartida comiendo monstruos de manzana sin protestar.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="text-brand-orange font-extrabold text-base sm:text-lg shrink-0">✔</span>
                  <span>Abrazos tiernos de despedida y el deseo de que vuelva a ser tu fin de semana.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL FEED BACKINGS */}
      <section className="py-16 px-4 bg-brand-bg border-t border-b border-brand-border text-brand-text">
        <div className="max-w-4xl mx-auto font-sans">
          <div className="text-center mb-10">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-orange bg-brand-sand px-3 py-1.5 border border-brand-border rounded-full inline-block">Historias con final feliz</span>
            <h2 className="font-serif text-2xl sm:text-4xl text-brand-text font-black mt-2">
              Lo que dicen otras abuelas en Argentina
            </h2>
            <p className="text-brand-text text-sm sm:text-base font-bold mt-2">Confiaron en nosotros para cambiar la dinámica con sus nietos...</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {REVIEWS_DATA.map((review) => (
              <div key={review.id} className="bg-white border-2 border-brand-orange rounded-3xl p-6 shadow-sm hover:border-brand-orange hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex text-yellow-500">
                      {[...Array(review.stars)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-500" />
                      ))}
                    </div>
                    <span className="bg-white border text-brand-orange text-xs px-2.5 py-1 rounded-full font-black uppercase tracking-wider">
                      ✓ Compra Verificada
                    </span>
                  </div>

                  <p className="text-brand-text text-sm sm:text-base leading-relaxed italic font-bold mb-4">
                    "{review.comment}"
                  </p>
                </div>

                <div className="flex items-center gap-3 border-t border-brand-border pt-4 mt-3">
                  <div className={`w-10 h-10 rounded-full ${review.avatarColor} font-black text-base flex items-center justify-center border border-brand-border shadow-xs`}>
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-black text-brand-text text-sm sm:text-base">{review.name}</h5>
                    <p className="text-xs font-bold text-brand-text mt-0.5">{review.relationship} • {review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={handleOpenCheckout}
              className="bg-rose-200 hover:bg-rose-300 text-stone-900 font-black text-sm sm:text-base py-4 px-8 rounded-2xl shadow-md border border-rose-300 hover:shadow-lg transition-all cursor-pointer inline-flex items-center gap-1.5"
            >
              <span>¡QUIERO EMPEZAR MI MEJOR TARDE CON ELLOS!</span>
            </button>
          </div>
        </div>
      </section>

      {/* PRECIO CON ANCLAJE (ANCLADO DE EMOCIÓN) */}
      <section id="comprar" className="py-20 px-4 bg-brand-bg text-brand-text text-center relative overflow-hidden border-t border-brand-border">
        {/* Safe frame border circles */}
        <div className="absolute -left-20 top-10 w-96 h-96 bg-brand-sand/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -right-20 bottom-10 w-96 h-96 bg-brand-beige/50 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-2xl mx-auto relative bg-white border-4 border-brand-orange p-6 sm:p-12 rounded-[40px] shadow-lg">
          <span className="bg-brand-orange text-white text-xs uppercase tracking-widest font-black px-4 py-1.5 rounded-full inline-block mb-4 shadow-xs">
            PRECIO FINAL CONGELADO POR HOY
          </span>

          <h3 className="font-serif text-3xl sm:text-4xl text-brand-text font-black leading-tight">
            Una inversión ínfima para recuerdos eternos
          </h3>
          
          <p className="text-brand-text text-sm sm:text-base mt-4 max-w-lg mx-auto font-sans font-bold leading-relaxed">
            ¿Cuánto gastás comprando facturas industriales llenas de grasa, o dos juguetitos de plástico que van a terminar olvidados en un rincón mañana?
          </p>

          {/* Pricing Box values */}
          <div className="my-8 font-sans">
            <p className="text-brand-text text-base sm:text-xl line-through font-extrabold pb-1">Valor regular: $11.980 pesos</p>
            <div className="flex justify-center items-baseline gap-1.5 mt-1">
              <span className="text-brand-orange text-5xl sm:text-6xl font-black tracking-tight">$5.990</span>
              <span className="text-brand-text text-lg font-black uppercase font-sans">pesos argentinos</span>
            </div>
            <p className="text-brand-sage text-sm sm:text-base font-black uppercase tracking-wide mt-2">
              Pago Único • Acceso ilimitado para siempre • Recibes en tu correo al instante
            </p>
          </div>

          {/* Buttons and warnings */}
          <div className="space-y-3 font-sans">
            <button
              onClick={handleOpenCheckout}
              className="w-full bg-rose-200 hover:bg-rose-300 text-stone-900 font-black text-sm sm:text-lg py-4 px-8 rounded-2xl shadow-md border border-rose-300 transition-all transform hover:scale-[1.01] uppercase cursor-pointer"
            >
              🛒 QUIERO MI TARDE RESUELTA POR COMPLETO
            </button>
            <p className="text-xs text-brand-text font-bold leading-relaxed max-w-sm mx-auto">
              Confirmación inmediata de Mercado Pago. Al hacer clic se abrirá nuestro formulario inteligente seguro para configurar tu copia al correo.
            </p>
          </div>

          {/* Trust badges inside card */}
          <div className="grid grid-cols-3 gap-3 mt-8 pt-6 border-t border-dashed border-brand-border text-brand-text text-xs font-sans font-black uppercase tracking-wider">
            <div className="flex flex-col items-center">
              <span className="text-brand-orange text-2xl mb-1">🇦🇷</span>
              <span>100% Argentino</span>
            </div>
            <div className="flex flex-col items-center border-l border-r border-brand-border">
              <span className="text-brand-orange text-2xl mb-1">📬</span>
              <span>Envío Directo</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-brand-orange text-2xl mb-1">🛡️</span>
              <span>Compra Segura</span>
            </div>
          </div>
        </div>
      </section>

      {/* GARANTÍA EXTREMA DE SATISFACCIÓN */}
      <section className="py-16 px-4 bg-white text-brand-text">
        <div className="max-w-4xl mx-auto border-4 border-solid border-brand-sage bg-white rounded-3xl p-6 sm:p-10 font-sans shadow-md">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="bg-brand-sage/10 p-5 rounded-full shrink-0 text-brand-sage border border-brand-sage">
              <ShieldCheck className="w-16 h-16" />
            </div>

            <div className="space-y-3.5">
              <h3 className="font-serif font-black text-xl sm:text-2xl text-brand-text leading-tight">
                Mi promesa inquebrantable de abuela a abuela: <br className="hidden md:inline" />
                Garantía Satisfecha o Reembolso del 100%
              </h3>
              <p className="text-brand-text text-sm sm:text-base leading-relaxed font-bold">
                "Sé muy bien lo valioso que es tu dinero y tu confianza, abuela. Por eso, mi garantía es ciega y total: tenés 30 días enteros para abrir el kit, preparar los budines, colorear los dinosaurios y ver la carita de tus nietos. Si por cualquier motivo sentís que este material no te resolvió tus tardes o no lograste desconectarlos del celular libres de estrés, me mandás un correo de lo más simple y te reintegro cada centavo de tus $5.990 ARS de inmediato. Sin vueltas, sin preguntas incómodas y dándote un abrazo agradecido."
              </p>
              <p className="text-sm font-black text-brand-sage">— El Equipo de Abuelas Prácticas Argentinas</p>
            </div>
          </div>
        </div>
      </section>

      {/* QUESTIONS & ANSWERS ACCORDION (FAQs) */}
      <section className="py-16 px-4 bg-white border-t border-b border-brand-border text-brand-text">
        <div className="max-w-3xl mx-auto font-sans">
          <div className="text-center mb-10">
            <span className="text-xs sm:text-sm uppercase font-black tracking-widest text-[#B45309] bg-orange-100 px-3 py-1.5 border border-brand-border rounded-full inline-block">¿Alguna dudita dando vueltas?</span>
            <h2 className="font-serif text-2xl sm:text-4xl text-brand-text font-black mt-2">
              Respondemos tus preguntas con total honestidad
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <div key={faq.id} className="bg-white border-2 border-brand-border rounded-2xl overflow-hidden transition-all duration-300">
                <button
                  onClick={() => setOpenFaqIdx(openFaqIdx === idx ? null : idx)}
                  className="w-full text-left p-5 font-black text-brand-text text-sm sm:text-base flex justify-between items-center bg-white hover:bg-brand-sand cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-brand-orange shrink-0 transition-transform duration-300 ${openFaqIdx === idx ? "rotate-180" : ""}`} />
                </button>
                
                {openFaqIdx === idx && (
                  <div className="p-5 border-t-2 border-brand-border text-sm sm:text-base text-brand-text font-bold bg-[#FAF8F5] leading-relaxed animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {waNotify && (
            <div className="mt-4 bg-brand-sage text-white text-sm font-black py-3 px-4 rounded-xl shadow-md border border-brand-border animate-slide-up text-center">
              💬 <strong>Asistencia al cliente instantánea:</strong> ¡Hola Abuela! Comunicate con nosotras a <strong>hola@meriendasconlosnietos.com</strong> y resolveremos tu duda técnica o de pago en menos de 10 minutos.
            </div>
          )}

          <div className="mt-8 bg-white p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left border-2 border-brand-orange relative shadow-sm">
            <div>
              <p className="text-sm sm:text-base font-black text-brand-text">¿Seguís con alguna duda técnica o de pago?</p>
              <p className="text-xs sm:text-sm text-brand-text font-bold mt-1">Escribinos y una abuela de carne y hueso te ayudará por WhatsApp.</p>
            </div>
            <button
              type="button"
              onClick={triggerWaSimulate}
              className="bg-rose-200 hover:bg-rose-300 text-stone-900 text-sm font-black py-3 px-5 rounded-xl border border-rose-300 flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
            >
              💬 Chatear por WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* CIERRE EMOCIONAL EXTREMO */}
      <section className="py-20 px-4 bg-brand-beige text-brand-text text-center relative overflow-hidden border-t border-b border-brand-border">
        {/* Soft atmospheric sparks */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-sand/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-2xl mx-auto relative font-sans">
          <span className="text-brand-orange text-5xl">❤️</span>
          
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-text font-black mt-4 leading-snug">
            Llegará un día donde las tablets se rompan y los celulares queden viejos...
          </h2>
          
          <p className="font-serif italic text-lg sm:text-xl text-brand-text mt-6 max-w-xl mx-auto leading-relaxed font-black animate-pulse">
            "Pero el recuerdo del aroma calientito saliendo de la cocina del living de tu casa, las risas con harina en la punta de la nariz, y el amor inmenso de tus tardes de juego se va a quedar grabado a fuego en el corazón de tus nietos para toda la vida."
          </p>

          <p className="text-brand-text text-sm sm:text-base mt-6 max-w-md mx-auto leading-relaxed font-bold">
            Regalales hoy una infancia de verdad, sana, feliz y cerquita de su abuela. Se van a acordar de esto cuando sean grandes y tengan sus propios hijos.
          </p>

          <div className="mt-8 space-y-4">
            <button
              onClick={handleOpenCheckout}
              className="bg-rose-200 hover:bg-rose-300 text-stone-900 font-black text-sm sm:text-base py-4 px-8 rounded-2xl shadow-md border border-rose-300 transition-all uppercase cursor-pointer"
            >
              ✨ SÍ, QUIERO DE CORAZÓN ESTE RECUERDO RECIÉN HORNEADO
            </button>
            
            <p className="text-brand-orange text-xs font-bold uppercase tracking-wide">
              ¡Dales la tarde dorada que se merecen!
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-stone-900 text-stone-350 text-center py-12 px-4 border-t border-stone-850 font-sans text-xs">
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="font-bold text-stone-250 text-xs sm:text-sm">
            © 2026 Meriendas con los Nietos — El manual de la abuela práctica en Argentina.
          </p>
          <p className="max-w-lg mx-auto text-xs leading-relaxed text-stone-400 font-medium">
            Descargo de responsabilidad: Los testimonios mostrados en esta página representan experiencias reales de abuelas usuarias del material de muestra. Los resultados y niveles de diversión de tus nietos dependen de su participación directa y del nivel de amor que pongas en las recetas. Las recetas sin TACC deben ser elaboradas en entornos limpios para evitar contaminación cruzada si un niño tiene alergia grave o celiaquía extrema.
          </p>
          <div className="flex justify-center gap-4 text-xs text-stone-400 font-bold">
            <span className="hover:text-white cursor-pointer">Políticas de Privacidad</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Términos de Servicio</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Defensa de las Consumidoras</span>
          </div>
        </div>
      </footer>

      {/* CHECKOUT MODAL DRAWER */}
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
      />

    </div>
  );
}
