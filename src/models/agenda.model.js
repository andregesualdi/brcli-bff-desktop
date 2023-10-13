class Agenda {
    constructor (
        imagem,
        horario,
        nome,
        codigoPaciente
    ) {
        this.imagem = imagem;
        this.horario = horario;
        this.nome = nome;
        this.codigoPaciente = codigoPaciente;
    }

    static mapToAgenda(agendaResponse) {
        return new Agenda(agendaResponse.imagem, agendaResponse.hora, agendaResponse.nome, agendaResponse.codigoPaciente);
    }
}

export default Agenda;