class PlanoAlimentar {
    constructor(
        id,
        refeicoes
    ) {
        this.id = id;
        this.refeicoes = refeicoes;
    }

    static mapResponseToPlanoAlimentar(res) {
        return new PlanoAlimentar(res.id, res.refeicoes);
    }

    static mapRequestToPlanoAlimentar(req) {
        return new PlanoAlimentar(req.id, req.refeicoes);
    }
}

export default PlanoAlimentar;