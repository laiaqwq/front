import React, {Component} from 'react';
import './GoogleSearch.css'

class GoogleSearch extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value:""
        };
    }
    
    onKeyup = (e) =>{
        if(e.keyCode === 13) {
            var q = this.state.value;
            console.log(q);
            q = q.replace(" ","+");
            window.location.href="https://www.google.com.hk/search?q="+q;
        }
    }
    
    render() {
        return (
            <div className="content">
                <div className="Search-block mdui-col-xs-12 mdui-col-sm-10 mdui-col-md-8">
                <div className="search-bar">
                    <i className="mdui-icon material-icons mdui-text-color-theme-icon">search</i>
                    <input
                        placeholder="Search something"
                        onKeyUp={this.onKeyup}
                        value={this.state.value}
                        onChange={(e) => {
                            this.setState({
                                value: e.target.value,
                            });
                        }}
                    />
                </div>
                </div>
            </div>
        );
    }
}

export default GoogleSearch;