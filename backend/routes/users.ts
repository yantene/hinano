import { Router, Request, Response, NextFunction } from "express";

export const router = Router();

router.get("/", (req: Request, res: Response, _next: NextFunction) =>
  res.send("respond with a resource")
);
