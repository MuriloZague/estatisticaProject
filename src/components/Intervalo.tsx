import { useState } from "react";

interface IntervaloValor {
  title: string;
  primeiro: string;
  segundo: string;
  terceiro: string;
  quarto: string;
  quinto: string;
  media: Boolean;
}

export default function Intervalo(valores: IntervaloValor) {

  const [primeiroValor, setPrimeiroValor] = useState(0);
  const [segundoValor, setSegundoValor] = useState(0);
  const [terceiroValor, setTerceiroValor] = useState(0);
  const [quartoValor, setQuartoValor] = useState(0);
  const [quintoValor, setQuintoValor] = useState(0);


  const intervaloConfiancaProporcao = () => {
    let erroProporcao = quartoValor * Math.sqrt(primeiroValor) * (1 - primeiroValor) / terceiroValor
    console.log(erroProporcao)
  }

  const intervaloConfiancaMedia = () => {
    //let erroMedia = quartoValor * (desvio / Math.sqrt(terceiro))
  }

  return (
    <section className="w-[80%] flex flex-col gap-2 p-3 rounded-lg card">
      <h1 className="text-[1.4rem] font-medium">{valores.title}</h1>
      <hr />
      <div className="flex flex-col gap-2 mt-2">
        <div className="flex justify-between items-center">
          <span className="text-lg">{valores.primeiro}</span>
          <input
            type="text"
            className="border-2 border-[#ddd] rounded-[0.3rem] w-1/2 h-[2.15rem] px-2"
            onChange={e => setPrimeiroValor(Number(e.target.value))}
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-lg">{valores.segundo}</span>
          <input
            type="text"
            className="border-2 border-[#ddd] rounded-[0.3rem] w-1/2 h-[2.15rem] px-2"
            onChange={e => setSegundoValor(Number(e.target.value))}
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-lg">{valores.terceiro}</span>
          <input
            type="text"
            className="border-2 border-[#ddd] rounded-[0.3rem] w-1/2 h-[2.15rem] px-2"
            onChange={e => setTerceiroValor(Number(e.target.value))}
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-lg">{valores.quarto}</span>
          <select
            className="px-2 border-2 border-[#ddd] rounded-[0.3rem] w-1/2 h-[2.15rem]"
            onChange={(e) => setQuartoValor(Number(e.target.value))}>
            <option value="">- Selecione -</option>
            <option value={1.645}>90%</option>
            <option value={1.96}>95%</option>
            <option value={2.575}>99%</option>
          </select>

        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-lg">{valores.quinto}</span>
          <input
            type="text"
            className="px-2 border-2 border-[#ddd] rounded-[0.3rem] w-1/2 h-[2.15rem]"
            onChange={e => setQuintoValor(Number(e.target.value))}
          />
        </div>
        <div className="flex justify-between bg-[#fdf2e5] p-3 rounded-[0.3rem]">
          <span className="text-lg">Intervalo de confiança</span>
          <span className="text-lg">x &lt; π &lt; y</span>
        </div>
        <div>
          <button
            className="bg-[#fdf2e5] p-3 px-8 rounded-[0.3rem] cursor-pointer"
            onClick={() => valores.media ? intervaloConfiancaMedia() : intervaloConfiancaProporcao()}
          >
            Calcular
          </button>
        </div>
      </div>
    </section>
  );
}