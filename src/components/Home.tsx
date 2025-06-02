import { useState } from "react";

import Intervalo from "./Intervalo"
import Amostra from "./Amostra"

export default function Home() {

  const [media1, setMedia1] = useState(Boolean)
  const [proporcao1, setProporcao1] = useState(Boolean)

  const [media2, setMedia2] = useState(Boolean)
  const [proporcao2, setProporcao2] = useState(Boolean)
  // fazer os inputs serem apagados quando mudar o tipo de calculadora, criar uma função para o onchange, excluir vairaveis retidas
  // (media1 media2 proporcao1 proporcao2)
  return (
    <section className="flex flex-row justify-around">
      <div className="flex flex-col items-center gap-3 w-[45%] mt-3">
        <h1 className="text-[2.5rem] font-medium text-center max-w-[65%]">Calculadora de Intervalo de Confiança</h1>
        <select onChange={e => {
          setMedia1(e.target.value === "media");
          setProporcao1(e.target.value === "proporcao");
        }}
          className="border p-2 text-center rounded-3xl bg-[#fce5cb]"
        >
          <option value="">- Selecione o tipo de cálculo -</option>
          <option value="proporcao">Proporção</option>
          <option value="media">Média</option>
        </select>
        {media1 ? 
        <Intervalo title="Calculadora de Intervalo de Confiança para uma Média" primeiro="Média" segundo="Desvio Padrão" terceiro="Tamanho da Amostra (n)" quarto="alfa (α)" quinto="Erro de Média (Em)" media={true}/>
        : proporcao1 ?
        <Intervalo title="Calculadora de Intervalo de Confiança para uma Proporção" primeiro="p" segundo="1 - p" terceiro="Tamanho da amostra (n)" quarto="Grau de confiança" quinto="Erro de Proporção (Ep)" media={false}/>
        : null
      } 
      </div>
      <div className="w-[0.1rem] h-svh bg-[#ecd0af]"></div>
      <div className="flex flex-col items-center gap-3 w-[45%] mt-3">
        <h1 className="text-[2.5rem] font-medium text-center max-w-[65%]">Calculadora de Tamanho da Amostra</h1>
        <select onChange={e => {
          setMedia2(e.target.value === "media");
          setProporcao2(e.target.value === "proporcao");
        }}
          className="border p-2 text-center rounded-3xl bg-[#fce5cb]"
        >
          <option value="">- Selecione o tipo de cálculo -</option>
          <option value="proporcao">Proporção</option>
          <option value="media">Média</option>
        </select>
        {media2 ?
        <Amostra title="Calculadora de Tamanho de Amostra por Média" primeiro="Grau de confiança (z)" segundo="p" terceiro="1 - p" quarto="erro (Ep)" />
        : proporcao2 ?
        <Amostra title="Calculadora de Tamanho de Amostra por Proporção" primeiro="Grau de confiança (z)" segundo="Desvio Padrão" terceiro="Erro (Em)" quarto="" />
        : null}
        </div>
    </section>
  )
}