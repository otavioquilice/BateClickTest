import DefeitoCadastro from "../../components/Defeito/DefeitoCadastro";
import TabelaDefeito from "../../components/TabelaDefeito/Index";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function DefeitoPage(props){

    const [Defeitos, setAllDefeitos] = useState([]);
    const [Carros, setAllCarros] = useState([]);
    

    useEffect(() =>{

        //Busca todos os defeitos na api
        axios.get(`http://127.0.0.1:8000/api/defeitos`, {
            'headers': {
            'Accept': 'Application/json'
            }
        }).then((Defeitos) => {
            setAllDefeitos(Defeitos.data);
        }).catch(() => {
            console.log('deu erro')
        });

        //Busca todos os Carros na api
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

        }).catch(() => {

            alert('Não foi possivel cadastrar o carro')
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
        }).catch(() => {
            console.log('deu erro')
        });
    }

    return(
        <>
            <DefeitoCadastro  carros={Carros} cadastrar={cadastrarDefeito} />
            <TabelaDefeito excluir={excluirDefeito} defeitos={Defeitos}/>
        </>
    )

}