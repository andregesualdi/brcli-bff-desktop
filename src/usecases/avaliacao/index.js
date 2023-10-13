import { avaliacaoGateway } from "../../gateways/index.js";
import makeGetAvaliacao from "./getAvaliacao.js";
import makePostAvaliacao from "./postAvaliacao.js";

const getAvaliacao = makeGetAvaliacao(avaliacaoGateway);
const postAvaliacao = makePostAvaliacao(avaliacaoGateway);

const avaliacaoService = Object.freeze({
    getAvaliacao,
    postAvaliacao
});

export default avaliacaoService;

export {
    getAvaliacao,
    postAvaliacao
};