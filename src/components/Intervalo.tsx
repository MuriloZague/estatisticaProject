interface IntervaloValor {
  title: string;
  primeiro: string;
  segundo: string;
  terceiro: string;
  quarto: string;
  quinto: string;
}

export default function Intervalo(valores: IntervaloValor) {
  return (
    <section className="w-[80%] flex flex-col gap-2 p-3 rounded-lg card">
      <h1 className="text-[1.3rem] font-medium">{valores.title}</h1>
      <hr />
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <p>{valores.primeiro}</p>
          <input
            type="text"
            className="border-2 border-[#ddd] rounded-[0.3rem] w-1/2 h-[2.15rem]"
          />
        </div>
        <div className="flex justify-between">
          <span>{valores.segundo}</span>
          <input
            type="text"
            className="border-2 border-[#ddd] rounded-[0.3rem] w-1/2 h-[2.15rem]"
          />
        </div>
        <div className="flex justify-between">
          <span>{valores.terceiro}</span>
          <input
            type="text"
            className="border-2 border-[#ddd] rounded-[0.3rem] w-1/2 h-[2.15rem]"
          />
        </div>
        <div className="flex justify-between">
          <span>{valores.quarto}</span>
          <input
            type="text"
            className="border-2 border-[#ddd] rounded-[0.3rem] w-1/2 h-[2.15rem]"
          />
        </div>
        <div className="flex justify-between">
          <span>{valores.quinto}</span>
          <input
            type="text"
            className="border-2 border-[#ddd] rounded-[0.3rem] w-1/2 h-[2.15rem]"
          />
        </div>
        <div className="flex justify-between bg-[#fdf2e5] p-3 rounded-[0.3rem]">
          <span>Intervalo de confiança</span>
          <span>resultado1 &lt; π &lt; resultado2 </span>
        </div>
      </div>
    </section>
  );
}