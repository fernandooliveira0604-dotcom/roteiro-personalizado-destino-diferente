import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  Plane, BedDouble, Car, Compass, Utensils, Ticket, Clock, Wallet, FileText, Menu, X, Check,
  CalendarDays, Map, Sparkles, Route as RouteIcon, Lightbulb, Award, Target, Timer, Scale,
  Heart, Search, ListChecks, MapPin, Instagram, Youtube, MessageCircle, Minus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { MSG, wa, INSTAGRAM_URL, YOUTUBE_URL } from "@/lib/whatsapp";

import hero from "@/assets/fernando-e-larissa-hero.jpg.asset.json";
import fernando from "@/assets/fernando-sobre.jpg.asset.json";
import larissa from "@/assets/larissa-sobre.jpg.asset.json";
import nyc from "@/assets/experiencia-nova-york.jpg.asset.json";
import brasil from "@/assets/viagens-brasil.jpg.asset.json";
import embarque from "@/assets/embarque-e-viagem.jpg.asset.json";
import snow from "@/assets/experiencia-de-viagem.jpg.asset.json";
import orlandoParques from "@/assets/orlando-parques.jpg.asset.json";
import orlandoExp from "@/assets/orlando-experiencia.jpg.asset.json";
import planejamento from "@/assets/planejamento-de-viagem.jpg";
import mapa from "@/assets/mapa-e-roteiro.jpg";
import exemplo from "@/assets/exemplo-roteiro-personalizado.jpg";

const TITLE = "Destino Diferente | Roteiros personalizados com Fernando e Larissa";
const DESC = "Roteiros de viagem personalizados para qualquer destino, pensados para o seu estilo e orçamento. Fale com Fernando e Larissa pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: Index,
});

const NAV = [
  ["Como funciona", "#como-funciona"],
  ["O que você recebe", "#entregaveis"],
  ["Orlando", "#orlando"],
  ["Sobre nós", "#sobre"],
  ["Investimento", "#investimento"],
  ["Perguntas frequentes", "#faq"],
] as const;

function WaLink({ msg, children, variant = "default", size = "lg", className }: {
  msg: string; children: ReactNode; variant?: "default" | "gold" | "outline" | "light"; size?: "lg" | "default" | "sm"; className?: string;
}) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a href={wa(msg)} target="_blank" rel="noopener noreferrer">{children}</a>
    </Button>
  );
}

