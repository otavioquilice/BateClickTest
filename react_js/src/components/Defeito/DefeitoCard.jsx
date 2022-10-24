export default function DefeitoCard(props){
    return (
        <tr>
            <td>#</td>
            <td>{props.defeito.modelo}/{props.defeito.ano}/{props.defeito.fabricante}</td>
            <td>{props.defeito.defeito}</td>
            <td>
                <button type="button" onClick={(event) => { 
                    event.preventDefault();
                    props.preencherEditar(props.defeito)
                }}>Editar</button>/
                <button type="button" onClick={(event) => { 
                    event.preventDefault();
                    props.excluir(props.defeito.id)
                }}>Excluir</button>
            </td>
        </tr>
    );
}