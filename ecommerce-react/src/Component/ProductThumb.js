import React, {Component} from 'react';
import "./ProductThumb.scss"

class ProductThumb extends Component {
    render() {

        const {product} = this.props;

        return (
            <div className='product-thumb'>
                <img src={
                    (product.picture) ? process.env.REACT_APP_UPLOADS + product.picture : process.env.REACT_APP_UPLOADS + 'placeholder.png'}
                     alt="Image du produit"/>
                <h3>{product.name}</h3>
                <p>Prix: {product.price} €</p>
            </div>
        );
    }
}

export default ProductThumb;