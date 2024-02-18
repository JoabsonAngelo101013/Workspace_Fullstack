import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';


const VisualizarNoticia = () => {

    const {id} = useParams ()

    const [noticia, setNoticia] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3000/noticias/${id}`)
        .then(response => {
            setNoticia(response.data);
        })
        .catch(error => console.error("There was an error!", error));
    },[]);

  return (
    <>
    <h1>Lista de Noticias</h1>
    {
        noticia.map(item => (
            <a href={`/visualizar-noticia/${item.id}`}> <h2 key={item.titulo} ></h2>{item.noticia}</a>
        ))
    }
    </>
  )
}

export default VisualizarNoticia