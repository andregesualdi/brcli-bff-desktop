import moment from "moment-timezone";

class Agendamento {
    constructor(
        data
    ) {
        this.data = data;
    }

    static mapToAgendamento(agendamentoResponse) {
        let data = moment(agendamentoResponse.data, "Y-M-D").format("LL");
        const splitHora = agendamentoResponse.hora.split(":");
        return `${data}, às ${splitHora[0]}h${splitHora[1]}`;
    }
}

export default Agendamento;