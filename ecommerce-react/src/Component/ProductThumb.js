import React, {Component} from 'react';

class ProductThumb extends Component {
    render() {

        const {product} = this.props;

        return (
            <div>
                <img src={process.env.REACT_APP_UPLOADS + product.picture} alt="Image du produit"/>
                <h3>{product.name}</h3>
                <p>Prix: {product.price} €</p>
            </div>
        );
    }
}

export default ProductThumb;