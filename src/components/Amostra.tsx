interface AmostraValor {
  title: string;
  primeiro: string;
  segundo: string;
  terceiro: string;
  quarto: string;
}

export default function Erro(valores: AmostraValor) {
  const grauConfianca = [1.645, 1.96, 2.575]

  const calculoAmostraMedia = () => {
    let tamanhoAmostra =  Math.sqrt(grauConfianca * desvio / erroMedia)
  }

  const calculoAmostraProporcao = () => {
    let tamanhoAmostra = Math.sqrt(grauConfianca) * p * (1 - p) / Math.sqrt(erroProporcao)
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
            className="border-2 border-[#ddd] rounded-[0.3rem] w-1/2 h-[2.15rem]"
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-lg">{valores.segundo}</span>
          <input
            type="text"
            className="border-2 border-[#ddd] rounded-[0.3rem] w-1/2 h-[2.15rem]"
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-lg">{valores.terceiro}</span>
          <input
            type="text"
            className="border-2 border-[#ddd] rounded-[0.3rem] w-1/2 h-[2.15rem]"
          />
        </div>
        {valores.quarto !== "" ? <div className="flex justify-between items-center">
          <span className="text-lg">{valores.quarto}</span>
          <input
            type="text"
            className="border-2 border-[#ddd] rounded-[0.3rem] w-1/2 h-[2.15rem]"
          />
        </div> : null}
        
        <div className="flex justify-between bg-[#fdf2e5] p-3 rounded-[0.3rem]">
          <span className="text-lg">Tamanho da amostra (n)</span>
          <span className="text-lg">x ==&gt; y</span>
        </div>
      </div>
    </section>
  )
}
