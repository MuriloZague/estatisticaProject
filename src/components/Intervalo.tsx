import { useState, type ChangeEvent, type SetStateAction, type Dispatch } from "react";
import Modal from "react-modal";

//ignorar nomes de variaveis, nao sou bom nisso
export interface IntervaloValor {
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
  quinto: string;
  media: Boolean;
}

export default function Intervalo(valores: IntervaloValor) {

  const setValores = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    setValor: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const entrada = e.target.value.replace(',', '.');
    setValor(entrada);
  };

  const [resultadoProporcao, setResultadoProporcao] = useState(0)
  const [resultadoMedia, setResultadoMedia] = useState(0)

  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const intervaloConfiancaProporcao = (umStr: string, doisStr: string, tresStr: string) => {
    const um = parseFloat(umStr);
    const dois = parseFloat(doisStr);
    const tres = parseFloat(tresStr);

    if (isNaN(um) || isNaN(dois) || isNaN(tres) || um <= 0 || um >= 1 || dois <= 0 || tres <= 0) {
      openModal()
      return;
    }
    const resultado = (tres * Math.sqrt((um * (1 - um)) / dois)).toFixed(2);
    setResultadoProporcao(Number(resultado));
  }

  const intervaloConfiancaMedia = (umStr: string, doisStr: string, tresStr: string) => {
    const um = parseFloat(umStr);
    const dois = parseFloat(doisStr);
    const tres = parseFloat(tresStr);

    if (isNaN(um) || isNaN(dois) || isNaN(tres) || dois <= 0) { //algumas variavéis podem ser menores que 1. !! PERGUNTAR PARA A PROFESSORA SE PODEM SER MENORES OU IGUAIS A ZERO !!
      openModal();
      return;
    }
    const resultado = (tres * (um / Math.sqrt(dois))).toFixed(2);
    setResultadoMedia(Number(resultado));
  };

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
          <span className="text-lg">{valores.primeiro}</span>
          <input
            type="text"
            className="border-2 border-[#ddd] rounded-[0.3rem] w-1/2 h-[2.15rem] px-2"
            onChange={(e) => setValores(e, valores.setPrimeiro)}
          />
        </div>
        {valores.media ?
          <div className="flex justify-between items-center">
            <span className="text-lg">{valores.segundo}</span>
            <input
              type="text"
              className="border-2 border-[#ddd] rounded-[0.3rem] w-1/2 h-[2.15rem] px-2"
              onChange={(e) => setValores(e, valores.setQuarto)}
            />
          </div>
          :
          <div className="flex justify-between items-center">
            <span className="text-lg">{valores.segundo}</span>
            <span className="border-2 border-[#ddd] rounded-[0.3rem] w-1/2 h-[2.15rem] px-2 flex items-center">{valores.primeiroValor ? (1 - parseFloat(valores.primeiroValor)) : null}</span>
          </div>
        }
        <div className="flex justify-between items-center">
          <span className="text-lg">{valores.terceiro}</span>
          <input
            type="text"
            className="border-2 border-[#ddd] rounded-[0.3rem] w-1/2 h-[2.15rem] px-2"
            onChange={(e) => setValores(e, valores.setSegundo)}
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
                onChange={(e) => setValores(e, valores.setTerceiro)}
              >
                <option value="">- Selecione -</option>
                <option value={1.645}>90% &gt; 0,10</option>
                <option value={1.96}>95% &gt; 0,05</option>
                <option value={2.575}>99% &gt; 0,01</option>
              </select>
              :
              <select
                className="px-2 border-2 border-[#ddd] rounded-[0.3rem] h-[2.15rem]"
                onChange={(e) => setValores(e, valores.setTerceiro)}
              >
                <option value="">- Selecione -</option>
                <option value={1.645}>90%</option>
                <option value={1.96}>95%</option>
                <option value={2.575}>99%</option>
              </select>
            }
          </div>
          <span className="w-1/4 text-right">{valores.media ? parseFloat(valores.terceiroValor) == 0 ? null : valores.terceiroValor : parseFloat(valores.terceiroValor) == 0 ? null : valores.terceiroValor}</span>
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
                : `${(parseFloat(valores.primeiroValor) - resultadoMedia).toFixed(2)} < π < ${(parseFloat(valores.primeiroValor) + resultadoMedia).toFixed(2)}`
              : resultadoProporcao === 0
                ? 'x < π < y'
                : `${(parseFloat(valores.primeiroValor) - resultadoProporcao).toFixed(2)} < π < ${(parseFloat(valores.primeiroValor) + resultadoProporcao).toFixed(2)}`
            }
          </span>
        </div>
        <div>
          <button
            className="bg-[#fce5cb] p-3 px-8 rounded-[0.3rem] cursor-pointer hover:bg-[#ecd0af] transition-colors duration-200"
            onClick={() =>
              valores.media
                ? intervaloConfiancaMedia(valores.quartoValor, valores.segundoValor, valores.terceiroValor)
                : intervaloConfiancaProporcao(valores.primeiroValor, valores.segundoValor, valores.terceiroValor)}>
            Calcular
          </button>
        </div>
      </div>
    </section>
  );
}