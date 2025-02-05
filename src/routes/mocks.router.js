import { Router } from "express";
import { getMockingPets, getMockingUsers,  } from "../controllers/mocks.controller.js";

const router = Router();

router.get('/mockingpets/:num', getMockingPets);
router.get('/mockingusers/:num', getMockingUsers);

export default router;