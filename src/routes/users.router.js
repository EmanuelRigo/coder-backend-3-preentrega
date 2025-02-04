import { Router } from "express";
import usersController from "../controllers/users.controller.js";
import generateUsers from "../utils/utils.js";

const router = Router();

router.get("/", usersController.getAllUsers);

router.get("/generate", (req, res) => {
  const users = [];
  for (let i = 0; i < 100; i++) {
    users.push(generateUsers());
  }
  res.json(users);
});
router.get("/:uid", usersController.getUser);
router.put("/:uid", usersController.updateUser);
router.delete("/:uid", usersController.deleteUser);

export default router;
