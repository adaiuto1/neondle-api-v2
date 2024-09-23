import express from "express";
import { levelRouter } from "./routers/levelRouter";
import cors from "cors";
const app = express();
app.use(express.json());
const PORT = 8000;

const corsOption = {
	credentials: true,
	origin: ["http://localhost:3000", "http://localhost:80"],
};

app.use(cors(corsOption));
app.get("/", (req, res) => {
	res.send("Hello, World!");
});
app.use("/levels", levelRouter);
app.listen(PORT, () => {
	console.log(`API is listening at ${PORT}`);
});
