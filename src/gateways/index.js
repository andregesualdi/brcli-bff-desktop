import makeAgendaGateway from "./agenda.gateway.js";
import makeAgendamentoGateway from "./agendamento.gateway.js";
import makeAvaliacaoGateway from "./avaliacao.gateway.js";
import makeMetasGateway from "./metas.gateway.js";

const agendaGateway = makeAgendaGateway();
const agendamentoGateway = makeAgendamentoGateway();
const avaliacaoGateway = makeAvaliacaoGateway();
const metasGateway = makeMetasGateway();

export {
    agendaGateway,
    agendamentoGateway,
    avaliacaoGateway,
    metasGateway
};
