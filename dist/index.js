"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const levelRouter_1 = require("./routers/levelRouter");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 8000;
const corsOption = {
    credentials: true,
    origin: ["http://localhost:3000", "http://localhost:80"],
};
app.use((0, cors_1.default)(corsOption));
app.get("/", (req, res) => {
    res.send("Hello, World!");
});
app.use("/levels", levelRouter_1.levelRouter);
app.listen(PORT, () => {
    console.log(`API is listening at ${PORT}`);
});
