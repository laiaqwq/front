import React, {Component} from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

class Block extends Component {
    render() {
        return (
            <Link to="/Test">
            <li  className="mdui-list-item mdui-ripple">
                    <i className="mdui-list-item-icon mdui-icon material-icons">move_to_inbox</i>
                    <div className="mdui-list-item-content">Inbox</div>
            </li>
            </Link>
        );
    }
}

export default Block;