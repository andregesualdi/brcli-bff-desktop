import dotenv from "dotenv";

class Configuration {
    static port;
    static urlApi;
    static urlAgenda;
    static urlAgendar;
    static urlAvaliacao;
    static urlMetas;
    static urlListar;
    static urlPaciente;
    static urlCodigo;
    static urlPlano;
}

export function configEnvironments() {
    dotenv.config();
    Configuration.port = process.env.PORT;
    Configuration.urlApi = process.env.URL_API;
    Configuration.urlAgenda = process.env.URL_AGENDA;
    Configuration.urlAgendar = process.env.URL_AGENDAR;
    Configuration.urlAvaliacao = process.env.URL_AVALIACAO;
    Configuration.urlMetas = process.env.URL_METAS;
    Configuration.urlListar = process.env.URL_LISTAR_PACIENTES;
    Configuration.urlPaciente = process.env.URL_PACIENTE;
    Configuration.urlCodigo = process.env.URL_CODIGO_ACESSO;
    Configuration.urlPlano = process.env.URL_PLANO_ALIMENTA;
}

export default Configuration;