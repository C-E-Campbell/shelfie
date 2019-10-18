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
			inventory_list: []
		};
		this.createProduct = this.createProduct.bind(this);
	}
	componentDidMount() {
		axios
			.get("/api/inventory")
			.then(response => this.setState({ inventory_list: response.data }));
	}

	createProduct(name, price, img) {
		axios
			.post("/api/product", { name: name, price: price, img: img })
			.then(response => this.setState({ inventory_list: response.data }));
	}

	render() {
		return (
			<div className='App'>
				<Header />
				<div className={"flex"}>
					<Dashboard list={this.state.inventory_list} />
					<Form create={this.createProduct} />
				</div>
			</div>
		);
	}
}

export default App;
