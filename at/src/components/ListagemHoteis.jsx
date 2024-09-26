import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ListagemHoteis() {
  const [hoteis, setHoteis] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    const hoteisSalvos = JSON.parse(localStorage.getItem("@hoteis")) || [];
    setHoteis(hoteisSalvos);
  }, []);

  const handleExcluir = (id) => {
    const novaLista = hoteis.filter((hotel) => hotel.id !== id);
    setHoteis(novaLista);
    localStorage.setItem("@hoteis", JSON.stringify(novaLista));
  };

  const hoteisFiltrados = hoteis.filter((hotel) =>
    hotel.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div>
      <h1 className="subtitulo">Lista de Hotéis</h1>
      <Link to="/cadastro" className="cadastro">
        Cadastrar novo Hotel
      </Link>
      <input
        type="text"
        placeholder="Buscar por nome"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        className="busca"
      />
      <div className="lista-hoteis">
        {hoteisFiltrados.map((hotel) => (
          <div key={hotel.id} className="hotel-card">
            <img src={hotel.imagem} alt={hotel.nome} />
            <h2>{hotel.nome}</h2>
            <p>{hotel.estrelas} estrelas</p>
            <p>
              {hotel.cidade}, {hotel.estado}
            </p>
            <p>R$ {hotel.diaria} / noite</p>
            <Link to={`/hotel/${hotel.id}`} className="detalhes">
              Ver Detalhes
            </Link>
            <Link to={`/editar/${hotel.id}`} className="editar">
              EDITAR
            </Link>
            <button onClick={() => handleExcluir(hotel.id)} className="excluir">
              EXCLUIR
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListagemHoteis;
