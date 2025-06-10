import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Intervalo from "./Intervalo"
import Amostra from "./Amostra"

export default function Home() {

  const [media1, setMedia1] = useState(false)
  const [proporcao1, setProporcao1] = useState(false)

  const [media2, setMedia2] = useState(false)
  const [proporcao2, setProporcao2] = useState(false)

  // nao me pergunte o por que
  //ignorar nomes de variaveis, nao sou bom nisso (2)
  const [primeiroValor, setPrimeiroValor] = useState("");
  const [segundoValor, setSegundoValor] = useState("");
  const [terceiroValor, setTerceiroValor] = useState("");
  const [quartoValor, setQuartoValor] = useState("");

  const [primeiroValor2, setPrimeiroValor2] = useState("");
  const [segundoValor2, setSegundoValor2] = useState("");
  const [terceiroValor2, setTerceiroValor2] = useState("");
  const [quartoValor2, setQuartoValor2] = useState("");

  const limparInputs = () => {
    setPrimeiroValor("")
    setSegundoValor("")
    setTerceiroValor("")
    setQuartoValor("")
  }

  // eu finjo que nao percebo
  const limparInputs2 = () => {
    setPrimeiroValor2("")
    setSegundoValor2("")
    setTerceiroValor2("")
    setQuartoValor2("")
  }

  return (
    <section className="flex flex-row justify-around">
      <div className="flex flex-col items-center gap-3 w-[50%] mt-6">
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
        <AnimatePresence mode="wait">
          {media1 && (
            <div className="w-3/4">
            <motion.div
              key="media1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Intervalo
                key="media1" setPrimeiro={setPrimeiroValor} setSegundo={setSegundoValor} setTerceiro={setTerceiroValor} setQuarto={setQuartoValor} primeiroValor={primeiroValor} segundoValor={segundoValor} terceiroValor={terceiroValor} quartoValor={quartoValor} title="Calculadora de Intervalo de Confiança para uma Média" primeiro="Média" segundo="Desvio Padrão" terceiro="Tamanho da Amostra (n)" quarto="alfa (α)" quinto="Erro de Média (Em)" media={true}
              />
            </motion.div>
            </div>
          )}
          {proporcao1 && (
            <div className="w-3/4">
            <motion.div
              key="proporcao1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Intervalo
                key="proporcao1" setPrimeiro={setPrimeiroValor} setSegundo={setSegundoValor} setTerceiro={setTerceiroValor} setQuarto={setQuartoValor} primeiroValor={primeiroValor} segundoValor={segundoValor} terceiroValor={terceiroValor} quartoValor={quartoValor} title="Calculadora de Intervalo de Confiança para uma Proporção" primeiro="p" segundo="1 - p" terceiro="Tamanho da amostra (n)" quarto="Grau de confiança" quinto="Erro de Proporção (Ep)" media={false} />
            </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
      <div className="w-[0.1rem] h-svh bg-[#ecd0af]"></div>
      <div className="flex flex-col items-center gap-3 w-[50%] mt-6">
        <h1 className="text-[2.5rem] font-medium text-center max-w-[65%]">Calculadora de Tamanho da Amostra</h1>
        <select onChange={e => {
          setMedia2(e.target.value === "media");
          setProporcao2(e.target.value === "proporcao");
          limparInputs2();
        }}
          className="border p-2 text-center rounded-3xl bg-[#fce5cb]"
        >
          <option value="">- Selecione o tipo de cálculo -</option>
          <option value="proporcao">Proporção</option>
          <option value="media">Média</option>
        </select>
        <AnimatePresence mode="wait">
          {proporcao2 && (
            <div className="w-3/4">
            <motion.div
              key="proporcao2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Amostra
                key="media2" setPrimeiro={setPrimeiroValor2} setSegundo={setSegundoValor2} setTerceiro={setTerceiroValor2} setQuarto={setQuartoValor2} primeiroValor={primeiroValor2} segundoValor={segundoValor2} terceiroValor={terceiroValor2} quartoValor={quartoValor2} title="Calculadora de Tamanho de Amostra por Proporção" primeiro="Grau de confiança (z)" segundo="p" terceiro="1 - p" quarto="Erro (Ep)" media={true}
              />
            </motion.div>
            </div>
          )}
          {media2 && (
            <div className="w-3/4">
            <motion.div
              key="media2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Amostra
                key="proporcao2" setPrimeiro={setPrimeiroValor2} setSegundo={setSegundoValor2} setTerceiro={setTerceiroValor2} setQuarto={setQuartoValor2} primeiroValor={primeiroValor2} segundoValor={segundoValor2} terceiroValor={terceiroValor2} quartoValor={quartoValor2} title="Calculadora de Tamanho de Amostra por Média" primeiro="Grau de confiança (z)" segundo="Desvio Padrão" terceiro="Erro (Em)" quarto="" media={false}
              />
            </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}