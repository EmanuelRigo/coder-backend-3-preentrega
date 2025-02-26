import { Router } from "express";
import { getMockingPets, getMockingUsers, generateData  } from "../controllers/mocks.controller.js";

const router = Router();

router.get('/mockingpets/:num', getMockingPets);
router.get('/mockingusers', getMockingUsers);
router.get('/mockingusers/:num', getMockingUsers);
router.post('/generateData', generateData);

export default router;