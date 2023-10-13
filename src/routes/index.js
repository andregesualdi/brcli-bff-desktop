import express from "express";
import agenda from "./agenda.route.js";
import agendamento from "./agendamento.route.js";
import avaliacao from "./avaliacao.route.js";

const router = express.Router();

router.use(agenda);
router.use(agendamento);
router.use(avaliacao);

export default router;