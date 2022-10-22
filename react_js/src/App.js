import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import BotaoCadastrar from './components/BotaoCadastrar/BotaoCadastrar';


import CarroPage from './Pages/CarroPage';
import DefeitoPage from './Pages/DefeitoPage';

function App() {


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

          {formCarro && <CarroPage />}

          {formDefeito && <DefeitoPage />}
        </div>

        <br></br>
      </div>

    </div>
  );
}

export default App;
