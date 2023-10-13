import { Avaliacao } from "../../models/index.js";

export default function makeGetAvaliacao(gateway) {
    return async function getAvaliacao({headers}) {
        const response = await gateway.recuperarAvaliacao(headers['codigo-paciente']);
        return Avaliacao.mapResponseToAvaliacao(response);
    }
}
