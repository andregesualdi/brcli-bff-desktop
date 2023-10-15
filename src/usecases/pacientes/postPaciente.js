import { Paciente } from "../../models/index.js";

export default function makePostPaciente(gateway) {
    return async function postPaciente({headers, body}) {
        const paciente = Paciente.mapPacienteToRequest(body);
        let response = await gateway.salvarPaciente(paciente.codigoPaciente, headers['codigo-usuario'], paciente);
        return response;
    }
}