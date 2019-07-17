import React, {Component} from 'react';

class CartItem extends Component {
    render() {
        return (
            <div>
                {this.props.product.name}
                <p>Quantité: {this.props.product.qte}</p>
                <button onClick={() => this.props.addToCart(this.props.product)}>+</button>
            </div>
        );
    }
}

export default CartItem;