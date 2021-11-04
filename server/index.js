const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const { graphql } = require("graphql");
const schema = require("./schema");

const app = express();

app.use(cors());

app.use("/graphql", graphqlHTTP({ graphiql: true, schema }));

app.listen(4000, () => console.log("server started"));
