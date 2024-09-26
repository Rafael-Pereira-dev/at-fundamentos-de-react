import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditarHotel() {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const hoteis = JSON.parse(localStorage.getItem("@hoteis")) || [];
    const hotelEncontrado = hoteis.find((h) => h.id === parseInt(id));
    setHotel(hotelEncontrado);
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHotel({ ...hotel, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hoteis = JSON.parse(localStorage.getItem("@hoteis")) || [];
    const index = hoteis.findIndex((h) => h.id === hotel.id);
    hoteis[index] = hotel;
    localStorage.setItem("@hoteis", JSON.stringify(hoteis));
    navigate("/");
  };

  if (!hotel) return <div>Carregando...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="nome"
        value={hotel.nome}
        onChange={handleInputChange}
        placeholder="Nome do hotel"
      />
      <input
        name="imagem"
        value={hotel.imagem}
        onChange={handleInputChange}
        placeholder="URL da imagem"
      />
      <input
        name="estrelas"
        type="number"
        value={hotel.estrelas}
        onChange={handleInputChange}
        placeholder="Estrelas"
      />
      <input
        name="cidade"
        value={hotel.cidade}
        onChange={handleInputChange}
        placeholder="Cidade"
      />
      <input
        name="estado"
        value={hotel.estado}
        onChange={handleInputChange}
        placeholder="Estado"
      />
      <input
        name="diaria"
        value={hotel.diaria}
        onChange={handleInputChange}
        placeholder="Preço da diária"
      />
      <textarea
        name="servicos"
        value={hotel.servicos}
        onChange={handleInputChange}
        placeholder="Descrição dos serviços"
      />
      <button type="submit">Salvar Alterações</button>
    </form>
  );
}

export default EditarHotel;
