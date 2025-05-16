import React from "react";

export default function Home() {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-3xl font-bold">Bem-vindo!</h1>
      <p>Este mini-projeto consome fatos de gatos da API <code>catfact.ninja</code>.</p>
      <p>Clique em “Cat Fact” no menu para ver um fato aleatório.</p>
    </div>
  );
}