// Importar o Express
import express from "express";
// Carregando o Express em uma variavel
const app = express();

// Configurações do Express
app.use(express.json());

// ROTA PRINCIPAL DA API
app.get("/", (req, res) => {
    // JSON que sera retornado pela API
    const games = [
        {
            title: "Fifa 2019",
            year: 2019,
            plataform: "X-box 360",
            price: 198
        },
        {
            title: "The sims",
            year: 2016,
            plataform: "PC (Windows)",
            price: 149
        },
        {
            title: "CS 60",
            year: 2012,
            plataform: "PC (Windows)",
            price: 89
        }
    ]
    // Configurando o retorno da API
    // ".status"(código de status que a API retorna)
    res.status(200).json(games)

    // ENVIAR SOMENTE O CÓDIGO DE STATUS SEM JSON "res.sendStatus(404)"
});
// ROTA DE FILMES
app.get("/filmes", (req, res) => {
    const filmes = [
        {
            title: "Obcessão",
            genero: "Terror psicológico",
            time: "210"
        },
        {
            title: "Gente Grande",
            genre: "Comedia",
            duration: "190"
        }
    ]
     res.json(filmes)
});


// Iniciando o servidor da API
const port = 4000;
app.listen(port, (error) => {
    if(error) {
        console.log("Ocorreu um erro ao iniciar API" + error)
    }else{
        console.log("API iniciada com sucesso na porta " + port);
    }
});
