import express from "express";
import agenda from "./agenda.route.js";
import agendamento from "./agendamento.route.js";
import avaliacao from "./avaliacao.route.js";
import metas from "./metas.route.js";
import planoAlimentar from "./plano-alimentar.route.js";
import pacientes from "./pacientes.route.js";

const router = express.Router();

router.use(agenda);
router.use(agendamento);
router.use(avaliacao);
router.use(metas);
router.use(planoAlimentar);
router.use(pacientes);

export default router;