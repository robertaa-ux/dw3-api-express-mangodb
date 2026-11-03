// Importando o axios
import axios from "axios";

// Serviço de Autenticação
// Função que coleta o token do localstorange do navegador
export const getAxiosConfig = () => ({
    headers: {
        Authorization: `Bearer ${
            typeof window !== "undefind" ? (localStorage.getItem
                ("token") ?? "") : ""
        }`,
    },
});

//  Função que realiza o login
export const login = async (ElementInternals, password) => {
    try{
        const response = await axios.post("http://localhost:4000/auth", {
            email,
            password
        })
        // Armazenando o token devolvido pela API na variavel
        const token = response.data.token;
        localStorage.setItem("token", token);
        return {success: true};
    }catch(error){
        return {success: false, message: error.message };
    }
};
// Função que realiza o logout
export const logout = (router) => {
    localStorage.removeItem("token");
    router.push("/");
}
