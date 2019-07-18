import React, {Component} from 'react';
import CartItem from "./CartItem";

class Cart extends Component {

    render() {
        const items = this.props.products.map(
            product => <CartItem key={product['@id']} product={product}
                                 addToCart={product => this.props.addToCart(product)}
                                 removeFromCart={product => this.props.removeFromCart(product)}/>
        );

        /*let total=0;
        for (let i=0;i<this.props.products.length;i++){
            total += this.props.products[i].price;
        }*/

        const total = this.props.products.reduce((accumulator, product) => accumulator + product.price * product.qte, 0);

    return(

<div className="text-center justify-content-center">
<h2 >Panier</h2>
<p>Montant total: {total}</p>
{items}
</div>
)
    ;
}
}

export default Cart;