import React from "react";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";
import "./App.css";
import axios from "axios";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inventory_list: [],
			current_product: null
		};
		this.createProduct = this.createProduct.bind(this);
		this.deleteProduct = this.deleteProduct.bind(this);
		this.editProduct = this.editProduct.bind(this);
		this.updateProduct = this.updateProduct.bind(this);
	}
	componentDidMount() {
		axios
			.get("/api/inventory")
			.then(response => this.setState({ inventory_list: response.data }));
	}

	createProduct(name, price, img) {
		axios
			.post("/api/product", { name: name, price: price, img_url: img })
			.then(response => this.setState({ inventory_list: response.data }));
	}

	deleteProduct(id) {
		axios
			.delete(`/api/product/${id}`)
			.then(response => this.setState({ inventory_list: response.data }));
	}

	editProduct(id) {
		this.setState({ current_product: id });
	}

	updateProduct(id, name, price, img_url) {
		axios
			.put(`/api/product/${id}`, { name, price, img_url })
			.then(response =>
				this.setState({ inventory_list: response.data, current_product: null })
			);
	}
	render() {
		return (
			<div className='App'>
				<Header />
				<div className={"flex"}>
					<Dashboard
						list={this.state.inventory_list}
						delete={this.deleteProduct}
						edit={this.editProduct}
					/>
					<Form
						create={this.createProduct}
						current={this.state.current_product}
						update={this.updateProduct}
					/>
				</div>
			</div>
		);
	}
}

export default App;
