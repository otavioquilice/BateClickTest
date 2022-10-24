import CarroCadastro from "../../components/Carro/CarroCadastro";
import TabelaCarro from "../../components/TabelaCarro/Index";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function DefeitoPage(props){

    const [modelo, setModelo] = useState('');
    const [ano, setAno] = useState('');
    const [fabricante, setFabricante] = useState('');
    const [preco, setPreco] = useState('');
    const [id, setId] = useState('');

    const [Carros, setAllCarros] = useState([]);

    const preencherEditar = (carro) => {

        setModelo(carro.modelo);
        setAno(carro.ano);
        setFabricante(carro.fabricante);
        setPreco(carro.preco);
        setId(carro.id);
        
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

    const updateCarro = (modelo, ano, fabricante, preco, id) => {
        
        // Cadastra um Carro
        axios.put(`http://127.0.0.1:8000/api/carros/update`, {
            'headers': {
            'Accept': 'Application/json'
            },
            'modelo':modelo,
            'ano':ano,
            'fabricante':fabricante,
            'preco':preco,
            'id':id 
        }).then((Carros) => {
            setAllCarros(Carros.data);

        }).catch(function (error) {
            
            if (error.response) {
              console.log(error.response.data);
              alert(error.response.data.message);
            }
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
              alert(error.response.data);
            }
          });
    }


    return(
        <>
            <CarroCadastro modelo={modelo} setModelo={setModelo} ano={ano} setAno={setAno}  preco={preco} setPreco={setPreco} fabricante={fabricante} setFabricante={setFabricante}  id={id} setid={setId}  cadastrar={cadastrarCarro} updateCarro={updateCarro}  />
            <TabelaCarro excluir={excluirCarro} carros={Carros} preencherEditar={preencherEditar}/>
        </>
    )

}