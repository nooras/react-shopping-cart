import React from 'react';
// import data from './data.json';
import store from "./store"
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link } from "react-router-dom";  
import HomeScreen from './screens/HomeScreen';
import AdminScreen from './screens/AdminScreen';

class App extends React.Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     // products : data.products,
  //     cartItems : JSON.parse(localStorage.getItem("cartItems")) ? JSON.parse(localStorage.getItem("cartItems")) : [],
  //     // size : "",
  //     // sort : "",
  //   }
  // }

  // createOrder = (order) => {
  //   alert("Need to save order for" + order.name);
  // }

  // addToCart = (product) => {
  //   const cartItems = this.state.cartItems.slice();
  //   let alreadyInCart = false;
  //   cartItems.forEach(item => {
  //     if(item._id === product._id){
  //       item.count++;
  //       alreadyInCart = true;
  //     }
  //   });
  //   if(!alreadyInCart){
  //     cartItems.push({...product, count:1})
  //   }
  //   this.setState({cartItems});
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems));
  // }

  // removeFromCart = (product) =>{
  //   const cartItems = this.state.cartItems.slice();
  //   this.setState({cartItems : cartItems.filter(x=>x._id !== product._id),
  //   });
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems.filter(x=>x._id !== product._id)));
  // };

  // sortProducts = (event) =>{
  //   const sort = event.target.value;
  //   console.log(event.target.value);
  //   this.setState((state) => ({
  //     sort:sort,
  //     products : this.state.products
  //     .slice()
  //     .sort((a,b) => 
  //       sort === "lowest"?
  //       ((a.price > b.price) ? 1:-1):
  //       sort === "highest"?
  //       ((a.price < b.price) ? 1:-1):
  //       ((a._id < b._id) ? 1:-1)
  //     ),
  //   }))
  // }
  //Moved to action
  // filterProducts = (event) => {
  //   console.log(event.target.value);
  //   if(event.target.value === ""){
  //     this.setState({size : event.target.value, products:data.products});
  //   }else{
  //     this.setState({
  //       size: event.target.value,
  //       products:data.products.filter(
  //         (product) => product.availableSize.indexOf(event.target.value)>=0
  //         ),
  //     })
  //   }
    
  // }
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="grid-container">
            <header>
              <Link to="/">React Shopping Cart</Link>
              <Link to="/admin">Admin</Link>
            </header>
            <main>
              <Route path="/admin" component={AdminScreen} />
              <Route path="/" component={HomeScreen} exact/>
            </main>
            <footer>
              All right is reserved.
            </footer>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

// mongodb+srv://react-shopping-cart-test:123456123456@cluster0.3ahxt.mongodb.net/<dbname>?retryWrites=true&w=majority
