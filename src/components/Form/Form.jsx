import React from "react";
import style from "./Form.module.scss";
class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			url: "",
			product_name: "",
			price: "",
			changeToSave: false
		};
	}

	reset = () => {
		this.setState({ url: "", product_name: "", price: "" });
	};

	componentDidUpdate(prevProps) {
		if (
			prevProps.current !== this.props.current &&
			this.props.current !== null
		) {
			this.setState({ changeToSave: true });
		}
	}
	render() {
		return (
			<form className={style.form}>
				<img
					src='https://english.metro.taipei/images/default.png'
					alt='deefault'
				/>
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
				<div className={style.btnDisplay}>
					<button onClick={this.reset} type='reset'>
						Cancel
					</button>
					{this.state.changeToSave ? (
						<button
							onClick={e => {
								e.preventDefault();
								this.setState({ changeToSave: false });
								this.props.update(
									this.props.current,
									this.state.product_name,
									this.state.price,
									this.state.url
								);
							}}
							type='submit'
						>
							Save Changes
						</button>
					) : (
						<button
							onClick={e => {
								e.preventDefault();

								this.props.create(
									this.state.product_name,
									this.state.price,
									this.state.url
								);
							}}
							type='submit'
						>
							Add to Inventory
						</button>
					)}{" "}
				</div>
			</form>
		);
	}
}

export default Form;
