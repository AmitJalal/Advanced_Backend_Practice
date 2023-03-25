const express = require("express");

const { PORT } = require("./config/serverConfig");
const ApiRoutes = require("./routes");

const app = express();
app.use(express.json());

app.use("/api", ApiRoutes);
app.listen(PORT, async () => {
  console.log(`App is running at PORT: ${PORT}...`);
});
