/**
 * Created by thuatnv on 10/4/17.
 */

import {observable, action} from 'mobx';

const data_detail = [
    {
        id: '1',
        name: 'Hot 1',
        like: 10,
        isLiked: true,
        data_detail:[
            'https://s3img.vcdn.vn/123phim/2017/10/ngay-mai-mai-cuoi-tieu-pham-hai-keo-dai-2-tieng-15069085239146.jpg',
            'https://s3img.vcdn.vn/123phim/2017/10/review-the-lego-ninjago-movie-cho-nhung-ai-tung-uoc-mong-la-nguoi-hung-15068320170557.jpg',
            'https://s3img.vcdn.vn/123phim/2017/09/poppy-nu-phan-dien-gu-la-cua-kingsman-to-chuc-hoang-kim-15066829053359.jpg',
            'https://s3img.vcdn.vn/123phim/2017/09/top-tac-pham-chat-lu-cho-mot-phimanvaoanmua-thu-dong-nam-nay-15065660163160.jpg',
            'https://s3img.vcdn.vn/123phim/2017/09/nhung-ly-do-muon-thuong-cung-khong-thuong-noi-kingsman-the-golden-circle-15063087708415.jpg'
        ]
    }
]
class GirlDetailStore {
    @observable dataDetail = [];
    constructor (){
        this.dataDetail = data_detail;
    }
}

var girlDetailStore = new GirlDetailStore();
export default girlDetailStore;
export {girlDetailStore};