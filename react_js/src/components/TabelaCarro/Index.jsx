import CarroCard from '../Carro/CarroCard';
export default function TabelaCarro(props){


    return (
        <table class="table">
              <thead>
                  <tr>
                  <th scope="col">#</th>
                  <th scope="col">Modelo</th>
                  <th scope="col">Ano</th>
                  <th scope="col">Fabricante</th>
                  <th scope="col">preço</th>
                  <th scope="col">Ações</th>
                  </tr>
              </thead>
              <tbody>
                {
                    props.carros?.map((carro) => {
                    return ( 
                        <CarroCard
                            excluir = {props.excluir}
                            carro={carro}
                            preencherEditar={props.preencherEditar}
                        />
                    )
                    })
                }  
            </tbody>
        </table>
    );
}