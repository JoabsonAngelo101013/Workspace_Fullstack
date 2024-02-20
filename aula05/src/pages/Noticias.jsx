import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Noticias = () => {
    
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/noticias')
        .then(response => {
            setNoticias(response.data);
        })
        .catch(error => console.error("There was an error!", error));
    },[]);
    
  return (
    <>
    <h1>Lista das notícias</h1>
      {
      noticias.map(item => (     
      <a href={`/Visualizar-noticia/${item.id}`}> <h2 key={item.id}>{item.titulo}</h2> </a>
      
     ))
     }
   </>
  )
}

export default Noticias