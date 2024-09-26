import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CadastroHotel() {
  const [hotel, setHotel] = useState({
    nome: "",
    imagem: "",
    estrelas: 1,
    cidade: "",
    estado: "",
    diaria: "",
    servicos: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHotel({ ...hotel, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hoteis = JSON.parse(localStorage.getItem("@hoteis")) || [];
    hotel.id = Date.now();
    hoteis.push(hotel);
    localStorage.setItem("@hoteis", JSON.stringify(hoteis));
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="nome"
        value={hotel.nome}
        onChange={handleInputChange}
        placeholder="Nome do hotel"
        required
      />
      <input
        name="imagem"
        value={hotel.imagem}
        onChange={handleInputChange}
        placeholder="URL da imagem"
        required
      />
      <input
        name="estrelas"
        type="number"
        value={hotel.estrelas}
        onChange={handleInputChange}
        placeholder="Estrelas"
        min="1"
        max="5"
        required
      />
      <input
        name="cidade"
        value={hotel.cidade}
        onChange={handleInputChange}
        placeholder="Cidade"
        required
      />
      <input
        name="estado"
        value={hotel.estado}
        onChange={handleInputChange}
        placeholder="Estado"
        required
      />
      <input
        name="diaria"
        value={hotel.diaria}
        onChange={handleInputChange}
        placeholder="Preço da diária"
        required
      />
      <textarea
        name="servicos"
        value={hotel.servicos}
        onChange={handleInputChange}
        placeholder="Descrição dos serviços"
        required
      />
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default CadastroHotel;
