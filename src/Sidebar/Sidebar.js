import React, {Component} from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div>
                <div className="mdui-drawer" id="left-drawer">
                <div className="mdui-list">
                    <div>item</div>
                    <div>item</div>
                    <div>item</div>
                </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;