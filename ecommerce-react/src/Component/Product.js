import React, {Component} from 'react';
import {Redirect} from "react-router-dom";


class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: null,
            notFound:false
        };
    }

    componentDidMount() {
        fetch(process.env.REACT_APP_API + 'products/' + this.props.match.params.id)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if(data["@type"] === "hydra:Error" && data["hydra:description"] === "Not Found") {
                    this.setState({notFound:true});
                }
                else{
                    this.setState({notFound:false});
                }
                this.setState({ product: data });
            })
            .catch(error => console.log(error));
    }

    render() {
// = cont product = this.state.product, mais permet de mettre d'autres élément ex: {product,category}
        const {product} = this.state;
        if(this.state.notFound){
            return <Redirect to={"/404"}/>
        }
        if (product === null){
            return <div>Chargement en cours ...</div>
        }
        return (
            <div>
                <h1 className="text-primary">{product.name}</h1>
                <p>{product.description}</p>
                <button onClick={() => this.props.addToCart(product)}>Ajouter au panier</button>

            </div>
        );
    }
}

export default Product;