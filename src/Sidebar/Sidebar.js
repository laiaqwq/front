import React, {Component} from 'react';
import Block from "../Block/Block";
import {BrowserRouter} from "react-router-dom";

class Sidebar extends Component {
    render() {
        return (
            <div>
                <div className="mdui-drawer" id="left-drawer">
                <ul className="mdui-list">
                    <BrowserRouter>
                    <Block/>
                    <Block/>
                    <Block/>
                    </BrowserRouter>
                </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;