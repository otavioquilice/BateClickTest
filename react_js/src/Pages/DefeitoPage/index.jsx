import DefeitoCadastro from "../../components/Defeito/DefeitoCadastro";
import TabelaDefeito from "../../components/TabelaDefeito/Index";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function DefeitoPage(props){

    const [Defeitos, setAllDefeitos] = useState([]);
    const [Carros, setAllCarros] = useState([]);

    const [idCarro, setIdCarro] = useState('');
    const [defeito, setDefeito] = useState('');
    const [id, setId] = useState('');

    const preencherEditar = (defeito) => {

        setIdCarro(defeito.id_carro);
        setDefeito(defeito.defeito);
        setId(defeito.id);
        
    };
    

    useEffect(() =>{

        //Busca todos os defeitos na api
        axios.get(`http://127.0.0.1:8000/api/defeitos`, {
            'headers': {
            'Accept': 'Application/json'
            }
        }).then((Defeitos) => {
            setAllDefeitos(Defeitos.data);
        }).catch(function (error) {
            
            if (error.response) {
              console.log(error.response.data);
              alert(error.response.data.message);
            }
          });

        //Busca todos os Carros na api
        axios.get(`http://127.0.0.1:8000/api/carros`, {
            'headers': {
            'Accept': 'Application/json'
            }
        }).then((Carros) => {
            setAllCarros(Carros.data);
        }).catch(function (error) {
            
            if (error.response) {
              console.log(error.response.data);
              alert(error.response.data.message);
            }
          });

    },[])

    const cadastrarDefeito = (id_carro, defeito) => {
        
        // Cadastra um Defeito
        axios.post(`http://127.0.0.1:8000/api/defeitos`, {
            'headers': {
                'Accept': 'Application/json'
            },
            'id_carro':id_carro,
            'defeito':defeito,
        }).then((cadastro) => {
            setAllDefeitos([...Defeitos, cadastro.data])

        }).catch(function (error) {
            
            if (error.response) {
              console.log(error.response.data);
              alert(error.response.data.message);
            }
          });
    }

    const updateDefeito = (id, id_carro, defeito) => {
        
        // Cadastra um Carro
        axios.put(`http://127.0.0.1:8000/api/defeitos/update`, {
            'headers': {
            'Accept': 'Application/json'
            },
            'id_carro':id_carro,
            'defeito':defeito,
            'id':id 
        }).then((Defeitos) => {
            setAllDefeitos(Defeitos.data);

        }).catch(function (error) {
            
            if (error.response) {
              console.log(error.response.data);
              alert(error.response.data.message);
            }
          });
    }

    const excluirDefeito = (id) => {

        // Cadastra um Carro
        axios.delete(`http://127.0.0.1:8000/api/defeitos/`+id, {
            'headers': {
                'Accept': 'Application/json'
            },
        }).then((Defeitos) => {
            setAllDefeitos(Defeitos.data);
        }).catch(function (error) {
            
            if (error.response) {
              console.log(error.response.data);
              alert(error.response.data.message);
            }
          });
    }

    return(
        <>
            <DefeitoCadastro  carros={Carros} cadastrar={cadastrarDefeito} idCarro={idCarro} setIdCarro={setIdCarro} defeito={defeito} setDefeito={setDefeito} id={id} setId={setId} updateDefeito={updateDefeito}/>
            <TabelaDefeito excluir={excluirDefeito} defeitos={Defeitos} preencherEditar={preencherEditar}/>
        </>
    )

}