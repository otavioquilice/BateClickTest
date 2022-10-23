import CarroCadastro from "../../components/Carro/CarroCadastro";
import TabelaCarro from "../../components/TabelaCarro/Index";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function DefeitoPage(props){

    const [Carros, setAllCarros] = useState([]);
    const [CarroEdit, setCarroEdit] = useState({
        id:'',
        modelo:'',
        ano:'',
        fabricante:'',
        preco:''
    });

    const preencherEditar = (carro) => {
        setCarroEdit(carro);
        alert(carro.modelo+':'+carro.ano+':'+carro.fabricante+':'+carro.preco);
        
    };

    useEffect(() =>{

        //Busca todos os carros na api
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

    const cadastrarCarro = (modelo, ano, fabricante, preco) => {
        
        // Cadastra um Carro
        axios.post(`http://127.0.0.1:8000/api/carros`, {
            'headers': {
            'Accept': 'Application/json'
            },
            'modelo':modelo,
            'ano':ano,
            'fabricante':fabricante,
            'preco':preco,
        }).then((cadastro) => {
            setAllCarros([...Carros, cadastro.data])

        }).catch(function (error) {
            
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                alert(error.response.data.message +' / '+error.response.data);
              } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
              }
              console.log(error.config);
          });
    }

    const excluirCarro = (id) => {

        // Cadastra um Carro
        axios.delete(`http://127.0.0.1:8000/api/carros/`+id, {
            'headers': {
                'Accept': 'Application/json'
            },
        }).then((Carros) => {
            setAllCarros(Carros.data);
        }).catch(function (error) {
            
            if (error.response) {
              console.log(error.response.data);
              alert(error.response.data.message);
            }
          });
    }

    const updateCarro = (modelo, ano, fabricante, preco, id) => {
        
        // Cadastra um Carro
        axios.post(`http://127.0.0.1:8000/api/carros`, {
            'headers': {
            'Accept': 'Application/json'
            },
            'modelo':modelo,
            'ano':ano,
            'fabricante':fabricante,
            'preco':preco,
            'id':id 
        }).then((cadastro) => {
            setAllCarros([...Carros, cadastro.data])

        }).catch(function (error) {
            
            if (error.response) {
              console.log(error.response.data);
              alert(error.response.data.message);
            }
          });
    }

    

    return(
        <>
            <CarroCadastro cadastrar={cadastrarCarro} carroEdit={CarroEdit} updateCarro={updateCarro}  />
            <TabelaCarro excluir={excluirCarro} carros={Carros} preencherEditar={preencherEditar}/>
        </>
    )

}