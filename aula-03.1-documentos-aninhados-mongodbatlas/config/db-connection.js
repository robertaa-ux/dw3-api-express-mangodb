// Importando o mongoose
import mongoose from "mongoose";

// Usuario e senha do banco de dados
const dbUser = "robertasecundariati_db_user";
const dbPassword = "HsgF0DSONfRqOCs4";

const connect = () => {
  mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPassword}@cluster0.9uc66xx.mongodb.net/?appName=Cluster0`
  );

  const connection = mongoose.connection;

  connection.on("error", () => {
    console.log("Erro ao conectar com o mongoDB.");
  });

  connection.on("open", () => {
    console.log("Conectado ao mongoDB com sucesso!");
  });
};

connect();

export default mongoose;