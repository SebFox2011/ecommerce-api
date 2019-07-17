import React, {Component} from 'react';
import ProductThumb from "./ProductThumb";
import "./ProductList.scss"
import ProductListFilter from "./ProductListFilter";

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state={
          products:[],
            visibleProducts:[]
        };
    }

    //Appel à l'api
    componentDidMount() {
        fetch(process.env.REACT_APP_API + 'products')
            .then(response => response.json())
            .then(data => this.setState({
                products: data["hydra:member"],
                visibleProducts: data["hydra:member"]
            }));
    }
    /*
    * Mettre à jour la liste des produits en fonction du filtre
    * */
    updateFilters (event) {

        const category = event.target.value;
        let products = this.state.products;

        if(category){
            products=products.filter(product => product.category['@id'] === category);
        }

        this.setState({
            visibleProducts : products
        });
    }

    render() {
        const productThumbs = this.state.visibleProducts.map(product => <ProductThumb key={product['@id']} product={product}/>);

        return (
            <div>
                <ProductListFilter onChange={event => this.updateFilters(event)}/>
                <div className="Product-list">
                    {productThumbs}
                </div>
            </div>
        );
    }
}

export default ProductList;