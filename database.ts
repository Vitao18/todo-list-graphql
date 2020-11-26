import pgp from "pg-promise";

const connection = {
  host: process.env.DB_HOST as string,
  port: Number(process.env.DB_PORT) as number,
  database: process.env.DB_NAME as string,
  password: process.env.DB_PASS as string,
  user: process.env.DB_USER as string,
  max: 2,
};

const db = pgp()(connection);

export default db;
