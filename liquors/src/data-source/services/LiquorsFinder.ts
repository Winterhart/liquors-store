import axios from 'axios'
import { QueryResult } from '../../domain/model/QueryResult';
import { QueryResultMapper } from '../../domain/adapters/QueryResultMapper';
import { async } from 'q';


export function getLiquors(textSearch: string)  {
    const requestURL = buildURI()  + textSearch;
    const adapter : QueryResultMapper = new QueryResultMapper();
    return axios.request({
        url: requestURL,
        method: 'get',
    });
}

export function buildURI(): string{
    const routeURL: string = "https://cloudplatform.coveo.com/rest/search?" +
     "access_token=" + process.env.REACT_APP_API_TOKEN + "&q=";
    return routeURL
}