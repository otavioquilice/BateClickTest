# BateClickTest

No seguinte projeto foi utilizado as seguintes tecnologias:
-Laravel
-Mysql
-ReactJs

No laravel, 
    Temos duas Models, são elas, Carro e Defeito. Foi criado o relacionamento de Carro hasMany Defeitos (Carro pode ter muitos defeitos) e Defeito belongsTo Carro (Um defeito pertecence a um carro). 

    Temos dois Controler dentro de API, são eles, CarroController e DefeitoController.

        CarroController:
        
            Index para listar os carros.
            
            Store para criar o carro e nele possui a verificação de Unicidade de carro não permitindo cadastrar mais de um carro igual (modelo, ano, fabricante).
            
            Update para atualizar o carro.
            
            Destroy para deleter o carro.

        DefeitoController:

            Index para listar defeitos.
            
            Store para criar defeitos asscoiado a um carro.
            
            Update para atualizar defeitos.
            
            Destroy para deletar defeitos.


    Arquivo api.php na pasta Routes tem as rotas das API'S


No MySql é necessário criar o banco executando o comando sql de criação das tabelas

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

Procurei fazer o tratamentos de todos possiveis erros de execução, adicionando mensagens personalizadas em alert, para que fique mais agradavel o uso da aplicação e previnindo telas com erro. Espero que eu tenha eliminado todos os possiveis bug.
 
Considerações ReactJs: Essa tecnologia foi a que tive dificuldade devido a pouca pratica com a mesma, foi um desafio, porém consegui finalizar com exito a aplicação.

Considerações Laravel: Tecnologia que possuo facilidade para desenvolver, não tive problemas com o backend.

Considerações MySql: Tecnologia que tenho contato de longa data, criei a tabela de acordo com a solicitação do teste.

Considerações finais: Agradeço pela oportunidade em poder ter expessado minhas habilidades neste teste. Fiquei feliz por ter concluido com exito. 





