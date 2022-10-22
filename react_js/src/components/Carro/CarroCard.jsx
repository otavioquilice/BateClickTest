export default function CarroCard(props){

    return (
        <tr>
            <td>#</td>
            <td>{props.modelo}</td>
            <td>{props.ano}</td>
            <td>{props.fabricante}</td>
            <td>------</td>
            <td>Excluir/Editar</td>
        </tr>
    );
}