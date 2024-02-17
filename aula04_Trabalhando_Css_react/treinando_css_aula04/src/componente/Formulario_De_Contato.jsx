import React, { useState } from "react";
import style from './Formulario_De_Contato.module.css'

const Formulario_De_Contato = () => {
    const [nome, setNome] = useState("");
    const [contato, setContato] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [formulario, setFormulario] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const jsonToSend = JSON.stringify(formulario);
        console.log(`O seguinte JSON será enviado via HTTP POST para o back-end: ${jsonToSend}`);
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>

                <label>
                    Nome:
                    <input
                    type="text"
                    value={setNome.nome}
                    onChange={(e) => setNome.nome({ ...nome, nome: e.target.value })}
                    />
                </label>

                <label>
                    Contato:
                    <input
                    type="text"
                    value={setContato.contato}
                    onChange={(e) => setContato({ ...contato, contato: e.target.value })}
                    />
                </label>

                <label>
                    Mensagem:
                    <textarea
                    value={setMensagem.mensagem}
                    onChange={(e) => setMensagem({ ...mensagem, mensagem: e.target.value })}
                    />
                </label>
                <button onChange={(e) => setFormulario({...formulario, formulario: e.target.value})} type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Formulario_De_Contato;
