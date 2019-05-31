import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class CartPopup extends Component {
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
			<section id="cart-popup" className="">
				<div className="cart-title">
					<div className="title">my cart</div>
				</div>
				<div className="cart-items">
					<div className="item-container">
						<div className="item">
							<img
								src="https://i.postimg.cc/VNf88k7G/Nike-Air-Vapor-Max-Flyknit-2-OG-hd-1600-2.png"
								alt=""
							/>
							<div className="delete-btn">
								<div className="circle">X</div>
							</div>
						</div>
					</div>
					<div className="item-container">
						<div className="item">
							<img
								src="https://i.postimg.cc/VNf88k7G/Nike-Air-Vapor-Max-Flyknit-2-OG-hd-1600-2.png"
								alt=""
							/>
							<div className="delete-btn">
								<div className="circle">X</div>
							</div>
						</div>
					</div>
					<div className="item-container">
						<div className="item">
							<img
								src="https://i.postimg.cc/VNf88k7G/Nike-Air-Vapor-Max-Flyknit-2-OG-hd-1600-2.png"
								alt=""
							/>
							<div className="delete-btn">
								<div className="circle">X</div>
							</div>
						</div>
					</div>
					<div className="item-container">
						<div className="item">
							<img
								src="https://i.postimg.cc/VNf88k7G/Nike-Air-Vapor-Max-Flyknit-2-OG-hd-1600-2.png"
								alt=""
							/>
							<div className="delete-btn">
								<div className="circle">X</div>
							</div>
						</div>
					</div>
					<div className="item-container">
						<div className="item">
							<img
								src="https://i.postimg.cc/VNf88k7G/Nike-Air-Vapor-Max-Flyknit-2-OG-hd-1600-2.png"
								alt=""
							/>
							<div className="delete-btn">
								<div className="circle">X</div>
							</div>
						</div>
					</div>
					<div className="item-container">
						<div className="item">
							<img
								src="https://i.postimg.cc/VNf88k7G/Nike-Air-Vapor-Max-Flyknit-2-OG-hd-1600-2.png"
								alt=""
							/>
							<div className="delete-btn">
								<div className="circle">X</div>
							</div>
						</div>
					</div>
				</div>
				<div className="product-total">
					<div className="inside-containter">
						<div className="title">total</div>
						<div className="number">x4</div>
					</div>
				</div>
				<div className="price-total">
					<div className="inside-containter">
						<div className="title">total</div>
						<div className="number">$250</div>
					</div>
				</div>
				<div className="checkout">
					<div className="title">checkout</div>
					<span className="ti-shopping-cart" />
				</div>
			</section>
		);
	}
}

const cartPopupRoot = document.getElementById('cartPopupRoot');

ReactDOM.render(<CartPopup />, cartPopupRoot);
