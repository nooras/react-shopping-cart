import React, { Component } from 'react';
import formatCurrency from "../util";
import Fade from 'react-reveal/Fade';
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import {connect} from "react-redux";
import {fetchProducts} from '../actions/productActions' 

class Products extends Component{

    constructor(props) {
        super(props);
        this.state = {
          product: null,
        };
    }

    componentDidMount(){
      this.props.fetchProducts();
    }

    openModal = (product) => {
        this.setState({ product });
    };

    closeModal = () =>{
        this.setState({product:null});
    }

    render(){
        const { product } = this.state;
        return (
            <div>
                <Fade bottom cascade>
                  { 
                    !this.props.products ? (
                    <div>Loading</div>
                    ) :(
                      <ul className="products">
                          {this.props.products.map(products => (
                              <li key={products._id} >
                                  <div className="product">
                                      <a href={"#" + products._id}  onClick={() => this.openModal(products)}>
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
                    )

                  }
                
                </Fade>
                {product && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <Zoom>
              <button className="close-modal" onClick={this.closeModal}>
                x
              </button>
              <div className="product-details">
                <img src={product.image} alt={product.title}></img>
                <div className="product-details-description">
                  <p>
                    <strong>{product.title}</strong>
                  </p>
                  <p>{product.description}</p>
                  <p>
                    Avaiable Sizes:{" "}
                    {product.availableSize.map((x) => (
                      <span>
                        {" "}
                        <button className="button">{x}</button>
                      </span>
                    ))}
                  </p>
                  <div className="product-price">
                    <div>{formatCurrency(product.price)}</div>
                    <button
                      className="button primary"
                      onClick={() => {
                        this.props.addToCart(product);
                        this.closeModal();
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </Zoom>
          </Modal>
        )}
            </div>
        )
    }
}

export default connect((state)=>({ products:state.products.items }), {
  fetchProducts, 
})(Products);