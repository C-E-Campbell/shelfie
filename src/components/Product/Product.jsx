import React from "react";
import style from "./Product.module.scss";
const Product = props => {
	return (
		<div className={style.products}>
			<img src={props.img} alt='product' />
			<div>
				<h3>{props.name}</h3>
				<h3>{props.price}</h3>
				<button onClick={() => props.delete(props.id)}>Delete</button>
				<button onClick={() => props.edit(props.id)}>Edit</button>
			</div>
		</div>
	);
};

export default Product;
