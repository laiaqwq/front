import React, {Component} from 'react';
import Head from './Head/Head'
import Content from "./Content/Content";
import Sidebar from "./Sidebar/Sidebar";

class App extends Component {
    render() {
        return (
            <div>
                <Head/>
                <Sidebar/>
                <Content/>
            </div>
        );
    }
}

export default App;