import React, {Component} from 'react';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state={
          products:[]
        };
    }

    //Appel à l'api
    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/products')
            .then(response => response.json())
            .then(data => this.setState({products: data["hydra:member"]}))
    }

    render() {
        return (
            <div className="Product-list">
                
            </div>
        );
    }
}

export default ProductList;