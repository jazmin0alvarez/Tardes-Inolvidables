export interface Recipe {
  id: string;
  name: string;
  duration: string;
  difficulty: "Muy Fácil" | "Fácil" | "Práctico";
  description: string;
  tags: string[];
  isGlutenFree: boolean;
  imageAlt: string;
}

export interface ActivityDetail {
  id: string;
  title: string;
  description: string;
  ageRange: string;
  timeRequired: string;
  iconName: string;
}

export interface GrandparentReview {
  id: string;
  name: string;
  age: number;
  location: string;
  avatarColor: string;
  comment: string;
  stars: number;
  date: string;
  relationship: string; // E.g., "Abuela de Emma (4) y Bruno (7)"
  verified: boolean;
}

export interface CalculatorState {
  nietosCount: "1" | "2" | "3+";
  nietosaGes: "2-4" | "5-8" | "9-12" | "variadas";
  pacienciaLevel: "mucha" | "media" | "cansada";
  favoriteStyle: "cocina" | "pintar" | "sorpresas" | "aventura";
}

export interface CheckoutData {
  fullName: string;
  email: string;
  phone: string;
  paymentMethod: "mercado_pago" | "credit_card" | "pago_facil";
  cardNumber?: string;
  cardExpiry?: string;
  cardCvv?: string;
  cardName?: string;
  installments?: string;
}
