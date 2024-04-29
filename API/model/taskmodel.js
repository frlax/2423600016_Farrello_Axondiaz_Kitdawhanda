import koneksi from "../dbconfig/dbconfig.js";

export const getAllTask = () => {
  const query = koneksi.select("*").from("todolists");

  return query;
};

export const addTask = (user_id, title, description) => {
  const query = koneksi
    .insert({ user_id: user_id, title: title, description: description })
    .into("todolists");

  return query;
};

export const getTaskById = (id) => {
  const query = koneksi.select("*").from("todolists").where({ id: id });

  return query;
};

export const getTaskByNrp = (userid) => {
  const query = koneksi.select("*").from("todolists").where({ user_id: userid });

  return query;
};

export const updModel = (id, user_id, title, description) => {
  const query = koneksi("todolists")
    .update({ user_id, title, description })
    .where({ id: id });
  return query;
};

export const delTask = (id) => {
  const query = koneksi("todolists").del().where({ id: id });
  return query;
};
