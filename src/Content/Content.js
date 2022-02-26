import React, {Component} from 'react';
import GoogleSearch from './Template/GoogleSearch.js';

class Content extends Component {
    render() {
        return (
            <div className="mdui-container">
                <GoogleSearch/>
            </div>
        );
    }
}

export default Content;