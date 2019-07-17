import React, {Component} from 'react';

class ProductListFilter extends Component {
    constructor(props) {
        super(props);
        this.state={
            categories:[]
        };
    }


    componentDidMount() {
        fetch(process.env.REACT_APP_API + 'categories')
            .then(response => response.json())
            .then(data => this.setState({categories: data["hydra:member"]}))
    }

    render() {
        const categoryOptions = this.state.categories.map(
            category => <option value={category['@id']}>{category.label}</option>
            );
        return (
            <form>
                <select onChange={event => this.props.onChange(event)}>
                    <option value="">Toutes les catégories</option>
                    {categoryOptions}
                </select>
                <input type="submit"/>
            </form>
        );
    }
}

export default ProductListFilter;