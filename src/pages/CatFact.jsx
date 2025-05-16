import React, { useState, useEffect } from "react";
import axios from "axios";
import FactCard from "../components/FactCard";

export default function CatFact() {
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchFact = () => {
    setLoading(true);
    setError("");
    axios
      .get("https://catfact.ninja/fact")
      .then((res) => {
        setFact(res.data.fact);
      })
      .catch(() => {
        setError("Não foi possível obter o fato. Tente de novo.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(fetchFact, []);

  return (
    <div className="space-y-4">
      {loading && <p>Carregando...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && <FactCard text={fact} />}
      <button
        onClick={fetchFact}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Novo Fato
      </button>
    </div>
  );
}