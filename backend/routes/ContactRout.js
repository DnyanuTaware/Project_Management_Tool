import express from "express";
import { saveContactDetails } from "../Controllers/ContactController.js";

const router = express.Router();
router.post("/contactdetails", saveContactDetails);

export default router;
