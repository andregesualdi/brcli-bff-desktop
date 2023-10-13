import { Paciente } from "../../models/index.js";

export default function makeGetPaciente(gateway) {
    return async function getPaciente({headers}) {
        const response = await gateway.recuperarDetalhesPaciente(headers['codigo-paciente'], headers['codigo-usuario']);
        return Paciente.mapResponseToPaciente(response);
    }
}
