require("dotenv").config();
const express = require("express");
const controller = require("./controller/controller");
const app = express();
const massive = require("massive");
app.use(express.json());

massive(process.env.CONNECTION_STRING)
	.then(dbInstance => {
		console.log("db is on");
		app.set("db", dbInstance);
	})
	.catch(err => console.log(err));

app.get("/api/inventory", controller.getAll);

const port = process.env.PORT || 8293;
app.listen(port, () => {
	console.log(`server listening on ${port}`);
});
