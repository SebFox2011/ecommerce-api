import React, {Component} from 'react';

class ProductThumb extends Component {
    render() {

        const {product} = this.props;

        return (
            <div>
                <img src={"http://127.0.0.1:8000/uploads/" + product.picture} alt="Image du produit"/>
                {product.name}
                <p>Prix: {product.price} €</p>
            </div>
        );
    }
}

export default ProductThumb;