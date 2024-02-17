import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ListarProfessor = () => {
    const [professor, setProfessor] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/professor')
        .then(response => {
            setProfessor(response.data);
        })
        .catch(error => console.error("There was an error!", error));
    },[]);

  return (
    <div>
      {professor.map(item => (
        
        <p key={item.id}>{item.nome} - {item.email}</p>
      
      ))}
      
    </div>
  );
}

export default ListarProfessor
