import { Agendamento } from "../../models/index.js";

export default function makeGetAgendamento(gateway) {
    return async function getAgendamento({headers}) {
        const response = await gateway.recuperarAgendamento(headers['codigo-paciente']);
        return new Agendamento(Agendamento.mapToAgendamento(response));
    }
}