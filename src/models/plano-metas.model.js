class PlanoMetas {
    constructor(
        id,
        metas
    ) {
        this.id = id;
        this.metas = metas;
    }

    static mapRequestToPlanoMetas(req) {
        return new PlanoMetas(req.id, req.metas);
    }

    static mapResponseToPlanoMetas(res) {
        return new PlanoMetas(res.id, res.metas);
    }
}

export default PlanoMetas;