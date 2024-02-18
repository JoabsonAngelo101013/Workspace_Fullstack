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
    <div>
    {alunos.map(item => (
      
      <p key={item.id}>{item.titulo}</p>
    
    ))}
  </div>
  )
}

export default Noticias