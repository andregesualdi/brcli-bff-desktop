import { fetchWrapper } from "./infrastructure/WrapperFetch.js";
import Configuration from "../config.js";

export default function makePlanoAlimentarGateway() {
    async function recuperarPlanoAlimentar(idPaciente) {
        const headers = {
            'codigo-paciente': idPaciente
        };
        const url = Configuration.urlApi + Configuration.urlPlano;
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

    async function salvarPlanoAlimentar(idPaciente, planoAlimentar) {
        const headers = {
            'codigo-paciente': idPaciente
        };
        const url = Configuration.urlApi + Configuration.urlPlano;
        let response;
        await fetchWrapper.post(url, planoAlimentar, headers)
            .then(data => {
                response = data
            })
            .catch((e) => {
                throw e;
            });
        return response;
    }

    return Object.freeze({
        recuperarPlanoAlimentar,
        salvarPlanoAlimentar
    });
}