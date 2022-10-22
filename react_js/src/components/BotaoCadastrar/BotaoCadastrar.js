
import "./botaoCadastrar.css"

export default function BotaoCadastrar(props){

    return (
        <div className="task-item">
            <button onClick={props.click_btn}>{props.title}</button>
        </div>
    );
}