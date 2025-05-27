import imgHero from "../../assets/img/img-hero.jpg";

export function Home() {
  return (
    <section
      id="hero"
      className="flex w-full min-h-[600px] mt-20 scroll-mt-20 justify-center lg:gap-7 rounded-md"
    >
      <div className="flex flex-col w-full text-center items-center gap-5 mt-8">
        <h1
          className="text-3xl font-bold border-amber-100 text-[var(--verde)]
      lg:text-4xl"
        >
          Vamos transformar cliques em vendas com a gestão de tráfego?
        </h1>
        <p className="text-xl">
          Tráfego pago simples, eficaz e feito sob medida para negócios que
          querem vender mais.
        </p>

        <img
          src={imgHero}
          alt="Pessoas realizando uma tranzação no cartão"
          className="w-full rounded-sm md:w-[60%] "
        />

        <a
          href="https://wa.me/message/B3VCHP5M4BW5E1"
          target="_blank"
          className="bg-[var(--verde)] mt-1 px-12 py-2 rounded-full text-lg font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
          aria-label="Abrir conversa no WhatsApp com Marcelo"
        >
          📲 Quero vender mais
        </a>

        <p className="text-lg lg:text-xl mb-6 w-full lg:m-4  md:leading-10 lg:leading-15">
          Vejo de perto o esforço de quem empreende e entendi que, com os
          anúncios certos, é possível transformar não só um negócio, mas uma
          vida inteira.
        </p>
      </div>
    </section>
  );
}
