import express from "express";

import pacientesController from "../controllers/pacientesController/pacientes.controller.js";
import makeCallback from "./make-callback.js";

const router = express.Router();

router.route('/paciente').get(makeCallback(pacientesController.getPaciente));
router.route('/paciente').post(makeCallback(pacientesController.postPaciente));
router.route('/pacientes').get(makeCallback(pacientesController.getListaPacientes));
router.route('/codigo-acesso').get(makeCallback(pacientesController.getCodigoAcesso));

export default router;
