import DefeitoCard from '../Defeito/DefeitoCard';
export default function DefeitoCarro(props){



    return (
        <table class="table">
              <thead>
                  <tr>
                  <th scope="col">#</th>
                  <th scope="col">Modelo/Ano/Fabricante</th>
                  <th scope="col">Defeito</th>
                  <th scope="col">Ações</th>
                  </tr>
              </thead>
              <tbody>
                {
                    props.defeitos?.map((defeito) => {
                    return ( 
                        <DefeitoCard
                            excluir = {props.excluir}
                            defeito={defeito}
                            preencherEditar={props.preencherEditar}
                        />
                    )
                    })
                }  
            </tbody>
        </table>
    );
}