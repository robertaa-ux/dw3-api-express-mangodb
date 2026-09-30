// MIDDLEWARE de autenticação
import jwt from "jsonwebtoken";
import userController from "../controllers/userController";

// Função que irá verificar se o usuário possui um token válido
const Authorization = (req, res, next) => {
    // Capturando o cabeçalho da requisição
    const authToken = req.headers['authorization']
    // Se o token não for vazio
    if (authToken != undefined){
        const bearer = authToken.split(' ')
        // Capturando somente o token
        const token = bearer[1];
        //  Validando o token com o JWT
        jwt.verify(token, userController.JWTsecret, (error,data) => {
            // Se o token for invalido
            if(error){
                res.status(401).json({error: "Token invalido"})
                // Cod. 401 (UNAUTHORIZED) - Não Autorizado
            // Se o token for válido
            }else{
                req.token = token;
                req.loggedUser = {
                    id: data.id,
                    email: data.email,
                }
                // Permite prosseguir com a requisição
                next();
            }
        })
    // Se o token estiver vazio
    } else {
        res.status(401).json({error: "Token não informado :("});
    }
}

export default {Authorization};