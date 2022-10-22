
import "./botaoCadastrar.css"

export default function BotaoCadastrar(props){

    return (
        <div className="task-item">
            <div className="title">{props.title}</div>
            <button onClick={props.click_btn}>Cadastrar</button>
        </div>
    );
}