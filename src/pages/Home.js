import './Home.css';
import { Link } from 'react-router-dom';
//import { useEffect } from "react";
import { useFetch } from '../hooks/useFetch';
import { url } from '../services/url';
import SearchForm from '../components/SearchForm';

const Home = () => {

const {data: items, error} = useFetch(url + "products");

  return (
    <div>
      <SearchForm/>
      <h1>Produtos</h1>
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

export default Home