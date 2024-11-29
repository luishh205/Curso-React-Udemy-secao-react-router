import React from 'react'
import { url } from '../services/url';
import {useState} from 'react';
import { useFetch } from '../hooks/useFetch';
import './Cadastro.css';

const Cadastro = () => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [info, setInfo] = useState("");

    const { data: items, httpConfig, loading, error } = useFetch(url + "products");


    const handleSubmit = async (e) =>{
        e.preventDefault();
      
        const product = {
          name, price
        };
      
        httpConfig(product, "POST") 
      
        setName("");
        setPrice("");
        setInfo("");
      };

      const handleDelete = async (id) =>{
        console.log(id);
        httpConfig(id,"DELETE");
      };

  return (
    <div className='Cadastro'>
       {loading && <p>Carregando dados!!</p>}
        {error && <p>{error}</p>}
        {!error && (
           <ul>
           {items &&
             items.map((products) => (
               <div key={products.id}>
                 <li>
                   {products.name} - RS: {products.price}{" "}
                   <button onClick={() => handleDelete(products.id)}>Excluir</button>
                 </li>
               </div>
             ))}
         </ul>
        )}
        <div className="add-product">
            <form onSubmit={handleSubmit}>
                <label>
                Nome:
                <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                Preço:
                <input type="number" value={price} price="price" onChange={(e) => setPrice(e.target.value)} />
                </label>
                <label>
                Info:
                <input type="text" value={info} info="info" onChange={(e) => setInfo(e.target.value)} />
                </label>
                {loading && <input type="submit" disabled value="Aguarde"/>}
                {!loading && <input type="submit" value="Criar"/>}
            </form>
        </div>
    </div>
  )
}

export default Cadastro
