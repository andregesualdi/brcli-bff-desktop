import makeAgendaGateway from "./agenda.gateway.js";
import makeAgendamentoGateway from "./agendamento.gateway.js";
import makeAvaliacaoGateway from "./avaliacao.gateway.js";

const agendaGateway = makeAgendaGateway();
const agendamentoGateway = makeAgendamentoGateway();
const avaliacaoGateway = makeAvaliacaoGateway();

export {
    agendaGateway,
    agendamentoGateway,
    avaliacaoGateway
};
