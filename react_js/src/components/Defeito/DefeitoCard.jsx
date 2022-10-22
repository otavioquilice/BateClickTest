export default function DefeitoCard(props){

    const excluirDefeito = (id) => {

        // //Cadastra um Carro
        // axios.delete(`http://127.0.0.1:8000/api/carros/`+id, {
        //     'headers': {
        //         'Accept': 'Application/json'
        //     },
        // }).then((exclusao) => {
        //     console.log(exclusao)
        // }).catch(() => {
        //     console.log('deu erro')
        // });
    }

    return (
        <tr>
            <td>#</td>
            <td>{props.defeito.modelo}/{props.defeito.ano}/{props.defeito.fabricante}</td>
            <td>{props.defeito.defeito}</td>
            <td><button type="button">Editar</button>/<button type="button" onClick={excluirDefeito(props.defeito.id)}>Excluir</button></td>
        </tr>
    );
}