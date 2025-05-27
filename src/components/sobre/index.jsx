import minhaFoto from "../../assets/img/minha-foto.jpg";

export function Sobre() {
  return (
    <section
      id="quem-sou"
      className="flex flex-col mt-10 w-full text-center bg-[var(--pretoc)] rounded-sm lg:h-[550px] scroll-mt-20"
    >
      <h2 className="py-8 text-4xl font-bold text-center text-[var(--verde)]">
        Quem será seu gestor de tráfego?
      </h2>
      <div className="flex flex-col lg:flex-row lg:grid grid-cols-2 gap-5">
        <img
          src={minhaFoto}
          alt="Foto do Marcelo"
          className="w-full px-6 py-5"
        />
        <p className="text-lg font-semibold px-5 py-6 text-justify md:leading-10">
          Olá! Me chamo Marcelo, sou apaixonado por tecnologia, comunicação e
          resultados. Atualmete curso Engenharia de Software e mergulhei no
          tráfego pago para ajudar negócios locais a crescerem online. Já
          gerenciei campanhas para fotografia e vi de perto como um bom anúncio
          atrai os clientes certos. Meu objetivo é tornar o marketing digital
          acessível, com estratégias simples e eficazes que geram mais
          visibilidade e vendas.
        </p>
      </div>
    </section>
  );
}
