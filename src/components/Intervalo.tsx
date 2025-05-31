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

  const [resultadoProporcao, setResultadoProporcao] = useState(0)

  function intervaloConfiancaProporcao(um: number, dois: number, tres: number){
    if (isNaN(um) || isNaN(dois) || isNaN(tres) || um <= 0 || um >= 1 || dois <= 0 || tres <= 0) {
    alert('Preencha os campos corretamente!');
    return;
  }

  const raiz = (tres * Math.sqrt((um * (1 - um)) / dois)).toFixed(2);
  setResultadoProporcao(Number(raiz));
}

  const intervaloConfiancaMedia = () => {
    //let erroMedia = quartoValor * (desvio / Math.sqrt(terceiro))
  };

  return (
    <section className="w-[80%] flex flex-col gap-3 p-3 rounded-lg card border-2 border-[#ddddddb2] bg-white">
      <h1 className="text-[1.4rem] font-medium">{valores.title}</h1>
      <hr />
      <div className="flex flex-col gap-2 mt-2">
        <div className="flex justify-between items-center">
          <span className="text-lg">{valores.primeiro}</span>
          <input
            type="text"
            className="border-2 border-[#ddd] rounded-[0.3rem] w-1/2 h-[2.15rem] px-2"
            onChange={(e) => setPrimeiroValor(Number(e.target.value))}
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-lg">{valores.segundo}</span>
          <span className="border-2 border-[#ddd] rounded-[0.3rem] w-1/2 h-[2.15rem] px-2 flex items-center">{primeiroValor == 0 ? null : (1 - primeiroValor).toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-lg">{valores.terceiro}</span>
          <input
            type="text"
            className="border-2 border-[#ddd] rounded-[0.3rem] w-1/2 h-[2.15rem] px-2"
            onChange={(e) => setSegundoValor(Number(e.target.value))}
          />
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="w-1/2">
            <span className="text-lg">{valores.quarto}</span>
          </div>
          <div className="w-1/4">
            <select
              className="px-2 border-2 border-[#ddd] rounded-[0.3rem] h-[2.15rem]"
              onChange={(e) => setTerceiroValor(Number(e.target.value))}
            >
              <option value="">- Selecione -</option>
              <option value={1.645}>90%</option>
              <option value={1.96}>95%</option>
              <option value={2.575}>99%</option>
            </select>
          </div>
          <span className="w-1/4 text-right">{terceiroValor == 0 ? null : terceiroValor}</span>
        </div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-lg">{valores.quinto}</span>
          <span className="text-lg font-bold">{resultadoProporcao == 0 ? null : resultadoProporcao}</span>
        </div>
        <div className="flex justify-between bg-[#fce5cb] p-3 rounded-[0.3rem]">
          <span className="text-lg">Intervalo de confiança</span>
          <span className="text-lg">{resultadoProporcao == 0 ? 'x' : (primeiroValor - resultadoProporcao).toFixed(2)} &lt; π &lt; {resultadoProporcao == 0 ? 'y' : (primeiroValor + resultadoProporcao).toFixed(2)}</span>
        </div>
        <div>
          <button
            className="bg-[#fce5cb] p-3 px-8 rounded-[0.3rem] cursor-pointer hover:bg-[#ecd0af] transition-colors duration-200"
            onClick={() =>
              valores.media
                ? intervaloConfiancaMedia()
                : intervaloConfiancaProporcao(primeiroValor, segundoValor, terceiroValor)
            }
          >
            Calcular
          </button>
        </div>
      </div>
    </section>
  );
}
