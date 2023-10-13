import moment from "moment-timezone";
import { Agendamento } from "./index.js";

class Paciente {
    constructor(
        codigoPaciente,
        imagem,
        nome,
        dataCadastro,
        dataAgendamento,
        telefone,
        email,
        dataNascimento,
        altura,
        peso,
        imc,
        usuario,
        codigoAcesso,
        idade
    ) {
        this.codigoPaciente = codigoPaciente;
        this.imagem = imagem;
        this.nome = nome;
        this.dataCadastro = dataCadastro;
        this.dataAgendamento = dataAgendamento;
        this.telefone = telefone;
        this.email = email;
        this.dataNascimento = dataNascimento;
        this.altura = altura;
        this.peso = peso;
        this.imc = imc;
        this.usuario = usuario;
        this.codigoAcesso = codigoAcesso;
        this.idade = idade;
    }

    static mapPacienteToRequest(paciente) {
        return {
            codigoAcesso: paciente.codigoAcesso,
            altura: paciente.altura,
            dataNascimento: paciente.dataNascimento,
            peso: paciente.peso,
            nome: paciente.nome,
            nomeAcesso: paciente.nomeAcesso,
            imagem: paciente.imagem,
            email: paciente.email,
            telefone: paciente.telefone
        }
    }

    static mapResponseToPaciente(res) {
        const imc = Number((res.peso / (res.altura * res.altura)).toFixed(2));
        const data = res.dataNascimento.split("-");
        const idade = calcularIdade(Number(data[1]), Number(data[2]), Number(data[0]));
        let dataCadastro = res.dataCadastro.split("T");
        dataCadastro = moment(dataCadastro[0], "Y-M-D").format('MMMM [de] YYYY')
        let agendamento = Agendamento.mapToAgendamento({
            data: res.dataAgendamento,
            hora: res.horaAgendamento
        })
        return new Paciente(res.id, res.imagem, res.nome, dataCadastro, agendamento, res.telefone, res.email, res.dataNascimento, res.altura, res.peso, imc, res.nomeAcesso, res.codigoAcesso, idade);
    }
}

export default Paciente;

function calcularIdade(mes, dia, ano) {
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const mesAtual = dataAtual.getMonth();
    const diaAtual = dataAtual.getDate();
    let idade = anoAtual - ano;

    if (mesAtual < (mes - 1))
    {
        idade--;
    }
    if (((mes - 1) == mesAtual) && (diaAtual < dia))
    {
        idade--;
    }
    return idade;
}