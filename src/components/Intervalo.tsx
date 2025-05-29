interface IntervaloValor {
  primeiro: string;
  segundo: string;
  terceiro: string;
  quarto: string;
  quinto: string;
}

export default function Intervalo(valores: IntervaloValor) {
  return (
    <section className="flex flex-col gap-2 w-[50%] border-2 p-3 rounded-lg border-gray-300">
      <h1>Calculadora de Intervalo de Confiança para uma Proporção</h1>
      <hr />
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <a>{valores.primeiro}</a>
          <input
            type="text"
            className="border-2 border-gray-300 rounded-[0.3rem] w-1/2"
          />
        </div>
        <div className="flex justify-between">
          <a>{valores.segundo}</a>
          <input
            type="text"
            className="border-2 border-gray-300 rounded-[0.3rem] w-1/2"
          />
        </div>
        <div className="flex justify-between">
          <a>{valores.terceiro}</a>
          <input
            type="text"
            className="border-2 border-gray-300 rounded-[0.3rem] w-1/2"
          />
        </div>
        <div className="flex justify-between">
          <a>{valores.quarto}</a>
          <input
            type="text"
            className="border-2 border-gray-300 rounded-[0.3rem] w-1/2"
          />
        </div>
        <div className="flex justify-between">
          <a>{valores.quinto}</a>
          <input
            type="text"
            className="border-2 border-gray-300 rounded-[0.3rem] w-1/2"
          />
        </div>
        <div className="flex justify-between border border-gray-400 p-2 rounded-[0.3rem]">
            <a>Intervalo de confiança</a>
            <a>resultado1 &lt; π &lt; resultado2 </a>
        </div>
      </div>
    </section>
  );
}
