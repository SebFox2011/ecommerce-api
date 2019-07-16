import React, {Component} from 'react';

class ProductThumb extends Component {
    render() {
        return (
            <div>
                {this.props.product.name}
            </div>
        );
    }
}

export default ProductThumb;