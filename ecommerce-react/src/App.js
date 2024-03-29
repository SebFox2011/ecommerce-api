import React, {Component} from 'react';
import './App.css';
import ProductList from "./Component/ProductList";
import Cart from "./Component/Cart"
import {Route,Switch} from "react-router-dom";
import Homepage from "./Component/Homepage";
import Product from "./Component/Product";
import Header from "./Component/header";
import Footer from "./Component/Footer";
import NotFound from "./Component/NotFound";
import NewProduct from "./Component/NewProduct";


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
        if (cartProduct.qte === 0) {
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
                <Header/>
                <Switch>
                    <Route path="/" exact component={Homepage}/>

                    <Route path="/products" exact render={() =>
                        <ProductList addToCart={cartProducts => this.addToCart(cartProducts)}/>}/>
                    <Route path="/newProduct" component={NewProduct}/>
                    <Route path="/products/:id"
                           render={routeProps => <Product {...routeProps} addToCart={product => this.addToCart(product)}/>}/>

                    <Route path="/404" component={NotFound}/>
                    <Route component={NotFound}/>
                </Switch>
                <Route path="/products" render={() =>
                    <Cart products={this.state.cartProducts}
                          addToCart={product => this.addToCart(product)}
                          removeFromCart={product => this.removeFromCart(product)}/>}/>

                <Footer/>
            </div>
        );
    }
}

export default App;
