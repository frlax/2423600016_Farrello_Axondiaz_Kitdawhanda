import {
  getAllUser,
  addUser,
  getUserById,
  updtUser,
  delUser,
} from "../model/usermodel.js";
import { v4 as uuidv4 } from 'uuid';

export const getAllUserData = async (req, res) => {
  try {
    const data = await getAllUser();
    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

export const createUser = async (req, res) => {
  const { nrp, nama } = req.body;
  const uuid = uuidv4();
  try {
    await addUser(nrp, uuid, nama);
    res.status(201).json({ msg: "ok" });    
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

export const getUsrById = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await getUserById(id);
    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

export const updateUser = async (req, res) => {
  const id = req.params.id;
  const { nama, nrp } = req.body;
  try {
    const data = await getUserById(id);
    console.log(data);
    const oldUsername = data[0].name;
    const oldNrp = data[0].nrp;
    const uuid = data[0].uuid;

    if (nama == "") {
      await updtUser(id, oldUsername, nrp, uuid);
    } else if (nrp == "") {
      await updtUser(id, nama, oldNrp, uuid);
    } else {
      await updtUser(id, nama, nrp, uuid);
    }
    res.status(200).json({ msg: "ok" });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await delUser(id);
    res.status(200).json({ msg: "deleted" });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};
