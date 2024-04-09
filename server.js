const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express();
app.use(cors())
const PORT = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use("/api", require("./routes/private.routes"))
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
