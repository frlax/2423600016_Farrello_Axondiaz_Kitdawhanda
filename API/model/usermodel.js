import koneksi from "../dbconfig/dbconfig.js";

export const getAllUser = () => {
  const query = koneksi.select("*").from("users");

  return query;
};

export const addUser = (nrp, uuid, nama) => {
  const query = koneksi.insert({ uuid: uuid, nrp: nrp, name: nama }).into("users");

  return query;
};

export const getUserById = (id) => {
  const query = koneksi.select("*").from("users").where({ id: id });

  return query;
};

export const getUserByNrp = (user_id) => {
  const query = koneksi.select("*").from("users").where({ id: user_id });

  return query;
};

export const updtUser = (id, nama, nrp, uuid) => {
  const query = koneksi("users")
    .update({ name: nama, nrp: nrp, uuid: uuid})
    .where({ id: id });

  return query;
};

export const delUser = (id) => {
  const query = koneksi("users").del().where({ id: id });
  return query;
};
