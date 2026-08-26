// Controller de games
// O controller tratará as requisições do cliente
// Importando o service
import gameService from '../services/gameService.js';
// Importando o ObjectId do mongodb
import {ObjectId} from 'mongodb';

// Função que irá tratar a requisição para LISTAR os jogos
const getAllGames = async (req, res) => {
    try {
        const games = await gameService.getAll()
        res.status(200).json({ games: games })
        // Cod. 200 - OK - Requisição feita com sucesso
    } catch (error) {
        console.log(error)
        // Tratando a resposta que api irá enviar em caso de erro
        res.status(500).json({ error: 'Ocorreu um erro ao listar os jogos. Erro interno do servidor.' })
    }
}

// Função que ira tratar a requisição para cadastrar os jogos
const createGame = async (req, res) => {
    try{
        // const title = req.body.title
        // Coletando dados enviados (formulario, da requisição, etc) e gravando
        const {title, year, platform, price} = req.body 
        // Enviando os dados para o service cadastrar
        await gameService.Create(title, year, platform, price)
        res.status(201).json({message: "Jogo cadastrado com sucesso!"})
        // Cod. 201 (CREATED) -> Recurso criado com sucesso no servidor

    } catch {
        console.log(error);
        res.status(500).json({error: "Erro interno do servidor."})
    }
}

// Função que trata a requisição para EXCLUIR um jogo
const deleteGame = async (req, res) => {
    try{
        // Coletando a ID da rota
        const id = req.params.id;
        // Fazendo a validação do ObjectID 
        if (ObjectId.isValid(id)) {
            await gameService.Delete(id);
            res.sendStatus(204);
            // CÓDIGO 204 (NO CONTENT) : Requisição bem sucedida,
            // porem nã há conteúdo para retornar
        }else{
            res.status(400).json({error: 'Requisição mal formada ID invalido.'})
            // CÓDIGO 400 : BAD REQUEST
        }

    }catch(error){
        console.log(error);
        res.status(500).json({error: 'Erro interno do servidor.'})
    }
}

// Função que trata a requisição para LISTAR um jogo ÚNICO
const getOneGame = async (req, res) => {
    try{
        const id = req.params.id
        if(ObjectId.isInvalid(id)){
            const game = await gameService.getOne(id)
            // Verificando se ouve retorno na busca
            if(!game){
                res.status(404).json({error: 'Jogo não encontrado. '})
            }else{
                res.status(200).json({game})
            }
            //  Se o ID não for valido
        }else {
            res.status(400).json({error: 'O ID informado não é valido'})
        }
    }catch(error){
        console.log(error)
        res.status(500).json({error: 'Erro interno do servidor.'});
    }
}

// Exportando as funções
export default { getAllGames, createGame, deleteGame, getOneGame}