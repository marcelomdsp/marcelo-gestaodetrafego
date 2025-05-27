// src/components/SecaoDuvidas.jsx
import { useState, useRef, useEffect } from "react";
import { IoIosAddCircleOutline, IoMdRemoveCircleOutline } from "react-icons/io";

const duvidas = [
  {
    pergunta: "O que é tráfego pago, exatemente?",
    resposta:
      "Tráfego pago é quando você investe dinheiro em anúncios (como Google Ads, Facebook Ads, Instagram, etc.) para atrair visitantes qualificados para seu site, loja ou perfil. Ao contrário do tráfego orgânico, aqui você acelera os resultados com investimento direto.",
  },
  {
    pergunta: "Qual a diferença entre impulsionar e fazer gestão de tráfego?",
    resposta:
      "Impulsionar é basicamente apertar um botão. Gestão de tráfego é estratégia. Isso envolve segmentação detalhada, testes A/B, otimização de anúncios, criação de funis e análise de métricas para gerar vendas reais, não só curtidas.",
  },
  {
    pergunta: "Preciso de um orçamento alto pra começar?",
    resposta:
      "Não. É possível começar com investimentos menores, testando e validando. O mais importante é ter uma estratégia sólida para escalar o que funciona com segurança.",
  },
  {
    pergunta: "Em quanto tempo começo a ver os resultados?",
    resposta:
      "Depende do seu tipo de negócio, mas normalmente em 7 a 15 dias já é possível analisar os primeiros dados e começar a otimizar. Tráfego pago é ágil, mas exige consistência e ajustes constantes.",
  },
  {
    pergunta: "Por que contratar um gestos de tráfego?",
    resposta:
      "Porque o seu tempo vale mais do que ficar tentando entender plataformas e métricas sozinho. Um gestor cuida de toda a estratégia, evita desperdícios e faz o seu dinheiro trabalhar de verdade.",
  },
  {
    pergunta: "Consultoria gratuita",
    resposta:
      "Entre em contato conosco hoje mesmo para agendar sua consulta gratuita e descubra como podemos transformar sua presença digital.",
  },
  {
    pergunta: "Ficou alguma dúvida?",
    resposta:
      "Fale comigo! Vou te mostrar como o tráfego pago pode gerar resultados reais para o seu negócio.",
  },
];

export function Duvidas() {
  const [aberta, setAberta] = useState(null);
  const refs = useRef([]);

  useEffect(() => {
    refs.current.forEach((ref, i) => {
      if (ref) {
        ref.style.maxHeight = aberta === i ? ref.scrollHeight + "px" : "0px";
      }
    });
  }, [aberta]);

  const toggle = (index) => {
    setAberta(aberta === index ? null : index);
  };

  return (
    <section className="w-full mt-10 bg-[var(--pretoc)] rounded-sm">
      <h2 className="text-3xl py-5 font-bold text-center text-[var(--verde)]">
        Principais dúvidas sobre tráfego pago
      </h2>

      <p className="text-center text-lg font-semibold mb-5">
        Separei as mais frequantes pra esclarecer tudo sobre o serviço
      </p>

      <div className="">
        {duvidas.map((item, index) => (
          <div
            key={index}
            className="rounded-md overflow-hidden border-4 border-[var(--pretoc)]"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex gap-5 items-center p-4 text-left font-md hover:bg-[var(--verde)] cursor-pointer"
            >
              <span
                className={`transform transition-transform duration-300 ${
                  aberta === index ? "rotate-180" : ""
                }`}
              >
                {aberta === index ? (
                  <IoMdRemoveCircleOutline />
                ) : (
                  <IoIosAddCircleOutline />
                )}
              </span>
              {item.pergunta}
            </button>

            <div
              ref={(el) => (refs.current[index] = el)}
              className="overflow-hidden transition-all duration-300 ease-in-out px-4 bg-[var(--preto)]"
              style={{ maxHeight: aberta === index ? "1000px" : "0px" }}
            >
              <p className="py-4">{item.resposta}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
