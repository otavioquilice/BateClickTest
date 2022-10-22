import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import BotaoCadastrar from './components/BotaoCadastrar/BotaoCadastrar';
import CarroCadastro from './components/Carro/CarroCadastro';
import CarroCard from './components/Carro/CarroCard';
import DefeitoCadastro from './components/Defeito/DefeitoCadastro';
import DefeitoCard from './components/Defeito/DefeitoCard';
import axios from 'axios';

function App() {

  const [Carros, setAllCarros] = useState();
  const [Defeitos, setAllDefeitos] = useState();

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/carros`, {
      'headers': {
        'Accept': 'Application/json'
      }
    }).then((Carros) => {
      setAllCarros(Carros.data);
    }).catch(() => {
      console.log('deu erro')
    });

    axios.get(`http://127.0.0.1:8000/api/defeitos`, {
      'headers': {
        'Accept': 'Application/json'
      }
    }).then((Defeitos) => {
      setAllDefeitos(Defeitos.data);
    }).catch(() => {
      console.log('deu erro')
    });

  }, [])

  const [formDefeito, setFormDefeito] = useState(false);
  const [formCarro, setFormCarro] = useState(false);

  const changeFormDefeito = () => {

    setFormDefeito(true);
    setFormCarro(false);
  }
  const changeFormCarro = () => {

    setFormDefeito(false);
    setFormCarro(true);
  }


  return (
    <div className="App">
      <header className="App-header">
        < NavBar />
      </header>
      <div>
        < BotaoCadastrar click_btn={changeFormCarro} title='Crud Carros' />
        < BotaoCadastrar click_btn={changeFormDefeito} title='Crud Defeitos' />
      </div>
      <br></br>
      <div>
        <div>

          {formCarro && <CarroCadastro />}

          {formDefeito && <DefeitoCadastro />}
        </div>

        <div>
          {formCarro && 
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
                {formCarro && Carros?.map((carro) => {
                  return <CarroCard
                    modelo={carro.modelo}
                    ano={carro.ano}
                    fabricante={carro.fabricante}
                    preco={carro.preco}
                  />
                })}
              </tbody>
            </table>
          }
        </div>

        <div>
          {formDefeito && 
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
                {formDefeito && Defeitos?.map((defeito) => {
                  return <DefeitoCard
                    defeito={defeito.defeito}
                  />
                })}
              </tbody>
            </table>
          }
        </div>

      </div>

    </div>
  );
}

export default App;
