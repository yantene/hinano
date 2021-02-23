import { Router } from "express";

export const router = Router();

router.get("/", (req, res, next) => res.render("/", { title: "Express" }));
