import React from 'react';
import Filter from '../components/filter'
import Products from '../components/Products';
import Cart from '../components/Cart'


export default class HomeScreen extends React.Component {
    render(){
        return (
            <div>
                {" "}
                <div className="content">
                <div className="main">
                  {/* <Filter count={this.state.products.length}
                  size={this.state.size}
                  sort={this.state.sort}
                  filterProducts={this.filterProducts}
                  sortProducts={this.sortProducts}
                  ></Filter> */}
                  <Filter></Filter>
                  <Products />
                  {/* <Products addToCart={this.addToCart}/> */}
                  {/* <Products products={this.state.products} addToCart={this.addToCart}/> */}
                </div>
                <div className="sidebar">
                  {/* <Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart} createOrder={this.createOrder}/> */}
                  <Cart></Cart>
                </div>
              </div>
            </div>
        )
    }
}