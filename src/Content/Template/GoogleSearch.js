import React, {Component} from 'react';
import './GoogleSearch.css'

class SearchTipItem extends Component {
    render() {
        return (
            <li className="mdui-list-item mdui-ripple">
                <a href={
                    "https://www.google.com.hk/search?q="+this.props.q.replace(" ","+")
                }>{this.props.q}</a>
            </li>
        );
    }
}

class SearchTips extends Component {
    render() {
        return (
            <div className="search-tip-list">
                {
                
                }
            </div>
        );
    }
}



class GoogleSearch extends Component {
    
    
    
    
    constructor(props) {
        super(props);
        window.setGoogleSearchTip = (data)=> {
            this.setState({tip:data})
        }
        this.state = {
            value:"",
            getTipUrl: "",
            tip:{}
        };
    }
    
    onKeyup = (e) =>{
        console.log("get")
        let q = this.state.value;
        this.setState({getTipUrl:"https://suggestqueries.google.com/complete/search?client=youtube&q="+q+"&jsonp=getTip"});
        if(e.keyCode === 13) {
             window.location.href= "https://www.google.com/search?q="+q.replace(" ","+");
        }
        //JSONP
        if (this.state.getTipUrl !== ""){
            let script = document.querySelector('#script');
            if (script) {
                script.remove();
            }
            script = document.createElement('script');
            script.id = 'script';
            script.src = this.state.getTipUrl;
            document.querySelector('body').appendChild(script);
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
                    
                    
                    <SearchTips>
                        <SearchTipItem/>
                    </SearchTips>
                </div>
            </div>
        );
    }
}

export default GoogleSearch;