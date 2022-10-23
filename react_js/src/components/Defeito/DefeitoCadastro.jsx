import React, { useState } from 'react';
import "./defeitoCadastro.css"

export default function DefeitoCadastro(props){

    const [idCarro, setIdCarro] = useState('');
    const [defeito, setDefeito] = useState('');
    
    const updateDefeito = () => {
        alert('Função de atualizar')
    }

    return (
        <nav className="defeitoCadastro">
            <span>FORMULÁRIO CADASTRO DEFEITO</span>
            <form>
                <label>
                    Carro:
                    <select name="id_carro" onChange={(e) => {e.preventDefault(); setIdCarro(e.target.value)}}>
                    <option value="" selected disabled hidden>Escolha um carro</option>
                        {
                            props.carros?.map((carro) => {
                                return ( 
                                    
                                    <option value={carro.id}>{carro.modelo}/{carro.ano}/{carro.fabricante}</option>
                                )
                            })
                        }
                    </select>
                </label>
                <label>
                    Defeito:
                    <input type="text" name="defeito" value={defeito} onChange={(e) => {setDefeito(e.target.value)}} />
                </label>
                <input type="button" onClick={(event) => {
                        event.preventDefault();
                        props.cadastrar(idCarro, defeito)
                    }
                } value="Cadastrar" />
                <input type="button" onClick={updateDefeito} value="Editar" />
            </form>
            <br></br>
            <br></br>
        </nav>
    );
}