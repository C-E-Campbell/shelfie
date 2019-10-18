import React from "react";
import style from "./Product.module.scss";
const Product = props => {
	return (
		<div className={style.products}>
			<h3>{props.img}</h3>
			<h3>{props.name}</h3>
			<h3>{props.price}</h3>
		</div>
	);
};

export default Product;
