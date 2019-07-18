import React, {Component} from 'react';
import MainMenu from "./MainMenu";

class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="Row col-12">
                        <MainMenu/>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;