import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Layout extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}
	clickedBtn = () => {};
	async test() {}
	render() {
		return (
			<a href="#" className="cart-link" id="cartbtn">
				cart<span>4</span>
			</a>
		);
	}
}

const cartBtn = document.getElementById('cartBtn');

ReactDOM.render(<Layout />, cartBtn);
