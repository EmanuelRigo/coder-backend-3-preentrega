import { Router } from "express";
import { getMockingPets, getMockingUsers, generateData  } from "../controllers/mocks.controller.js";

const router = Router();

router.get('/mockingpets/:num', getMockingPets);
router.get('/mockingusers', getMockingUsers);
router.get('/mockingusers/:num', getMockingUsers);
router.post('/generatedata', generateData);
router.post('/generatedata/:users/:pets', generateData);


export default router;