import React, {Component} from 'react';

class Head extends Component {
    render() {
        return (
            <div>
                <div className="mdui-appbar">
                    <div className="mdui-toolbar mdui-color-theme">
                        <a href="/" className="mdui-btn mdui-btn-icon">
                            <i className="mdui-icon material-icons">menu</i>
                        </a>
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
                </div>
            </div>
        );
    }
}

export default Head;
