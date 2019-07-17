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
        let cartProduct = this.state.cartProducts.find(p => p['@id'] === product['@id']);
        if (cartProduct) {
            product.qte++;
            this.setState({
                cartProducts: this.state.cartProducts.map(p => p['@id'] === cartProduct['@id'] ? cartProduct : p)
            });

        } else {
            product.qte = 1;
            this.setState({
                cartProducts: [product, ...this.state.cartProducts]
            });
        }
    }

    removeFromCart(product) {
        let cartProduct = this.state.cartProducts.find(p => p['@id'] === product['@id']);
        product.qte--;
        if (cartProduct.qte == 0) {
            this.setState({
                cartProducts: this.state.cartProducts.filter(p => p['@id'] !== cartProduct['@id'])
        });

        } else {
            this.setState({
                cartProducts: this.state.cartProducts.map(p => p['@id'] === cartProduct['@id'] ? cartProduct : p)
            });

        }
    }

    render() {
        return (
            <div className="App">
                <ProductList addToCart={cartProducts => this.addToCart(cartProducts)}/>
                <Cart products={this.state.cartProducts}
                      addToCart={product => this.addToCart(product)}
                      removeFromCart={product => this.removeFromCart(product)}
                />
            </div>
        );
    }
}

export default App;
