import React from "react";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";
import "./App.css";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inventory_list: [
				{
					name: "test product 1",
					price: 34,
					image: "no image availible"
				},
				{
					name: "test product 2",
					price: 52,
					image: "no image availible"
				},
				{
					name: "test product 3",
					price: 188,
					image: "no image availible"
				}
			]
		};
	}
	render() {
		return (
			<div className='App'>
				<Header />
				<div className={"flex"}>
					<Dashboard list={this.state.inventory_list} />
					<Form />
				</div>
			</div>
		);
	}
}

export default App;
