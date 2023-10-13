import { fetchWrapper } from "./infrastructure/WrapperFetch.js";
import Configuration from "../config.js";

export default function makeAgendaGateway() {
    async function recuperarAgenda(idNutricionista, dataAgendamento) {
        const headers = {
            'codigo-usuario': idNutricionista,
            'data': dataAgendamento
        };
        const url = Configuration.urlApi + Configuration.urlAgenda;
        let response;
        await fetchWrapper.get(url, headers)
            .then(data => {
                response = data;
            })
            .catch((error) => {
                throw error;
            });
        return response;
    }

    return Object.freeze({
        recuperarAgenda
    });
}