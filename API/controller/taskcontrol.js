import {
  getAllTask,
  addTask,
  getTaskById,
  getTaskByNrp,
  updModel,
  delTask,
} from "../model/taskmodel.js";
import { getUserByNrp } from "../model/usermodel.js";

export const getAllTaskData = async (req, res) => {
  try {
    const data = await getAllTask();
    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

export const createTask = async (req, res) => {
  const { id, title, description } = req.body;
console.log(id);
  try {
    const data = await getUserByNrp(id);
    if (data.length < 1)
      return res
        .status(400)
        .json({ msg: "user tidak ditemukan" });
    await addTask(id, title, description);
    res.status(201).json({ msg: "ok" });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

export const getTskById = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await getTaskById(id);
    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

export const getTskByUuid = async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const data = await getTaskByNrp(uuid);
    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

export const updateTask = async (req, res) => {
  const id = req.params.id;
  const { newtitle } = req.body;
  try {
    const data = await getTaskById(id);
    const user_id = data[0].user_id;
    const description = data[0].description;

    await updModel(id, user_id, newtitle, description);
    res.status(200).json({ msg: "ok" });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

export const deleteTask = async (req, res) => {
  const id = req.params.id;
  try {
    await delTask(id);
    res.status(200).json({ msg: "deleted" });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};
