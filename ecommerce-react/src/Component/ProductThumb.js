import React, {Component} from 'react';
import "./ProductThumb.scss"
import {Link} from "react-router-dom";


class ProductThumb extends Component {
    render() {

        const {product} = this.props;
        const picture = (product.picture) ? product.picture : 'placeholder.png';
        const productId = /[^/]*$/.exec(product["@id"])[0];


        return (
            <div className='product-thumb text-center text-white mb-4 shadow-sm rounded bg-primary album'>
                <img src={process.env.REACT_APP_UPLOADS + '/' + picture} alt={product.name}/>
                <h3>{product.name}</h3>
                <p>Prix : {product.price} €</p>
                <p>Catégorie : {product.category.label}</p>
                <button onClick={() => this.props.addToCart(product)}>Ajouter au panier</button>
                <Link className="text-white" to={'/products/' + productId} >Afficher</Link>
            </div>
        );
    }
}

export default ProductThumb;