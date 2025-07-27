import React, { useState } from "react";
import "./index.css";

function App() {
  const [valor, setValor] = useState("");
  const [moedaOrigem, setMoedaOrigem] = useState("BRL");
  const [moedaDestino, setMoedaDestino] = useState("USD");
  const [resultado, setResultado] = useState(null);

  async function converter() {
    if (!valor) {
      alert("Digite um valor para converter");
      return;
    }

    const amount = Number(valor);
    if (isNaN(amount) || amount <= 0) {
      alert("Digite um valor válido maior que zero");
      return;
    }

    const url = `https://api.frankfurter.app/latest?amount=${amount}&from=${moedaOrigem}&to=${moedaDestino}`;

    try {
      const resposta = await fetch(url);
      const dados = await resposta.json();

      const convertido = dados.rates[moedaDestino];

      if (convertido !== undefined) {
        setResultado(convertido);
      } else {
        alert("Não foi possível obter o resultado da conversão");
        setResultado(null);
      }
    } catch (error) {
      console.error("Erro na conversão:", error);
      alert("Erro ao tentar converter");
      setResultado(null);
    }
  }

  return (
    <div className="card">
      <h1>Conversor de Moedas</h1>

      <input
        type="number"
        placeholder="Digite o valor"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />

      <p>Você digitou: {valor}</p>

      <select
        value={moedaOrigem}
        onChange={(e) => setMoedaOrigem(e.target.value)}
      >
        <option value="BRL">Real BRL</option>
        <option value="USD">Dólar USD</option>
        <option value="EUR">Euro EUR</option>
        <option value="JPY">Iene JPY</option>
        <option value="ARS">Peso Argentino ARS</option>
        <option value="CNY">Yuan CNY</option>
        <option value="CHF">Franco Suíço CHF</option>
        <option value="CAD">Dólar Canadense CAD</option>
        <option value="GBP">Libra Esterlina GBP</option>
        <option value="TRY">Lira Turca TRY</option>
      </select>

      <select
        value={moedaDestino}
        onChange={(e) => setMoedaDestino(e.target.value)}
      >
        <option value="BRL">Real BRL</option>
        <option value="USD">Dólar USD</option>
        <option value="EUR">Euro EUR</option>
        <option value="JPY">Iene JPY</option>
        <option value="ARS">Peso Argentino ARS</option>
        <option value="CNY">Yuan CNY</option>
        <option value="CHF">Franco Suíço CHF</option>
        <option value="CAD">Dólar Canadense CAD</option>
        <option value="GBP">Libra Esterlina GBP</option>
        <option value="TRY">Lira Turca TRY</option>
      </select>

      <button onClick={converter}>Converter</button>

      <p className="resultado">
        {resultado !== null
          ? `Resultado: ${resultado.toFixed(2)} ${moedaDestino}`
          : "Resultado"}
      </p>
    </div>
  );
}

export default App;
