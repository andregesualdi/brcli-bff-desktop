import { agendamentoGateway } from "../../gateways/index.js";
import makeGetAgendamento from "./getAgendamento.js";
import makePostAgendamento from "./postAgendamento.js";

const getAgendamento = makeGetAgendamento(agendamentoGateway);
const postAgendamento = makePostAgendamento(agendamentoGateway);

const agendamentoService = Object.freeze({
    getAgendamento,
    postAgendamento
});

export default agendamentoService;

export {
    getAgendamento,
    postAgendamento
};