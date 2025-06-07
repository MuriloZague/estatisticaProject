import { useState, type ChangeEvent, type SetStateAction, type Dispatch } from "react";
import Modal from "react-modal";


//nao olhe diretamente para esse lugar
interface AmostraValor {
  setPrimeiro: Dispatch<SetStateAction<string>>;
  setSegundo: Dispatch<SetStateAction<string>>;
  setTerceiro: Dispatch<SetStateAction<string>>;
  setQuarto: Dispatch<SetStateAction<string>>;
  primeiroValor: string;
  segundoValor: string;
  terceiroValor: string;
  quartoValor: string;
  title: string;
  primeiro: string;
  segundo: string;
  terceiro: string;
  quarto: string;
  media: Boolean;
}

export default function Erro(valores: AmostraValor) {

  const [resultadoProporcao, setResultadoProporcao] = useState(0)
  const [resultadoMedia, setResultadoMedia] = useState(0)

  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const setValores = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    setValor: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const entrada = e.target.value.replace(',', '.');
    setValor(entrada);
  };

  const calculoAmostraMedia = (zStr: string, desvStr: string, erroStr: string) => {
    const z = parseFloat(zStr);
    const desv = parseFloat(desvStr);
    const erro = parseFloat(erroStr);

    if (isNaN(z) || isNaN(desv) || isNaN(erro)) {
      openModal()
      return;
    }

    let tamanhoAmostra = (z * desv / erro)**2;
    setResultadoMedia(Number(tamanhoAmostra.toFixed(2)));
  }

  const calculoAmostraProporcao = (zStr: string, pStr: string, erroStr: string) => {
    const z = parseFloat(zStr);
    const p = parseFloat(pStr);
    const erro = parseFloat(erroStr);

    if (isNaN(z) || isNaN(p) || isNaN(erro)) {
      openModal()
      return;
    }

    const tamanhoAmostra = (z * z * p * (1 - p)) / (erro * erro);
    setResultadoProporcao(Number(tamanhoAmostra.toFixed(2)));
  }

  return (
    <section className="flex flex-col gap-3 p-3 rounded-lg card border-2 border-[#ddddddb2] bg-white mt-4">
      <h1 className="text-[1.4rem] font-medium">{valores.title}</h1>
      <hr />
      <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Example Modal"
              className="modal-content"
              overlayClassName="modal-overlay"
            >
              <p className="text-2xl font-bold text-center mb-8">Preencha os campos corretamente!</p>
              <button onClick={closeModal} className="bg-[#fce5cb] w-full rounded-xl p-3 hover:bg-[#ecd0af] transition-colors duration-200">Ok</button>
            </Modal>
      <div className="flex flex-col gap-2 mt-2">
        <div className="flex justify-between items-center">
          <div className="w-1/2">
          <span className="text-lg">{valores.primeiro}</span>
          </div>
          <div className="w-1/4">
            <select
              className="px-2 border-2 border-[#ddd] rounded-[0.3rem] h-[2.15rem]"
              onChange={(e) => setValores(e, valores.setPrimeiro)}
            >
              <option value="">- Selecione -</option>
              <option value={1.645}>90%</option>
              <option value={1.96}>95%</option>
              <option value={2.575}>99%</option>
            </select>
          </div>
          <span className="text-right w-1/4">{valores.media ? parseFloat(valores.primeiroValor) == 0 ? null : valores.primeiroValor : parseFloat(valores.primeiroValor) == 0 ? null : valores.primeiroValor}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-lg">{valores.segundo}</span>
          <input
            type="text"
            className="px-2 border-2 border-[#ddd] rounded-[0.3rem] w-1/2 h-[2.15rem]"
            onChange={(e) => setValores(e, valores.setSegundo)}
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-lg">{valores.terceiro}</span>
          {valores.media ?
            <span className="border-2 border-[#ddd] rounded-[0.3rem] w-1/2 h-[2.15rem] px-2 flex items-center">{valores.segundoValor ? (1 - parseFloat(valores.segundoValor)) : null}</span>
            :
            <input
              type="text"
              className="px-2 border-2 border-[#ddd] rounded-[0.3rem] w-1/2 h-[2.15rem]"
              onChange={(e) => setValores(e, valores.setTerceiro)}
            />
          }
        </div>
        {valores.quarto !== ""
          ?
          <div className="flex justify-between items-center mb-3">
            <span className="text-lg">{valores.quarto}</span>
            <input
              type="text"
              className="px-2 border-2 border-[#ddd] rounded-[0.3rem] w-1/2 h-[2.15rem]"
              onChange={(e) => setValores(e, valores.setQuarto)}
            />
          </div>
          :
          null}

        <div className="flex justify-between bg-[#fce5cb] p-3 rounded-[0.3rem]">
          <span className="text-lg">Tamanho da amostra (n)</span>
          <span className="text-lg">
            {!valores.media
              ? resultadoMedia === 0
                ? 'x ==> y'
                : <span className="text-xl font-bold">{resultadoMedia} ==&gt; {Math.ceil(resultadoMedia)}</span>
              : resultadoProporcao === 0
                ? 'x ==> y'
                : <span className="text-xl font-bold">{resultadoProporcao} ==&gt; {Math.ceil(resultadoProporcao)}</span> 
            } {/* perguntar para professora se resultado pode ser menor que 0 na proporcao */}
          </span>
        </div>
        <div>
          <button
            className="bg-[#fce5cb] p-3 px-8 rounded-[0.3rem] cursor-pointer hover:bg-[#ecd0af] transition-colors duration-200"
            onClick={() =>
              valores.media
                ? calculoAmostraProporcao(valores.primeiroValor, valores.segundoValor, valores.quartoValor)
                : calculoAmostraMedia(valores.primeiroValor, valores.segundoValor, valores.terceiroValor)}>
            Calcular
          </button>
        </div>
      </div>
    </section>
  )
}