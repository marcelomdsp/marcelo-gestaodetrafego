import imgCampanha from "../../assets/img/img-campanha.png";
import imgCases from "../../assets/img/img-cases.jpg";

export function Cases() {
  return (
    <section
      id="cases"
      className="flex flex-col gap-5 w-full items-center rounded-sm scroll-mt-20"
    >
      <div className="flex flex-col gap-5 text-center w-full">
        <h2 className="py-5 text-center text-4xl font-bold text-[var(--verde)]">
          O impacto do tráfego pago
        </h2>
        <div
          className="w-full h-30 bg-cover bg-center md:h-40 lg:h-50 rounded-sm filter brightness-60"
          style={{ backgroundImage: `url(${imgCases})` }}
        ></div>
        <p className="text-lg font-semibold lg:text-center">
          Confira os resultados de uma campanha de fotografias para o natal que
          gerenciei. Nela os anúncios ficaram ativos por puco mais de uma semana
          e com menos de R$ 50,00 alcancei resultados.
        </p>
      </div>

      <div className=" flex flex-col w-full items-center border-2 border-[var(--pretoc)] bg-[var(--pretoc)] rounded-sm">
        <img
          src={imgCampanha}
          alt="imagem de uma campanha"
          className="w-full rounded-sm filter brightness-90"
        />
        <div className="flex flex-col w-full ml-5">
          <h3 className=" text-2xl font-semibold mt-5">
            Já imaginou pagar R$ 0,13 por um cliente?
          </h3>
          <ul className="flex flex-col gap-3 py-5">
            <li>Resultados: 339 visitas ao perfil</li>
            <li>Alcance: 4.057 pessoas</li>
            <li>Impressões: 6.269</li>
            <li>Custo por visita: R$ 0,13</li>
            <li>Valor investido: R$ 43,36</li>
          </ul>
        </div>
        <p className="w-full text-center text-xl m-3">
          A minha estratégia é simples: impulsionar sua marca, comunicar suas
          ideias e impactar pessoas.
        </p>
      </div>
    </section>
  );
}
