import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class MainMenu extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 className="text-center">DigitalShop</h1>
                <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-around">
                    <NavLink className="btn btn-dark" exact to="/" activeClassName="active">Accueil</NavLink>
                    <NavLink className="btn btn-dark" exact to="/products" activeClassName="active">Liste des
                        produits</NavLink>
                    <NavLink className="btn btn-dark" exact to="/newProduct" activeClassName="active">Nouveau
                        produit</NavLink>
                </nav>
            </React.Fragment>
        );
    }
}

export default MainMenu;