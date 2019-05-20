/**
 * Created by thuatnv on 10/4/17.
 */
import React from 'react';

import {Route} from 'mobx-router';
import HomePage from '../containers/homepage';
import GirlDetail from '../containers/detail-girl';

const configRouter = {
    home: new Route({
        path: '/',
        component: <HomePage/>
    }),
    detailGirl:new Route({
        path:'/detail/:id',
        component: <GirlDetail/>
    })
}

export default configRouter;

