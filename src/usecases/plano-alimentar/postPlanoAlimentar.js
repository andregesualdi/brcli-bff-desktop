import { PlanoAlimentar } from "../../models/index.js";

export default function makePostPlanoAlimentar(gateway) {
    return async function postPlanoAlimentar({headers, body}) {
        const planoAlimentar = PlanoAlimentar.mapRequestToPlanoAlimentar(body);
        const response = await gateway.salvarPlanoAlimentar(headers['codigo-paciente'], planoAlimentar);
        return response;
    }
}