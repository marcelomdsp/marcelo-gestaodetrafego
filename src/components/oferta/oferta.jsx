export function Oferta() {
  return (
    <section className="w-full py-10 text-center flex flex-col gap-6 items-center justify-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--verde)]">
        Por que confiar em mim para cuidar dos seus anúncios?
      </h2>

      <p className="text-lg md:text-xl max-w-3xl">
        Meu foco é em resultados reais e consistentes. Já ajudei negócios a se
        destacarem online com estratégias simples, eficazes e acessíveis.
      </p>

      <ul className="text-lg md:text-xl max-w-3xl flex flex-col gap-4 text-left">
        <li>
          ✅ Criação e otimização de campanhas no Google, Facebook, Instagram.
        </li>
        <li>✅ Estratégias personalizadas para seu nicho e público.</li>
        <li>
          ✅ Relatórios frequentes pra você saber de tudo que está acontecendo.
        </li>
        <li>✅ Comunicação direta e humanizada, sem complicação.</li>
        <li>
          ✅ Foco em resultado de verdade: mais cliques, mais visitas, mais
          vendas.
        </li>
      </ul>

      <a
        href="https://wa.me/message/B3VCHP5M4BW5E1"
        target="_blank"
        className="mt-8 bg-[var(--verde)] px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
        aria-label="Abrir conversa no WhatsApp com Marcelo"
      >
        📲 Vamos conversar sobre seu negócio
      </a>
    </section>
  );
}
