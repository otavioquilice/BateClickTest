export default function CarroCard(props){
    
    return (
        <tr>
            <td>{props.carro.id}</td>
            <td>{props.carro.modelo}</td>
            <td>{props.carro.ano}</td>
            <td>{props.carro.fabricante}</td>
            <td>{props.carro.preco}</td>
            <td>
                <button type="button" onClick={(event) => { 
                    event.preventDefault();
                    props.preencherEditar(props.carro)
                }}>Editar</button>/
                <button type="button" onClick={(event) => { 
                    event.preventDefault();
                    props.excluir(props.carro.id)
                }}>Excluir</button>
            </td>
        </tr>
    );
}