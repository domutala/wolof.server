import * as express from "express";

import add from "./_add";

const router = express.Router();

router.post("/add", add);

export default router;
