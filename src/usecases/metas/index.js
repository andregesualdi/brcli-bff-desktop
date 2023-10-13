import { metasGateway } from "../../gateways/index.js";
import makeGetMetas from "./getMetas.js";
import makePostMetas from "./postMetas.js";

const getMetas = makeGetMetas(metasGateway);
const postMetas = makePostMetas(metasGateway);

const metasService = Object.freeze({
    getMetas,
    postMetas
});

export default metasService;

export {
    getMetas,
    postMetas
};