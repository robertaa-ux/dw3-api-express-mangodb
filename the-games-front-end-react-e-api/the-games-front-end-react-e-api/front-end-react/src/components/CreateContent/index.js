import styles from "@/components/CreateContent/CreateContent.module.css";
// Importando os hook useState
import {useState} from "react";

const CreateContent = () => {
  // Criando os estados para armazenar as iformações do formulário
  const [title, setTitle] = useState("")
  const [platform, setPlatform] = useState("")
  const [genre, setGenre] = useState("")
  const [rating, setRating] = useState("")
  const [year, setYear] = useState("")
  const [price, setPrice] = useState("")

  return (
    <div className={styles.createContent}>
      <div className="title">
        <h2>Cadastrar novo jogo</h2>
      </div>
      <form id="createForm" className="formPrimary">
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Insira o título do jogo"
          className="inputPrimary"
        />
        <input
          type="text"
          name="platform"
          id="platform"
          placeholder="Insira a plataforma do jogo"
          className="inputPrimary"
        />
        <input
          type="number"
          name="year"
          id="year"
          placeholder="Insira o ano do jogo"
          className="inputPrimary"
        />
        <input
          type="number"
          name="price"
          id="price"
          placeholder="Insira o preço do jogo"
          className="inputPrimary"
        />
        <input
          type="submit"
          value="Cadastrar"
          id="createBtn"
          className="btnPrimary"
        />
      </form>
    </div>
  );
};

export default CreateContent;
