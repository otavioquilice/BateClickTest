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

    const preencherEditar = (carro) => {setCarroEdit(carro)};

    useEffect(() =>{

        //Busca todos os carros na api
        axios.get(`http://127.0.0.1:8000/api/carros`, {
            'headers': {
            'Accept': 'Application/json'
            }
        }).then((Carros) => {
            setAllCarros(Carros.data);
        }).catch(() => {
            console.log('deu erro')
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

        }).catch(() => {

            alert('Não foi possivel cadastrar o carro')
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
        }).catch(() => {
            console.log('deu erro')
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

        }).catch(() => {

            alert('Não foi possivel cadastrar o carro')
        });
    }

    

    return(
        <>
            <CarroCadastro cadastrar={cadastrarCarro} carroEdit={CarroEdit} updateCarro={updateCarro} />
            <TabelaCarro excluir={excluirCarro} carros={Carros} preencherEditar={preencherEditar}/>
        </>
    )

}