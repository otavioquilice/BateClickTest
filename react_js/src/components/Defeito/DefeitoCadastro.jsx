import React, {  } from 'react';
import "./defeitoCadastro.css"

export default function DefeitoCadastro(props){


    return (
        <nav className="defeitoCadastro">
            <span>FORMULÁRIO CADASTRO DEFEITO</span>
            <form>
                <label>
                    Carro:
                    <select name="id_carro" value={props.idCarro} onChange={(e) => {e.preventDefault(); props.setIdCarro(e.target.value)}}>
                        <option value="" selected disabled hidden>Escolha um carro</option>
                        {
                            props.carros?.map((carro, props) => {
                                return ( 
                                    <option value={carro.id} >
                                        {carro.modelo}/{carro.ano}/{carro.fabricante}
                                    </option>
                                )
                            })
                        }
                        {/* { props.id && <option value={props.idCarro} selected disabled hidden>Escolha um carro</option> } */}
                    </select>
                </label>
                <label>
                    Defeito:
                    <input type="text" name="defeito" value={props.defeito} onChange={(e) => {props.setDefeito(e.target.value)}} />
                </label>
                <input type="hidden" name="id" value={props.id} onChange={(e) => {props.setId(props.id)}} />

                <input type="button" onClick={(event) => {
                        event.preventDefault();
                        props.cadastrar(props.idCarro, props.defeito)
                    }
                } value="Cadastrar" />
                <input type="button" onClick={(event) => {
                        event.preventDefault();
                        props.updateDefeito(props.id, props.idCarro, props.defeito)
                    } 
                } value="Confirmar Edição" />
            </form>
            <br></br>
            <br></br>
        </nav>
    );
}