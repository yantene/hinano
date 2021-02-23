import { Router, Request, Response, NextFunction } from "express";

export const router = Router();

router.get("/", (req: Request, res: Response, _next: NextFunction) =>
  res.render("index", { title: "Express" })
);
