import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class MainMenu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="active">Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/products" activeClassName="active">Liste des produits</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/newProduct" activeClassName="active">Nouveau produit</NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default MainMenu;