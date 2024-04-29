import express from "express";
import {
  getAllUserData,
  createUser,
  getUsrById,
  updateUser,
  deleteUser,
} from "../controller/usercontrol.js";
import {
  getAllTaskData,
  createTask,
  getTskById,
  getTskByUuid,
  updateTask,
  deleteTask,
} from "../controller/taskcontrol.js";

const route = express.Router();

route.get("/get", getAllUserData);
route.get("/get/:id", getUsrById);
route.post("/add", createUser);
route.patch("/upd/:id", updateUser);
route.delete("/del/:id", deleteUser); 

route.get("/getTask", getAllTaskData);
route.get("/getTask/:id", getTskById);
route.get("/getTaskUuid/:uuid", getTskByUuid);
route.post("/addTask", createTask);
route.patch("/updTask/:id", updateTask);
route.delete("/delTask/:id", deleteTask);

export default route;
