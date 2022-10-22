import React from 'react';
import "./defeitoCadastro.css"

export default function DefeitoCadastro(){
    return (
        <nav className="defeitoCadastro">
            <span>FORMULÁRIO CADASTRO DEFEITO</span>
            <form>
                <label>
                    Carro:
                    <select name="modelo">
                        <option value="">Teste1</option>
                        <option value="">Teste2</option>
                        <option value="">Teste3</option>
                    </select>
                </label>
                <label>
                    Defeito:
                    <input type="text" name="ano" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </nav>
    );
}