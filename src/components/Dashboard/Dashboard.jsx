import React from "react";
import Product from "../Product/Product";
const Dashboard = props => {
	const mappedProducts = props.list.map((product, i) => {
		return (
			<Product
				key={product.product_id}
				name={product.name}
				img={product.image}
				price={product.price}
			/>
		);
	});
	return <div>{mappedProducts}</div>;
};

export default Dashboard;
