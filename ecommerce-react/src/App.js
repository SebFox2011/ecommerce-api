import React, {Component} from 'react';
import './App.css';
import ProductList from "./Component/ProductList";
import Cart from "./Component/Cart"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartProducts: []
        };
    }

    addToCart(product) {
        this.setState({
            cartProducts: [product, ...this.state.cartProducts]
        });
    }

    render() {
        return (
            <div className="App">
                <ProductList addToCart={cartProducts =>this.addToCart(cartProducts)}/>
                <Cart products={this.state.cartProducts}/>
            </div>
        );
    }
}

export default App;
