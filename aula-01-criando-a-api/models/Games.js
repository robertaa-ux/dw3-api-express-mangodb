//  MODEL DE GAMES
// Importando o mongoose
import mongoose from "mongoose";

// Criando o schema de Games
const gameSchema = new mongoose.Schema({
    title: String,
    year: Number,
    platform: String,
    price: Number
})

// Criando coleção
//O mongoose deixa o nome do model todo minusculo e no plural dentro do banco de dados
const Game = mongoose.model('Game', gameSchema)

// Exportando Model
export default Game;