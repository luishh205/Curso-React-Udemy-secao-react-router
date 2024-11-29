import React from "react";
import { useParams } from "react-router-dom";
import { url } from "../services/url";
import { useFetch } from "../hooks/useFetch";

const Info = () => {
  const { id } = useParams();
  const { data: product, error, loading } = useFetch(`${url}products/${id}`);

  console.log(product); // Para entender o formato retornado

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      {error && <p>{error}</p>}
      <h1>Mais informações sobre o produto: {id}</h1>

      {product && !Array.isArray(product) && (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Preço: R$ {product.price}</p>
          <p>Obs: {product.info}</p>
        </div>
      )}
    </div>
  );
};

export default Info;
