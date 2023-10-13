import express from "express";
import agenda from "./agenda.route.js";
import agendamento from "./agendamento.route.js";

const router = express.Router();

router.use(agenda);
router.use(agendamento);

export default router;