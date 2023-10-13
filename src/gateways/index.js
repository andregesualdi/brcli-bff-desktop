import makeAgendaGateway from "./agenda.gateway.js";
import makeAgendamentoGateway from "./agendamento.gateway.js";
import makeAvaliacaoGateway from "./avaliacao.gateway.js";
import makeMetasGateway from "./metas.gateway.js";
import makePlanoAlimentarGateway from "./plano-alimentar.gateway.js";
import makePacientesGateway from "./pacientes.gateway.js";

const agendaGateway = makeAgendaGateway();
const agendamentoGateway = makeAgendamentoGateway();
const avaliacaoGateway = makeAvaliacaoGateway();
const metasGateway = makeMetasGateway();
const planoAlimentarGateway = makePlanoAlimentarGateway();
const pacientesGateway = makePacientesGateway();

export {
    agendaGateway,
    agendamentoGateway,
    avaliacaoGateway,
    metasGateway,
    pacientesGateway,
    planoAlimentarGateway
};
