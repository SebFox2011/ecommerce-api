import React, {Component} from 'react';

class CartItem extends Component {
    render() {
        return (
            <div>
                {this.props.product.name}
                <p>Quantité: {this.props.product.qte}</p>
            </div>
        );
    }
}

export default CartItem;