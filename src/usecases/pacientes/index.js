import { pacientesGateway } from "../../gateways/index.js";
import makeGetPaciente from "./getPaciente.js";
import makePostPaciente from "./postPaciente.js";
import makeGetListaPacientes from "./getListaPacientes.js";
import makeGetCodigoAcesso from "./getCodigoAcesso.js";

const getPaciente = makeGetPaciente(pacientesGateway);
const postPaciente = makePostPaciente(pacientesGateway);
const getListaPacientes = makeGetListaPacientes(pacientesGateway);
const getCodigoAcesso = makeGetCodigoAcesso(pacientesGateway);

const metasService = Object.freeze({
    getPaciente,
    getListaPacientes,
    postPaciente,
    getCodigoAcesso
});

export default metasService;

export {
    getPaciente,
    getListaPacientes,
    postPaciente,
    getCodigoAcesso
};