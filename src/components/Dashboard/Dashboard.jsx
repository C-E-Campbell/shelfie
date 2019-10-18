import React from "react";
import Product from "../Product/Product";
const Dashboard = props => {
	const mappedProducts = props.list.map((product, i) => {
		return (
			<Product
				key={product.product_id}
				id={product.product_id}
				name={product.name}
				img={product.img_url}
				price={product.price}
				delete={props.delete}
				edit={props.edit}
			/>
		);
	});
	return <div>{mappedProducts}</div>;
};

export default Dashboard;
