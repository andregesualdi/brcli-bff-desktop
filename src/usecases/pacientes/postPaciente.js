import { Paciente } from "../../models/index.js";

export default function makePostPaciente(gateway) {
    return async function postPaciente({headers, body}) {
        const paciente = Paciente.mapPacienteToRequest(body);
        const response = await gateway.salvarPaciente(headers['codigo-paciente'], headers['codigo-usuario'], paciente);
        return response;
    }
}