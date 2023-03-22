const express = require("express");
const app = express();
app.use(express.json());

const { PORT } = require("./config/serverConfig");

app.listen(PORT, async () => {
  console.log(`App is running at PORT: ${PORT}...`);
});
