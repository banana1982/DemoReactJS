import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.css';
import { Provider } from 'mobx-react';
//import * as stores from './stores/';
//import store from './stores/store';
//import {MobxRouter, RouterStore, startRouter} from 'mobx-router';
//import configRouter from './config/router';
import createBrowserHistory from 'history/createBrowserHistory';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import {Switch, Router, Route } from 'react-router';
import storeList from './stores';
import HomePage from './containers/HomePage';
import GirlDetail from './containers/DetailGirl';

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();

const stores = {
    ...storeList,
    routing: routingStore
};
const history = syncHistoryWithStore(browserHistory, routingStore);
//startRouter(configRouter,store);

/*ReactDOM.render(
    <Provider store={store}>
        <MobxRouter/>
    </Provider>
    ,
    document.getElementById('root'));
    */
ReactDOM.render(
    <Provider {...stores}>
        <Router history={history} basename={'/ticket'}>
            <Switch>
            <Route exact={true} path={`${process.env.PUBLIC_URL}/`} component={App}/>
            <Route path={`${process.env.PUBLIC_URL}/home`} component={HomePage}/>
            <Route path={`${process.env.PUBLIC_URL}/detail/:id`} component={GirlDetail}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
