import React, { useState } from "react";
import { X, Lock, CheckCircle, ShieldCheck, CreditCard, Mail, Phone, User, Star, ChevronRight, Award, FileText, Check } from "lucide-react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const [step, setStep] = useState<"form" | "success">("form");
  const [downloadNotify, setDownloadNotify] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    paymentMethod: "mercado_pago" as "mercado_pago" | "credit_card" | "pago_facil",
    cardName: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvv: ""
  });
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const triggerDownloadSimulate = (filename: string) => {
    setDownloadNotify(`¡Descarga simulada de "${filename}" iniciada con éxito!`);
    setTimeout(() => {
      setDownloadNotify("");
    }, 4000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Quick validation
    if (!formData.fullName.trim()) {
      setError("Por favor, ingresá tu nombre completo de abuela.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setError("Necesitamos un correo electrónico válido para enviarte el recetario.");
      return;
    }
    if (!formData.phone.trim()) {
      setError("Ingresá tu WhatsApp para recibir la confirmación instantánea.");
      return;
    }

    if (formData.paymentMethod === "credit_card") {
      if (!formData.cardNumber || formData.cardNumber.length < 15) {
        setError("Ingresá un número de tarjeta de crédito válido.");
        return;
      }
      if (!formData.cardCvv || formData.cardCvv.length < 3) {
        setError("Por favor, revisá el código de seguridad de 3 dígitos atrás de tu tarjeta.");
        return;
      }
    }

    // Success transition
    setStep("success");
  };

  return (
    <div id="checkout-modal-root" className="fixed inset-0 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto animate-fade-in font-sans">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl relative border-4 border-brand-orange flex flex-col max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-brand-text hover:text-brand-orange p-2 bg-brand-sand hover:bg-brand-sand rounded-full cursor-pointer z-10 transition-colors border border-brand-border shadow-xs"
          title="Cerrar ventana"
        >
          <X className="w-6 h-6" />
        </button>

        {step === "form" ? (
          <form onSubmit={handleSubmit} className="flex flex-col overflow-y-auto p-5 sm:p-6 text-brand-text">
            {/* Modal Header */}
            <div className="text-center pb-4 border-b-2 border-brand-border mb-4">
              <span className="bg-orange-100 text-brand-orange text-xs uppercase tracking-wider px-3 py-1.5 rounded-full font-black inline-flex items-center gap-1.5 border border-brand-orange/40">
                <ShieldCheck className="w-4 h-4 text-brand-orange animate-pulse" /> Conexión 100% Segura
              </span>
              <h3 className="font-serif font-black text-2xl sm:text-3xl text-brand-text mt-3">
                Completá tu Compra
              </h3>
              <p className="text-brand-text text-sm sm:text-base font-bold mt-1">
                Estás a un paso de activar tus tardes inolvidables en familia.
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-4 bg-rose-50 border-l-4 border-rose-600 text-rose-800 p-4 rounded text-sm font-black">
                ⚠️ {error}
              </div>
            )}

            {/* Input fields */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-black text-brand-text mb-1.5 flex items-center gap-1.5">
                  <User className="w-4 h-4 text-brand-orange" /> Tu Nombre y Apellido completo:
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-brand-bg border-2 border-brand-border rounded-xl px-4 py-3 text-sm text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-orange font-bold text-base"
                  placeholder="Ej: Susana Teresa Fernández"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-black text-brand-text mb-1.5 flex items-center gap-1.5">
                    <Mail className="w-4 h-4 text-brand-orange" /> Tu Correo Electrónico:
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-brand-bg border-2 border-brand-border rounded-xl px-4 py-3 text-sm text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-orange font-bold text-base"
                    placeholder="ejemplo@correo.com"
                    required
                  />
                  <span className="text-[11px] text-brand-text/90 font-black mt-1 block">Aquí te enviamos el kit digital para descargar</span>
                </div>
                <div>
                  <label className="block text-sm font-black text-brand-text mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-4 h-4 text-brand-orange" /> Tu Celular o WhatsApp:
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-brand-bg border-2 border-brand-border rounded-xl px-4 py-3 text-sm text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-orange font-bold text-base"
                    placeholder="Ej. +54 9 11 1234 5678"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Inclusions summary brief */}
            <div className="my-5 bg-brand-sand border-2 border-brand-orange p-4 rounded-2xl flex items-center justify-between shadow-xs">
              <div>
                <p className="text-sm font-black text-brand-text">Kit "Meriendas con los Nietos"</p>
                <p className="text-xs font-bold text-brand-text/80">Recetas + Dibujos + Frutas divertidas (Acceso de por vida)</p>
              </div>
              <p className="text-base sm:text-lg font-black text-brand-orange bg-white px-2 py-1 rounded-lg border border-brand-border">$5.990 ARS</p>
            </div>

            {/* Payment Method selector */}
            <div className="mb-4">
              <label className="block text-sm sm:text-base font-black text-brand-text mb-2.5">
                Seleccioná tu forma de pago favorita:
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {/* Mercado Pago */}
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, paymentMethod: "mercado_pago" })}
                  className={`p-3 rounded-xl border-2 text-center flex flex-col items-center justify-center transition-all cursor-pointer ${
                    formData.paymentMethod === "mercado_pago"
                      ? "bg-sky-50 border-sky-500 ring-2 ring-sky-300"
                      : "bg-white border-brand-border hover:bg-brand-bg/60"
                  }`}
                >
                  <span className="text-xs font-black text-sky-800 block uppercase">Mercado Pago</span>
                  <span className="text-[10px] font-bold text-brand-text/90 block mt-0.5">Fácil y Rápido</span>
                </button>

                {/* Credit Card */}
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, paymentMethod: "credit_card" })}
                  className={`p-3 rounded-xl border-2 text-center flex flex-col items-center justify-center transition-all cursor-pointer ${
                    formData.paymentMethod === "credit_card"
                      ? "bg-violet-50 border-violet-500 ring-2 ring-violet-300"
                      : "bg-white border-brand-border hover:bg-brand-bg/60"
                  }`}
                >
                  <CreditCard className="w-5 h-5 text-violet-800 font-extrabold" />
                  <span className="text-xs font-black text-violet-800 mt-1 uppercase">Tarjeta</span>
                </button>

                {/* Pago Facil */}
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, paymentMethod: "pago_facil" })}
                  className={`p-3 rounded-xl border-2 text-center flex flex-col items-center justify-center transition-all cursor-pointer ${
                    formData.paymentMethod === "pago_facil"
                      ? "bg-rose-50 border-rose-300 ring-2 ring-rose-200/50"
                      : "bg-white border-brand-border hover:bg-brand-bg/60"
                  }`}
                >
                  <span className="text-xs font-black text-brand-text block uppercase">Pago Fácil</span>
                  <span className="text-[10px] font-bold text-brand-text/90 block mt-0.5">En Efectivo</span>
                </button>
              </div>
            </div>

            {/* Dynamic fields based on payment option */}
            {formData.paymentMethod === "credit_card" && (
              <div className="bg-brand-bg p-4 rounded-2xl border-2 border-brand-border mb-4 space-y-3 animate-fade-in text-brand-text">
                <div>
                  <label className="block text-xs font-black text-brand-text mb-1">Número de Tarjeta de Crédito/Débito:</label>
                  <input
                    type="text"
                    name="cardNumber"
                    maxLength={19}
                    value={formData.cardNumber}
                    onChange={handleChange}
                    className="w-full bg-white border-2 border-brand-border font-bold rounded-lg px-3 py-2 text-xs focus:outline-none"
                    placeholder="xxxx xxxx xxxx xxxx"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-35">
                  <div>
                    <label className="block text-xs font-black text-brand-text mb-1">Vencimiento (MM/AA):</label>
                    <input
                      type="text"
                      name="cardExpiry"
                      maxLength={5}
                      value={formData.cardExpiry}
                      onChange={handleChange}
                      className="w-full bg-white border-2 border-brand-border font-bold rounded-lg px-3 py-2 text-xs focus:outline-none"
                      placeholder="MM/AA"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-brand-text mb-1">Código (CVC atrás):</label>
                    <input
                      type="password"
                      name="cardCvv"
                      maxLength={4}
                      value={formData.cardCvv}
                      onChange={handleChange}
                      className="w-full bg-white border-2 border-brand-border font-bold rounded-lg px-3 py-2 text-xs focus:outline-none"
                      placeholder="123"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {formData.paymentMethod === "mercado_pago" && (
              <div className="bg-sky-50 p-3.5 rounded-2xl border-2 border-sky-200 mb-4 text-center text-sm text-sky-950 font-bold animate-slide-up leading-relaxed">
                <p>👉 Al confirmar, se simulará la pasarela aprobando el pago en pesos.</p>
                <p className="font-extrabold text-sky-850 mt-1">¡Apto tarjetas de débito de cualquier banco argentino!</p>
              </div>
            )}

            {formData.paymentMethod === "pago_facil" && (
              <div className="bg-brand-sand/50 p-3.5 rounded-2xl border-2 border-brand-border mb-4 text-center text-sm text-brand-text font-bold animate-slide-up leading-relaxed">
                <p>👉 Se generará un código de barras automático listo para simular el pago en efectivo presencial en cualquier sucursal.</p>
              </div>
            )}

            {/* Total price anchor & Submit */}
            <button
              type="submit"
              className="w-full bg-rose-200 hover:bg-rose-300 text-stone-900 font-black py-4 px-6 rounded-2xl shadow-md border border-rose-300 hover:shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer text-lg uppercase mt-2"
            >
              <Lock className="w-6 h-6 text-rose-600" />
              Pagar $5.990 ARS y Recibir Ahora
            </button>

            {/* Secure seals */}
            <div className="mt-4 flex items-center justify-center gap-4 text-xs text-brand-text font-black border-t-2 border-brand-border pt-4">
              <span className="flex items-center gap-1">🛡️ Garantía de 30 días</span>
              <span className="text-brand-border">•</span>
              <span className="flex items-center gap-1">🔒 Certificación SSL</span>
              <span className="text-brand-border">•</span>
              <span className="flex items-center gap-1">🇦🇷 Hecho en Argentina</span>
            </div>
          </form>
        ) : (
          /* Success Screen */
          <div className="p-6 overflow-y-auto flex flex-col text-brand-text animate-fade-in text-center relative">
            
            {/* Custom Download notification banner */}
            {downloadNotify && (
              <div className="absolute top-2 left-4 right-4 bg-brand-sage text-white text-sm font-black py-2.5 px-4 rounded-xl shadow-md border-2 border-brand-border animate-slide-down flex items-center justify-center gap-2 z-25">
                <Check className="w-5 h-5 text-brand-beige" />
                <span>{downloadNotify}</span>
              </div>
            )}

            <div className="flex justify-center mb-3 mt-4">
              <div className="bg-brand-sage/20 p-4 rounded-full text-brand-sage border-2 border-brand-sage shadow-sm">
                <CheckCircle className="w-14 h-14" />
              </div>
            </div>

            <span className="bg-orange-100 text-brand-orange text-xs sm:text-sm font-black px-4 py-1.5 rounded-full tracking-wider uppercase inline-block mx-auto mb-3 text-center border-2 border-brand-orange">
              🎉 ¡Yupi! Pago Confirmado con Éxito
            </span>

            <h3 className="font-serif font-black text-2xl sm:text-3xl text-brand-text">
              ¡Tu tarde de recuerdos ya está resuelta, {formData.fullName.split(" ")[0] || "Abuela"}!
            </h3>
            
            <p className="text-brand-text text-sm sm:text-base mt-3 max-w-sm mx-auto leading-relaxed font-sans font-bold">
              Te enviamos una copia a tu correo: <strong className="text-brand-orange">{formData.email}</strong>. Pero no hace falta que esperes, ya podés ver y simular la descarga de todo el material acá abajo:
            </p>

            {/* Digital kit files preview simulated */}
            <div className="bg-brand-sand/50 border-2 border-dashed border-brand-orange rounded-2xl p-4 my-5 text-left space-y-3 font-sans">
              <p className="text-xs sm:text-sm font-black text-brand-text uppercase tracking-wider text-center border-b-2 border-brand-border pb-2 mb-2">⚡ TU MATERIAL LISTO PARA DESCARGAR</p>
              
              <div className="flex items-center justify-between p-3.5 bg-white rounded-xl border-2 border-brand-border shadow-xs">
                <div className="flex items-center gap-2.5">
                  <FileText className="w-5 h-5 text-brand-sage" />
                  <div>
                    <p className="text-sm font-black text-brand-text">Recetario Dulce passo a paso (PDF)</p>
                    <p className="text-xs text-brand-text font-bold">Letra extra grande • Listo para guardar</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => triggerDownloadSimulate("Meriendas_Nietos_Recetas.pdf")}
                  className="bg-rose-200 hover:bg-rose-300 text-stone-900 text-xs sm:text-sm font-black px-4 py-2 rounded-lg border border-rose-300 transition cursor-pointer shadow-xs"
                >
                  Descargar
                </button>
              </div>

              <div className="flex items-center justify-between p-3.5 bg-white rounded-xl border-2 border-brand-border shadow-xs">
                <div className="flex items-center gap-2.5">
                  <span className="text-xl">🎨</span>
                  <div>
                    <p className="text-sm font-black text-brand-text">Dibujos Anti-Pantalla de repuesto (PDF)</p>
                    <p className="text-xs text-brand-text font-bold font-sans">Dinosaurios, animalitos y laberintos</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => triggerDownloadSimulate("Fichas_Anti_Pantallas.pdf")}
                  className="bg-rose-200 hover:bg-rose-300 text-stone-900 text-xs sm:text-sm font-black px-4 py-2 rounded-lg border border-rose-300 transition cursor-pointer shadow-xs"
                >
                  Descargar
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-white rounded-xl leading-relaxed text-sm text-brand-text font-bold border-2 border-brand-orange">
                <p>❤️ <strong>¡De parte del equipo de Meriendas con los Nietos!</strong></p>
                <p className="mt-1">Gracias por invertir en lo que de verdad vale la pena: recuerdos hogareños que van a durar para siempre en sus corazoncitos.</p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-full bg-rose-200 hover:bg-rose-300 text-stone-900 text-sm sm:text-base font-black py-4 px-6 rounded-2xl border border-rose-300 hover:scale-[1.01] transition-all cursor-pointer shadow-sm uppercase animate-pulse"
              >
                Volver a la Página Principal
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
