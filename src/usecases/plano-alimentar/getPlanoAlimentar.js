import { PlanoAlimentar } from "../../models/index.js";

export default function makeGetPlanoAlimentar(gateway) {
    return async function getPlanoAlimentar({headers}) {
        const response = await gateway.recuperarPlanoAlimentar(headers['codigo-paciente']);
        return PlanoAlimentar.mapResponseToPlanoAlimentar(response);
    }
}
