import { useState } from "react";

//ignorar nomes de variaveis, nao sou bom nisso
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
  //ignorar nomes de variaveis, nao sou bom nisso (2)
  const [primeiroValor, setPrimeiroValor] = useState(0);
  const [segundoValor, setSegundoValor] = useState(0);
  const [terceiroValor, setTerceiroValor] = useState(0);
  const [quartoValor, setQuartoValor] = useState(0);

  const [resultadoProporcao, setResultadoProporcao] = useState(0)
  const [resultadoMedia, setResultadoMedia] = useState(0)

  function intervaloConfiancaProporcao(um: number, dois: number, tres: number){
    if (isNaN(um) || isNaN(dois) || isNaN(tres) || um <= 0 || um >= 1 || dois <= 0 || tres <= 0) { //tentar diminuir tamanho verificação
    alert('Preencha os campos corretamente!');
    return;
  }
  const resultado = (tres * Math.sqrt((um * (1 - um)) / dois)).toFixed(2);
  setResultadoProporcao(Number(resultado));
}

  const intervaloConfiancaMedia = (um: number, dois: number, tres: number) => {
    if (isNaN(um) || isNaN(dois) || isNaN(tres)) { //algumas variavéis podem ser menores que 1. !! PERGUNTAR PARA A PROFESSORA SE PODEM SER MENORES OU IGUAIS A ZERO !!
    alert('Preencha os campos corretamente!');
    return;
  }
    const resultado = (tres * (um / Math.sqrt(dois))).toFixed(2);
    setResultadoMedia(Number(resultado));
  };

  return (
    <section className="w-[90%] flex flex-col gap-3 p-3 rounded-lg card border-2 border-[#ddddddb2] bg-white">
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
        {valores.media ? 
        <div className="flex justify-between items-center">
          <span className="text-lg">{valores.segundo}</span>
          <input
            type="text"
            className="border-2 border-[#ddd] rounded-[0.3rem] w-1/2 h-[2.15rem] px-2"
            onChange={(e) => setQuartoValor(Number(e.target.value))}
          />
        </div>
        :
        <div className="flex justify-between items-center">
          <span className="text-lg">{valores.segundo}</span>
          <span className="border-2 border-[#ddd] rounded-[0.3rem] w-1/2 h-[2.15rem] px-2 flex items-center">{primeiroValor == 0 ? null : (1 - primeiroValor).toFixed(2)}</span>
        </div>
        }
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
          {valores.media ?
          <select
              className="px-2 border-2 border-[#ddd] rounded-[0.3rem] h-[2.15rem]"
              onChange={(e) => setTerceiroValor(Number(e.target.value))}
            >
              <option value="">- Selecione -</option>
              <option value={1.645}>90% &gt; 0,10</option>
              <option value={1.96}>95% &gt; 0,05</option>
              <option value={2.575}>99% &gt; 0,01</option>
          </select>
          :
          <select
              className="px-2 border-2 border-[#ddd] rounded-[0.3rem] h-[2.15rem]"
              onChange={(e) => setTerceiroValor(Number(e.target.value))}
            >
              <option value="">- Selecione -</option>
              <option value={1.645}>90%</option>
              <option value={1.96}>95%</option>
              <option value={2.575}>99%</option>
          </select>
          }
          </div>
          <span className="w-1/4 text-right">{valores.media ? terceiroValor == 0 ? null : terceiroValor : terceiroValor == 0 ? null : terceiroValor}</span>
        </div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-lg">{valores.quinto}</span>
          <span className="text-lg font-bold">{valores.media ? resultadoMedia == 0 ? null : resultadoMedia : resultadoProporcao == 0 ? null : resultadoProporcao}</span> {/* coisas grandes acontecendo aqui */}
        </div>
        <div className="flex justify-between bg-[#fce5cb] p-3 rounded-[0.3rem]">
          <span className="text-lg">Intervalo de confiança</span>
          <span className="text-lg">
            {valores.media
              ? resultadoMedia === 0
                ? 'x < π < y'
                : `${(primeiroValor - resultadoMedia).toFixed(2)} < π < ${(primeiroValor + resultadoMedia).toFixed(2)}`
              : resultadoProporcao === 0
                ? 'x < π < y'
                : `${(primeiroValor - resultadoProporcao).toFixed(2)} < π < ${(primeiroValor + resultadoProporcao).toFixed(2)}`
            }
          </span>
        </div>
        <div>
          <button
            className="bg-[#fce5cb] p-3 px-8 rounded-[0.3rem] cursor-pointer hover:bg-[#ecd0af] transition-colors duration-200"
            onClick={() =>
              valores.media
                ? intervaloConfiancaMedia(quartoValor, segundoValor, terceiroValor)
                : intervaloConfiancaProporcao(primeiroValor, segundoValor, terceiroValor)}>
            Calcular
          </button>
        </div>
      </div>
    </section>
  );
}
