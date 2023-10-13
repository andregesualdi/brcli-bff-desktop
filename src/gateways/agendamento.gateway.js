import { fetchWrapper } from "./infrastructure/WrapperFetch.js";
import Configuration from "../config.js";

export default function makeAgendamentoGateway() {
    async function recuperarAgendamento(idPaciente) {
        const headers = {
            'codigo-paciente': idPaciente
        };
        const url = Configuration.urlApi + Configuration.urlAgendar;
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

    async function salvarAgendamento(idPaciente, idUsuario, novoAgendamento) {
        const headers = {
            'codigo-paciente': idPaciente,
            'codigo-usuario': idUsuario
        };
        const url = Configuration.urlApi + Configuration.urlAgendar;
        let response;
        await fetchWrapper.post(url, novoAgendamento, headers)
            .then(data => {
                response = data
            })
            .catch((e) => {
                throw e;
            });
        return response;
    }

    return Object.freeze({
        recuperarAgendamento,
        salvarAgendamento
    });
}