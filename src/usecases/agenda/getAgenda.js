import { Agenda } from "../../models/index.js";

export default function makeGetAgenda(gateway) {
    return async function getAgenda({headers}) {
        const response = await gateway.recuperarAgenda(headers['codigo-usuario'], headers['data-agenda']);
        if (response && response.length > 0) {
            let agenda = response.map((el) => {
                return Agenda.mapToAgenda(el);
            });
            return agenda;
        }
        return undefined;
    }
}