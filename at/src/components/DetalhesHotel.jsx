import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function DetalhesHotel() {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    const hoteis = JSON.parse(localStorage.getItem("@hoteis")) || [];
    const hotelEncontrado = hoteis.find((h) => h.id === parseInt(id));
    setHotel(hotelEncontrado);
  }, [id]);

  if (!hotel) {
    return <div>Hotel não encontrado</div>;
  }

  return (
    <div>
      <h1>{hotel.nome}</h1>
      <img src={hotel.imagem} alt={hotel.nome} className="img-detalhes" />
      <p>{hotel.descricao}</p>
      <p>
        {hotel.cidade}, {hotel.estado}
      </p>
      <p>R$ {hotel.diaria} / noite</p>
      <p>Itens e serviços: {hotel.servicos}</p>
    </div>
  );
}

export default DetalhesHotel;
