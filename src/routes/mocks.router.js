import { Router } from "express";
import { getMockingPets, getMockingUsers, getMockingUsersByNumber } from "../controllers/mocks.controller.js";

const router = Router();


router.get('/mockingpets/:num', getMockingPets);
router.get('/mockingusers/:num', getMockingUsersByNumber);

export default router;