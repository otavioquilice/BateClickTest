import React, { useState } from 'react';
import "./carroCadastro.css"

export default function CarroCadastro(props){

    const [modelo, setModelo] = useState('');
    const [ano, setAno] = useState('');
    const [fabricante, setFabricante] = useState('');
    const [preco, setPreco] = useState('');
    const [id, setid] = useState('');
    
       
    return (
        <nav className="carroCadastro">
            <span>FORMULÁRIO CADASTRO CARRO</span>
            <form>
                <label>
                    Modelo:
                    <input type="text" name="modelo" value={modelo} onChange={(e) => {setModelo(e.target.value)}} />
                    {/* <input type="text" name="modelo" value={props.carroEdit.modelo} onChange={(e) => {setModelo(e.target.value)}} /> */}

                </label>
                <label>
                    Ano:
                    <input type="text" name="ano" value={ano} onChange={(e) => {setAno(e.target.value)}}/>
                    {/* <input type="text" name="ano" value={props.carroEdit.ano} onChange={(e) => {setAno(e.target.value)}}/> */}

                </label>
                <label>
                    Fabricante:
                    <input type="text" name="fabricante" value={fabricante} onChange={(e) => {setFabricante(e.target.value)}} />
                    {/* <input type="text" name="fabricante" value={props.carroEdit.fabricante} onChange={(e) => {setFabricante(e.target.value)}} /> */}

                </label>

                <label>
                    Preço:
                    <input type="float" name="preco" value={preco} onChange={(e) => {setPreco(e.target.value)}} />
                    {/* <input type="float" name="preco" value={props.carroEdit.preco} onChange={(e) => {setPreco(e.target.value)}} /> */}

                </label>
                
                <input type="hidden" name="id" value={props.carroEdit.id} onChange={(e) => {setid(e.target.value)}} />

                <input type="button" onClick={(event) => {
                        event.preventDefault();
                        props.cadastrar(modelo, ano, fabricante, preco)
                    }
                } value="Cadastrar" />
                <input type="button" onClick={(event) => {
                        event.preventDefault();
                        props.updateCarro(modelo, ano, fabricante, preco, id)
                    } 
                } value="Confirmar Edição" />
            </form>
            <br></br>
            <br></br>
        </nav>
    );
}
