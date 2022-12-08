"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import axios from "axios";
// import requestURLS from "../utilities/urlsrequest";
const router = express_1.default.Router();
// const getAllMovies = async () => {
//   let { data } = await axios.get(requestURLS.fetchRandomMovies);
//   return data.results;
// };
// router.get("/movies", async (_req, res) => {
//   //   const allMovies = await getAllMovies();
//   res.status(200).send("hola puto");
// });
router.get("/movies", (_req, res) => {
    res.send("Er diablo marico, yo en Venezuela tenia 3 casas, 2 camionetas, una lancha, un jet y un dragón");
});
exports.default = router;
