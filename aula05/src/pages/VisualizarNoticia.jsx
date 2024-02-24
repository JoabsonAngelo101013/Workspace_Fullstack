import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';


const VisualizarNoticia = () => {

    const { id } = useParams ()

    const [noticia, setNoticia] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3000/noticias/${id}`)
        .then(response => {
            setNoticia(response.data);
        })
        .catch(error => console.error("There was an error!", error))
    },[id]);

  return (
   <div>
        <h2>{noticia.titulo}</h2>
        <p>{noticia.noticia}</p>
   </div>
  )
}

export default VisualizarNoticia