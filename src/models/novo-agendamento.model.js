class NovoAgendamento {
    constructor(
        data,
        hora
    ) {
        this.data = data;
        this.hora = hora;
    }

    static mapToNovoAgendamento(request) {
        return new NovoAgendamento(request.data, request.hora);
    }
}

export default NovoAgendamento;