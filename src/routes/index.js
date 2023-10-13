import express from "express";
import agenda from "./agenda.route.js";

const router = express.Router();

router.use(agenda);

export default router;