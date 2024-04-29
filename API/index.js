import express from "express";
import route from "./route/userRoute.js";
// import { createTable } from "./dbconfig/dbconfig.js";

const app = express();

app.use(express.json());

app.use("/", route);

// createTable();

app.listen(4000, () => {
  console.log("server jalan");
});
