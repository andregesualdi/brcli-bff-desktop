import { Avaliacao } from "../../models/index.js";

export default function makePostAvaliacao(gateway) {
    return async function getAvaliacao({headers, body}) {
        const avaliacao = Avaliacao.mapRequestToAvaliacao(body);
        const response = await gateway.salvarAvaliacao(headers['codigo-paciente'], avaliacao);
        return response;
    }
}