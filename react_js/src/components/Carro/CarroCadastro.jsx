import React, { } from 'react';
import "./carroCadastro.css"

export default function CarroCadastro(props){

    return (
        <nav className="carroCadastro">
            <span>FORMULÁRIO CADASTRO CARRO</span>
            <form>
                <label>
                    Modelo:
                    <input type="text" name="modelo" value={props.modelo} onChange={(e) => {props.setModelo(e.target.value)}} />
                </label>
                <label>
                    Ano:
                    <input type="number" min="1900" max="2099" step="1" name="ano" value={props.ano} onChange={(e) => {props.setAno(e.target.value)}}/>
                </label>
                <label>
                    Fabricante:
                    <input type="text" name="fabricante" value={props.fabricante} onChange={(e) => {props.setFabricante(e.target.value)}} />
                </label>

                <label>
                    Preço:
                    <input type="float" name="preco" value={props.preco} onChange={(e) => {props.setPreco(e.target.value)}} />
                </label>
                
                <input type="hidden" name="id" value={props.id} onChange={(e) => {props.setid(props.id)}} />
                <input type="button" onClick={(event) => {
                        event.preventDefault();
                        props.cadastrar(props.modelo, props.ano, props.fabricante, props.preco)
                    }
                } value="Cadastrar" />
                <input type="button" onClick={(event) => {
                        event.preventDefault();
                        props.updateCarro(props.modelo, props.ano, props.fabricante, props.preco, props.id)
                    } 
                } value="Confirmar Edição" />
            </form>
            <br></br>
            <br></br>
            
        </nav>
    );
}
