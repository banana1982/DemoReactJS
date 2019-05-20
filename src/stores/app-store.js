/**
 * Created by thuatnv on 10/4/17.
 *
 */
import {extendObservable, action} from 'mobx';

export default class AppStore {
    constructor() {
        extendObservable(this, {
            title: 'Hot Girl Rating',
        });
    }

    setTitle = action(title => {
        this.title = title;
    });
}

