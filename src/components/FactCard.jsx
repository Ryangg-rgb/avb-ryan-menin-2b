import React from "react";

export default function FactCard({ text }) {
  return (
    <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 shadow">
      <p className="text-lg">{text}</p>
    </div>
  );
}