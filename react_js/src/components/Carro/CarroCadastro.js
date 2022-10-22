import React, { useState } from 'react';
import "./carroCadastro.css"

export default function CarroCadastro(){

    const [modelo, setModelo] = useState('');
    const [ano, setAno] = useState('');
    

    return (
        <nav className="carroCadastro">
            <span>FORMULÁRIO CADASTRO CARRO</span>
            <form>
                <label>
                    Modelo:
                    <input type="text" name="modelo" value={modelo} onChange={(e) => {setModelo(e.target.value)}} />
                </label>
                <label>
                    Ano:
                    <input type="text" name="ano" value={ano} onChange={(e) => {setAno(e.target.value)}}/>
                </label>
                <label>
                    Fabricante:
                    <input type="text" name="fabricante" />
                </label>

                <label>
                    Preço:
                    <input type="float" name="preco" />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <br></br>
            <br></br>
        </nav>
    );
}