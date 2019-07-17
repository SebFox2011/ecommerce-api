import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class MainMenu extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="active">Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/products" activeClassName="active">Produits</NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default MainMenu;