// Importar o Express
import express from "express";
// Importar o Mongoose
import mongoose from "mongoose";
// Importar o Model
import Game from "./models/Games.js";

// Carregando o Express em uma variavel
const app = express();

// Configurações do Express
app.use(express.json());

// Inciando a conexão com o MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/apithegames")

// Iniciando o servidor da API
const port = 4000;
app.listen(port, (error) => {
    if(error) {
        console.log("Ocorreu um erro ao iniciar API" + error)
    }else{
        console.log("API iniciada com sucesso na porta " + port);
    }
});
