export default function makeGetCodigoAcesso(gateway) {
    return async function getCodigoAcesso({headers}) {
        return await gateway.gerarCodigoAcesso(headers['codigo-paciente'], headers['codigo-usuario']);
    }
}