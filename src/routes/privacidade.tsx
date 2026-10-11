import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de privacidade | Destino Diferente" },
      { name: "description", content: "Como o Destino Diferente trata as informações de quem entra em contato." },
      { property: "og:title", content: "Política de privacidade | Destino Diferente" },
      { property: "og:description", content: "Como o Destino Diferente trata as informações de quem entra em contato." },
    ],
  }),
  component: Privacidade,
});

function Privacidade() {
  return (
    <main className="container-page max-w-2xl py-20">
      <Link to="/" className="text-sm text-petrol underline">Voltar para o início</Link>
      <h1 className="mt-6 text-4xl">Política de privacidade</h1>
      <div className="mt-8 space-y-4 text-muted-foreground">
        <p>Este site não coleta dados por formulários e não utiliza cookies de rastreamento.</p>
        <p>Quando você fala conosco pelo WhatsApp, usamos as informações que você compartilha apenas para entender e planejar a sua viagem.</p>
        <p>Não vendemos nem repassamos seus dados a terceiros. Se quiser que apaguemos nossas conversas e informações, é só pedir pelo WhatsApp.</p>
      </div>
    </main>
  );
}
