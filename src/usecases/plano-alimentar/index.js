import { planoAlimentarGateway } from "../../gateways/index.js";
import makeGetPlanoAlimentar from "./getPlanoAlimentar.js";
import makePostPlanoAlimentar from "./postPlanoAlimentar.js";

const getPlanoAlimentar = makeGetPlanoAlimentar(planoAlimentarGateway);
const postPlanoAlimentar = makePostPlanoAlimentar(planoAlimentarGateway);

const planoAlimentarService = Object.freeze({
    getPlanoAlimentar,
    postPlanoAlimentar
});

export default planoAlimentarService;

export {
    getPlanoAlimentar,
    postPlanoAlimentar
};