import React, {Component} from 'react';
import CartItem from "./CartItem";

class Cart extends Component {

    render() {
        const items = this.props.products.map(
            product => <CartItem key={product['@id']} product={product}
                                 addToCart={product => this.props.addToCart(product)}
                                 removeFromCart={product => this.props.removeFromCart(product)}/>
        );

        return (
            <div>
                <h2>Panier</h2>
                {items}
            </div>
        );
    }
}

export default Cart;