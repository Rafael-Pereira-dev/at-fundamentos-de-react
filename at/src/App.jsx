import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListagemHoteis from "./components/ListagemHoteis";
import DetalhesHotel from "./components/DetalhesHotel";
import CadastroHotel from "./components/CadastroHotel";
import EditarHotel from "./components/EditarHotel";
import "./App.css";

function App() {
  const [tema, setTema] = useState("claro");

  useEffect(() => {
    const temaSalvo = localStorage.getItem("@tema") || "claro";
    setTema(temaSalvo);
  }, []);

  const alternarTema = () => {
    const novoTema = tema === "claro" ? "escuro" : "claro";
    setTema(novoTema);
    localStorage.setItem("@tema", novoTema);
  };

  return (
    <Router>
      <div className={`App ${tema}`}>
        <header>
          <h1 className="titulo">
            <span className="tri">Tri</span>
            <span className="ach">ach</span>
            <span className="ado">ado</span>
          </h1>
          <button onClick={alternarTema} className="tema">
            Alternar para Tema {tema === "claro" ? "Escuro" : "Claro"}
          </button>
        </header>
        <Routes>
          <Route path="/" element={<ListagemHoteis />} />
          <Route path="/hotel/:id" element={<DetalhesHotel />} />
          <Route path="/cadastro" element={<CadastroHotel />} />
          <Route path="/editar/:id" element={<EditarHotel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
