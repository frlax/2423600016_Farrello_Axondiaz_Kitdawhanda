import knex from "knex";

const koneksi = knex({
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "",
    database: "todolist",
  },
});

// export const createTable = async () => {
//   try {
//     await koneksi.schema.createTable("user", (table) => {
//       table.increments("id").primary();
//       table.string("name", 255).notNullable();
//       table.string("nrp", 255).notNullable().unique();
//       // ... add more columns as needed
//     });
//     console.log('Table "users" created successfully!');
//   } catch (error) {
//     console.error("Error creating table:", error);
//   }
// };

export default koneksi;
