import { getPaciente, getListaPacientes, postPaciente, getCodigoAcesso } from "../../usecases/pacientes/index.js";

export default Object.freeze({
    getPaciente: (httpRequest) => getPaciente(httpRequest),
    getListaPacientes: (httpRequest) => getListaPacientes(httpRequest),
    postPaciente: (httpRequest) => postPaciente(httpRequest),
    getCodigoAcesso: (httpRequest) => getCodigoAcesso(httpRequest),
});
