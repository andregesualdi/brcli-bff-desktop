class Avaliacao {
    constructor(
        arquivo,
        nomeArquivo
    ) {
        this.arquivo = arquivo;
        this.nomeArquivo = nomeArquivo;
    }

    static mapRequestToAvaliacao(req) {
        return new Avaliacao(req.arquivo, req.nomeArquivo);
    }

    static mapResponseToAvaliacao(res) {
        return new Avaliacao(res.arquivo, res.nomeArquivo);
    }
}

export default Avaliacao;