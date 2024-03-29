import { Request, Response } from "express";
import sender from "../_functions/sender";
import _login from "@/services/session/login";

export default async (req: Request, res: Response) => {
  try {
    // console.log(req.session);

    const user = await _login({ ...req.body, session: req.session as any });
    sender(req, res, { value: user });
  } catch (error: any) {
    sender(req, res, { error });
  }
};
