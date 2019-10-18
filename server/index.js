require("dotenv").config();
const express = require("express");
const app = express();
const massive = require("massive");
app.use(express.json());
//setup massive and connection string

const port = process.env.PORT || 8294;
app.listen(port, () => {
	console.log(`server listening on ${port}`);
});
