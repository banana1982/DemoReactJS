import React, {Component} from 'react';
import HomePage from "./containers/HomePage";
import { observer, inject } from 'mobx-react';

@inject('routing')
@observer
class App extends Component {
    render() {
        return (
            <HomePage/>
        );
    }
}

export default App;
