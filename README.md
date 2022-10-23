# BateClickTest

No seguinte projeto foi utilizado as seguintes tecnologias:
-Laravel
-Mysql
-ReactJs

No laravel, 
    Temos duas Models, são elas, Carro e Defeito. Foi criado o relacionamento de Carro hasMany Defeitos (Carro pode ter muitos defeitos) e Defeito belongsTo Carro (Um defeito pertecence a um carro). 
    Temos dois Controler dentro de API, são eles, CarroController e DefeitoController.
        CarroController:
            index para listar os carros.
            store para criar o carro e nele possui a verificação de Unicidade de carro não permitindo cadastrar mais de um carro igual (modelo, ano, fabricante).
            update para atualizar o carro.
            destroy para deleter o carro.
        DefeitoController:
            index para listar defeitos.
            store para criar defeitos asscoiado a um carro.
            update para atualizar defeitos.
            destroy para deletar defeitos.
    Arquivo api.php na pasta Routes tem as rotas das API'S


No MySql é necessário criar o banco e executar o comando de criação de tabelas

ReactJs
    Components:
        NavBar/NavBar - Elemento para ficar no canto esquerdo superior da página.

        BotãoCadastrar - botão que faz alternar formulários

        Carro/CarroCadastro - formulário para cadastrar carro.
        TabelaCarro/index - Construção do gridview de carros.
        Carro/CarroCard - Row do Objeto dentro do gridview.
        Pages/CarroPage/index - Tela principal onde é inserido o comnponenet de formulário e gridview, é o arquivo onde está sendo usado as requisições via Axios com os metodos de CRUD.

        Defeito/DefeitoCadastro - formulário para cadastrar Defeito.
        TabelaDefeito/index - Construção do gridview de Defeitos.
        Defeito/DefeitoCard - Row do Objeto dentro do gridview.
        Pages/DefeitoPage/index - Tela principal onde é inserido o comnponenet de formulário e gridview, é o arquivo onde está sendo usado as requisições via Axios com os metodos de CRUD.

        No metodo editar não consegui deixar funcional devido a falta de tempo hábil disponivel, porém a api está fucnionando, o que não consegui deixar funcional foi a dinamicidade dos dados no mesmo formulário no reactJs. 

Considerações ReactJs: Das três tecnologias, essa foi a que tive dificuldade devido a pouca pratica com a mesma, foi um desafio, pois o pouco que vi na academia não foi o suficiente, tive que estudar por um tempo para que pudesse desenvolver o teste.




