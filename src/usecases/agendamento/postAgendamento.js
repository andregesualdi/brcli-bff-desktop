import { NovoAgendamento } from "../../models/index.js";

export default function makePostAgendamento(gateway) {
    return async function postAgendamento({headers, body}) {
        const novoAgendamento = NovoAgendamento.mapToNovoAgendamento(body);
        const response = await gateway.salvarAgendamento(headers['codigo-paciente'], headers['codigo-usuario'], novoAgendamento);
        return response;
    }
}