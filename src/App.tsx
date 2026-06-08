import React, { useState } from "react";
import { 
  Heart, 
  Sparkles, 
  ArrowRight, 
  Star,
  X,
  Play
} from "lucide-react";
import HeaderBanner from "./components/HeaderBanner";
import CheckoutModal from "./components/CheckoutModal";
import { REVIEWS_DATA } from "./data";

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [waNotify, setWaNotify] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const triggerWaSimulate = () => {
    setWaNotify(true);
    setTimeout(() => setWaNotify(false), 5500);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg font-sans antialiased text-brand-text selection:bg-brand-sand">
      <HeaderBanner />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 px-4 bg-brand-bg border-b border-brand-border">
        {/* Decorative ambient elements */}
        <div className="absolute top-20 left-10 w-48 h-48 bg-brand-sand/15 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-brand-beige/40 rounded-full blur-3xl opacity-75"></div>

        <div className="max-w-4xl mx-auto relative text-center space-y-8 z-10">
          {/* Main Cover Image at the absolute top of the content ("al principio de todo como portada principal, tal cual sin recortes") */}
          <div className="relative inline-block mx-auto mb-4">
            <a 
              href="https://h8v1v6-g7.myshopify.com/cart/51152331538665:1?checkout"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-3 pb-8 rounded-3xl shadow-2xl border-2 border-brand-orange hover:scale-[1.02] transition-all duration-500 cursor-pointer group block no-underline relative max-w-xs sm:max-w-sm md:max-w-md mx-auto"
            >
              <img 
                src="https://i.imgur.com/I9SD6fc.png" 
                alt="Portada Principal de Meriendas con los Nietos de la Abuela Práctica"
                className="w-full h-auto rounded-2xl shadow-sm block" 
                referrerPolicy="no-referrer"
              />
              <p className="font-serif font-black text-center text-sm sm:text-base text-brand-text mt-4">
                📖 ¡El Kit Completo de Meriendas Inteligentes!
              </p>
            </a>

            {/* Sparkles Badge */}
            <a 
              href="https://h8v1v6-g7.myshopify.com/cart/51152331538665:1?checkout"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -top-4 -right-4 bg-emerald-200 text-stone-900 border border-emerald-300 font-sans font-black text-xs sm:text-sm px-4 py-2.5 rounded-2xl shadow-lg z-30 rotate-12 flex items-center gap-1.5 hover:scale-110 transition-transform cursor-pointer block no-underline"
            >
              <Sparkles className="w-4 h-4 text-emerald-600 fill-emerald-500 animate-pulse" />
              <span>¡100% Práctico!</span>
            </a>
          </div>

          <div className="space-y-6">
            <span className="inline-flex items-center gap-1.5 bg-brand-sand text-brand-orange text-xs sm:text-sm font-black uppercase tracking-wider px-4 py-2 rounded-full relative border-2 border-brand-border">
              <span className="w-2 h-2 rounded-full bg-brand-orange inline-block animate-ping"></span>
              <span>Para abuelas argentinas dispuestas a crear recuerdos eternos</span>
            </span>

            <h1 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-brand-text leading-tight tracking-tight max-w-3xl mx-auto">
              ¿Cómo lograr que tus nietos <span className="text-brand-orange">dejen las pantallas</span> y de verdad sientan que tu casa es el mejor lugar del mundo?
            </h1>

            <p className="text-brand-text text-base sm:text-lg font-bold leading-relaxed font-sans max-w-2xl mx-auto">
              Una guía desde el corazón para regalarle a tus nietos una infancia feliz y sin pantallas: tardes con olor a bizcochuelo recién horneado, risas compartidas y recuerdos eternos en la casa de la abuela.
            </p>

            {/* Core Call To Actions */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center max-w-md mx-auto pt-2">
              <button
                onClick={() => scrollToSection("comprar")}
                className="w-full bg-emerald-200 hover:bg-emerald-300 text-stone-900 font-sans font-black text-base sm:text-lg px-8 py-5 rounded-2xl shadow-xl border-2 border-emerald-400 hover:shadow-2xl transition-all flex flex-col items-center justify-center gap-2 cursor-pointer uppercase hover:scale-[1.03] transform no-underline text-center animate-attention"
              >
                <div className="flex items-center gap-2 text-stone-950 font-black tracking-wide">
                  <span>¡QUIERO MI TARDE RESUELTA!</span>
                  <ArrowRight className="w-5 h-5 text-emerald-700 shrink-0 animate-bounce" />
                </div>
                <span className="bg-yellow-300 text-stone-950 font-black text-xl sm:text-2xl px-6 py-2 rounded-full shadow-md tracking-wider border-2 border-yellow-400 inline-block scale-105 my-1 hover:scale-110 transition-transform">
                  🔥 POR SOLO $5.999 🔥
                </span>
              </button>
            </div>

            {/* QUÉ INCLUYE (Repositioned here to be directly below the button, styled beautifully as a white rounded box) */}
            <div id="que-incluye" className="bg-white border-2 border-brand-orange/40 rounded-3xl p-6 sm:p-8 shadow-xl max-w-3xl mx-auto text-left font-sans my-8 relative">
              <div className="text-center mb-8">
                <span className="text-xs uppercase font-black tracking-widest text-brand-orange bg-brand-sand px-3 py-1.5 rounded-full border border-brand-orange/20 inline-block">Práctico, directo y en tu correo</span>
                <h3 className="font-serif text-2xl sm:text-3xl text-brand-text font-black mt-3">
                  ¿Qué incluye el Kit Digital "Meriendas con los Nietos"?
                </h3>
                <p className="text-brand-text/90 mt-2 text-xs sm:text-sm font-bold leading-relaxed max-w-xl mx-auto">
                  Todo el material está consolidado en un hermoso y práctico <strong>documento PDF digital</strong> con letra bien grande listo para abrir en tu celular, tablet, compu o imprimir con un clic.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { 
                    title: "🍪 5 recetas de abuela probadas paso a paso", 
                    image: "https://i.imgur.com/pq0g1ym.png"
                  },
                  { 
                    title: "🎨 Dibujos Anti-Pantallas imprimibles", 
                    image: "https://i.imgur.com/sqKiEue.png",
                    bgClass: "bg-yellow-50/90 border-yellow-250",
                    imageScale: "scale-105 sm:scale-110 py-1"
                  },
                  { 
                    title: "🍎 Ideas para hacer animalitos de fruta divertida", 
                    image: "https://i.imgur.com/vq7HnBw.jpeg",
                    bgClass: "bg-rose-50/80 border-rose-250",
                    imageScale: "scale-105 sm:scale-110 py-1"
                  },
                  { 
                    title: "🎁 BONUS: Videos de manualidades con cosas de la casa", 
                    image: "https://i.imgur.com/tF9mtt9.png",
                    bgClass: "bg-emerald-50/90 border-emerald-300",
                    imageScale: "scale-100 py-1"
                  },
                  { 
                    title: "🌾 2 recetas alternativas sin TACC", 
                    desc: "Especialmente añadidas para nietos con intolerancias alimenticias o celiaquía sin perder un solo gramo del delicioso sabor de siempre."
                  }
                ].map((item, idx) => (
                  <div key={idx} className={`flex gap-3 items-start p-4 rounded-xl shadow-xs border ${
                    item.bgClass ? item.bgClass : "bg-brand-sand/35 border-brand-orange/30"
                  }`}>
                    <div className="bg-brand-orange text-white p-2 rounded-full text-xs shrink-0 font-black w-7 h-7 flex items-center justify-center border border-brand-border shadow-xs">
                      {idx + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-black text-brand-text text-sm sm:text-base">{item.title}</h4>
                      {item.image ? (
                        <div className="mt-2 text-center overflow-hidden rounded-xl">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className={`w-full h-auto object-cover block mx-auto rounded-lg transition-transform ${item.imageScale ? item.imageScale : "scale-100"}`} 
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      ) : (
                        <div className="flex gap-3 mt-1 items-center justify-between">
                          <p className="text-brand-text text-xs sm:text-sm leading-relaxed font-semibold flex-1">{item.desc}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN DE MANUALIDADES SÚPER CREATIVAS CON VIDEO DE PINTEREST */}
      <section id="actividades" className="py-16 px-4 bg-gradient-to-b from-white to-brand-bg text-brand-text border-b border-brand-border">
        <div className="max-w-5xl mx-auto font-sans">
          <div className="text-center mb-12">
            <span className="text-xs uppercase font-black tracking-widest text-emerald-700 bg-emerald-100 px-4 py-2 rounded-full border border-emerald-300 inline-block animate-pulse">
              🎁 REGALO ADICIONAL EXCLUSIVO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-text font-black mt-3 leading-tight">
              ✂️ Manualidades Súper Creativas <br className="hidden sm:inline" />
              <span className="text-brand-orange">con lo que ya tenés en casa</span>
            </h2>
            <p className="text-brand-text/90 mt-3 text-base sm:text-lg font-bold leading-relaxed max-w-2xl mx-auto">
              No gastes una fortuna en jugueterías ni en materiales costosos. Te enseñamos a usar rollos de papel higiénico, tapitas, cartones de huevos o medias huérfanas para pasar tardes de pura risa y creación.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Box: Creative Ideas List */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-white border-2 border-brand-orange rounded-3xl p-6 shadow-md relative overflow-hidden flex flex-col">
                <span className="absolute -top-3 left-6 bg-brand-orange text-white text-xs font-black px-3 py-1 rounded-full uppercase z-10">
                  FÁCILES Y DIVERTIDAS
                </span>
                
                <h4 className="font-serif text-xl sm:text-2xl font-black text-brand-text mb-3 mt-1">
                  ¿Qué van a crear juntos?
                </h4>

                {/* Real Activities Image provided by User */}
                <div className="rounded-2xl border-2 border-brand-border overflow-hidden relative shadow-xs bg-brand-sand group">
                  <img 
                    src="https://i.imgur.com/tF9mtt9.png" 
                    alt="Manualidades Creativas a Crear Juntos" 
                    className="w-full h-auto object-cover max-h-[280px] sm:max-h-[320px] transition-transform duration-500 group-hover:scale-[1.02]"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="mt-5 pt-4 border-t border-brand-border/40 bg-zinc-50 -mx-6 -mb-6 p-5 rounded-b-3xl text-center">
                  <p className="text-xs sm:text-sm text-brand-text font-black leading-snug font-sans">
                     10 ideas para hacer manualidades geniales
                  </p>
                </div>
              </div>
            </div>

            {/* Right Box: Pinterest Inline Video Interactive Simulator */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <div 
                onClick={() => setIsCheckoutOpen(true)}
                className="w-full max-w-sm bg-stone-900 rounded-[32px] p-3 shadow-2xl border-4 border-stone-850 relative group cursor-pointer hover:scale-[1.02] active:scale-[0.99] transition-all duration-300"
              >
                {/* Camera Notch decoration */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-stone-850 rounded-full z-20"></div>
                
                {/* Simulated Pinterest screen with Play Button Overlay */}
                <div className="bg-stone-950 rounded-[24px] overflow-hidden relative border border-stone-800 flex flex-col items-center" style={{ minHeight: "420px" }}>
                  <div className="w-full py-3 bg-stone-900 text-center text-[11px] text-stone-400 font-bold border-b border-stone-800 select-none font-sans flex justify-center items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
                    <span>📱 ACCESO DE VÍDEOS EN TU COMPRA</span>
                  </div>
                  
                  {/* High Quality Video Preview Thumbnail linked directly to Checkout as fallback */}
                  <div className="w-full h-[380px] overflow-hidden flex items-center justify-center bg-stone-900 relative">
                    <img 
                      src="https://i.imgur.com/tF9mtt9.png" 
                      alt="Manualidades Creativas Paso a Paso" 
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />

                    {/* Dark glass play overlay */}
                    <div className="absolute inset-0 bg-stone-950/45 group-hover:bg-stone-950/30 transition-all duration-300 flex flex-col items-center justify-center p-4">
                      <div className="w-16 h-16 rounded-full bg-yellow-300 text-stone-950 border-4 border-white flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-7 h-7 fill-stone-950 text-stone-950 ml-1 animate-pulse" />
                      </div>
                      <span className="bg-brand-orange text-white font-black text-xs px-4 py-2 rounded-full mt-4 tracking-wider border border-brand-orange shadow-lg animate-bounce">
                        🔓 DESBLOQUEAR CLASES EN VIDEO ▶
                      </span>
                      <p className="text-[10px] text-stone-200 mt-2 text-center font-bold font-sans max-w-[200px] leading-snug">
                        Hacé clic para activar todo el material por solo $5.999
                      </p>
                    </div>
                  </div>

                  {/* Aesthetic bar */}
                  <div className="w-full p-3 bg-stone-900 border-t border-stone-800 flex justify-between items-center px-4 self-stretch font-sans">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
                      <span className="text-[10px] text-stone-300 font-extrabold uppercase tracking-widest font-sans">
                        Paso a paso en Video
                      </span>
                    </div>
                    <span className="text-[10px] font-black text-yellow-300 uppercase tracking-wider">
                      Adelanto Real ⭐
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-center font-sans space-y-3.5 w-full">
                <button 
                  onClick={() => setIsCheckoutOpen(true)}
                  className="w-auto inline-flex items-center gap-2.5 bg-yellow-300 hover:bg-yellow-400 text-stone-950 font-black text-sm sm:text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.03] active:scale-[0.98] uppercase tracking-wider border-2 border-yellow-500 cursor-pointer select-none font-sans"
                >
                  <Play className="w-4 h-4 text-stone-950 fill-stone-950" />
                  <span>VER VIDEO EN GRANDE</span>
                </button>
                <p className="text-xs text-brand-text font-black max-w-xs mx-auto leading-relaxed">
                  Así se ve el área de manualidades: hacés clic, mirás el video explicativo y a jugar con tus nietos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IDENTIFICACIÓN DEL PROBLEMA */}
      <section id="problema" className="py-16 px-4 bg-white border-t border-b border-brand-border text-brand-text">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl sm:text-4xl text-brand-text font-black mt-1.5">
              ¿Cuidar a tus nietos a veces se siente como una batalla perdida?
            </h2>
          </div>

          <p className="text-center text-brand-text text-base sm:text-lg max-w-2xl mx-auto mb-10 font-sans font-bold leading-relaxed">
            Llegan con toda su energía y vos los esperás con ilusión, pero la realidad de la tarde suele ser muy diferente al ideal.
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
            El tiempo vuela... <br className="hidden sm:inline" />
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

          <div className="mt-8 flex flex-col items-center justify-center">
            <a
              href="https://h8v1v6-g7.myshopify.com/cart/51152331538665:1?checkout"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-col items-center justify-center bg-emerald-200 hover:bg-emerald-300 text-stone-900 font-sans font-black text-sm sm:text-lg px-8 py-5 rounded-2xl shadow-xl border-2 border-emerald-400 hover:shadow-2xl transition-all transform hover:scale-[1.03] uppercase cursor-pointer no-underline animate-attention gap-2"
            >
              <div className="flex items-center gap-2">
                <span>⭐ SÍ, QUIERO CREAR RECUERDOS ETERNOS EN LA COCINA</span>
                <ArrowRight className="w-5 h-5 text-emerald-700 shrink-0 animate-bounce" />
              </div>
              <span className="bg-yellow-300 text-stone-950 font-black text-lg sm:text-xl px-5 py-1.5 rounded-full shadow-md tracking-wider border-2 border-yellow-400 inline-block scale-105 my-1 hover:scale-110 transition-transform">
                🔥 POR SOLO $5.999 🔥
              </span>
            </a>
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
                *Los chicos se concentran y comen con orgullo su propia sculpture frutal. ¡De abuela a abuela, es un camino de ida!
              </p>
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
            <a
              href="https://h8v1v6-g7.myshopify.com/cart/51152331538665:1?checkout"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-200 hover:bg-emerald-300 text-stone-900 font-black text-sm sm:text-base py-4 px-8 rounded-2xl shadow-md border border-emerald-300 hover:shadow-lg transition-all cursor-pointer inline-flex items-center gap-1.5 no-underline animate-attention"
            >
              <span>¡QUIERO EMPEZAR MI MEJOR TARDE CON ELLOS!</span>
            </a>
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
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-2">
              <span className="bg-yellow-100 text-brand-orange text-6xl sm:text-7xl font-black tracking-tight px-6 py-2 rounded-2xl border-2 border-brand-orange/30 shadow-inner inline-block">
                $5.999
              </span>
              <span className="text-brand-text text-xl font-black uppercase font-sans tracking-wide">
                pesos argentinos
              </span>
            </div>
            <p className="text-brand-sage text-base sm:text-lg font-black uppercase tracking-wide mt-4">
              Pago Único • Acceso ilimitado para siempre • Recibes en tu correo al instante
            </p>
          </div>

          {/* Buttons and warnings */}
          <div className="space-y-4 font-sans">
            <a
              href="https://h8v1v6-g7.myshopify.com/cart/51152331538665:1?checkout"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-emerald-200 hover:bg-emerald-300 text-stone-900 font-sans font-black text-base sm:text-xl py-5 px-8 rounded-2xl shadow-xl border-2 border-emerald-400 hover:shadow-2xl transition-all transform hover:scale-[1.03] uppercase cursor-pointer text-center no-underline animate-attention"
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                <span>🛒 QUIERO MI TARDE RESUELTA POR COMPLETO</span>
                <ArrowRight className="w-6 h-6 text-emerald-700 shrink-0 animate-bounce" />
              </div>
              <span className="bg-yellow-300 text-stone-950 font-black text-lg sm:text-xl px-6 py-1.5 rounded-full shadow-md tracking-wider border-2 border-yellow-400 inline-block scale-105 my-1 hover:scale-110 transition-transform">
                🔥 POR SOLO $5.999 🔥
              </span>
            </a>
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

      {/* Main Elegant Header moved to bottom (relative layout) */}
      <header className="bg-white border-t border-b border-brand-orange py-6 px-4 shadow-sm relative">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-11 h-11 rounded-full bg-brand-orange flex items-center justify-center text-white font-serif font-black shadow-inner text-xl">
              M
            </div>
            <div>
              <span className="font-serif font-black text-brand-text text-base sm:text-lg leading-none block">Meriendas con los Nietos</span>
              <span className="text-xs text-brand-text uppercase tracking-widest font-black block mt-1">La abuela práctica ☕</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 text-xs sm:text-sm font-black text-brand-text">
            <button onClick={() => scrollToSection("problema")} className="hover:text-brand-orange transition cursor-pointer underline decoration-brand-sage decoration-2">El Desafío</button>
            <button onClick={() => scrollToSection("que-incluye")} className="hover:text-brand-orange transition cursor-pointer underline decoration-brand-sage decoration-2">¿Qué incluye el Kit?</button>
          </div>

         <a
            href="https://h8v1v6-g7.myshopify.com/cart/51152331538665:1?checkout"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-200 hover:bg-emerald-300 text-stone-900 font-black text-xs sm:text-sm py-2.5 px-5 rounded-xl shadow-md border border-emerald-300 transition-all flex items-center gap-1.5 cursor-pointer uppercase font-sans no-underline"
          >
            <Sparkles className="w-4 h-4 text-emerald-600 fill-emerald-500" />
            <span>QUIERO MI KIT</span>
          </a>
        </div>
      </header>

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

      {/* FULL-SCREEN VIDEO LIGHTBOX MODAL */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop with elegant blur */}
          <div 
            className="absolute inset-0 bg-stone-950/85 backdrop-blur-md transition-opacity duration-300 cursor-pointer animate-fade-in"
            onClick={() => setIsVideoOpen(false)}
          ></div>
          
          {/* Main Modal Container */}
          <div className="relative bg-stone-950 border-2 border-brand-orange w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[95vh] flex flex-col transform transition-all duration-300 scale-100">
            {/* Header of Modal */}
            <div className="bg-stone-90 px-5 py-4 border-b border-stone-850 flex justify-between items-center bg-stone-900">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 animate-pulse"></span>
                <span className="font-serif font-black text-white text-xs sm:text-sm tracking-wide">
                  ✂️ Manualidades con tus Nietos (Video)
                </span>
              </div>
              <button 
                onClick={() => setIsVideoOpen(false)}
                className="text-stone-450 hover:text-white bg-stone-800 hover:bg-stone-750 p-1.5 rounded-full transition-all cursor-pointer"
                title="Cerrar"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Video Body */}
            <div className="flex-1 bg-white relative flex items-center justify-center overflow-auto" style={{ minHeight: "440px" }}>
              <iframe 
                src="https://assets.pinterest.com/ext/embed.html?id=1134836806101017348" 
                height="440" 
                width="100%" 
                frameBorder="0" 
                scrolling="no" 
                style={{ border: "none", width: "100%", height: "440px", overflow: "hidden" }}
                title="Pinterest Video Player Grande"
              ></iframe>
            </div>

            {/* Footer with actions */}
            <div className="bg-stone-900 p-4 border-t border-stone-850 flex flex-col sm:flex-row gap-3 justify-between items-center text-center sm:text-left">
              <span className="text-stone-300 text-xs font-black font-sans leading-tight max-w-xs">
                💡 ¡Paso a paso para inspirarte antes de empezar con los chicos!
              </span>
              <button 
                onClick={() => setIsVideoOpen(false)}
                className="bg-yellow-300 hover:bg-yellow-400 text-stone-950 font-black text-xs px-5 py-2.5 rounded-full shadow-md uppercase tracking-wider border-2 border-yellow-500 cursor-pointer transition-all self-stretch sm:self-auto"
              >
                CERRAR REPRODUCTOR ×
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
