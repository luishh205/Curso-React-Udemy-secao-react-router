import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { url } from "../services/url.js";

const Product = () => {

const { id } = useParams();

const { data: product, loading, error } = useFetch(url + "products/" + id);


  return (
    <div>
        <p>Id do produto {id}</p>
        {error && <p>Ocorreu um erro...</p>}
        {loading && <p>Carregando...</p>}
        {product && (
            <div>
                <h1>{product.name}</h1>
                <p>R$: {product.price}</p>

                 <Link to={`/products/${product.id}/info`} >Mais informações</Link>
            </div>
        )}
    </div>
  )
}

export default Product