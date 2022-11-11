const app = require("./app");
const mongoose = require("mongoose");

require("dotenv").config();

const PORT = process.env.PORT || 5000;

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGOOSE_URI)
  .catch((err) => console.error(err))
  .then(app.listen(PORT, console.log(`Listening on port ${PORT}`)));
