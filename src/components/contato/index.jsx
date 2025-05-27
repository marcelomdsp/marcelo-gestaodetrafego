export function Contato() {
  return (
    <section
      id="contato"
      className="bg-[var(--grafite)] py-10 text-center flex flex-col items-center gap-6 scroll-mt-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--verde)]">
        Pronto para atrair mais clientes?
      </h2>

      <p className="text-lg md:text-xl max-w-2xl">
        Se você sente que seu negócio merece mais visibilidade, mais movimento e
        mais vendas, eu posso te ajudar. Vamos conversar e traçar uma estratégia
        personalizada para você!
      </p>

      <div className="flex flex-col gap-4 py-4">
        <a
          href="https://wa.me/message/B3VCHP5M4BW5E1"
          target="_blank"
          className="bg-[var(--verde)] px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
          aria-label="Abrir conversa no WhatsApp com Marcelo"
        >
          📲 Fale comigo no WhatsApp
        </a>
        <p className="text-sm text-gray-400">
          Ou, se preferir, me chame no Instagram:{" "}
          <a
            href="https://instagram.com/gestordetrafego.marcelo"
            target="_blank"
            className="underline text-[var(--verde)]"
            aria-label="Abrir Instagram do Marcelo"
          >
            @gestordetrafego.marcelo
          </a>
        </p>
      </div>
    </section>
  );
}
