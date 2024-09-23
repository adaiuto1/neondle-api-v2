import express from "express";
import { levelRouter } from "./routers/levelRouter";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
const PORT = 8000;
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get("/", (req, res) => {
	res.send("Hello, World!");
});
app.use("/levels", levelRouter);
app.listen(PORT, () => {
	console.log(`API is listening at ${PORT}`);
});
