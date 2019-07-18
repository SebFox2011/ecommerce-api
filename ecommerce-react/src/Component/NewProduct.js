import React, {Component} from 'react';

class NewProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            product: {
                name: "",
                category: "",
                price: 0,
                description: ""
            }
        };
    }

    //Appel à l'api
    componentDidMount() {
        fetch(process.env.REACT_APP_API + 'categories')
            .then(response => response.json())
            .then(data => this.setState({
                categories: data["hydra:member"]
            }));
    }

    handleChange(event) {
        let product = Object.assign({}, this.state.product);
        product[event.target.name] = event.target.value;
        this.setState({product: product});
    }

    handleSubmit(event) {
        event.preventDefault(); //annule l'action par défaut
        fetch(process.env.REACT_APP_API + 'products', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state.product)
        })
            .then(response => response.json())
            .then(data => console.log(data))
    }

    render() {
        const {product} = this.state;
        const categoryOptions = this.state.categories.map(
            category => <option key={category["@id"]} value={category["@id"]}>{category.label}</option>
        );

        return (
            <div className="text-left">
                <h1>Ajouter un produit</h1>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <p><input type="text" id="name" name="name" value={product.name} placeholder="Nom"
                              onChange={event => this.handleChange(event)}/></p>
                    <p><select id="category" name="category" value={product.category} placeholder="Categorie"
                               onChange={event => this.handleChange(event)}>
                        {categoryOptions}
                    </select></p>
                    <p><input type="number" id="price" name="price" value={product.price} placeholder="Prix"
                              onChange={event => this.handleChange(event)}/></p>
                    <p><textarea id="description" name="description" value={product.description}
                                 onChange={event => this.handleChange(event)}>Entrer la description</textarea></p>
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}

export default NewProduct;