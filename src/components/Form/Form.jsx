import React from "react";
import style from "./Form.module.scss";
class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			url: "",
			product_name: "",
			price: null
		};
	}

	reset = () => {
		this.setState({ url: "", product_name: "", price: null });
	};

	render() {
		return (
			<form className={style.form}>
				<label htmlFor='url'>Image URL:</label>
				<input
					value={this.state.url}
					onChange={e => {
						this.setState({ url: e.target.value });
					}}
					id='url'
				/>
				<label htmlFor='name'>Product Name:</label>
				<input
					value={this.state.name}
					onChange={e => {
						this.setState({ product_name: e.target.value });
					}}
					id='name'
				/>
				<label htmlFor='price'>Price:</label>
				<input
					value={this.state.price}
					onChange={e => {
						this.setState({ price: e.target.value });
					}}
					id='price'
				/>
				<button onClick={this.reset} type='reset'>
					Cancel
				</button>
				<button type='submit'>Add to Inventory</button>
			</form>
		);
	}
}

export default Form;
