import React from 'react'
import { useSearchParams, Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { url } from '../services/url';

const Search = () => {

const [searchParms] = useSearchParams();

const Url = url + "products?" + searchParms;
 console.log(Url)
const {data: items, error} = useFetch(Url);

  return (
    <div>
      <h1>Resultados disponiveis</h1>
      {error && <p>{error}</p>}
      <ul className="products">
        {items && items.map(item =>(
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>R$: {item.price}</p>
            <Link to={`/products/${item.id}`}>Detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Search
