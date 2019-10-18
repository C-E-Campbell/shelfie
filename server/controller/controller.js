module.exports = {
	getInventory: (req, res) => {
		const dbInstance = req.app.get("db");

		dbInstance
			.get_inventory()
			.then(products => res.status(200).send(products))
			.catch(err => {
				res.status(500).send({
					errorMessage:
						"Oops! Something went wrong. Our engineers have been informed!"
				});
				console.log(err);
			});
	},

	createProduct: (req, res) => {
		const dbInstance = req.app.get("db");
		const { name, price, img } = req.body;

		dbInstance.create_product([name, price, img]).then(products => {
			res.status(200).send(products);
		});
	}
};
