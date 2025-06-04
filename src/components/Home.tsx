import { useState } from "react";

import Intervalo from "./Intervalo"
import Amostra from "./Amostra"

export default function Home() {

  const [media1, setMedia1] = useState(false)
  const [proporcao1, setProporcao1] = useState(false)

  const [media2, setMedia2] = useState(false)
  const [proporcao2, setProporcao2] = useState(false)

  //ignorar nomes de variaveis, nao sou bom nisso (2)
  const [primeiroValor, setPrimeiroValor] = useState("");
  const [segundoValor, setSegundoValor] = useState("");
  const [terceiroValor, setTerceiroValor] = useState("");
  const [quartoValor, setQuartoValor] = useState("");

  const limparInputs = () => {
    setPrimeiroValor("")
    setSegundoValor("")
    setTerceiroValor("")
    setQuartoValor("")
  }

  return (
    <section className="flex flex-row justify-around">
      <div className="flex flex-col items-center gap-3 w-[45%] mt-3">
        <h1 className="text-[2.5rem] font-medium text-center max-w-[65%]">Calculadora de Intervalo de Confiança</h1>
        <select onChange={e => {
          setMedia1(e.target.value === "media");
          setProporcao1(e.target.value === "proporcao");
          limparInputs();
        }}
          className="border p-2 text-center rounded-3xl bg-[#fce5cb]"
        >
          <option value="">- Selecione o tipo de cálculo -</option>
          <option value="proporcao">Proporção</option>
          <option value="media">Média</option>
        </select>
        {media1 ? 
        <Intervalo key="media1" setPrimeiro={setPrimeiroValor} setSegundo={setSegundoValor} setTerceiro={setTerceiroValor} setQuarto={setQuartoValor} primeiroValor={primeiroValor} segundoValor={segundoValor} terceiroValor={terceiroValor} quartoValor={quartoValor} title="Calculadora de Intervalo de Confiança para uma Média" primeiro="Média" segundo="Desvio Padrão" terceiro="Tamanho da Amostra (n)" quarto="alfa (α)" quinto="Erro de Média (Em)" media={true}/>
        : proporcao1 ?
        <Intervalo key="proporcao1" setPrimeiro={setPrimeiroValor} setSegundo={setSegundoValor} setTerceiro={setTerceiroValor} setQuarto={setQuartoValor} primeiroValor={primeiroValor} segundoValor={segundoValor} terceiroValor={terceiroValor} quartoValor={quartoValor} title="Calculadora de Intervalo de Confiança para uma Proporção" primeiro="p" segundo="1 - p" terceiro="Tamanho da amostra (n)" quarto="Grau de confiança" quinto="Erro de Proporção (Ep)" media={false}/>
        : null
      }
      </div>
      <div className="w-[0.1rem] h-svh bg-[#ecd0af]"></div>
      <div className="flex flex-col items-center gap-3 w-[45%] mt-3">
        <h1 className="text-[2.5rem] font-medium text-center max-w-[65%]">Calculadora de Tamanho da Amostra</h1>
        <select onChange={e => {
          setMedia2(e.target.value === "media");
          setProporcao2(e.target.value === "proporcao");
          limparInputs();
        }}
          className="border p-2 text-center rounded-3xl bg-[#fce5cb]"
        >
          <option value="">- Selecione o tipo de cálculo -</option>
          <option value="proporcao">Proporção</option>
          <option value="media">Média</option>
        </select>
        {media2 ?
        <Amostra key="media2" title="Calculadora de Tamanho de Amostra por Média" primeiro="Grau de confiança (z)" segundo="p" terceiro="1 - p" quarto="erro (Ep)" />
        : proporcao2 ?
        <Amostra key="proporcao2" title="Calculadora de Tamanho de Amostra por Proporção" primeiro="Grau de confiança (z)" segundo="Desvio Padrão" terceiro="Erro (Em)" quarto="" />
        : null}
        </div>
    </section>
  )
}