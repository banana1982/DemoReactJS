/**
 * Created by thuatnv on 10/3/17.
 */

import {observable, action} from 'mobx';
import getDataGirls from '../api/getDataGirls';

const data_girl = [
    {
        id: '1',
        name: 'Hot 1',
        link: 'https://s3img.vcdn.vn/123phim/2017/10/ngay-mai-mai-cuoi-tieu-pham-hai-keo-dai-2-tieng-15069085239146.jpg',
        like: 10,
        isLiked: true
    },
    {
        id: '2',
        name: 'Hot 2',
        link: 'https://s3img.vcdn.vn/123phim/2017/10/review-the-lego-ninjago-movie-cho-nhung-ai-tung-uoc-mong-la-nguoi-hung-15068320170557.jpg',
        like: 13
    },
    {
        id: '3',
        name: 'Hot 3',
        link: 'https://s3img.vcdn.vn/123phim/2017/09/poppy-nu-phan-dien-gu-la-cua-kingsman-to-chuc-hoang-kim-15066829053359.jpg',
        like: 20,
        isLiked: true
    },
    {
        id: '4',
        name: 'Hot 4',
        link: 'https://s3img.vcdn.vn/123phim/2017/09/top-tac-pham-chat-lu-cho-mot-phimanvaoanmua-thu-dong-nam-nay-15065660163160.jpg',
        like: 1
    },
    {
        id: '5',
        name: 'Hot 5',
        link: 'https://s3img.vcdn.vn/123phim/2017/09/nhung-ly-do-muon-thuong-cung-khong-thuong-noi-kingsman-the-golden-circle-15063087708415.jpg',
        like: 0
    },
    {
        id: '6',
        name: 'Hot 1',
        link: 'https://s3img.vcdn.vn/123phim/2017/10/ngay-mai-mai-cuoi-tieu-pham-hai-keo-dai-2-tieng-15069085239146.jpg',
        like: 10,
        isLiked: true
    },
    {
        id: '7',
        name: 'Hot 2',
        link: 'https://s3img.vcdn.vn/123phim/2017/10/review-the-lego-ninjago-movie-cho-nhung-ai-tung-uoc-mong-la-nguoi-hung-15068320170557.jpg',
        like: 13
    },
    {
        id: '8',
        name: 'Hot 3',
        link: 'https://s3img.vcdn.vn/123phim/2017/09/poppy-nu-phan-dien-gu-la-cua-kingsman-to-chuc-hoang-kim-15066829053359.jpg',
        like: 20,
        isLiked: true
    },
    {
        id: '9',
        name: 'Hot 4',
        link: 'https://s3img.vcdn.vn/123phim/2017/09/top-tac-pham-chat-lu-cho-mot-phimanvaoanmua-thu-dong-nam-nay-15065660163160.jpg',
        like: 1
    },
    {
        id: '10',
        name: 'Hot 5',
        link: 'https://s3img.vcdn.vn/123phim/2017/09/nhung-ly-do-muon-thuong-cung-khong-thuong-noi-kingsman-the-golden-circle-15063087708415.jpg',
        like: 0
    },
    {
        id: '11',
        name: 'Hot 4',
        link: 'https://s3img.vcdn.vn/123phim/2017/09/top-tac-pham-chat-lu-cho-mot-phimanvaoanmua-thu-dong-nam-nay-15065660163160.jpg',
        like: 1
    },
    {
        id: '12',
        name: 'Hot 5',
        link: 'https://s3img.vcdn.vn/123phim/2017/09/nhung-ly-do-muon-thuong-cung-khong-thuong-noi-kingsman-the-golden-circle-15063087708415.jpg',
        like: 0
    }
];

class DataGrilsStore
{
    @observable dataGirl = [];

    constructor (){
        this.dataGirl = data_girl;
    }

    @action async addDataToDataGirl() {
        const url = 'http://apigetdata.getsandbox.com/showgirl';
        let data_new = await getDataGirls.getApi({url});
        this.dataGirl.push(...data_new);
    }


}
var dataGrilsStore = new DataGrilsStore();


export default  dataGrilsStore;
export { dataGrilsStore };

