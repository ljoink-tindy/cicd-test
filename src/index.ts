import express from "express";
import cors from "cors";
import { config } from "dotenv";
config();

import foo from "./foo";
import controller from "./controller";
import envUtil from "./util/env.util";

const app = express();
app.use(express.json());
app.use(cors());

const port = 3000;

app.get("/", (_req, res) => res.send("Hello World!"));

app.get("/foo", (_req, res) => res.send(foo()));

app.get("/controller", controller);

app.get("/env", (_req, res) => res.send(envUtil.get("TEST")));

app.listen(port, () => console.log(`Listening at:\nhttp://localhost:${port}`));
