const app = require("./src/index");
const config = require("./src/config/config")

app.set("PORT", config.PORT_APP || 3000);

app.listen(app.get("PORT"), () => {
  console.log(`Server in port: ${app.get("PORT")}`);
});
