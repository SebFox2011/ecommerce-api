import React, {Component} from 'react';
import MainMenu from "./MainMenu";

class Header extends Component {
    render() {
        return (
            <header>
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <MainMenu/>

            </header>
        );
    }
}

export default Header;