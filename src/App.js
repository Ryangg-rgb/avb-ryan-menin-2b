import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CatFact from "./pages/CatFact";

export default function App() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <nav className="flex gap-4 mb-6 text-blue-600">
        <Link to="/">Home</Link>
        <Link to="/catfact">Cat Fact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catfact" element={<CatFact />} />
      </Routes>
    </div>
  );
}