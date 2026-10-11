export const WHATSAPP_NUMBER = "5511982294713";
export const INSTAGRAM_URL = "https://www.instagram.com/destino.diferente/";
export const YOUTUBE_URL = "https://www.youtube.com/@destino.diferente";

export const MSG = {
  geral: "Olá! Quero saber mais sobre o roteiro personalizado do Destino Diferente.",
  planejar: "Olá! Quero planejar minha viagem com o Destino Diferente.",
  orlando:
    "Olá! Vou viajar para Orlando e quero saber mais sobre o roteiro personalizado e os ingressos a preço de custo.",
  solicitar: "Olá! Quero solicitar um roteiro personalizado para a minha viagem.",
  final: "Olá! Quero criar um roteiro personalizado para a minha próxima viagem.",
};

export const wa = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
