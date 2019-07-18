import React, {Component} from 'react';
import MainMenu from "./MainMenu";

class Header extends Component {
    render() {
        return (
            <div className="container">
                <div className="Row col-12">
                    <MainMenu/>
                </div>
            </div>
        );
    }
}

export default Header;