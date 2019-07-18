import React, {Component} from 'react';

class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: null
        };
    }

    componentDidMount() {
        fetch(process.env.REACT_APP_API + 'products/' + this.props.match.params.id)
            .then(response => response.json())
            .then(data => this.setState({
                product: data
            }));
    }

    render() {
// = cont product = this.state.product, mais permet de mettre d'autres élément ex: {product,category}
        const {product} = this.state;
        if (product === null){
            return <div>Chargement en cours ...</div>
        }
        return (
            <div>
                <h1>{product.name}</h1>

            </div>
        );
    }
}

export default Product;