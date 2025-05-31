import Intervalo from "./Intervalo"
import Amostra from "./Amostra"

export default function Home() {
  return (
    <section className="flex flex-row justify-around">
      <div className="flex flex-col items-center gap-3 w-[45%] mt-3">
        <h1 className="text-[2.5rem] font-medium text-center max-w-[65%]">Calculadora de Intervalo de Confiança</h1>
        <Intervalo title="Calculadora de Intervalo de Confiança para uma Proporção" primeiro="p" segundo="1 - p" terceiro="tamanho da amostra (n)" quarto="grau de confiança" quinto="Erro de proporção (Ep)" media={false}/>
        <Intervalo title="Calculadora de Intervalo de Confiança para uma Média" primeiro="média" segundo="desvio padrão" terceiro="alfa (α)" quarto="grau de confiança" quinto="tamanho da amostra (n)" media={true}/>
      </div>
      <div className="flex flex-col items-center gap-5 w-[45%] mt-3">
        <h1 className="text-[2.5rem] font-medium text-center max-w-[65%]">Calculadora de Tamanho da Amostra</h1>
        <Amostra title="Calculadora de Tamanho de Amostra por Média" primeiro="Grau de confiança (z)" segundo="p" terceiro="1 - p" quarto="erro (Ep)" />
        <Amostra title="Calculadora de Tamanho de Amostra por Proporção" primeiro="Grau de confiança (z)" segundo="Desvio Padrão" terceiro="Erro (Em)" quarto="" />
      </div>
    </section>
  )
}