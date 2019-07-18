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
            },
            success:false
        };
    }

    //Appel à l'api
    componentDidMount() {
        fetch(process.env.REACT_APP_API + 'categories')
            .then(response => response.json())
            .then(data => this.setState({
                categories: data["hydra:member"],
                product: {
                    ...this.state.product,// reprend le produit déjà présent dans le state avec le spread operator
                    category: data["hydra:member"][0]['@id']//ajouter ou modifier la clé "category"
                }
            }));
    }

    handleChange(event) {
        let product = Object.assign({}, this.state.product);//Crée une copie de l'objet
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
            .then(data => {
                this.setState({success: true});
                setTimeout(() => this.setState({success: false}), 3000);
                this.setState({
                    product: {
                        name: "",
                        category: "",
                        price: 0,
                        description: ""
                    }
                })

            });
    }

    render() {
        const {product} = this.state;
        const categoryOptions = this.state.categories.map(
            category => <option key={category["@id"]} value={category["@id"]}>{category.label}</option>
        );

        const alert = (this.state.success) ?
            <p className="alert alert-primary" role="alert">Produit ajouté avec succes !</p> : null

        return (
            <div className="container text-center">
                <h1>Ajouter un produit</h1>
                {alert}
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