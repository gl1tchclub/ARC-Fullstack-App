/**
 * @file Manages routes related to event operations
 * @author Elizabeth Minty
 */
import express from "express";

import {
  create,
  getAll,
  getID,
  update,
  deleteType,
} from "../controllers/resources.js";

import { validatePostEvent } from "../middleware/validation.js";

const router = express.Router();

router.post("/", validatePostEvent, create("event"));
router.get("/", getAll("event"));
router.get("/:id", getID("event"));
router.put("/:id", validatePostEvent, update("event"));
router.delete("/:id", deleteType("event"));

export default router;
