require("dotenv").config();
const express = require("express");
const controller = require("./controller/controller");
const app = express();
const massive = require("massive");
app.use(express.json());

massive(process.env.CONNECTION_STRING)
	.then(dbInstance => {
		app.set("db", dbInstance);
		console.log("database is on");
	})
	.catch(err => console.log(err));

app.get("/api/inventory", controller.getInventory);

app.post("/api/product", controller.createProduct);

app.delete("/api/product/:id", controller.deleteProduct);

app.put("/api/product/:id", controller.updateProduct);

const port = process.env.PORT || 8293;
app.listen(port, () => {
	console.log(`server listening on ${port}`);
});
