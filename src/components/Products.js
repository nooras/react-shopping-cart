import React, { Component } from 'react';
import formatCurrency from "../util";

export default class Products extends Component{
    render(){
        return (
            <div>
                <ul className="products">
                    {this.props.products.map(products => (
                        <li key={products._id} >
                            <div className="product">
                                <a href={"#" + products._id}>
                                    <img src={products.image} alt={products.title}></img>
                                    <p>
                                        {products.title}
                                    </p>
                                </a>
                                <div className="product-price"> 
                                    <div>
                                        { formatCurrency(products.price)}
                                    </div>
                                    <button onClick={() => this.props.addToCart(products)} className="button primary">Add to cart</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}