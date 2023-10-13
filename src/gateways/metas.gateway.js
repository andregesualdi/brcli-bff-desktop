import { fetchWrapper } from "./infrastructure/WrapperFetch.js";
import Configuration from "../config.js";

export default function makeMetasGateway() {
    async function recuperarPlanoMetas(idPaciente) {
        const headers = {
            'codigo-paciente': idPaciente
        };
        const url = Configuration.urlApi + Configuration.urlMetas;
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

    async function salvarPlanoMetas(idPaciente, planoMetas) {
        const headers = {
            'codigo-paciente': idPaciente
        };
        const url = Configuration.urlApi + Configuration.urlMetas;
        let response;
        await fetchWrapper.post(url, planoMetas, headers)
            .then(data => {
                response = data
            })
            .catch((e) => {
                throw e;
            });
        return response;
    }

    return Object.freeze({
        recuperarPlanoMetas,
        salvarPlanoMetas
    });
}