/**
 * Created by thuatnv on 10/9/17.
 */
import queryString from "query-string";
import axios from "axios";

async function getDataGirls({ page = 1 } = {}) {
    let objectQuery = {
        page: page,
    };
    const urlQuery = queryString.stringify(objectQuery);
    const apiUrl = `http://apigetdata.getsandbox.com/showgirl?${urlQuery}`;
    const result = await axios.get(apiUrl);
    if(result.status === 200)
    {
        return result.data;
    }
    return null;
}

async function getApi({url = '', objectQuery = {}} = {}) {
    try {
        const urlQuery = queryString.stringify(objectQuery);
        const apiUrl = url + urlQuery ;
        let result = await axios.get(apiUrl);
        if(result.status === 200)
        {
            return result.data;
        }
        return null;
    } catch (err){
        console.log(err);
    }
}

export default {
    getDataGirls,
    getApi
}