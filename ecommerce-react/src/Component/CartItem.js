import React, {Component} from 'react';

class CartItem extends Component {
    render() {
        return (
            <div>
                {this.props.product.name}
            </div>
        );
    }
}

export default CartItem;