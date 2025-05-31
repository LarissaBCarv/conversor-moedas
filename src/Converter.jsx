import { useState } from "react";

function Converter() {
  const [valor, setValor] = useState("");
  const [resultado, setResultado] = useState(null);
  const [moeda, setMoeda] = useState("dolar");

  function handleChange(event) {
    setValor(event.target.value);
  }

  function converter() {
    const numero = parseFloat(valor);

    if (isNaN(numero)) {
      setResultado("Digite um número válido");
      return;
    }

    const taxas = {
      won: 0.004,
      dolar: 5.683,
      euro: 6.132,
      libra: 7.348,
      peso: 0.005,
    };

    function formatarMoeda(valor) {
      return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    }

    const taxaSelecionada = taxas[moeda];
    const resultadoConvertido = formatarMoeda(numero * taxaSelecionada);
    setResultado(`${resultadoConvertido} (${moeda.toUpperCase()})`);
  }

  return (
    <div className="converter">
      <p className="converter-label">Qual valor deseja converter?</p>
      <input
        type="number"
        placeholder="Digite o valor"
        value={valor}
        onChange={handleChange}
      />

      <label htmlFor="moeda">Escolha a moeda:</label>
      <select
        id="moeda"
        value={moeda}
        onChange={(e) => setMoeda(e.target.value)}
      >
        <option value="dolar">Dólar</option>
        <option value="euro">Euro</option>
        <option value="libra">Libra</option>
        <option value="won">Won</option>
        <option value="peso">Peso Argentino</option>
      </select>

      <button onClick={converter}>Bora converter!</button>

      {resultado && <p className="resultado">{resultado}</p>}
    </div>
  );
}

export default Converter;
