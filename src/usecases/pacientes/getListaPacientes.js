export default function makeGetListaPacientes(gateway) {
    return async function getListaPacientes({headers}) {
        return await gateway.recuperarListaPacientes(headers['codigo-usuario']);
    }
}