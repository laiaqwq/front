import React, {Component} from 'react';

class Head extends Component {
    render() {
        return (
                <header className="mdui-appbar mdui-appbar-fixed .mdui-appbar-with-toolbar">
                    <div className="mdui-toolbar mdui-color-theme">
                        <button mdui-drawer="{target: '#left-drawer'}" className="mdui-btn mdui-btn-icon mdui-ripple">
                            <i className="mdui-icon material-icons">menu</i>
                        </button>
                        <span className="mdui-typo-title">Title</span>
                        <div className="mdui-toolbar-spacer"></div>
                        <a href="/" className="mdui-btn mdui-btn-icon">
                            <i className="mdui-icon material-icons">search</i>
                        </a>
                        <a href="/" className="mdui-btn mdui-btn-icon">
                            <i className="mdui-icon material-icons">refresh</i>
                        </a>
                        <a href="/" className="mdui-btn mdui-btn-icon">
                            <i className="mdui-icon material-icons">more_vert</i>
                        </a>
                    </div>
                </header>
        );
    }
}

export default Head;
