import React, {Component} from 'react';
import "./ProductThumb.scss"

class ProductThumb extends Component {
    render() {

        const {product} = this.props;
        const picture = (product.picture) ? product.picture : 'placeholder.png';

        return (
            <div className='product-thumb'>
                <img src={process.env.REACT_APP_UPLOADS + '/' + picture} alt={product.name}/>
                <h3>{product.name}</h3>
                <p>Prix : {product.price} €</p>
                <p>Catégorie : {product.category.label}</p>
                <button onClick={() => this.props.addToCart(product)}>Ajouter au panier</button>
            </div>
        );
    }
}

export default ProductThumb;