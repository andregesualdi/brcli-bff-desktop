import { agendaGateway } from "../../gateways/index.js";
import makeGetAgenda from "./getAgenda.js";

const getAgenda = makeGetAgenda(agendaGateway);

const agendaService = Object.freeze({
    getAgenda
});

export default agendaService;

export {
    getAgenda
};