import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { graphql, buildSchema } from "graphql";

import db from "./database";

const app = express();

const schema = buildSchema(`
  type Query {
      hello: String
      ping: String  
      pong: String
  }
`);

const root = {
  hello: () => {
    return "Hello world!";
  },
  ping: () => "ok!",
  pong: () => "okidoki!",
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
