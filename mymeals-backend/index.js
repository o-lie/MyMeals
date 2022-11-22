import express from "express";
import cors from "cors";
import RecipeRoute from "./routes/RecipeRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(RecipeRoute);

app.listen(6000, ()=> console.log('Server up and running...'));