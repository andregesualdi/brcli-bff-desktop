import { PlanoMetas } from "../../models/index.js";

export default function makePostMetas(gateway) {
    return async function postMetas({headers, body}) {
        const planoMetas = PlanoMetas.mapRequestToPlanoMetas(body);
        const response = await gateway.salvarPlanoMetas(headers['codigo-paciente'], planoMetas);
        return response;
    }
}