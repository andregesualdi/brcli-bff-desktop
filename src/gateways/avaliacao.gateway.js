import { fetchWrapper } from "./infrastructure/WrapperFetch.js";
import Configuration from "../config.js";

export default function makeAvaliacaoGateway() {
    async function recuperarAvaliacao(idPaciente) {
        const headers = {
            'codigo-paciente': idPaciente
        };
        const url = Configuration.urlApi + Configuration.urlAvaliacao;
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

    async function salvarAvaliacao(idPaciente, avaliacao) {
        const headers = {
            'codigo-paciente': idPaciente
        };
        const url = Configuration.urlApi + Configuration.urlAvaliacao;
        let response;
        await fetchWrapper.post(url, avaliacao, headers)
            .then(data => {
                response = data
            })
            .catch((e) => {
                throw e;
            });
        return response;
    }

    return Object.freeze({
        recuperarAvaliacao,
        salvarAvaliacao
    });
}