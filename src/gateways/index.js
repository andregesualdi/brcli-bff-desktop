import makeAgendaGateway from "./agenda.gateway.js";
import makeAgendamentoGateway from "./agendamento.gateway.js";

const agendaGateway = makeAgendaGateway();
const agendamentoGateway = makeAgendamentoGateway();

export {
    agendaGateway,
    agendamentoGateway
};
