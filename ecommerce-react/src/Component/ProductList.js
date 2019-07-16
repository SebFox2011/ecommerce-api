import React, {Component} from 'react';
import ProductThumb from "./ProductThumb";

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state={
          products:[]
        };
    }

    //Appel à l'api
    componentDidMount() {
        fetch(process.env.REACT_APP_API + 'products')
            .then(response => response.json())
            .then(data => this.setState({products: data["hydra:member"]}))
    }

    render() {
        const productThumbs = this.state.products.map(product => <ProductThumb key={product.id} product={product}/>);

        return (
            <div className="Product-list">
                {productThumbs}
            </div>
        );
    }
}

export default ProductList;