function SectionHead({ eyebrow, title, children, center, light }: { eyebrow?: string; title: string; children?: ReactNode; center?: boolean; light?: boolean }) {
  return (
    <div className={cn("max-w-2xl", center && "mx-auto text-center")}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className={cn("text-3xl sm:text-4xl md:text-[2.75rem]", light ? "text-warm" : "text-navy")}>{title}</h2>
      {children && <div className={cn("mt-5 space-y-4 text-lg", light ? "text-warm/80" : "text-muted-foreground")}>{children}</div>}
    </div>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all", scrolled || open ? "bg-warm/95 backdrop-blur border-b shadow-soft" : "bg-transparent")}>
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-20">
        <a href="#inicio" className="font-serif text-xl text-navy md:text-2xl">Destino <span className="italic text-gold">Diferente</span></a>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-6 text-sm font-medium text-navy/80">
            {NAV.map(([l, h]) => <li key={h}><a href={h} className="hover:text-gold">{l}</a></li>)}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <WaLink msg={MSG.geral} size="sm" className="hidden sm:inline-flex">Falar conosco</WaLink>
          <button type="button" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen(!open)} className="rounded-full p-2 text-navy lg:hidden">
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>
      {open && (
        <nav aria-label="Menu móvel" className="border-t lg:hidden">
          <ul className="container-page flex flex-col py-3">
            {NAV.map(([l, h]) => <li key={h}><a href={h} onClick={() => setOpen(false)} className="block py-3 text-navy">{l}</a></li>)}
            <li className="pt-2 pb-3"><WaLink msg={MSG.geral} size="default" className="w-full">Falar conosco</WaLink></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-sand pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 bg-map opacity-60" aria-hidden />
      <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <p className="eyebrow mb-5">Fernando e Larissa | Destino Diferente</p>
          <h1 className="text-4xl text-navy sm:text-5xl lg:text-[3.6rem]">Planeje sua viagem do jeito certo, sem gastar tempo e dinheiro à toa</h1>
          <p className="mt-6 max-w-xl text-lg text-navy/80">Um roteiro personalizado, inteligente e feito de acordo com o seu estilo, seu orçamento e tudo o que você realmente quer viver durante a viagem.</p>
          <p className="mt-4 max-w-xl text-muted-foreground">Fernando e Larissa cuidam do planejamento para você aproveitar melhor cada dia, tomar decisões mais seguras e evitar escolhas que podem encarecer a sua viagem.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WaLink msg={MSG.geral}>Quero criar meu roteiro personalizado</WaLink>
            <WaLink msg={MSG.geral} variant="outline">Falar com Fernando e Larissa</WaLink>
          </div>
          <p className="mt-5 max-w-md text-sm text-muted-foreground">Conte para nós o que você está planejando. Vamos entender a sua viagem e mostrar como podemos ajudar.</p>
        </div>
        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="absolute -inset-3 rounded-[2rem] border border-gold/40 sm:-inset-4" aria-hidden />
          <img src={hero.url} alt="Fernando e Larissa em uma viagem, representando o Destino Diferente." width={1600} height={1200} className="relative aspect-[4/5] w-full rounded-[1.75rem] object-cover object-[60%_center] shadow-lift sm:aspect-[4/3] lg:aspect-[4/5]" />
          <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl bg-warm px-5 py-4 shadow-soft sm:left-8">
            <Compass className="size-6 text-gold" aria-hidden />
            <div className="text-sm leading-tight"><p className="font-semibold text-navy">Mais de 14 anos</p><p className="text-muted-foreground">planejando as nossas viagens</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}

const DECISOES = [[Plane, "Passagens"], [BedDouble, "Hospedagem"], [Car, "Deslocamentos"], [Compass, "Passeios"], [Utensils, "Restaurantes"], [Ticket, "Ingressos"], [Clock, "Horários"], [Wallet, "Orçamento"], [FileText, "Documentos"]] as const;
const PROBLEMAS = [
  "Você pode acabar pagando mais do que deveria.",
  "O roteiro pode ficar mal distribuído.",
  "Você pode perder tempo com deslocamentos desnecessários.",
  "Algumas atrações importantes podem ficar de fora.",
  "Pode ser difícil conciliar interesses e orçamentos diferentes.",
  "Você pode chegar ao destino ainda inseguro sobre as escolhas feitas.",
];

function Problema() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHead eyebrow="O desafio" title="Planejar uma viagem parece simples até você perceber a quantidade de decisões envolvidas">
          <p>Passagens, hospedagem, deslocamentos, passeios, restaurantes, ingressos, horários, documentos e orçamento. São muitas informações para comparar e organizar.</p>
        </SectionHead>
        <ul className="mt-12 grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-9">
          {DECISOES.map(([Icon, l]) => (
            <li key={l} className="flex flex-col items-center gap-2 rounded-2xl border bg-card px-2 py-5 text-center text-sm text-navy shadow-soft">
              <Icon className="size-5 text-gold" aria-hidden />{l}
            </li>
          ))}
        </ul>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PROBLEMAS.map((p) => (
            <div key={p} className="flex gap-3 rounded-2xl bg-sand p-5">
              <span className="mt-2 h-px w-5 shrink-0 bg-gold" aria-hidden />
              <p className="text-navy/85">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Transicao() {
  return (
    <section className="bg-gradient-to-b from-warm to-sand py-20 md:py-28">
      <div className="container-page grid items-center gap-12 md:grid-cols-2">
        <div className="grid grid-cols-2 gap-4">
          <img src={embarque.url} alt="Momento de embarque e início de uma viagem." loading="lazy" className="aspect-[3/4] w-full rounded-2xl object-cover shadow-soft" />
          <img src={brasil.url} alt="Paisagem de uma viagem pelo Brasil." loading="lazy" className="mt-10 aspect-[3/4] w-full rounded-2xl object-cover shadow-soft" />
        </div>
        <div>
          <SectionHead eyebrow="Do seu jeito" title="Sua viagem não precisa seguir um roteiro pronto da internet">
            <p>Cada pessoa viaja de um jeito.</p>
            <p>Algumas pessoas querem conhecer o máximo possível. Outras preferem viajar com calma. Há quem priorize gastronomia, compras, parques, cultura, natureza, economia ou conforto.</p>
            <p>Por isso, um bom roteiro precisa considerar o orçamento, a quantidade de dias, o perfil dos viajantes, os interesses do grupo, o ritmo da viagem e a logística do destino.</p>
            <p className="font-serif text-2xl text-navy">É isso que fazemos no Destino Diferente.</p>
          </SectionHead>
        </div>
      </div>
    </section>
  );
}

const SOLUCAO = ["O que fazer em cada dia.", "Como distribuir os passeios.", "Como aproveitar melhor o tempo.", "Onde pode fazer sentido economizar.", "O que precisa ser reservado com antecedência.", "Como evitar deslocamentos desnecessários.", "Como equilibrar experiências e orçamento."];

function Solucao() {
  return (
    <section className="bg-sand pb-20 md:pb-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHead eyebrow="A solução" title="Um roteiro personalizado para você viajar com mais clareza e tranquilidade">
            <p>Nós analisamos a sua viagem e organizamos as informações mais importantes em um planejamento prático, personalizado e pensado para a sua realidade.</p>
            <p>Mais do que reunir uma lista de atrações, o nosso objetivo é ajudar você a tomar decisões melhores.</p>
          </SectionHead>
          <ul className="mt-8 space-y-3">
            {SOLUCAO.map((s) => (
              <li key={s} className="flex items-start gap-3 text-navy">
                <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-navy text-warm"><Check className="size-3" aria-hidden /></span>{s}
              </li>
            ))}
          </ul>
          <p className="mt-8 border-l-2 border-gold pl-4 font-medium text-navy">Você não recebe um roteiro genérico. Recebe um planejamento feito para a sua viagem.</p>
          <WaLink msg={MSG.planejar} className="mt-8">Quero planejar minha viagem</WaLink>
        </div>
        <img src={mapa} alt="Mapa de viagem com trajeto marcado e roteiro organizado por dias." loading="lazy" width={1200} height={1200} className="w-full rounded-[1.75rem] object-cover shadow-lift" />
      </div>
    </section>
  );
}

const ENTREGAVEIS = [
  [Target, "Planejamento personalizado", "Cada recomendação considera o destino, as datas, o orçamento, os interesses e o perfil dos viajantes."],
  [CalendarDays, "Roteiro organizado por dia", "Uma programação clara para ajudar você a distribuir os passeios e aproveitar melhor o tempo disponível."],
  [Sparkles, "Sugestões de passeios e experiências", "Recomendações alinhadas ao estilo da viagem, sem incluir atrações apenas porque são populares."],
  [Wallet, "Otimização do orçamento", "Análise das escolhas da viagem para buscar o melhor custo benefício, sem comprometer a experiência."],
  [RouteIcon, "Estratégia de deslocamento", "Organização dos passeios para reduzir deslocamentos desnecessários e aproveitar melhor cada região."],
  [Lightbulb, "Orientações práticas", "Informações importantes para facilitar as decisões antes e durante a viagem."],
  [Award, "Inteligência em milhas", "Avaliação de possibilidades envolvendo milhas e pontos, quando fizer sentido para o perfil e o destino do cliente."],
  [Heart, "Planejamento de acordo com a sua realidade", "A melhor viagem não é necessariamente a mais cara ou a que tem mais atrações. É aquela que faz sentido para você."],
] as const;

function Entregaveis() {
  return (
    <section id="entregaveis" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHead eyebrow="O que você recebe" title="Tudo organizado para você viajar com mais tranquilidade" center />
        <img src={exemplo} alt="Exemplo fictício de roteiro personalizado organizado por dia, com mapa, passeios e estimativa de custos." loading="lazy" width={1600} height={1200} className="mx-auto mt-12 w-full max-w-4xl rounded-[1.75rem] shadow-lift" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ENTREGAVEIS.map(([Icon, t, d]) => (
            <article key={t} className="rounded-2xl border bg-card p-6 shadow-soft transition-shadow hover:shadow-lift">
              <span className="grid size-11 place-items-center rounded-full border border-gold/50 text-gold"><Icon className="size-5" aria-hidden /></span>
              <h3 className="mt-5 text-xl text-navy">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const BENEFICIOS = [
  ["Você economiza tempo", "Em vez de passar horas comparando informações espalhadas pela internet, você recebe um planejamento organizado."],
  ["Você reduz decisões equivocadas", "A análise prévia ajuda a evitar escolhas que podem comprometer o orçamento ou a experiência."],
  ["Você aproveita melhor os dias", "Um roteiro bem distribuído ajuda a reduzir improvisos e melhora o aproveitamento do tempo disponível."],
  ["Você entende onde vale investir", "Nem sempre a opção mais barata é a melhor. Também não é necessário pagar mais por algo que não fará diferença para a sua viagem."],
  ["Você viaja com mais tranquilidade", "Com as principais decisões organizadas, você embarca com mais clareza e segurança."],
];

function Beneficios() {
  return (
    <section className="bg-navy py-20 text-warm md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <SectionHead eyebrow="Benefícios" title="O que muda quando outra pessoa cuida do planejamento com inteligência" light />
          <img src={planejamento} alt="Mesa com notebook, mapa, passaporte e anotações de planejamento de viagem." loading="lazy" width={1600} height={1072} className="mt-10 w-full rounded-[1.5rem] object-cover" />
        </div>
        <ol className="space-y-4">
          {BENEFICIOS.map(([t, d], i) => (
            <li key={t} className="flex gap-5 rounded-2xl border border-warm/10 bg-warm/5 p-6">
              <span className="font-serif text-3xl text-gold">0{i + 1}</span>
              <div><h3 className="text-xl text-warm">{t}</h3><p className="mt-2 text-warm/75">{d}</p></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Milhas() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2rem] border bg-sand p-8 md:p-14">
          <div className="absolute inset-0 bg-map opacity-70" aria-hidden />
          <Plane className="absolute -right-6 -top-6 size-48 rotate-12 text-gold/15" aria-hidden />
          <div className="relative grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-center">
            <SectionHead eyebrow="Milhas e pontos" title="Seu planejamento pode ir além de encontrar um roteiro bonito">
              <p>A experiência da viagem começa antes do embarque.</p>
              <p>Fernando e Larissa possuem conhecimento em milhas aéreas e podem avaliar oportunidades para ajudar na organização do custo da viagem.</p>
              <p>Esse conhecimento também pode ser útil para quem nunca acumulou pontos.</p>
              <p>O objetivo não é complicar o planejamento com regras difíceis. É entender se existe alguma oportunidade que faça sentido para o seu perfil, para o seu destino e para o momento da viagem.</p>
            </SectionHead>
            <div className="rounded-2xl border border-dashed border-gold bg-warm p-8 shadow-soft">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-muted-foreground"><span>Embarque</span><Plane className="size-4 text-gold" aria-hidden /><span>Destino</span></div>
              <div className="my-6 h-px bg-border" />
              <p className="font-serif text-2xl leading-snug text-navy">Milhas são uma ferramenta. O planejamento ajuda a entender quando e como utilizá-las.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Orlando() {
  return (
    <section id="orlando" className="bg-petrol py-20 text-warm md:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <div className="grid grid-cols-2 gap-4">
          <img src={orlandoParques.url} alt="Parque temático em Orlando." loading="lazy" className="aspect-[3/4] w-full rounded-2xl object-cover shadow-lift" />
          <img src={orlandoExp.url} alt="Experiência de viagem em Orlando." loading="lazy" className="mt-12 aspect-[3/4] w-full rounded-2xl object-cover shadow-lift" />
        </div>
        <div>
          <SectionHead eyebrow="Especial Orlando" title="Vai para Orlando? Temos um diferencial para você" light>
            <p>Os ingressos dos parques podem representar uma parte significativa do orçamento de uma viagem para Orlando, especialmente quando há várias pessoas viajando ou quando o planejamento inclui diferentes parques.</p>
            <p>Por isso, quem vai viajar para Orlando também pode contar com o repasse de ingressos a preço de custo.</p>
            <p>Dependendo da quantidade de parques e viajantes, essa condição pode representar uma economia importante no orçamento total da viagem.</p>
          </SectionHead>
          <p className="mt-6 rounded-2xl bg-sand p-5 text-navy">Você organiza o roteiro com a gente e ainda pode contar com uma condição especial para os ingressos dos parques.</p>
          <WaLink msg={MSG.orlando} variant="gold" className="mt-8">Quero planejar minha viagem para Orlando</WaLink>
          <p className="mt-5 text-xs text-warm/65">A disponibilidade, as condições e os valores dos ingressos dependem das opções vigentes no momento da contratação.</p>
        </div>
      </div>
    </section>
  );
}

function Sobre() {
  return (
    <section id="sobre" className="py-20 md:py-28">
      <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div className="grid grid-cols-2 gap-4 lg:sticky lg:top-28">
          <figure><img src={fernando.url} alt="Fernando, consultor de viagens do Destino Diferente." loading="lazy" className="aspect-[3/4] w-full rounded-2xl object-cover shadow-soft" /><figcaption className="mt-3 font-serif text-lg">Fernando</figcaption></figure>
          <figure className="mt-12"><img src={larissa.url} alt="Larissa, consultora de viagens do Destino Diferente." loading="lazy" className="aspect-[3/4] w-full rounded-2xl object-cover shadow-soft" /><figcaption className="mt-3 font-serif text-lg">Larissa</figcaption></figure>
        </div>
        <div>
          <SectionHead eyebrow="Sobre nós" title="Uma viagem bem planejada começa muito antes do embarque">
            <p className="font-medium text-navy">Somos Fernando e Larissa, do Destino Diferente.</p>
            <p>Há mais de 14 anos planejamos as nossas próprias viagens, pesquisando possibilidades, comparando custos, organizando deslocamentos e buscando fazer cada escolha valer a pena.</p>
            <p>Ao longo desse tempo, conhecemos diversos estados brasileiros e também tivemos experiências nos Estados Unidos, incluindo Nova York.</p>
            <p>Além das nossas próprias viagens, já ajudamos amigos e familiares a planejarem viagens para destinos na Europa, Ásia e América do Norte.</p>
            <p>Foi dessa experiência que nasceu o Destino Diferente.</p>
            <p>Queremos transformar o conhecimento acumulado ao longo dos anos em roteiros personalizados para pessoas que desejam viajar melhor, com mais organização e menos insegurança.</p>
          </SectionHead>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <img src={nyc.url} alt="Experiência de viagem em Nova York." loading="lazy" className="aspect-square w-full rounded-2xl object-cover" />
            <img src={snow.url} alt="Experiência de viagem em um destino turístico." loading="lazy" className="aspect-square w-full rounded-2xl object-cover" />
          </div>
          <blockquote className="mt-8 border-l-2 border-gold pl-5 font-serif text-2xl text-navy">
            Não acreditamos em viagens iguais para todo mundo. Acreditamos que o melhor roteiro é aquele que respeita o orçamento, o tempo, o ritmo e os interesses de cada viajante.
          </blockquote>
        </div>
      </div>
    </section>
  );
}

const ETAPAS = [
  ["Você conta como imagina a sua viagem.", "Nós entendemos o destino, as datas, a duração, o perfil dos viajantes, o orçamento, os interesses e as prioridades."],
  ["Nós estudamos as melhores possibilidades.", "Analisamos as informações da viagem e organizamos as opções mais coerentes com o seu perfil."],
  ["Montamos o seu roteiro personalizado.", "Construímos um planejamento com uma sequência inteligente para aproveitar melhor os dias e reduzir escolhas desnecessárias."],
  ["Você recebe tudo organizado.", "O roteiro é entregue conforme as condições do serviço, com as informações necessárias para facilitar a sua preparação."],
  ["Você viaja com mais segurança.", "Em vez de depender de pesquisas espalhadas e decisões de última hora, você conta com um planejamento estruturado."],
];

function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-sand py-20 md:py-28">
      <div className="container-page">
        <SectionHead eyebrow="Passo a passo" title="Como funciona" center />
        <ol className="relative mt-14 grid gap-8 lg:grid-cols-5 lg:gap-6">
          <span className="absolute left-5 top-0 h-full w-px bg-gold/50 lg:left-0 lg:top-5 lg:h-px lg:w-full" aria-hidden />
          {ETAPAS.map(([t, d], i) => (
            <li key={t} className="relative pl-16 lg:pl-0 lg:pt-16">
              <span className="absolute left-0 top-0 grid size-10 place-items-center rounded-full border border-gold bg-warm font-serif text-lg text-navy">{i + 1}</span>
              <p className="eyebrow">Etapa {i + 1}</p>
              <h3 className="mt-2 text-xl text-navy">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const PARA = ["Quer viajar, mas não sabe por onde começar.", "Tem pouco tempo para planejar.", "Está inseguro sobre as escolhas da viagem.", "Quer aproveitar melhor os dias.", "Deseja otimizar o orçamento.", "Não quer seguir um roteiro genérico.", "Vai viajar em casal, com a família ou com um grupo de amigos.", "Quer ajuda para organizar uma viagem internacional.", "Vai para Orlando e quer avaliar a condição dos ingressos.", "Quer entender se milhas podem ajudar no seu caso."];
const NAO = ["Você prefere decidir tudo espontaneamente.", "Não deseja seguir nenhum tipo de planejamento.", "Está procurando apenas uma lista genérica de atrações.", "Espera que o roteiro substitua reservas, documentos ou decisões pessoais."];

function ParaQuem() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-[1.75rem] border bg-card p-8 shadow-soft md:p-10">
          <h2 className="text-3xl text-navy">Este serviço é para você que</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {PARA.map((p) => <li key={p} className="flex gap-3 text-navy/90"><Check className="mt-1 size-4 shrink-0 text-gold" aria-hidden />{p}</li>)}
          </ul>
        </div>
        <div className="rounded-[1.75rem] bg-sand p-8 md:p-10">
          <h2 className="text-3xl text-navy">Talvez este serviço não seja para você se</h2>
          <ul className="mt-6 space-y-3">
            {NAO.map((p) => <li key={p} className="flex gap-3 text-muted-foreground"><Minus className="mt-1 size-4 shrink-0 text-petrol" aria-hidden />{p}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Investimento() {
  const cards = [["Viagens de até 15 dias", "100"], ["Viagens com mais de 15 dias", "80"]];
  return (
    <section id="investimento" className="bg-navy py-20 text-warm md:py-28">
      <div className="container-page">
        <SectionHead eyebrow="Investimento" title="Quanto custa ter a sua viagem planejada" center light>
          <p>O investimento é calculado de acordo com a quantidade de dias da viagem.</p>
        </SectionHead>
        <div className="mx-auto mt-12 grid max-w-3xl gap-5 sm:grid-cols-2">
          {cards.map(([t, v]) => (
            <div key={t} className="rounded-[1.5rem] border border-gold/40 bg-warm p-8 text-center text-navy shadow-lift">
              <h3 className="text-xl">{t}</h3>
              <p className="mt-6 font-serif text-6xl"><span className="align-top text-2xl">R$ </span>{v}</p>
              <p className="mt-2 text-muted-foreground">por dia de viagem</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-xl text-center">
          <p className="text-warm/80">O planejamento é personalizado de acordo com o destino, o perfil dos viajantes e as prioridades da viagem.</p>
          <WaLink msg={MSG.solicitar} variant="gold" className="mt-8">Quero solicitar meu roteiro</WaLink>
          <p className="mt-4 text-sm text-warm/65">Clique no botão e fale conosco pelo WhatsApp. Vamos entender os detalhes da sua viagem.</p>
        </div>
      </div>
    </section>
  );
}

const DEMO = [[Search, "Pesquisa"], [Scale, "Comparação"], [ListChecks, "Organização"], [Timer, "Análise do tempo"], [MapPin, "Deslocamentos"], [Wallet, "Orçamento"], [Map, "Escolhas coerentes"]] as const;

function Demonstracao() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <img src={exemplo} alt="Exemplo fictício de roteiro personalizado em tablet e documento impresso." loading="lazy" width={1600} height={1200} className="w-full rounded-[1.75rem] shadow-lift" />
        <div>
          <SectionHead eyebrow="Por trás do roteiro" title="Um bom roteiro é muito mais do que uma lista de lugares">
            <p>Um planejamento personalizado envolve pesquisa, comparação, organização e análise.</p>
            <p>Cada escolha precisa considerar o tempo disponível, os deslocamentos, o orçamento, o perfil dos viajantes e o que realmente vale a pena para aquela viagem.</p>
          </SectionHead>
          <ul className="mt-8 flex flex-wrap gap-3">
            {DEMO.map(([Icon, l]) => <li key={l} className="flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm text-navy shadow-soft"><Icon className="size-4 text-gold" aria-hidden />{l}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

const FAQ = [
  ["O roteiro é igual para todo mundo?", "Não. O planejamento é criado com base no destino, nas datas, no orçamento, nos interesses e no perfil dos viajantes."],
  ["Vocês atendem qualquer destino?", "Sim. O Destino Diferente pode trabalhar com qualquer destino, desde que seja possível realizar uma pesquisa adequada para estruturar o planejamento."],
  ["Vocês ajudam com milhas?", "Sim. Fernando e Larissa possuem conhecimento em milhas aéreas e podem avaliar possibilidades que façam sentido para o seu perfil e para a sua viagem."],
  ["Preciso acumular milhas para contratar?", "Não. A análise pode ser feita mesmo para quem nunca acumulou pontos, desde que exista uma possibilidade aplicável ao caso."],
  ["Vocês fazem roteiros para famílias e grupos?", "Sim. O planejamento pode considerar diferentes perfis, idades, interesses e necessidades dentro do mesmo grupo."],
  ["Vocês fazem roteiros para Orlando?", "Sim. Além do roteiro personalizado, quem viaja para Orlando pode contar com o repasse de ingressos a preço de custo, conforme a disponibilidade e as condições vigentes."],
  ["Quanto custa o roteiro?", "Para viagens de até 15 dias, o valor é de R$ 100 por dia. Para viagens com mais de 15 dias, o valor é de R$ 80 por dia."],
  ["Posso pedir alterações?", "As alterações seguem as condições apresentadas no serviço no momento da contratação."],
  ["Quanto tempo antes da viagem devo contratar?", "Quanto antes o planejamento começar, melhor. Isso permite analisar mais possibilidades e organizar a viagem com mais tranquilidade."],
  ["O roteiro garante que a viagem será perfeita?", "Nenhum planejamento consegue controlar imprevistos, clima, alterações de funcionamento ou decisões pessoais. O objetivo é reduzir incertezas e organizar a viagem da forma mais inteligente possível."],
];

function Faq() {
  return (
    <section id="faq" className="bg-sand py-20 md:py-28">
      <div className="container-page max-w-3xl">
        <SectionHead eyebrow="Dúvidas" title="Perguntas frequentes" center />
        <Accordion type="single" collapsible className="mt-10 rounded-[1.5rem] bg-warm px-6 shadow-soft">
          {FAQ.map(([q, a], i) => (
            <AccordionItem key={q} value={`q${i}`}>
              <AccordionTrigger className="text-left text-base font-semibold text-navy hover:no-underline">{q}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function CtaFinal() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2rem] bg-navy px-6 py-16 text-center text-warm md:px-16 md:py-20">
          <div className="absolute inset-0 bg-map opacity-30" aria-hidden />
          <div className="relative mx-auto max-w-2xl">
            <p className="eyebrow mb-4">Vamos conversar</p>
            <h2 className="text-4xl md:text-5xl">Sua próxima viagem pode começar agora</h2>
            <p className="mt-6 text-lg text-warm/85">Você não precisa planejar tudo sozinho.</p>
            <p className="mt-3 text-warm/75">Conte para Fernando e Larissa para onde pretende viajar, quantos dias terá e o que espera viver. A partir disso, podemos ajudar a transformar suas ideias em um roteiro personalizado, organizado e coerente com a sua realidade.</p>
            <WaLink msg={MSG.final} variant="gold" className="mt-10">Quero criar meu roteiro personalizado</WaLink>
            <p className="mt-4 text-sm text-warm/65">Fale conosco pelo WhatsApp e comece a planejar a sua próxima viagem.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t pb-28 pt-14 md:pb-14">
      <div className="container-page flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-serif text-2xl text-navy">Destino <span className="italic text-gold">Diferente</span></p>
          <p className="mt-2 text-sm text-navy">Fernando e Larissa</p>
          <p className="text-sm text-muted-foreground">Consultoria de viagens e roteiros personalizados</p>
        </div>
        <ul className="flex flex-wrap gap-5 text-sm text-navy">
          <li><a href={wa(MSG.geral)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold"><MessageCircle className="size-4" aria-hidden />WhatsApp</a></li>
          <li><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold"><Instagram className="size-4" aria-hidden />Instagram</a></li>
          <li><a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold"><Youtube className="size-4" aria-hidden />YouTube</a></li>
          <li><a href="/privacidade" className="hover:text-gold">Política de privacidade</a></li>
        </ul>
      </div>
      <p className="container-page mt-10 text-xs text-muted-foreground">© {new Date().getFullYear()} Destino Diferente. Todos os direitos reservados.</p>
    </footer>
  );
}

function FloatingWa() {
  return (
    <a href={wa(MSG.geral)} target="_blank" rel="noopener noreferrer" aria-label="Falar com o Destino Diferente pelo WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-whatsapp text-warm shadow-lift transition-transform hover:scale-105">
      <MessageCircle className="size-7" aria-hidden />
    </a>
  );
}

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problema />
        <Transicao />
        <Solucao />
        <Entregaveis />
        <Beneficios />
        <Milhas />
        <Orlando />
        <Sobre />
        <ComoFunciona />
        <ParaQuem />
        <Investimento />
        <Demonstracao />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
      <FloatingWa />
    </>
  );
}
