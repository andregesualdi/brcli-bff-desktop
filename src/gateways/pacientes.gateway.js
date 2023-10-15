import { fetchWrapper } from "./infrastructure/WrapperFetch.js";
import Configuration from "../config.js";

export default function makePacientesGateway() {
    async function recuperarListaPacientes(idNutricionista) {
        const headers = {
            'codigo-usuario': idNutricionista
        };
        const url = Configuration.urlApi + Configuration.urlListar;
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

    async function recuperarDetalhesPaciente(idPaciente, idNutricionista) {
        const headers = {
            'codigo-paciente': idPaciente,
            'codigo-usuario': idNutricionista
        };
        const url = Configuration.urlApi + Configuration.urlPaciente;
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

    async function gerarCodigoAcesso(idPaciente, idNutricionista) {
        const headers = {
            'codigo-paciente': idPaciente,
            'codigo-usuario': idNutricionista
        }
        const url = Configuration.urlApi + Configuration.urlCodigo;
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

    async function salvarPaciente(idPaciente, idNutricionista, paciente) {
        let headers = {
            'codigo-usuario': idNutricionista
        };
        if (idPaciente) {
            headers = {
                ...headers,
                'codigo-paciente': idPaciente
            }
        }
        const url = Configuration.urlApi + Configuration.urlPaciente;
        let response;
        await fetchWrapper.post(url, paciente, headers)
            .then(data => {
                response = data
            })
            .catch((e) => {
                throw e;
            });
        return response;
    }

    return Object.freeze({
        recuperarDetalhesPaciente,
        recuperarListaPacientes,
        salvarPaciente,
        gerarCodigoAcesso
    });
}