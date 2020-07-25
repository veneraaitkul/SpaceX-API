const express = require("express");
const {graphqlHTTP} = require("express-graphql");
const schema = require("./schema");

const app = express();

// in graphql-express we dont create different routes
// we'll create a schema file and put there all queries and mutations
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true, // client which allows us create queries in server
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
