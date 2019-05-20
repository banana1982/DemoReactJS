/**
 * Created by thuatnv on 10/4/17.
 */
import {RouterStore} from 'mobx-router';
import AppStore from './app-store';

const store = {
    app: new AppStore(),
    router: new RouterStore()
};

export default store;