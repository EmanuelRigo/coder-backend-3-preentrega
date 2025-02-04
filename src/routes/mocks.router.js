import { Router } from "express";
import mocksController from "../controllers/mocks.controller";

const router = Router();

router.get('/mockingusers', mocksController.getUsers);
router.get('/mockingpets', mocksController.getPets);

export default router