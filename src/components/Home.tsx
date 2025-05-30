import Intervalo from "./Intervalo"
import Erro from "./Erro"

export default function Home() {
  return (
    <section className="flex flex-row justify-around">
      <div className="flex flex-col items-center gap-3 w-[45%] mt-3">
        <h1 className="text-[2.5rem] font-medium text-center max-w-[65%]">Calculadora de Intervalo de Confiança</h1>
        <Intervalo title="Calculadora de Intervalo de Confiança para uma Proporção" primeiro="p" segundo="1 - p" terceiro="tamanho da amostra (n)" quarto="grau de confiança" quinto="Erro de proporção (Ep)" />
        <Intervalo title="Calculadora de Intervalo de Confiança para uma Média" primeiro="média" segundo="grau de confiança" terceiro="alfa (α)" quarto="desvio padrão" quinto="tamanho da amostra (n)" />
      </div>
      <div className="flex flex-col items-center gap-5 w-[45%] mt-3">
        <h1 className="text-4xl text-center max-w-[65%]">Calculadora de Intervalo de Confiança</h1>
        <Erro />
        <Erro />
      </div>
    </section>
  )
}