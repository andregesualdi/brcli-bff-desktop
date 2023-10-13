import { PlanoMetas } from "../../models/index.js";

export default function makeGetMetas(gateway) {
    return async function getMetas({headers}) {
        const response = await gateway.recuperarPlanoMetas(headers['codigo-paciente']);
        return PlanoMetas.mapResponseToPlanoMetas(response);
    }
}
